"use client";

import * as React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Tabs,
  Tab,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Chip
} from "@mui/material";
import { TextSteps } from "./CreateNewAccount";
import { ButtonOnBoarding, ButtonTextOnBoarding } from "./Onboarding-styles";

type TutorialMode = "text" | "video";

interface SetupQortalCoreProps {
  onBack?: () => void;
  onNext?: () => void;
  setSelectedOnBoardingScreenShot: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

const textSteps: TextSteps[] = [
  {
    label: "Click Apps on the left",
    description: "Start at the Qortal Hub Home Page, Click Apps on the left.",
    imageSrc: "/images/Onboarding/JoinGroup/home.jpg"
  },
  {
    label: "Click on Library",
    description:
      "Apps Dashboard Page, Click the circle with the text Library towards the left.",
    imageSrc: "/images/Onboarding/JoinGroup/apps.jpg"
  },
  {
    label: "Type in freedomcells",
    description:
      "Go to the search bar towards the upper right and Type FreedomCells in the search bar, FreedomCells will show in your results.",
    imageSrc: "/images/Onboarding/JoinGroup/search.jpg"
  },
  {
    label: "Pin and Download FreedomCells",
    description:
      "Once synced, Qortal Hub should show your node as online and synced. You’re now ready to use Qortal fully.",
    imageSrc: "/images/Onboarding/JoinGroup/search.jpg"
  },
  {
    label: "Wait for FreedomCells to load to your screen",
    description: "",
    imageSrc: "/images/Onboarding/JoinGroup/loading.jpg"
  },
  {
    label: "Authenticate, Click Accept",
    description: "",
    imageSrc: "/images/Onboarding/JoinGroup/accept.jpg"
  },
  {
    label: "Join the Freedom Cell Network, Click Join Group",
    description: "",
    imageSrc: "/images/Onboarding/JoinGroup/join.jpg"
  },
  {
    label: "Confirm Group Join, Click Accept",
    description: "",
    imageSrc: "/images/Onboarding/JoinGroup/acceptjoin.jpg"
  },
  {
    label: "Wait for group join confirmation",
    description:
      "Wait 2-5 minutes for group join confirmation. In order to verify confirmation refresh the screen as shown on the left. You can also go above the plus sign, click the X on the app icon and re-enter the FreedomCells Q-App from the Apps Dashboard.",
    imageSrc: "/images/Onboarding/JoinGroup/refresh.jpg"
  },
  {
    label: "Successfully Joined",
    description:
      "Once you receive confirmation, you can use this Q-App to keep up with the Community Milestones for further Q-App development and Freedom Cell Network announcements.",
    imageSrc: "/images/Onboarding/JoinGroup/done.jpg"
  }
];

export function JoinGroup({
  onBack,
  onNext,
  setSelectedOnBoardingScreenShot
}: SetupQortalCoreProps) {
  const [mode, setMode] = React.useState<TutorialMode>("text");
  const [activeStep, setActiveStep] = React.useState(0);

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
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    } else {
      onBack?.();
    }
  };

  return (
    <Stack spacing={3}>
      {/* Header */}

      <Box>
        <Typography variant="body1" color="text.secondary">
          Account creation takes under 1 minute. Everything is done locally on
          your device. No calls to servers!
        </Typography>
      </Box>

      {/* Mode selector */}
      <Box>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Choose tutorial style
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
              Follow the steps below. Screenshots in the guide will match what
              you see in Qortal Hub.
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {textSteps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>

                    {/* Optional screenshot placeholder */}
                    {step.imageSrc && (
                      <Box
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
                        onClick={() =>
                          setSelectedOnBoardingScreenShot(step.imageSrc!)
                        }
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
                pt: "56.25%", // 16:9
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "black"
              }}
            >
              <Box
                component="iframe"
                src="https://www.youtube.com/embed/Ai-HBMOWo3U"
                title="Qortal Core setup"
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
