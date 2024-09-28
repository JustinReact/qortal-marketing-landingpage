import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

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
  justifyContent: "center"
});

export const TabsButtonsRow = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? theme.palette.primary.light : "#dfe3ff",
  borderColor:
    theme.palette.mode === "light" ? theme.palette.primary.light : "#dfe3ff",
  borderRadius: "35px",
  padding: "3px",
  height: "52px"
}));

export const FlexRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  height: "100%",
  gap: "7px"
});

export const TabButton = styled(Button)(({ theme }) => ({
  fontFamily: "Montserrat",
  letterSpacing: "-0.2px",
  fontWeight: "bold",
  fontSize: "18.5px",
  color: theme.palette.mode === "light" ? "#2094e2" : "#8395ef",
  borderRadius: "35px",
  padding: "5px 150px",
  transition: "all 0.3s ease-in-out",
  userSelect: "none",
  "&:hover": {
    cursor: "pointer"
  },
  "&.tabButtonActive": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "white",
    color: theme.palette.mode === "light" ? "#186ba1" : "#6f82e4",
    borderRadius: "25px",
    padding: "0px 150px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    [theme.breakpoints.only("xs")]: {
      padding: "0px 30px"
    }
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "14px",
    padding: "5px 30px"
  }
}));

export const MainFeaturesRow = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  [theme.breakpoints.up("md")]: {
    minHeight: "500px"
  }
}));

export const MainFeaturesCol = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%"
});

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
  fontFamily: "Cairo",
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
  fontFamily: "Oxygen",
  fontWeight: "bold",
  letterSpacing: "1.3px",
  fontSize: "37px",
  color: theme.palette.text.primary,
  marginBottom: "20px",
  lineHeight: "45px",
  userSelect: "none"
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
  fontFamily: "Museo",
  letterSpacing: "0.3px",
  fontSize: "22.5px",
  color: theme.palette.text.primary,
  padding: "10px 30px 0 0",
  lineHeight: "37px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "24px"
  }
}));

export const FeaturesImgContainer = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center"
});

export const FeaturesImg = styled(Image)({
  width: "100%",
  maxWidth: "700px",
  height: "100%",
  objectFit: "contain",
  zIndex: 1,
  borderRadius: "15px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  marginTop: "50px"
});

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
  fontFamily: "Oxygen",
  fontWeight: "bold",
  letterSpacing: "1.3px",
  fontSize: "20.5px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const FeatureCardBody = styled("ul")(({ theme }) => ({
  margin: 0,
  fontFamily: "Museo",
  letterSpacing: "0.3px",
  fontSize: "18px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const GatewayButton = styled(Button)({
  color: "#fff",
  padding: "11px 16px",
  borderRadius: "7px",
  fontFamily: "Oxygen",
  fontSize: "19px",
  fontWeight: 500,
  textTransform: "none",
  width: "200px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(0.9)"
  }
});

export const InstallQortalButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  color: "#fff",
  padding: "5px 16px",
  borderRadius: "7px",
  width: "350px",
  fontFamily: "Oxygen",
  fontWeight: 400,
  fontSize: "28px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.light,
    filter: "brightness(0.9)"
  }
}));
