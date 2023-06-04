import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";

export const BlogTopicsCol = styled(Grid)(({ theme }) => ({
  width: "200px",
  borderRight:
    theme.palette.mode === "dark"
      ? `1px solid ${theme.palette.primary.light}`
      : `1px solid ${theme.palette.primary.dark}`
}));
