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
  LinuxStepsContainer,
  MobileStepDot,
  MobileStepLine,
  MobileStepRow,
  StepInformation,
  StepName,
  StepTitle,
  StepText,
  StepSubText,
  StepInformationContainer,
  StepNumberBubble,
  DiscordButton
} from "../Steps-styles";
import { useTheme } from "@mui/material";
import { DiscordSVG } from "../../Common/Icons/DiscordSVG";
import LinuxStepOne from "./Steps/LinuxStepOne";
import WindowsStepFour from "../Windows/Steps/WindowsStepFour";
import WindowsStepFive from "../Windows/Steps/WindowsStepFive";
import WindowsStepSix from "../Windows/Steps/WindowsStepSix";

const LinuxSteps = () => {
  const theme = useTheme();

  const [steps] = useState<{ step: number; name: string }[]>([
    {
      step: 1,
      name: "Download & Install Qortal UI"
    },
    {
      step: 2,
      name: "Install Qortal Core"
    },
    {
      step: 3,
      name: "Make Sure Core is Running"
    },
    {
      step: 4,
      name: "Completed! 🎉"
    }
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
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 20%, #e4e2e2 20%,#e4e2e2 40%, #e4e2e2 60%, #e4e2e2 80%, #e4e2e2 100%)`
                        : currentStep === 2
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 50%, #e4e2e2 50%, #e4e2e2 60%, #e4e2e2 80%, #e4e2e2 100%)`
                        : currentStep === 3
                        ? `linear-gradient(to right, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.light} 80%, #e4e2e2 80%, #e4e2e2 100%`
                        : currentStep === 4
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
            <StepInformation item xs={12} sm={6} md={6}>
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
                  gap: "15px"
                }}
              >
                <LeftArrow
                  style={{
                    opacity: currentStep === 1 ? 0.5 : 1,
                    pointerEvents: currentStep === 1 ? "none" : "all",
                    cursor: currentStep === 1 ? "auto" : "pointer"
                  }}
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                />
                <StepNumberBubble variant="h5">
                  {`${currentStep} of ${steps.length}`}
                </StepNumberBubble>
                <RightArrow
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  style={{
                    opacity: currentStep === steps.length ? 0.5 : 1,
                    pointerEvents:
                      currentStep === steps.length ? "none" : "all",
                    cursor: currentStep === steps.length ? "auto" : "pointer"
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
                  action: "Clicked Discord Button Linux Steps",
                  label: "Discord Linux Steps"
                });
                window.open("https://discord.gg/DRyQ79xqhd", "_blank");
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

export default LinuxSteps;
