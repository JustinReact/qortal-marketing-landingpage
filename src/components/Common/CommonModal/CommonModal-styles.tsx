import { styled, keyframes } from "@mui/system";
import { Box } from "@mui/material";
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
  width: "fill-available",
  minWidth: "70vw",
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
  transform: "translateX(-50%)",
  borderRadius: "12px",
  overflowY: "auto",
  animation: `1s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 normal forwards running ${modal_transition}`,
  maxHeight: "80%",
  zIndex: 60,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    position: "fixed",
    width: "auto",
    height: "300px",
    maxHeight: "100%",
    boxShadow:
      "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    padding: "20px 15px 15px 15px",
    top: "20%",
    bottom: 0,
    right: 0,
    borderRadius: 0,
    animation:
      "1s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 normal forwards running animation-1wf7x19",
    zIndex: "60"
  }
}));

export const CloseIcon = styled(CloseSVG)(({ theme }) => ({
  position: "absolute",
  right: "15px",
  top: "15px",
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
    right: "20px"
  }
}));
