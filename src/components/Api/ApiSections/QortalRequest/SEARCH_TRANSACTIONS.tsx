import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  InformationParagraph,
  ParagraphContainer,
  SectionContainer
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
const response = await qortalRequest({
  action: "SEARCH_TRANSACTIONS",
  // startBlock: 1139000,
  // blockLimit: 1000,
  txGroupId: 0,
  txType: [
      "PAYMENT",
      "REWARD_SHARE"
  ],
  confirmationStatus: "CONFIRMED",
  limit: 10,
  offset: 0,
  reverse: false
});
`.trim();

const codeBlockResponse = `
[
  
  {
    "type": "PAYMENT",
    "timestamp": 1593450783307,
    "reference": "TvFaY9C3CPuNwNeE2HthKCbu3BtRhqSNaQ2UuuaobphfErasiVAnKcU8aFyeRiTi8B3rgiNVZMzWWWh48y155Gk",
    "fee": "0.00100000",
    "signature": "5kMSsag5nj4YqNrz7kQ3inQ1xjoC6vc2Z8Trhiz2Yi8okShATP43qRkMaFhDUAXpSKDQd8xEXuWvMzXER4BQLFRx",
    "txGroupId": 0,
    "blockHeight": 14,
    "approvalStatus": "NOT_REQUIRED",
    "creatorAddress": "QfmM8dgfikTB2FYVuJ9owzQXVm8wP7T4QT",
    "senderPublicKey": "7YfqZ1xWFnDWTThUG1uRYK3CX1vb4mNCH8gvqtH2VCeg",
    "recipient": "QRFHr4jnVgvAsPTubeSrh8bPy1yzwzYaWD",
    "amount": "0.01000000"
  },
  {
    "type": "PAYMENT",
    "timestamp": 1593453009886,
    "reference": "4FF6ADq3hqsw2HpbhSdr56LvyZj9yfQLVSztKxaEGc8DvMZWZD5c5B3nR7jzC9MzzsNeqMdauV6q7ZnKm6DUqBMm",
    "fee": "0.00100000",
    "signature": "5kioTqM1C4gyRnBLEPx76V67bHGuW7t4YEZRZwg3HnKkpHvF2h4vx9uUwRNiJR1NPAEp5GWMDKsAsi7GP9LbozNM",
    "txGroupId": 0,
    "blockHeight": 50,
    "approvalStatus": "NOT_REQUIRED",
    "creatorAddress": "Qi3N6fNRrs15EHmkxYyWHyh4z3Dp2rVU2i",
    "senderPublicKey": "HmViWJ2SMRVTYNuMvNYFBX7DitXcEB2gBZasAN3uheJL",
    "recipient": "QPFM4xX2826MuBEhMtdReW1QR3vRYrQff3",
    "amount": "1.00000000"
  },
  ...
]
`.trim();

export const SEARCH_TRANSACTIONS: FC<SectionProps> = ({
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
              <LinkApi url="api-documentation/#/Transactions/searchTransactions_1">
                <Code>/transactions/search?</Code>
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
