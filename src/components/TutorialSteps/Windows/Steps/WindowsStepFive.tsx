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
import StepFiveImg from "../../../../images/Windows/WindowsStepFive.png";

interface WindowsStepFiveProps {}

const WindowsStepFive: FC<WindowsStepFiveProps> = () => {
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
              If your core is not running when launching the Qortal UI, you will
              be automatically prompted to start it. Click the button{" "}
              <span style={{ fontWeight: "bold" }}>START QORTAL CORE</span> to
              start the core.
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
            <Screenshot
              sx={{ objectFit: "contain" }}
              src={StepFiveImg}
              alt="step1"
            />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </Grid>
      </StepCard>
      {openModal && (
        <Modal openModal={openModal} onClickFunc={() => setOpenModal(false)}>
          <ModalScreenshot src={StepFiveImg} alt="step1"></ModalScreenshot>
        </Modal>
      )}
    </>
  );
};

export default WindowsStepFive;
