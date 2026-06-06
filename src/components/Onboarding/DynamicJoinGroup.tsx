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
  Alert,
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
  openScreenshotModal: OpenOnboardingScreenshot;
}

// Generic text steps for joining any group
const getTextSteps = (groupName: string, groupId: number): TextSteps[] => [
  {
    label: "Click Chat on the left",
    description:
      "Start at the Qortal Hub Home Page. Click Chat on the left sidebar to open the Chat interface.",
    imageSrc: "/images/Onboarding/DynamicJoinGroup/01-welcome.jpg"
  },
  {
    label: "Click Groups on bottom left",
    description:
      "In the Chat page, locate and click the Groups button at the bottom left of the interface.",
    imageSrc: "/images/Onboarding/DynamicJoinGroup/02-chat-groups.jpg"
  },
  {
    label: "Click Find Group",
    description:
      "In the Group Management window, click on the Find Group tab to search for groups.",
    imageSrc: "/images/Onboarding/DynamicJoinGroup/03-find-group.jpg"
  },
  {
    label: `Enter "${groupName}" in the search field`,
    description: `In the Find Group tab, enter "${groupName}" in the search for groups field to find the group you want to join.`,
    imageSrc: "/images/Onboarding/DynamicJoinGroup/04-search-group.jpg"
  },
  {
    label: "Click the group and click Join Group",
    description: `Click on "${groupName}" from the search results. In the popup window that appears, click the "Join Group" button.`,
    imageSrc: "/images/Onboarding/DynamicJoinGroup/05-join-group.jpg"
  },
  {
    label: "Accept transaction fee",
    description:
      "Review and accept the transaction fee to complete the join request. This fee is required to process your group membership.",
    imageSrc: "/images/Onboarding/DynamicJoinGroup/06-accept-fee.jpg"
  },
  {
    label: "Exit Group Management",
    description:
      "After accepting the transaction fee, exit the Group Management window by clicking the X button in the top right corner.",
    imageSrc: "/images/Onboarding/DynamicJoinGroup/07-exit-management.jpg"
  },
  {
    label: "Wait for transaction to confirm",
    description:
      "Wait for the transaction to confirm. This typically takes around 2 minutes for the group to be added to your list.",
    imageSrc: "/images/Onboarding/DynamicJoinGroup/08-wait-confirm.jpg"
  },
  {
    label: "Click on the group name when it appears",
    description: `Once the transaction is confirmed, you'll see "${groupName}" appear in your groups list on the left. Click on the group name to open it.`,
    imageSrc: "/images/Onboarding/DynamicJoinGroup/09-click-group-name.jpg"
  },
  {
    label: "See the group chat conversation",
    description: `You've successfully joined ${groupName}! Before you can participate in the group chat conversation, you need to redeem the remaining 4 QORT.`,
    imageSrc: "/images/Onboarding/DynamicJoinGroup/10-participate-chat.jpg"
  }
];

export function DynamicJoinGroup({
  groupInfo,
  onBack,
  onNext,
  openScreenshotModal
}: DynamicJoinGroupProps) {
  const [mode, setMode] = React.useState<TutorialMode>("text");
  const [activeStep, setActiveStep] = React.useState(0);
  const topRef = React.useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const textSteps = React.useMemo(
    () => getTextSteps(groupInfo.groupName, groupInfo.groupId),
    [groupInfo.groupName, groupInfo.groupId]
  );
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
    <Box ref={topRef}>
      <Stack spacing={3}>
        {/* Group Information */}
        <Box>
          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              {groupInfo.groupName}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {groupInfo.description}
            </Typography>
            <Typography
              variant="caption"
              color="text.primary"
              sx={{ mt: 1, display: "block" }}
            >
              Members: {groupInfo.memberCount} • Group ID: {groupInfo.groupId}
            </Typography>
          </Alert>
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
                Follow the steps below to join {groupInfo.groupName}.
                Screenshots in the guide will match what you see in Qortal Hub.
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
                  src="https://www.youtube.com/embed/pmYFzGVdUQ4"
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
          Once you have joined the group, you can continue to the next step to
          redeem the remaining 4 QORT.
        </Typography>
      </Stack>
    </Box>
  );
}
