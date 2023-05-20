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
import { Grid } from "@mui/material";

import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { InformationSection } from "../Common/InformationSection";
import { LinkApi } from "../Common/LinkApi";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response =  await qortalRequest({
  action: "GET_QDN_RESOURCE_METADATA",
  name: "Q-Blog",
  service: "BLOG_POST",
  identifier: "q-blog-qblog-post-Publishing-Blog-s-SncAO3" // Optional
});
`.trim();

const codeBlockResponse = `
{
  "title": "Publishing Blog Posts",
  "description": "Learn how to publish blog posts. There are two types of editors. Find out which one is for you!",
  "tags": [
    "v1.0x0",
    "t, v"
  ],
  "files": [
    "qortal-1682200171884"
  ],
  "mimeType": "text/vnd.graphviz"
}
`.trim();

export const GET_QDN_RESOURCE_METADATA: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Arbitrary/getMetadata">
                <Code>
                  {"/arbitrary/metadata/{service}/{name}/{identifier}"}
                </Code>
              </LinkApi>
            </InformationParagraph>
            <InformationParagraph>
              If the resource doesn't have metedata, a 404 will be returned
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
