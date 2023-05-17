import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import {
  Code,
  ColumnContainer,
  InformationParagraph,
  ParagraphContainer,
  RowContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from '../Common/common-styles'
import { Box, Button, Grid, Typography } from '@mui/material'

import { DisplayCode } from '../Common/DisplayCode'
import { DisplayCodeResponse } from '../Common/DisplayCodeResponse'
import InfoIcon from '@mui/icons-material/Info'
import { InformationSection } from '../Common/InformationSection'
import { LinkApi } from '../Common/LinkApi'

interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}

const codeBlock1 = `
const handleLinkProgrammatically = async () => {
  await qortalRequest({
      action: "LINK_TO_QDN_RESOURCE",
      service: "WEBSITE",
      name: "QortalDemo",
  });
}

const handleLinkProgrammaticallyWithPath = async () => {
  await qortalRequest({
    action: "LINK_TO_QDN_RESOURCE",
    service: "WEBSITE",
    name: "QortalDemo",
    path: "/minting-leveling/index.html"
  });
}

handleLinkProgramatically()
handleLinkProgrammaticallyWithPath()
`.trim()

export const LINK_TO_QDN_RESOURCE: FC<SectionProps> = ({
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
        <ParagraphContainer
          sx={{
            width: '100%'
          }}
        >
          <InformationSection>
            <InformationParagraph>
              Note: an alternate method is to include{' '}
              <Code>
                {'<a href="qortal://WEBSITE/QortalDemo">link text</a>'}
              </Code>{' '}
              within your HTML code.
            </InformationParagraph>
          </InformationSection>

          <DisplayCode codeBlock={codeBlock1} language="javascript" />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
