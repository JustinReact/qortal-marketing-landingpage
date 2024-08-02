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
      type: 'REQUEST_OAUTH',
      requestId: Math.random().toString(36).substring(2, 15), // Generate a unique ID for the request
      timeout: 300000,
      payload: {
        nodeBaseUrl: https://api.qortal.org, // recommended that use use the same nodeBaseUrl that you used to send the encrypted chat message
        senderAddress: "QWxEcmZxnM8yb1p92C1YKKRsp8svSVbABs", // your webapp's Qortal Address that you sent the chat message from
        senderPublicKey: "482YWxWXpfP2egNibGspRpV7eBPWRx4zbrGhkvDZgGpa", // your webapp's Qortal publicKey that you sent the chat message from
        timestamp: 1722590547725, // the timestamp in milliseconds of when your app sent the chat message
      }
     }
  })
);
`.trim();

const codeBlockResponse1 = `
78248 // or whatever you encrypted in the chat message
`.trim();

const codeBlockResponse3 = `
// error
{
  error: "error message"
}
`.trim();

export const REQUEST_OAUTH: FC<SectionProps> = ({
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
            Use this request to confirm that the authenticated user is the owner
            of the Qortal account. From your webapp's server you should send a private chat message to the user's Qortal address. This request will send back the message's content that you sent to the Qortal address. Only the rightful owner of the Qortal account will be able to decrypt the chat message.
          </SubTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock1} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse1}
                language="javascript"
              />
              <DisplayCodeResponse
                codeBlock={codeBlockResponse3}
                language="javascript"
              />
            </Grid>
          </Grid>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
