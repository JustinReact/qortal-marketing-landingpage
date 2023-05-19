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
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "SEND_COIN",
  coin: "QORT",
  destinationAddress: "Qi3x7zVhN17mcYm9JTrEYaFihmETSZTzPD",
  amount: 1.00000000 // 1 QORT
});
`.trim();

const codeBlockResponse = `
{
  amount: '1.00000000'
  approvalStatus: 'NOT_REQUIRED'
  creatorAddress: 'QMjCNsctvWLoDdPSRpHn6TF2j96iDr9YWm'
  fee: '0.00100000'
  recipient: 'Qi3x7zVhN17mcYm9JTrEYaFihmETSZTzPD'
  reference: '26xJXTxcdXhFUYFkyZ7qKkj94RtaLBevcyQgCwK3W5xt7JkGPrCbvNgdC46CmJA65cjTCXMykwiyYJfVsPdsU1fS'
  senderPublicKey: 'Bjo1iUHJXbCb4LKabmE6KWNL5jSgCK36ypasoDgJG53U'
  signature: '4j2iPN5Xwgocs8Z32JB4UB63G87qS43kPyEwFmQMLvWBXtrSQwAfyx8S9CqQvbregnstXFKqXpkPT2dNdAscriT4'
  timestamp: 1684321310522
  txGroupId: 0
  type: 'PAYMENT'
}
`.trim();

const codeBlock2 = `
const response = await qortalRequest({
  action: "SEND_COIN",
  coin: "LTC",
  destinationAddress: "LSdTvMHRm8sScqwCi6x9wzYQae8JeZhx6y",
  amount: 1.00000000, // 1 LTC
});
`.trim();

export const SEND_COIN: FC<SectionProps> = ({
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
          <SubTitle>Send QORT to address</SubTitle>
          <InformationSection>
            <InformationParagraph>
              This action requires user approval
            </InformationParagraph>
          </InformationSection>
          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse}
            language="javascript"
          />
          <SubTitle>Send foreign coin to address</SubTitle>
          <DisplayCode codeBlock={codeBlock2} language="javascript" />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
