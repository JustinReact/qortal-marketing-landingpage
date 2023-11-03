import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "90px",
  padding: "25px 0",
  width: "100%"
});

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
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
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
  top: 0,
  right: "-16px"
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
  lineHeight: "37px"
}));

export const FeaturesImg = styled("img")({
  width: "100%",
  maxWidth: "700px",
  height: "100%",
  objectFit: "contain",
  zIndex: 1,
  borderRadius: "15px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
});

export const FeatureTabsRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%",
  padding: "0 20px",
  gap: "30px"
});

export const FeatureCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  minHeight: "300px",
  borderRadius: "2px",
  padding: "15px 20px",
  gap: "15px",
  transition: "all 0.6s ease-in-out",
  border:
    theme.palette.mode === "light"
      ? `1px solid #e4e4e7ed`
      : `1px solid #e4e4e778`,
  userSelect: "none",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#7e7cf547"
  },
  "&.active": {
    backgroundColor: "#7e7cf547"
  }
}));

export const FeatureCardRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%"
});

export const FeatureCardImg = styled("img")({
  width: "100px",
  height: "100%",
  objectFit: "contain",
  borderRadius: "2px",
  boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
});

export const FeatureCardTitle = styled(Typography)(({ theme }) => ({
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