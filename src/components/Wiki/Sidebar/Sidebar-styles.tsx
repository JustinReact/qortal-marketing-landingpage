import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { oxygen } from "../../../app/fonts";
import { ChevronRightSVG } from "../../Common/Icons/ChevronRightSVG";

type SidebarProps = {
  isActive: boolean;
};

export const SidebarContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "38px",
  height: "fit-content",
  maxHeight: "600px",
  overflowY: "auto",
  paddingRight: "44px",
  backgroundColor: theme.palette.background.default,
  transition: "all 0.3s ease-in-out",
    "&::-webkit-scrollbar": {
      width: "2px",
    },
    "&::-webkit-scrollbar-track": {
      background: theme.palette.mode === "light" ? "#C0C0C0" : "#595656",
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.mode === "light" ? "#141414" : "#D9D9D9",
      borderRadius: 0,
      minHeight: "170px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: theme.palette.mode === "light" ? "#000000" : "#bbbbbb",
    },
  
}));

export const SectionTitleRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "51px",
  padding: "0 18px",
  borderRadius: "4px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.mode === "dark" ? "#D9D9D9" : "#000000",
    "& p": {
      color: theme.palette.mode === "dark" ? "#000000" : "#ffffff"
    },
    "& svg": {
      fill: theme.palette.mode === "dark" ? "#000000" : "#ffffff"
    }
  }
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "27px",
  color: theme.palette.text.primary,
  userSelect: "none",
  transition: "all 0.3s ease-in-out"
}));

export const ChevronIcon = styled(ChevronRightSVG)(({ theme }) => ({
  transform: "rotate(90deg)",
  transition: "all 0.3s ease-in-out"
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const SectionList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  margin: "0 0 0 46px",
  listStyleType: "none",
  padding: 0, 
}));

export const SectionListItem = styled("li", {
  shouldForwardProp: (prop) => prop !== "isActive"
})<SidebarProps>(({ theme, isActive }) => ({
  position: "relative" as const,
  fontFamily: oxygen.style.fontFamily,
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "27px",
  color: theme.palette.text.primary,
  userSelect: "none",
  "&::before": {
    content: "''",
    backgroundColor: theme.palette.text.primary,
    position: "absolute" as const,
    left: "-24px",
    width: "6px",
    height: "15px",
    top: "6.5px"
  },
}));

export const ContributeButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: 0,
  width: "181px",
  height: "43px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "30px",
  border: `1px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  boxShadow: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    boxShadow: "1px 4px 10.5px 0px #0000004D",
    backgroundColor: "#F3F3F3",
    border:
      theme.palette.mode === "dark"
        ? `1px solid ${theme.palette.text.primary}`
        : "1px solid #F3F3F3",
    color: "#000000"
  },
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available"
  }
}));