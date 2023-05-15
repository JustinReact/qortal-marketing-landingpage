import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import {
  Code,
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from '../Common/common-styles'
import { DisplayCode } from '../Common/DisplayCode'

interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}

const codeBlock1 = `
<a href="qortal://{service}/{name}/{identifier}/{path}">link text</a>
`.trim()

const codeBlock2 = `
<a href="qortal://WEBSITE/QortalDemo">link text</a>
`.trim()

const codeBlock3 = `
<a href="qortal://WEBSITE/QortalDemo/minting-leveling/index.html">link text</a>
`.trim()
const codeBlock4 = `
<a href="qortal://THUMBNAIL/QortalDemo/qortal_avatar">avatar</a>
`.trim()
const codeBlock5 = `
<a href="qortal://WEBSITE/QortalDemo/default">link to root of website</a>
`.trim()
const codeBlock6 = `
<a href="qortal://WEBSITE/QortalDemo/default/minting-leveling/index.html">link to subpage of website</a>
`.trim()

export const LinkingToResources: FC<SectionProps> = ({
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
          <SectionParagraph>
            The <Code>qortal://</Code> protocol can be used to access QDN data
            from within Qortal websites and apps. The basic format is as
            follows:
          </SectionParagraph>
          <DisplayCode codeBlock={codeBlock1} language="html" />

          <SectionParagraph>
            However, the system will support the omission of the identifier
            and/or path components to allow for simpler URL formats.
          </SectionParagraph>
          <SectionParagraph>
            A simple link to another website can be achieved with this HTML
            code:
          </SectionParagraph>

          <DisplayCode codeBlock={codeBlock2} language="html" />
          <SectionParagraph>
            To link to a specific page of another website:
          </SectionParagraph>

          <DisplayCode codeBlock={codeBlock3} language="html" />
          <SectionParagraph>
            To link to a standalone resource, such as an avatar
          </SectionParagraph>

          <DisplayCode codeBlock={codeBlock4} language="html" />
          <SectionParagraph>
            For cases where you would prefer to explicitly include an identifier
            (to remove ambiguity) you can use the keyword default to access a
            resource that doesn't have an identifier. For instance:
          </SectionParagraph>

          <DisplayCode codeBlock={codeBlock5} language="html" />
          <DisplayCode codeBlock={codeBlock6} language="html" />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
