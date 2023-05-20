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
  action: "FETCH_QDN_RESOURCE",
  name: "QortalDemo",
  service: "THUMBNAIL",
  identifier: "qortal_avatar", // Optional. If omitted, the default resource is returned, or you can alternatively use the keyword "default"
  encoding: "base64", // Optional. If omitted, data is returned in raw form
  rebuild: false
});
`.trim();

const codeBlockResponse = `
// base64 encoding returns a base64
AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAA1HbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpd...
`.trim();
const codeBlock2 = `
// In this example I'm requesting a json that was saved to QDN (this is just an example- this exact resource doesn't exist)
const response =  await qortalRequest({
  action: 'FETCH_QDN_RESOURCE',
  name: 'Q-Blog',
  service: 'BLOG_POST',
  identifier: 'q-blog-tester-2-blog-post-test-HDUgPk'
})
`.trim();

const codeBlockResponse2 = `
// If the encoding param is omitted the raw data is return. In this case a json.
{
  "title": "test zip",
  "createdAt": 1683806014297,
  "postContent": [
      {
          "type": "file",
          "version": 1,
          "content": {
              "name": "Q-Blog",
              "identifier": "qfile_qblog_X5uIea",
              "service": "FILE",
              "title": "tester2's file zip",
              "mimeType": "application/zip"
          },
          "id": "SkMHKY"
      }
  ],
  "layouts": {
      "rows": [
          {
              "ids": [
                  "SkMHKY"
              ],
              "id": "UHZmoI",
              "type": "file"
          }
      ]
  },
  "layoutGeneralSettings": {
      "padding": 5,
      "blogPostType": "minimal"
  }
}
`.trim();

const codeBlock3 = `
const response =  await qortalRequest({
  action: "FETCH_QDN_RESOURCE",
  name: "QortalDemo",
  service: "WEBSITE",
  identifier: "default", // Optional. If omitted, the default resource is returned, or you can alternatively request that using the keyword "default", as shown here
  filepath: "index.html", // Required only for resources containing more than one file
  rebuild: false
});
`.trim();

export const FETCH_QDN_RESOURCE: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Arbitrary/get">
                <Code>{"/arbitrary/{service}/{name}/{identifier}"}</Code>
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock2} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse2}
                language="javascript"
              />
            </Grid>
          </Grid>
          <SubTitle>Fetch file from multi file QDN resource</SubTitle>
          Data is returned in the base64 format
          <DisplayCode codeBlock={codeBlock3} language="javascript" />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
