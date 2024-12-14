import { lineHeight, styled, width } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { cairo, museo, oxygen } from "../../app/fonts";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "90px",
  padding: "25px 0",
  width: "100%",
  [theme.breakpoints.only("xs")]: {
    gap: "40px"
  }
}));

export const TabsRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  "@media(max-width: 800px)": {
    flexDirection: "column",
    gap: "20px",
    padding: "0 20px"
  }
});


export const TabButton = styled(Button)(({ theme }) => ({
  height: "50px",
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "bold",
  fontSize: "18.5px",
  whiteSpace: "nowrap",
  width: "-webkit-fill-available",
  color: theme.palette.mode === "light" ? "#ffffff" : theme.palette.customBlue.main,
  backgroundColor: theme.palette.mode === "light" ? theme.palette.customBlue.main : "#ffffff",
  border: theme.palette.mode === "light" ? `1px solid ${theme.palette.customBlue.main}` : "1px solid #ffffff" ,
  borderRadius: "5px",
  padding: "5px 120px",
  transition: "all 0.3s ease-in-out",
  userSelect: "none",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.mode === "light" ? theme.palette.customBlue.main : "#ffffff",
    filter: "brightness(0.85)",
  },
  "&.tabButtonActive": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.mode === "light" ? theme.palette.customBlue.main : "#ffffff",
    color: theme.palette.mode === "light" ? theme.palette.customBlue.main : "#ffffff",
    padding: "0px 120px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "@media(max-width: 1158px)": {
      padding: "5px 100px"
    },
    "@media(max-width: 1036px)": {
      padding: "5px 60px"
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0px 80px"
    },
    "&:hover": {
    filter: "brightness(1)"
    },
  },
  "@media(max-width: 1158px)": {
    padding: "5px 100px"
  },
  "@media(max-width: 1036px)": {
    padding: "5px 60px"
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "14px",
    padding: "5px 80px"
  }
}));

export const MainFeaturesRow = styled(Grid)({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  "@media (max-width: 1150px)": {
    flexDirection: "column",
    gap: "50px"
  },
});

export const MainFeaturesCol = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 20px 0 40px",
  width: "100%",
  [theme.breakpoints.only("xs")]: {
    padding: 0
  }
}));

export const OldMainFeaturesCol = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%"
});

export const FeaturesImgCol = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "flex-start",
  width: "100%",
  flexDirection: "row-reverse",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
    justifyContent: "center"
  }
}))

export const BGShape = styled(Box)(({ theme }) => ({
  backgroundColor: "#4a93f8",
  borderRadius: "80px 0 0 80px",
  width: "500px",
  height: "500px",
  position: "absolute",
  top: "-10px",
  right: "-16px",
  zIndex: -1,
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    height: "270px",
    position: "absolute",
    top: "10px",
    right: "-16px"
  }
}));

export const TriangleShape = styled(Box)(({ theme }) => ({
  width: 0,
  height: 0,
  borderLeft: "300px solid transparent",
  borderRight: "300px solid transparent",
  borderBottom: "500px solid #4acff8",
  position: "absolute",
  top: "-15px",
  right: "-16px",
  zIndex: -1,
  [theme.breakpoints.only("xs")]: {
    borderLeft: "150px solid transparent",
    borderRight: "150px solid transparent",
    borderBottom: "300px solid #4acff8",
    position: "absolute",
    top: "20px",
    left: "50px"
  }
}));

export const HexagonShape = styled(Box)(({ theme }) => ({
  marginTop: "78px",
  width: "540.8px",
  height: "312px",
  backgroundColor: theme.palette.secondary.light,
  borderColor: theme.palette.secondary.light,
  position: "absolute",
  top: "-5px",
  right: 0,
  zIndex: -1,
  [theme.breakpoints.only("xs")]: {
    width: "calc(540.8px / 2)",
    height: "calc(312px / 2)",
    top: "5px",
    right: "40px"
  },
  "&:before": {
    content: "''",
    width: 0,
    height: 0,
    borderBottom: "156px solid",
    borderColor: "inherit",
    borderLeft: `270.4px solid transparent`,
    borderRight: `270.4px solid transparent`,
    position: "absolute",
    top: "-156px",
    [theme.breakpoints.only("xs")]: {
      borderBottom: `calc(156px / 2) solid ${theme.palette.secondary.light}`,
      borderLeft: `calc(270.4px / 2) solid transparent`,
      borderRight: `calc(270.4px / 2) solid transparent`,
      top: "calc(-156px / 2)"
    }
  },
  "&:after": {
    content: "''",
    width: 0,
    position: "absolute",
    bottom: "-155px",
    borderTop: "156px solid",
    borderColor: "inherit",
    borderLeft: "270.4px solid transparent",
    borderRight: "270.4px solid transparent",
    [theme.breakpoints.only("xs")]: {
      borderTop: `calc(156px / 2) solid ${theme.palette.secondary.light}`,
      borderLeft: "calc(270.4px / 2) solid transparent",
      borderRight: "calc(270.4px / 2) solid transparent",
      bottom: "calc(-155px / 2)"
    }
  }
}));

export const FeaturesTextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "7px",
  width: "100%"
});

export const FeaturesTitleText = styled(Typography)(({ theme }) => ({
  fontFamily: cairo.style.fontFamily,
  letterSpacing: "0.6px",
  fontSize: "23px",
  color: theme.palette.text.primary,
  opacity: 0.85,
  userSelect: "none"
}));

export const Divider = styled(Box)(({ theme }) => ({
  width: "35%",
  height: "1px",
  backgroundColor: theme.palette.text.primary,
  transform: "translateY(-2px)"
}));

export const MainFeaturesText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "bold",
  letterSpacing: "1.3px",
  fontSize: "37px",
  color: theme.palette.text.primary,
  marginBottom: "20px",
  lineHeight: "45px",
  userSelect: "none",
  [theme.breakpoints.only("xs")]: {
    lineHeight: "42px",
  }
}));

export const FeaturesBodyContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
  userSelect: "none"
});

export const FeaturesBodyText = styled(Typography)(({ theme }) => ({
  fontFamily: museo.style.fontFamily,
  letterSpacing: "0.3px",
  fontSize: "22.5px",
  color: theme.palette.text.primary,
  padding: "10px 30px 0 0",
  lineHeight: "37px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "24px",
    padding: "10px 0 0 0",
    lineHeight: "32px",
  }
}));

export const FeaturesImgContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center"
  }
}));

export const FeaturesImg = styled(Image)(({ theme }) => ({
  width: "100%",
  maxWidth: "700px",
  height: "100%",
  objectFit: "contain",
  zIndex: 1,
  borderRadius: "7px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  marginTop: "50px",
  "@media(max-width: 727px)": {
    width: "80%",
  }
}));

export const FeatureTabsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%",
  padding: "0 20px",
  gap: "30px",
  [theme.breakpoints.only("xs")]: {
    flexDirection: "column",
    marginTop: "50px"
  }
}));

export const FeatureCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  minHeight: "300px",
  maxHeight: "300px",
  overflowY: "auto",
  borderRadius: "2px",
  padding: "15px 20px",
  gap: "15px",
  transition: "all 0.5s ease-in-out",
  border:
    theme.palette.mode === "light"
      ? `1px solid #e4e4e7ed`
      : `1px solid #e4e4e778`,
  userSelect: "none",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#7e7cf547",
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#7e7cf547"
    }
  },
  "&.active": {
    backgroundColor: "#7e7cf547",
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#7e7cf547"
    }
  },
  "&::-webkit-scrollbar": {
    width: "16px",
    height: "10px",
    backgroundColor: theme.palette.background.default // Hide scrollbar by default
  },
  "&::-webkit-scrollbar-track": {
    transition: "all 0.6s ease-in-out",
    backgroundColor: "transparent"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent", // Hide scrollbar thumb by default
    borderRadius: "8px",
    backgroundClip: "content-box",
    border: "4px solid transparent"
  },
  "&:hover::-webkit-scrollbar-thumb": {
    // Add this block
    backgroundColor:
      theme.palette.mode === "light"
        ? `${theme.palette.primary.main}`
        : `${theme.palette.secondary.light}`
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? `${theme.palette.primary.dark}`
        : "#4e50a1"
  },
  "&::-webkit-scrollbar-corner": {
    backgroundColor: theme.palette.background.default
  }
}));

export const FeatureCardRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%"
});

export const FeatureCardImg = styled(Image)({
  width: "100px",
  height: "100%",
  objectFit: "contain",
  borderRadius: "2px",
  boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
  userSelect: "none"
});

export const FeatureCardTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: oxygen.style.fontFamily,
  fontWeight: "bold",
  letterSpacing: "1.3px",
  fontSize: "20.5px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const FeatureCardBody = styled("ul")(({ theme }) => ({
  margin: 0,
  fontFamily: museo.style.fontFamily,
  letterSpacing: "0.3px",
  fontSize: "18px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const GatewayButton = styled(Button)({
  color: "#fff",
  padding: "11px 16px",
  borderRadius: "7px",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "19px",
  fontWeight: 500,
  textTransform: "none",
  width: "200px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(0.85)"
  }
});

export const InstallQortalButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? theme.palette.customBlue.main : "#ffffff",
  color: theme.palette.mode === "light" ? "#ffffff" : theme.palette.customBlue.main,
  padding: "5px 16px",
  borderRadius: "7px",
  width: "350px",
  fontFamily: cairo.style.fontFamily,
  fontWeight: 400,
  fontSize: "28px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.mode === "light" ? theme.palette.customBlue.main : "#ffffff",
    filter: "brightness(0.85)",
  }
}));
