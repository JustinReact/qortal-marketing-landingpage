import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Image from "next/image";
import { oxygen } from "../../app/fonts";

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
  margin: "0 0 60px 0",
  userSelect: "none",
}));

export const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  width: "100%",
  padding: "24px",
}));