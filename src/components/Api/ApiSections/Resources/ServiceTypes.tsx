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
              400: IMAGE (10 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              410: THUMBNAIL (500 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              500: VIDEO
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              600: AUDIO
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              640: PODCAST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              630: VOICE (10 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              100: ARBITRARY_DATA
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1110: JSON (25 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              800: DOCUMENT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              900: LIST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              910: PLAYLIST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1100: METADATA
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              700: BLOG
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              777: BLOG_POST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              778: BLOG_COMMENT (500 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1200: GIF_REPOSITORY (25 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              130: ATTACHMENT (50 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              140: FILE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              150: FILES
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              160: CHAIN_DATA (239 B)
            </ServiceItem>
            </Grid>
            <Grid item xs={12} md={6}>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1300: STORE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1310: PRODUCT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1330: OFFER
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1340: COUPON
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1400: CODE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1410: PLUGIN
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1420: EXTENSION
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1500: GAME
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1510: ITEM
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1600: NFT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1700: DATABASE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1710: SNAPSHOT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1800: COMMENT (500 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1810: CHAIN_COMMENT (239 B)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              200: WEBSITE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              1000: APP (50 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              120: QCHAT_ATTACHMENT (1 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              420: QCHAT_IMAGE (500 KB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              610: QCHAT_AUDIO (10 MB)
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              620: QCHAT_VOICE (10 MB)
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
              121: QCHAT_ATTACHMENT_PRIVATE (1 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              131: ATTACHMENT_PRIVATE (50 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              141: FILE_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              401: IMAGE_PRIVATE (10 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              501: VIDEO_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              601: AUDIO_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              631: VOICE_PRIVATE (10 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              801: DOCUMENT_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              1901: MAIL_PRIVATE (1 MB)
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              1911: MESSAGE_PRIVATE (1 MB)
            </CustomListItem>
          </CustomUnorderedList>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
