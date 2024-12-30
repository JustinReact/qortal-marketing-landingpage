import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { inter, oxygen } from "../../app/fonts";

export const PrivacyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "30px 300px",
  [theme.breakpoints.only("xs")]: {
    padding: "50px 20px"
  }
}));

export const PrivacySubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "25px"
}));

export const PrivacyHeader = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "400",
  letterSpacing: "0.3px",
  fontSize: "32px",
  marginBottom: "20px",
  textAlign: "center",
  userSelect: "none",
}));

export const PrivacySubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "400",
  letterSpacing: "0.3px",
  fontSize: "24px",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    lineHeight: "40px",
    marginTop: "10px",
    overflowWrap: "anywhere"
  }
}));

export const PrivacyText = styled(Typography)(({ theme }) => ({
    fontFamily: inter.style.fontFamily,
    fontSize: "19.5px",
    lineHeight: "33px",
    letterSpacing: "0.2px",
    fontWeight: theme.palette.mode === "dark" ? "300" : "400",
    textIndent: "20px",
    width: "fit-content",
    color: theme.palette.text.primary,
    "& a": {
      textDecoration: "none",
      color: theme.palette.secondary.main,
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        cursor: "pointer",
        filter: "brightness(1.2)"
      }
    }
}));  