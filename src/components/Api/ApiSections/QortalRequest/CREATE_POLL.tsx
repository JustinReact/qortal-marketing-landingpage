import { FC, useEffect } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  ColumnContainer,
  InformationParagraph,
  ParagraphContainer,
  RowContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import InfoIcon from "@mui/icons-material/Info";
import { Grid, Box, Typography } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
await qortalRequest({
  action: "CREATE_POLL",
  pollName: "A test poll 3",
  pollDescription: "Test description",
  pollOptions: ['option1, option2, option3'],
  pollOwnerAddress: 'QbpZL12Lh7K2y6xPZure4pix5jH6ViVrF2'
});
`.trim();

const codeBlockResponse = `
{
  "type": "CREATE_POLL",
  "timestamp": 1697285826221,
  "reference": "3Svgda6JMSoKW8xQreHRWwXfzWUqCG7NXae5bJDcezbGgK2km8VVbRGZXdEA3Q6LSDvG6hfk1xjXBawpBgxSAa2B",
  "fee": "0.01000000",
  "signature": "3jU9WpEPAvu9iL3cMfVd2AUmn9AijJRzkGCxVtXfpuUFZubM8AFDcbk5XA9m5AhPfsbMDFkSDzPJnkjeLA5GA59E",
  "txGroupId": 0,
  "approvalStatus": "NOT_REQUIRED",
  "creatorAddress": "Qhxphh7g5iNtxAyLLpPMZzp4X85yf2tVam",
  "owner": "QbpZL12Lh7K2y6xPZure4pix5jH6ViVrF2",
  "pollName": "A test poll 3",
  "description": "test description",
  "pollOptions": [
      {
          "optionName": "option1"
      },
      {
          "optionName": "option2"
      },
      {
          "optionName": "option3"
      }
  ]
}
`.trim();

export const CREATE_POLL: FC<SectionProps> = ({
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
            Create a poll inside your Q-App. To get results of this poll, you
            would subsequently make a fetch call to{" "}
            <Code>{"/polls​/votes​/${pollName}"}</Code> to get the voting
            results. The poll name must be unique or else it will throw an
            error.
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
