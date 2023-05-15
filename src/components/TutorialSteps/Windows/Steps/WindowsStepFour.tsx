import { FC, useState } from "react";
import {
  MagnifyingGlass,
  MuseoFont,
  Screenshot,
  ScreenshotContainer,
  StepCard,
  StepColumn,
} from "../../Steps-styles";
import { Grid} from "@mui/material";
import Modal from "../../../Common/Modal/Modal";
import StepFourImg from "../../../../images/Windows/WindowsStepFour.webp";

interface WindowsStepFourProps {}

const WindowsStepFour: FC<WindowsStepFourProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <StepCard container>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <StepColumn>
            <MuseoFont
              variant="h3"
            >
              Upon launching the Qortal UI, you will be prompted to install the
              Qortal Core, which will connect you to the Qortal Blockchain.
              Click <strong>DOWNLOAD QORTAL CORE</strong> to install
              the Qortal Core.
            </MuseoFont>
            <MuseoFont
              variant="h3"
            >
              Once launched, you will be able to create a{" "}
              <strong>new account</strong>, or import
              an existing account. You will then be able to start minting and
              building Q-Apps.
            </MuseoFont>
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
