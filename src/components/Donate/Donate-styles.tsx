import { styled } from "@mui/system";
import {
  Box,
  Link,
  Button,
  Typography,
  DialogTitle,
  IconButton
} from "@mui/material";
import Image from "next/image";
import { montserrat, oxygen } from "../../app/fonts";
import { PatreonSVG } from "../Common/Icons/PatreonSVG";
import { QortalSVG } from "../Common/Icons/QortalSVG";
import { LTCSVG } from "../Common/Icons/LTCSVG";
import { DialogRow } from "../Team/Team-styles";

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
  marginBottom: "30px"
}));

export const LinksTitle = styled("h1")(({ theme }) => ({
  fontSize: "20px",
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: 0,
  textAlign: "center",
  margin: 0,
  userSelect: "none"
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
  marginTop: "45px"
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
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    gap: "10px"
  },
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
    "& svg": {
      color: theme.palette.mode === "dark" ? "#000000" : "#ffffff"
    }
  }
}));

export const DonateButton = styled(Button)(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    gap: "10px"
  },
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
    "& svg": {
      color: theme.palette.mode === "dark" ? "#000000" : "#ffffff"
    }
  }
}));

export const PatreonIcon = styled(PatreonSVG)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  color: theme.palette.text.primary,
  position: "absolute",
  left: "30px",
  top: "50%",
  transform: "translateY(-50%)",
  [theme.breakpoints.down("sm")]: {
    position: "static",
    transform: "none",
    top: "auto",
    left: "auto",
    marginLeft: "15px"
  }
}));

export const QORTIcon = styled(QortalSVG)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  color: theme.palette.text.primary,
  position: "absolute",
  left: "30px",
  top: "50%",
  transform: "translateY(-50%)",
  [theme.breakpoints.down("sm")]: {
    position: "static",
    transform: "none",
    top: "auto",
    left: "auto",
    marginLeft: "15px"
  }
}));

export const LTCIcon = styled(LTCSVG)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  color: theme.palette.text.primary,
  position: "absolute",
  left: "30px",
  top: "50%",
  transform: "translateY(-50%)",
  [theme.breakpoints.down("sm")]: {
    position: "static",
    transform: "none",
    top: "auto",
    left: "auto",
    marginLeft: "15px"
  }
}));

export const DonateCol = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  padding: "15px"
});

export const DonateRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "flex-start"
  }
}));

export const StyledDialogRow = styled(DialogRow)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontFamily: montserrat.style.fontFamily,
  fontWeight: "400",
  fontSize: "23px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const StyledCloseIcon = styled(IconButton)({
  position: "absolute",
  right: "5px"
});

export const DonateText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "20px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  wordBreak: "break-all"
}));

export const DonateText2 = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "15px",
  fontWeight: 400,
  marginTop: "20px",
  color: theme.palette.text.primary
}));

export const CopyButton = styled(Button)(({ theme }) => ({
  position: "relative",
  padding: "3px 10px",
  fontSize: "14px",
  gap: "10px",
  width: "100%",
  maxWidth: "120px",
  borderRadius: "4px",
  backgroundColor: theme.palette.customBlue.main,
  fontFamily: oxygen.style.fontFamily,
  color: "white",
  display: "flex",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.customBlue.main
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1px 10px"
  }
}));

export const CheckmarkIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "2px",
  backgroundColor: "#24ab11bd",
  borderRadius: "50%"
}));
