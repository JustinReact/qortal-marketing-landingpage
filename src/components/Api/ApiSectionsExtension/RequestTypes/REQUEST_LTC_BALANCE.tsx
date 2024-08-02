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
import { Grid } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
document.dispatchEvent(
  new CustomEvent("qortalExtensionRequests", {
    detail: { 
      type: 'REQUEST_LTC_BALANCE',
      requestId: Math.random().toString(36).substring(2, 15), // Generate a unique ID for the request
      timeout: 60000
     }
  })
);
`.trim();

const codeBlockResponse1 = `
0.43193087
`.trim();



const codeBlockResponse3 = `
// error
{
  error: "error message"
}
`.trim();

export const REQUEST_LTC_BALANCE: FC<SectionProps> = ({
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
           <SubTitle>
          Use this request to retrieve the user's LTC balance
        </SubTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock1} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse1}
                language="javascript"
              />
              <DisplayCodeResponse
                codeBlock={codeBlockResponse3}
                language="javascript"
              />
            </Grid>
          </Grid>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
