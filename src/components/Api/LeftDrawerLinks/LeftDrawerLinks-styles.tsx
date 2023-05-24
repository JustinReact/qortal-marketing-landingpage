import { styled } from "@mui/system";
import {
  Drawer,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import { HamburgerSVG } from "../../Common/Icons/HamburgerSVG";

interface CustomDrawerProps {
  drawerwidth?: number;
}

export const CustomDrawer = styled(Drawer)<CustomDrawerProps>(
  ({ drawerwidth, theme }) => ({
    width: drawerwidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      top: "0",
      padding: "22px 0 0 0",
      width: drawerwidth,
      boxSizing: "border-box",
      backgroundColor: theme.palette.background.default,
      paddingBottom: "80px",
      overflowY: "auto",
      borderRight:
        theme.palette.mode === "dark"
          ? `1px solid ${theme.palette.primary.light}`
          : `1px solid ${theme.palette.primary.dark}`,
      "&::-webkit-scrollbar": {
        width: "16px",
        height: "10px",
        backgroundColor: "transparent" // Hide scrollbar by default
      },
      "&::-webkit-scrollbar-track": {
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
      }
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute"
    }
  })
);

export const CustomDrawerButton = styled(ListItemButton)<CustomDrawerProps>(
  ({ theme }) => ({
    "&:hover": {
      backgroundColor: ""
    }
  })
);

export const QAppsLogo = styled(Typography)(({ theme }) => ({
  fontFamily: "Lovelo",
  fontSize: "23px",
  color: theme.palette.text.primary,
  transform: "translateY(3px)",
  userSelect: "none",
  "& span": {
    padding: "8px 14px",
    borderRadius: "8px",
    marginLeft: "1px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.light
  },
  [theme.breakpoints.down("sm")]: {
    transform: "translateY(0)",
    fontSize: "15px"
  }
}));

export const DrawerText = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    color: theme.palette.text.primary,
    fontFamily: "Catamaran",
    fontSize: "20px"
  }
}));

export const DrawerSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: "Catamaran",
  fontSize: "16px"
}));

export const HamburgerIcon = styled(HamburgerSVG)(({ theme }) => ({
  rotate: "90deg",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));
