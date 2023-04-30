import { useState, useRef } from "react";
import { LinuxTerminal } from "../LinuxTerminal/LinuxTerminal";
import { Grid, Typography, Box, useTheme } from "@mui/material";
import {
  DownloadButton,
  DownloadOptionCard,
  ImageToggleDot,
  ImageToggleRow,
  LinuxStepColumn,
  LinuxStepColumnsContainer,
  MagnifyingGlass,
  ModalScreenshot,
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
import { ChevronLeftSVG } from "../../../Common/Icons/ChevronLeftSVG";
import { ChevronRightSVG } from "../../../Common/Icons/ChevronRightSVG";

interface LinuxStepOneProps {
  downloadOption: string;
  setDownloadOption: (option: string) => void;
}

const LinuxStepOne = ({
  downloadOption,
  setDownloadOption,
}: LinuxStepOneProps) => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSelected, setImageSelected] = useState<string>("image1");

  const toggleLeftRef = useRef<HTMLDivElement | null>(null);
  const toggleRightRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <StepCard
        style={{
          padding: "18px 15px 15px 15px",
          marginTop: "18px",
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
          toggleLeft={
            <ChevronLeftSVG
              onClickFunc={() => {
                setImageSelected((prev) =>
                  prev === "image1" ? "image2" : "image1"
                );
              }}
              color={theme.palette.text.primary}
              height={"50"}
              width={"50"}
              className={"chevron-left"}
              ref={toggleLeftRef}
            />
          }
          toggleRight={
            <ChevronRightSVG
              onClickFunc={() => {
                setImageSelected((prev) =>
                  prev === "image1" ? "image2" : "image1"
                );
              }}
              color={theme.palette.text.primary}
              height={"50"}
              width={"50"}
              className={"chevron-right"}
              ref={toggleRightRef}
            />
          }
          openModal={openModal}
          onClickFunc={() => {
            setOpenModal(false);
          }}
        >
          <Box sx={{ position: "relative" }}>
            <ModalScreenshot
              src={
                imageSelected === "image1"
                  ? LinuxDownloadImg
                  : LinuxAppPermissionImg
              }
              alt="step1"
            ></ModalScreenshot>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default LinuxStepOne;
