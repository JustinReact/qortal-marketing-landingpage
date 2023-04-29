import { FC, useState } from "react";
import {
  MagnifyingGlass,
  ModalScreenshot,
  Screenshot,
  ScreenshotContainer,
  StepCard,
  StepColumn,
} from "../../Steps-styles";
import { Grid, Typography } from "@mui/material";
import Modal from "../../../Common/Modal/Modal";
import StepThreeImg from "../../../../images/Windows/WindowsStepThree.webp";

interface WindowsStepThreeProps {}

const WindowsStepThree: FC<WindowsStepThreeProps> = () => {
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
              Execute the Qortal installer located in your downloads folder.
              Click next next next finish through the install like any normal
              installation.
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
            <Screenshot src={StepThreeImg} alt="step1" />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </Grid>
      </StepCard>
      {openModal && (
        <Modal openModal={openModal} onClickFunc={() => setOpenModal(false)}>
          <ModalScreenshot src={StepThreeImg} alt="step1"></ModalScreenshot>
        </Modal>
      )}
    </>
  );
};

export default WindowsStepThree;
