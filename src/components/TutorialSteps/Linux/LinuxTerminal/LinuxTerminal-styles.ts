import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

export const ScriptCard = styled(Box)(({ theme }) => ({
  position: "relative", 
  marginBottom: "15px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
  }
}));

export const CopyButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "5px",
  right: "7px",
  padding: "3px 10px",
  fontSize: "14px",
  gap: "10px",
  borderRadius: "4px",
  backgroundColor:
    theme.palette.mode === "light" ? "#6495ed" : theme.palette.secondary.dark,
  fontFamily: "Oxygen",
  color: "white",
  display: "flex",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light" ? "#6495ed" : theme.palette.secondary.dark,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1px 10px",
  },
}));

export const CheckmarkIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "2px",
  backgroundColor: "#24ab11bd",
  borderRadius: "50%",
}));

export const LinuxTerminalContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? `${theme.palette.primary.main} !important`
      : "#0a0a108f",
  borderRadius: "8px",
  padding: "30px 10px 10px 10px",
  fontSize: "18px",
  fontFamily: "monospace",
  [theme.breakpoints.down("sm")]: {
    padding: "35px 10px 10px 10px",
    fontSize: "15px",
  },
}));

export const ScreenshotRow = styled(Box)({
  objectFit: "contain",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});
