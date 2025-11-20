"use client";

import * as React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Tabs,
  Tab,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Chip
} from "@mui/material";
import WindowsIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";
import TerminalIcon from "@mui/icons-material/Terminal";
import { ButtonOnBoarding, ButtonTextOnBoarding } from "./Onboarding-styles";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export type OS = "windows" | "mac" | "linux";
type TutorialMode = "text" | "video";

const windowsDesktopDownload = async () => {
  const link = document.createElement("a");
  link.href = "https://link.qortal.dev/hub-windows";
  link.download = "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const linuxDesktopDownload = async () => {
  await navigator.clipboard.writeText(
    "bash <(curl -fsSL https://qortal-hub-setup-linux.qortal.org || wget -qO- https://qortal-hub-setup-linux.qortal.org)"
  );
};

const macDesktopDownload = async () => {
  const link = document.createElement("a");
  link.href = "https://link.qortal.dev/hub-mac";
  link.download = "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadRender = ({ download, type }: any) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <Button
      startIcon={type === "linux" ? <ContentCopyIcon /> : <DownloadIcon />}
      variant="outlined"
      size="small"
      onClick={() => {
        download();
        if (type === "linux") {
          setCopied(true);
        }
      }}
    >
      {copied ? "Copied" : type === "linux" ? "Copy" : "Download"}
    </Button>
  );
};

const tutorialData: Record<
  OS,
  {
    textSteps: {
      label: string;
      description: string;
      imageSrc?: string;
      render?: React.JSX.Element;
    }[];
    videoUrl: string;
  }
> = {
  windows: {
    textSteps: [
      {
        label: "Download the installer",
        description: "Click the download button below to save the .exe file.",
        render: <DownloadRender download={windowsDesktopDownload} type="win" />,
        imageSrc: "/images/Onboarding/InstallQortalHub/windows/install-hub.webp"
      },
      {
        label: "When ready, go to downloads and click installer.",
        description: "",
        imageSrc: "/images/Onboarding/InstallQortalHub/windows/click-exe.webp"
      },
      {
        label: "Allow changes to your device, click yes.",
        description: "",
        imageSrc: "/images/Onboarding/InstallQortalHub/windows/permission.webp"
      },
      {
        label: "Choose install location",
        description:
          "Choose install location, don't change unless you are doing something advanced.",
        imageSrc: "/images/Onboarding/InstallQortalHub/windows/location.webp"
      },
      {
        label: "Installing, wait a minute.",
        description: "",
        imageSrc: "/images/Onboarding/InstallQortalHub/windows/installing.webp"
      },
      {
        label: "Complete Qortal setup",
        description:
          "Complete Qortal setup, check Run Qortal Hub, click Finish. Qortal Hub will appear.",
        imageSrc: "/images/Onboarding/InstallQortalHub/windows/run.webp"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/T6iycBd8xCw"
  },
  mac: {
    textSteps: [
      {
        label: "Download the .dmg",
        description: "Click the download button below to save the .dmg file.",
        render: <DownloadRender download={macDesktopDownload} type="mac" />
      },
      {
        label: "Open and drag to Applications",
        description:
          "Open the .dmg and drag the Qortal Hub icon into your Applications folder."
      },
      {
        label: "Allow app to run",
        description:
          "On first launch you may need to allow Qortal Hub in System Settings → Privacy & Security."
      }
    ],
    videoUrl: "https://www.youtube.com/embed/YYYYYYYYYYY"
  },
  linux: {
    textSteps: [
      {
        label: "Install Qortal Hub",
        description:
          "Click the copy button below to copy the terminal command.",
        render: <DownloadRender download={linuxDesktopDownload} type="linux" />
      },
      {
        label: "Open Terminal",
        description: "Open Terminal, Paste Command & Enter.",
        imageSrc: "/images/Onboarding/InstallQortalHub/linux/terminal.jpg"
      },
      {
        label: "Installing",
        description:
          "While the command is executing, the Qortal Hub window will popup for a moment then automatically close, this is intentional and you need to ignore it",
        imageSrc: "/images/Onboarding/InstallQortalHub/linux/wait.jpg"
      },
      {
        label: "Installation completed",
        description: "The command execution completes",
        imageSrc: "/images/Onboarding/InstallQortalHub/linux/completed.jpg"
      },
      {
        label: "Open Qortal Hub",
        description: "Search for Qortal, Select Qortal Hub.",
        imageSrc: "/images/Onboarding/InstallQortalHub/linux/search.jpg"
      },
      {
        label: "Welcome to Qortal Hub",
        description: "",
        imageSrc: "/images/Onboarding/InstallQortalHub/linux/launch.jpg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/wqpSwONzz-A"
  }
};

interface InstallQortalHubProps {
  onBack?: () => void;
  onNext?: () => void;
  osAuto: OS;
  setSelectedOnBoardingScreenShot: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export function InstallQortalHub({
  onBack,
  onNext,
  osAuto,
  setSelectedOnBoardingScreenShot
}: InstallQortalHubProps) {
  const [os, setOs] = React.useState<OS>(osAuto);
  const [mode, setMode] = React.useState<TutorialMode>("text");
  const [activeStep, setActiveStep] = React.useState(0);

  const { textSteps, videoUrl } = tutorialData[os];

  const handleOsChange = (
    _event: React.MouseEvent<HTMLElement>,
    value: OS | null
  ) => {
    if (!value) return;
    setOs(value);
    setActiveStep(0);
  };

  const handleModeChange = (
    _event: React.SyntheticEvent,
    value: TutorialMode
  ) => {
    if (!value) return;
    setMode(value);
  };

  const handleNextStep = () => {
    if (activeStep < textSteps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      onNext?.();
    }
  };

  const handleBackStep = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
    else onBack?.();
  };

  return (
    <Stack spacing={3}>
      {/* Header */}

      <Box>
        <Typography variant="body1" color="text.secondary">
          Choose your operating system and how you’d like to follow the guide.
          We’ll walk you through the installation step by step.
        </Typography>
      </Box>

      {/* OS Selector */}
      <Box>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          1. Select your operating system
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={os}
          onChange={handleOsChange}
          sx={{
            flexWrap: "wrap",
            "& .MuiToggleButton-root": {
              flex: { xs: "1 1 100%", sm: "1 1 auto" },
              justifyContent: "flex-start",
              textTransform: "none",
              px: 2.5,
              py: 1.5,
              borderRadius: 2,
              m: 0.5
            }
          }}
        >
          <ToggleButton value="windows">
            <WindowsIcon sx={{ mr: 1 }} />
            Windows
          </ToggleButton>
          <ToggleButton value="mac">
            <AppleIcon sx={{ mr: 1 }} />
            macOS
          </ToggleButton>
          <ToggleButton value="linux">
            <TerminalIcon sx={{ mr: 1 }} />
            Linux
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Mode Selector */}
      <Box>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          2. Choose tutorial style
        </Typography>
        <Tabs
          value={mode}
          onChange={handleModeChange}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab value="text" label="Text & screenshots" />
          <Tab value="video" label="Video tutorial" />
        </Tabs>
      </Box>

      {/* Content */}
      <Box sx={{ mt: 1 }}>
        {mode === "text" ? (
          <Stack spacing={2}>
            <Typography variant="body2" color="text.secondary">
              Follow these steps carefully. Screenshots will match{" "}
              <strong>
                {os === "windows"
                  ? "Windows"
                  : os === "mac"
                  ? "macOS"
                  : "Linux"}
              </strong>
              .
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {textSteps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                    {step?.render && (
                      <Box
                        sx={{
                          margin: "5px 0px"
                        }}
                      >
                        {step?.render}
                      </Box>
                    )}
                    {/* Optional screenshot placeholder */}
                    {step.imageSrc && (
                      <Box
                        onClick={() =>
                          setSelectedOnBoardingScreenShot(step.imageSrc!)
                        }
                        component="img"
                        src={step.imageSrc}
                        alt={step.label}
                        sx={{
                          mt: 1.5,
                          borderRadius: 2,
                          width: "100%",
                          maxWidth: 480,
                          display: "block",
                          cursor: "pointer"
                        }}
                      />
                    )}

                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                      <ButtonOnBoarding
                        variant="contained"
                        size="small"
                        onClick={handleNextStep}
                        disabled={index === textSteps.length - 1}
                      >
                        Next Step
                      </ButtonOnBoarding>
                      <ButtonTextOnBoarding
                        size="small"
                        onClick={handleBackStep}
                        disabled={index === 0 && !onBack}
                      >
                        Back
                      </ButtonTextOnBoarding>
                    </Stack>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Box
              sx={{
                position: "relative",
                pt: "56.25%", // 16:9 aspect ratio
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "black"
              }}
            >
              <Box
                component="iframe"
                src={videoUrl}
                title="Qortal Hub installation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0
                }}
              />
            </Box>
          </Stack>
        )}
      </Box>
    </Stack>
  );
}
