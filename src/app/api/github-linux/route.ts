import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const bitlyLink = "https://bit.ly/qortal-hub-linux"; // Bitly link for Linux download
    // Step 1: Fetch the latest GitHub release data
    const githubResponse = await axios.get(
      "https://api.github.com/repos/Qortal/Qortal-Hub/releases/latest",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}` // GitHub API key
        }
      }
    );

    // Step 2: Extract the Linux `.AppImage` download URL
    const linuxDownload = githubResponse.data.assets.find((asset: any) =>
      asset.name.includes(".AppImage")
    )?.browser_download_url;

    if (!linuxDownload) {
      return NextResponse.json(
        { error: "Windows download link not found" },
        { status: 404 }
      );
    }

      // Step 35: Return the static Bitly link
      return NextResponse.json({
        tracking_url: bitlyLink, 
        github_url: linuxDownload // The updated GitHub `.AppImage` URL
      });
  } catch (error) {
    console.error("Error fetching or updating links:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
