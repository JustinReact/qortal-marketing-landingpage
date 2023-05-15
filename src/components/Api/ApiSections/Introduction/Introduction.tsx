import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import { Box, Typography } from '@mui/material'
import {
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from '../Common/common-styles'
interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}
export const Introduction: FC<SectionProps> = ({
  title,
  setSelectedSection,
  id
}) => {
  return (
    <SectionWrapper
      title={title}
      setSelectedSection={setSelectedSection}
      id={id}
    >
      <SectionContainer>
        <ParagraphContainer>sup</ParagraphContainer>
        <ParagraphContainer
          sx={{
            flexBasis: '50%'
          }}
        >
          hello
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
