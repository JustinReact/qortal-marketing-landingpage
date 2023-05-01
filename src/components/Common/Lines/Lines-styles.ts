import { styled } from "@mui/system";
import { Box } from '@mui/material';


export const Line = styled(Box)(({theme}) => ({
  position: "fixed",
  height: "1px",
  width: "5000px",
  background: theme.palette.mode === "light" ? "#9d9da3" : "#ffffff",
  opacity: 0.6,
  zIndex: 0,
  transform: "rotate(25deg)",
}));

export const Line2 = styled(Box)(({theme}) => ({
  position: "fixed",
  height: "1px",
  width: "5000px",
  background: theme.palette.mode === "light" ? "#9d9da3" : "#ffffff",
  opacity: 0.6,
  zIndex: 0,
  transform: "rotate(-45deg)",
  top: "50%"
}));
