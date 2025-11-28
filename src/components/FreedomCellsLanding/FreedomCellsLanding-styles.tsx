import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { oxygen } from "../../app/fonts";

export const PageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  padding: "96px 90px 120px",
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  [theme.breakpoints.down("lg")]: {
    padding: "72px 32px 90px",
    gap: "64px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "48px 20px 72px",
    gap: "48px"
  }
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "48px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

export const HeroCopy = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px"
}));

export const HeroBadge = styled("span")(({ theme }) => ({
  alignSelf: "flex-start",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  padding: "8px 16px",
  borderRadius: "999px",
  background:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.08)"
      : "rgba(0,0,0,0.06)",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.08)"
  }`,
  textTransform: "uppercase"
}));

export const HeroTitle = styled("h1")(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "54px",
  lineHeight: 1.1,
  margin: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: "42px"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "34px"
  }
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: 1.6,
  fontFamily: oxygen.style.fontFamily,
  margin: 0,
  color:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.85)"
      : "rgba(0,0,0,0.75)"
}));

export const HeroButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  alignItems: "center"
}));

export const CTAButton = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 36px",
  borderRadius: "999px",
  background: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  fontWeight: 600,
  textDecoration: "none",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 15px 40px rgba(0,0,0,0.35)"
      : "0 15px 35px rgba(0,0,0,0.2)",
  "&:hover": {
    transform: "translateY(-2px)"
  }
}));

export const SecondaryLink = styled(Link)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  "&:hover": {
    color: theme.palette.text.primary
  }
}));

export const HeroStats = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  flexWrap: "wrap",
  marginTop: "8px"
}));

export const StatCard = styled(Box)(({ theme }) => ({
  flex: "1 1 200px",
  minWidth: "180px",
  padding: "20px",
  borderRadius: "20px",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
  }`,
  background:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.03)"
      : "rgba(0,0,0,0.03)",
  display: "flex",
  flexDirection: "column",
  gap: "6px"
}));

export const StatValue = styled("span")(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "30px",
  fontWeight: 600
}));

export const StatLabel = styled("span")(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "15px",
  color:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.7)"
      : "rgba(0,0,0,0.6)"
}));

export const HeroVisual = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "360px",
  borderRadius: "32px",
  overflow: "hidden",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
  }`,
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(140deg, rgba(64,87,255,0.25), rgba(0,0,0,0.6))"
      : "linear-gradient(140deg, rgba(64,87,255,0.15), rgba(255,255,255,0.9))"
}));

export const HeroImage = styled(Image)(({ theme }) => ({
  objectFit: "cover"
}));

export const HeroOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(140deg, rgba(0,0,0,0.75), rgba(0,0,0,0.2))"
      : "linear-gradient(140deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1))"
}));

export const HeroOverlayContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: "8px",
  color: "#ffffff"
}));

export const OverlayTitle = styled("h3")(() => ({
  margin: 0,
  fontSize: "26px",
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 600
}));

export const OverlayText = styled("p")(() => ({
  margin: 0,
  fontSize: "16px",
  fontFamily: oxygen.style.fontFamily,
  opacity: 0.9,
  lineHeight: 1.4
}));

export const HighlightsSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px"
}));

export const SectionTitle = styled("h2")(({ theme }) => ({
  margin: 0,
  fontFamily: oxygen.style.fontFamily,
  fontSize: "36px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px"
  }
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontFamily: oxygen.style.fontFamily,
  maxWidth: "720px",
  color:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.8)"
      : "rgba(0,0,0,0.7)"
}));

export const HighlightsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr"
  }
}));

export const HighlightCard = styled(Box)(({ theme }) => ({
  borderRadius: "24px",
  padding: "28px",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
  }`,
  background:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.02)"
      : "rgba(255,255,255,0.8)",
  backdropFilter: "blur(10px)",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
}));

export const HighlightTitle = styled("h3")(() => ({
  margin: 0,
  fontFamily: oxygen.style.fontFamily,
  fontSize: "24px"
}));

export const HighlightText = styled("p")(() => ({
  margin: 0,
  fontFamily: oxygen.style.fontFamily,
  fontSize: "17px",
  lineHeight: 1.5,
  opacity: 0.85
}));

export const StepsSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px"
}));

export const StepsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr"
  }
}));

export const StepCard = styled(Box)(({ theme }) => ({
  borderRadius: "18px",
  padding: "24px",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
  }`,
  display: "flex",
  flexDirection: "column",
  gap: "10px"
}));

export const StepIndex = styled("span")(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  color: theme.palette.primary.main
}));

export const StepTitle = styled("h3")(() => ({
  margin: 0,
  fontFamily: oxygen.style.fontFamily,
  fontSize: "22px"
}));

export const StepText = styled("p")(() => ({
  margin: 0,
  fontFamily: oxygen.style.fontFamily,
  fontSize: "16px",
  lineHeight: 1.5,
  opacity: 0.85
}));

export const CTASection = styled(Box)(({ theme }) => ({
  borderRadius: "28px",
  padding: "48px",
  border: `1px solid ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"
  }`,
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(140deg, rgba(33,150,243,0.2), rgba(0,0,0,0.6))"
      : "linear-gradient(140deg, rgba(33,150,243,0.25), rgba(233,244,255,0.9))",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  alignItems: "flex-start",
  [theme.breakpoints.down("sm")]: {
    padding: "36px"
  }
}));

export const CTAHeading = styled("h2")(({ theme }) => ({
  margin: 0,
  fontFamily: oxygen.style.fontFamily,
  fontSize: "32px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px"
  }
}));

export const CTAText = styled("p")(() => ({
  margin: 0,
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  lineHeight: 1.5,
  maxWidth: "640px"
}));
