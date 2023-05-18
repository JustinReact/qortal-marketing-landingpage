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
{
  "type": "ARBITRARY",
  "timestamp": 1684337616751,
  "reference": "4j2iPN5Xwgocs8Z32JB4UB63G87qS43kPyEwFmQMLvWBXtrSQwAfyx8S9CqQvbregnstXFKqXpkPT2dNdAscriT4",
  "fee": "0.00100000",
  "signature": "5Y6Jdyvo8n6JB44qC8i57x2gA3VXd7aah42GvnzkXL459vCWrRE5gae5TWbGqJxmKnk4p5ESHESv2FJfyB8bdzs9",
  "txGroupId": 0,
  "approvalStatus": "NOT_REQUIRED",
  "creatorAddress": "QMjCNsctvWLoDdPSRpHn6TF2j96iDr9YWm",
  "version": 5,
  "senderPublicKey": "Bjo1iUHJXbCb4LKabmE6KWNL5jSgCK36ypasoDgJG53U",
  "service": 777,
  "nonce": 0,
  "size": 496,
  "name": "Demo",
  "identifier": "myapp-image1234",
  "method": "PUT",
  "secret": "GELP1wMCyMAcwLWTvsAjsFoiR63BcAF7wmrhd1NVhjL",
  "compression": "ZIP",
  "data": "ArzaQASrXM74SDhWp6JhhmUBsocWRoVajZFtYECnAEEy",
  "dataType": "DATA_HASH",
  "metadataHash": "DU1sYzPcRnvAUL6VzerhAmDQUyrn4UceAvV4K6WtZxBi",
  "payments": []
}
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
[
  {
    "type": "ARBITRARY",
    "timestamp": 1684337616751,
    "reference": "4j2iPN5Xwgocs8Z32JB4UB63G87qS43kPyEwFmQMLvWBXtrSQwAfyx8S9CqQvbregnstXFKqXpkPT2dNdAscriT4",
    "fee": "0.00100000",
    "signature": "5Y6Jdyvo8n6JB44qC8i57x2gA3VXd7aah42GvnzkXL459vCWrRE5gae5TWbGqJxmKnk4p5ESHESv2FJfyB8bdzs9",
    "txGroupId": 0,
    "approvalStatus": "NOT_REQUIRED",
    "creatorAddress": "QMjCNsctvWLoDdPSRpHn6TF2j96iDr9YWm",
    "version": 5,
    "senderPublicKey": "Bjo1iUHJXbCb4LKabmE6KWNL5jSgCK36ypasoDgJG53U",
    "service": 777,
    "nonce": 0,
    "size": 496,
    "name": "Demo",
    "identifier": "myapp-image1",
    "method": "PUT",
    "secret": "GELP1wMCyMAcwLWTvsAjsFoiR63BcAF7wmrhd1NVhjL",
    "compression": "ZIP",
    "data": "ArzaQASrXM74SDhWp6JhhmUBsocWRoVajZFtYECnAEEy",
    "dataType": "DATA_HASH",
    "metadataHash": "DU1sYzPcRnvAUL6VzerhAmDQUyrn4UceAvV4K6WtZxBi",
    "payments": []
  },
  {
    "type": "ARBITRARY",
    "timestamp": 1684337616751,
    "reference": "4j2iPN5Xwgocs8Z32JB4UB63G87qS43kPyEwFmQMLvWBXtrSQwAfyx8S9CqQvbregnstXFKqXpkPT2dNdAscriT4",
    "fee": "0.00100000",
    "signature": "5Y6Jdyvo8n6JB44qC8i57x2gA3VXd7aah42GvnzkXL459vCWrRE5gae5TWbGqJxmKnk4p5ESHESv2FJfyB8bdzs9",
    "txGroupId": 0,
    "approvalStatus": "NOT_REQUIRED",
    "creatorAddress": "QMjCNsctvWLoDdPSRpHn6TF2j96iDr9YWm",
    "version": 5,
    "senderPublicKey": "Bjo1iUHJXbCb4LKabmE6KWNL5jSgCK36ypasoDgJG53U",
    "service": 777,
    "nonce": 0,
    "size": 496,
    "name": "Demo",
    "identifier": "myapp-image2",
    "method": "PUT",
    "secret": "GELP1wMCyMAcwLWTvsAjsFoiR63BcAF7wmrhd1NVhjL",
    "compression": "ZIP",
    "data": "ArzaQASrXM74SDhWp6JhhmUBsocWRoVajZFtYECnAEEy",
    "dataType": "DATA_HASH",
    "metadataHash": "DU1sYzPcRnvAUL6VzerhAmDQUyrn4UceAvV4K6WtZxBi",
    "payments": []
  }
]
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
