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
  action: "LIST_QDN_RESOURCES",
  service: "THUMBNAIL",
  name: "QortalDemo", // Optional (exact match)
  identifier: "qortal_avatar", // Optional (exact match)
  default: true, // Optional
  includeStatus: false, // Optional - will take time to respond, so only request if necessary
  includeMetadata: false, // Optional - will take time to respond, so only request if necessary
  followedOnly: false, // Optional - include followed names only
  excludeBlocked: false, // Optional - exclude blocked content
  limit: 100,
  offset: 0,
  reverse: true
});
`.trim()

const codeBlockResponse = `
[
  // without metadata
  {
    "name": "crowetic",
    "service": "FILE",
    "identifier": "qfile_qblog_E1V14x",
    "size": 2949936
  },
  // with metadata (includeMetadata: true)
  {
    "name": "crowetic",
    "service": "FILE",
    "identifier": "qfile_qblog_uPsr9L",
    "metadata": {
      "title": "Qortal-The-Future-Wallpaper",
      "description": "This is mostly a test of Q-Blog published image in file format on website links",
      "tags": [
        "Image testing"
      ],
      "category": "QORTAL",
      "categoryName": "Qortal",
      "mimeType": "image/png"
    },
    "size": 2108432
  },
]
`.trim()

export const LIST_QDN_RESOURCES: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Arbitrary/getResources">
                <Code>/arbitrary/resources?</Code>
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
