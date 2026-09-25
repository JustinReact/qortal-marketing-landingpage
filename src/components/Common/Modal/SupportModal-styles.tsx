import { styled } from "@mui/system";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { CloseSVG } from "../Icons/CloseSVG";
import { futura, inter } from "../../../app/fonts";
import { HeadphonesSVG } from "../Icons/HeadphonesSVG";

export const SupportModalContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "50px",
  right: "20px",
  width: "450px",
  height: "auto",
  maxHeight: "calc(100vh - 80px)",
  overflowY: "auto",
  backgroundColor: theme.palette.mode === "light" ? "#D9D9D9" : "#111112",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "36px 28px 24px",
  gap: "18px",
  zIndex: 6,
  [theme.breakpoints.down("sm")]: {
    width: "95vw",
    right: "10px",
    left: "10px",
    bottom: "16px",
    maxHeight: "calc(100vh - 32px)",
    padding: "32px 20px 20px"
  }
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
  gap: "16px",
  width: "100%"
});

export const SupportModalFormWrap = styled(Box)({
  width: "100%"
});

export const SupportModalDivider = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "1px",
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.12)"
      : "rgba(255, 255, 255, 0.12)"
}));

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

export const SupportModalFaqLink = styled(Link)(({ theme }) => ({
  fontFamily: inter.style.fontFamily,
  fontSize: "13px",
  color: theme.palette.customBlue.main,
  textDecoration: "none",
  textAlign: "center",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    textDecoration: "underline"
  }
}));