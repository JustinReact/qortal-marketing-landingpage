import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Grid } from "@mui/material";
import {
  DownloadButton,
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

const MacStepThree = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("/images/Mac/MacStep3-1.jpg");
  const [modalImages, setModalImages] = useState<string[]>([]);

  const images = [
    {
      src: "/images/Mac/MacStep3-1.jpg",
      alt: "step1",
    },
    {
      src: "/images/Mac/MacStep3-2.jpg",
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
        <Grid item lg={6} md={12} xs={12}>
          <StepColumn container direction="column">
            <MuseoFont variant="h3">
              Once the Qortal UI installation and update is complete, you will be prompted to install the
              Qortal Core, which will connect you to the Qortal Blockchain.
              Click{" "}
              <strong>DOWNLOAD QORTAL CORE</strong>{" "}
              to install the Qortal Core.
            </MuseoFont>
            <MuseoFont variant="h3">
              Once launched, you will be able to create a{" "}
              <strong>new account</strong>, or import
              an existing account. You will then be able to start minting and
              building Q-Apps.
            </MuseoFont>
          </StepColumn>
        </Grid>
        <ScreenshotColumn {...imageSwipeHandlers} item lg={6} md={12} xs={12}>
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

export default MacStepThree;
