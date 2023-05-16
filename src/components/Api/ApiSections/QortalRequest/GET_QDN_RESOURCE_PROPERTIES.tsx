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
const response =  await qortalRequest({
  action: "GET_QDN_RESOURCE_PROPERTIES",
  name: "QortalDemo",
  service: "THUMBNAIL",
  identifier: "qortal_avatar" // Optional
});
`.trim()

const codeBlockResponse = `
{
  "filename": "qortal-1684173273893",
  "mimeType": "video/mp4",
  "size": 23766987
}
`.trim()

export const GET_QDN_RESOURCE_PROPERTIES: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Arbitrary/getResourceProperties">
                <Code>
                  {
                    '/arbitrary/resource/properties/{service}/{name}/{identifier}'
                  }
                </Code>
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
