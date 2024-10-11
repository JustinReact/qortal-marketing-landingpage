import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";

export const BlogPostContainer = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "25px"
});

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

export const BlogDateAndCategoryRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  gap: "15px"
});
