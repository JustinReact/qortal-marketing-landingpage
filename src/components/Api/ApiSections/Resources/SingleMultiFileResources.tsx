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
export const SingleMultiFileResources: FC<SectionProps> = ({
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
            Some resources, such as those published with the <Code>IMAGE</Code>{' '}
            or <Code>JSON</Code>
            service, consist of a single file or piece of data (the image or the
            JSON string). This is the most common type of QDN resource,
            especially in the context of Q-Apps. These can be published by
            supplying a base64-encoded string containing the data.
          </SectionParagraph>
          <SectionParagraph>
            Other resources, such as those published with the{' '}
            <Code>WEBSITE</Code>, <Code>APP</Code>, or{' '}
            <Code>GIF_REPOSITORY</Code> service, can contain multiple files and
            directories. Publishing these kinds of files is not yet available
            for Q-Apps, however it is possible to retrieve multi-file resources
            that are already published. When retrieving this data (via
            FETCH_QDN_RESOURCE), a <Code>filepath</Code> must be included to
            indicate the file that you would like to retrieve. There is no need
            to specify a filepath for single file resources, as these will
            automatically return the contents of the single file.
          </SectionParagraph>
        </ParagraphContainer>
        <ParagraphContainer>
          <SectionParagraph>hello</SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
