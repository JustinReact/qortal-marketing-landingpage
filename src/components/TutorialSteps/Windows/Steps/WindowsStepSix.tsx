import { FC, useState } from "react";
import {
  MagnifyingGlass,
  Screenshot,
  ScreenshotContainer,
  StepCard,
  StepColumn,
  ArrowDown,
  ProceedButton,
  MuseoFont,
} from "../../Steps-styles";
import { Box, Grid, Typography } from "@mui/material";
import Modal from "../../../Common/Modal/Modal";
import StepSixImg from "../../../../images/Windows/WindowsStepSix.webp";
import { DiscordSVG } from "../../../Common/Icons/DiscordSVG";

interface WindowsStepSixProps {}

const WindowsStepSix: FC<WindowsStepSixProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <StepCard container>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <StepColumn container direction="column">
            <MuseoFont variant="h3">
              Once you have opened Qortal, you can visit the Q-Apps section in
              the sidenav menu. Here you can find a list of all the Q-Apps that
              are currently available. You can download those you wish to try,
              or upload your own.
            </MuseoFont>
            <MuseoFont variant="h3">
              For more information on Q-Apps, proceed to the next section, where
              you will find an explainer video, as well as a short PDF guide you
              can download to learn more about Q-Apps.
            </MuseoFont>
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
                size="small"
                onClick={() => window.open("https://discord.gg/DRyQ79xqhd", "_blank")}
              >
                Join Discord 
                <DiscordSVG color={"#ffffff"} height={"22"} width={"22"} />
              </ProceedButton>
            </Box>
          </StepColumn>
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
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
