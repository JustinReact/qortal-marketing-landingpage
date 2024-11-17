import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
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

    // Step 3: Check if the Bitly link is already the latest
    const bitlyTrackingLink = "bit.ly/qortal-hub-windows"; // The static Bitly link (without "https://")

    const bitlyExistingResponse = await fetch(
      `https://api-ssl.bitly.com/v4/custom_bitlinks/${bitlyTrackingLink}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`
        }
      }
    );

    if (!bitlyExistingResponse.ok) {
      const errorData = await bitlyExistingResponse.json();
      console.error("Error updating Bitly link:", errorData);
      return NextResponse.json(
        { error: "Failed to update Bitly link" },
        { status: 500 }
      );
    }

    const bitlyExistingData = await bitlyExistingResponse.json();
    const existingLink = bitlyExistingData.bitlink.long_url;

    if (existingLink !== windowsDownload) {
      // Step 4: Update the Bitly link to point to the latest `.exe` URL (if it has changed)
      const patchBody = {
        bitlink_id: bitlyTrackingLink, // Bitly link to update
        long_url: windowsDownload // New destination URL
      };

      const bitlyResponse = await fetch(
        `https://api-ssl.bitly.com/v4/custom_bitlinks/${bitlyTrackingLink}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`, // Bitly API token
            "Content-Type": "application/json"
          },
          body: JSON.stringify(patchBody)
        }
      );

      if (!bitlyResponse.ok) {
        const errorData = await bitlyResponse.json();
        console.error("Error updating Bitly link:", errorData);
        return NextResponse.json(
          { error: "Failed to update Bitly link" },
          { status: 500 }
        );
      }

      const updatedBitlyData = await bitlyResponse.json();

      // Step 5: Return the static Bitly link
      return NextResponse.json({
        tracking_url: updatedBitlyData.bitlink.custom_bitlinks[0], // The updated Bitly link
        github_url: updatedBitlyData.bitlink.long_url // The updated GitHub `.exe` URL
      });
    } else {
      return NextResponse.json({
        tracking_url: existingLink, // The existing Bitly link
        github_url: windowsDownload // The existing GitHub `.AppImage` URL
      });
    }
  } catch (error) {
    console.error("Error fetching or updating links:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
