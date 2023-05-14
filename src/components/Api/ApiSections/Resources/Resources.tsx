import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import {
  ParagraphContainer,
  SectionContainer,
  SectionParagraph
} from '../Common/common-styles'
interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}
export const Resources: FC<SectionProps> = ({
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
          <SectionParagraph>
            Each published item on QDN (Qortal Data Network) is referred to as a
            "resource". A resource could contain anything from a few characters
            of text, to a multi-layered directory structure containing thousands
            of files.
          </SectionParagraph>
          <SectionParagraph>
            Resources are stored on-chain, however the data payload is generally
            stored off-chain, and verified using an on-chain SHA-256 hash.
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
        </ParagraphContainer>
        <ParagraphContainer>
          <SectionParagraph>
            Each QDN resource has 3 important fields:
          </SectionParagraph>
          <ul>
            <li>
              name - the registered name of the account that is publishing the
              data (which will hold update/edit privileges going forwards).
            </li>
            <li>
              service - the type of content (e.g. IMAGE or JSON). Different
              services have different validation rules. See list of available
              services.
            </li>
            <li>
              identifier - an optional string to allow more than one resource to
              exist for a given name/service combination. For example, the name
              QortalDemo may wish to publish multiple images. This can be
              achieved by using a different identifier string for each. The
              identifier is only unique to the name in question, and so it
              doesn't matter if another name is using the same service and
              identifier string.
            </li>
          </ul>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
