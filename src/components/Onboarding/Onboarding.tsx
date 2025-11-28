"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  ButtonOnBoarding,
  ButtonTextOnBoarding,
  Container,
  SupportButton
} from "./Onboarding-styles";
import Introduction from "./Introduction";
import { usePersistentState } from "../../hooks/usePersistentState";
import {
  Box,
  Paper,
  Stack,
  Typography,
  MobileStepper,
  useTheme
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { InstallQortalHub, OS } from "./InstallQortalHub";
import { SetupQortalCore } from "./SetupQortalCore";
import { CreateNewAccount } from "./CreateNewAccount";
import { RegisterName } from "./RegisterName";
import { JoinGroup } from "./JoinGroup";
import ReceiveQort from "./ReceiveQort";
import ReceiveQort2 from "./ReceiveQort2";
import NextSteps from "./NextSteps";
import MailingList from "./MailingList";
import {
  HeadphonesIcon,
  SupportModalButton
} from "../Common/Modal/SupportModal-styles";
import Modal from "../Common/Modal/Modal";

type StepDefinition = {
  key: string;
  label: string;
  render: () => React.ReactNode;
  requiresFreedomCells?: boolean;
};

const Onboarding = () => {
  const theme = useTheme();
  const searchParams = useSearchParams();
  const referral = searchParams?.get("ref")?.toLowerCase() ?? null;
  const showFreedomCellsStep = referral === "freedomcells";
  const [os, setOS] = useState<OS>("windows");
  const [selectedOnBoardingScreenShot, setSelectedOnBoardingScreenShot] =
    useState<null | string>(null);

  const storageKey = showFreedomCellsStep
    ? "onboardingStep-freedomcells"
    : "onboardingStep";

  const [activeStep, setActiveStep, isHydrated] = usePersistentState<number>(
    storageKey,
    0
  );

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();

    if (ua.includes("mac")) {
      setOS("mac");
    } else if (ua.includes("win")) {
      setOS("windows");
    } else if (ua.includes("linux")) {
      setOS("linux");
    } else {
      setOS("windows");
    }
  }, []);

  const stepDefinitions = useMemo<StepDefinition[]>(
    () => [
      {
        key: "intro",
        label: "Qortal Onboarding",
        render: () => <Introduction />
      },
      {
        key: "install-hub",
        label: "Install Qortal Hub",
        render: () => (
          <InstallQortalHub
            osAuto={os}
            setSelectedOnBoardingScreenShot={setSelectedOnBoardingScreenShot}
          />
        )
      },
      {
        key: "setup-core",
        label: "Setup Qortal Core",
        render: () => (
          <SetupQortalCore
            osAuto={os}
            setSelectedOnBoardingScreenShot={setSelectedOnBoardingScreenShot}
          />
        )
      },
      {
        key: "create-account",
        label: "Create new Qortal account",
        render: () => (
          <CreateNewAccount
            setSelectedOnBoardingScreenShot={setSelectedOnBoardingScreenShot}
          />
        )
      },
      {
        key: "receive-two",
        label: "Redeem 2 QORT",
        render: () => <ReceiveQort qortStep={1} />
      },
      {
        key: "register-name",
        label: "Register a name",
        render: () => (
          <RegisterName
            setSelectedOnBoardingScreenShot={setSelectedOnBoardingScreenShot}
          />
        )
      },
      {
        key: "join-group",
        label: "Join 'The Freedom Cell Network' Group",
        render: () => (
          <JoinGroup
            setSelectedOnBoardingScreenShot={setSelectedOnBoardingScreenShot}
          />
        ),
        requiresFreedomCells: true
      },
      {
        key: "receive-four",
        label: "Redeem 4 QORT",
        render: () => <ReceiveQort2 qortStep={2} />
      },
      {
        key: "mailing-list",
        label: "Mailing list",
        render: () => <MailingList />
      },
      {
        key: "next-steps",
        label: "Next steps",
        render: () => <NextSteps />
      }
    ],
    [os]
  );

  const steps = useMemo(
    () =>
      stepDefinitions.filter(
        (step) => showFreedomCellsStep || !step.requiresFreedomCells
      ),
    [stepDefinitions, showFreedomCellsStep]
  );

  useEffect(() => {
    if (!isHydrated) return;
    const maxIndex = Math.max(steps.length - 1, 0);
    if (activeStep > maxIndex) {
      setActiveStep(maxIndex);
    }
  }, [activeStep, steps.length, setActiveStep, isHydrated]);

  const handleNext = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  if (!isHydrated || steps.length === 0) return null;

  const currentStepIndex = Math.min(activeStep, steps.length - 1);
  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;
  const isSecondToLast = currentStepIndex === steps.length - 2;

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          width: "100%"
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: 800,
            width: "100%",
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4
          }}
        >
          {/* Right side – step content */}
          <Stack flex={1} spacing={3}>
            <Box>
              <Typography variant="overline" color="text.secondary">
                Step {currentStepIndex + 1} of {steps.length}
              </Typography>
              <Stack
                direction={"row"}
                alignContent={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h4" fontWeight={600}>
                  {currentStep?.label}
                </Typography>
                <SupportButton
                  role="button"
                  tabIndex={0}
                  aria-label="Chat with us"
                  onClick={() =>
                    window.open("https://link.qortal.dev/support", "_blank")
                  }
                  onKeyDown={() =>
                    window.open("https://link.qortal.dev/support", "_blank")
                  }
                >
                  <HeadphonesIcon
                    color={theme.palette.text.primary}
                    height={"18px"}
                    width={"18px"}
                  />{" "}
                  Community support
                </SupportButton>
              </Stack>
            </Box>

            <Box sx={{ flex: 1 }}>{currentStep?.render()}</Box>

            {/* Navigation */}
            <MobileStepper
              variant="dots"
              steps={steps.length}
              position="static"
              activeStep={currentStepIndex}
              nextButton={
                <ButtonOnBoarding
                  size="small"
                  onClick={handleNext}
                  disabled={isLastStep}
                  variant="contained"
                  sx={{
                    visibility: isLastStep ? "hidden" : "visible"
                  }}
                >
                  {isLastStep
                    ? "Finished"
                    : isSecondToLast
                    ? "Finish"
                    : "Continue"}
                </ButtonOnBoarding>
              }
              backButton={
                <ButtonTextOnBoarding
                  size="small"
                  onClick={handleBack}
                  disabled={
                    currentStepIndex === 0 ||
                    currentStepIndex === steps.length - 1
                  }
                  variant="text"
                >
                  Back
                </ButtonTextOnBoarding>
              }
              sx={{
                bgcolor: "transparent",
                px: 0,
                "& .MuiMobileStepper-dotActive": {
                  bgcolor: theme.palette.primary.main
                }
              }}
            />
          </Stack>
        </Paper>
      </Box>
      {selectedOnBoardingScreenShot && (
        <Modal
          images={[selectedOnBoardingScreenShot]}
          openModal={!!selectedOnBoardingScreenShot}
          onClickFunc={() => {
            setSelectedOnBoardingScreenShot(null);
          }}
        ></Modal>
      )}
    </Container>
  );
};

export default Onboarding;
