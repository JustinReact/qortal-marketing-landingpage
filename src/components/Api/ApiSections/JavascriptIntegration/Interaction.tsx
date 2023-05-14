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
async function getNameInfo(name) {
  const response = await fetch("/names/" + name);
  const nameData = await response.json();
  console.log("nameData: " + JSON.stringify(nameData));
}
const name = await getNameInfo("QortalDemo");
`.trim()

const codeBlock2 = `
const name = await qortalRequest({
  action: "GET_NAME_DATA",
  name: "QortalDemo"
});
`.trim()

const codeBlock3 = `
{
  "name": "QortalDemo",
  "reducedName": "q0rta1dem0",
  "owner": "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2",
  "data": "Registered Name on the Qortal Chain",
  "registered": 1628962032704,
  "isForSale": false
}
`.trim()

export const Interaction: FC<SectionProps> = ({
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
        <ParagraphContainer>
          <SubTitle>Direct API calls</SubTitle>
          <SectionParagraph>
            The standard{' '}
            <a href="https://api.qortal.org/api-documentation/" target="_blank">
              Qortal Core API
            </a>{' '}
            is available to websites and apps, and can be called directly using
            a standard AJAX request, such as:
          </SectionParagraph>

          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse codeBlock={codeBlock3} language="javascript" />
          <SectionParagraph>
            However, this only works for read-only data, such as looking up
            transactions, names, balances, etc. Also, since the address of the
            logged in account can't be retrieved from the core, apps can't show
            personalized data with this approach.
          </SectionParagraph>
        </ParagraphContainer>
        <ParagraphContainer>
          <SubTitle>Via qortalRequest()</SubTitle>
          <SectionParagraph></SectionParagraph>

          <DisplayCode codeBlock={codeBlock2} language="javascript" />
          <DisplayCodeResponse codeBlock={codeBlock3} language="javascript" />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
