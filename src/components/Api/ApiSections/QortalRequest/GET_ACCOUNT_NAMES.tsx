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
  action: "GET_ACCOUNT_NAMES",
  address: "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2",
  limit: 20,
  offset: 0,
  reverse: true
});
`.trim();

const codeBlockResponse = `
[
  {
    "name": "QortalDemo",
    "owner": "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2"
  }
]
`.trim();

export const GET_ACCOUNT_NAMES: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Names/getNamesByAddress">
                <Code>/names/address/QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2</Code>
              </LinkApi>
            </InformationParagraph>
          </InformationSection>

          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse}
            language="javascript"
          />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
