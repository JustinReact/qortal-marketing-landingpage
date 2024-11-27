import { letterSpacing, styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { futura, segoeUI } from "../../app/fonts";
import Link from "next/link";

type ShowOpenSourceText = {
  showOpenSourceText: boolean;
};

type Hovered = {
  hovered: boolean;
};

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "40px 60px 14px 60px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    padding: "10px 20px 14px 20px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
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
  "@media(max-width: 1146px)": {
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
  "@media(max-width: 1146px)": {
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
    fontSize: "59px",
    letterSpacing: "calc(0.1 * 59px)"
  },
  "@media(max-width: 1495px)": {
    fontSize: "53px",
    letterSpacing: "calc(0.1 * 53px)"
  },
  "@media(max-width: 1399px)": {
    fontSize: "45px",
    letterSpacing: "calc(0.1 * 45px)"
  },
  "@media(max-width: 1160px)": {
    fontSize: "35px",
    lineHeight: "45px",
    letterSpacing: "calc(0.1 * 35px)"
  },
  "@media(max-width: 1090px)": {
    fontSize: "45px",
    lineHeight: "63px",
    letterSpacing: "calc(0.1 * 45px)"
  },
  "@media(max-width: 612px)": {
    fontSize: "40px",
    lineHeight: "50px",
    letterSpacing: "calc(0.1 * 40px)"
  },
  "@media(max-width: 513px)": {
    fontSize: "35px",
    lineHeight: "45px",
    letterSpacing: "calc(0.1 * 35px)"
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
      fontSize: "32px",
      letterSpacing: "calc(0.28*32px)"
    },
    "@media(max-width: 1495px)": {
      fontSize: "29px",
      letterSpacing: "calc(0.28*29px)"
    },
    "@media(max-width: 1399px)": {
      fontSize: "26px",
      letterSpacing: "calc(0.28*26px)"
    },
    "@media(max-width: 1160px)": {
      fontSize: "23px",
      letterSpacing: "calc(0.28*23px)"
    },
    "@media(max-width: 628px)": {
      fontSize: "18px",
      letterSpacing: "calc(0.28 * 18px)"
    },
    "@media(max-width: 566px)": {
   fontSize: "16px",
      letterSpacing: "calc(0.28 * 16px)",
      lineHeight: "35px",
    },
    "@media(max-width: 513px)": {
      letterSpacing: "calc(0.28 * 8px)",
    },
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
  left: "0",
  "@media(max-width: 566px)": {
    top: "25px",
     }
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
  maxWidth: "calc(100vw - 152px)",
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
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: "calc(100vw - 72px)"
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "calc(100vw - 32px)"
  },
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

export const TopCard4 = styled(Box)(({ theme }) => ({
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
    background: `url('/images/LandingPage/RedCardBanner.png'), linear-gradient(90deg, #ffffff 0%, #FF9EA0 100%)`,
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
  gap: 0,
  marginTop: "145px"
}));

export const GroupSection = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  gap: "55px",
  padding: "223px 100px 153px 100px",
  alignItems: "flex-start",
  width: "100%",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "calc(100vw - 16px)",
    height: "100%",
    backgroundImage: `url('/images/LandingPage/GreenSectionBanner.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    zIndex: -1
  },
  [theme.breakpoints.down("lg")]: {
    padding: "223px 50px 153px 50px",
    gap: "30px",
  },
  "@media(max-width: 935px)": {
    flexDirection: "column",
  },
}));

export const QAppsSection = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "223px 100px 153px 100px",
  alignItems: "flex-start",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "calc(100vw - 16px)",
    height: "100%",
    backgroundImage: `url('/images/LandingPage/BlueSectionBanner.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    zIndex: -1
  },
  [theme.breakpoints.down("lg")]: {
    padding: "223px 50px 153px 50px",
  }
}));

export const QTradeSection = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  gap: "55px",
  padding: "223px 100px 167px 100px",
  alignItems: "flex-start",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "calc(100vw - 16px)",
    height: "100%",
    backgroundImage: `url('/images/LandingPage/YellowSectionBanner.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    zIndex: -1
  },
  [theme.breakpoints.down("lg")]: {
    padding: "223px 50px 153px 50px",
    gap: "30px",
  }
}));

export const OpenSourceSection = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  gap: "55px",
  padding: "348px 100px 167px 100px",
  alignItems: "flex-start",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "calc(100vw - 16px)",
    height: "100%",
    backgroundImage: `url('/images/LandingPage/RedSectionBanner.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    zIndex: -1
  },
  [theme.breakpoints.down("lg")]: {
    padding: "223px 50px 153px 50px",
    gap: "30px",
  }
}));

export const QAppsSectionRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100%",
  gap: "105px",
  [theme.breakpoints.down("md")]: {
    gap: "25px"
  },
}));

export const SectionCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start"
}));

export const GroupSectionImgBox = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px", // Add padding to extend the box dimensions
  marginBottom: "120px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-10px", // Move the background up if needed
    left: "-10px", // Move the background left if needed
    right: "-10px", // Extend right side
    bottom: "-10px", // Extend bottom side
    backgroundImage: `url('/images/LandingPage/GreenStripesLeft.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: 1
  }
});

export const GroupSectionImgBox2 = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  marginTop: "132px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-5px", // Move the background up if needed
    left: "-5px", // Move the background left if needed
    right: "-5px", // Extend right side
    bottom: "-5px", // Extend bottom side
    backgroundImage: `url('/images/LandingPage/GreenStripesRight.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: 1
  }
});

export const QAppsSectionImgBox = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px", // Add padding to extend the box dimensions
  marginBottom: "120px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-10px", // Move the background up if needed
    left: "-10px", // Move the background left if needed
    right: "-10px", // Extend right side
    bottom: "-10px", // Extend bottom side
    backgroundImage: `url('/images/LandingPage/BlueStripes.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: 1
  }
});

export const QTradeSectionImgBox = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px", // Add padding to extend the box dimensions
  marginBottom: "120px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-10px", // Move the background up if needed
    left: "-10px", // Move the background left if needed
    right: "-10px", // Extend right side
    bottom: "-10px", // Extend bottom side
    backgroundImage: `url('/images/LandingPage/YellowStripes.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: 1
  }
});

export const OpenSourceSectionImgBox = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px", // Add padding to extend the box dimensions
  marginBottom: "120px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-10px", // Move the background up if needed
    left: "-10px", // Move the background left if needed
    right: "-10px", // Extend right side
    bottom: "-10px", // Extend bottom side
    backgroundImage: `url('/images/LandingPage/RedStripes.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: 1
  }
});

export const SectionImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  objectPosition: "center",
  zIndex: 2,
  userSelect: "none",
  transition: "all 0.3s cubic-bezier(0.46,0.03,0.52,0.96)",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.03)"
  }
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  zIndex: 5
}));

export const SectionHeaderCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "10px"
}));

export const SectionHeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: segoeUI.style.fontFamily,
  fontSize: "36px",
  fontWeight: 500,
  lineHeight: "40px",
  letterSpacing: 0,
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const SectionHeaderSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: segoeUI.style.fontFamily,
  textTransform: "uppercase",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.24px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const SectionDescriptionCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginTop: "98px"
}));

export const SectionDescriptionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: segoeUI.style.fontFamily,
  fontSize: "36px",
  fontWeight: 500,
  lineHeight: "30px",
  letterSpacing: 0,
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  fontFamily: segoeUI.style.fontFamily,
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "30px",
  letterSpacing: "calc(0.04*20px)",
  color: theme.palette.text.primary,
  userSelect: "none",
  zIndex: 5
}));

export const SectionDownloadLink = styled(Link)(({ theme }) => ({
  fontFamily: segoeUI.style.fontFamily,
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "calc(0.04*20px)",
  color: theme.palette.customBlue.main,
  textDecoration: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    filter: "brightness(0.85)",
    cursor: "pointer"
  }
}));

export const SectionLinesImg = styled(Image)({
  objectFit: "contain",
  objectPosition: "center",
  userSelect: "none"
});

export const QAppsLogosRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
  margin: "221px 0 0 0",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  }
}));

export const QAppsLogo = styled(Image)(({ theme }) => ({
  objectFit: "contain",
  objectPosition: "center",
  userSelect: "none"
}));

export const OpenSourceBox = styled(Box)<ShowOpenSourceText>(
  ({ theme, showOpenSourceText }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "706px",
    height: "397px",
    padding: "71px 137px 60px 137px",
    backgroundColor: "#050817",
    zIndex: 1,
    "&::before": {
      position: "absolute",
      display: "block",
      content: '""',
      top: 0,
      left: "50%",
      width: "100%",
      height: "100%",
      transform: "translateX(-50%)",
      backgroundImage: `url('/images/LandingPage/BlueRectangle.png')`,
      opacity: !showOpenSourceText ? 0.5 : 0,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      zIndex: 2
    }
  })
);

export const OpenSourceImg = styled(Image)<Hovered>(({ theme, hovered }) => ({
  position: "absolute",
  width: "auto",
  height: "auto",
  objectFit: "contain",
  objectPosition: "center",
  zIndex: 25,
  userSelect: "none",
  transition: "all 0.2s ease-in-out",
  transform: hovered ? "translateY(7px)" : "translateY(0)"
}));

export const FinalText = styled(Typography)(({ theme }) => ({
  fontFamily: segoeUI.style.fontFamily,
  fontSize: "40px",
  fontWeight: 400,
  lineHeight: "50px",
  textAlign: "center",
  letterSpacing: "calc(0.042*40px)",
  color: theme.palette.text.primary,
  userSelect: "none",
  zIndex: 5
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
    right: "20px"
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
