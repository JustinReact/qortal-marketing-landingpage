
import { styled, keyframes } from "@mui/system";
import { Box } from "@mui/material";

const backdrop_blur = keyframes`
0% { 
    backdrop-filter: blur(0px);
    background: transparent;
    }
100% { 
    backdrop-filter: blur(5px);
    background: rgb(186 186 186 / 26%);
    }
`

const modal_transition = keyframes`
0% {
  visibility: hidden;
  opacity: 0;
}
100% {
  visibility: visible;
  opacity: 1;
}
`

export const Backdrop = styled(Box)({
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    background: "rgb(186 186 186 / 26%)",
    overflow: "hidden",
    animation: `${backdrop_blur} cubic-bezier(0.22, 1, 0.36, 1) 1s forwards`,
    zIndex: 5,
  });

  export const Modalbody = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "80vw",
    height: "80vh",
    position: "fixed",
    boxShadow: "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px",
    flexDirection: "column",
    padding: "15px",
    backgroundColor: theme.palette.mode === "light" ? "white" : theme.palette.secondary.dark,
    left: "50%",
    top: 0,
    transform: "translate(-50%, 10%)",
    borderRadius: "12px",
    overflowY: "auto",
    animation: `1s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 normal forwards running ${modal_transition}`,
    maxHeight: "80%",
    zIndex: 60
  }))
