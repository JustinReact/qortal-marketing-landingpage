import { FC, useEffect, useRef, useState } from "react";
import {
  Backdrop,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  Modalbody,
} from "./Modal-styles";
import { ModalScreenshot } from "../../TutorialSteps/Steps-styles";
import { useTheme } from "@mui/material";

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
            <ChevronLeftIcon
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
              ref={toggleLeftRef}
            />
            <ChevronRightIcon
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
        <CloseIcon
          onClickFunc={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            onClickFunc(e);
          }}
          color={theme.palette.text.primary}
          height={"32"}
          width={"32"}
        />
      </Modalbody>
    </div>
  );
};

export default Modal;
