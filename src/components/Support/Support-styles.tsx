import { styled } from "@mui/system";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { oxygen } from "../../app/fonts";
import { CloudSVG } from "../Common/Icons/CloudSVG";
import { DiscordSVG } from "../Common/Icons/DiscordSVG";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "106px 90px 106px 90px",
  width: "100%",
  "@media(max-width: 1444px)": {
    padding: "50px 20px 34px 20px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 20px 25px 20px",
    width: "100%"
  }
}));

export const MainCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%"
}));

export const QortalImg = styled(Image)(({ theme }) => ({
  marginBottom: "30px",
}));

export const LinksTitle = styled("h1")(({ theme }) => ({
  fontSize: "20px",
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,  
  lineHeight: "24px",
  letterSpacing: 0,
  textAlign: "center",
  margin: 0,
  userSelect: "none",
}));

export const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  width: "100%",
  maxWidth: "751px",
  padding: "24px",
  marginTop: "45px",
}));

export const LinkButton = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "56px",
  borderRadius: "30px",
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.primary}`,
  fontSize: "20px",
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: 0,
  textTransform: "none",
  textDecoration: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
    "& svg": {
      color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
    }
  },
}));

export const CloudIcon = styled(CloudSVG)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  color: theme.palette.text.primary,
  position: "absolute",
  left: "30px",
  top: "18px",
}));

export const DiscordIcon = styled(DiscordSVG)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  color: theme.palette.text.primary,
  position: "absolute",
  left: "30px",
  top: "18px",
}));