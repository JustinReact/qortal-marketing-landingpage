import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { segoeUI } from "../../../app/fonts";

type DrawerButtonProps = {
  active?: boolean;
};

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "37px 0",
  backgroundColor: theme.palette.mode === "dark" ? "#0D101E" : "#AAAAAA"
}));

export const DrawerButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active"
})<DrawerButtonProps>(({ active, theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: segoeUI.style.fontFamily,
  fontWeight: active ? 450 : 400,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "calc(0.28*16px)",
  height: "49px",
  width: "100%",
  color:
    theme.palette.mode === "dark" && !active
      ? "#707070"
      : theme.palette.mode === "dark" && active
      ? "#ffffff"
      : theme.palette.mode === "light" && !active
      ? "#ffffff"
      : "#000000",
  transition: "all 0.3s ease-in-out",
  textTransform: "uppercase",
  cursor: "pointer",
  userSelect: "none",
}));
