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
<img src="qortal://THUMBNAIL/QortalDemo/qortal_avatar" />
`.trim()

const codeBlock2 = `
<img src="qortal://WEBSITE/AlphaX/assets/img/logo.png" />
`.trim()

export const LinkingToImages: FC<SectionProps> = ({
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
            The same applies for images, such as displaying an avatar:
          </SectionParagraph>
          <DisplayCode codeBlock={codeBlock1} language="html" />

          <SectionParagraph>
            ...or even an image from an entirely different website:
          </SectionParagraph>

          <DisplayCode codeBlock={codeBlock2} language="html" />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
