import { useState } from "react";
import { Grid } from "@mui/material";
import {
  DownloadButton,
  MagnifyingGlass,
  MuseoFont,
  Screenshot,
  ScreenshotContainer,
  StepCard,
  StepColumn,
} from "../../Steps-styles";
import StepOneImg from "../../../../images/Windows/WindowsStepOne.png";
import Modal from "../../../Common/Modal/Modal";

interface WindowsStepOneProps {
  setShinyButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const WindowsStepOne = ({ setShinyButton }: WindowsStepOneProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <StepCard container>
        <Grid item lg={6} md={12} xs={12}>
          <StepColumn container direction="column">
            <MuseoFont variant="h3">
              Get started with Qortal by downloading our user-friendly UI!
            </MuseoFont>
            <DownloadButton
              variant="contained"
              onClick={() => {
                setShinyButton(true);
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
          lg={6}
          md={12}
          xs={12}
          sx={{
            objectFit: "contain",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScreenshotContainer onClick={() => setOpenModal(true)}>
            <Screenshot src={StepOneImg} alt="step1" />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </Grid>
      </StepCard>
      {openModal && (
        <Modal
          images={[StepOneImg]}
          openModal={openModal}
          onClickFunc={() => setOpenModal(false)}
        ></Modal>
      )}
    </>
  );
};

export default WindowsStepOne;
