import { styled, keyframes } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { montserrat, oxygen, protestStrike, ptSans, raleway, spartan } from "../../app/fonts";

export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const arrowAnimation = keyframes`
  0% {
    opacity:0
  }
  40% {
    opacity:1
  }
  80% {
    opacity:0
  }
  100% {
    opacity:0
  }
`;

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  gap: "250px",
  width: "100%",
  padding: "0 200px",
  [theme.breakpoints.up("xl")]: {
    padding: "0 300px",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "0 100px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 50px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "100px",
    padding: "0 20px",
  
  }
}));

export const MainContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "25px",
  marginTop: "60px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    gap: "10px"
  }
}));

export const FeatureContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "100%",
  gap: "150px",
});

export const FeatureSubContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "27px",
  width: "100%",
  height: "100%",
});

export const ThirdContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "100%"
});

export const FeatureImg = styled(Image)(({ theme }) => ({}));

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: protestStrike.style.fontFamily,
  lineHeight: "120px",
  fontSize: "128px",
  fontWeight: 500,
  color: theme.palette.mode === "dark" ? "#ffffff" : theme.palette.secondary.light,
  letterSpacing: "0px",
  userSelect: "none",
  "& span": {
    color: theme.palette.customBlue.main
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "180px",
    lineHeight: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "75px",
    lineHeight: "75px",
  }
}));

export const SubTitleRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  padding: "0 15px"
});

export const SubTitleDesc = styled(Typography)({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "32px",
  fontWeight: 400,
  lineHeight: "65px",
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
});

export const CoinImg = styled(Image)(({ theme }) => ({
  width: "400px",
  height: "400px",
  objectFit: "cover",
  userSelect: "none",
  animation: `${spinAnimation} 20s linear infinite`,
  filter: "drop-shadow(0px 65px 70px rgba(0, 0, 0, 0.2))",
  overflow: "visible",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "300px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "200px"
  }
}));

export const SubTextRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  textAlign: "center",
});

export const FeatureCol = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "40px",
  width: "100%",
  height: "100%",
});

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "64px",
  lineHeight: "120px",
  fontWeight: 500,
  letterSpacing: "0px",
  color: theme.palette.text.primary,
  textTransform: "uppercase",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
    textAlign: "center",
    lineHeight: "40px"
  }
}));

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "32px",
  letterSpacing: 0,
  lineHeight: "50px",
  fontWeight: 400,
  userSelect: "none",
}));

export const SubText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "32px",
  letterSpacing: 0,
  lineHeight: "50px",
  fontWeight: 400,
  userSelect: "none",
}));

export const TopFoldButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "25px",
  gap: "30px",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center"
  },
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
    width: "100%",
    marginBottom: "70px"
  }
}));

export const CTAButton1 = styled(Button)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "21.3px",
  letterSpacing: 0,
  width: "265px",
  height: "80px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "30px",
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
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "21.3px",
  letterSpacing: 0,
  width: "265px",
  height: "80px",
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


export const LogoContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60%",
  height: "auto",
  flexDirection: "column",
  zIndex: 1
});

export const FAQCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "40px",
  marginTop: "50px",
  marginBottom: "50px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "60px"
  }
}));

export const FAQCardContainerRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  width: "70%",
  [theme.breakpoints.down("md")]: {
    width: "90%",
    gap: "15px"
  }
}));

export const FAQNumberBubble = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "45px",
  borderRadius: "50%",
  backgroundColor: theme.palette.mode === "dark" ? "#12154989" : theme.palette.secondary.light,
  color: "#ffffff",
  fontFamily: ptSans.style.fontFamily,
  fontSize: "24px",
  fontWeight: 500,
  userSelect: "none",
  boxShadow:
    "0px 4px 5px 0px hsla(0,0%,0%,0.14),  0px 1px 10px 0px hsla(0,0%,0%,0.12),  0px 2px 4px -1px hsla(0,0%,0%,0.2)",
  [theme.breakpoints.down("md")]: {
    width: "60px"
  }
}));

export const FAQCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  borderRadius: "10px",
  border: "1px solid #030242",
  backgroundColor: theme.palette.mode === "dark" ? "#12154989" : theme.palette.secondary.light,
  padding: "15px 20px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#121549"
  }
}));

export const FAQCardRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
});

export const FAQCardRowText = styled(Box)(({ theme }) => ({
  fontFamily: ptSans.style.fontFamily,
  fontSize: "24px",
  color: "#ffffff",
  userSelect: "none",
  lineHeight: "32px",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%"
  }
}));

export const FAQCardRowBody = styled(Box)({
  marginTop: "15px",
  fontFamily: raleway.style.fontFamily,
  fontSize: "18px",
  color: "#ffffff",
  userSelect: "none",
  letterSpacing: "0.4px",
  lineHeight: "28px",
  fontWeight: 400
});

export const InstallationWord = styled("span")({
  marginTop: "15px",
  fontFamily: raleway.style.fontFamily,
  fontSize: "18px",
  userSelect: "none",
  letterSpacing: "0.4px",
  lineHeight: "28px",
  fontWeight: 400,
  color: "#2eeff6",
  textDecoration: "underline",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    color: "#03969b"
  }
});

export const URLWord = styled("span")({
  marginTop: "15px",
  fontFamily: raleway.style.fontFamily,
  fontSize: "18px",
  userSelect: "none",
  letterSpacing: "0.4px",
  lineHeight: "28px",
  fontWeight: 400,
  color: "#2eeff6",
  textDecoration: "underline",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    color: "#03969b"
  }
});

export const CoinLogosRow = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px"
});

export const CoinLogoCol = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px"
});

export const CoinLogo = styled(Image)({
  width: "38px",
  height: "38px",
  objectFit: "cover",
  userSelect: "none"
});

export const CoinLogoName = styled(Typography)({
  fontFamily: ptSans.style.fontFamily,
  fontSize: "16px",
  fontWeight: 600,
  color: "#ffffff",
  userSelect: "none"
});

export const MainRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  gap: "20px",
});

export const YoutubeVideoContainer = styled(Box)(({ theme }) => ({
  "& iframe": {
    width: "700px",
    height: "500px",
    border: "none",
    "@media (max-width: 1331px)": {
      width: "600px",
      height: "500px",
      border: "none",
    },
    [theme.breakpoints.down("lg")]: {
      width: "500px",
      height: "500px",
      border: "none",
    },
    "@media (max-width: 1135px)": {
      width: "450px",
      height: "500px",
      border: "none",
    },
    "@media (max-width: 1078px)": {
      width: "325px",
      height: "500px",
      border: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "700px",
      height: "500px",
      border: "none",
    },
    "@media (max-width: 750px)": {
      width: "500px",
      height: "500px",
      border: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "500px",
      border: "none",
    }
  }
}));
