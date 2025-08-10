import { Button, Typography } from "@mui/material";
import { Box, maxWidth, styled } from "@mui/system";
import Image from "next/image";
import { redditSans, roboto } from "../../app/fonts";

export const BlogPostContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  padding: "25px 600px",
  "@media(max-width: 1700px)": {
    padding: "25px 500px"
  },
  "@media(max-width: 1600px)": {
    padding: "25px 400px"
  },
  "@media(max-width: 1300px)": {
    padding: "25px 150px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "25px 100px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 4px"
  }
}));

export const BackToBlogButton = styled(Button)(({ theme }) => ({
  fontFamily: roboto.style.fontFamily,
  fontSize: "16px",
  display: "flex",
  justifyContent: "flex-start",
  gap: "18px",
  borderRadius: "8px",
  backgroundColor: theme.palette.mode === "dark" ? "#D2D2D2" : "#61757F",
  border: theme.palette.mode === "dark" ? "none" : "1px solid #000000",
  color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
  transition: "all 0.3s ease-in-out",
  marginBottom: "23px",
  padding: "7px 12",
  width: "173px",
  height: "30px",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.mode === "dark" ? "#D2D2D2" : "#61757F",
    filter: "brightness(0.85)",
  }
}));

export const BlogPostTitle = styled("h1")(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  fontSize: "40px",
  lineHeight: "45px",
  fontWeight: 500,
  margin: 0,
  textAlign: "left",
  width: "100%",
  color: theme.palette.text.primary,
}));

export const BlogMainImage = styled(Image)({
  width: "100%",
  height: "300px",
  objectFit: "contain",
  userSelect: "none"
});

export const BlogDateAndCategoryRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "flex-start",
  margin: "10px 0 10px 0",
  gap: "15px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "10px",
  }
}));

export const BlogDate = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  fontSize: "17px",
  color:
    theme.palette.mode === "light"
      ? theme.palette.secondary.main
      : theme.palette.primary.light,
  userSelect: "none"
}));

export const BlogBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  wordWrap: "break-word",
  fontFamily: redditSans.style.fontFamily,
  fontSize: "18px",
  fontWeight: 400,
  letterSpacing: "calc(0.04*14px)",
  color: theme.palette.text.primary,
  "& p": {
    lineHeight: "1.6",
    margin: "10px 0",
    "& sup": {
      color: `${theme.palette.secondary.main} !important`,  
    }
  },
  "& a": {
      color: `${theme.palette.secondary.main} !important`,  
  },
  "& em sup": {
    color: `${theme.palette.secondary.main} !important`,  
  },
  "& img": {
    marginTop: "10px !important",
    maxWidth: "100%",
  },
}));

export const BlogDivider = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "1px",
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));
