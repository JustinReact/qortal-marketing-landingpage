import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  InformationParagraph,
  ParagraphContainer,
  SectionContainer,
  SubTitle
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { Grid, Box, Typography } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const summary = await qortalRequestWithTimeout({
  action: "SET_PROFILE_DATA", 
  property: "foo",
  data: {
    customData: {
      newKey: "bar"
    }
  }
}, 30000);
`.trim();

const codeBlockResponse1 = `"saved"`.trim();

const codeBlock2 = `
const summary = await qortalRequestWithTimeout({
  action: "SET_PROFILE_DATA", 
  property: "fruits-private",
  data: {
    customData: {
      berries: "strawberries",
    }
  }
}, 30000);
`.trim();

export const SET_PROFILE_DATA: FC<SectionProps> = ({
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
          <SubTitle>Set a normal custom property</SubTitle>
          <InformationSection>
            <InformationParagraph>
              Sets a custom property in the user's profile. The custom property
              will be a key-value pair object that will have a custom property
              name. There can be more than one key-value pair per object for
              every custom property. We call this within a
              qortalRequestWithTimeout function because we want to wait for the
              user to navigate and check the auto-filled info in their profile
              before updating their profile with the new data.
            </InformationParagraph>
          </InformationSection>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock1} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse1}
                language="javascript"
              />
            </Grid>
          </Grid>
          <InformationSection>
            <InformationParagraph>
              The user can had a "-private" suffix to the property name to make
              it private. This will make the property encrypted, meaning that
              Q-Apps will require user approval to access the property.
            </InformationParagraph>
          </InformationSection>
          <SubTitle>Set a private custom property</SubTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock2} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse1}
                language="javascript"
              />
            </Grid>
          </Grid>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
