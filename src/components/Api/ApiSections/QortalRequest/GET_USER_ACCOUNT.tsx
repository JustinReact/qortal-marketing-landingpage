import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import {
  Code,
  ParagraphContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from '../Common/common-styles'
import { DisplayCode } from '../Common/DisplayCode'
import { DisplayCodeResponse } from '../Common/DisplayCodeResponse'

interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}

const codeBlock1 = `
const account = await qortalRequest({
  action: "GET_USER_ACCOUNT"
});
`.trim()

const codeBlockResponse = `
{
  "address": "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2",
  "reference": "4uEPpCYsk2rCUsxksP72PeRtHaR5vQg9kWy6mLU377a7H4RJtCRFVCT6anPdfdXRs3p7f8KYo8LtZLmntQ7eNoks",
  "publicKey": "APLQ85zRbgRdrLTU7GgeTt35kvVhxmSjoCB4wX99HjYd",
  "defaultGroupId": 205,
  "flags": 0,
  "level": 0,
  "blocksMinted": 0,
  "blocksMintedAdjustment": 0,
  "blocksMintedPenalty": 0
}
`.trim()

export const GET_USER_ACCOUNT: FC<SectionProps> = ({
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
