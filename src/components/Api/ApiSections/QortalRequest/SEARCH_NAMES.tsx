import React, { FC, useEffect } from "react";
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
import { Box, Button, Grid, Typography } from "@mui/material";

import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import InfoIcon from "@mui/icons-material/Info";
import { InformationSection } from "../Common/InformationSection";
import { LinkApi } from "../Common/LinkApi";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "SEARCH_NAMES",
  query: "search query goes here",
  prefix: false, // Optional - if true, only the beginning of the name is matched
  limit: 100,
  offset: 0,
  reverse: false
})
`.trim();

const codeBlockResponse = `
[
  {
    "name": "... Playing Qortal ...",
    "reducedName": "... p1aying q0rta1 ...",
    "owner": "QNwKEgYaJzF7MTZzFMJUnQgkemiac18bf6",
    "data": "The most interactive game in the World!",
    "registered": 1644330871648,
    "isForSale": false
  },
  {
    "name": "10Qortal",
    "reducedName": "10q0rta1",
    "owner": "QhLt2v3TDJrBPCa64ogUna785T6sRm5dxJ",
    "data": "Registered Name on the Qortal Chain",
    "registered": 1644995489154,
    "isForSale": false
  },
]
`.trim();

export const SEARCH_NAMES: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Names/searchNames">
                <Code>/names/search?query=qortal&limit=20</Code>
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
