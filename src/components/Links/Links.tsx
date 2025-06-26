"use client";
import {
  Container,
  EbookIcon,
  LinkButton,
  LinksContainer,
  LinksTitle,
  MainCol,
  QortalImg
} from "./Link-styles";
import { Socials } from "../Common/Socials/Socials";
import { useTheme } from "@mui/material";

export const Links = () => {
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
        <Socials />
        <LinksContainer>
          <LinkButton
            href="https://link.qortal.dev/ebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EbookIcon height="23" width="23" color={theme.palette.text.primary} />
            Ebook Download
          </LinkButton>
        </LinksContainer>
      </MainCol>
    </Container>
  );
};
