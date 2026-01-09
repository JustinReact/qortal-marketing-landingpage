"use client";

import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Tabs,
  Tab,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Alert
} from "@mui/material";
import { TextSteps } from "./CreateNewAccount";
import { ButtonOnBoarding, ButtonTextOnBoarding } from "./Onboarding-styles";

type TutorialMode = "text" | "video";

interface GroupInfo {
  groupId: number;
  owner: string;
  groupName: string;
  description: string;
  created: number;
  isOpen: boolean;
  approvalThreshold: string;
  minimumBlockDelay: number;
  maximumBlockDelay: number;
  memberCount: number;
}

interface DynamicJoinGroupProps {
  groupInfo: GroupInfo;
  onBack?: () => void;
  onNext?: () => void;
  setSelectedOnBoardingScreenShot: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

// Generic text steps for joining any group
const getTextSteps = (groupName: string): TextSteps[] => [
  {
    label: "Click Apps on the left",
    description: "Start at the Qortal Hub Home Page, Click Apps on the left.",
    imageSrc: "/images/Onboarding/JoinGroup/home.jpg"
  },
  {
    label: "Click on Groups",
    description:
      "In the Apps section, locate and click on the Groups application.",
    imageSrc: "/images/Onboarding/JoinGroup/apps.jpg"
  },
  {
    label: `Search for "${groupName}"`,
    description: `Go to the search bar and type "${groupName}" to find the group.`,
    imageSrc: "/images/Onboarding/JoinGroup/search.jpg"
  },
  {
    label: "Join the Group",
    description: `Click the "Join Group" button for "${groupName}".`,
    imageSrc: "/images/Onboarding/JoinGroup/join.jpg"
  },
  {
    label: "Confirm Group Join",
    description: "Click Accept to confirm joining the group.",
    imageSrc: "/images/Onboarding/JoinGroup/acceptjoin.jpg"
  },
  {
    label: "Wait for group join confirmation",
    description:
      "Wait 2-5 minutes for group join confirmation. You may need to refresh the page to see the confirmation.",
    imageSrc: "/images/Onboarding/JoinGroup/refresh.jpg"
  },
  {
    label: "Successfully Joined",
    description: `You have successfully joined "${groupName}".`,
    imageSrc: "/images/Onboarding/JoinGroup/done.jpg"
  }
];

export function DynamicJoinGroup({
  groupInfo,
  onBack,
  onNext,
  setSelectedOnBoardingScreenShot
}: DynamicJoinGroupProps) {
  const [mode, setMode] = React.useState<TutorialMode>("text");
  const [activeStep, setActiveStep] = React.useState(0);

  const textSteps = React.useMemo(
    () => getTextSteps(groupInfo.groupName),
    [groupInfo.groupName]
  );

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
      {/* Group Information */}
      <Box>
        <Alert severity="info" sx={{ mb: 2 }}>
          <Typography variant="body2" fontWeight={600} gutterBottom>
            {groupInfo.groupName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {groupInfo.description}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
            Members: {groupInfo.memberCount} • Group ID: {groupInfo.groupId}
          </Typography>
        </Alert>
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
              Follow the steps below to join {groupInfo.groupName}. Screenshots
              in the guide will match what you see in Qortal Hub.
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
                src="https://www.youtube.com/embed/Ai-HBMOWo3U"
                title="Qortal group join tutorial"
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
      <Typography
        variant="body2"
        sx={{
          marginTop: 2,
          color: "success.main"
        }}
      >
        Once you have joined the group, you can continue to the next step.
      </Typography>
    </Stack>
  );
}

