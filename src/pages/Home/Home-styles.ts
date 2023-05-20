import { styled } from '@mui/system'
import { Box, Button, Grid, Typography } from '@mui/material'

export const Column = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontWeight: '550',
  letterSpacing: '1.5px',
  lineHeight: '60px',
  textAlign: 'center',
  color: theme.palette.text.primary,
  marginTop: '25px',
  userSelect: 'none',
  [theme.breakpoints.only('md')]: {
    padding: '0 15px'
  },
  [theme.breakpoints.down('sm')]: {
    lineHeight: '55px'
  }
}))

export const SubHeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Oxygen',
  fontWeight: '400',
  letterSpacing: '0.3px',
  userSelect: 'none',
  [theme.breakpoints.only('md')]: {
    padding: '0 15px'
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    lineHeight: '40px',
    marginTop: '10px'
  }
}))

export const FooterRow = styled(Grid)(({ theme }) => ({
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    gap: '35px'
  }
}))

export const ButtonRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '30px',
    justifyContent: 'center',
    paddingBottom: '15px'
  }
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '25px',
  borderRadius: '35px',
  padding: '7px 55px',
  fontFamily: 'Montserrat',
  color: '#ffffff',
  backgroundColor: '#115bc5',
  transition: 'all 0.3s ease-in-out',
  gap: '10px',
  '&:hover': {
    backgroundColor: '#043596'
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '154px',
    padding: '7px 25px'
  }
}))
