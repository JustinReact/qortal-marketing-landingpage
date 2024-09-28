import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { HamburgerSVG } from "../../Common/Icons/HamburgerSVG";
import Link from "next/link";

interface HamburgerIconProps {
  rotated?: { isOn: boolean };
}

export const HeaderNav = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "0 30px",
  [theme.breakpoints.only("xs")]: {
    padding: "0"
  }
}));

export const ThemeSelectRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "25px"
});

export const QortalLogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 0,
  userSelect: "none",
  cursor: "pointer",
  textDecoration: "none"
}));

export const QortalText = styled(Typography)(({ theme }) => ({
  fontFamily: "Magistral",
  color: theme.palette.text.primary,
  fontWeight: 400,
  lineHeight: "27px",
  fontSize: "40px"
}));

export const BackHomeButton = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Oxygen",
  fontSize: "16px",
  gap: "4px",
  padding: "5px 9px",
  backgroundColor: theme.palette.secondary.light,
  color: "white",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light
  }
}));

export const HeaderButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "25px"
}));

export const DiscordButton = styled(Typography)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  backgroundColor: "transparent",
  fontFamily: "Oxygen",
  fontSize: "18px",
  color: theme.palette.text.primary,
  height: "48px",
  borderRadius: "2px",
  padding: "10px 15px",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
  "&.active ": {
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "3px",
    transition: "all 0.3s ease-in-out"
  },
  "&:hover": {
    cursor: "pointer",
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  }
}));

export const DocsNavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "flex-end"
}));

export const Docs = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "Oxygen",
  minWidth: "140px",
  fontSize: "18px",
  padding: "10px 15px",
  borderRadius: "2px",
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  fontWeight: "400",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
  userSelect: "none",
  textDecoration: "none",
  "&.active ": {
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "3px",
    transition: "all 0.3s ease-in-out"
  },
  "&:hover": {
    cursor: "pointer",
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  }
}));

export const FeaturesButton = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "Oxygen",
  fontSize: "18px",
  padding: "10px 15px",
  borderRadius: "2px",
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  fontWeight: "400",
  minWidth: "140px",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
  userSelect: "none",
  textDecoration: "none",
  "&.active ": {
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "3px",
    transition: "all 0.3s ease-in-out"
  },
  "&:hover": {
    cursor: "pointer",
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  }
}));

export const QORTButton = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "Oxygen",
  fontSize: "18px",
  minWidth: "140px",
  padding: "10px 15px",
  borderRadius: "2px",
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  fontWeight: "400",
  zIndex: 2,
  userSelect: "none",
  textDecoration: "none",
  "&.active ": {
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "3px",
    transition: "all 0.3s ease-in-out"
  },
  "&:hover": {
    cursor: "pointer",
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "3px"
    }
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
