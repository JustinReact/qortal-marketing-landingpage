"use client";
import { Container, LinksTitle, MainCol, QortalImg } from "./Link-styles";
import { Socials } from "../Common/Socials/Socials";

export const Links = () => {
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
        <LinksTitle>
          Qortal Blockchain
        </LinksTitle>
        <Socials />
      </MainCol>
    </Container>
  );
};
