import { styled } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';

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
  fontFamily: 'Montserrat',
  width: '100%',
  fontSize: "25px",
  gap: "35px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  padding: "20px"
}));  