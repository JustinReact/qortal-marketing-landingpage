import { styled } from "@mui/system";
import { Grid, Box, Typography, Button } from "@mui/material";

export const ShowcaseContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "20px",
  width: "100%",
  paddingLeft: "20px",
  paddingBottom: "40px",
  [theme.breakpoints.only("xs")]: {
    marginTop: "60px"
  }
}));

export const ShowcaseTitleRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  gap: "10px"
});

export const ShowcaseTitle = styled(Box)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontWeight: 550,
  letterSpacing: "1.5px",
  lineHeight: "35px",
  fontSize: "30px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const HorizontalLine = styled("div")(({ theme }) => ({
  display: "flex",
  opacity: 0.45,
  alignSelf: "flex-start",
  marginLeft: "20px",
  width: "25%",
  height: "2px",
  backgroundColor: theme.palette.text.primary,
  borderRadius: "3px",
  [theme.breakpoints.only("xs")]: {
    marginLeft: "-30px"
  }
}));

export const VerticalLine = styled("div")(({ theme }) => ({
  marginLeft: "45px",
  width: "2px",
  height: "150px",
  backgroundColor: theme.palette.text.primary,
  borderRadius: "3px",
  display: "flex",
  alignSelf: "flex-start",
  transform: "translateY(-60px)",
  [theme.breakpoints.only("xs")]: {
    marginLeft: "10px"
  }
}));

export const ShowcaseSubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  padding: "10px 0 0 80px",
  [theme.breakpoints.only("xs")]: {
    padding: "10px 0 0 0"
  }
}));

export const ColumnsContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    gap: "25px"
  }
}));

export const DidYouKnowText = styled(Typography)(({ theme }) => ({
  fontFamily: "Cairo",
  fontSize: "29px",
  color: theme.palette.text.primary,
  fontWeight: "400",
  userSelect: "none"
}));

export const ColumnsRow = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  gap: "15px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px"
  }
}));

export const MainColumn = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "18px"
});

export const MainColumnTitleRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "7px",
  [theme.breakpoints.up("md")]: {
    transform: "translateX(-15px)"
  }
}));

export const MainColumnTitleFont = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "20px",
  color: theme.palette.text.primary,
  fontWeight: "400",
  userSelect: "none"
}));

export const MainColumnText = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontFamily: "Museo",
  fontSize: "16.5px",
  color: theme.palette.text.primary,
  fontWeight: "300",
  letterSpacing: "0.3px",
  userSelect: "none"
}));

export const FeaturesCard = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  width: "100%",
  marginTop: "80px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginTop: 0
  }
}));

export const FeaturesColumn = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
  paddingRight: "30px"
});

export const FeaturesTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Cairo",
  fontSize: "29px",
  color: theme.palette.text.primary,
  fontWeight: "400",
  userSelect: "none"
}));

export const FeaturesBody = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px"
});

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  [theme.breakpoints.only("xs")]: {
    marginTop: "60px"
  }
}));

export const BGImg = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  maxWidth: "700px",
  height: "auto",
  objectFit: "contain",
  borderRadius: "8px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%,0.12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)"
      : "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
  userSelect: "none"
}));

export const TopImg = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "-20px",
  left: "130px",
  width: "80%",
  maxWidth: "700px",
  height: "auto",
  objectFit: "contain",
  borderRadius: "8px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  userSelect: "none",
  [theme.breakpoints.only("xs")]: {
    left: "70px"
  }
}));

export const FeaturesText = styled(Typography)(({ theme }) => ({
  fontFamily: "Museo",
  fontSize: "16.5px",
  color: theme.palette.text.primary,
  fontWeight: "300",
  letterSpacing: "0.3px",
  userSelect: "none",
  "& > span": {
    fontWeight: "bold"
  }
}));

export const FeaturesButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignSelf: "center",
  marginTop: "30px",
  backgroundColor: theme.palette.secondary.light,
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "7px",
  fontFamily: "Montserrat",
  fontSize: "19.5px",
  fontWeight: 500,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.light,
    filter: "brightness(0.9)"
  }
}));
