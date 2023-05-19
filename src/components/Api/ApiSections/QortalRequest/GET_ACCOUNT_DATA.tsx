import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  InformationParagraph,
  ParagraphContainer,
  SectionContainer
} from "../Common/Common-styles";
import { Grid } from "@mui/material";

import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { InformationSection } from "../Common/InformationSection";
import { LinkApi } from "../Common/LinkApi";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "GET_ACCOUNT_DATA",
  address: "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2"
});
`.trim();

const codeBlockResponse = `
{
  "address": "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2",
  "reference": "4uEPpCYsk2rCUsxksP72PeRtHaR5vQg9kWy6mLU377a7H4RJtCRFVCT6anPdfdXRs3p7f8KYo8LtZLmntQ7eNoks",
  "publicKey": "APLQ85zRbgRdrLTU7GgeTt35kvVhxmSjoCB4wX99HjYd",
  "defaultGroupId": 205,
  "flags": 0,
  "level": 0,
  "blocksMinted": 0,
  "blocksMintedAdjustment": 0,
  "blocksMintedPenalty": 0
}
`.trim();

export const GET_ACCOUNT_DATA: FC<SectionProps> = ({
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
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{" "}
              <LinkApi url="api-documentation/#/Addresses/getAccountInfo">
                <Code>/addresses/QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2</Code>
              </LinkApi>
            </InformationParagraph>
          </InformationSection>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock1} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse}
                language="javascript"
              />
            </Grid>
          </Grid>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
