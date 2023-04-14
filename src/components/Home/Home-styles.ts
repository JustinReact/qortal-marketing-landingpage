import { styled } from "@mui/system";
import { Button, Grid } from '@mui/material';

export const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  padding: "2rem 1rem",
  gap: "20px"
});

export const Column = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledButton = styled(Button)({
  margin: '1rem',
  padding: '0.75rem 1.5rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  backgroundColor: 'darkgrey',
  borderRadius: '10px',
});