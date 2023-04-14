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
import Modal from "../../../Common/Modal";
import StepTwoImg from "../../../../images/Windows/WindowsStepTwo.webp";

interface WindowsStepTwoProps {}

const WindowsStepTwo: FC<WindowsStepTwoProps> = () => {
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
              Once you have downloaded the Qortal UI, you may encounter a
              Windows Security warning. Click{" "}
              <span style={{ fontWeight: "bold" }}>"Run Anyway" </span> to
              continue.
            </Typography>
            <Typography
              fontFamily="Manrope"
              variant="h4"
              sx={{ userSelect: "none", lineHeight: "30px" }}
            >
              If this option is not available to you, you may need to change
              your Windows Security settings. Search for{" "}
              <span style={{ fontWeight: "bold" }}>App & Browser Control </span>
              in your System Settings.
            </Typography>
            <Typography
              fontFamily="Manrope"
              variant="h4"
              sx={{ userSelect: "none", lineHeight: "30px" }}
            >
              Under ‘Check apps and files’, select the ‘Warn’ option instead of
              the ‘Block’ option. In Windows 11, this option may be found under
              <span style={{ fontWeight: "bold" }}> ‘Smart App Control’.</span>
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
            <Screenshot src={StepTwoImg} alt="step1" />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </Grid>
      </StepCard>
      {openModal && (
        <Modal onClickFunc={() => setOpenModal(false)}>
          <ModalScreenshot src={StepTwoImg} alt="step1"></ModalScreenshot>
        </Modal>
      )}
    </>
  );
};

export default WindowsStepTwo;
