import { useEffect, FC } from "react";
import { Backdrop, Modalbody, CloseIcon } from "./CommonModal-styles";
import { useTheme, useMediaQuery } from "@mui/material";

interface CommonModalProps {
  openModal: boolean;
  onClickFunc: () => void;
  children: React.ReactNode;
  customStyles?: any;
}

export const CommonModal: FC<CommonModalProps> = ({
  openModal,
  onClickFunc,
  customStyles,
  children
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  // useEffect to hide the body when the mobile side drawer is open

  useEffect(() => {
    if (openModal) {
      document.body.style.cssText = "overflow-y: hidden !important;";
    }
    return () => {
      document.body.style.cssText = "";
    };
  }, [openModal]);

  return (
    <>
      <Backdrop
        tabIndex={-1}
        onClick={() => {
          onClickFunc();
        }}
      />
      <Modalbody
        sx={{
          ...customStyles
        }}
      >
        {children}
        <CloseIcon
          onClickFunc={() => {
            onClickFunc();
          }}
          color={theme.palette.text.primary}
          height={isMobile ? "24" : "32" }
          width={isMobile ? "24" : "32" }
        />
      </Modalbody>
    </>
  );
};
