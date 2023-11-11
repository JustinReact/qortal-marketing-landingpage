import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  InformationParagraph,
  ParagraphContainer,
  SectionContainer
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { Grid, Box, Typography } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const friendsList = await qortalRequest({
  action: "GET_FRIENDS_LIST"
});
`.trim();

const codeBlockResponse = `[
  "Phil",
  "Qortal Seth",
  "Justin"
]`.trim();

export const GET_FRIENDS_LIST: FC<SectionProps> = ({
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
              This action requires user approval
            </InformationParagraph>
            <InformationParagraph>
              Gets a user's friends list in an array of strings. Returns an
              error "Error in retrieving friends list" if it is not successful.
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
