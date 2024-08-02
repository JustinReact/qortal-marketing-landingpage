import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  InformationParagraph,
  ParagraphContainer,
  SectionContainer,
  SubTitle
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { Grid } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
document.dispatchEvent(
  new CustomEvent("qortalExtensionRequests", {
    detail: { 
      type: 'REQUEST_USER_INFO',
      requestId: Math.random().toString(36).substring(2, 15), // Generate a unique ID for the request
      timeout: 15000
     }
  })
);
`.trim();

const codeBlockResponse1 = `
const handleMessage = async (event: any) => {
    if (event.data.type === "LOGOUT") {
      // reset states
      setUserInfo(null);
      localStorage.setItem("token", "");
    } else if(event.data.type === "RESPONSE_FOR_TRADES"){

      const response = event.data.payload
      const tradeHasBeenExecuted = response.callResponse // will be true if the node has successfully sent a trade request
      const atAddressOfTrade = response.extra.atAddress
      const message = response.extra.message
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [userInfo?.address]);
`.trim();


export const AdditionalListeners: FC<SectionProps> = ({
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
            width: "100%"
          }}
        >
           <SubTitle>
          These are message events sent by the extension. The type 'LOGOUT' will be received when the user clicks the logout icon in the extension. This allows you to know when the user in no longer authenticated. In the React example, the userInfo state and token are cleared.
          The type 'RESPONSE_FOR_TRADES' will return trade statuses that were requested. 
        </SubTitle>
        <ParagraphContainer>
          <DisplayCodeResponse
                codeBlock={codeBlockResponse1}
                language="javascript"
              />
        
          </ParagraphContainer>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
