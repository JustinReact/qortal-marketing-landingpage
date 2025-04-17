"use client";
import React, { useState } from "react";
import {
  AndroidIcon,
  AppleLogo,
  ChromeStoreLogo,
  Container,
  DownloadCard,
  DownloadCol,
  DownloadContainer,
  DownloadCoreRow,
  DownloadNowText,
  DownloadsCoreGrid,
  DownloadsTitle,
  DownloadSubCol,
  DownloadsUIGrid,
  DownloadText,
  DownloadUIRow,
  IPhoneRow,
  MainCol,
  MainRow,
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
import { UAParser } from "ua-parser-js";

const Downloads = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const parser = new UAParser();

  const result = parser.getResult();

  const isIOS = result.os.name === "iOS"; // Covers both iPhones & iPads

  const [openSupportModal, setOpenSupportModal] = useState<boolean>(false);

  // UI Downloads

  const androidDownload = () => {
    const link = document.createElement("a");
    link.href = "https://link.qortal.dev/go";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpenSupportModal(true);
  };

  const chromeWebStoreRedirect = () => {
    setOpenSupportModal(true);
    window.open("https://link.qortal.dev/extension", "_blank");
  };

  const windowsDesktopDownload = async () => {
    const link = document.createElement("a");
    link.href = "https://link.qortal.dev/hub-windows";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpenSupportModal(true);
  };

  const linuxDesktopDownload = async () => {
    const link = document.createElement("a");
    link.href = "https://link.qortal.dev/hub-linux";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpenSupportModal(true);
  };

  const macDesktopDownload = async () => {
    const link = document.createElement("a");
    link.href = "https://link.qortal.dev/hub-mac";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpenSupportModal(true);
  };

  // Core Downloads

  const coreWindowsDownload = async () => {
    const link = document.createElement("a");
    link.href = "https://link.qortal.dev/windows-core";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpenSupportModal(true);
  };

  const coreLinuxDownload = async () => {
    const link = document.createElement("a");
    link.href = "https://link.qortal.dev/linux-core";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpenSupportModal(true);
  };

  const coreMacDownload = async () => {
    const link = document.createElement("a");
    link.href = "https://link.qortal.dev/mac-core";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpenSupportModal(true);
  };

  const iOSRedirect = () => {
    window.open("https://link.qortal.dev/ios-go", "_blank");
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
        damping: 15
      }
    },
    closed: {
      opacity: 0,
      y: "100%", // Moves the modal off-screen below
      transition: {
        duration: 0.3 // Faster closing animation
      }
    }
  };

  return (
    <Container>
      <AnimatePresence>
        {openSupportModal && (
          <motion.div
            animate={"opened"}
            initial={"closed"}
            exit={{ opacity: 0 }}
            variants={
              isMobile ? supportModalVariantsMobile : supportModalVariants
            }
            style={{
              position: "fixed",
              bottom: "0px",
              left: "0",
              right: "0",
              width: "100%",
              height: "auto",
              zIndex: 5,
              backgroundColor: "transparent"
            }}
          >
            <SupportModal
              setCloseSupportModal={() => setOpenSupportModal(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <DownloadsTitle>DOWNLOADS</DownloadsTitle>
      <MainRow>
        <MainCol>
          <DownloadText>
            <strong>Qortal UI</strong> For:
          </DownloadText>
          {isIOS ? (
            <IPhoneRow>
              <DownloadCol style={{ minWidth: "300px" }}>
                <DownloadCard
                  role="button"
                  aria-label="Redirect to the iOS Hosted Web App for Qortal Go"
                  tabIndex={0}
                  onClick={() => {
                    ReactGA.event({
                      category: "User",
                      action: "Clicked iOS Redirect Button",
                      label: "Clicked iOS Redirect Button"
                    });
                    iOSRedirect();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      ReactGA.event({
                        category: "User",
                        action: "Clicked iOS Redirect Button",
                        label: "Clicked iOS Redirect Button"
                      });
                      iOSRedirect();
                    }
                  }}
                >
                  <AppleLogo color={"#0177DB"} width={"45"} height={"45"} />
                </DownloadCard>
              </DownloadCol>
            </IPhoneRow>
          ) : isMobile ? (
            <IPhoneRow>
              <DownloadCol style={{ minWidth: "300px" }}>
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
                  <AndroidIcon width={"40"} height={"70"} color={"#a4c639"} />
                </DownloadCard>
              </DownloadCol>
            </IPhoneRow>
          ) : (
            <DownloadContainer>
              <DownloadUIRow>
                <DownloadsUIGrid>
                  <DownloadCol>
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
                    </DownloadCard>
                  </DownloadCol>
                  <DownloadCol>
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
                    </DownloadCard>
                  </DownloadCol>
                  <DownloadCol className="mac-col">
                    <DownloadCard
                      className="mac-card"
                      aria-label="Download the Mac Desktop version of Qortal"
                      tabIndex={0}
                      onClick={() => {
                        ReactGA.event({
                          category: "User",
                          action: "Clicked Mac Desktop Download Button",
                          label: "Clicked Mac Desktop Download Button"
                        });
                        macDesktopDownload();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          ReactGA.event({
                            category: "User",
                            action: "Clicked Mac Desktop Download Button",
                            label: "Clicked Mac Desktop Download Button"
                          });
                          macDesktopDownload();
                        }
                      }}
                    >
                      <AppleLogo color={"#0177DB"} width={"50"} height={"50"} />
                    </DownloadCard>
                  </DownloadCol>
                  <DownloadCol>
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
                    </DownloadCard>
                  </DownloadCol>
                  <DownloadCol>
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
                      <ChromeStoreLogo
                        width="45"
                        height="45"
                        color="transparent"
                      />
                    </DownloadCard>
                  </DownloadCol>
                </DownloadsUIGrid>
              </DownloadUIRow>
              <DownloadCoreRow>
                <DownloadSubCol>
                  <DownloadText style={{ marginTop: 0 }}>
                    <strong>Qortal Core</strong> For:
                  </DownloadText>
                  <DownloadsCoreGrid>
                    <DownloadCol>
                      <DownloadCard
                        aria-label="Download the Windows Core of Qortal"
                        tabIndex={0}
                        onClick={() => {
                          ReactGA.event({
                            category: "User",
                            action: "Clicked Windows Core Download Button",
                            label: "Clicked Windows Core Download Button"
                          });
                          coreWindowsDownload();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            ReactGA.event({
                              category: "User",
                              action: "Clicked Windows Core Download Button",
                              label: "Clicked Windows Core Download Button"
                            });
                            coreWindowsDownload();
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
                      </DownloadCard>
                    </DownloadCol>
                    <DownloadCol className="mac-col">
                      <DownloadCard
                        className="mac-card"
                        aria-label="Download the Mac Core of Qortal"
                        tabIndex={0}
                        onClick={() => {
                          ReactGA.event({
                            category: "User",
                            action: "Clicked Mac Core Download Button",
                            label: "Clicked Mac Core Download Button"
                          });
                          coreMacDownload();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            ReactGA.event({
                              category: "User",
                              action: "Clicked Mac Core Download Button",
                              label: "Clicked Mac Core Download Button"
                            });
                            coreMacDownload();
                          }
                        }}
                      >
                        <AppleLogo
                          color={"#0177DB"}
                          width={"50"}
                          height={"50"}
                        />
                      </DownloadCard>
                    </DownloadCol>
                    <DownloadCol>
                      <DownloadCard
                        aria-label="Download the Linux core of Qortal"
                        tabIndex={0}
                        onClick={() => {
                          ReactGA.event({
                            category: "User",
                            action: "Clicked Linux Core Download Button",
                            label: "Clicked Linux Core Download Button"
                          });
                          coreLinuxDownload();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            ReactGA.event({
                              category: "User",
                              action: "Clicked Linux Core Download Button",
                              label: "Clicked Linux Core Download Button"
                            });
                            coreLinuxDownload();
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
                      </DownloadCard>
                    </DownloadCol>
                  </DownloadsCoreGrid>
                </DownloadSubCol>
              </DownloadCoreRow>
            </DownloadContainer>
          )}
          {!isIOS && (
            <OtherVersionsCol>
              <OtherVersionsRow>
                <OtherVersionsText>
                  To download other versions of{" "}
                  <span style={{ fontWeight: "bold" }}>Qortal Hub</span> not
                  listed here, click
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
                    <span style={{ fontWeight: "bold" }}>Qortal Go</span> not
                    listed here, click
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
          )}
        </MainCol>
        <MainCol>
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
                src={"/images/Downloads/ThreadsScreenshot.png"}
                quality={100}
                width={1100}
                height={642}
                alt={"Qortal Screenshot 3"}
              />
            </ScreenshotCol>
          </ScreenshotContainer>
        </MainCol>
      </MainRow>
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
