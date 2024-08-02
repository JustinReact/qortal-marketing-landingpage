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
export const HowItWorks: FC<SectionProps> = ({
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
            The way the extension communicates with the webapp is very similar to how q-apps communicate with the UI.
          </SectionParagraph>
          <SectionParagraph>
            The extension injects a script into the webapp. This script acts as a middleman between the extension and the webapp- relaying information from the webapp to the extension and vice-versa.
          </SectionParagraph>
          <SectionParagraph>
            The injected script contains an event listener called 'qortalExtensionRequests'. We dispatch events to this listener from the webapp with specific paramaters in order to request certain information/actions from the extension. Once everything is completed, the listener in the script then dispatches an event to the webapp ( we can call this the response). The response event is called 'qortalExtensionResponses'.
          </SectionParagraph>
          <SectionParagraph>
            webapp request {"=>"} script listens to request and communicates with the extension {"=>"} script then sends a response to the webapp
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
