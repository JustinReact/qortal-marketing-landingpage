import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import {
  Code,
  ColumnContainer,
  InformationParagraph,
  ParagraphContainer,
  RowContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from '../Common/common-styles'
import { DisplayCode } from '../Common/DisplayCode'
import { DisplayCodeResponse } from '../Common/DisplayCodeResponse'
import InfoIcon from '@mui/icons-material/Info'
import { Box, Typography } from '@mui/material'
import { InformationSection } from '../Common/InformationSection'
import { LinkApi } from '../Common/LinkApi'
interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "FETCH_BLOCK",
  signature: "875yGFUy1zHV2hmxNWzrhtn9S1zkeD7SQppwdXFysvTXrankCHCz4iyAUgCBM3GjvibbnyRQpriuy1cyu953U1u5uQdzuH3QjQivi9UVwz86z1Akn17MGd5Z5STjpDT7248K6vzMamuqDei57Znonr8GGgn8yyyABn35CbZUCeAuXju"
});
`.trim()
const codeBlock2 = `
const response = await qortalRequest({
  action: "FETCH_BLOCK",
  height: "1139850"
});
`.trim()

const codeBlock3 = `
const response = await qortalRequest({
  action: "FETCH_BLOCK_RANGE",
  height: "1139800",
  count: 20,
  reverse: false
});
`.trim()

const codeBlockResponse = `
{
  "signature": "MPBrvZ8xt28tz2L6jdLnudJrudGoy22BBmkmfu5r7wU4QH3hbVBnxL7fzavR8YHx4SD8bdzgJJaHHeHgDL4D5UwTdhobAoxbFmyHLirnG1G6hgDmZDhKzmyEWCdoNGyn4bsLyKZJ4axo3yRHt7ZTUNLqq7hMc5rwTqYJX3FgyXncN3P",
  "version": 4,
  "reference": "875yGFUy1zHV2hmxNWzrhtn9S1zkeD7SQppwdXFysvTXrankCHCz4iyAUgCBM3GjvibbnyRQpriuy1cyu953U1u5uQdzuH3QjQivi9UVwz86z1Akn17MGd5Z5STjpDT7248K6vzMamuqDei57Znonr8GGgn8yyyABn35CbZUCeAuXju",
  "transactionCount": 0,
  "totalFees": "0.00003520",
  "transactionsSignature": "5yCkerB1Ed57vBPyWWH8ZR6Hv5LGC8zqBLPiLHKeQE1gNfc4yByQvSAHQKJZiqShWfpFEf9VmvmAwVsaFZrCqUe9",
  "height": 1139852,
  "timestamp": 1674130634871,
  "minterPublicKey": "6g5K1X4bZFWn1S3buye6qFMGTyZug4G96Gif4DZ2E7jV",
  "minterSignature": "4yyX2xrSQdzvZAFbvK8okwT2DDJMiTSin3wGio3858v1FXhXDT9qKC1RQfCrDNzgWA9L1gSQ8ypMZJ5y4MMMxe14",
  "atCount": 180,
  "atFees": "0.00003520",
  "encodedOnlineAccounts": "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",
  "onlineAccountsCount": 4707,
  "minterAddress": "QVLSru2TzBrgAmqJMzTwsBxwm98ABfGsdj"
}
`.trim()
const codeBlockResponse2 = `
// same response as 'Fetch block by signature'
`.trim()

const codeBlockResponse3 = `
[
  // an array of objects such as the response of 'Fetch block by signature'
]
`.trim()

export const FETCH_BLOCK: FC<SectionProps> = ({
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
            width: '100%'
          }}
        >
          <SubTitle>Fetch block by signature</SubTitle>
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{' '}
              <LinkApi url="api-documentation/#/Blocks/getChild">
                <Code>{'/blocks/child/{signature}'}</Code>
              </LinkApi>
            </InformationParagraph>
          </InformationSection>
          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse}
            language="javascript"
          />
          <SubTitle>Fetch block by height</SubTitle>
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{' '}
              <LinkApi url="api-documentation/#/Blocks/getByHeight">
                <Code>{'/blocks/byheight/{height}'}</Code>
              </LinkApi>
            </InformationParagraph>
          </InformationSection>
          <DisplayCode codeBlock={codeBlock2} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse2}
            language="javascript"
          />

          <SubTitle>Fetch a range of blocks</SubTitle>
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{' '}
              <LinkApi url="api-documentation/#/Blocks/getBlockRange">
                <Code>{'/blocks/range/{height}'}</Code>
              </LinkApi>
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
  )
}
