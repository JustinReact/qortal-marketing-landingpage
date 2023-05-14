import { styled } from '@mui/system'
import { Box, Button, Grid, Typography } from '@mui/material'

export const DrawerLinkParent = styled(Box)(({ theme }) => {
  console.log({ theme })
  return {
    width: '100%'
  }
})
