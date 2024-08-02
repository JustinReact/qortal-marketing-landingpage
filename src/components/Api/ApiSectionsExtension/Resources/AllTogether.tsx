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
export function sendRequestToExtension(
  requestType: string,
  payload?: any,
  timeout: number = 20000
): Promise<any> {
  return new Promise((resolve, reject) => {
    const requestId = Math.random().toString(36).substring(2, 15); // Generate a unique ID for the request
    const detail = {
      type: requestType,
      payload,
      requestId,
      timeout: timeout / 1000,
    };

    // Store the timeout ID so it can be cleared later
    const timeoutId = setTimeout(() => {
      document.removeEventListener("qortalExtensionResponses", handleResponse);
      reject(new Error("Request timed out"));
    }, timeout); // Adjust timeout as necessary

    function handleResponse(event: any) {
      const { requestId: responseId, data } = event.detail;
      if (requestId === responseId) {
        // Match the response with the request
        document.removeEventListener(
          "qortalExtensionResponses",
          handleResponse
        );
        clearTimeout(timeoutId); // Clear the timeout upon successful response
        resolve(data);
      }
    }

    document.addEventListener("qortalExtensionResponses", handleResponse);
    document.dispatchEvent(
      new CustomEvent("qortalExtensionRequests", { detail })
    );
  });
}


async function requestConnection() {
  try {
    const response = await sendRequestToExtension("REQUEST_CONNECTION");
    return response;
  } catch (error) {
    console.error("Error requesting user info:", error);
  }
}

const connectUser = async () => {
  try {
    const response = await requestConnection();
    if (response === true) {
     setIsExtensionConnected(true)
    } else {
      setIsExtensionConnected(false)
    }
    return;
  } catch (error) {
    console.error(error);
  }
};

useEffect(()=> {
  connectUser()
}, [])
`.trim();


export const AllTogether: FC<SectionProps> = ({
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
            Let's create a piece of React code that shows how we can create one async function called "sendRequestToExtension" that we can use for all our extension requests.
          </SectionParagraph>
          <SectionParagraph>
            This function takes three paramaters. The first one is the requestType, so for example 'REQUEST_CONNECTION'. The payload param is an optional parameter. Some extension requests need additional information to complete the request. You would put that data here. Lastly, the last parameter is a timeout. This is to put a limit on the time that the user has to respond to the request.
          </SectionParagraph>
          <SectionParagraph>
            Going back to the React side of things. In the useEffect we call the connectUser function which calls the reusable "sendRequestToExtension". If the user accepts the connection, the "sendRequestToExtension" will return true and if declined then false. If the timeout is executed then it will throw an error.
          </SectionParagraph>
          <DisplayCode codeBlock={codeBlock1} language="javascript" />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
