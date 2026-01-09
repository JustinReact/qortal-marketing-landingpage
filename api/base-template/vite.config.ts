import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "", // Use relative paths for assets
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  define: {
    // Inject unique build ID at build time
    __BUILD_ID__: JSON.stringify(
      `qortal-build-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    )
  }
});
