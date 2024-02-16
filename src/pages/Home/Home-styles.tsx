import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import QORTPromoImage from "../../images/Home/QORTPromoImage.webp";

export const MainRow = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "55px 60px 10px 60px",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "80px"
  },
  [theme.breakpoints.only("xs")]: {
    padding: 0
  }
}));

export const MainCol = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "15px"
});

export const QortalWordLogo = styled("img")({
  width: "auto",
  height: "45px",
  transform: "translateY(13px)"
});

export const Column = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontWeight: "550",
  letterSpacing: "1.5px",
  fontSize: "34px",
  lineHeight: "35px",
  color: theme.palette.text.primary,
  userSelect: "none",
  [theme.breakpoints.only("md")]: {
    padding: "0 15px"
  },
  [theme.breakpoints.down("sm")]: {
    lineHeight: "55px"
  },
  [theme.breakpoints.only("xs")]: {
    textAlign: "center"
  }
}));

export const SubHeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: "Oxygen",
  fontWeight: "400",
  fontSize: "28px",
  letterSpacing: "0.3px",
  userSelect: "none",
  [theme.breakpoints.only("md")]: {
    padding: "0 15px"
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    lineHeight: "40px",
    marginTop: "10px"
  }
}));

export const FooterRow = styled(Grid)(({ theme }) => ({
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    gap: "35px"
  }
}));

export const ButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "20px",
  marginTop: "10px",
  width: "100%",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
    paddingBottom: "15px"
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  borderRadius: "35px",
  padding: "5px 35px",
  fontFamily: "Montserrat",
  color: "#ffffff",
  backgroundColor: "#115bc5",
  transition: "all 0.3s ease-in-out",
  gap: "10px",
  "&:hover": {
    backgroundColor: "#043596"
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "154px",
    padding: "7px 25px"
  }
}));

export const VideoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "25px",
  marginTop: "15px",
  minWidth: "100%",
  width: "fill-available",
  height: "500px",
  padding: "25px 50px",
  maxWidth: "500px",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    padding: "25px 0"
  },
  "& iframe": {
    maxWidth: "600px",
    width: "50%",
    height: "100%",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
}));

export const VideoTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Oxygen",
  color: theme.palette.text.primary,
  fontWeight: "400",
  userSelect: "none",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center"
  }
}));

export const QORTPromoModal = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${QORTPromoImage})`,
  backgroundSize: "contain",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat"
}));

export const FlexRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "15px 0",
  [theme.breakpoints.only("xs")]: {
    margin: "5px 0"
  },
}));

export const CustomDiscordButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  border: "2px solid #0b71ff",
  backgroundColor: "#000000",
  padding: "5px 0",
  height: "80px",
  width: "50%",
  fontFamily: "Montserrat",
  fontSize: "30px",
  color: "white",
  fontWeight: 600,
  borderRadius: "15px",
  transition: "all 0.5s ease-in-out",
  zIndex: 2,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%, 12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)"
      : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  "&:hover": {
    backgroundColor: "#030d2df6",
    cursor: "pointer"
  },
  [theme.breakpoints.only("xs")]: {
    height: "50px",
    fontSize: "15px",

  }
}));

export const DiscordLogo = styled("img")(({ theme }) => ({
  width: "17%",
  cursor: "pointer",
  transition: "all 0.4s ease-in-out",
  filter: "drop-shadow(0 0 10px #19ffff) drop-shadow(0 0 5px #19ffff)",
}));
