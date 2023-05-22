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
            Welcome to the Qortal Q-Apps API documentation!
          </SectionParagraph>
          <SectionParagraph>
            {" "}
            This section provides comprehensive information and resources for
            developers looking to build applications on top of Qortal's
            decentralized ecosystem.
          </SectionParagraph>
          <SectionParagraph>
            Qortal Q-Apps API offers a powerful set of tools and endpoints that
            enable seamless integration with the Qortal blockchain. With these
            APIs, developers can harness the full potential of Qortal's
            decentralized infrastructure to create innovative applications,
            explore data, interact with the blockchain, and much more!
          </SectionParagraph>
          <SectionParagraph>
            Whether you are a seasoned blockchain developer or just starting
            your journey, this documentation will guide you through the various
            aspects of the Qortal Q-Apps API.
          </SectionParagraph>
          <SectionParagraph>
            You will find detailed explanations, commented code explaining each
            part of an API call, API call response examples, and explanations
            for the different terminology involved in building Q-Apps.
          </SectionParagraph>
          <SectionParagraph>
            You can also check out our React tutorial guide on Youtube to gain
            practical knowledge on building a Q-App. The videos take you
            step-by-step through the process of building a Q-App, from starting
            up your React application, to deploying your Q-App to the Qortal
            network.
          </SectionParagraph>
          <SectionParagraph>
            Join the growing community of Qortal developers and harness the
            potential of decentralized applications with the Q-Apps API.
            Together, let's shape the future of blockchain technology! Happy
            coding and building!
          </SectionParagraph>
          <SectionParagraph>
            <strong>
              Major thanks to CalDescent for writing the intial version of this
              API!!
            </strong>
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
