import { useState } from "react";
import { Grid, Typography, Box, useTheme } from "@mui/material";
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
import LinuxDownloadImg from "../../../../../public/images/Linux/LinuxDownload.png";
import Modal from "../../../Common/Modal/Modal";

// Not currently used

const LinuxStepTwo = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState<boolean>(false);

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
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <>
              <Grid item sm={6} xs={12}>
                <StepColumn container direction="column">
                  <MuseoFont variant="h3">
                    Download and install the Qortal UI appimage installer by
                    clicking the button below!
                  </MuseoFont>
                </StepColumn>
              </Grid>

              <ScreenshotColumn item xs={6}>
                <ScreenshotContainer onClick={() => setOpenModal(true)}>
                  <Screenshot
                    sx={{ objectFit: "contain" }}
                    src={"/images/Linux/LinuxDownload.png"}
                    alt="step2"
                  />
                  <MagnifyingGlass id="magnifying-glass" />
                </ScreenshotContainer>
              </ScreenshotColumn>
            </>
          </Grid>
        </LinuxStepColumnsContainer>
      </StepCard>
      {openModal && (
        <Modal
          openModal={openModal}
          onClickFunc={() => {
            setOpenModal(false);
          }}
          images={["/images/Linux/LinuxDownload.png"]}
        ></Modal>
      )}
    </>
  );
};

export default LinuxStepTwo;
