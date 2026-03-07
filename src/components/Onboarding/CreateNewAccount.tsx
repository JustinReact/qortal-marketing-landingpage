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
import { ButtonOnBoarding, ButtonTextOnBoarding } from "./Onboarding-styles";

type TutorialMode = "text" | "video";

interface SetupQortalCoreProps {
  onBack?: () => void;
  onNext?: () => void;
  setSelectedOnBoardingScreenShot: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export interface TextSteps {
  label: string;
  description: string;
  imageSrc?: string;
}

const textSteps: TextSteps[] = [
  {
    label: "Click on 'Create Account'",
    description:
      "On the Qortal Hub welcome page, click on the 'Create Account' button",
    imageSrc: "/images/Onboarding/CreateAccount/welcome.jpg"
  },
  {
    label: "SeedPhrase (optional)",
    description:
      "While you can export your seedphrase if you wish, we DO NOT recommend it. Continue to the next step to save your password protected account.",
    imageSrc: "/images/Onboarding/CreateAccount/seedphrase.jpg"
  },
  {
    label: "Input a password",
    description:
      "This is a local encryption password securing the saved Qortal Hub and downloaded backup file copy of your account.",
    imageSrc: "/images/Onboarding/CreateAccount/password.jpg"
  },
  {
    label: "Backup your account",
    description:
      "Click on the 'Backup Account' to save your account to your file system.",
    imageSrc: "/images/Onboarding/CreateAccount/backup.jpg"
  },
  {
    label: "Save account",
    description: "Important that you save your account for later access.",
    imageSrc: "/images/Onboarding/CreateAccount/save.jpg"
  },
  {
    label: "Important reminder",
    description:
      "IMPORTANT! There is no 'account recovery' of any kind. The account creator is the only one that has access to the account. Save your account in multiple places where only you have access to it.  A backup on a thumb drive is recommended.",
    imageSrc: "/images/Onboarding/CreateAccount/important.jpg"
  },
  {
    label: "Copy address",
    description:
      "Once you've copied your address, continue to the next section.",
    imageSrc: "/images/Onboarding/CreateAccount/copy.jpg"
  }
];

export function CreateNewAccount({
  onBack,
  onNext,
  setSelectedOnBoardingScreenShot
}: SetupQortalCoreProps) {
  const theme = useTheme();

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
        <Typography variant="body1" color="text.primary">
          Account creation takes under 1 minute. Everything is done locally on
          your device. No calls to servers!
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
                src="https://www.youtube.com/embed/WAozOiABSWE"
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
        Once you have created your account, you can continue to the next step to
        redeem the your 2/6 QORT.
      </p>
    </Stack>
  );
}
