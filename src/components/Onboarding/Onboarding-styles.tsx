import { alpha, styled } from "@mui/system";
import {
  Box,
  Button,
  TextField,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography
} from "@mui/material";
import { inter, oxygen } from "../../app/fonts";
import Image from "next/image";
import { InfoSVG } from "../Common/Icons/InfoSVG";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "50px 300px 30px 300px",
  [theme.breakpoints.down("lg")]: {
    padding: "50px 100px 30px 100px"
  },
  [theme.breakpoints.only("xs")]: {
    padding: "30px 20px 50px 20px"
  }
}));

export const ButtonOnBoarding = styled(Button)(({ theme, color }) => ({
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.7)
  }
}));

export const ButtonWarningOnBoarding = styled(Button)(({ theme, color }) => ({
  "&:hover": {
    backgroundColor: alpha(theme.palette.warning.main, 0.7)
  }
}));

export const ButtonTextOnBoarding = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "none",
    boxShadow: "none"
  }
}));

export const SupportButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "7px",
  padding: "4.5px 15px",
  height: "auto",
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: "30px",
  transition: "all 0.3s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.customBlue.main,
    color: "#ffffff",
    border: `1px solid ${theme.palette.customBlue.main}`
  },
  "&:hover": {
    backgroundColor: theme.palette.customBlue.main,
    color: "#ffffff",
    border: `1px solid ${theme.palette.customBlue.main}`,
    "& svg path": {
      transition: "all 0.3s ease-in-out",
      fill: "#ffffff !important"
    }
  }
}));

export const CommunityRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between"
}));
