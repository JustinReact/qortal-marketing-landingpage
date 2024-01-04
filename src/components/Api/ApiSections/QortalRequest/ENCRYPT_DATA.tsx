import { FC, useEffect } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  ColumnContainer,
  InformationParagraph,
  ParagraphContainer,
  RowContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from "../Common/Common-styles";
import { Box, Button, Grid, Typography } from "@mui/material";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import InfoIcon from "@mui/icons-material/Info";
import { InformationSection } from "../Common/InformationSection";
import { LinkApi } from "../Common/LinkApi";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const encryptedData = await qortalRequest({
  action: 'ENCRYPT_DATA',
  file: file, // requires a file object
  base64: base64 // requires a base64 string if file object is not provided
  publicKeys: []  // Array of public keys of the users with whom you want to encrypt the data (optional, used for group encryption)
});
`.trim();

const codeBlockResponse = `
"cW9ydGFsR3JvdXBFbmNyeXB0ZWREYXRhmixnlZeFIMyu8mrCtewxFyGdWu9HBqfyvSLOlY7tl2e0tUbILFNblFyN5dzJYfJ1pLBZNUBmBc21mZ9CP0vWLpoUW65823McoD4oQ1HmaVhwZJRicAtelcimB3bMF6TlvthWCicvcoO6S76XI2vVI1WLEdUEFgbvt8cVfvDboz+GWbFRvNmADmKaXDeM8yAJVsRo19Ot6AEAAAA="
`.trim();

export const ENCRYPT_DATA: FC<SectionProps> = ({
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
          Encrypts data provided by the user. This handler takes in data, optionally in the form of a file, or a base64 string, and an array of public keys to perform group encryption. Returns the encrypted data in a JSON string.
          </SubTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock1} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse}
                language="javascript"
              />
            </Grid>
          </Grid>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
