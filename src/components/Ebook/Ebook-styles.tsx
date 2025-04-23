import { maxWidth, styled, textAlign, width } from "@mui/system";
import {
  Box,
  Button,
  TextField,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography
} from "@mui/material";
import { inter, oxygen } from "../../app/fonts";
import Image from "next/image";
import { InfoSVG } from "../Common/Icons/InfoSVG";

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
    gap: "100px"
  },
  "@media (max-width: 1100px)": {
    padding: "222px 75px 257px 75px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "222px 50px 257px 50px"
  },
  "@media (max-width: 850px)": {
    padding: "100px 30px 30px 30px",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export const MainCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%"
}));

export const CTASubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 500,
  fontSize: "36px",
  textTransform: "uppercase",
  color: theme.palette.customBlue.main,
  letterSpacing: 0,
  lineHeight: "27px",
  userSelect: "none"
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
    lineHeight: "80px"
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "60px",
    lineHeight: "65px"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "55px",
    lineHeight: "55px"
  }
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
    lineHeight: "50px"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "40px"
  }
}));

export const CTABox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  backgroundColor: theme.palette.background.default,
  border:
    theme.palette.mode === "light" ? "1px solid #000000" : "1px solid #F5F5F5",
  borderRadius: "10px",
  padding: "60px 55px 80px 55px",
  minWidth: "450px",
  [theme.breakpoints.down("lg")]: {
    minWidth: "auto"
  }
}));

export const InfoIconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "15px",
  right: "15px"
}));

export const InfoIcon = styled(InfoSVG)(({ theme }) => ({
  cursor: "auto"
}));

export const EbookTooltip = styled((props: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: props.className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontFamily: inter.style.fontFamily,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    border:
      theme.palette.mode === "light"
        ? "1px solid #000000"
        : "1px solid #F5F5F5",
    padding: "8px 12px",
    borderRadius: "6px",
    maxWidth: "200px",
    whiteSpace: "normal"
  }
}));

export const CTABoxTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  fontSize: "48px",
  color: theme.palette.text.primary,
  letterSpacing: 0,
  lineHeight: "52px",
  userSelect: "none"
}));

export const CTABoxTextFieldContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  width: "100%"
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
    opacity: "0.8"
  }
}));

export const BookSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "light" ? "#D4D4D4" : "#080B1D",
  padding: "100px 195px",
  gap: "100px",
  width: "calc(100vw - 16px)",
  maxHeight: "800px",
  "@media (max-width: 1500px)": {
    padding: "100px 100px",
    gap: "50px"
  },
  [theme.breakpoints.down("lg")]: {
    padding: "100px 50px",
    gap: "30px"
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    maxHeight: "100%",
    padding: "20px 50px 50px 50px",
    alignItems: "center"
  },
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    gap: "50px"
  }
}));

// For the book image
export const BookImage = styled("img")(({ theme }) => ({
  width: "500px",
  height: "auto",
  transform: "translateY(-300px)",
  "@media (max-width: 1600px)": {
    width: "400px"
  },
  "@media (max-width: 1500px)": {
    width: "350px"
  },
  [theme.breakpoints.down("lg")]: {
    width: "325px",
    transform: "translateY(-200px)"
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
    transform: "translateY(0)"
  },
  [theme.breakpoints.down("sm")]: {
    width: "75%"
  }
}));

// Right column container (Title + Icons + Texts)
export const ContentCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "88px",
  flex: 1,
  [theme.breakpoints.down("sm")]: {
    gap: "50px"
  }
}));

// Section title
export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  fontSize: "36px",
  color: theme.palette.text.primary,
  lineHeight: "40px",
  letterSpacing: 0,
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    width: "100%"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "35px"
  }
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
    gap: "30px"
  }
}));

// Individual icon + description block
export const IconBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  flex: 1
}));

export const IconImg = styled(Image)(({ theme }) => ({
  objectFit: "contain",
  width: "120px",
  height: "120px",
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    width: "100px",
    height: "100px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "80px",
    height: "80px"
  }
}));

export const IconText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  lineHeight: "27px",
  letterSpacing: 0,
  fontSize: "20px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const SurveyText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "100%",
}));

export const SurveyTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 500,
  fontSize: "22px",
  color: theme.palette.text.primary,
  lineHeight: "27px",
  letterSpacing: 0,
  userSelect: "none"
}));

export const StyledTextarea = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.mode === "light" ? "#D4D4D4" : "#1A1F38",
    borderRadius: "5px",
    border:
      theme.palette.mode === "light"
        ? "1px solid #000000"
        : "1px solid #FFFFFF",
    padding: "8px 12px",
    alignItems: "flex-start"
  },
  "& .MuiInputBase-inputMultiline": {
    fontSize: "16px",
    fontFamily: inter.style.fontFamily,
    color: theme.palette.text.primary,
    lineHeight: "1.5",
    resize: "none",
    minHeight: "200px",
    maxHeight: "300px",
    overflow: "auto",
    // Scrollbar styles (Webkit)
    "&::-webkit-scrollbar": {
      width: "6px"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(255, 255, 255, 0.6)", // transparent light scroll
      borderRadius: "4px"
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent"
    },

    // Scrollbar styles (Firefox)
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255,255,255,0.6) transparent"
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },
  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #FF0000"
  }
}));
