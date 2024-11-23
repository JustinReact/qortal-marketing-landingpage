import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { HamburgerSVG } from "../../Common/Icons/HamburgerSVG";
import Link from "next/link";
import { magistral, oxygen } from "../../../app/fonts";

interface HamburgerIconProps {
  rotated?: { isOn: boolean };
}

export const HeaderNav = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "0 30px",
  height: "125px",
  "&::before": {
    content: "''",
    backgroundColor: theme.palette.background.default,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    margin: "0 -16px"
  },
  [theme.breakpoints.only("xs")]: {
    height: "120px",
    padding: "0"
  }
}));

export const Divider = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0, 
  marginLeft: "-41.5px",
  marginRight: "-16px",
  width: "-webkit-fill-available",
  height: "2px",
  backgroundColor: theme.palette.text.primary,
}));

export const ThemeSelectRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "25px"
});

export const QortalLogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "3px",
  userSelect: "none",
  cursor: "pointer",
  textDecoration: "none"
}));

export const QortalText = styled(Typography)(({ theme }) => ({
  fontFamily: magistral.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  lineHeight: "27px",
  fontSize: "40px"
}));

export const HeaderButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px"
}));

export const NewsButton = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  backgroundColor: "transparent",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  color: theme.palette.text.primary,
  height: "48px",
  borderRadius: "2px",
  width: "130px",
  padding: "10px 15px",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
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

export const Docs = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: oxygen.style.fontFamily,
  width: "130px",
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

export const BlogButton = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  padding: "10px 15px",
  borderRadius: "2px",
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  fontWeight: "400",
  width: "130px",
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
  fontFamily: oxygen.style.fontFamily,
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
  width: "130px",
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
