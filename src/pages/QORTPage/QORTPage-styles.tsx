import { styled, keyframes } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";

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
  [theme.breakpoints.down("sm")]: {
    gap: "100px"
  }
}));

export const MainContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "20px",
  marginTop: "60px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    gap: "10px"
  }
}));

export const MainSubRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  "@media (max-width: 1470px)": {
    flexDirection: "column",
    gap: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "30px"
  }
}));

export const OwlImageWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}));

export const OwlImageContainer = styled(Box)({
  position: "relative"
});

export const MobileOwlImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

export const OwlLogo = styled("img")(({ theme }) => ({
  width: "200px",
  height: "auto",
  objectFit: "cover",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "200px",
    objectFit: "contain"
  }
}));

export const MobileOwlLogo = styled("img")(({ theme }) => ({
  width: "80px",
  height: "auto",
  transform: "rotate(-0.85deg)",
  objectFit: "cover",
  userSelect: "none",
}));

export const SecondContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "100%"
});

export const ThirdContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "100%"
});

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Protest Strike, sans-serif",
  lineHeight: "120px",
  fontSize: "128px",
  fontWeight: 500,
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
  transform: "translateX(-75px) translateY(-50px)",
  [theme.breakpoints.down("md")]: {
    fontSize: "180px",
    lineHeight: "150px",
    transform: "translateX(-75px) translateY(-50px)"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "80px",
    lineHeight: "80px",
    transform: "translateX(-45px) translateY(-30px)"
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

export const SubTitle = styled(Typography)({
  fontFamily: "Spartan ",
  fontSize: "80px",
  fontWeight: 500,
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
  lineHeight: "100px"
});

export const SubTitleDesc = styled(Typography)({
  fontFamily: "PT Sans, sans-serif ",
  fontSize: "35px",
  fontWeight: 400,
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
  lineHeight: "50px"
});

export const UseCardRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "row",
  gap: "80px",
  width: "100%",
  height: "100%",
  flexWrap: "wrap",
  marginTop: "95px"
});

export const UseCard = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "20px",
  width: "400px",
  height: "620px",
  padding: "180px 20px 20px 20px",
  borderRadius: "20px",
  borderBottom: "4px solid #01041a",
  borderRight: "4px solid #01041a",
  background:
    "radial-gradient(circle at 0px top, rgba(20,198,238,1) 4%, rgba(97,71,235,1) 34%, rgba(11,23,41,1) 53%)"
});

export const UseColImg = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "-65px",
  left: "20px",
  width: "auto",
  height: "200px",
  objectFit: "cover",
  userSelect: "none",
  filter: "drop-shadow(0px 18px 20px #cdcdcd)"
}));

export const UseColRow = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px"
});

export const UseColTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Spartan",
  fontSize: "40px",
  lineHeight: "60px",
  fontWeight: 500,
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px"
  }
}));

export const UseColDesc = styled(Typography)(({ theme }) => ({
  fontFamily: "PT Sans, sans-serif ",
  fontSize: "27px",
  lineHeight: "32px",
  fontWeight: 400,
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px"
  }
}));

export const CoinImgRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
  maxWidth: "100%"
});

export const CoinImg = styled("img")(({ theme }) => ({
  width: "300px",
  height: "300px",
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

export const SubTextRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  textAlign: "center",
  gap: "40px",
  [theme.breakpoints.only("xs")]: {
    padding: "0 5px",
    maxWidth: "100%"
  }
}));

export const SubText = styled(Typography)(({ theme }) => ({
  fontFamily: "PT Sans, sans-serif ",
  fontWeight: "400",
  fontSize: "40px",
  userSelect: "none",
  lineHeight: "48px",
  color: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "38px"
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

// Owl Mascot Chat Message Bubble

// export const ChatBubble = styled("div")(({ theme }) => ({
//   position: "absolute",
//   top: "-120px",
//   right: "-200px",
//   margin: "40px",
//   display: "inline-block",
//   width: "auto",
//   height: "auto",
//   backgroundColor: "white",
//   transition: "all 0.3s ease-in-out",
//   [theme.breakpoints.only("xs")]: {
//     right: "-160px"
//   },
//   "&:hover": {
//     cursor: "pointer",
//     filter: "drop-shadow(2px 4px 3px #3a3a3a)"
//   },
//   "&.tri-right.border.left-in:before": {
//     content: "''",
//     position: "absolute",
//     width: 0,
//     height: 0,
//     left: "-40px",
//     right: "auto",
//     top: "30px",
//     bottom: "auto",
//     border: "20px solid",
//     borderColor: "#0091ff #0091ff transparent transparent"
//   },
//   "&.tri-right.left-in:after": {
//     content: "''",
//     position: "absolute",
//     width: 0,
//     height: 0,
//     left: "-20px",
//     right: "auto",
//     top: "38px",
//     bottom: "auto",
//     border: "12px solid",
//     borderColor: "white white transparent transparent"
//   },
//   "&.tri-right.border.btm-left:before": {
//     content: "''",
//     position: "absolute",
//     width: "0",
//     height: "0",
//     left: "-8px",
//     right: "auto",
//     top: "auto",
//     bottom: "-40px",
//     border: "32px solid",
//     borderColor: "transparent transparent transparent #0091ff"
//   },
//   "&.tri-right.btm-left:after": {
//     content: "''",
//     position: "absolute",
//     width: "0",
//     height: "0",
//     left: "0px",
//     right: "auto",
//     top: "auto",
//     bottom: "-20px",
//     border: "22px solid",
//     borderColor: "transparent transparent transparent white"
//   },
//   "&.tri-right.border.btm-left-in:before": {
//     content: "''",
//     position: "absolute",
//     width: "0",
//     height: "0",
//     left: "30px",
//     right: "auto",
//     top: "auto",
//     bottom: "-40px",
//     border: "20px solid",
//     borderColor: "#0091ff transparent transparent #0091ff"
//   },
//   "&.tri-right.btm-left-in:after": {
//     content: "''",
//     position: "absolute",
//     width: "0",
//     height: "0",
//     left: "38px",
//     right: "auto",
//     top: "auto",
//     bottom: "-20px",
//     border: "12px solid",
//     borderColor: "white transparent transparent white"
//   },
//   "&.border": {
//     border: "8px solid #0091ff"
//   },
//   "&.round": {
//     borderRadius: "30px"
//   }
// }));

// Arrows animation for scroll down

export const ArrowSVG = styled("svg")(({ theme }) => ({
  "&.arrows": {
    width: "60px",
    height: "72px",
    [theme.breakpoints.only("md")]: {
      width: "120px",
      height: "80px"
    },
    [theme.breakpoints.only("sm")]: {
      width: "140px",
      height: "80px"
    },
    [theme.breakpoints.only("xs")]: {
      width: "180px",
      height: "80px"
    }
  },
  "&.arrows path": {
    stroke: "#ffffff",
    fill: "transparent",
    strokeWidth: "3px",
    animation: `${arrowAnimation} 2s infinite`,
    WebkitAnimation: `${arrowAnimation} 2s infinite`
  },
  "&.arrows path.a1": {
    animationDelay: "-1s",
    WebkitAnimationDelay: "-1s"
  },
  "&.arrows path.a2": {
    animationDelay: "-0.5s",
    WebkitAnimationDelay: "-0.5s"
  },
  "&.arrows path.a3": {
    animationDelay: "0s",
    WebkitAnimationDelay: "0s"
  },
  "&:hover": {
    cursor: "pointer"
  }
}));

// Social Button

export const SocialButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "-50px",
  right: "-200px",
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
  padding: "15px",
  gap: "15px",
  backgroundColor: '#ffffff',
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "22px",
  letterSpacing: "0.9px",
  fontWeight: 500,
  border: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#ffffff !important",
    filter: "brightness(0.8)"
  },
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "auto",
    right: "auto",
  },
}));

// FAQ Section

export const FAQCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "40px",
  marginTop: "110px",
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
  backgroundColor: "#101776",
  color: "#ffffff",
  fontFamily: "PT Sans, sans-serif !important",
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
  backgroundColor: "#12154989",
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
  fontFamily: "PT Sans, sans-serif !important",
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
  fontFamily: "Raleway",
  fontSize: "18px",
  color: "#ffffff",
  userSelect: "none",
  letterSpacing: "0.4px",
  lineHeight: "28px",
  fontWeight: 400
});

export const InstallationWord = styled("span")({
  marginTop: "15px",
  fontFamily: "Raleway",
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

export const URLWord = styled("a")({
  marginTop: "15px",
  fontFamily: "Raleway",
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
  gap: "10px",
});

export const CoinLogoCol = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px"
});

export const CoinLogo = styled("img")({
  width: "38px",
  height: "38px",
  objectFit: "cover",
  userSelect: "none"
});

export const CoinLogoName = styled(Typography)({
  fontFamily: "PT Sans, sans-serif",
  fontSize: "16px",
  fontWeight: 600,
  color: "#ffffff",
  userSelect: "none"
});