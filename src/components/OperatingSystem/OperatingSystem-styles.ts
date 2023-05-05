import { Grid, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

export const MainContainer = styled(Grid)(({ theme }) => ({
  padding: "20px 40px",
  margin: "0",
  gap: "40px",
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    gap:"10px",
    padding: 0
  }
}))

export const BackButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "7px",
  fontFamily: 'Nanum Gothic, sans-serif',
  fontSize: "18px",
  fontWeight: 500,
  textTransform: 'none',
  transition: "all 0.3s ease-in-out",
  '&:hover': {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.light,
    filter: "brightness(0.9)"
  },
[theme.breakpoints.down('sm')]: {
  display: "none"
}
}))

export const BackArrowIcon = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",  
    justifyContent: "center",
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.light,
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.up('sm')]: {
      display: "none"
    }
}));

