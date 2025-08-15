import { styled } from "@mui/system";
import { Grid, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { montserrat, museo, oxygen } from "../../app/fonts";
import { LockSVG } from "../Common/Icons/LockSVG";

export const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "100px 160px 50px 160px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    padding: "40px 60px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 20px 70px 20px"
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
    fontSize: "50px"
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "40px"
  }
}));

export const ArrowImg = styled(Image)(({ theme }) => ({
  position: "absolute",
  top: "40px",
  left: "150px",
  [theme.breakpoints.up("xl")]: {
    left: "500px",
    width: "250px",
    height: "250px"
  },
  "@media (max-width: 1510px)": {
    left: "80px"
  },
  "@media (max-width: 1320px)": {
    left: 0
  },
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));

export const VideoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center"
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
  alignItems: "flex-start",
  marginBottom: "50px",
  [theme.breakpoints.down("sm")]: {
   gap: "20px",
  }
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
  fontFamily: museo.style.fontFamily,
  fontSize: "22px",
  color: theme.palette.text.primary,
  letterSpacing: "0.5px",
  userSelect: "none"
}));

export const LockIcon = styled(LockSVG)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateY(-50%) translateX(-50%)"
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "21.3px",
  letterSpacing: 0,
  width: "250px",
  height: "58px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "30px",
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

export const CTABox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
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

export const CTABoxTextFieldContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
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
  marginTop: "20px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.customBlue.main,
    opacity: "0.8"
  }
}));

export const BookImage = styled("img")(({ theme }) => ({
  alignSelf: "center",
  width: "300px",
  height: "auto",
  margin: "0",
  [theme.breakpoints.up("xl")]: {
    width: "400px"
  },
  [theme.breakpoints.down("md")]: {
    width: "80%"
  },
  [theme.breakpoints.down("sm")]: {
    width: "75%"
  }
}));
