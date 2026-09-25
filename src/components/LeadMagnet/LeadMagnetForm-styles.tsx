import { styled } from "@mui/system";
import {
  Box,
  Button,
  TextField,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography
} from "@mui/material";
import { futura, inter, oxygen } from "../../app/fonts";
import { InfoSVG } from "../Common/Icons/InfoSVG";

export const FormRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "compact"
})<{ compact?: boolean }>(({ theme, compact }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: compact ? "12px" : "28px",
  paddingTop: compact ? "2px" : 0,
  paddingRight: compact ? "16px" : "22px"
}));

export const FormTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "compact"
})<{ compact?: boolean }>(({ theme, compact }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: compact ? 500 : 400,
  fontSize: compact ? "18px" : "32px",
  lineHeight: compact ? "24px" : "40px",
  letterSpacing: 0,
  color: theme.palette.text.primary,
  userSelect: "none",
  textAlign: compact ? "center" : "left"
}));

export const Fields = styled(Box, {
  shouldForwardProp: (prop) => prop !== "compact"
})<{ compact?: boolean }>(({ compact }) => ({
  display: "flex",
  flexDirection: "column",
  gap: compact ? "10px" : "28px",
  width: "100%"
}));

export const InputField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "compact"
})<{ compact?: boolean }>(({ theme, compact }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: compact ? "16px" : "18px",
  fontWeight: 300,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  "& label": {
    color: theme.palette.mode === "light" ? "#808183" : "#edeef0",
    fontFamily: oxygen.style.fontFamily,
    fontSize: compact ? "16px" : "18px",
    letterSpacing: "0px"
  },
  "& label.Mui-focused": {
    color: theme.palette.mode === "light" ? "#A0AAB4" : "#d7d8da"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.mode === "light" ? "#B2BAC2" : "#c9cccf"
  },
  "& .MuiOutlinedInput-root": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: compact ? "16px" : "18px",
    letterSpacing: "0px",
    "& fieldset": {
      borderColor: "#E0E3E7"
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C"
    }
  },
  "& .MuiInputBase-root": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: compact ? "16px" : "18px",
    letterSpacing: "0px"
  },
  "& .MuiInputBase-input": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: compact ? "16px" : "18px",
    fontWeight: 300,
    color: theme.palette.text.primary,
    padding: compact ? "12px 14px" : "16.5px 14px"
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    marginTop: compact ? "4px" : "6px",
    fontFamily: oxygen.style.fontFamily,
    fontSize: compact ? "12px" : "14px"
  }
}));

export const SubmitButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "compact"
})<{ compact?: boolean }>(({ theme, compact }) => ({
  fontFamily: futura.style.fontFamily,
  fontWeight: 500,
  fontSize: compact ? "14px" : "16px",
  lineHeight: compact ? "18px" : "21.3px",
  letterSpacing: 0,
  color: "#ffffff",
  backgroundColor: theme.palette.customBlue.main,
  border: `1px solid ${theme.palette.customBlue.main}`,
  borderRadius: "30px",
  padding: compact ? "8px 20px" : "10px 30px",
  minHeight: compact ? "38px" : "43px",
  boxShadow: "1px 4px 10.5px 0px #0000004D",
  textTransform: "uppercase",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#F3F3F3",
    color: "#000000",
    border: "1px solid #F3F3F3",
    boxShadow: "1px 4px 10.5px 0px #0000004D"
  },
  "&.Mui-disabled": {
    color: "#ffffff",
    backgroundColor: theme.palette.customBlue.main,
    opacity: 0.65
  }
}));

export const ConsentTooltip = styled((props: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: props.className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontFamily: inter.style.fontFamily,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    border:
      theme.palette.mode === "light"
        ? "1px solid #000000"
        : "1px solid #F5F5F5",
    padding: "8px 12px",
    borderRadius: "6px",
    maxWidth: "220px",
    whiteSpace: "normal"
  }
}));

export const InfoIconContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "compact"
})<{ compact?: boolean }>(({ compact }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: compact ? "0px" : "0px",
  right: compact ? "0px" : "0px",
  cursor: "pointer"
}));

export const InfoIcon = styled(InfoSVG)({});

export const SuccessMessage = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "compact"
})<{ compact?: boolean }>(({ theme, compact }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontWeight: 400,
  fontSize: compact ? "16px" : "20px",
  lineHeight: compact ? "22px" : "28px",
  color: theme.palette.text.primary,
  textAlign: compact ? "center" : "left",
  userSelect: "none"
}));
