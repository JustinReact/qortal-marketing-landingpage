import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { CloseSVG } from "../Icons/CloseSVG";
import { futura, inter } from "../../../app/fonts";
import { HeadphonesSVG } from "../Icons/HeadphonesSVG";

export const SupportModalContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "50px",
  right: "20px",
  width: "450px",
  height: "250px",
  backgroundColor: theme.palette.mode === "light" ? "#D9D9D9" : "#111112",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 37px",
  gap: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "95vw",
    right: "10px",
    left: "10px",
  },
}));

export const CloseIcon = styled(CloseSVG)(({ theme }) => ({
  position: "absolute",
  right: "10px",
  top: "10px",
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    scale: "1.1"
  },
}));

export const SupportModalContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "26px"
});

export const SupportModalText = styled(Typography)(({ theme }) => ({
  fontFamily: inter.style.fontFamily,
  fontSize: "15px",
  letterSpacing: 0,
  color: theme.palette.text.primary,
  textAlign: "center",
  userSelect: "none",
}));

export const HeadphonesIcon = styled(HeadphonesSVG)(({ theme }) => ({}));

export const SupportModalButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "7px",
  width: "100%",
  padding: "4.5px 0",
  height: "auto",
  fontFamily: futura.style.fontFamily,
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: "30px",
  transition: "all 0.3s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.customBlue.main,
    color: "#ffffff",
    border: `1px solid ${theme.palette.customBlue.main}`,
  },
  "&:hover": {
    backgroundColor: theme.palette.customBlue.main,
    color: "#ffffff",
    border: `1px solid ${theme.palette.customBlue.main}`,
   "& svg path": {
      transition: "all 0.3s ease-in-out",
      fill: "#ffffff !important",
    },
  }
}));