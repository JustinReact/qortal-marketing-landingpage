import { useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import {
  Container,
  NextButton,
  PreviousButton,
  StepDiv,
  StepsColumn,
} from "../Steps-styles";
import { useTheme } from "@mui/material";
import WindowsStepOne from "./Steps/WindowsStepOne";
import WindowsStepTwo from "./Steps/WindowsStepTwo";
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
              <Typography
                fontFamily="Montserrat"
                fontWeight="400"
                variant="h4"
                sx={{ userSelect: "none" }}
              >
                Step {step.step}
              </Typography>
              <Typography
                fontFamily="Roboto"
                fontWeight="400"
                letterSpacing="0.3px"
                variant="h5"
                sx={{ userSelect: "none" }}
              >
                {step.name}
              </Typography>
            </StepDiv>
          );
        })}
      </StepsColumn>
      <Grid
        container
        direction="column"
        sx={{
          gap: "12px",
          marginTop: isMobile ? "0" : "-20px",
        }}
      >
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
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography
              variant="h4"
              fontFamily="Raleway"
              sx={{
                width: "fit-content",
                backgroundColor: "#6495ed",
                color: "white",
                padding: "5px 10px",
                borderRadius: "18px",
                marginRight: "5px",
                userSelect: "none",
              }}
            >
              {`${currentStep} of ${steps.length}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ padding: "0" }}>
          {currentStep === 1 ? (
            <WindowsStepOne setShinyButton={setShinyButton} />
          ) : currentStep === 2 ? (
            <WindowsStepTwo />
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
