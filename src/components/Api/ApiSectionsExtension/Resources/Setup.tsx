import React, { FC, useEffect } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  CustomListItem,
  CustomUnorderedList,
  ParagraphContainer,
  QortalIcon,
  SectionContainer,
  SectionParagraph
} from "../Common/Common-styles";
import { useTheme } from "@mui/material";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}
export const Setup: FC<SectionProps> = ({
  title,
  setSelectedSection,
  id
}) => {
  const theme = useTheme();

  return (
    <SectionWrapper
      title={title}
      setSelectedSection={setSelectedSection}
      id={id}
    >
      <SectionContainer>
        <ParagraphContainer>
          <SectionParagraph>
            This section explains how the Qortal Extension communicates with a web-app and how to setup your webapp to enable this communication.
          </SectionParagraph>
        
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
