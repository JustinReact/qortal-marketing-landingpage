import { FC, useEffect, useRef } from "react";
import { Backdrop, Modalbody } from "./Modal-styles";

interface ModalProps {
  children: React.ReactNode;
  onClickFunc: () => void;
}

const Modal: FC<ModalProps> = ({ onClickFunc, children }) => {
  const modalRef = useRef(null);

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

  return (
    <div>
      <Backdrop
        ref={modalRef}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onClickFunc();
          }
        }}
        onClick={() => {
          onClickFunc();
        }}
      ></Backdrop>
      <Modalbody>{children}</Modalbody>
    </div>
  );
};

export default Modal;
