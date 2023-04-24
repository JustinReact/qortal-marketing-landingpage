import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from '@mui/material';

export const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  padding: "2rem 1rem",
  gap: "20px"
});

export const ThemeSelectRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "25px"
})

export const HeaderNav = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "0 100px",
});

export const QblogLogoContainer = styled('img')({
  width: '120px',
  height: 'auto',
  userSelect: 'none',
  objectFit: 'contain',
  cursor: 'pointer'
})

export const Column = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize:"42px",
  fontFamily:"Montserrat",
  fontWeight:"600",
  letterSpacing:"1.5px",
  lineHeight:"60px",
  textAlign:"center",
  color: theme.palette.text.primary,
  userSelect: "none" 
}));

export const SubHeaderText = styled(Typography)(({ theme }) => ({
  fontFamily:"Oxygen",
  fontWeight:"400",
  letterSpacing:"0.3px",
  userSelect: "none"
}));

export const StyledButton = styled(Button)({
  margin: '1rem',
  padding: '0.75rem 1.5rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  backgroundColor: 'darkgrey',
  borderRadius: '10px',
});

export const DiscordButton = styled(Button)({
  display: "flex",
  justifyContent: "space-between",
  border: "2px solid #4a93f8",
  backgroundColor: "#1e62c3",
  fontFamily: "Oxygen",
  fontSize: "16px",
  color: "white",
  height: '48px',
  borderRadius: "2px",
  padding: "0 0 0 20px",
  "&:hover": {
    backgroundColor: "#1e62c3"
  }
});

export const TriangleContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "40px",
  height: "100%",
  padding: "0 20px",
  marginLeft: "20px",
  backgroundColor: "rgb(53,159,247)",
  background: "linear-gradient(180deg, rgba(53,159,247,1) 30%, rgba(127,124,245,1) 100%)", 
})

export const TriangleIcon = styled("div")({
    transform: "translateX(-3px)",
    height: 0,
    borderTop: "5px solid transparent",
    borderBottom: "5px solid transparent",
    borderLeft: "10px solid white",
})