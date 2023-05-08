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
  LinuxStepsContainer,
  MobileStepDot,
  MobileStepLine,
  MobileStepRow,
  StepInformation,
  StepName,
  StepTitle,
} from "../Steps-styles";
import { useTheme } from "@mui/material";
import LinuxStepOne from "./Steps/LinuxStepOne";
import useMediaQuery from "@mui/material/useMediaQuery";
import WindowsStepFour from "../Windows/Steps/WindowsStepFour";
import WindowsStepFive from "../Windows/Steps/WindowsStepFive";
import WindowsStepSix from "../Windows/Steps/WindowsStepSix";

const LinuxSteps = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [steps, setSteps] = useState<{ step: number; name: string }[]>([
    {
      step: 1,
      name: "Download & Install Qortal UI",
    },
    {
      step: 2,
      name: "Install Qortal Core",
    },
    {
      step: 3,
      name: "Make Sure Core is Running",
    },
    {
      step: 4,
      name: "Completed! 🎉",
    },
  ]);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [shinyButton, setShinyButton] = useState<boolean>(false);
  const [downloadOption, setDownloadOption] = useState<string>("appImage");

  return (
    <Container container>
      <StepsColumn style={{ minHeight: "300px" }} item>
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
          minHeight: "500px",
          justifyContent: "space-between",
          marginTop: isMobile ? "0" : "-20px",
        }}
      >
        <>
          <Grid container sx={{ alignItems: "center" }}>
            <StepName item xs={12} sm={6}>
              <StepTitle>
                {steps.filter((step) => step.step === currentStep)[0].name}
              </StepTitle>
              <MobileStepRow>
                <MobileStepLine
                  style={{
                    background:
                      currentStep === 1
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 20%, #e4e2e2 20%,#e4e2e2 40%, #e4e2e2 60%, #e4e2e2 80%, #e4e2e2 100%)`
                        : currentStep === 2
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 50%, #e4e2e2 50%, #e4e2e2 60%, #e4e2e2 80%, #e4e2e2 100%)`
                        : currentStep === 3
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 80%, #e4e2e2 80%, #e4e2e2 100%`
                        : currentStep === 4
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 100%)`
                        : "linear-gradient(to right, #e4e2e2 0%, #e4e2e2 100%)",
                  }}
                >
                  <MobileStepDot
                    onClick={() => setCurrentStep(1)}
                    className={currentStep >= 1 ? "StepInnerDot" : ""}
                  >
                    1
                  </MobileStepDot>
                  <MobileStepDot
                    onClick={() => setCurrentStep(2)}
                    className={currentStep >= 2 ? "StepInnerDot" : ""}
                  >
                    2
                  </MobileStepDot>
                  <MobileStepDot
                    onClick={() => setCurrentStep(3)}
                    className={currentStep >= 3 ? "StepInnerDot" : ""}
                  >
                    3
                  </MobileStepDot>
                  <MobileStepDot
                    onClick={() => setCurrentStep(4)}
                    className={currentStep >= 4 ? "StepInnerDot" : ""}
                  >
                    4
                  </MobileStepDot>
                </MobileStepLine>
              </MobileStepRow>
            </StepName>
            <StepInformation item xs={12} sm={6}>
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
                  justifyContent:
                    currentStep === 1 && downloadOption === "terminal"
                      ? "flex-start"
                      : "space-evenly",
                  gap: "15px",
                }}
              >
                <LeftArrow
                  style={{
                    opacity: currentStep === 1 ? 0.5 : 1,
                    pointerEvents: currentStep === 1 ? "none" : "all",
                    cursor: currentStep === 1 ? "auto" : "pointer",
                  }}
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                />
                <Typography
                  variant="h4"
                  fontFamily="Raleway"
                  sx={{
                    width: "fit-content",
                    backgroundColor: "#6495ed",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "18px",
                    userSelect: "none",
                  }}
                >
                  {`${currentStep} of ${steps.length}`}
                </Typography>
                <RightArrow
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  style={{
                    opacity: currentStep === steps.length ? 0.5 : 1,
                    pointerEvents:
                      currentStep === steps.length ? "none" : "all",
                    cursor: currentStep === steps.length ? "auto" : "pointer",
                  }}
                />
              </Box>
            </StepInformation>
          </Grid>
        </>
        <LinuxStepsContainer item>
          {currentStep === 1 ? (
            <LinuxStepOne
              downloadOption={downloadOption}
              setDownloadOption={setDownloadOption}
            />
          ) : currentStep === 2 ? (
            <WindowsStepFour />
          ) : currentStep === 3 ? (
            <WindowsStepFive />
          ) : currentStep === 4 ? (
            <WindowsStepSix />
          ) : null}
        </LinuxStepsContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: currentStep !== 1 ? "space-between" : "flex-end",
            width: "100%",
            marginTop:
              currentStep === 1 && downloadOption === "terminal" && !isMobile
                ? "auto"
                : "15px",
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

export default LinuxSteps;
