import { useState } from "react";
import { Grid } from "@mui/material";
import {
  ImageToggleDot,
  ImageToggleRow,
  MagnifyingGlass,
  MuseoFont,
  Screenshot,
  ScreenshotColumn,
  ScreenshotContainer,
  StepCard,
  StepColumn,
} from "../../Steps-styles";
import Modal from "../../../Common/Modal/Modal";
import MacStep4 from "../../../../images/Mac/MacStep4.jpg";

const MacStepFour = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <StepCard container>
        <Grid item lg={6} md={12} xs={12}>
          <StepColumn container direction="column">
            <MuseoFont variant="h3">
              If your core is not running when launching the Qortal UI, you will
              be automatically prompted to start it. Click the button{" "}
              <span style={{ fontWeight: "bold" }}>START QORTAL CORE</span> to
              start the core.
            </MuseoFont>
            <MuseoFont variant="h3">
              You may optionally choose to have the core start automatically
              when you launch the Qortal UI by checking the box at the bottom of
              the modal.
            </MuseoFont>
          </StepColumn>
        </Grid>
        <ScreenshotColumn item lg={6} md={12} xs={12}>
          <ScreenshotContainer
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Screenshot
              sx={{ objectFit: "contain" }}
              src={MacStep4}
              alt="step1"
            />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </ScreenshotColumn>
      </StepCard>
      {openModal && (
        <Modal
          images={[MacStep4]}
          openModal={openModal}
          onClickFunc={() => setOpenModal(false)}
        ></Modal>
      )}
    </>
  );
};

export default MacStepFour;
