import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  padding: "15px 30px 0 30px",
  gap: "15px",
  marginTop: "auto",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    padding: "15px 0"
  }
}));

export const FooterLink = styled(Typography)(({ theme }) => ({
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
  userSelect: "none",
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
