import { padding, styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import { oxygen } from "../../app/fonts";
import Image from "next/image";
import { LinkedInSVG } from "../Common/Icons/LinkedInSVG";

export const TeamContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "50px 300px 30px 300px",
  [theme.breakpoints.down("lg")]: {
    padding: "50px 100px 30px 100px"
  },
  [theme.breakpoints.only("xs")]: {
    padding: "30px 20px 50px 20px"
  }
}));

export const TeamPageTitle = styled("h1")(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "700",
  fontSize: "55px",
  letterSpacing: 0,
  color: theme.palette.text.primary,
  userSelect: "none",
  textAlign: "center",
  margin: "25px 0",
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
  }
}));

export const TeamPageSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "400",
  fontSize: "24px",
  letterSpacing: 0,
  color: theme.palette.text.primary,
  userSelect: "none",
  textAlign: "center",
  marginTop: "10px",
}));

export const TeamGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 300px))",
  justifyContent: "center", 
  marginTop: "50px",
  gap: "50px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "minmax(0, 300px)",
  }
}));

export const TeamMemberCard = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: "300px",
  minWidth: "300px",
  minHeight: "350px",
  padding: "15px",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  borderRadius: "15px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.palette.mode === "dark"
    ? "0 4px 8px rgba(0, 0, 0, 0.5)"
    : "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
  },
  cursor: "pointer"
}));

export const TeamMemberImg = styled(Image)({
  width: "300px",
  maxHeight: "200px",
  minHeight: "200px",
  objectPosition: "top",
  objectFit: "cover",
  height: "auto",
  marginBottom: "15px",
  userSelect: "none",
  margin: "-15px -15px 10px -15px"
});

export const TeamMemberName = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "400",
  fontSize: "20px",
  color: theme.palette.text.primary,
  marginBottom: "5px",
  userSelect: "none"
}));

export const TeamMemberRole = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "300",
  fontSize: "18px",
  color: theme.palette.customBlue.main,
  marginBottom: "10px",
  userSelect: "none"
}));

export const TeamMemberFocus = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "300",
  fontSize: "16px",
  color: theme.palette.text.primary,
  marginBottom: "15px",
  userSelect: "none"
}));

export const TeamMemberCol = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "20px",
  height: "100%"
});

export const TeamMemberBio = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "400",
  fontSize: "18px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const LinkedInIcon = styled(LinkedInSVG)(({ theme }) => ({
  alignSelf: "flex-start",
  cursor: "pointer",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  }
}));