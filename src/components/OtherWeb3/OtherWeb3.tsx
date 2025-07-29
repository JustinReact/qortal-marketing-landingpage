"use client";
import {
  CalendarIcon,
  Container,
  LinkButton,
  LinksContainer,
  LinksTitle,
  MainCol,
  PoweredByText,
  QortalImg,
  TelegramIcon,
} from "./OtherWeb3-styles";
import { Socials } from "../Common/Socials/Socials";
import { useMediaQuery, useTheme } from "@mui/material";

export const OtherWeb3 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 680px)");
  return (
    <Container>
      <MainCol>
        <LinksTitle>🧠 The Other Web3 — Sofia Meetup</LinksTitle>
        <LinksContainer>
          <LinkButton
            href="https://link.qortal.dev/rsvp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            RSVP to Attend (Lu.ma)
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Join the Telegram Group
          </LinkButton>
        </LinksContainer>
        <PoweredByText>
          Brought to you by Qortal — Building the alternative, peer-to-peer internet!
        </PoweredByText>
        <QortalImg
          src="/images/Links/QortalLogo.png"
          alt="Qortal Logo"
          width={130}
          height={147}
          quality={100}
        />
      </MainCol>
    </Container>
  );
};
