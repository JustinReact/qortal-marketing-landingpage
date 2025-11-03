"use client";
import {
  CalendarIcon,
  Container,
  LinkButton,
  LinksContainer,
  LinksTitle,
  MainCol,
  PoweredByText,
  QortalImg
} from "./Webinar-styles";
import { useTheme } from "@mui/material";

export const Webinar = () => {
  const theme = useTheme();
  return (
    <Container>
      <MainCol>
        <LinksTitle>
          Qortal and the New Internet: The Unstoppable Web — Live Webinar
        </LinksTitle>
        <LinksContainer>
          <LinkButton
            href="https://link.qortal.dev/webinar"
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
        </LinksContainer>
        <PoweredByText>
          Brought to you by Qortal — Building the alternative, peer-to-peer
          internet!
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
