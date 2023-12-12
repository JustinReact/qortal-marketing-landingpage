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
const profileData = await qortalRequest({
  action: "GET_PROFILE_DATA",
  property: "wallets"
});
`.trim();

const codeBlockResponse1 = `{
  "btc": "12zcTs6EkpVcJCTPWTGYkqukW2W8iv81KA",
  "ltc": "LhqJGB78YajuuiysXZBhiF1YcttRNwzBgD",
  "doge": "D77Z9AZXhmbuKqRvTqoF7p4bmbGGdAaKPZ",
  "dgb": "DURXrj6V6yHbEKm529sW7yBKG3Gm1qWbqb",
  "rvn": "RCJJq72k5pzfczp51BZfi3CHLuq422JBF1",
  "arrr": "zs1shd0rle4yvnafwzl9nwqzvwxdx3ew803hjw0qc2zhvrx5vfxdtvmh8wgwjlpe5elrhszx4yyzme"
}`.trim();

const codeBlock2 = `
const profileData = await qortalRequest({
  action: "GET_PROFILE_DATA",
  property: "foo"
});
`.trim();

const codeBlockResponse2 = `{
  newKey: "bar"
}`.trim();

export const GET_PROFILE_DATA: FC<SectionProps> = ({
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
          <SubTitle>Get a profile property. Returns a user's profile property data based on inputted key. This
              will return a string value if the property is any of the
              following: "tagline" or "bio". Both "wallets" and custom
              properties will return an object.</SubTitle>
          <InformationSection>
            <InformationParagraph>
              {`Custom properties are created by the user and can be any key-value pair. They are created by using the "SET_PROFILE_DATA" action. Trying to get a custom property that does not exist will return an error object {error: "Cannot find requested data"}`}
              .
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
          <SubTitle>Get a profile custom property</SubTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock2} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse2}
                language="javascript"
              />
            </Grid>
          </Grid>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
