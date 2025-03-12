import { useState } from "react";
import { Grid, Box } from "@mui/material";
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
  StepTitle,
  StepName,
  MobileStepRow,
  MobileStepLine,
  MobileStepDot,
  StepInformation,
  StepInformationContainer,
  DiscordButton
} from "../Steps-styles";
import { useTheme } from "@mui/material";
import { DiscordSVG } from "../../Common/Icons/DiscordSVG";
import WindowsStepOne from "./Steps/WindowsStepOne";
import WindowsStepTwo from "./Steps/WindowsStepTwo";
import WindowsStepThree from "./Steps/WindowsStepThree";
import WindowsStepFour from "./Steps/WindowsStepFour";
import WindowsStepFive from "./Steps/WindowsStepFive";
import WindowsStepSix from "./Steps/WindowsStepSix";
import useMediaQuery from "@mui/material/useMediaQuery";
import ReactGA from "react-ga4";

export const WindowsSteps = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [steps] = useState<{ step: number; name: string }[]>([
    {
      step: 1,
      name: "Download Qortal UI"
    },
    {
      step: 2,
      name: "Run Anyway Permission (Possibly Skippable)"
    },
    {
      step: 3,
      name: "Install Qortal UI"
    },
    {
      step: 4,
      name: "Install Qortal Core"
    },
    {
      step: 5,
      name: "Make Sure Core is Running"
    },
    {
      step: 6,
      name: "Completed! 🎉"
    }
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
      <StepInformationContainer container direction="column">
        <>
          <Grid container sx={{ alignItems: "center" }}>
            <StepName item xs={12} sm={12} md={6}>
              <StepTitle>
                {steps.filter((step) => step.step === currentStep)[0].name}
              </StepTitle>
              <MobileStepRow>
                <MobileStepLine
                  style={{
                    background:
                      currentStep === 1
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 16.67%, #e4e2e2 16.67%, #e4e2e2 33.33%, #e4e2e2 50%, #e4e2e2 66.67%, #e4e2e2 83.33%, #e4e2e2 100%)`
                        : currentStep === 2
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 33.33%, #e4e2e2 33.33%, #e4e2e2 50%, #e4e2e2 66.67%, #e4e2e2 83.33%, #e4e2e2 100%)`
                        : currentStep === 3
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 50%, #e4e2e2 50%, #e4e2e2 66.67%, #e4e2e2 83.33%, #e4e2e2 100%)`
                        : currentStep === 4
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 66.67%, #e4e2e2 66.67%, #e4e2e2 83.33%, #e4e2e2 100%)`
                        : currentStep === 5
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 83.33%, #e4e2e2 83.33%, #e4e2e2 100%)`
                        : currentStep === 6
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 100%)`
                        : "linear-gradient(to right, #e4e2e2 0%, #e4e2e2 100%)"
                  }}
                >
                  {steps.map((step, index) => {
                    return (
                      <MobileStepDot
                        key={index}
                        onClick={() => setCurrentStep(index + 1)}
                        className={
                          currentStep >= index + 1 ? "StepInnerDot" : ""
                        }
                      >
                        {index + 1}
                      </MobileStepDot>
                    );
                  })}
                </MobileStepLine>
              </MobileStepRow>
            </StepName>
            <StepInformation item xs={12} sm={12} md={6}>
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
                  gap: "15px"
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
            </StepInformation>
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
            width: "100%"
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
          {currentStep === steps.length ? (
            <DiscordButton
              sx={{ display: currentStep !== steps.length ? "none" : "flex" }}
              variant="contained"
              size="small"
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Discord Button Windows Steps",
                  label: "Discord Windows Steps"
                });
                window.open("https://discord.gg/YKdxYUSqZR", "_blank");
              }}
            >
              Join Discord
              <DiscordSVG color={"#ffffff"} height={"22"} width={"22"} />
            </DiscordButton>
          ) : (
            <NextButton
              sx={{ display: currentStep === steps.length ? "none" : "block" }}
              shiny={{ isOn: shinyButton ? true : false }}
              onClick={() => {
                setCurrentStep((prev) => prev + 1);
              }}
            >
              Next
            </NextButton>
          )}
        </Box>
      </StepInformationContainer>
    </Container>
  );
};