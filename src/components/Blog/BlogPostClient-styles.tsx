import { Button, Typography } from "@mui/material";
import { Box, display, lineHeight, styled, textAlign } from "@mui/system";
import Image from "next/image";
import { cambonLight, ptSans, raleway } from "../../app/fonts";

export const BlogPostContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "25px 50px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px"
  }
}));

export const BackToBlogButton = styled(Button)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  position: "absolute",
  top: "10px",
  left: "10px",
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.main,
    filter: "brightness(1.3)"
  }
}));

export const BlogPostTitle = styled("h1")({
  fontFamily: "Lovelo",
  fontSize: "40px",
  fontWeight: 500,
  marginBottom: "20px",
  textAlign: "center",
  color: "#fff"
});

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
  justifyContent: "center",
  marginBottom: "20px",
  gap: "15px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "10px",
    marginTop: "55px"
  }
}));

export const BlogDate = styled(Typography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontSize: "17px",
  color:
    theme.palette.mode === "light"
      ? theme.palette.secondary.main
      : theme.palette.primary.light,
  userSelect: "none"
}));

export const BlogBody = styled(Box)(({ theme }) => ({
  fontFamily: cambonLight.style.fontFamily,
  fontSize: "18px",
  fontWeight: 300,
  letterSpacing: "0.2px",
  color: theme.palette.text.primary,
  "& p": {
    lineHeight: "1.6"
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center"
  }
}));

export const BlogDivider = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "1px",
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));
