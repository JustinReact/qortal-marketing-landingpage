import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  CustomListItem,
  CustomUnorderedList,
  ParagraphContainer,
  QortalIcon,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from "../Common/Common-styles";
import { useTheme } from "@mui/material";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

export const Variables: FC<SectionProps> = ({
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
          <SubTitle>Built in variables</SubTitle>
          <SectionParagraph>
            Q-Apps can access several variables that give information aboue the state of the app. These include:
          </SectionParagraph>
          <CustomUnorderedList>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              _qdnTheme
            </CustomListItem>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              _qdnContext
            </CustomListItem>
          </CustomUnorderedList>
          <SectionParagraph>
            The theme variable will contain the string 'light' or 'dark' depending on the active theme, while the context variable will contain the string 'gateway' if the app is being accessed through a gateway node.
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
