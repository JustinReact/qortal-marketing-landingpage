import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { oxygen } from "../../app/fonts";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "202px",
  padding: "222px 195px 257px 195px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    padding: "222px 100px 257px 100px",
    gap: "100px",
  },
  "@media (max-width: 1100px)": {
    padding: "222px 75px 257px 75px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "222px 50px 257px 50px",
  },
  "@media (max-width: 850px)": {
    padding: "150px 50px 50px 50px",
    flexDirection: "column",
    alignItems: "center",
  }
}));

export const MainCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const CTASubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 500,
  fontSize: "36px",
  textTransform: "uppercase",
  color: theme.palette.customBlue.main,
  letterSpacing: 0,
  lineHeight: "27px",
  userSelect: "none",
}));

export const CTATitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 500,
  fontSize: "96px",
  textTransform: "uppercase",
  color: theme.palette.text.primary,
  letterSpacing: 0,
  lineHeight: "99px",
  margin: "40px 0 70px 0",
  userSelect: "none",
  [theme.breakpoints.down("lg")]: {
    fontSize: "80px",
    lineHeight: "80px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "60px",
    lineHeight: "65px",
  },
  [theme.breakpoints.down("sm")]:{
    fontSize: "55px",
    lineHeight: "55px",
  },
}));

export const CTADescription = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  fontSize: "40px",
  color: theme.palette.text.primary,
  letterSpacing: 0,
  lineHeight: "61px",
  userSelect: "none",
  [theme.breakpoints.down("lg")]: {
    fontSize: "35px",
    lineHeight: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "40px",
  },
}));

export const CTABox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  backgroundColor: theme.palette.background.default,
  border: theme.palette.mode === "light" ? "1px solid #0000000" : "1px solid #F5F5F5",
  borderRadius: "10px",
  padding: "60px 55px 80px 55px",
  minWidth: "450px",
  [theme.breakpoints.down("lg")]: {
    minWidth: "auto",
  }
}));

export const CTABoxTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  fontSize: "48px",
  color: theme.palette.text.primary,
  letterSpacing: 0,
  lineHeight: "52px",
  userSelect: "none",
}));

export const CTABoxTextFieldContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  width: "100%",
}));

export const CTABoxButton = styled(Button)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "27px",
  color: "#ffffff",
  backgroundColor: theme.palette.customBlue.main,
  borderRadius: "5px",
  padding: "22px 0",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.customBlue.main,
    opacity: "0.8",
  },
}));

export const BookSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "light" ? "#D4D4D4" : "#050817",
  padding: "100px 195px",
  gap: "100px",
  width: "100%",

  [theme.breakpoints.down("lg")]: {
    padding: "80px 50px",
    gap: "60px",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "60px 30px",
    gap: "40px",
  },
}));

// For the book image
export const BookImage = styled("img")(({ theme }) => ({
  width: "350px",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "250px",
  },
}));

// Right column container (Title + Icons + Texts)
export const ContentCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "40px",
  flex: 1,
}));

// Section title
export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "36px",
  color: theme.palette.text.primary,
  lineHeight: "1.2",

  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));

// Icon + text row container
export const IconRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "50px",
  width: "100%",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "30px",
  },
}));

// Individual icon + description block
export const IconBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  flex: 1,
}));

export const IconPlaceholder = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  backgroundColor: "#999",
  borderRadius: "10px",
  marginBottom: "20px",
}));

export const IconText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.text.primary,
  lineHeight: "1.5",
}));
