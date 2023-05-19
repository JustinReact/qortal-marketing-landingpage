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
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "GET_LIST_ITEMS",
  list_name: "blockedNames"
});
`.trim();

const codeBlockResponse = `
[ 'Q-Blog', 'Q-Mail']
`.trim();

const codeBlock2 = `
const response = await qortalRequest({
  action: "ADD_LIST_ITEMS",
  list_name: "blockedNames",
  items: ["QortalDemo"]
});

// the list will become [ 'Q-Blog', 'Q-Mail', 'QortalDemo]
`.trim();

const codeBlockResponse2 = `
true
`.trim();
const codeBlock3 = `
const response = await await qortalRequest({
  action: "DELETE_LIST_ITEM",
  list_name: "blockedNames",
  item: "Q-MAIL"
});
// the list will become [ 'Q-Blog', 'QortalDemo]
`.trim();

const codeBlockResponse3 = `
true
`.trim();

export const LISTS: FC<SectionProps> = ({ title, setSelectedSection, id }) => {
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
          <SubTitle>GET_LIST_ITEMS</SubTitle>
          <InformationSection>
            <InformationParagraph>
              This action requires user approval
            </InformationParagraph>
          </InformationSection>
          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse}
            language="javascript"
          />
          <SubTitle>ADD_LIST_ITEMS</SubTitle>
          <InformationSection>
            <InformationParagraph>
              This action requires user approval
            </InformationParagraph>
          </InformationSection>
          <DisplayCode codeBlock={codeBlock2} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse2}
            language="javascript"
          />
          <SubTitle>DELETE_LIST_ITEM</SubTitle>
          <InformationSection>
            <InformationParagraph>
              This action requires user approval
            </InformationParagraph>
          </InformationSection>
          <DisplayCode codeBlock={codeBlock3} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse3}
            language="javascript"
          />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
