import { styled, keyframes } from "@mui/system";
import { Box, Typography } from "@mui/material";

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

export const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  gap: "250px",
  width: "100%"
});

export const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "20px",
  marginTop: "150px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "50px"
  }
}));

export const SecondContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "100%"
  // background: "radial-gradient(circle at 300px bottom, rgba(92,93,253,1) 0%, rgba(81,61,198,1) 18%, rgba(11,23,41,1) 80%)",
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
  fontFamily: "Protest Strike",
  lineHeight: "180px",
  fontSize: "210px",
  fontWeight: 500,
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
  transform: "translateX(-105px) translateY(-50px)",
  [theme.breakpoints.down("md")]: {
    fontSize: "180px",
    lineHeight: "150px",
    transform: "translateX(-85px) translateY(-50px)"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "80px",
    lineHeight: "80px",
    transform: "translateX(-45px) translateY(-50px)"
  }
}));


export const SubTitleRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
});

export const SubTitle = styled(Typography)({
  fontFamily: "Protest Strike",
  fontSize: "80px",
  fontWeight: 500,
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
  lineHeight: "100px"
});

export const SubTitleDesc = styled(Typography)({
  fontFamily: "PT Sans",
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
  height: "600px",
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
  filter: "drop-shadow(0px 18px 20px #cdcdcd)",
  [theme.breakpoints.down("sm")]: {
    width: "70px",
    height: "70px"
  }
}));

export const UseColRow = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px",
});

export const UseColTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Protest Strike",
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
  fontFamily: "PT Sans",
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
  alignItems: "flex-end"
});

export const CoinImg = styled("img")(({ theme }) => ({
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
  gap: "40px"
});

export const SubText = styled(Typography)(({ theme }) => ({
  fontFamily: "PT Sans",
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

export const SocialButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
  gap: "15px",
  position: "relative",
  width: "300px",
  backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#1300af",
  color: theme.palette.mode === "dark" ? "#1300af" : "#ffffff",
  fontFamily: "Montserrat",
  padding: "18px 20px",
  fontSize: "24px",
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

export const ArrowSVG = styled("svg")(({ theme }) => ({
  "&.arrows": {
    width: "60px",
    height: "72px",
    [theme.breakpoints.down("md")]: {
      width: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px"
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

export const FAQCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "50px",
  marginTop: "150px",
  marginBottom: "50px"
}));

export const FAQCardContainerRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: '50px',
  width: "70%",
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
  fontFamily: "PT Sans",
  fontSize: "24px",
  fontWeight: 500,
  userSelect: "none",
  boxShadow: "0px 4px 5px 0px hsla(0,0%,0%,0.14),  0px 1px 10px 0px hsla(0,0%,0%,0.12),  0px 2px 4px -1px hsla(0,0%,0%,0.2)"
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
  },
}));

export const FAQCardRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const FAQCardRowText = styled(Box)(({ theme }) => ({
  fontFamily: "PT Sans",
  fontSize: "24px",
  color: "#ffffff",
  userSelect: "none",
  lineHeight: "32px",
  fontWeight: 400,
}));