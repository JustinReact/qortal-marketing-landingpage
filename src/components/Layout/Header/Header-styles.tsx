import { styled } from "@mui/system";
import { Box, Button, Paper, Typography } from "@mui/material";
import { HamburgerSVG } from "../../Common/Icons/HamburgerSVG";
import Link from "next/link";
import { magistral, oxygen } from "../../../app/fonts";
import { QortalBlackLogoSVG } from "../../Common/Icons/QortalBlackLogoSVG";
import { QortalWhiteLogoSVG } from "../../Common/Icons/QortalWhiteLogoSVG";
import { LightModeSVG } from "../../Common/Icons/LightModeSVG";
import { DarkModeSVG } from "../../Common/Icons/DarkModeSVG";
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
  padding: "0 180px 0 59px",
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
  bottom: -9,
  left: 0,
  right: 0, 
  marginLeft: "-41.5px",
  marginRight: "-16px",
  width: "-webkit-fill-available",
  height: "1px",
  backgroundColor: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}));

export const ThemeSelectRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "80px",
  [theme.breakpoints.down("sm")]: {
    gap: "16px"
  }
}));

export const QortalLogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "3px",
  userSelect: "none",
  cursor: "pointer",
  textDecoration: "none",
  padding: "25px 0",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  }
}));

export const LightModeIcon = styled(LightModeSVG)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "20px",
    height: "20px"
  }
}));

export const DarkModeIcon = styled(DarkModeSVG)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "20px",
    height: "20px"
  }
}));

export const QortalQBlack = styled(QortalBlackLogoSVG)(({ theme }) => ({
   marginRight: "2px",
  [theme.breakpoints.down("sm")]: {
    width: "41px",
    height: "59px"
  }
}));

export const QortalQWhite = styled(QortalWhiteLogoSVG)(({ theme }) => ({
   marginRight: "2px",
   [theme.breakpoints.down("sm")]: {
    width: "41px",
    height: "59px"
  }
}));

export const QortalText = styled(Typography)(({ theme }) => ({
  fontFamily: magistral.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  lineHeight: "27px",
  fontSize: "64px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px"
  }
}));

export const QortalSmallerText = styled(Typography)(({ theme }) => ({
  fontFamily: magistral.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  lineHeight: "27px",
  marginTop: "20px", 
  fontSize: "36px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "7px", 
    fontSize: "24px"
  }
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
  height: "44px",
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
      bottom: "-4px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "-4px",
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
      bottom: "-4px"
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
  height: "44px",
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
      bottom: "-4px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "-4px",
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
      bottom: "-4px"
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
  height: "44px",
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
      bottom: "-4px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "-4px",
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
      bottom: "-4px"
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
  height: "44px",
  "&.active ": {
    "&::after": {
      width: "100%",
      backgroundColor: theme.palette.text.primary,
      height: "2px",
      position: "absolute",
      content: "''",
      bottom: "-4px"
    }
  },
  "&::after": {
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.text.primary,
    content: "''",
    bottom: "-4px",
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
      bottom: "-4px"
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
    position: "absolute",
    right: 0,
    top: "50px",
    transition: "all 0.3s ease-in-out",
    transform: rotated?.isOn ? "rotate(90deg)" : "rotate(0deg)",
    cursor: "pointer",
  })
);

export const DropdownBtn = styled(Typography)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  backgroundColor: "transparent",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  color: theme.palette.text.primary,
  height: "44px",
  borderRadius: "2px",
  width: "130px",
  padding: "10px 15px",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
  textDecoration: "none",
  cursor: "pointer",
  userSelect: "none",
}));

export const DropdownContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  backgroundColor: theme.palette.background.default,
  backgroundImage: "none",
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  mt: "0px",
  minWidth: "301px",
  borderRadius: "5px",
  border: theme.palette.mode === "dark" ? "1px solid #f5f5f5" : "1px solid #060a1e",
  zIndex: 10
}))

export const DropdownItem = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  lineHeight: "27px",
  letterSpacing: 0,
  padding: "15px 0",
  textDecoration: "none",
  color: theme.palette.text.primary,
  backgroundColor: "none",
  transition: "all 0.3s ease",
    "&:first-of-type": {
      borderRadius: "5px 5px 0 0"
    },
    "&:last-of-type": {
      borderRadius: "0 0 5px 5px"
    },
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#f5f5f5" : "#060a1e",
    color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
  }
}));