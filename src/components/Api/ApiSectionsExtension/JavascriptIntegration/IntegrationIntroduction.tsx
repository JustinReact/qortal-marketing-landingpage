import React, { FC, useEffect } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

export const IntegrationIntroduction: FC<SectionProps> = ({
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
          <SectionParagraph>
            Javascript apps allow for much more complex integrations with
            Qortal's blockchain data.
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
