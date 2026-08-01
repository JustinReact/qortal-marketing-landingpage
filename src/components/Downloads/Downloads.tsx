"use client";
import React, { useEffect, useState } from "react";
import {
  AndroidIcon,
  AppleLogo,
  CommandLineModalContainer,
  CommandLineModalContent,
  CommandLineModalText,
  Container,
  DownloadCard,
  DownloadNowText,
  DownloadsContent,
  DownloadsCoreGrid,
  DownloadsGrid,
  DownloadsTitle,
  DownloadSection,
  DownloadSectionCore,
  DownloadSubText,
  DownloadText,
  DownloadTextCol,
  DownloadText1,
  FaqHint,
  FaqHintLink,
  OtherVersionsCol,
  OtherVersionsText,
  PlatformCardWrapper
} from "./Downloads-styles";
import Image from "next/image";
import ReactGA from "react-ga4";
import { useMediaQuery, useTheme } from "@mui/material";
import { SupportModal } from "../Common/Modal/SupportModal";
import { motion, AnimatePresence } from "framer-motion";
import { UAParser } from "ua-parser-js";
import { CommandLineSVG } from "../Common/Icons/CommandLineSVG";
import { CloseIcon } from "../Common/Modal/SupportModal-styles";
import { CheckmarkSVG } from "../Common/Icons/CheckmarkSVG";

const Downloads = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const parser = new UAParser();
  const result = parser.getResult();
  const isIOS = result.os.name === "iOS";

  const [openSupportModal, setOpenSupportModal] = useState<boolean>(false);
  const [openCommandLineModal, setOpenCommandLineModal] =
    useState<boolean>(false);

  const androidDownload = () => {
    const link = document.createElement("a");
    link.href = "https://link.qortal.dev/go";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpenSupportModal(true);
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

  const linuxCommandLineScript = async () => {
    try {
      await navigator.clipboard.writeText(
        "bash <(curl -fsSL https://link.qortal.dev/linux-script || wget -qO- https://link.qortal.dev/linux-script)"
      );
      setOpenSupportModal(true);
      setOpenCommandLineModal(true);
    } catch (err) {
      console.error("Failed to copy install script:", err);
    }
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
      transition: { type: "spring", stiffness: 95 }
    },
    closed: {
      opacity: 0.2,
      x: 100,
      transition: { duration: 0.2 }
    }
  };

  const commandLineModalVariants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 95 }
    },
    closed: {
      opacity: 0.2,
      x: -100,
      transition: { duration: 0.2 }
    }
  };

  const supportModalVariantsMobile = {
    opened: {
      opacity: 1,
      y: "-50%",
      transition: { type: "spring", stiffness: 120, damping: 15 }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (openCommandLineModal) {
        setOpenCommandLineModal(false);
      }
    }, 30000);
  }, [openCommandLineModal]);

  const renderPlatformCard = (
    label: string,
    icon: React.ReactNode,
    onClick: () => void,
    ariaLabel: string,
    className?: string
  ) => (
    <DownloadCard
      role="button"
      className={className}
      aria-label={ariaLabel}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
    >
      {icon}
      <DownloadText1>{label}</DownloadText1>
    </DownloadCard>
  );

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
        {openCommandLineModal && (
          <motion.div
            animate={"opened"}
            initial={"closed"}
            exit={{ opacity: 0 }}
            variants={commandLineModalVariants}
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
            <CommandLineModalContainer>
              <CloseIcon
                onClickFunc={() => setOpenCommandLineModal(false)}
                color={theme.palette.text.primary}
                height="25px"
                width="25px"
              />
              <CheckmarkSVG
                color={theme.palette.text.primary}
                height="50px"
                width="50px"
              />
              <CommandLineModalContent>
                <CommandLineModalText>
                  Copied script successfully!
                  <br />
                  You can now paste that into terminal and push ENTER.
                  <br />
                  <br />
                  This will: Download/Run the script once pasted in terminal.
                  <br />
                  <br />
                  The script will:
                  <ul
                    style={{
                      textAlign: "left",
                      margin: "8px 0",
                      paddingLeft: "24px"
                    }}
                  >
                    <li>
                      Download and setup Qortal Hub, Qortal Core, and automation
                    </li>
                    <li>Setup Qortal Icon theme</li>
                    <li>
                      Setup Qortal Launchers and put them in the menu if it
                      exists
                    </li>
                    <li>Use Qortal Icons on the launchers</li>
                    <li>Download and setup all dependencies</li>
                  </ul>
                </CommandLineModalText>
              </CommandLineModalContent>
            </CommandLineModalContainer>
          </motion.div>
        )}
      </AnimatePresence>

      <DownloadsTitle>
        {isIOS ? "Access Web App Now" : "DOWNLOADS"}
      </DownloadsTitle>
      {!isIOS && (
        <FaqHint>
          Having trouble installing?{" "}
          <FaqHintLink href="/faq#installation">Read our FAQ</FaqHintLink>
        </FaqHint>
      )}

      <DownloadsContent>
        <DownloadSection>
          <DownloadTextCol>
            <DownloadText>
              <strong>Qortal Hub</strong>
            </DownloadText>
            <DownloadSubText>
              Access Q-Apps, messaging, groups, wallets, publishing, and the
              Qortal network through one desktop experience.
              <br />
              <br />
              Use a Local Node for the full decentralized experience, or
              connect through a Public Node for quick access with some
              limitations.
            </DownloadSubText>
          </DownloadTextCol>

          {isIOS ? (
            <PlatformCardWrapper>
              {renderPlatformCard(
                "iPhone",
                <AppleLogo color={"#0177DB"} width={"45"} height={"45"} />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked iOS Redirect Button",
                    label: "Clicked iOS Redirect Button"
                  });
                  iOSRedirect();
                },
                "Redirect to the iOS Hosted Web App for Qortal Go"
              )}
            </PlatformCardWrapper>
          ) : isMobile ? (
            <PlatformCardWrapper>
              {renderPlatformCard(
                "Android",
                <AndroidIcon width={"40"} height={"40"} color={"#a4c639"} />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Android Download Button",
                    label: "Clicked Android Download Button"
                  });
                  androidDownload();
                },
                "Redirect to the Android APK"
              )}
            </PlatformCardWrapper>
          ) : (
            <DownloadsGrid>
              {renderPlatformCard(
                "Windows",
                <Image
                  src={"/images/Downloads/WindowsLogo.png"}
                  width={40}
                  height={40}
                  alt={"Windows Logo"}
                />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Windows Desktop Download Button",
                    label: "Clicked Windows Desktop Download Button"
                  });
                  windowsDesktopDownload();
                },
                "Download the Windows Desktop version of Qortal"
              )}
              {renderPlatformCard(
                "Mac",
                <AppleLogo color={"#0177DB"} width={"40"} height={"40"} />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Mac Desktop Download Button",
                    label: "Clicked Mac Desktop Download Button"
                  });
                  macDesktopDownload();
                },
                "Download the Mac Desktop version of Qortal",
                "mac-card"
              )}
              {renderPlatformCard(
                "Linux",
                <Image
                  src={"/images/Downloads/LinuxLogo.png"}
                  width={40}
                  height={40}
                  alt={"Linux Logo"}
                />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Linux Desktop Download Button",
                    label: "Clicked Linux Desktop Download Button"
                  });
                  linuxDesktopDownload();
                },
                "Download the Linux Desktop version of Qortal"
              )}
              {renderPlatformCard(
                "Android",
                <AndroidIcon width={"40"} height={"40"} color={"#a4c639"} />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Android Download Button",
                    label: "Clicked Android Download Button"
                  });
                  androidDownload();
                },
                "Redirect to the Android APK"
              )}
              {renderPlatformCard(
                "Linux (Script)",
                <CommandLineSVG width="40" height="40" color={"transparent"} />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Linux Command Line Script Copy Button",
                    label: "Clicked Linux Command Line Script Copy Button"
                  });
                  linuxCommandLineScript();
                },
                "Copy the Linux Desktop version of Qortal command line script"
              )}
            </DownloadsGrid>
          )}
        </DownloadSection>

        {!isIOS && !isMobile && (
          <DownloadSectionCore>
            <DownloadTextCol>
              <DownloadText>
                <strong>Qortal Core</strong> (Optional)
              </DownloadText>
              <DownloadSubText>
                Qortal Core runs a full node. This is optional and only needed if
                you want to support the network, mint QORT, or run infrastructure.
                It is recommended for those looking to fully participate in the
                Qortal network.
              </DownloadSubText>
            </DownloadTextCol>
            <DownloadsCoreGrid>
              {renderPlatformCard(
                "Windows",
                <Image
                  src={"/images/Downloads/WindowsLogo.png"}
                  width={40}
                  height={40}
                  alt={"Windows Logo"}
                />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Windows Core Download Button",
                    label: "Clicked Windows Core Download Button"
                  });
                  coreWindowsDownload();
                },
                "Download the Windows Core of Qortal"
              )}
              {renderPlatformCard(
                "Mac",
                <AppleLogo color={"#0177DB"} width={"40"} height={"40"} />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Mac Core Download Button",
                    label: "Clicked Mac Core Download Button"
                  });
                  coreMacDownload();
                },
                "Download the Mac Core of Qortal",
                "mac-card"
              )}
              {renderPlatformCard(
                "Linux",
                <Image
                  src={"/images/Downloads/LinuxLogo.png"}
                  width={40}
                  height={40}
                  alt={"Linux Logo"}
                />,
                () => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Linux Core Download Button",
                    label: "Clicked Linux Core Download Button"
                  });
                  coreLinuxDownload();
                },
                "Download the Linux core of Qortal"
              )}
            </DownloadsCoreGrid>
          </DownloadSectionCore>
        )}

        {!isIOS && (
          <OtherVersionsCol>
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
          </OtherVersionsCol>
        )}
      </DownloadsContent>

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
