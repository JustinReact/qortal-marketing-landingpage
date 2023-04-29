import { useState, Fragment } from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  Container,
  NextButton,
  PreviousButton,
  StepDiv,
  StepsColumn,
  ProgressBar,
  LeftArrow,
  RightArrow,
  StepText,
  StepSubText,
  StepNumberBubble,
} from "../Steps-styles";
import { useTheme } from "@mui/material";
import WindowsStepOne from "./Steps/WindowsStepOne";
import WindowsStepTwo from "./Steps/WindowsStepTwo";
import WindowsStepThree from "./Steps/WindowsStepThree";
import WindowsStepFour from "./Steps/WindowsStepFour";
import WindowsStepFive from "./Steps/WindowsStepFive";
import WindowsStepSix from "./Steps/WindowsStepSix";
import useMediaQuery from "@mui/material/useMediaQuery";

const WindowsSteps = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [steps] = useState<{ step: number; name: string }[]>([
    {
      step: 1,
      name: "Download Qortal UI",
    },
    {
      step: 2,
      name: "Run Anyway Permission (Possibly Skippable)",
    },
    {
      step: 3,
      name: "Install Qortal UI",
    },
    {
      step: 4,
      name: "Install Qortal Core",
    },
    {
      step: 5,
      name: "Make Sure Core is Running",
    },
    {
      step: 6,
      name: "Completed! 🎉",
    },
  ]);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [shinyButton, setShinyButton] = useState<boolean>(false);

  return (
    <Container container>
      <StepsColumn item>
        {steps.map((step, index) => {
          return (
            <StepDiv
              item
              key={index}
              selected={currentStep === step.step}
              onClick={() => setCurrentStep(step.step)}
            >
              <StepText>Step {step.step}</StepText>
              <StepSubText>{step.name}</StepSubText>
            </StepDiv>
          );
        })}
      </StepsColumn>
      <Grid
        container
        direction="column"
        sx={{
          minHeight: "500px",
          gap: "15px",
          marginTop: isMobile ? "0" : "-20px",
        }}
      >
        <>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                fontFamily="Raleway"
                sx={{ userSelect: "none" }}
              >
                {steps.filter((step) => step.step === currentStep)[0].name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "35px",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "30%" }}>
                <ProgressBar
                  variant="determinate"
                  value={(currentStep / steps.length) * 100}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  gap: "15px",
                }}
              >
                <LeftArrow
                  type="button"
                  preventClick={currentStep === 1 ? true : false}
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                />
                <StepNumberBubble variant="h5">
                  {`${currentStep} of ${steps.length}`}
                </StepNumberBubble>
                <RightArrow
                  type="button"
                  preventClick={currentStep === steps.length}
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                />
              </Box>
            </Grid>
          </Grid>
        </>
        <Grid item sx={{ padding: "0" }}>
          {currentStep === 1 ? (
            <WindowsStepOne setShinyButton={setShinyButton} />
          ) : currentStep === 2 ? (
            <WindowsStepTwo />
          ) : currentStep === 3 ? (
            <WindowsStepThree />
          ) : currentStep === 4 ? (
            <WindowsStepFour />
          ) : currentStep === 5 ? (
            <WindowsStepFive />
          ) : currentStep === 6 ? (
            <WindowsStepSix />
          ) : null}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: currentStep !== 1 ? "space-between" : "flex-end",
            width: "100%",
            marginTop: "15px",
          }}
        >
          <PreviousButton
            sx={{ display: currentStep === 1 ? "none" : "block" }}
            onClick={() => {
              setCurrentStep((prev) => prev - 1);
            }}
          >
            Previous
          </PreviousButton>
          <NextButton
            shiny={{ isOn: shinyButton ? true : false }}
            onClick={() => {
              setCurrentStep((prev) => prev + 1);
            }}
          >
            Next
          </NextButton>
        </Box>
      </Grid>
    </Container>
  );
};

export default WindowsSteps;
