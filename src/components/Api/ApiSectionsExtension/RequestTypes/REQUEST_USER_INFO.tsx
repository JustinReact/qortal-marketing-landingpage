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
{
  "name": "myname", // this may not exist
  "address": "QWxEcmZxnM8yb1p92C1YKKRsp8svSVbABs",
  "reference": "3XzEqsFwP1JmaqXwQJr7fcakX21kVXruKzotBt3K3hpJAHxYMQ4HXFfYJdvejY1v6CRKP4w7PG8rfbiyFMroybTM",
  "publicKey": "482YWxWXpfP2egNibGspRpV7eBPWRx4zbrGhkvDZgGpa",
  "defaultGroupId": 369,
  "flags": 0,
  "level": 0,
  "blocksMinted": 6,
  "blocksMintedAdjustment": 0,
  "blocksMintedPenalty": 0
}
`.trim();
const codeBlockResponse2 = `
// for new accounts that have never made a transaction
{
  "name": "",
  "address": "Qe3eHrAMSZ2BWtqGTNDPMZooNPLacUAF6J"
}
`.trim();


const codeBlockResponse3 = `
// error
{
  error: "error message"
}
`.trim();

export const REQUEST_USER_INFO: FC<SectionProps> = ({
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
          Use this request to retrieve information on the Qortal account. In order to be able to use this request the user must have: 1. Accepted connection 2. Has Authenticated
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
