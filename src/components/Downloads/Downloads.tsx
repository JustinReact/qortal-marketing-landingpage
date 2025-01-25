"use client";
import React, { useState } from "react";
import {
  AndroidIcon,
  ChromeStoreLogo,
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
  OtherVersionsCol,
  OtherVersionsRow,
  OtherVersionsText,
  Screenshot1,
  Screenshot2,
  Screenshot3,
  ScreenshotCol,
  ScreenshotContainer
} from "./Downloads-styles";
import Image from "next/image";
import ReactGA from "react-ga4";
import { useMediaQuery, useTheme } from "@mui/material";
import { SupportModal } from "../Common/Modal/SupportModal";
import { motion, AnimatePresence } from "framer-motion";

const Downloads = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openSupportModal, setOpenSupportModal] = useState<boolean>(false);

  const androidDownload = () => {
    setOpenSupportModal(true);
    window.open("https://link.qortal.dev/go", "_blank");
  };

  const chromeWebStoreRedirect = () => {
    setOpenSupportModal(true);
    window.open("https://link.qortal.dev/extension", "_blank");
  };

  const windowsDesktopDownload = async () => {
    setOpenSupportModal(true);
    window.open("https://link.qortal.dev/hub-windows", "_blank"); // Open the Short.io tracking link
  };

  const linuxDesktopDownload = async () => {
      setOpenSupportModal(true);
      window.open("https://link.qortal.dev/hub-linux", "_blank"); // Open the Short.io tracking link
  };

  const supportModalVariants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 95
      }
    },
    closed: {
      opacity: 0.2,
      x: 100,
      transition: {
        duration: 0.2
      }
    }
  };
  const supportModalVariantsMobile = {
    opened: {
      opacity: 1,
      y: "-50%", // Aligns with `top: "50%"` and centers the modal
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
    closed: {
      opacity: 0,
      y: "100%", // Moves the modal off-screen below
      transition: {
        duration: 0.3, // Faster closing animation
      },
    },
  };
  

  return (
    <Container>
    <AnimatePresence>
        {openSupportModal && (
          <motion.div
            animate={"opened"}
            initial={"closed"}
            exit={{ opacity: 0 }}
            variants={isMobile ? supportModalVariantsMobile : supportModalVariants}
            style={{
              position: "fixed",
              bottom: "0px",
              left: "0",
              right: "0",
              width: "100%",
              height: "auto",
              zIndex: 5,
              backgroundColor: "transparent",
            }}
          >
            <SupportModal setCloseSupportModal={() => setOpenSupportModal(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <DownloadsTitle>DOWNLOADS</DownloadsTitle>
      <DownloadsGrid>
        <DownloadCol>
          <DownloadText>
            Qortal <span style={{ fontWeight: "bold" }}>Go</span>
          </DownloadText>
          <DownloadCard
            role="button"
            aria-label="Redirect to the Android APK"
            tabIndex={0}
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked Android Download Button",
                label: "Clicked Android Download Button"
              });
              androidDownload();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Android Download Button",
                  label: "Clicked Android Download Button"
                });
                androidDownload();
              }
            }}
          >
            <AndroidIcon
              width={"40"}
              height={"70"}
              color={"#a4c639"}
            />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Android</DownloadText2>
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
              style={{ marginRight: "25px" }}
            />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Windows Desktop</DownloadText2>
            </DownloadTextCol>
          </DownloadCard>
        </DownloadCol>
        {/* <DownloadCol>
          <DownloadText>
            Qortal <span style={{ fontWeight: "bold" }}>Hub</span> Mac
          </DownloadText>
          <DownloadCard
            aria-label="Download the Mac Desktop version of Qortal"
            tabIndex={0}
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked Mac Desktop Download Button",
                label: "Clicked Mac Desktop Download Button"
              });
              linuxDesktopDownload();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Mac Desktop Download Button",
                  label: "Clicked Mac Desktop Download Button"
                });
                // linuxDesktopDownload();
              }
            }}
          >
            <AppleLogo color={"#000000"} width={"40"} height={"40"} />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Mac Desktop</DownloadText2>
            </DownloadTextCol>
          </DownloadCard>
        </DownloadCol> */}
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
              style={{ marginRight: "25px" }}
            />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Linux Desktop</DownloadText2>
            </DownloadTextCol>
          </DownloadCard>
        </DownloadCol>
        <DownloadCol>
          <DownloadText>
            Qortal <span style={{ fontWeight: "bold" }}>Extension</span>
          </DownloadText>
          <DownloadCard
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
            <ChromeStoreLogo width="39" height="39" color="transparent" />
            <DownloadTextCol>
              <DownloadText1>Available on</DownloadText1>
              <DownloadText2>Chrome Web Store</DownloadText2>
            </DownloadTextCol>
          </DownloadCard>
        </DownloadCol>
      </DownloadsGrid>
      <OtherVersionsCol>
        <OtherVersionsRow>
          <OtherVersionsText>
            To download other versions of{" "}
            <span style={{ fontWeight: "bold" }}>Qortal Hub</span> not listed
            here, click
            <a
              href="https://github.com/Qortal/Qortal-Hub/releases"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Qortal Hub Other Versions Link",
                  label: "Clicked Qortal Hub Other Versions Link"
                });
              }}
            >
              here
            </a>
          </OtherVersionsText>
        </OtherVersionsRow>
        <OtherVersionsRow>
          <OtherVersionsRow>
            <OtherVersionsText>
              To download other versions of{" "}
              <span style={{ fontWeight: "bold" }}>Qortal Go</span> not listed
              here, click
              <a
                href="https://github.com/Qortal/Qortal-Mobile/releases"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Qortal Go Other Versions Link",
                    label: "Clicked Qortal Go Other Versions Link"
                  });
                }}
              >
                here
              </a>
            </OtherVersionsText>
          </OtherVersionsRow>
        </OtherVersionsRow>
      </OtherVersionsCol>
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
            width={1920}
            height={1080}
            alt={"Qortal Screenshot 1"}
          />
        </ScreenshotCol>
        <ScreenshotCol item md={12} xs={12}>
          <Screenshot3
            src={"/images/Downloads/ThreadsScreenshot.webp"}
            quality={100}
            width={1100}
            height={642}
            alt={"Qortal Screenshot 3"}
          />
        </ScreenshotCol>
      </ScreenshotContainer>
      <DownloadNowText>
        <span style={{ color: theme.palette.customBlue.main }}>Install</span>{" "}
        now and
        <br /> start your{" "}
        <span style={{ color: theme.palette.customBlue.main }}>Journey</span>
      </DownloadNowText>
    </Container>
  );
};

export default Downloads;
