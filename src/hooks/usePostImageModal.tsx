import { RefObject, useCallback, useEffect, useState } from "react";
import { resolveOriginalImageSrc } from "../utils/resolveOriginalImageSrc";

export function usePostImageModal() {
  const [openModal, setOpenModal] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);

  const openImageModal = useCallback(
    (imageSrc: string, allImages?: string[]) => {
      const images =
        allImages && allImages.length > 0 ? allImages : [imageSrc];
      setModalImages([
        imageSrc,
        ...images.filter((src) => src !== imageSrc),
      ]);
      setOpenModal(true);
    },
    []
  );

  const closeModal = useCallback(() => {
    setOpenModal(false);
    setModalImages([]);
  }, []);

  return { openModal, modalImages, openImageModal, closeModal };
}

export function useClickablePostImages(
  containerRef: RefObject<HTMLElement | null>,
  openImageModal: (imageSrc: string, allImages?: string[]) => void,
  deps: React.DependencyList = []
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const images = Array.from(container.querySelectorAll("img"));
    if (images.length === 0) return;

    const allSrcs = [
      ...new Set(
        images.map((img) => resolveOriginalImageSrc(img)).filter(Boolean)
      ),
    ];

    const clickHandlers = images.map((img) => {
      img.style.cursor = "pointer";
      const handler = () =>
        openImageModal(resolveOriginalImageSrc(img), allSrcs);
      img.addEventListener("click", handler);
      return { img, handler };
    });

    return () => {
      clickHandlers.forEach(({ img, handler }) => {
        img.removeEventListener("click", handler);
        img.style.cursor = "";
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, openImageModal, ...deps]);
}
