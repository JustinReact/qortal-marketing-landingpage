import { styled } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { montserrat, museo, oxygen } from "../../app/fonts";

export const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "100px 160px 50px 160px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    padding: "40px 60px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  }
}));

export const Header = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "60px",
  lineHeight: "1.33",
  color: theme.palette.text.primary,
  fontWeight: 700,
  letterSpacing: "0.9px",
  userSelect: "none",
  marginBottom: "50px",
  zIndex: 1,
  [theme.breakpoints.only("sm")]: {
    fontSize: "50px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "40px",
  }
}));

export const ArrowImg = styled(Image)(({ theme }) => ({
  position: "absolute",
  bottom: "-30px",
  right: "-100px",
  width: "100px",
  height: "auto",
  transform: "rotateX(180deg)",
  rotate: "-40deg",
  [theme.breakpoints.down("md")]: {
    right: "-80px"
  }
}));

export const VideoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
}));

export const ButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "20px"
}));

export const DiscordButton = styled("button")(({ theme }) => ({
  position: "relative",
  width: "300px",
  backgroundColor: "#ffffff",
  color: "#6271F0",
  fontFamily: montserrat.style.fontFamily,
  padding: "18px 40px",
  fontSize: "20px",
  letterSpacing: "0.9px",
  fontWeight: 500,
  border: "none",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 4px 5px 0px hsla(0,0%,0%,0.14),  0px 1px 10px 0px hsla(0,0%,0%,0.12),  0px 2px 4px -1px hsla(0,0%,0%,0.2)"
      : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%,0.12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)"
        : "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
  }
}));

export const Features = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start"
}));

export const FeatureContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  padding: "0 20px",
  textAlign: "center"
}));

export const SubHeader = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "30px",
  color: theme.palette.text.primary,
  letterSpacing: "0.5px",
  userSelect: "none"
}));

export const IconContainer1 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "#6271F0",
  userSelect: "none"
}));

export const IconContainer2 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "#e4f062",
  userSelect: "none"
}));

export const IconContainer3 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "#0fa8dc",
  userSelect: "none"
}));

export const FeatureText = styled(Typography)(({ theme }) => ({
  fontFamily: museo.style.fontFamily,
  fontSize: "22px",
  color: theme.palette.text.primary,
  letterSpacing: "0.5px",
  userSelect: "none"
}));
