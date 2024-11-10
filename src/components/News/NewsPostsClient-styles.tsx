import { styled } from "@mui/system";
import {
  Box,
  Grid,
  Typography
} from "@mui/material";
import { futura, redditSans } from "../../app/fonts";
import Image from "next/image";

export const MainNewsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "106px 50px 20px 50px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "25px 0"
  }
}));

export const NewsTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: futura.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "55px",
  lineHeight: "73px",
  letterSpacing: "calc(0.09 * 55px)",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "35px"
  }
}));

export const NewsCardsGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "50px",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2,1fr)"
  },
  "@media(max-width:850px)": {
    gridTemplateColumns: "1fr",
  }
}));

export const NewsCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "328px",
  height: "auto",
  margin: "0 auto",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%,0.12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)",
    },
}));

export const NewsCardImage = styled(Image)(({ theme }) => ({
  objectFit: "contain",
  width: "100%",
  height: "auto",
}));

export const NewsCardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: "#0088CC",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "25.6px",
  letterSpacing: 0,
  userSelect: "none",
}));

export const NewsCardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  margin: "0 auto",
  padding: "0 7px 7px 7px",
}));

export const NewsCardDate = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.mode === 'light' ? "#333333" : "#888888",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "19.2px",
  letterSpacing: 0,
  userSelect: "none",
}));

export const NewsCardBody = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.mode === 'light' ? "#333333" : "#888888",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "22.4px",
  letterSpacing: 0,
  userSelect: "none",
}));