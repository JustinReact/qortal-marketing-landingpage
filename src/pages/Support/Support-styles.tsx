import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const SupportContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "30px",
  [theme.breakpoints.only("xs")]: {
    padding: "50px 20px"
  }
}));

export const SupportHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Oxygen",
  fontWeight: "400",
  letterSpacing: "0.3px",
  fontSize: "32px",
  marginBottom: "20px",
  textAlign: "center",
  userSelect: "none",
}));

export const DiscordLogo = styled("img")(({ theme }) => ({
  width: "17%",
  cursor: "pointer",
  transition: "all 0.4s ease-in-out",
  "&:hover": {
  filter: "drop-shadow(0 0 10px #19ffff) drop-shadow(0 0 5px #19ffff)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "60%",
  }
}));
