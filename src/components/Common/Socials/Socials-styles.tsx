import { Box, styled } from "@mui/material";

export const IconRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "22px",
  "& svg": {
    cursor: "pointer",
  },
}));