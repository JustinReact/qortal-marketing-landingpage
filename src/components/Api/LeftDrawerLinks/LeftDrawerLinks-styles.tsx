import { styled } from "@mui/system";
import {
  Box,
  Button,
  Drawer,
  Grid,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";

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
  fontFamily: "Cairo",
  fontSize: "20px",
  color: theme.palette.text.primary,
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