import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";

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
