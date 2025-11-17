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

type TutorialMode = "text" | "video";

interface SetupQortalCoreProps {
  onBack?: () => void;
  onNext?: () => void;
}

const textSteps: TextSteps[] = [
  {
    label: "Click on 'REGISTER NAME'",
    description: "test"
    // imageSrc: "/images/onboarding/core-step1.png",
  },
  {
    label: "Start Qortal Core",
    description:
      "Click the button to start Qortal Core. This will run the node in the background and connect it to the network."
    // imageSrc: "/images/onboarding/core-step2.png",
  },
  {
    label: "Wait for synchronization",
    description:
      "Qortal Core will begin syncing blocks. The first sync may take a while. Keep Qortal Hub open until it reaches 100%."
    // imageSrc: "/images/onboarding/core-step3.png",
  },
  {
    label: "Verify you are online",
    description:
      "Once synced, Qortal Hub should show your node as online and synced. You’re now ready to use Qortal fully."
    // imageSrc: "/images/onboarding/core-step4.png",
  }
];

export function RegisterName({ onBack, onNext }: SetupQortalCoreProps) {
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
          Having a name allows you to publish any kind of data on Qortal such as
          videos, posts, audio, ect.
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
                          display: "block"
                        }}
                      />
                    )}

                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={handleNextStep}
                      >
                        {index === textSteps.length - 1
                          ? "Continue"
                          : "Next step"}
                      </Button>
                      <Button
                        size="small"
                        onClick={handleBackStep}
                        disabled={index === 0 && !onBack}
                      >
                        Back
                      </Button>
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
                src="https://www.youtube.com/embed/REPLACE_WITH_CORE_VIDEO"
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
