import { FC, useState } from "react";
import {
  MagnifyingGlass,
  ModalScreenshot,
  Screenshot,
  ScreenshotContainer,
  StepCard,
  StepColumn,
  ArrowDown,
  ProceedButton,
} from "../../Steps-styles";
import { Box, Grid, Typography } from "@mui/material";
import Modal from "../../../Common/Modal/Modal";
import StepSixImg from "../../../../images/Windows/WindowsStepSix.webp";

interface WindowsStepSixProps {}

const WindowsStepSix: FC<WindowsStepSixProps> = () => {
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
              Once you have opened Qortal, you can visit the Q-Apps section in
              the sidenav menu. Here you can find a list of all the Q-Apps that
              are currently available. You can download those you wish to try,
              or upload your own.
            </Typography>
            <Typography
              fontFamily="Manrope"
              variant="h4"
              sx={{ userSelect: "none", lineHeight: "30px" }}
            >
              For more information on Q-Apps, proceed to the next section, where
              you will find an explainer video, as well as a short PDF guide you
              can download to learn more about Q-Apps.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ProceedButton
                variant="contained"
                color="primary"
                size="small"
                onClick={() => console.log("clicked")}
              >
                <ArrowDown />
                Proceed
              </ProceedButton>
            </Box>
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
              src={StepSixImg}
              alt="step1"
              sx={{ objectFit: "contain" }}
            />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </Grid>
      </StepCard>
      {openModal && (
        <Modal
          images={[StepSixImg]}
          openModal={openModal}
          onClickFunc={() => setOpenModal(false)}
        ></Modal>
      )}
    </>
  );
};

export default WindowsStepSix;
