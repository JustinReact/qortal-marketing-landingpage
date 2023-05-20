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
  action: "LIST_GROUPS",
  limit: 100,
  offset: 0,
  reverse: true
});
`.trim();

const codeBlockResponse = `
[
  {
    "groupId": 150,
    "owner": "QRt11DVBnLaSDxr2KHvx92LdPrjhbhJtkj",
    "groupName": "animation station",
    "description": "freedom cartoons... made here",
    "created": 1638219000069,
    "isOpen": false,
    "approvalThreshold": "ONE",
    "minimumBlockDelay": 5,
    "maximumBlockDelay": 60,
    "memberCount": 1
  },
  {
    "groupId": 121,
    "owner": "QLkRktaMTcYMKNMTxvLdh9rgsWbhVth2A1",
    "groupName": "anime",
    "description": "talk about it, watch it, whatever you like, this group is about anime",
    "created": 1624914222641,
    "isOpen": true,
    "approvalThreshold": "ONE",
    "minimumBlockDelay": 5,
    "maximumBlockDelay": 1440,
    "memberCount": 7
  },
  ...
]
`.trim();

export const LIST_GROUPS: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Groups/getAllGroups">
                <Code>/groups?</Code>
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
