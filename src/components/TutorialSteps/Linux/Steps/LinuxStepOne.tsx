import { useState } from "react";
import { LinuxTerminal } from "../LinuxTerminal/LinuxTerminal";
import { Grid, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import {
  DownloadButton,
  DownloadOptionCard,
  ImageToggleDot,
  ImageToggleRow,
  LinuxStepColumn,
  LinuxStepColumnsContainer,
  MagnifyingGlass,
  MuseoFont,
  Screenshot,
  ScreenshotColumn,
  ScreenshotContainer,
  StepCard,
  StepColumn,
} from "../../Steps-styles";
import LinuxDownloadImg from "../../../../images/Linux/LinuxDownload.png";
import LinuxAppPermissionImg from "../../../../images/Linux/LinuxAppPermission.png";
import Modal from "../../../Common/Modal/Modal";

interface LinuxStepOneProps {
  downloadOption: string;
  setDownloadOption: (option: string) => void;
}

const LinuxStepOne = ({
  downloadOption,
  setDownloadOption,
}: LinuxStepOneProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSelected, setImageSelected] = useState<string>("image1");

  return (
    <>
      <StepCard
        style={{
          padding: "18px 15px 15px 15px",
          marginTop: isMobile ? "5px" : "18px",
          width: "100%",
        }}
      >
        <LinuxStepColumnsContainer>
          <Grid
            container
            sx={{ flexWrap: "nowrap", justifyContent: "space-between" }}
          >
            <LinuxStepColumn item sm={6} xs={12}>
              <DownloadOptionCard
                downloadOption={downloadOption === "appImage"}
                onClick={() => setDownloadOption("appImage")}
              >
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight="400"
                >
                  Appimage Installer
                </Typography>
              </DownloadOptionCard>
            </LinuxStepColumn>
            <LinuxStepColumn item sm={6} xs={12}>
              <DownloadOptionCard
                downloadOption={downloadOption === "terminal"}
                onClick={() => setDownloadOption("terminal")}
              >
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight="400"
                >
                  Terminal
                </Typography>
              </DownloadOptionCard>
            </LinuxStepColumn>
          </Grid>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            {downloadOption === "appImage" ? (
              <>
                <Grid item xs={6}>
                  <StepColumn container direction="column">
                    <MuseoFont variant="h3">
                      Download and install the Qortal UI appimage installer by
                      clicking the button below!
                    </MuseoFont>
                    <MuseoFont variant="h3" sx={{ marginBottom: "25px" }}>
                      Note: You may need to make the file executable by right
                      clicking on it in your Downloads folder {">"} Properties{" "}
                      {">"} Permissions {">"} Allow executing file as program
                    </MuseoFont>
                    <DownloadButton
                      variant="contained"
                      onClick={() => {
                        // setShinyButton(true);
                        return;
                        window.location.href =
                          "https://github.com/Qortal/qortal-ui/releases/latest/download/Qortal-Setup-amd64.AppImage";
                      }}
                    >
                      Download Qortal UI
                    </DownloadButton>
                  </StepColumn>
                </Grid>

                <ScreenshotColumn item xs={6}>
                  <ScreenshotContainer onClick={() => setOpenModal(true)}>
                    <Screenshot
                      sx={{ objectFit: "contain" }}
                      src={
                        imageSelected === "image1"
                          ? LinuxDownloadImg
                          : LinuxAppPermissionImg
                      }
                      alt="step1"
                    />
                    <MagnifyingGlass id="magnifying-glass" />
                  </ScreenshotContainer>
                  <ImageToggleRow>
                    <ImageToggleDot
                      onClick={() => setImageSelected("image1")}
                      selected={imageSelected === "image1"}
                    ></ImageToggleDot>
                    <ImageToggleDot
                      onClick={() => setImageSelected("image2")}
                      selected={imageSelected === "image2"}
                    ></ImageToggleDot>
                  </ImageToggleRow>
                </ScreenshotColumn>
              </>
            ) : (
              <LinuxTerminal />
            )}
          </Grid>
        </LinuxStepColumnsContainer>
      </StepCard>
      {openModal && (
        <Modal
          openModal={openModal}
          onClickFunc={() => {
            setOpenModal(false);
          }}
          images={[LinuxDownloadImg, LinuxAppPermissionImg]}
        ></Modal>
      )}
    </>
  );
};

export default LinuxStepOne;
