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
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
await qortalRequest({
  action: "DEPLOY_AT",
  creationBytes: "19bxFY2S32GVMj2CVdaBs6ekrUQxY2iDVbcTLA6sgHVeBMh8GXZmC9KVPcrid6qhJyPjdfDRh7jz4w2DGhJiHp6EdTJm5MVir9RU2avabWtFXdJbYiLVfr7VQybBtH2JDATESpeL5RAPTzCoesVCoQASVxAYhHL6J8tJoN6ZKugaQpMHccd45bbriMGzYZACu4pQGKfRGpbDXKVUzFjTLZjkbBfv13TjDgTEfUVD2JQ5dCgivb6Padq2oz9KB25kr9kEMXwtQUFLNmwRQHXebHiLFA4GAUDH8qpHTakhZhvBVqBrkyJvRaCpXkE2F6FfJaiYbSVty25QQGqQmrzMTmbYJjSRbrbEnUHmZJNdhgPybmrkN7iKPGj9gy7i5fTgu9t9bbumC3GZK3cNXJfZ885m4cNH4azCRHmQruyDcr5tXp1wnJcwPtkfn87HdgWee2ftLm8hrmrg27eUQgFjNgJr7TEuBmDmPxQCDZkLftnqdymNk6GgNJ5TXgH2tdSmpF5AEh5jRnV63M7tMMo9ezTuEhtachimUrJg5FpF6Q1BJm6Ytd24Hti8G6LCyXMvDvnWxzrgZXRHQVwaeAcpggxPQL4fx4FihwpRkRXmKV1dfjXkpEMB6vJEV9F73ThBwsD61d4N8GAJ7ubNU6BkEzkrqEedU2EDRVccJVaWN64hXmfDN9ygHSpk7TxhsvLrqAhW5H5nZDAcb25yiZowGhWewv8fy1mCtuhWBfzCPiNLSEakudrC2Z53ZZfGcsH4dih2REk6icdmKG5tAXa4tvqxkzdmSxGmqBTpJNqRdCCEYvAUKs6BsXWYSLzEr9wZ7UKSBG61jFm2ZzDYCqb6EZUWDRzL8nWBirGxGAgJ7jvTWUQtc4Q62sa8MEDQAnJLdcCzivwMnZ5udr5BPmRuhBNUbMDNBCC7CwmBpDLzMEWsa4junPfZXr8h9Y5wXyx9wZjwqq3DYNwYV8bgRTnRmxNuuhoWZiL9SxccUwvnTTD9VXPGKdPoWMZ7EWNv3LSrfxRrwoCLRvjtCEonjYN4hosvn61iR2QXdWajg3r5hH79S5M6GohpdKGKvbsttKjewkkdKVok4m8cn7JYx4F4vbS31zVXQ5VQA4m6R54qEUqEgSZM9i6BfckCLPx2ZznXoJ7UcErocUNZFfpfAqECcExRPnu1fqNd9GfGSQGBpvP6VVoowKSc1bVnJxTJfULwNJFa986Skm3B25rEMX2TAVgPFcJMzPLwctzTfMbYhc6nttPWrBZFSrqHcFyUaPPLK4aKkq6oPa1PA4Cgb4L9sQjksXB3tqnTFGa9ZsQE79QQHQrDVurRFh3fyMfvkAXyVycW1W4QBE6R4h7PvaNbDRXUQtQ8pcHRdY1BSUAXQp1u3XkNES7BmqjNxgDTcBMfUv3",
  name: "Test AT",
  description: "QORT/LTC cross-chain trade",
  type: "ACCT",
  tags: "Test ACCT QORT LTC",
  amount: 100000000, // 1 QORT
  assetId: 0,
  fee: 20000 // 0.0002 QORT
});
`.trim();

const codeBlockResponse = `
{
  "type": "DEPLOY_AT",
  "timestamp": 1696526612286,
  "reference": "61w5axRcoyUX9dEjQVotiNkrxuLSotHV8iwrfsF5BimLB9vBHuyZMoC59WY2nbcjUPHVw4QFcpEcQcSwxr5tXVXs",
  "fee": "0.01000000",
  "signature": "4R8MQAA1cqwYfDRC4KUV7nQYpooFHtM71XLFUxC9uX6Ni59CnswivvsqYVXJkzs3qY9QhHS5F4nEbX3tbXmgUjGE",
  "txGroupId": 0,
  "approvalStatus": "NOT_REQUIRED",
  "creatorAddress": "QWfYVQfuz2rVskYkpkVvLxL3kUPmBgKhHV",
  "name": "q-fund crowdfund",
  "description": "qortal-devfund-q-fund-campaign",
  "aTType": "crowdfund",
  "tags": "q-fund",
  "creationBytes": "1Pub6o13xyqfCZj8BMzmXsREVJR6h4xxpS2VPV1R2QwjP78r2ozxsNuvb28GWrT8FoTTQMGnVP7pNii6auUqYr2uunWfcxwhERbDgFdsJqtrJMpQNGB9GerAXYyiFiij35cP6eHw7BmALb3viT6VzqaXX9YB25iztekV5cTreJg7o2hRpFc9Rv8Z9dFXcD1Mm4WCaMaknUgchDi7qDnHA7JX8bn9EFD4WMG5nZHMsrmeqBHirURXr2dMxFprTBo187zztn9bFAmGdDBxgKg2qkPo7ZX3QFNEsUXeynXM7SJzHzdKaECxbefkPfA1nGENnM1Mto6rjWCX4KZk6QtrUtYBLGHo5XWkXGm9VJmywUbRdJviNbAN23VLBq2Q7AFAeGCkFSTYvomqjNUDUDNRjDH",
  "amount": "0.20000000",
  "assetId": 0,
  "aTAddress": "AJQRHEdunFaZpufYfCmqjKBoWYnU6j6jfa",
  "creatorPublicKey": "8i9bPX8Mf8wJRKf4GiSAqWzCBsCNkCtWPJ9hxuHMgGRo",
  "blocksToGoal": 37435,
  "goalValue": 25000,
  "userAddress": "QWfYVQfuz2rVskYkpkVvLxL3kUPmBgKhHV"
}
`.trim();

export const DEPLOY_AT: FC<SectionProps> = ({
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
          <SubTitle>
            DEPLOY_AT allows a user to create an AT (Automated Transaction) on
            the Qortal network. This AT can be used to create a crowdfund that
            pays out after certain funds are accumulated for example.
          </SubTitle>
          <InformationSection>
            <InformationParagraph>
              *Note: This action is for advanced users only. Please check
              Discord for more information on Deploying ATs. This action
              requires user approval.
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
