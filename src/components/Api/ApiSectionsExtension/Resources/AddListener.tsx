import React, { FC, useEffect } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
function handleResponse(event: any) {
  const { requestId: responseId, data } = event.detail;
  if (requestId === responseId) {
    // do what you need to do. Maybe tell the user that they are now connected
  }
}

document.addEventListener("qortalExtensionResponses", handleResponse);
`.trim();


export const AddListener: FC<SectionProps> = ({
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
            So far we discussed how to send a request to the extension. Now we will focus on how to capture the response from your webapp that the extension will send.
          </SectionParagraph>
          <SectionParagraph>
           Let's look at this piece of code.
          </SectionParagraph>
          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <SectionParagraph>
            The extension sends an event called 'qortalExtensionResponses' so we setup an event listener. One of the fields returned is requestId which is the same requestId that the webapp sent as part of the request. The other field is data which will contain data concerning the request. In the case of 'REQUEST_CONNECTION' the data field will return true if the user accepted and false if the user declined.
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
