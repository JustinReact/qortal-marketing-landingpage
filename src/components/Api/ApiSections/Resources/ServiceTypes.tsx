import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  ParagraphContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle,
  ServiceItem,
  CustomUnorderedList,
  CustomListItem,
  QortalIcon
} from "../Common/Common-styles";
import { useTheme, Grid } from "@mui/material";
import { QortalSVG } from "../../../Common/Icons/QortalSVG";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}
export const ServiceTypes: FC<SectionProps> = ({
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
          <SubTitle>Public services</SubTitle>
          <SectionParagraph>
            The services below are intended to be used for publicly accessible
            data. The maximum file size is shown for each service that does not use the current general limit of 500 MB.
          </SectionParagraph>
          <Grid container sx={{ margin: "20px 0" }}>
            <Grid item xs={12} md={6}>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              IMAGE (10 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              THUMBNAIL (500 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              VIDEO
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              AUDIO
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              PODCAST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              VOICE (10 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              ARBITRARY_DATA
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              JSON (25 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              DOCUMENT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              LIST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              PLAYLIST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              METADATA
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              BLOG
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              BLOG_POST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              BLOG_COMMENT (500 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              GIF_REPOSITORY (25 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              ATTACHMENT (50 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              FILE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              FILES
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              CHAIN_DATA (239 B)
            </ServiceItem>
            </Grid>
            <Grid item xs={12} md={6}>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              STORE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              PRODUCT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              OFFER
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              COUPON
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              CODE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              PLUGIN
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              EXTENSION
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              GAME
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              ITEM
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              NFT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              DATABASE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              SNAPSHOT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              COMMENT (500 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              CHAIN_COMMENT (239 B)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              WEBSITE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              APP (50 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              QCHAT_ATTACHMENT (1 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              QCHAT_IMAGE (500 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              QCHAT_AUDIO (10 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              QCHAT_VOICE (10 MB)
            </ServiceItem>
            </Grid>
          </Grid>
          <SubTitle>Private services</SubTitle>
          <SectionParagraph>
            For the services below, data is encrypted for a single recipient,
            and can only be decrypted using the private key of the recipient's
            wallet.
          </SectionParagraph>
          <CustomUnorderedList>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              QCHAT_ATTACHMENT_PRIVATE (1 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              ATTACHMENT_PRIVATE (50 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              FILE_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              IMAGE_PRIVATE (10 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              VIDEO_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              AUDIO_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              VOICE_PRIVATE (10 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              DOCUMENT_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              MAIL_PRIVATE (5 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              MESSAGE_PRIVATE (1 MB)
            </CustomListItem>
          </CustomUnorderedList>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
