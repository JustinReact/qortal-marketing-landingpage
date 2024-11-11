import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  CategoryItem,
  Code,
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from "../Common/Common-styles";
import { useTheme, Grid } from "@mui/material";
import { QortalSVG } from "../../../Common/Icons/QortalSVG";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}
export const Categories: FC<SectionProps> = ({
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
            Resources can have an optional <Code>category</Code> chosen from the following list.
          </SectionParagraph>
          <Grid container sx={{ margin: "20px 0" }}>
            <Grid item xs={12} md={6}>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                ART (Art and Design)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                AUTOMOTIVE (Automotive)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                BEAUTY (Beauty)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                BOOKS (Books and Reference)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                BUSINESS (Business)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                COMMUNICATIONS (Communications)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                CRYPTOCURRENCY<br/>(Cryptocurrency and Blockchain)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                CULTURE (Culture)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                DATING (Dating)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                DESIGN (Design)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                ENTERTAINMENT (Entertainment)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                EVENTS (Events)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                FAITH (Faith and Religion)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                FASHION (Fashion)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                FINANCE (Finance)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                FOOD (Food and Drink)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                GAMING (Gaming)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                GEOGRAPHY (Geography)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                HEALTH (Health)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                HISTORY (History)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                HOME (Home)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                KNOWLEDGE (Knowledge Share)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                LANGUAGE (Language)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                LIFESTYLE (Lifestyle)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                MANUFACTURING (Manufacturing)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                MAPS (Maps and Navigation)
              </CategoryItem>
            </Grid>
            <Grid item xs={12} md={6}>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                MUSIC (Music)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                NEWS (News)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                OTHER (Other)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                PETS (Pets)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                PHILOSOPHY (Philosophy)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                PHOTOGRAPHY (Photography)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                POLITICS (Politics)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                PRODUCE (Products and Services)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                PRODUCTIVITY (Productivity)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                PSYCHOLOGY (Psychology)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                QORTAL (Qortal)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                SCIENCE (Science)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                SELF_CARE (Self Care)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                SELF_SUFFICIENCY<br/>(Self-Sufficiency and Homesteading)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                SHOPPING (Shopping)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                SOCIAL (Social)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                SOFTWARE (Software)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                SPIRITUALITY (Spirituality)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                SPORTS (Sports)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                STORYTELLING (Storytelling)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                TECHNOLOGY (Technology)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                TOOLS (Tools)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                TRAVEL (Travel)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                UNCATEGORIZED (Uncategorized)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                VIDEO (Video)
              </CategoryItem>
              <CategoryItem>
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"18"}
                  width={"18"}
                />
                WEATHER (Weather)
              </CategoryItem>
            </Grid>
          </Grid>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
