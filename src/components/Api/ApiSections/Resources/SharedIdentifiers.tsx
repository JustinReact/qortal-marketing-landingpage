import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import {
  Code,
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from '../Common/common-styles'
interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}
export const SharedIdentifiers: FC<SectionProps> = ({
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
          <SectionParagraph>
            Since an identifier can be used by multiple names, this can be used
            to the advantage of Q-App developers as it allows for data to be
            stored in a deterministic location.
          </SectionParagraph>
          <SectionParagraph>
            An example of this is the user's avatar. This will always be
            published with service <Code>THUMBNAIL</Code> and identifier
            <Code>qortal_avatar</Code>, along with the user's name. So, an app
            can display the avatar of a user just by specifying their name when
            requesting the data. The same applies when publishing data.
          </SectionParagraph>
        </ParagraphContainer>
        <ParagraphContainer>helol</ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
