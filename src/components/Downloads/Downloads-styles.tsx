import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { futura, redditSans } from "../../app/fonts";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "106px 90px 106px 90px",
  width: "100%",
  "@media(max-width: 1444px)": {
    padding: "50px 20px 34px 20px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 20px 25px 20px",
    width: "100%"
  }
}));

export const DownloadsTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: futura.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "55px",
  lineHeight: "73px",
  letterSpacing: "calc(0.09 * 55px)",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "35px"
  }
}));

export const DownloadsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  marginTop: "98px",
  "@media(max-width: 1127px)": {
    gap: "20px",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@media(max-width: 731px)": {
    marginTop: "50px",
    marginBottom: "40px",
    gap: "60px",
    gridTemplateColumns: "auto",
    gridTemplateRows: "repeat(4, 1fr)"
  }
}));

export const DownloadCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "21px",
  backgroundColor: theme.palette.mode === "light" ? "#2F2F2F" : "#ffffff",
  padding: "15px",
  borderRadius: "5px",
  width: "100%",
  height: "87px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    boxShadow:
      theme.palette.mode === "light"
        ? "0px 6px 10px 0px hsla(0,0%,0%,0.14), 0px 1px 18px 0px hsla(0,0%,0%,0.12), 0px 3px 5px -1px hsla(0,0%,0%,0.2)"
        : "0px 12px 17px 2px hsla(0, 0%, 100%, 0.08), 0px 5px 22px 4px hsla(0, 0%, 100%, 0.09), 0px 7px 8px -4px hsla(0, 0%, 100%, 0.2),  0px 0px 10px rgba(255, 255, 255, 0.1)"
  },
  [theme.breakpoints.down("md")]: {
    width: "80%"
  }
}));

export const DownloadCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px"
}));

export const DownloadTextCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px"
}));

export const DownloadText = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 300,
  fontSize: "30px",
  userSelect: "none",
  "@media(max-width: 1276px)": {
    fontSize: "24px"
  },
  "@media(max-width: 1127px)": {
    fontSize: "30px"
  },
}));

export const DownloadText1 = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.mode === "light" ? "#ffffff" : "#000000",
  fontWeight: 300,
  fontSize: "20px",
  userSelect: "none"
}));

export const DownloadText2 = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.mode === "light" ? "#ffffff" : "#000000",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "10px",
  userSelect: "none",
  "@media(max-width: 1294px)": {
    fontSize: "20px"
  },
  "@media(max-width: 1146px)": {
    fontSize: "18px"
  },
  "@media(max-width: 1127px)": {
    fontSize: "28px"
  },
  "@media(max-width: 743px)": {
    fontSize: "24px"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px"
  }
}));

export const ScreenshotContainer = styled(Grid)(({ theme }) => ({
  marginTop: "180px",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 150px",
  "@media(max-width: 1127px)": {
    padding: "0 10px",
    marginTop: "50px"
  },
}));

export const ScreenshotCol = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Screenshot1 = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "contain",
}));

export const Screenshot2 = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  transform: "translateY(50px)",
  [theme.breakpoints.down("md")]: {
    transform: "translateY(0px)",
    width: "50%",
  },
}));

export const Screenshot3 = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "contain",
}));

export const DownloadNowText = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "50px",
  letterSpacing: "calc(0.09 * 65px)",
  lineHeight: "73px",
  marginTop: "200px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: "70px",
  },
}));