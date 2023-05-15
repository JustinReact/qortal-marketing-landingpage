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
const response = await qortalRequest({
  action: "GET_NAME_DATA",
  name: "QortalDemo"
});
`.trim()

const codeBlockResponse = `
{
  "name": "QortalDemo",
  "reducedName": "q0rta1dem0",
  "owner": "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2",
  "data": "Registered Name on the Qortal Chain",
  "registered": 1628962032704,
  "isForSale": false
}
`.trim()

export const GET_NAME_DATA: FC<SectionProps> = ({
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
              Equivalent to:{' '}
              <LinkApi url="api-documentation/#/Names/getName">
                <Code>/names/QortalDemo</Code>
              </LinkApi>
            </InformationParagraph>
          </InformationSection>

          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse}
            language="javascript"
          />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
