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
  action: "PUBLISH_QDN_RESOURCE",
  name: "Demo", // Publisher must own the registered name - use GET_ACCOUNT_NAMES for a list
  service: "IMAGE",
  identifier: "myapp-image1234" // Optional
  data64: "base64_encoded_data", // base64 string. Remove this param if you are putting in a file. see next param.
  file: "file_object", // File Object. Remove this param if you are putting in a base64 strinng.
  // filename: "image.jpg", // Optional - to help apps determine the file's type
  // title: "Title", // Optional
  // description: "Description", // Optional
  // category: "TECHNOLOGY", // Optional
  // tag1: "any", // Optional
  // tag2: "strings", // Optional
  // tag3: "can", // Optional
  // tag4: "go", // Optional
  // tag5: "here", // Optional
  // encrypt: true, // Optional - to be used with a private service
  // recipientPublicKey: "publickeygoeshere" // Only required if encrypt is set to true
});
`.trim()

const codeBlockResponse = `
true
`.trim()

const codeBlock2 = `

const resourceArray = [
  {
    name: "Demo", 
    service: "IMAGE",
    identifier: "myapp-image1" 
    file: "file_object",
    filename: "image1.png"
  },
  {
    name: "Demo", 
    service: "IMAGE",
    identifier: "myapp-image2" 
    file: "file_object",
    filename: "image2.png"
  }
]
const response = await qortalRequest({
  action: 'PUBLISH_MULTIPLE_QDN_RESOURCES',
  resources: resourceArray
})
`.trim()

const codeBlockResponse2 = `
[true, true]
`.trim()

export const PUBLISH_QDN_RESOURCE: FC<SectionProps> = ({
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
              This action requires user approval
            </InformationParagraph>
            <InformationParagraph>
              Note: this publishes a single, base64-encoded file. Multi-file
              resource publishing (such as a WEBSITE or GIF_REPOSITORY) is not
              yet supported via a Q-App. It will be added in a future update.
            </InformationParagraph>
          </InformationSection>
          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse}
            language="javascript"
          />
          <SubTitle>PUBLISH_MULTIPLE_QDN_RESOURCES</SubTitle>
          <DisplayCode codeBlock={codeBlock2} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse2}
            language="javascript"
          />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
