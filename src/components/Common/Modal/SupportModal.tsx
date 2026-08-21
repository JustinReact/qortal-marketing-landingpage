"use client";

import React, { FC } from "react";
import {
  HeadphonesIcon,
  SupportModalButton,
  SupportModalContainer,
  SupportModalContent,
  SupportModalDivider,
  SupportModalFaqLink,
  SupportModalFormWrap,
  SupportModalText,
  CloseIcon
} from "./SupportModal-styles";
import { useTheme } from "@mui/material";
import { LeadMagnetForm } from "../../LeadMagnet/LeadMagnetForm";

interface SupportModalProps {
  setCloseSupportModal: () => void;
}

export const SupportModal: FC<SupportModalProps> = ({
  setCloseSupportModal
}) => {
  const theme = useTheme();
  return (
    <SupportModalContainer>
      <CloseIcon
        onClickFunc={setCloseSupportModal}
        color={theme.palette.text.primary}
        height="25px"
        width="25px"
      />
      <SupportModalFormWrap>
        <LeadMagnetForm
          variant="compact"
          source="download-popup"
          title="While that downloads, grab the free guide"
          submitLabel="Send me the free guide"
        />
      </SupportModalFormWrap>
      <SupportModalDivider />
      <SupportModalContent>
        <SupportModalText>
          Need help getting started with Qortal? Come chat with one of our
          community members on our support channel. This is not a part of
          Qortal, it&apos;s a cloud server that is hosted by the community. This
          does not require a centralized sign up or login.
        </SupportModalText>
        <SupportModalButton
          role="button"
          tabIndex={0}
          aria-label="Chat with us"
          onClick={() =>
            window.open("https://link.qortal.dev/support", "_blank")
          }
          onKeyDown={() =>
            window.open("https://link.qortal.dev/support", "_blank")
          }
        >
          <HeadphonesIcon
            color={theme.palette.text.primary}
            height={"18px"}
            width={"18px"}
          />{" "}
          CHAT HERE
        </SupportModalButton>
        <SupportModalFaqLink href="/faq#installation">
          Or browse common questions in our FAQ
        </SupportModalFaqLink>
      </SupportModalContent>
    </SupportModalContainer>
  );
};
