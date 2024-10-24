import { styled } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import { inter, montserrat } from '../../../app/fonts';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
}));

export const Divider = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  width: "90%",
  height: "1px",
  opacity: "0.55",
}));

export const DrawerButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: "flex-end",
  alignItems: 'center',
  fontFamily: montserrat.style.fontFamily,
  width: '100%',
  fontSize: "25px",
  gap: "35px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  padding: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  userSelect: "none",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  }
}));  

export const DownloadButton = styled(Button)(({ theme }) => ({
  fontFamily: inter.style.fontFamily,
  fontSize: "16px",
  backgroundColor: "#0091E1",
  color: "#ffffff",
  padding: "9px 0",
  textAlign: "center",
  width: "100%",
  borderRadius: "25px",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.dark,
  }
}));