import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from "../Common/Common-styles";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}
export const Introduction: FC<SectionProps> = ({
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
        <ParagraphContainer>
          <SectionParagraph>
            Welcome to the Qortal Browser Extension API documentation!
          </SectionParagraph>
          <SectionParagraph>
            {" "}
            This section provides comprehensive information and resources for
            developers looking to build web-applications that connect to Qortal through the Qortal Browser Extension.
          </SectionParagraph>
          <SectionParagraph>
            You can add the Qortal Extension to your browser by 
            <a
              href="https://chromewebstore.google.com/detail/qortal/pjnidalploenkaelcjlhpehmpjmegajd?hl=en"
              target="_blank"
            >
            {' '}visiting the Chrome extension store 
            </a>{" "}
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
