import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Link from "next/link";
import { oxygen } from "../../../app/fonts";

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "25px 30px 0 30px",
  gap: "15px",
  marginTop: "auto",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    padding: "15px 0"
  }
}));

export const FooterRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "42px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    flexDirection: "column",
    gap: "24px"
  }
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textTransform: "uppercase",
  backgroundColor: "transparent",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  color: theme.palette.mode === "light" ? "#686355" : "#ABA28A",
  height: "48px",
  borderRadius: "2px",
  padding: "10px 15px",
  userSelect: "none",
  textDecoration: "none",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
  "&.active ": {
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "3px",
    transition: "all 0.3s ease-in-out"
  },
  "&:hover": {
    cursor: "pointer",
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  }
}));