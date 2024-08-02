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
export const RequestTypes: FC<SectionProps> = ({
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
            When dispatching a 'qortalExtensionRequests' event (request), a type needs to be provided along with other parameters. This section will provide documentation of all the possible types. 
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
