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
import { LinkApi } from "../Common/LinkApi";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "GET_BALANCE",
  address: "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2"
});
`.trim();

const codeBlockResponse = `
7.11
`.trim();

export const GET_BALANCE: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Addresses/getBalance">
                <Code>{`/addresses/balance/{name}`}</Code>
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
