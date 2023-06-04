import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { HamburgerSVG } from "../../Common/Icons/HamburgerSVG";

interface HamburgerIconProps {
  rotated?: { isOn: boolean };
}

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

export const ThemeSelectRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "25px"
});

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

export const BackHomeButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Oxygen",
  fontSize: "16px",
  gap: "4px",
  padding: "5px 9px",
  backgroundColor: theme.palette.secondary.light,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light
  }
}));

export const HeaderButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "35px"
}));

export const DiscordButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  border: "2px solid #4a93f8",
  backgroundColor: "#1e62c3",
  fontFamily: "Oxygen",
  fontSize: "18px",
  color: "white",
  height: "48px",
  borderRadius: "2px",
  padding: "0 0 0 20px",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "#1e62c3",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%, 12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)"
        : "rgba(0, 0, 0, 0.1) 0px 4px 12px"
  }
}));

export const DocsNavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "flex-end",
}));

export const Docs = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "Oxygen",
  fontSize: "18px",
  padding: "10px 15px",
  borderRadius: "2px",
  backgroundColor: "#7f7cf5",
  color: "#ffffff",
  fontWeight: "400",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
  userSelect: "none",
  "&:hover": {
    cursor: "pointer",
    filter: "brightness(0.9)"
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

export const HamburgerIcon = styled(HamburgerSVG)<HamburgerIconProps>(
  ({ rotated, theme }) => ({
    transition: "all 0.3s ease-in-out",
    transform: rotated?.isOn ? "rotate(90deg)" : "rotate(0deg)"
  })
);
