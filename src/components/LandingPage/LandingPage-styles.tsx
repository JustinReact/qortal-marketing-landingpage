import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { futura, segoeUI } from "../../app/fonts";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "40px 60px 14px 60px",
  [theme.breakpoints.down("lg")]: {
    padding: "10px 20px 14px 20px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 20px",
    width: "100%"
  }
}));

export const TopFold = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "25% 1fr",
  gap: "86px",
  width: "100%",
  marginBottom: "20px",
  "@media(max-width: 1643px)": {
    gap: "70px"
  },
  "@media(max-width: 1495px)": {
    gap: "45px"
  },
  "@media(max-width: 1399px)": {
    gap: "40px"
  },
  "@media(max-width: 1160px)": {
    gap: "0"
  },
  "@media(max-width: 1090px)": {
    gridTemplateColumns: "auto",
    gap: "0",
    justifyContent: "center"
  }
}));

export const TopFoldCol = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  "@media(max-width: 1090px)": {
    flexDirection: "row",
    justifySelf: "center",
    width: "fit-content",
    gap: "15px"
  }
}));

export const TopFoldWordCol = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  gap: "32px",
  "@media(max-width: 1643px)": {
    gap: "25px"
  },
  "@media(max-width: 1399px)": {
    gap: "15px"
  },
  "@media(max-width: 1160px)": {
    gap: "3px"
  }
}));

export const TopFoldRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%"
});

export const ExtensionScreenshotsImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  "@media(max-width: 1444px)": {
    width: "80%"
  },
  "@media(max-width: 1304px)": {
    width: "50%",
    height: "auto"
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto"
  }
}));

export const Header = styled(Typography)(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontSize: "65px",
  fontWeight: 400,
  lineHeight: "63px",
  letterSpacing: "calc(0.1 * 65px)",
  color: theme.palette.text.primary,
  userSelect: "none",
  whiteSpace: "nowrap",
  "@media(max-width: 1643px)": {
    fontSize: "59px"
  },
  "@media(max-width: 1495px)": {
    fontSize: "53px"
  },
  "@media(max-width: 1399px)": {
    fontSize: "45px"
  },
  "@media(max-width: 1160px)": {
    fontSize: "35px",
    lineHeight: "45px"
  },
  "@media(max-width: 1090px)": {
    fontSize: "45px",
    lineHeight: "63px"
  }
}));

export const SubHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "14px",
  "& p": {
    color: theme.palette.text.primary,
    fontFamily: segoeUI.style.fontFamily,
    fontSize: "38px",
    fontWeight: 400,
    lineHeight: "48px",
    letterSpacing: "calc(0.28*38px)",
    userSelect: "none",
    "@media(max-width: 1643px)": {
      fontSize: "32px"
    },
    "@media(max-width: 1495px)": {
      fontSize: "29px"
    },
    "@media(max-width: 1399px)": {
      fontSize: "26px"
    },
    "@media(max-width: 1160px)": {
      fontSize: "23px"
    }
  }
}));

export const SubHeaderBox = styled(Typography)({
  position: "relative",
  width: "fit-content",
  fontWeight: "bold !important"
});

export const SubHeaderBoxImage = styled(Image)({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  position: "absolute",
  top: "34px",
  left: "0"
});

export const TopCardRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
  gridAutoFlow: "column",
  alignItems: "flex-start",
  gap: "15px",
  justifyContent: "safe center",
  overflowX: "auto",
  whiteSpace: "nowrap",
  width: "100%",
  maxWidth: "calc(100vw - 160px)",
  paddingTop: "25px",
  paddingBottom: "15px",
  "&::-webkit-scrollbar-track": {
    backgroundColor: `${theme.palette.background.default} !important`
  },
  "&::-webkit-scrollbar-track:hover": {
    backgroundColor: `${theme.palette.background.default} !important`
  },
  "&::-webkit-scrollbar": {
    width: "16px !important",
    height: "15px !important",
    backgroundColor: `${theme.palette.background.default} !important`
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: `${theme.palette.customBlue.main} !important`,
    borderRadius: "8px !important",
    backgroundClip: "content-box !important",
    border: "4px solid transparent !important"
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#0478e4 !important"
  }
}));

export const TopCard1 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative", // Needed for pseudo-element positioning
  borderRadius: "22px",
  paddingTop: "20px",
  width: "360px",
  height: "496px",
  border: "1px solid #424242",
  cursor: "pointer",
  overflow: "hidden", // Ensure no content spills out
  background: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)", // Default gradient (solid white)
  transition: "all 0.3s cubic-bezier(.22, .68, 0, 1.71)", // Fallback for unsupported pseudo-elements
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url('/images/LandingPage/GreenCardBanner.png'), linear-gradient(90deg, #ffffff 0%, #BBFFEC 100%)`,
    opacity: 0, // Hidden by default
    transition: "opacity 0.3s ease-in-out", // Smooth fade-in
    zIndex: -1, // Place it above the base background
    backgroundSize: "contain",
    backgroundPosition: "top right"
  },
  "&:hover::before": {
    opacity: 1 // Make hover gradient visible
  },
  "&:hover": {
    transform: "translateY(-20px)"
  }
}));

export const TopCard2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative", // Needed for pseudo-element positioning
  borderRadius: "22px",
  width: "360px",
  height: "496px",
  border: "1px solid #424242",
  cursor: "pointer",
  overflow: "hidden", // Ensure no content spills out
  background: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)", // Default gradient (solid white)
  transition: "all 0.3s cubic-bezier(.22, .68, 0, 1.71)", // Fallback for unsupported pseudo-elements
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url('/images/LandingPage/BlueCardBanner.png'), linear-gradient(90deg, #ffffff 0%, #ace2ff 100%)`,
    opacity: 0, // Hidden by default
    transition: "opacity 0.3s ease-in-out", // Smooth fade-in
    zIndex: -1, // Place it above the base background
    backgroundSize: "contain",
    backgroundPosition: "top right"
  },
  "&:hover::before": {
    opacity: 1 // Make hover gradient visible
  },
  "&:hover": {
    transform: "translateY(-20px)"
  }
}));

export const TopCard3 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative", // Needed for pseudo-element positioning
  borderRadius: "22px",
  width: "360px",
  height: "496px",
  border: "1px solid #424242",
  cursor: "pointer",
  overflow: "hidden", // Ensure no content spills out
  background: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)", // Default gradient (solid white)
  transition: "all 0.3s cubic-bezier(.22, .68, 0, 1.71)", // Fallback for unsupported pseudo-elements
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url('/images/LandingPage/YellowCardBanner.png'), linear-gradient(90deg, #ffffff 0%, #FFE09E 100%)`,
    opacity: 0, // Hidden by default
    transition: "opacity 0.3s ease-in-out", // Smooth fade-in
    zIndex: -1, // Place it above the base background
    backgroundSize: "contain",
    backgroundPosition: "top right"
  },
  "&:hover::before": {
    opacity: 1 // Make hover gradient visible
  },
  "&:hover": {
    transform: "translateY(-20px)"
  }
}));

export const TopCardSubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  gap: "9px",
  padding: "30px 34px 40px 34px"
}));

export const TopCardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: segoeUI.style.fontFamily,
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.24px",
  color: "#101214",
  userSelect: "none"
}));

export const TopCardSubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: segoeUI.style.fontFamily,
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "30px",
  letterSpacing: 0,
  color: "#101214",
  userSelect: "none"
}));

export const TopCardImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "349px",
  objectFit: "cover",
  objectPosition: "left",
  borderRadius: "0 0 22px 22px",
  userSelect: "none"
}));

export const VideoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center"
}));

export const TopFoldButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "25px",
  gap: "30px",
  marginBottom: "150px",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center"
  },
  [theme.breakpoints.down("sm")]: {
    margin: "20px 0",
    gap: "10px",
    width: "100%"
  }
}));

export const CTAButton1 = styled(Button)(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "21.3px",
  width: "181px",
  height: "43px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "30px",
  border: `1px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  boxShadow: "1px 4px 10.5px 0px #0000004D",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.customBlue.main,
    border: `1px solid ${theme.palette.customBlue.main}`,
    color: "#ffffff"
  },
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available"
  }
}));

export const CTAButton2 = styled(Button)(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "21.3px",
  width: "181px",
  height: "43px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "30px",
  border: `1px solid ${theme.palette.customBlue.main}`,
  color: "#ffffff",
  backgroundColor: theme.palette.customBlue.main,
  cursor: "pointer",
  boxShadow: "1px 4px 10.5px 0px #0000004D",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.customBlue.main,
    color: "#ffffff",
    boxShadow:
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      "0px 12px 17px 2px hsla(0,0%,0%,0.14), 0px 5px 22px 4px hsla(0,0%,0%,0.12), 0px 7px 8px -4px hsla(0,0%,0%,0.2)"
  },
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available"
  }
}));

export const ExtensionDesignImage = styled("img")(({ theme }) => ({
  width: "456px",
  height: "456px",
  alignSelf: "center",
  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "300px"
  }
}));

export const QortalFeaturesSection = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "100px",
  [theme.breakpoints.down("lg")]: {
    gap: "15px"
  }
}));

export const QortalWalletHeader = styled(Typography)(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontSize: "48px",
  fontWeight: 500,
  lineHeight: "63.91px",
  letterSpacing: "0.05em",
  color: theme.palette.text.primary,
  userSelect: "none",
  "& a": {
    cursor: "pointer",
    color: theme.palette.customBlue.main,
    textDecoration: "none"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    lineHeight: "52.27px",
    textAlign: "center"
  }
}));

export const QortalWalletCards = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: "10px",
  gridTemplateColumns: "repeat(3, 1fr)",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "5px"
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
    gridGap: "10px"
  }
}));

export const QortalWalletCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const QortalWalletCardImage = styled(Image)(({ theme }) => ({
  width: "340px",
  height: "auto",
  objectFit: "contain",
  [theme.breakpoints.down("lg")]: {
    width: "250px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px"
  }
}));

export const QortalWalletDescription = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    gap: "25px"
  }
}));

export const QortalWalletText = styled(Typography)(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontWeight: 300,
  fontSize: "32px",
  lineHeight: "42.27px",
  letterSpacing: "0.05em",
  color: theme.palette.text.primary,
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
    lineHeight: "32.27px",
    textAlign: "center"
  }
}));

export const QortalWalletText2 = styled(Typography)(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontSize: "48px",
  lineHeight: "63.91px",
  letterSpacing: "0.042em",
  color: theme.palette.text.primary,
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    lineHeight: "52.27px",
    textAlign: "center"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    lineHeight: "32.27px"
  }
}));

export const ScrollToTopButton = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.text.primary}`,
  width: "181px",
  height: "43px",
  borderRadius: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: futura.style.fontFamily,
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "21.3px",
  transition: "all 0.3s ease-in-out",
  zIndex: 20,
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(0.85)"
  },
  [theme.breakpoints.down("sm")]: {
    right: "60px"
  }  
}));

export const TopOfPageRef = styled("div")({
  position: "absolute",
  top: "-125px",
  height: "1px"
});

export const MiddleOfPageRef = styled("div")({
  position: "absolute",
  top: "0px",
  height: "1px"
});
