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
  action: "SEARCH_CHAT_MESSAGES",
  before: 999999999999999,
  after: 0,
  txGroupId: 0, // Optional (must specify either txGroupId or two involving addresses)
  // involving: ["QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2", "QSefrppsDCsZebcwrqiM1gNbWq7YMDXtG2"], // Optional (must specify either txGroupId or two involving addresses)
  // reference: "reference", // Optional
  // chatReference: "chatreference", // Optional
  // hasChatReference: true, // Optional
  encoding: "BASE64", // Optional (defaults to BASE58 if omitted)
  limit: 20,
  offset: 0,
  reverse: true
});
`.trim();

const codeBlockResponse = `
[
  {
    "timestamp": 1684326780846,
    "txGroupId": 0,
    "reference": "BRr2qZEts2QjoGh9fWGNSnKJiCr92vXDBw9aPYYKNDFq4iSxtFpBnh7giJK5jiP5YGNQTbySu3kSnHGZbHf6HL9",
    "senderPublicKey": "HpFimVDQeSb3yCaibrpLLfm8k5j3RsQ9K8VqT2YUiUAb",
    "sender": "QfMPvGEBJMhhNSfhNqRy6qRYvybdnQAiuJ",
    "senderName": "Stonecrow",
    "encoding": "BASE64",
    "data": "eyJtZXNzYWdlVGV4dCI6eyJ0eXBlIjoiZG9jIiwiY29udGVudCI6W3sidHlwZSI6InBhcmFncmFwaCIsImNvbnRlbnQiOlt7InR5cGUiOiJ0ZXh0IiwidGV4dCI6Imdvb2RuaWdodCBDYXQuwqAgQmFjayBpbiB5dXIgYm94IG5vdy4gVGhhdCBuYXN0eSB0cmVlIHdvbnQgYm90aGVyIHlvdSBubyBtb3JlLiJ9XX1dfSwiaW1hZ2VzIjpbIiJdLCJyZXBsaWVkVG8iOiIiLCJ2ZXJzaW9uIjozfQ==",
    "isText": true,
    "isEncrypted": false,
    "signature": "4ja9XuNReuhn1Gh7uPvZXxZZnFVxXejvRFphQUZNC2FRqWn3Jv9T8oXnU6dxoGTSeYhiW8GUzkqmHZFaFLFibFWd"
  },
  {
    "timestamp": 1684326755079,
    "txGroupId": 0,
    "reference": "5o8YcSvPEY2yV6o8DxQcQgK9tAdHjncT4K6n1oXeJo51yUEXxQ9doMrFRnaVEb3QHZmAtvcWDkd1fojqcuNWbDcP",
    "senderPublicKey": "AKLvYPJLqJTVovRThNu33vfhWTPFPZH5DpjguiNAacvG",
    "sender": "QfKKzGktu6FzNGWrzxcmVJZ3SJV53PMtTw",
    "senderName": "Dreaming_Loudly",
    "encoding": "BASE64",
    "data": "eyJtZXNzYWdlVGV4dCI6eyJ0eXBlIjoiZG9jIiwiY29udGVudCI6W3sidHlwZSI6InBhcmFncmFwaCIsImNvbnRlbnQiOlt7InR5cGUiOiJ0ZXh0IiwidGV4dCI6Ikh1cnJ5IHVwIC0gSSdtIGdldHRpbmcgY29sZCBseWluZyBoZXJlIC3CoPCfmJsifV19XX0sImltYWdlcyI6WyIiXSwicmVwbGllZFRvIjoiNDRTODhIZ0hqcUJ1RnF5WkNyaDMxUGdkWUZhWEpaVzFTWlZlempEVVprdHg3WWZ1Q0RvWXZOOWRzWVNvUVM4cTlWRE43eFpMeGNHSzV3RUoxNndLdTJSbyIsInZlcnNpb24iOjN9",
    "isText": true,
    "isEncrypted": false,
    "signature": "3qFMqF2P1Xy6bAEHmcqKbxMu4zRyVfbGf87mBrBNAcyw9hYpAa3A1dYzMjbBdWMQQNBBugzQHpsy246CrnoYRuoc"
  },
  ...
]
`.trim();

export const SEARCH_CHAT_MESSAGES: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Chat/searchChat">
                <Code>/chat/messages?</Code>
              </LinkApi>
            </InformationParagraph>

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
