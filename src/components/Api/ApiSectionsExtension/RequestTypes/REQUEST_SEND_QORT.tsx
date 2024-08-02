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
      type: 'REQUEST_SEND_QORT',
      requestId: Math.random().toString(36).substring(2, 15), // Generate a unique ID for the request
      timeout: 300000,
      payload: {
        description: "Send Qort to participate in the game", // thing string will appear in the extension popup
        amount: 50, // in QORT
        address: "QWxEcmZxnM8yb1p92C1YKKRsp8svSVbABs", // the Qortal address of the receiver ( the person receiving the QORT )
      }
     }
  })
);
`.trim();

const codeBlockResponse1 = `
{
  res: {
    amount: '50.00000000'
    approvalStatus: 'NOT_REQUIRED'
    creatorAddress: 'QMjCNsctvWLoDdPSRpHn6TF2j96iDr9YWm'
    fee: '0.00100000'
    recipient: 'Qi3x7zVhN17mcYm9JTrEYaFihmETSZTzPD'
    reference: '26xJXTxcdXhFUYFkyZ7qKkj94RtaLBevcyQgCwK3W5xt7JkGPrCbvNgdC46CmJA65cjTCXMykwiyYJfVsPdsU1fS'
    senderPublicKey: 'Bjo1iUHJXbCb4LKabmE6KWNL5jSgCK36ypasoDgJG53U'
    signature: '4j2iPN5Xwgocs8Z32JB4UB63G87qS43kPyEwFmQMLvWBXtrSQwAfyx8S9CqQvbregnstXFKqXpkPT2dNdAscriT4'
    timestamp: 1684321310522
    txGroupId: 0
    type: 'PAYMENT'
  }
  validApi: "https://api.qortal.org" // the node that was used to send the QORT
}
`.trim();
const codeBlockResponse2 = `
// If payment was not successfully sent
{
  res: false
  validApi: "https://api.qortal.org" // the node that was used to send the QORT
}
`.trim();
const codeBlockResponse3 = `
// error
{
  error: "error message"
}
`.trim();

export const REQUEST_SEND_QORT: FC<SectionProps> = ({
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
