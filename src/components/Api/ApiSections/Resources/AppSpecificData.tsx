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
export const AppSpecificData: FC<SectionProps> = ({
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
            Some apps may want to make all QDN data for a particular service
            available. However, others may prefer to only deal with data that
            has been published by their app (if a specific format/schema is
            being used for instance).
          </SectionParagraph>
          <SectionParagraph>
            Identifiers can be used to allow app developers to locate data that
            has been published by their app. The recommended approach for this
            is to use the app name as a prefix on all identifiers when
            publishing data.
          </SectionParagraph>
          <SectionParagraph>
            For instance, an app called <Code>MyApp</Code> could allow users to
            publish JSON data. The app could choose to prefix all identifiers
            with the string <Code>myapp_</Code>, and then use a random string
            for each published resource (resulting in identifiers such as{" "}
            <Code>myapp_qR5ndZ8v</Code>). Then, to locate data that has
            potentially been published by users of MyApp, it can later search
            the QDN database for items with <Code>"service": "JSON"</Code> and{" "}
            <Code>"identifier": "myapp_"</Code>. The SEARCH_QDN_RESOURCES action
            has a <Code>prefix</Code> option in order to match identifiers
            beginning with the supplied string.
          </SectionParagraph>
          <SectionParagraph>
            Note that QDN is a permissionless system, and therefore it's not
            possible to verify that a resource was actually published by the
            app. It is recommended that apps validate the contents of the
            resource to ensure it is formatted correctly, instead of making
            assumptions.
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
