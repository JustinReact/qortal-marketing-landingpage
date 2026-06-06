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
  Chip,
  useTheme
} from "@mui/material";
import WindowsIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";
import TerminalIcon from "@mui/icons-material/Terminal";
import { ButtonOnBoarding, ButtonTextOnBoarding } from "./Onboarding-styles";
import {
  getStepImageIndex,
  getStepImageSources,
  OpenOnboardingScreenshot
} from "./onboardingScreenshot";
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
        label: " Welcome to the Qortal Hub login page. ",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/windows/welcome.png"
      },
      {
        label: "Click the cog icon on the bottom right of the page. Once the menu opens, click the \"Download\" button to begin the installation of the Qortal Core.",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/windows/install.png"
      },
      {
        label: "Wait for the download.",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/windows/wait.png"
      },
      {
        label: "Qortal Setup Wizard, Click Next.",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/windows/wizard.png"
      },
      {
        label: "More Qortal Setup, Click Accept and Install",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/windows/more.png"
      },
      {
        label: "Completing the Qortal Setup Wizard, Click Finish",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/windows/completed.png"
      },
      {
        label: "Starting Qortal Core, this should start automatically",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/windows/starting.png"
      },
      {
        label: "Wait for this to finish.",
        description:
          "Bootstrapping, this automatically copies the existing blockchain and extracts it. This is so it is available to your Qortal Core.",
        imageSrc: "/images/Onboarding/CoreSetup/windows/downloading.png"
      },
      {
        label: "Click Finish",
        description:
          "Once the Qortal Core has finished starting up. You are ready to go.",
        imageSrc: "/images/Onboarding/CoreSetup/mac/finish.png"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/ZWIYFVWAfIY"
  },
  mac: {
    textSteps: [
      {
        label: "Open Qortal Hub",
        description: "Click Spotlight Search, Type 'qortal', Click Qortal Hub",
        imageSrc: "/images/Onboarding/CoreSetup/mac/spotlight.png"
      },
      {
        label: "Install Java, Install Qortal Core, Start Qortal Core",
        description:
          "Once you've opened Hub, you'll see a popup. Click on the 'Start Core' button",
        imageSrc: "/images/Onboarding/CoreSetup/mac/start.png"
      },
      {
        label: "Qortal Splash Screen will show for a minute.",
        description:
          "If this is your first time starting the Qortal Core, it will need to perform some extra processes. This can take up to 10 mins. Please patiently wait as subsequent launches of the Qortal Core will not take that long.",
        imageSrc: "/images/Onboarding/CoreSetup/mac/wait.png"
      },
      {
        label: "Click Finish",
        description:
          "Once the Qortal Core has finished starting up. You are ready to go.",
        imageSrc: "/images/Onboarding/CoreSetup/mac/finish.png"
      },
      {
        label: "Understanding Syncronization",
        description:
          "Look at the Red Qortal Icon at the top. This will remain red for multiple minutes while the Qortal Core is synchronizing. Once it is syncronized, the Red Qortal Icon will change to a Blue color. You need to be fully syncronized to perform data publishes and blockcahin operations.",
        imageSrc: "/images/Onboarding/CoreSetup/mac/sync.png"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/nwQCMZ8GE2g"
  },
  linux: {
    textSteps: [
      {
        label: "Open Qortal Hub, Search Qortal and select Qortal Hub",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/linux/open.jpg"
      },
      {
        label: "Welcome to Qortal Hub, Select Next",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/linux/welcome.jpg"
      },
      {
        label:
          "Install Java, Install Qortal Core, Run Qortal Core, Click Green Button",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/linux/start.jpg"
      },
      {
        label: "Wait through the installation",
        description: "",
        imageSrc: "/images/Onboarding/CoreSetup/linux/installing.jpg"
      },
      {
        label: "Starting up",
        description:
          "When the installation is complete, the Qortal Core will automatically run. It will first bootstrap the blockchain and extract it. When the extraction is done, the core will synchronize and then it will be ready to use.",
        imageSrc: "/images/Onboarding/CoreSetup/linux/run.jpg"
      },
      {
        label: "Click Finish",
        description:
          "Once the Qortal Core has finished starting up. You are ready to go.",
        imageSrc: "/images/Onboarding/CoreSetup/mac/finish.webp"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/KUouFkLvE98"
  }
};

interface InstallQortalHubProps {
  onBack?: () => void;
  onNext?: () => void;
  osAuto: OS;
  openScreenshotModal: OpenOnboardingScreenshot;
}

export function SetupQortalCore({
  onBack,
  onNext,
  osAuto,
  openScreenshotModal
}: InstallQortalHubProps) {
  const theme = useTheme();

  const [os, setOs] = React.useState<OS>(osAuto);
  const [mode, setMode] = React.useState<TutorialMode>("text");
  const [activeStep, setActiveStep] = React.useState(0);

  const { textSteps, videoUrl } = tutorialData[os];
  const stepImages = getStepImageSources(textSteps);

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
        <Typography variant="body1" color="text.primary">
          Qortal Core is the engine that connects you to the Qortal network.
          Choose how you’d like to follow the setup guide.
        </Typography>
      </Box>

      {/* OS Selector */}
      <Box>
        <Typography variant="subtitle2" color="text.primary" gutterBottom>
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
        <Typography variant="subtitle2" color="text.primary" gutterBottom>
          2. Choose tutorial style
        </Typography>
        <Tabs
          value={mode}
          onChange={handleModeChange}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTabs-indicator": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "white"
                  : theme.palette.customBlue.main
            },
            "& .MuiTab-root.Mui-selected": {
              color:
                theme.palette.mode === "dark"
                  ? "white"
                  : theme.palette.customBlue.main
            }
          }}
        >
          <Tab value="text" label="Text tutorial" />
          <Tab value="video" label="Video tutorial" />
        </Tabs>
      </Box>

      {/* Content */}
      <Box sx={{ mt: 1 }}>
        {mode === "text" ? (
          <Stack spacing={2}>
            <Typography variant="body2" color="text.primary">
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
            <Stepper
              sx={{
                "& .MuiStepIcon-root": {
                  color: theme.palette.mode === "dark" ? "#707070" : "#999797"
                }
              }}
              activeStep={activeStep}
              orientation="vertical"
            >
              {textSteps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography variant="body2" color="text.primary">
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
                          openScreenshotModal(
                            stepImages,
                            getStepImageIndex(textSteps, index)
                          )
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
                      {index !== textSteps.length - 1 && (
                        <ButtonOnBoarding
                          variant="contained"
                          size="small"
                          onClick={handleNextStep}
                          disabled={index === textSteps.length - 1}
                        >
                          Next Step
                        </ButtonOnBoarding>
                      )}
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
