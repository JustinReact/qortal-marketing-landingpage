import { FC, useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  Backdrop,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  Modalbody,
  ModalScreenshot
} from "./Modal-styles";
import { useTheme } from "@mui/material";

interface ModalProps {
  openModal: boolean;
  onImageChangeFunc?: (image: string) => void;
  onClickFunc: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  images: string[];
  initialImageIndex?: number;
}

const Modal: FC<ModalProps> = ({
  onClickFunc,
  onImageChangeFunc,
  openModal,
  images,
  initialImageIndex = 0
}) => {
  const theme = useTheme();
  const modalRef = useRef(null);
  const toggleLeftRef = useRef<HTMLDivElement | null>(null);
  const toggleRightRef = useRef<HTMLDivElement | null>(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  useEffect(() => {
    if (openModal) {
      setSelectedImageIndex(initialImageIndex);
    }
  }, [openModal, initialImageIndex]);

  const handlePreviousImage = () => {
    const newIndex =
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
    onImageChangeFunc && onImageChangeFunc(images[newIndex]);
    setSelectedImageIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex =
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1;

    onImageChangeFunc && onImageChangeFunc(images[newIndex]);
    setSelectedImageIndex(newIndex);
  };

  useEffect(() => {
    if (!openModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClickFunc();
        return;
      }

      if (images.length <= 1) return;

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedImageIndex((currentIndex) => {
          const newIndex =
            event.key === "ArrowLeft"
              ? currentIndex === 0
                ? images.length - 1
                : currentIndex - 1
              : currentIndex === images.length - 1
                ? 0
                : currentIndex + 1;
          onImageChangeFunc?.(images[newIndex]);
          return newIndex;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openModal, onClickFunc, images, onImageChangeFunc]);

  // Modal Mobile Swipe Handlers

  const imageSwipeHandlers = useSwipeable({
    onSwipedUp: () => {
      handlePreviousImage();
    },
    onSwipedDown: () => {
      handleNextImage();
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  return (
    <>
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
                handlePreviousImage();
              }}
              color={theme.palette.text.primary}
              height={"50"}
              width={"50"}
              ref={toggleLeftRef}
            />
            <ChevronRightIcon
              onClickFunc={() => {
                handleNextImage();
              }}
              color={theme.palette.text.primary}
              height={"50"}
              width={"50"}
              ref={toggleRightRef}
            />
          </>
        )}
      </Backdrop>
      <Modalbody {...imageSwipeHandlers}>
        <ModalScreenshot
          src={images[selectedImageIndex]}
          alt="modal-image"
          width={3840}
          height={2160}
          quality={100}
          unoptimized
        ></ModalScreenshot>
        <CloseIcon
          onClickFunc={() => {
            onClickFunc();
          }}
          color={theme.palette.text.primary}
          height={"32"}
          width={"32"}
        />
      </Modalbody>
    </>
  );
};

export default Modal;
