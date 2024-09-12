import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  InformationParagraph,
  ParagraphContainer,
  SectionContainer,
  SubTitle
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { Grid } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
import { LinkApi } from "../Common/LinkApi";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "GET_AT_DATA",
  atAddress: "ASRUsCjk6fa5bujv3oWYmWaVqNtvxydpPH"
});
`.trim();

const codeBlockResponse = `
// Returns a blob containing the AT data segment
`.trim();

export const GET_AT_DATA: FC<SectionProps> = ({
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
          <SubTitle>Fetch data segment associated with AT address</SubTitle>
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{" "}
              <LinkApi url="api-documentation/#/Automated%20Transactions/getDataByAddress">
                <Code>{`/at/{atAddress}/data`}</Code>
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
