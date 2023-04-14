import { Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

export const MainContainer = styled(Grid)({
  padding: "20px 40px",
  margin: "0",
  gap: "40px",
})

export const BackButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  padding: "8px 16px",
  borderRadius: "7px",
  fontFamily: 'Nanum Gothic, sans-serif',
  fontSize: "18px",
  fontWeight: 500,
  textTransform: 'none',
  transition: "all 0.3s ease-in-out",
  '&:hover': {
    cursor: "pointer",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    backgroundColor: "#e75588",
  },
}))
