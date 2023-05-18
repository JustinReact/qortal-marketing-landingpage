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
import { Box, Button, Grid, Typography } from '@mui/material'

import { DisplayCode } from '../Common/DisplayCode'
import { DisplayCodeResponse } from '../Common/DisplayCodeResponse'
import InfoIcon from '@mui/icons-material/Info'
import { InformationSection } from '../Common/InformationSection'
import { LinkApi } from '../Common/LinkApi'

interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "GET_PRICE",
  blockchain: "LITECOIN",
  // maxtrades: 10,
  inverse: true //Display price in terms of foreign currency per unit QORT
});
`.trim()

const codeBlockResponse = `
303366
`.trim()

export const GET_PRICE: FC<SectionProps> = ({
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
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{' '}
              <LinkApi url="api-documentation/#/Cross-Chain/getTradePriceEstimate">
                <Code>{`/crosschain/price/{blockchain}`}</Code>
              </LinkApi>
            </InformationParagraph>
            <InformationParagraph>
              The value of each Qortal unit is expressed in terms of 1 Qort
              multiplied by 1e8. Hence, if you receive a response value of
              303366, you simply divide it by 1e8 to find its equivalent in
              Qort. This conversion will yield a result of 0.0030366 Qort.
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
  )
}
