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
document.dispatchEvent(
  new CustomEvent("qortalExtensionRequests", {
    detail: { 
      type: 'REQUEST_CONNECTION',
      requestId: Math.random().toString(36).substring(2, 15), // Generate a unique ID for the request
      timeout: 30000
     }
  })
);
`.trim();
export const SendingARequest: FC<SectionProps> = ({
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
          The first step is to send a request to the extension, such as 'REQUEST_CONNECTION'.
          </SectionParagraph>
          <SectionParagraph>
          Context: The 'REQUEST_CONNECTION' request asks the user visiting the web app for permission to use the extension with the web app. For example, if the web app wants to get the user's Qortal address, it won't be able to do so until the user accepts the 'REQUEST_CONNECTION' request. This is the initial request that web apps should make, as it establishes the necessary connection. Without this connection, the web app won't be able to make other requests, such as those for payments or other actions.
          </SectionParagraph>
        <SectionParagraph>
            Let's look at the following code
          </SectionParagraph>
          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <SectionParagraph>
          The type parameter specifies which action you want from the extension. In this case 'REQUEST_CONNECTION'. In the section 'TYPES' we explain all the types and their request/response.
          </SectionParagraph>
          <SectionParagraph>
          The second thing to note is the 'requestId' param. You give this param a unique id so that the extension can send a response back with that same Id. This allows your application to know which response corresponds with which request.
          </SectionParagraph>
          <SectionParagraph>
          The third param is timeout. In milliseconds, this value tells the extension how long the user has to perform an action. In this example, the user will have 30000 milliseconds or 30 seconds to accept/decline the connection request.
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
