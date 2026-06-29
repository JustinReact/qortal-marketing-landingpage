"use client";

import { styled } from "@mui/system";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography
} from "@mui/material";
import { inter, futura, oxygen } from "../../app/fonts";

export const FaqContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "106px 300px 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "80px 80px 60px"
  },
  [theme.breakpoints.only("xs")]: {
    padding: "50px 20px 40px"
  }
}));

export const FaqInner = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "860px",
  gap: "48px"
});

export const FaqHeader = styled("h1")(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontWeight: 400,
  letterSpacing: "calc(0.09 * 55px)",
  fontSize: "55px",
  lineHeight: 1.2,
  textAlign: "center",
  userSelect: "none",
  color: theme.palette.text.primary,
  margin: 0,
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    letterSpacing: "0.04em",
    lineHeight: 1.15
  }
}));

export const FaqSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: inter.style.fontFamily,
  fontSize: "18px",
  lineHeight: "28px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "-32px"
}));

export const FaqSectionBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px"
});

export const FaqSectionHeading = styled("h2")(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  fontSize: "24px",
  letterSpacing: "0.2px",
  color: theme.palette.text.primary,
  scrollMarginTop: "80px",
  margin: 0
}));

export const FaqAccordionList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px"
});

export const FaqAccordionWrapper = styled(Box)({
  position: "relative",
  scrollMarginTop: "80px"
});

export const FaqAccordion = styled(Accordion)(({ theme }) => ({
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.12)"
  }`,
  borderRadius: "8px !important",
  backgroundColor: "transparent",
  "&:before": {
    display: "none"
  },
  "&.Mui-expanded": {
    margin: 0
  }
}));

export const FaqAccordionSummary = styled(AccordionSummary)({
  minHeight: "56px",
  padding: "0 16px",
  paddingRight: "72px",
  "& .MuiAccordionSummary-content": {
    margin: "12px 0",
    alignItems: "center"
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    display: "none"
  }
});

export const FaqSummaryActions = styled(Box)({
  position: "absolute",
  top: 0,
  right: "12px",
  height: "56px",
  display: "flex",
  alignItems: "center",
  gap: "2px",
  zIndex: 2
});

export const FaqQuestionText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: 1.4,
  color: theme.palette.text.primary,
  flex: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px"
  }
}));

export const FaqCopyButton = styled(IconButton)(({ theme }) => ({
  padding: "6px",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.customBlue.main,
    backgroundColor: "transparent"
  }
}));

export const FaqExpandButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expanded"
})<{ expanded?: boolean }>(({ theme, expanded }) => ({
  padding: "6px",
  color: theme.palette.customBlue.main,
  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "transparent"
  }
}));

export const FaqAccordionDetails = styled(AccordionDetails)({
  padding: "0 16px 16px"
});

export const FaqAnswerText = styled(Typography)(({ theme }) => ({
  fontFamily: inter.style.fontFamily,
  fontSize: "16px",
  lineHeight: "28px",
  letterSpacing: "0.2px",
  fontWeight: theme.palette.mode === "dark" ? 300 : 400,
  color: theme.palette.text.primary,
  "& a": {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(1.2)"
    }
  }
}));

export const FaqInternalAnswerLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(1.2)"
  }
}));

export const FaqExternalAnswerLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(1.2)"
  }
}));
