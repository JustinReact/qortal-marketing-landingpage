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
import MacStepOne1 from "../../../../../public/images/Mac/MacStep1-1.jpg";
import MacStepOne2 from "../../../../../public/images/Mac/MacStep1-2.jpg";
import MacStepOne3 from "../../../../../public/images/Mac/MacStep1-3.jpg";
import MacStepOne4 from "../../../../../public/images/Mac/MacStep1-4.jpg";

interface MacStepOneProps {
  setShinyButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const MacStepOne = ({ setShinyButton }: MacStepOneProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>(MacStepOne1);
  const [modalImages, setModalImages] = useState<string[]>([]);

  const images = [
    {
      src: MacStepOne1,
      alt: "step1",
    },
    {
      src: MacStepOne2,
      alt: "step2",
    },
    {
      src: MacStepOne3,
      alt: "step3",
    },
    {
      src: MacStepOne4,
      alt: "step4",
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
              Get started with Qortal by downloading our user-friendly UI!
            </MuseoFont>
            <DownloadButton
              variant="contained"
              onClick={() => {
                setShinyButton(true);
                window.location.href = "https://github.com/Qortal/qortal-ui/releases/latest/download/Qortal-Setup-macOS.dmg";
              }}
            >
              Download Qortal UI
            </DownloadButton>
            <MuseoFont variant="h3">
              When prompted if you sure you want to open this file, click{" "}
              <strong>"Open"</strong>.
            </MuseoFont>
            <MuseoFont variant="h3">
              Once downloaded, open the .dmg file and drag the Qortal icon into
              the Applications folder.
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

export default MacStepOne;
