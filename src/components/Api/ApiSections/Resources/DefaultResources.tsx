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
export const DefaultResources: FC<SectionProps> = ({
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
            A "default" resource refers to one without an identifier. For
            example, when a website is published via the UI, it will use the
            user's name and the service <Code>WEBSITE</Code>. These do not have
            an identifier, and are therefore the "default" website for this
            name. When requesting or publishing data without an identifier, apps
            can either omit the <Code>identifier</Code> key entirely, or include{' '}
            <Code>"identifier": "default"</Code> to indicate that the
            resource(s) being queried or published do not have an identifier.
          </SectionParagraph>
        </ParagraphContainer>
        <ParagraphContainer>helol</ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
