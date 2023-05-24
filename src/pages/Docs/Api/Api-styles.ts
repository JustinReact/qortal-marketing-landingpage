import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BackArrowSVG } from "../../../components/Common/Icons/BackArrowSVG";
import { HamburgerSVG } from "../../../components/Common/Icons/HamburgerSVG";

export const Wrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  backgroundColor: theme.palette.background.default
}));

export const ThemeSelectRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "25px"
});

export const HeaderNav = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "0 100px",
  [theme.breakpoints.only("xs")]: {
    padding: "0"
  }
}));

export const QortalLogoContainer = styled("img")(({ theme }) => ({
  width: "120px",
  height: "auto",
  userSelect: "none",
  objectFit: "contain",
  cursor: "pointer",
  filter:
    theme.palette.mode === "dark"
      ? "drop-shadow(0px 4px 6px rgba(255, 255, 255, 0.1)) brightness(1.2)"
      : "none"
}));

export const Column = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize: "42px",
  fontFamily: "Montserrat",
  fontWeight: "600",
  letterSpacing: "1.5px",
  lineHeight: "60px",
  textAlign: "center",
  color: theme.palette.text.primary,
  marginTop: "25px",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    lineHeight: "55px"
  }
}));

export const SubHeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: "Oxygen",
  fontWeight: "400",
  letterSpacing: "0.3px",
  fontSize: "32px",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    lineHeight: "40px",
    marginTop: "10px"
  }
}));

export const ButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    gap: "30px",
    justifyContent: "center",
    marginTop: "55px",
    paddingBottom: "15px"
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "25px",
  borderRadius: "35px",
  padding: "7px 55px",
  fontFamily: "Montserrat",
  color: "#ffffff",
  backgroundColor: "#115bc5",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#043596"
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "154px",
    padding: "7px 25px"
  }
}));

export const DiscordButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  border: "2px solid #4a93f8",
  backgroundColor: "#1e62c3",
  fontFamily: "Oxygen",
  fontSize: "16px",
  color: "white",
  height: "48px",
  borderRadius: "2px",
  padding: "0 0 0 20px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#1e62c3",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%, 12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)"
        : "rgba(0, 0, 0, 0.1) 0px 4px 12px"
  }
}));

export const TriangleContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "40px",
  height: "100%",
  padding: "0 20px",
  marginLeft: "20px",
  backgroundColor: "rgb(53,159,247)",
  background:
    "linear-gradient(180deg, rgba(53,159,247,1) 30%, rgba(127,124,245,1) 100%)"
});

export const TriangleIcon = styled("div")({
  transform: "translateX(-3px)",
  height: 0,
  borderTop: "5px solid transparent",
  borderBottom: "5px solid transparent",
  borderLeft: "10px solid white"
});

export const TopOfPageRef = styled("div")({
  position: "absolute",
  top: '-90px'
});

export const ScrollToTopButton = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: theme.palette.primary.dark,
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05)"
  }
}));

export const TopArrow = styled(BackArrowSVG)(({ theme }) => ({
  rotate: "90deg"
}));

export const DrawerMobileIcon = styled(HamburgerSVG)(({ theme }) => ({
  position: "absolute",
  top: "-52px",
  left: 0
}));