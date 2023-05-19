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
const response =  await qortalRequest({
  action: "SEARCH_QDN_RESOURCES",
  service: "THUMBNAIL",
  query: "search query goes here", // Optional - searches both "identifier" and "name" fields
  identifier: "search query goes here", // Optional - searches only the "identifier" field
  name: "search query goes here", // Optional - searches only the "name" field
  prefix: false, // Optional - if true, only the beginning of fields are matched in all of the above filters
  exactMatchNames: true, // Optional - if true, partial name matches are excluded
  default: false, // Optional - if true, only resources without identifiers are returned
  includeStatus: false, // Optional - will take time to respond, so only request if necessary
  includeMetadata: false, // Optional - will take time to respond, so only request if necessary
  nameListFilter: "QApp1234Subscriptions", // Optional - will only return results if they are from a name included in supplied list
  followedOnly: false, // Optional - include followed names only
  excludeBlocked: false, // Optional - exclude blocked content
  limit: 100,
  offset: 0,
  reverse: true
});
`.trim();

const codeBlockResponse = `
[
  // with includemetadata:true
  {
    "name": "Q-Blog",
    "service": "BLOG_POST",
    "identifier": "q-blog-qblog-post-Publishing-Blog-s-SncAO3",
    "metadata": {
      "title": "Publishing Blog Posts",
      "description": "Learn how to publish blog posts. There are two types of editors. Find out which one is for you!",
      "tags": [
        "v1.0x0",
        "t, v"
      ],
      "mimeType": "text/vnd.graphviz"
    },
    "size": 928,
    "created": 1682190828187,
    "updated": 1682200172086
  },
  // without includemetadata
  {
    "name": "Q-Blog",
    "service": "BLOG_POST",
    "identifier": "q-blog-qblog-post-Publishing-Blog-s-SncAO3",
    "size": 928,
    "created": 1682190828187,
    "updated": 1682200172086
  },
]
`.trim();

export const SEARCH_QDN_RESOURCES: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Arbitrary/getResources">
                <Code>/arbitrary/resources/search?</Code>
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
