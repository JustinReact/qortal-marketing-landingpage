import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const bitlyLink = "https://bit.ly/qortal-hub-windows"; // Bitly link for Windows download
    // Step 1: Fetch the latest GitHub release data
    const githubResponse = await axios.get(
      "https://api.github.com/repos/Qortal/Qortal-Hub/releases/latest",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}` // GitHub API key
        }
      }
    );

    // Step 2: Extract the Windows `.exe` download URL
    const windowsDownload = githubResponse.data.assets.find((asset: any) =>
      asset.name.includes(".exe")
    )?.browser_download_url;

    if (!windowsDownload) {
      return NextResponse.json(
        { error: "Windows download link not found" },
        { status: 404 }
      );
    }

    // Step 3: Return the static Bitly link
    return NextResponse.json({
      tracking_url: bitlyLink,
      github_url: windowsDownload // The updated GitHub `.exe` URL
    });
  } catch (error) {
    console.error("Error fetching or updating links:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
