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
let url = await qortalRequest({
  action: "GET_QDN_RESOURCE_URL",
  service: "THUMBNAIL",
  name: "QortalDemo",
  identifier: "qortal_avatar"
  // path: "filename.jpg" // optional - not needed if resource contains only one file
});
Get URL to load a QDN website
Note: this returns a "Resource does not exist" error if a non-existent resource is requested.

let url = await qortalRequest({
  action: "GET_QDN_RESOURCE_URL",
  service: "WEBSITE",
  name: "QortalDemo",
});
Get URL to load a specific file from a QDN website
Note: this returns a "Resource does not exist" error if a non-existent resource is requested.

let url = await qortalRequest({
  action: "GET_QDN_RESOURCE_URL",
  service: "WEBSITE",
  name: "AlphaX",
  path: "/assets/img/logo.png"
});
`.trim();

const codeBlockResponse = `
'/arbitrary/BLOG_POST/Q-Blog/q-blog-qblog-post-Publishing-Blog-s-SncAO3'
`.trim();

export const GET_QDN_RESOURCE_URL: FC<SectionProps> = ({
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
              Get URL to load a QDN resource. Note: this returns a "Resource
              does not exist" error if a non-existent resource is requested.
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
