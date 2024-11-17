"use client";
import React from "react";
import {
  Container,
  DownloadCard,
  DownloadCol,
  DownloadNowText,
  DownloadsGrid,
  DownloadsTitle,
  DownloadText,
  DownloadText1,
  DownloadText2,
  DownloadTextCol,
  Screenshot1,
  Screenshot2,
  Screenshot3,
  ScreenshotCol,
  ScreenshotContainer
} from "./Downloads-styles";
import { ChromeStoreSVG } from "../Common/Icons/ChromeStoreSVG";
import Image from "next/image";
import axios from "axios";
import ReactGA from "react-ga4";
import { useTheme } from "@mui/material";

const Downloads = () => {
  const theme = useTheme();

  const googlePlayRedirect = () => {
    // Change link to Bitly link once available
    window.open("https://play.google.com/store", "_blank");
  };

  const chromeWebStoreRedirect = () => {
    window.open("https://bit.ly/qortal-chrome-extension", "_blank");
  };

  const windowsDesktopDownload = async () => {
    try {
      const response = await fetch("/api/github-windows");
      const data = await response.json();
      console.log({ data });
      if (data.tracking_url) {
        window.open(data.tracking_url, "_blank"); // Open the Bitly tracking link
      } else {
        console.error("Tracking URL not available");
      }
    } catch (error) {
      console.error("Error downloading Windows Desktop version: ", error);
    }
  };

  const linuxDesktopDownload = async () => {
    try {
      const response = await fetch("/api/github-linux");
      const data = await response.json();
      if (data.tracking_url) {
        window.open(data.tracking_url, "_blank"); // Open the Bitly tracking link
      } else {
        console.error("Tracking URL not available");
      }
    } catch (error) {
      console.error("Error downloading Windows Desktop version: ", error);
    }
  };

  return (
    <Container>
      <DownloadsTitle>DOWNLOADS</DownloadsTitle>
      <DownloadsGrid>
        <DownloadCol>
          <DownloadText>
            Qortal <span style={{ fontWeight: "bold" }}>Go</span>
          </DownloadText>
          <DownloadCard
            role="button"
            aria-label="Redirect to the Google Play Store"
            tabIndex={0}
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked Google Play Download Button",
                label: "Clicked Google Play Download Button"
              });
              googlePlayRedirect();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Google Play Download Button",
                  label: "Clicked Google Play Download Button"
                });
                googlePlayRedirect();
              }
            }}
          >
            <Image
              src={"/images/Downloads/GooglePlayLogo.png"}
              width={40}
              height={40}
              alt={"Google Play Logo"}
            />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Google Play</DownloadText2>
            </DownloadTextCol>
          </DownloadCard>
        </DownloadCol>
        <DownloadCol>
          <DownloadText>
            Qortal <span style={{ fontWeight: "bold" }}>Extension</span>
          </DownloadText>
          <DownloadCard
            style={{
              backgroundColor:
                theme.palette.mode === "dark" ? "#56AEFF" : "#003E78"
            }}
            aria-label="Redirect to the Chrome Web Store"
            tabIndex={0}
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked Chrome Web Store Download Button",
                label: "Clicked Chrome Web Store Download Button"
              });
              chromeWebStoreRedirect();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Chrome Web Store Download Button",
                  label: "Clicked Chrome Web Store Download Button"
                });
                chromeWebStoreRedirect();
              }
            }}
          >
            <ChromeStoreSVG width="39" height="39" color="transparent" />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Chome Web Store</DownloadText2>
            </DownloadTextCol>
          </DownloadCard>
        </DownloadCol>
        <DownloadCol>
          <DownloadText>
            Qortal <span style={{ fontWeight: "bold" }}>Hub</span> Windows
          </DownloadText>
          <DownloadCard
            aria-label="Download the Windows Desktop version of Qortal"
            tabIndex={0}
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked Windows Desktop Download Button",
                label: "Clicked Windows Desktop Download Button"
              });
              windowsDesktopDownload();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Windows Desktop Download Button",
                  label: "Clicked Windows Desktop Download Button"
                });
                windowsDesktopDownload();
              }
            }}
          >
            <Image
              src={"/images/Downloads/WindowsLogo.png"}
              width={40}
              height={40}
              alt={"Windows Logo"}
            />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Windows Desktop</DownloadText2>
            </DownloadTextCol>
          </DownloadCard>
        </DownloadCol>
        <DownloadCol>
          <DownloadText>
            Qortal <span style={{ fontWeight: "bold" }}>Hub</span> Linux
          </DownloadText>
          <DownloadCard
            aria-label="Download the Linux Desktop version of Qortal"
            tabIndex={0}
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked Linux Desktop Download Button",
                label: "Clicked Linux Desktop Download Button"
              });
              linuxDesktopDownload();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Linux Desktop Download Button",
                  label: "Clicked Linux Desktop Download Button"
                });
                linuxDesktopDownload();
              }
            }}
          >
            <Image
              src={"/images/Downloads/LinuxLogo.png"}
              width={40}
              height={40}
              alt={"Linux Logo"}
            />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Linux Desktop</DownloadText2>
            </DownloadTextCol>
          </DownloadCard>
        </DownloadCol>
      </DownloadsGrid>
      <ScreenshotContainer container spacing={4}>
        <ScreenshotCol item md={3} xs={12}>
          <Screenshot2
            src={"/images/Downloads/TrifectaScreenshot2.png"}
            quality={100}
            width={386}
            height={803}
            alt={"Qortal Screenshot 2"}
          />
        </ScreenshotCol>
        <ScreenshotCol item md={9} xs={12}>
          <Screenshot1
            src={"/images/Downloads/TrifectaScreenshot1.png"}
            quality={100}
            width={1100}
            height={642}
            alt={"Qortal Screenshot 1"}
          />
        </ScreenshotCol>
        <ScreenshotCol item md={12} xs={12}>
          <Screenshot3
            src={"/images/Downloads/TrifectaScreenshot3.png"}
            quality={100}
            width={1100}
            height={642}
            alt={"Qortal Screenshot 3"}
          />
        </ScreenshotCol>
      </ScreenshotContainer>
      <DownloadNowText>
        <span style={{ color: "#0085FF" }}>Install</span> now and
        <br /> start your <span style={{ color: "#0085FF" }}>Journey</span>
      </DownloadNowText>
    </Container>
  );
};

export default Downloads;
