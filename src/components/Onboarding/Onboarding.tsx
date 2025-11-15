"use client";
import React, { useState } from "react";
import { Container } from "./Onboarding-styles";
import Introduction from "./Introduction";
import { usePersistentState } from "../../hooks/usePersistentState";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Button,
  MobileStepper,
  useTheme
} from "@mui/material";
import { InstallQortalHub } from "./InstallQortalHub";
import { SetupQortalCore } from "./SetupQortalCore";
import { CreateNewAccount } from "./CreateNewAccount";
import { RegisterName } from "./RegisterName";
import { JoinGroup } from "./JoinGroup";
import ReceiveQort from "./ReceiveQort";
import ReceiveQort2 from "./ReceiveQort2";

const steps = [
  "Qortal Onboarding",
  "Install Qortal Hub",
  "Setup Qortal Core",
  "Create new Qortal account",
  "Receive 2 QORT",
  "Register a name",
  "Join 'The Freedom Cell Network' Group",
  "Receive 4 QORT",
  "Next steps",
  "Mailing list"
];

const Onboarding = () => {
  const theme = useTheme();

  const [activeStep, setActiveStep, isHydrated] = usePersistentState<number>(
    "onboardingStep",
    0
  );
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  console.log("activestep", activeStep);
  if (!isHydrated) return null;
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
                Step {activeStep + 1} of {steps.length}
              </Typography>
              <Typography variant="h4" fontWeight={600}>
                {steps[activeStep]}
              </Typography>
            </Box>

            {/* TODO: Render content per step here */}
            <Box sx={{ flex: 1 }}>
              {activeStep === 0 && <Introduction />}
              {activeStep === 1 && <InstallQortalHub />}
              {activeStep === 2 && <SetupQortalCore />}
              {activeStep === 3 && <CreateNewAccount />}
              {activeStep === 4 && <ReceiveQort qortStep={1} />}
              {activeStep === 5 && <RegisterName />}
              {activeStep === 6 && <JoinGroup />}
              {activeStep === 7 && <ReceiveQort2 qortStep={2} />}
            </Box>

            {/* Navigation */}
            <MobileStepper
              variant="dots"
              steps={steps.length}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                  variant="contained"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
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
    </Container>
  );
};

export default Onboarding;
