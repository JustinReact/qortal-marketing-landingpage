import { lineHeight, styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { futura, redditSans } from "../../app/fonts";
import { ChromeStoreSVG } from "../Common/Icons/ChromeStoreSVG";
import { AppleSVG } from "../Common/Icons/AppleSVG";
import { AndroidSVG } from "../Common/Icons/AndroidSVG";

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
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "35px"
  }
}));

export const DownloadsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "20px",
  marginTop: "98px",
  "@media(max-width: 1243px)": {
    gap: "20px",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@media(max-width: 731px)": {
    marginTop: "50px",
    marginBottom: "40px",
    gap: "60px",
    gridTemplateColumns: "auto",
    gridTemplateRows: "repeat(5, 1fr)"
  }
}));

export const DownloadCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: theme.palette.mode === "light" ? "#2F2F2F" : "#ffffff",
  padding: "15px 15px 20px 24px",
  borderRadius: "5px",
  width: "100%",
  maxWidth: "600px",
  height: "87px",
  transition: "all 0.3s ease-in-out",
  "& img, & svg": {
    marginTop: "10px"
  },  
  "&:hover": {
    cursor: "pointer",
    boxShadow:
      theme.palette.mode === "light"
        ? "none"
        : "0px 12px 17px 2px hsla(0, 0%, 100%, 0.08), 0px 5px 22px 4px hsla(0, 0%, 100%, 0.09), 0px 7px 8px -4px hsla(0, 0%, 100%, 0.2),  0px 0px 10px rgba(255, 255, 255, 0.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#56AEFF" : "#003E78"
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
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "8px",
  [theme.breakpoints.down("md")]: {
    gap: 0
  }
}));

export const DownloadText = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 300,
  fontSize: "30px",
  userSelect: "none",
  "@media(max-width: 1700px)": {
    fontSize: "28px"
  },
  "@media(max-width: 1613px)": {
    fontSize: "26px"
  },
  "@media(max-width: 1520px)": {
    fontSize: "24px"
  },
  "@media(max-width: 1319px)": {
    fontSize: "22px"
  }
}));

export const DownloadText1 = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.mode === "light" ? "#ffffff" : "#000000",
  fontWeight: 300,
  fontSize: "20px",
  lineHeight: "22px",
  userSelect: "none",
}));

export const DownloadText2 = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.mode === "light" ? "#ffffff" : "#000000",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "24px",
  userSelect: "none",
  "@media(max-width: 1243px)": {
    fontSize: "20px"
  },
  "@media(max-width: 1127px)": {
    fontSize: "28px"
  },
  [theme.breakpoints.down("md")]: {
    lineHeight: "25px"
  },
  "@media(max-width: 743px)": {
    fontSize: "24px"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    lineHeight: "28px"
  }
}));

export const OtherVersionsCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  marginTop: "100px",
}));

export const OtherVersionsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

export const OtherVersionsText = styled(Typography)(({ theme }) => ({
  fontFamily: redditSans.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "22px",
  userSelect: "none",
  "& a": {
    textDecoration: "none",
    color: theme.palette.customBlue.main,
    marginLeft: "5px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(0.9)"
    }
  },
  [theme.breakpoints.down("md")]: {
    lineHeight: "40px",
    textAlign: "center"
  }
}));

export const ScreenshotContainer = styled(Grid)(({ theme }) => ({
  marginTop: "160px",
  alignItems: "center",
  justifyContent: "center",
  "@media(min-width: 1700px)": {
    padding: "0 150px",
  },
  "@media(max-width: 1699px)": {
    padding: "0 100px",
  },
  "@media(max-width: 1127px)": {
    padding: "0 30px",
    marginTop: "50px"
  }
}));

export const ScreenshotCol = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const Screenshot1 = styled(Image)(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
  objectFit: "contain"
}));

export const Screenshot2 = styled(Image)(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
  objectFit: "contain",
  transform: "translateY(50px)",
  [theme.breakpoints.down("md")]: {
    transform: "translateY(0px)",
    width: "50%"
  }
}));

export const Screenshot3 = styled(Image)(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
  objectFit: "contain"
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
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    marginTop: "70px"
  }
}));

export const ChromeStoreLogo = styled(ChromeStoreSVG)({
  marginRight: "21px"
})

export const AppleLogo = styled(AppleSVG)({
  marginRight: "25px"
});

export const AndroidIcon = styled(AndroidSVG)({
  marginRight: "25px"
});