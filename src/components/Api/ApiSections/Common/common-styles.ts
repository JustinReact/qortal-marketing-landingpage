import { styled } from '@mui/system'
import { Box, Button, Grid, Typography } from '@mui/material'

export const SectionTitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Oxygen',
  fontWeight: '400',
  letterSpacing: '0.3px',
  fontSize: '32px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    lineHeight: '40px',
    marginTop: '10px'
  }
}))
export const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Oxygen',
  fontWeight: '400',
  letterSpacing: '0.3px',
  fontSize: '24px',
  marginTop: '10px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    lineHeight: '40px',
    marginTop: '10px'
  }
}))

export const SectionParagraph = styled(Typography)(({ theme }) => ({
  marginTop: '20px',
  fontSize: '16px',
  lineHeight: '28px',
  fontFamily: 'Roboto',
  width: 'fit-content',
  color: theme.palette.mode === 'light' ? '#837d7d' : '#6f7587'
}))

export const ParagraphContainer = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'column'
}))

export const SectionContainer = styled(Typography)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: '50px'
}))
export const Code = styled('code')(({ theme }) => ({
  padding: '0.2em 0.4em',
  margin: 0,
  fontSize: '85%',
  backgroundColor: '#e9dede',
  borderRadius: '3px',
  fontFamily: "'Courier New', monospace",
  color: '#333'
}))
export const RowContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center'
}))
export const ColumnContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  flexDirection: 'column'
}))

export const InformationParagraph = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '28px',
  fontFamily: 'Roboto',
  width: 'fit-content',
  color: theme.palette.mode === 'light' ? '#837d7d' : '#6f7587'
}))