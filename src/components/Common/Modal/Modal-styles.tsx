import { styled, keyframes } from "@mui/system";
import { Box } from "@mui/material";
import { ChevronLeftSVG } from "../Icons/ChevronLeftSVG";
import { ChevronRightSVG } from "../Icons/ChevronRightSVG";
import { CloseSVG } from "../Icons/CloseSVG";

const backdrop_blur = keyframes`
0% { 
    backdrop-filter: blur(0px);
    background: transparent;
    }
100% { 
    backdrop-filter: blur(5px);
    background: rgb(186 186 186 / 26%);
    }
`;

const modal_transition = keyframes`
0% {
  visibility: hidden;
  opacity: 0;
}
100% {
  visibility: visible;
  opacity: 1;
}
`;

export const Backdrop = styled(Box)({
  position: "fixed",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  background: "rgb(186 186 186 / 26%)",
  overflow: "hidden",
  animation: `${backdrop_blur} cubic-bezier(0.22, 1, 0.36, 1) 1s forwards`,
  zIndex: 5
});

export const Modalbody = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "80vw",
  height: "80vh",
  position: "fixed",
  boxShadow:
    "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
  flexDirection: "column",
  padding: "20px 15px 15px 15px",
  backgroundColor:
    theme.palette.mode === "light" ? "white" : theme.palette.secondary.dark,
  left: "50%",
  top: 0,
  transform: "translate(-50%, 10%)",
  borderRadius: "12px",
  overflowY: "auto",
  animation: `1s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 normal forwards running ${modal_transition}`,
  maxHeight: "80%",
  zIndex: 60,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    transform: "none",
    position: "fixed",
    width: "100vw",
    height: "100%",
    maxHeight: "100%",
    boxShadow:
      "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    padding: "20px 15px 15px 15px",
    backgroundColor: theme.palette.background.default,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    borderRadius: 0,
    animation:
      "1s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 normal forwards running animation-1wf7x19",
    zIndex: "60"
  }
}));

export const ChevronLeftIcon = styled(ChevronLeftSVG)({
  position: "absolute",
  left: "50px",
  top: "50%",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    scale: "1.07"
  }
});

export const ChevronRightIcon = styled(ChevronRightSVG)({
  position: "absolute",
  right: "50px",
  top: "50%",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    scale: "1.07"
  }
});

export const CloseIcon = styled(CloseSVG)(({ theme }) => ({
  position: "absolute",
  right: "20px",
  top: "20px",
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    scale: "1.1"
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    top: 0,
    right: "20px",
    bottom: "20px"
  }
}));
