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
await qortalRequest({
  action: "VOTE_ON_POLL",
  pollName: "A test poll 3",
  optionIndex: 1,
});
`.trim();

const codeBlockResponse = `
{
  "type": "VOTE_ON_POLL",
  "timestamp": 1697286687406,
  "reference": "3jU9WpEPAvu9iL3cMfVd2AUmn9AijJRzkGCxVtXfpuUFZubM8AFDcbk5XA9m5AhPfsbMDFkSDzPJnkjeLA5GA59E",
  "fee": "0.01000000",
  "signature": "3QJ1EUvX3rskVNaP3RWvJwb9DsGgHPvneWqBWS62PCcuCj5N4Ei9Tr4nFj4nQeMqMU2qNkVD3Sb59e7iUWkawH3s",
  "txGroupId": 0,
  "approvalStatus": "NOT_REQUIRED",
  "creatorAddress": "Qhxphh7g5iNtxAyLLpPMZzp4X85yf2tVam",
  "voterPublicKey": "C5spuNU1BAHZDEkxF3wnrAPRDuNrVceaDJ6tDKitenko",
  "pollName": "A test poll 3",
  "optionIndex": 1
}
`.trim();

export const VOTE_ON_POLL: FC<SectionProps> = ({
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
            Vote on a previously created poll. If the poll name doesn't exist,
            it will throw an error.
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
