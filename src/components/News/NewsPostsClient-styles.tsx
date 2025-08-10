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

export const NewsTitle = styled(Typography)(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontWeight: "400",
  fontSize: "55px",
  letterSpacing: "calc(0.09*15px)",
  color: theme.palette.text.primary,
  userSelect: "none",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px"
  }
}));

export const NewsCardsGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(368px, 1fr))",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "15px",
  padding: "25px 10px",
  width: "100%"
}));

export const NewsCard = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "368px",
  height: "382px",
  margin: "0 auto",
  ":hover": {
    cursor: "pointer"
  },
  [theme.breakpoints.down("sm")]: {
    width: "330px",
  }
}));

export const NewsCardImage = styled(Image)(({ theme }) => ({
  width: "328px",
  height: "220px",
  objectFit: "contain",
  userSelect: "none"
}));

export const NewsCardTitle = styled(Typography)(({ theme }) => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontFamily: redditSans.style.fontFamily,
  color: "#0088CC",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "25.6px",
  letterSpacing: 0,
  userSelect: "none"
}));

export const NewsCardWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  margin: "0 auto",
  padding: "0 7px 7px 7px",
  "& p": {
    margin: 0,  
  }
});

export const NewsCardDate = styled(Typography)({
  position: "absolute",
  bottom: "5px",
  left: "10px",
  fontFamily: redditSans.style.fontFamily,
  color:  "#888888",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "19.2px",
  letterSpacing: 0,
  userSelect: "none",
});

export const NewsCardBody = styled(Box)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.mode === "light" ? "#333333" : "#888888",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "22.4px",
  letterSpacing: 0,
  userSelect: "none",
  display:
    "-webkit-box" /* Ensures multiline content is treated as a block container */,
  WebkitBoxOrient: "vertical" /* Required for clamping */,
  WebkitLineClamp: 4 /* Adjust this number to the desired number of lines */,
  overflow: "hidden" /* Hides the overflowing content */,
  textOverflow: "ellipsis" /* Adds the ellipsis when content overflows */
}));