import { FC, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
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
import { Grid, Typography } from "@mui/material";
import Modal from "../../../Common/Modal/Modal";
import StartQortalCore from "../../../../images/Windows/WindowsStepFive.webp";
import ChangeStartQortalCoreDefault from "../../../../images/Windows/WindowsStepFive2.webp";

interface WindowsStepFiveProps {}

const WindowsStepFive: FC<WindowsStepFiveProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>(StartQortalCore);
  const [modalImages, setModalImages] = useState<string[]>([]);


  const images = [
    {
      src: StartQortalCore,
      alt: "step1",
    },
    {
      src: ChangeStartQortalCoreDefault,
      alt: "step2",
    },
  ];

    // Only re-render the modal when the openModal state changes

    useEffect(() => {
      if (openModal) {
        setModalImages([
          selectedImage,
          ...images
            .filter((img) => img.src !== selectedImage)
            .map((img) => img.src),
        ]);
      }
    }, [openModal]);
  

  const imageSwipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setSelectedImage((prevState) => {
        const currentIndex = images.findIndex(
          (image) => image.src === prevState
        );
        const nextIndex =
          currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        return images[nextIndex].src;
      }),
    onSwipedRight: () =>
      setSelectedImage((prevState) => {
        const currentIndex = images.findIndex(
          (image) => image.src === prevState
        );
        const nextIndex =
          currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        return images[nextIndex].src;
      }),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <StepCard container>
        <Grid item lg={6} md={12} sm={12} xs={12}>
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
            <MuseoFont variant="h3">
              This option can later be changed by right clicking on the Qortal
              UI icon in the bottom right
            </MuseoFont>
          </StepColumn>
        </Grid>
        <ScreenshotColumn
          {...imageSwipeHandlers}
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
          {images.map((image, index) => (
            <ScreenshotContainer
              key={index}
              onClick={() => {
                setOpenModal(true);
                setSelectedImage(image.src);
              }}
              style={{
                display: image.src === selectedImage ? "block" : "none",
              }}
            >
              <Screenshot
                sx={{ objectFit: "contain" }}
                src={image.src}
                alt={image.alt}
              />
              <MagnifyingGlass id="magnifying-glass" />
            </ScreenshotContainer>
          ))}
          <ImageToggleRow>
            {images.map((image, index) => (
              <ImageToggleDot
                key={index}
                onClick={() => setSelectedImage(image.src)}
                selected={image.src === selectedImage}
              ></ImageToggleDot>
            ))}
          </ImageToggleRow>
        </ScreenshotColumn>
      </StepCard>
      {openModal && (
        <Modal
          images={modalImages}
          onImageChangeFunc={(image) => setSelectedImage(image)}
          openModal={openModal}
          onClickFunc={() => setOpenModal(false)}
        ></Modal>
      )}
    </>
  );
};

export default WindowsStepFive;
