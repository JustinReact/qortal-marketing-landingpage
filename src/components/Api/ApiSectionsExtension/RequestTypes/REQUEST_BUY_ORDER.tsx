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
      type: 'REQUEST_BUY_ORDER',
      requestId: Math.random().toString(36).substring(2, 15), // Generate a unique ID for the request
      timeout: 60000,
      payload: {
        qortalAtAddress: "AMQXmk217gonJzLia5KCPWQdVNfwWke8to"
      }
     }
  })
);
`.trim();

const codeBlockResponse1 = `
{ 
  atAddress: "AMQXmk217gonJzLia5KCPWQdVNfwWke8to", 
  chatSignature: "3FJXWUvFrhuQ8C28v956BR8iANcZgwAofL7qCHud7Ba64NyCRUmpD5eYECo8NHgj1FkyaMqqCtnnLsydgJgXFVqB", 
  node: "https://api.qortal.org", 
  qortAddress: "Qe3eHrAMSZ2BWtqGTNDPMZooNPLacUAF6J" // the extension user's address
}
`.trim();

const codeBlockResponse2 = `
// if the Qortal account is new and does not have its publicKey on the blockchain yet.
{ 
  atAddress: "AMQXmk217gonJzLia5KCPWQdVNfwWke8to", 
  encryptedMessageToBase58: "base58string", // encrypted message that was sent in base58
  node: "https://api.qortal.org", 
  qortAddress: "Qe3eHrAMSZ2BWtqGTNDPMZooNPLacUAF6J", 
  chatSignature: "3FJXWUvFrhuQ8C28v956BR8iANcZgwAofL7qCHud7Ba64NyCRUmpD5eYECo8NHgj1FkyaMqqCtnnLsydgJgXFVqB", 
  senderPublicKey: "482YWxWXpfP2egNibGspRpV7eBPWRx4zbrGhkvDZgGpa", 
  sender: "Qe3eHrAMSZ2BWtqGTNDPMZooNPLacUAF6J", 
  reference: chatreference  // chat reference
}
`.trim();
const codeBlockResponse3 = `
// error
{ 
  error: "User has declined" 
}
`.trim();

export const REQUEST_BUY_ORDER: FC<SectionProps> = ({
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
            Use this request to request a payment in QORT.
          </SubTitle>
          <InformationSection>
            <InformationParagraph>
              This action requires user approval
            </InformationParagraph>
          </InformationSection>
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
                codeBlock={codeBlockResponse2}
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
