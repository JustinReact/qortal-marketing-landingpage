import React, { FC, useEffect } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from "../Common/Common-styles";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}
export const Routing: FC<SectionProps> = ({
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
            If a non-existent <Code>filepath</Code> is accessed, the default
            behaviour of QDN is to return a{" "}
            <Code>404: File not found error</Code>. This includes anything
            published using the <Code>WEBSITE service</Code>.
          </SectionParagraph>
          <SectionParagraph>
            However, routing is handled differently for anything published using
            the <Code>APP</Code> service.
          </SectionParagraph>
          <SectionParagraph>
            For apps, QDN automatically sends all unhandled requests to the
            index file (generally index.html). This allows the app to use custom
            routing, as it is able to listen on any path. If a file exists at a
            path, the file itself will be served, and so the request won't be
            sent to the index file.
          </SectionParagraph>
          <SectionParagraph>
            It's recommended that all apps return a 404 page if a request isn't
            able to be routed.
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
