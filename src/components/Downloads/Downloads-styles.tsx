import { styled } from "@mui/system";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { futura, inter, oxygen, redditSans } from "../../app/fonts";
import { ChromeStoreSVG } from "../Common/Icons/ChromeStoreSVG";
import { AppleSVG } from "../Common/Icons/AppleSVG";
import { AndroidSVG } from "../Common/Icons/AndroidSVG";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "106px 90px 80px",
  width: "100%",
  "@media(max-width: 1444px)": {
    padding: "50px 20px 34px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 20px 25px",
    width: "100%"
  }
}));

export const DownloadsContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "960px",
  gap: "48px",
  [theme.breakpoints.down("sm")]: {
    gap: "32px"
  }
}));

export const DownloadsTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: futura.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "55px",
  lineHeight: "73px",
  letterSpacing: "calc(0.09 * 55px)",
  userSelect: "none",
  marginBottom: "12px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "35px",
    marginBottom: "8px"
  }
}));

export const FaqHint = styled("p")(({ theme }) => ({
  textAlign: "center",
  fontFamily: inter.style.fontFamily,
  fontSize: "15px",
  lineHeight: "22px",
  color: theme.palette.text.secondary,
  margin: "0 0 40px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "24px"
  }
}));

export const FaqHintLink = styled(Link)(({ theme }) => ({
  color: theme.palette.customBlue.main,
  textDecoration: "none",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    filter: "brightness(1.2)"
  }
}));

export const DownloadSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "100%",
  gap: "24px",
  padding: "32px",
  borderRadius: "12px",
  border: `1px solid ${
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.08)"
      : "rgba(255, 255, 255, 0.1)"
  }`,
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.02)"
      : "rgba(255, 255, 255, 0.03)",
  [theme.breakpoints.down("sm")]: {
    padding: "24px 16px",
    gap: "20px"
  }
}));

export const DownloadSectionCore = styled(DownloadSection)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(0, 62, 120, 0.04)"
      : "rgba(86, 174, 255, 0.05)",
  border: `1px solid ${
    theme.palette.mode === "light"
      ? "rgba(0, 62, 120, 0.12)"
      : "rgba(86, 174, 255, 0.15)"
  }`
}));

export const DownloadTextCol = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "8px",
  width: "100%"
});

export const DownloadText = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "26px",
  lineHeight: "34px",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
    lineHeight: "28px",
    textAlign: "center",
    alignSelf: "center"
  }
}));

export const DownloadSubText = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color:
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.72)"
      : "rgba(255, 255, 255, 0.88)",
  fontWeight: 400,
  fontSize: "17px",
  lineHeight: "26px",
  userSelect: "none",
  maxWidth: "720px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    lineHeight: "22px",
    textAlign: "center",
    alignSelf: "center"
  }
}));

export const DownloadsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px"
  }
}));

export const DownloadsCoreGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px"
  }
}));

export const DownloadCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textAlign: "center",
  backgroundColor: theme.palette.mode === "light" ? "#2F2F2F" : "#ffffff",
  padding: "20px 12px",
  borderRadius: "8px",
  width: "100%",
  minHeight: "110px",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    transform: "translateY(-2px)",
    boxShadow:
      theme.palette.mode === "light"
        ? "0 8px 24px rgba(0, 62, 120, 0.2)"
        : "0px 12px 17px 2px hsla(0, 0%, 100%, 0.08), 0px 5px 22px 4px hsla(0, 0%, 100%, 0.09)",
    backgroundColor: theme.palette.mode === "dark" ? "#56AEFF" : "#003E78"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "16px 8px",
    minHeight: "100px",
    gap: "8px"
  }
}));

export const DownloadText1 = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  color: theme.palette.mode === "light" ? "#ffffff" : "#000000",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "22px",
  userSelect: "none",
  ".mac-card:hover &, &:hover": {
    color: theme.palette.mode === "light" ? "#ffffff" : "#000000"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px"
  }
}));

export const DownloadText3 = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  color: theme.palette.mode === "light" ? "#ffffff" : "#000000",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "18px",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px"
  }
}));

export const PlatformCardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: "200px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "180px"
  }
}));

export const OtherVersionsCol = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "12px"
});

export const OtherVersionsText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 300,
  fontSize: "16px",
  lineHeight: "24px",
  userSelect: "none",
  textAlign: "center",
  "& a": {
    textDecoration: "none",
    color: theme.palette.customBlue.main,
    marginLeft: "5px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(0.9)"
    }
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "22px"
  }
}));

export const DownloadNowText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "50px",
  letterSpacing: 0,
  lineHeight: "65px",
  marginTop: "24px",
  textAlign: "center",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "35px",
    marginTop: "16px"
  }
}));

export const ChromeStoreLogo = styled(ChromeStoreSVG)({});

export const AppleLogo = styled(AppleSVG)({});

export const AndroidIcon = styled(AndroidSVG)({});

export const CommandLineModalContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "50px",
  left: "20px",
  width: "450px",
  height: "auto",
  backgroundColor: theme.palette.mode === "light" ? "#D9D9D9" : "#111112",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  gap: "20px",
  zIndex: 6,
  [theme.breakpoints.down("sm")]: {
    left: "10px",
    right: "10px",
    width: "auto"
  }
}));

export const CommandLineModalContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

export const CommandLineModalText = styled(Typography)(({ theme }) => ({
  fontFamily: inter.style.fontFamily,
  fontSize: "15px",
  letterSpacing: 0,
  color: theme.palette.text.primary,
  textAlign: "center",
  userSelect: "none"
}));
