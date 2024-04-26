import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  InformationParagraph,
  ParagraphContainer,
  SectionContainer,
  SubTitle
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { Grid } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
import { LinkApi } from "../Common/LinkApi";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "GET_CROSSCHAIN_SERVER_INFO",
  coin: "BTC"
});
`.trim();

const codeBlockResponse = `
{
  "servers": [
    {
      "averageResponseTime": 0,
      "hostName": "electrum.qortal.link",
      "port": 54002,
      "connectionType": "SSL",
      "isCurrent": false
    },
    {
      "averageResponseTime": 0,
      "hostName": "dogecoin.stackwallet.com",
      "port": 50022,
      "connectionType": "SSL",
      "isCurrent": false
    },
    ...
  ],
  "remainingServers": [
    {
      "averageResponseTime": 0,
      "hostName": "electrum.qortal.link",
      "port": 54002,
      "connectionType": "SSL",
      "isCurrent": false
    },
    {
      "averageResponseTime": 0,
      "hostName": "dogecoin.stackwallet.com",
      "port": 50022,
      "connectionType": "SSL",
      "isCurrent": false
    },
    ...
  ],
  "uselessServers": []
}
`.trim();

export const GET_CROSSCHAIN_SERVER_INFO: FC<SectionProps> = ({
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
          <SubTitle>Returns current foreign coin server configuration</SubTitle>
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{" "}
              <LinkApi url="api-documentation/#/Cross-Chain%20(Bitcoin)/getServerConfiguration">
                <Code>{`/crosschain/{coin}/serverinfos`}</Code>
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
