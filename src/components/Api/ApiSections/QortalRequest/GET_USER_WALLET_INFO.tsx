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
const response = await qortalRequestWithTimeout({
  action: "GET_USER_WALLET_INFO",
  coin: "BTC"
}, 15000);
`.trim();

const codeBlockResponse = `
[
  {
      "address": "1KyDZurCr2S15N2j1s4pUeH8fAQVT7VfdB",
      "path": [
          0,
          0
      ],
      "value": 0,
      "pathAsString": "M/0/0",
      "transactionCount": 0
  },
  {
      "address": "1DYn4oyypvyFCFL7Y5oDoAfmem88SucxEJ",
      "path": [
          0,
          1
      ],
      "value": 0,
      "pathAsString": "M/0/1",
      "transactionCount": 0
  },
  // Additional addresses omitted for brevity
]
`.trim();

export const GET_USER_WALLET_INFO: FC<SectionProps> = ({
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
            The GET_USER_WALLET_INFO endpoint retrieves detailed information for
            each address associated with a user's Hierarchical Deterministic
            (HD) BIP32 wallet. It provides a structured overview of wallet
            addresses, allowing users to manage and organize their
            cryptocurrency transactions efficiently.
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
