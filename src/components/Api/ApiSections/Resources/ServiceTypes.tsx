import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import {
  ParagraphContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from '../Common/common-styles'
interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}
export const ServiceTypes: FC<SectionProps> = ({
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
          <SubTitle>Public services</SubTitle>
          <SectionParagraph>
            The services below are intended to be used for publicly accessible
            data.
          </SectionParagraph>
          <SectionParagraph>
            IMAGE, THUMBNAIL, VIDEO, AUDIO, PODCAST, VOICE, ARBITRARY_DATA,
            JSON, DOCUMENT, LIST, PLAYLIST, METADATA, BLOG, BLOG_POST,
            BLOG_COMMENT, GIF_REPOSITORY, ATTACHMENT, FILE, FILES, CHAIN_DATA,
            STORE, PRODUCT, OFFER, COUPON, CODE, PLUGIN, EXTENSION, GAME, ITEM,
            NFT, DATABASE, SNAPSHOT, COMMENT, CHAIN_COMMENT, WEBSITE, APP,
            QCHAT_ATTACHMENT, QCHAT_IMAGE, QCHAT_AUDIO, QCHAT_VOICE
          </SectionParagraph>
        </ParagraphContainer>
        <ParagraphContainer>
          <SubTitle>Private services</SubTitle>
          <SectionParagraph>
            For the services below, data is encrypted for a single recipient,
            and can only be decrypted using the private key of the recipient's
            wallet.
          </SectionParagraph>
          <SectionParagraph>
            QCHAT_ATTACHMENT_PRIVATE, ATTACHMENT_PRIVATE, FILE_PRIVATE,
            IMAGE_PRIVATE, VIDEO_PRIVATE, AUDIO_PRIVATE, VOICE_PRIVATE,
            DOCUMENT_PRIVATE, MAIL_PRIVATE, MESSAGE_PRIVATE
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
