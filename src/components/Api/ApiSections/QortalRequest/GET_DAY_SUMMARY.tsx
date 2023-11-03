import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import { ParagraphContainer, SectionContainer } from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { Grid } from "@mui/material";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const summary = await qortalRequest({
  action: "GET_DAY_SUMMARY"
});
`.trim();

const codeBlockResponse = `
{
  "blockCount": 1195,
  "assetsIssued": 0,
  "namesRegistered": 7,
  "transactionCountByType": {
      "PAYMENT": 31,
      "REGISTER_NAME": 7,
      "SELL_NAME": 7,
      "CANCEL_SELL_NAME": 1,
      "ARBITRARY": 94,
      "TRANSFER_ASSET": 1677,
      "DEPLOY_AT": 43,
      "MESSAGE": 61,
      "AT": 54,
      "GROUP_INVITE": 2,
      "JOIN_GROUP": 3,
      "REWARD_SHARE": 60
  },
  "totalTransactionCount": 2040
}
`.trim();

export const GET_DAY_SUMMARY: FC<SectionProps> = ({
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
