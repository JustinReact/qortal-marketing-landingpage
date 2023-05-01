import { FC, useState } from "react";
import {
  MagnifyingGlass,
  ModalScreenshot,
  Screenshot,
  ScreenshotContainer,
  StepCard,
  StepColumn,
} from "../../Steps-styles";
import { Grid, Link, Typography } from "@mui/material";
import Modal from "../../../Common/Modal/Modal";
import StepFourImg from "../../../../images/Windows/WindowsStepFour.webp";

interface WindowsStepFourProps {}

const WindowsStepFour: FC<WindowsStepFourProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <StepCard>
        <Grid item xs={6}>
          <StepColumn container direction="column">
            <Typography
              fontFamily="Manrope"
              variant="h4"
              sx={{ userSelect: "none", lineHeight: "30px" }}
            >
              Upon launching the Qortal UI, you will be prompted to install the
              Qortal Core, which will connect you to the Qortal Blockchain.
              Click <span style={{ fontWeight: "bold" }}>yes</span> to install
              the Qortal Core.
            </Typography>
            <Typography
              fontFamily="Manrope"
              variant="h4"
              sx={{ userSelect: "none", lineHeight: "30px" }}
            >
              Once launched, you will be able to create a{" "}
              <span style={{ fontWeight: "bold" }}>new account</span>, or import
              an existing account. You will then be able to start minting and
              building Q-Apps.
            </Typography>
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
          <ScreenshotContainer onClick={() => setOpenModal(true)}>
            <Screenshot src={StepFourImg} alt="step1" />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </Grid>
      </StepCard>
      {openModal && (
        <Modal
          images={[StepFourImg]}
          openModal={openModal}
          onClickFunc={() => setOpenModal(false)}
        ></Modal>
      )}
    </>
  );
};

export default WindowsStepFour;
