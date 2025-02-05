import React, { FC } from "react";
import {
  HeadphonesIcon,
  SupportModalButton,
  SupportModalContainer,
  SupportModalContent,
  SupportModalText,
  CloseIcon
} from "./SupportModal-styles";
import { useTheme } from "@mui/material";
import { InfoSVG } from "../Icons/InfoSVG";

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
      <InfoSVG color={theme.palette.text.primary} height="50px" width="50px" />
      <SupportModalContent>
        <SupportModalText>
          Need help getting started with Qortal? Come chat with one of our
          community members.
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
      </SupportModalContent>
    </SupportModalContainer>
  );
};
