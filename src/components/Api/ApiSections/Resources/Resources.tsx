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
export const Resources: FC<SectionProps> = ({
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
            Each published item on QDN (Qortal Data Network) is referred to as a
            "resource". A resource could contain anything from a few characters
            of text, to a multi-layered directory structure containing thousands
            of files.
          </SectionParagraph>
          <SectionParagraph>
            Resources are indexed on-chain, however the data payload is generally
            stored off-chain, and verified using an on-chain SHA-256 hash. Resources
            smaller than 240 bytes are fully on-chain, and the CHAIN_COMMENT service
            can be used to ensure this result, allowing faster data retrieval.
          </SectionParagraph>
          <SectionParagraph>
            To publish a resource, a user must first register a name, and then
            include that name when publishing the data. Accounts without a
            registered name are unable to publish to QDN from a Q-App at this
            time.
          </SectionParagraph>
          <SectionParagraph>
            Owning the name grants update privileges to the data. If that name
            is later sold or transferred, the permission to update that resource
            is moved to the new owner.
          </SectionParagraph>
          <SectionParagraph>
            Each QDN resource has 3 important fields:
          </SectionParagraph>
          <CustomUnorderedList>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              <strong>name</strong> - the registered name of the account that is
              publishing the data (which will hold update/edit privileges going
              forwards).
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              <strong>service</strong> - the type of content (e.g. IMAGE or
              JSON). Different services have different validation rules. See
              list of available services.
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              <strong>identifier</strong> - an optional string to allow more
              than one resource to exist for a given name/service combination.
              For example, the name QortalDemo may wish to publish multiple
              images. This can be achieved by using a different identifier
              string for each. The identifier is only unique to the name in
              question, and so it doesn't matter if another name is using the
              same service and identifier string.
            </CustomListItem>
          </CustomUnorderedList>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
