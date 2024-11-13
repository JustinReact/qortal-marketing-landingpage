import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { lucidaSans } from "../../app/fonts";

export const NewsPostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "88px 200px 25px 200px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 4px"
  }
}));

export const BackToNewsButton = styled(Button)({
  display: "flex",
  gap: "5px",
  borderRadius: "8px",
  backgroundColor: "#D2D2D2",
  color: "#000000",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#D2D2D2",
    filter: "brightness(0.9)"
  }
});

export const NewsTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "28px",
}));

export const NewsSubContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
}));

export const NewsPostTitle = styled("h1")({
  fontFamily: lucidaSans.style.fontFamily,
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "33px",
  letterSpacing: 0,
  marginBottom: "20px",
  textAlign: "center",
  color: "#fff",
  margin: 0,
});