import React, { useState } from 'react'

import copy from 'copy-to-clipboard'
import { ColumnContainer, RowContainer } from './common-styles'
import InfoIcon from '@mui/icons-material/Info'

export const InformationSection = ({ children }: any) => {
  return (
    <RowContainer>
      <InfoIcon />
      <ColumnContainer>{children}</ColumnContainer>
    </RowContainer>
  )
}
