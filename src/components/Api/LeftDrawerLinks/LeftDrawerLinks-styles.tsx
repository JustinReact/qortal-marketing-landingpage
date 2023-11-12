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
      padding: "0",
      width: drawerwidth,
      boxSizing: "border-box",
      backgroundColor: theme.palette.background.default,
      paddingBottom: "20px",
      overflowY: "auto",
      borderRight:
        theme.palette.mode === "dark"
          ? `1px solid ${theme.palette.primary.light}`
          : `1px solid ${theme.palette.primary.dark}`,
      "&::-webkit-scrollbar": {
        width: "16px",
        height: "10px",
        backgroundColor: theme.palette.background.default // Hide scrollbar by default
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: theme.palette.background.default
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

export const QAppsLogo = styled("img")(({ theme }) => ({
  width: "60px",
  height: "auto",
  objectFit: "contain",
  userSelect: "none"
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
