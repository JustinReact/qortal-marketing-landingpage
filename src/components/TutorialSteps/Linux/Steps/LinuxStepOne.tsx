import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  DownloadButton,
  DownloadOptionCard,
  LinuxStepColumn,
  LinuxStepColumnsContainer,
  MagnifyingGlass,
  Screenshot,
  ScreenshotContainer,
  StepCard,
  StepColumn,
} from "../../Steps-styles";
import StepOneImg from "../../../../images/Windows/WindowsStepOne.png";

const LinuxStepOne = () => {
  const [downloadOption, setDownloadOption] = useState<string>("appImage");

  return (
    <StepCard style={{ padding: "18px 15px 15px 15px", marginTop: "18px" }}>
      <LinuxStepColumnsContainer>
        <Grid
          container
          sm={12}
          sx={{ flexWrap: "nowrap", justifyContent: "space-between" }}
        >
          <LinuxStepColumn item sm={6} xs={12}>
            <DownloadOptionCard
              downloadOption={downloadOption === "appImage"}
              onClick={() => setDownloadOption("appImage")}
            >
              <Typography variant="h4" fontFamily="Montserrat" fontWeight="400">
                Appimage Installer
              </Typography>
            </DownloadOptionCard>
          </LinuxStepColumn>
          <LinuxStepColumn item sm={6} xs={12}>
            <DownloadOptionCard
              downloadOption={downloadOption === "terminal"}
              onClick={() => setDownloadOption("terminal")}
            >
              <Typography variant="h4" fontFamily="Montserrat" fontWeight="400">
                Terminal
              </Typography>
            </DownloadOptionCard>
          </LinuxStepColumn>
        </Grid>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={6}>
            <StepColumn container direction="column">
              <Typography
                fontFamily="Manrope"
                variant="h4"
                sx={{ userSelect: "none" }}
              >
                Get started with Qortal by downloading our user-friendly UI!
              </Typography>
              <DownloadButton
                variant="contained"
                onClick={() => {
                  // setShinyButton(true);
                  return;
                  window.location.href =
                    "https://github.com/Qortal/qortal-ui/releases/latest/download/Qortal-Setup-win64.exe";
                }}
              >
                Download Qortal UI
              </DownloadButton>
            </StepColumn>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              objectFit: "contain",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ScreenshotContainer>
              <Screenshot src={StepOneImg} alt="step1" />
              <MagnifyingGlass id="magnifying-glass" />
            </ScreenshotContainer>
          </Grid>
        </Grid>
      </LinuxStepColumnsContainer>
    </StepCard>
  );
};

export default LinuxStepOne;
