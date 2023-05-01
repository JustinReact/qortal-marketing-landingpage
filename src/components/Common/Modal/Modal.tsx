import { FC, useEffect, useRef, useState } from "react";
import { Backdrop, Modalbody } from "./Modal-styles";
import { ChevronLeftSVG } from "../Icons/ChevronLeftSVG";
import { ChevronRightSVG } from "../Icons/ChevronRightSVG";
import { ModalScreenshot } from "../../TutorialSteps/Steps-styles";
import { Box, useTheme } from "@mui/material";

interface ModalProps {
  openModal: boolean;
  onClickFunc: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  images: string[];
}

const Modal: FC<ModalProps> = ({ onClickFunc, openModal, images }) => {
  const theme = useTheme();
  const modalRef = useRef(null);

  const [imageSelected, setImageSelected] = useState<string>(images[0]);

  const toggleLeftRef = useRef<HTMLDivElement | null>(null);
  const toggleRightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      (modalRef.current as any).focus();
    }
    return () => {
      if (modalRef.current) {
        (modalRef.current as any).blur();
      }
    };
  }, []);

  // useEffect to hide the body when the mobile side drawer is open

  useEffect(() => {
    if (openModal) {
      document.body.style.cssText = "overflow-y: hidden !important;";
    }
    return () => {
      document.body.style.cssText = "";
    };
  }, [openModal]);

  console.log({ imageSelected });
  console.log({ images });

  return (
    <div>
      <Backdrop
        ref={modalRef}
        tabIndex={-1}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (
            toggleLeftRef?.current?.contains(e.target as Node) ||
            toggleRightRef?.current?.contains(e.target as Node)
          ) {
            return;
          }
          onClickFunc(e);
        }}
      >
        {images.length > 1 && (
          <>
            <ChevronLeftSVG
              onClickFunc={() => {
                const imageIndex = images.findIndex(
                  (image) => image === imageSelected
                );
                if (imageIndex === 0) {
                  setImageSelected(images[images.length - 1]);
                } else {
                  setImageSelected(images[imageIndex - 1]);
                }
              }}
              color={theme.palette.text.primary}
              height={"50"}
              width={"50"}
              className={"chevron-left"}
              ref={toggleLeftRef}
            />
            <ChevronRightSVG
              onClickFunc={() => {
                const imageIndex = images.findIndex(
                  (image) => image === imageSelected
                );
                if (imageIndex === images.length - 1) {
                  setImageSelected(images[0]);
                } else {
                  setImageSelected(images[imageIndex + 1]);
                }
              }}
              color={theme.palette.text.primary}
              height={"50"}
              width={"50"}
              className={"chevron-right"}
              ref={toggleRightRef}
            />
          </>
        )}
      </Backdrop>
      <Modalbody>
        <ModalScreenshot
          src={imageSelected}
          alt="modal-image"
        ></ModalScreenshot>
      </Modalbody>
    </div>
  );
};

export default Modal;
