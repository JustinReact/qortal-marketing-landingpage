import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { LinuxTerminal } from "../LinuxTerminal/LinuxTerminal";
import { Grid, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import {
  DownloadButton,
  DownloadOptionCard,
  ImageToggleDot,
  ImageToggleRow,
  LinuxStepColumn,
  LinuxStepColumnsContainer,
  MagnifyingGlass,
  MuseoFont,
  Screenshot,
  ScreenshotColumn,
  ScreenshotContainer,
  StepCard,
  StepCardInnerContainer,
  StepColumn,
} from "../../Steps-styles";
import LinuxDownloadImg from "../../../../../public/images/Linux/LinuxDownload.png";
import LinuxAppPermissionImg from "../../../../../public/images/Linux/LinuxAppPermission.png";
import TerminalScreenshot from "../../../../../public/images/Linux/LinuxTerminalScreenshot.png";
import Modal from "../../../Common/Modal/Modal";

interface LinuxStepOneProps {
  downloadOption: string;
  setDownloadOption: (option: string) => void;
  setShinyButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinuxStepOne = ({
  downloadOption,
  setDownloadOption,
  setShinyButton
}: LinuxStepOneProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>(LinuxDownloadImg);
  const [modalImages, setModalImages] = useState<string[]>([]);


  const images = [
    {
      src: LinuxDownloadImg,
      alt: "step1",
    },
    {
      src: LinuxAppPermissionImg,
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
      <StepCard
        style={{
          padding: "18px 15px 15px 15px",
          width: "100%",
        }}
      >
        <LinuxStepColumnsContainer>
          <Grid
            container
            sx={{ flexWrap: "nowrap", justifyContent: "space-between" }}
          >
            <LinuxStepColumn item sm={6} xs={12}>
              <DownloadOptionCard
                downloadOption={downloadOption === "appImage"}
                onClick={() => setDownloadOption("appImage")}
              >
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight="400"
                >
                  {isMobile ? "Appimage" : "Appimage Installer"}{" "}
                </Typography>
              </DownloadOptionCard>
            </LinuxStepColumn>
            <LinuxStepColumn item sm={6} xs={12}>
              <DownloadOptionCard
                downloadOption={downloadOption === "terminal"}
                onClick={() => setDownloadOption("terminal")}
              >
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight="400"
                >
                  Terminal
                </Typography>
              </DownloadOptionCard>
            </LinuxStepColumn>
          </Grid>
          <StepCardInnerContainer container>
            {downloadOption === "appImage" ? (
              <>
                <Grid item xs={12} md={12} lg={6}>
                  <StepColumn container direction="column">
                    <MuseoFont variant="h3">
                      Download and install the Qortal UI appimage installer by
                      clicking the button below!
                    </MuseoFont>
                    <MuseoFont variant="h3" sx={{ marginBottom: "25px" }}>
                      Note: You may need to make the file executable by right
                      clicking on it in your Downloads folder {">"} Properties{" "}
                      {">"} Permissions {">"} Allow executing file as program
                    </MuseoFont>
                    <DownloadButton
                      variant="contained"
                      onClick={() => {
                        setShinyButton(true);
                        window.location.href =
                          "https://github.com/Qortal/qortal-ui/releases/latest/download/Qortal-Setup-amd64.AppImage";
                      }}
                    >
                      Download Qortal UI
                    </DownloadButton>
                  </StepColumn>
                </Grid>

                <ScreenshotColumn
                  {...imageSwipeHandlers}
                  item
                  xs={12}
                  md={12}
                  lg={6}
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
              </>
            ) : (
              <LinuxTerminal setOpenModal={() => setOpenModal(true)} />
            )}
          </StepCardInnerContainer>
        </LinuxStepColumnsContainer>
      </StepCard>
      {openModal && downloadOption === "appImage" ? (
        <Modal
          openModal={openModal}
          onClickFunc={() => {
            setOpenModal(false);
          }}
          onImageChangeFunc={(image) => setSelectedImage(image)}
          images={modalImages}
        ></Modal>
      ) : openModal && downloadOption === "terminal" ? (
        <Modal
          openModal={openModal}
          onClickFunc={() => {
            setOpenModal(false);
          }}
          images={[TerminalScreenshot]}
        ></Modal>
      ) : null}
    </>
  );
};

export default LinuxStepOne;
