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
    const linuxDownload = githubResponse.data.assets.find((asset: any) =>
      asset.name.includes(".AppImage")
    )?.browser_download_url;

    if (!linuxDownload) {
      return NextResponse.json(
        { error: "Windows download link not found" },
        { status: 404 }
      );
    }

    // Step 3: Update the Bitly link to point to the latest `.exe` URL
    const bitlyTrackingLink = "bit.ly/qortal-hub-linux"; // The static Bitly link (without "https://")

    const patchBody = {
      bitlink_id: bitlyTrackingLink, // Bitly link to update
      long_url: linuxDownload // New destination URL
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

    console.log("Bitly link updated:", updatedBitlyData);
    // Step 4: Return the static Bitly link
    return NextResponse.json({
      tracking_url: updatedBitlyData.bitlink.custom_bitlinks[0], // The updated Bitly link
      github_url: updatedBitlyData.bitlink.long_url // The updated GitHub `.exe` URL
    });
  } catch (error) {
    console.error("Error fetching or updating links:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
