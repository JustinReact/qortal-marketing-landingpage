import { Request, Response } from "express";
import * as fs from "fs-extra";
import * as path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { randomUUID } from "crypto";
import archiver from "archiver";
import { publishApp as publishToQortal } from "../services/qortalServices";

const execPromise = promisify(exec);

// Place temp and output dirs OUTSIDE the api directory to avoid triggering nodemon
const BASE_TEMPLATE_PATH = path.join(__dirname, "../../base-template");
const TEMP_DIR = path.join(__dirname, "../../../temp-builds"); // Project root level
const OUTPUT_DIR = path.join(__dirname, "../../../published-apps"); // Project root level

// Ensure directories exist
fs.ensureDirSync(TEMP_DIR);
fs.ensureDirSync(OUTPUT_DIR);

interface PublishRequest {
  appCode: string;
  identifier?: string; // Optional identifier for updates
}

export const publishApp = async (
  req: Request,
  res: Response
): Promise<void> => {
  const buildId = randomUUID();
  const tempBuildPath = path.join(TEMP_DIR, buildId);
  const distPath = path.join(tempBuildPath, "dist");
  const outputZipPath = path.join(OUTPUT_DIR, `${buildId}.zip`);

  try {
    const { appCode, identifier } = req.body as PublishRequest;

    if (!appCode || typeof appCode !== "string") {
      res.status(400).json({
        success: false,
        error: "App code is required"
      });
      return;
    }

    console.log(`[${buildId}] Starting build process...`);
    if (identifier) {
      console.log(
        `[${buildId}] Using existing identifier for update: ${identifier}`
      );
    }

    // Step 1: Copy base template to temp directory (excluding node_modules for now)
    console.log(`[${buildId}] Copying base template...`);
    await fs.copy(BASE_TEMPLATE_PATH, tempBuildPath, {
      filter: (src) => {
        // Don't copy node_modules initially to speed up the copy
        return !src.includes("node_modules");
      }
    });
    console.log(`[${buildId}] Base template copied successfully`);

    // Step 1b: Set up node_modules
    console.log(`[${buildId}] Setting up node_modules...`);
    const sourceNodeModules = path.join(BASE_TEMPLATE_PATH, "node_modules");
    const targetNodeModules = path.join(tempBuildPath, "node_modules");
    
    // Check if source node_modules exists
    const sourceExists = await fs.pathExists(sourceNodeModules);
    
    if (sourceExists) {
      // Try symlink first (works locally)
      try {
        await fs.ensureSymlink(sourceNodeModules, targetNodeModules);
        console.log(`[${buildId}] node_modules linked successfully`);
      } catch (symlinkError) {
        console.log(`[${buildId}] Symlink failed, copying node_modules instead...`);
        await fs.copy(sourceNodeModules, targetNodeModules);
        console.log(`[${buildId}] node_modules copied successfully`);
      }
    } else {
      // If node_modules doesn't exist, install dependencies
      console.log(`[${buildId}] node_modules not found, installing dependencies...`);
      await execPromise("npm install", {
        cwd: tempBuildPath,
        env: { ...process.env, NODE_ENV: "development" }, // Use development to install devDependencies (needed for vite)
        timeout: 300000 // 5 minutes timeout
      });
      console.log(`[${buildId}] Dependencies installed successfully`);
    }

    // Step 2: Replace App.tsx with user code
    console.log(`[${buildId}] Writing user App.tsx...`);
    const appTsxPath = path.join(tempBuildPath, "src", "App.tsx");
    await fs.writeFile(appTsxPath, appCode, "utf-8");

    // Step 3: Run build
    console.log(`[${buildId}] Running npm run build...`);
    const { stdout, stderr } = await execPromise("npm run build", {
      cwd: tempBuildPath,
      env: { ...process.env, NODE_ENV: "production" },
      timeout: 120000 // 2 minutes timeout
    });

    if (stderr && !stderr.includes("warn")) {
      console.error(`[${buildId}] Build stderr:`, stderr);
    }
    console.log(`[${buildId}] Build completed successfully`);

    // Step 4: Check if dist folder exists
    const distExists = await fs.pathExists(distPath);
    if (!distExists) {
      throw new Error("Build completed but dist folder not found");
    }

    // Step 5: Zip the dist folder
    console.log(`[${buildId}] Creating zip archive...`);
    await createZipArchive(distPath, outputZipPath);

    // Step 6: Publish to Qortal network
    console.log(`[${buildId}] Publishing to Qortal network...`);
    const qortalResponse = await publishToQortal(outputZipPath, identifier);

    // Step 7: Cleanup temp directory and zip file
    console.log(`[${buildId}] Cleaning up temp files...`);
    // await fs.remove(tempBuildPath);
    // await fs.remove(outputZipPath);

    // Return success response with Qortal data
    res.json({
      success: true,
      buildId,
      qortal: qortalResponse,
      message: "App published successfully to Qortal network!"
    });
  } catch (error: any) {
    console.error(`[${buildId}] Error during publish:`, error);

    // Cleanup on error
    try {
      await fs.remove(tempBuildPath);
      await fs.remove(outputZipPath);
    } catch (cleanupError) {
      console.error(`[${buildId}] Cleanup error:`, cleanupError);
    }

    res.status(500).json({
      success: false,
      error: error.message || "Failed to publish app",
      buildId
    });
  }
};

// Helper function to create zip archive
function createZipArchive(
  sourceDir: string,
  outputPath: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputPath);
    const archive = archiver("zip", {
      zlib: { level: 9 } // Maximum compression
    });

    output.on("close", () => {
      console.log(`Archive created: ${archive.pointer()} total bytes`);
      resolve();
    });

    archive.on("error", (err: Error) => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(sourceDir, false);
    archive.finalize();
  });
}

// Optional: Cleanup old published apps (call this periodically)
export const cleanupOldBuilds = async (maxAgeHours: number = 24) => {
  try {
    const files = await fs.readdir(OUTPUT_DIR);
    const now = Date.now();
    const maxAge = maxAgeHours * 60 * 60 * 1000;

    for (const file of files) {
      const filePath = path.join(OUTPUT_DIR, file);
      const stats = await fs.stat(filePath);
      const age = now - stats.mtimeMs;

      if (age > maxAge) {
        await fs.remove(filePath);
        console.log(`Cleaned up old build: ${file}`);
      }
    }
  } catch (error) {
    console.error("Error cleaning up old builds:", error);
  }
};
