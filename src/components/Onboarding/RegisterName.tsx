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
  Chip,
  useTheme
} from "@mui/material";
import { TextSteps } from "./CreateNewAccount";
import { ButtonOnBoarding, ButtonTextOnBoarding } from "./Onboarding-styles";
import {
  getStepImageIndex,
  getStepImageSources,
  OpenOnboardingScreenshot
} from "./onboardingScreenshot";

type TutorialMode = "text" | "video";

interface SetupQortalCoreProps {
  onBack?: () => void;
  onNext?: () => void;
  openScreenshotModal: OpenOnboardingScreenshot;
}

const textSteps: TextSteps[] = [
  {
    label: "Make sure you have a QORT balance",
    description:
      "In the Qortal Hub home screen, verify if you have the 2 QORT sent to you. This can take a minute or two to show up.",
    imageSrc: "/images/Onboarding/RegisterName/balance.png"
  },
  {
    label: "Register your first name",
    description:
      "Click the button 'Register Name' that will appear on top left, to register your first name.",
    imageSrc: "/images/Onboarding/RegisterName/register.png"
  }
];

export function RegisterName({
  onBack,
  onNext,
  openScreenshotModal
}: SetupQortalCoreProps) {
  const theme = useTheme();

  const [mode, setMode] = React.useState<TutorialMode>("text");
  const [activeStep, setActiveStep] = React.useState(0);
  const stepImages = getStepImageSources(textSteps);

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
        <Typography variant="body1" color="text.primary">
          Having a name allows you to publish any kind of data on Qortal such as
          videos, posts, audio, ect.
        </Typography>
      </Box>

      {/* Mode selector */}
      <Box>
        <Typography variant="subtitle2" color="text.primary" gutterBottom>
          Choose tutorial style
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
              Follow the steps below. Screenshots in the guide will match what
              you see in Qortal Hub.
            </Typography>
            <Stepper
              sx={{
                "& .MuiStepIcon-root": {
                  color: theme.palette.mode === "dark" ? "#707070" : "#9d9696"
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
                          openScreenshotModal(
                            stepImages,
                            getStepImageIndex(textSteps, index)
                          )
                        }
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
                pt: "56.25%", // 16:9
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "black"
              }}
            >
              <Box
                component="iframe"
                src="https://www.youtube.com/embed/7iABsJdmNa8"
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
      <p
        style={{
          marginTop: 10,
          color: theme.palette.text.primary
        }}
      >
        Once you have registered a name, you can continue to the next step to
        redeem the remaining 4 QORT.
      </p>
    </Stack>
  );
}
