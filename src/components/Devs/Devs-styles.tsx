import { styled } from "@mui/system";
import { Grid, Typography, Box, Button } from "@mui/material";
import { oxygen } from "../../app/fonts";
import Image from "next/image";

export const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "90px 130px",
  textAlign: "center",
  transform: "translateY(10px)",
  width: "calc(100vw - 16px)",
  marginBottom: "100px",
  backgroundColor: theme.palette.mode === "dark" ? "#0d1122" : "#e6e6e6",
  [theme.breakpoints.down("md")]: {
    padding: "40px 60px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 20px 70px 20px"
  }
}));

export const Header = styled(Typography)(({ theme }) => ({
  position: "relative",
  textAlign: "left",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "32px",
  lineHeight: "1.33",
  color: theme.palette.text.primary,
  fontWeight: 700,
  letterSpacing: "0.9px",
  userSelect: "none",
  zIndex: 1,
  [theme.breakpoints.up("xl")]: {
    fontSize: "42px"
  }
}));

export const TopCol = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  justifyContent: "center",
  alignItems: "flex-start"
}));

export const VideoBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  [theme.breakpoints.up("xl")]: {
    justifyContent: "flex-start"
  }
}));

export const YoutubeVideoContainer = styled(Box)(({ theme }) => ({
  "& iframe": {
    width: "700px",
    height: "500px",
    border: "none",
    "@media (max-width: 1331px)": {
      width: "600px",
      height: "500px",
      border: "none"
    },
    [theme.breakpoints.down("lg")]: {
      width: "500px",
      height: "500px",
      border: "none"
    },
    "@media (max-width: 1135px)": {
      width: "450px",
      height: "500px",
      border: "none"
    },
    "@media (max-width: 1078px)": {
      width: "325px",
      height: "500px",
      border: "none"
    },
    [theme.breakpoints.down("md")]: {
      width: "700px",
      height: "500px",
      border: "none"
    },
    "@media (max-width: 750px)": {
      width: "500px",
      height: "500px",
      border: "none"
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "500px",
      border: "none"
    }
  }
}));

export const CTARow = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  gap: "75px",
  alignItems: "center",
  margin: "50px 0",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "20px"
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px"
  }
}));

export const CTAText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "60px",
  textTransform: "capitalize",
  color: theme.palette.text.primary,
  letterSpacing: "0.5px",
  userSelect: "none"
}));

export const Features = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "30px",
  padding: "0 130px 90px 130px",

}));

export const FeatureContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "15px",
  padding: "45px 35px",
  textAlign: "left",
  backgroundColor: theme.palette.mode === "dark" ? "#1a1f36" : "#ffffff",
  height: "-webkit-fill-available",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#22273e" : "#f9f9f9",
  },
}));

export const TopHeader = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "20px",
  color: theme.palette.text.primary,
  letterSpacing: "0.5px",
  fontWeight: 400
}));

export const TopSubHeader = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 300,
  fontSize: "18px",
  color: theme.palette.text.primary,
  letterSpacing: "0.5px",
  userSelect: "none"
}));

export const SubHeader = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 700,
  fontSize: "25px",
  color: theme.palette.text.primary,
  letterSpacing: "0.5px",
  userSelect: "none"
}));

export const FeaturesTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "15px",
  maxWidth: "50%"
}));

export const FeatureCardsRow = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  }
}));

export const IconContainer1 = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2.5px",
  borderRadius: "20px",
  backgroundColor: "#8162f0",
  userSelect: "none"
}));

export const IconContainer2 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "#09b912",
  userSelect: "none"
}));

export const IconContainer3 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "#00318b",
  userSelect: "none"
}));

export const FeatureText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  letterSpacing: "0.5px",
  userSelect: "none"
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  lineHeight: "21.3px",
  marginTop: "10px",
  alignSelf: "center",
  letterSpacing: 0,
  fontSize: "16px",
  width: "fitContent",
  height: "38px",
  padding: "15px",
  gap: "7px",
  borderRadius: "3px",
  border: `1px solid ${theme.palette.customBlue.main}`,
  color: "#ffffff",
  backgroundColor: theme.palette.customBlue.main,
  cursor: "pointer",
  boxShadow: "1px 4px 10.5px 0px #0000004D",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#F3F3F3",
    color: "#000000",
    border: "1px solid #F3F3F3"
  },
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available"
  }
}));

export const TopFoldButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "8px 0",
  gap: "10px",
  width: "100%"
}));

export const QAppsImg = styled(Image)(({ theme }) => ({
  objectFit: "contain",
  objectPosition: "left",
  userSelect: "none",
  marginBottom: "5px",
}));

export const CTAButton1 = styled(Button)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "21.3px",
  letterSpacing: 0,
  width: "190px",
  height: "43px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  boxShadow: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    boxShadow: "1px 4px 10.5px 0px #0000004D",
    backgroundColor: "#F3F3F3",
    border:
      theme.palette.mode === "dark"
        ? `1px solid ${theme.palette.text.primary}`
        : "1px solid #F3F3F3",
    color: "#000000"
  },
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available"
  }
}));

export const CTAButton2 = styled(Button)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "21.3px",
  letterSpacing: 0,
  width: "190px",
  height: "43px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.customBlue.main}`,
  color: "#ffffff",
  backgroundColor: theme.palette.customBlue.main,
  cursor: "pointer",
  boxShadow: "1px 4px 10.5px 0px #0000004D",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#F3F3F3",
    color: "#000000",
    border: "1px solid #F3F3F3"
  },
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available"
  }
}));
