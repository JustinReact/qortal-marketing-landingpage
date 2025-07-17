"use client";
import {
  CloudIcon,
  Container,
  DiscordIcon,
  LinkButton,
  LinksContainer,
  LinksTitle,
  MainCol,
  QortalImg
} from "./Support-styles";
import { useTheme } from "@mui/material";

const Support = () => {
  const theme = useTheme();
  return (
    <Container>
      <MainCol>
        <QortalImg
          src="/images/Links/QortalLogo.png"
          alt="Qortal Logo"
          width={130}
          height={147}
          quality={100}
        />
        <LinksTitle>Qortal Blockchain</LinksTitle>
        <LinksContainer>
          <LinkButton
            href="https://link.qortal.dev/support"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CloudIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Cloud Support
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/discord-invite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Discord Support
          </LinkButton>
        </LinksContainer>
      </MainCol>
    </Container>
  );
};

export default Support;
