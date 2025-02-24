import { styled } from "@mui/system";
import { Box, Link } from "@mui/material";

export const WikiContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  gap: "50px",
  padding: "50px",
  width: "100%",
  overflow: "hidden",
}));

export const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "15px",
  maxHeight: "calc(100vh - 50px)",
  overflowY: "auto", 
  scrollBehavior: "smooth", 
}));