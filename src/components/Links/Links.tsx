"use client";

import Image from "next/image";
import { Container, MainCol } from "./Link-styles";
import { Socials } from "../Common/Socials/Socials";

export const Links = () => {
  return (
    <Container>
      <MainCol>
        <Image
          src="/images/Links/QortalLogo.png"
          alt="Qortal Logo"
          width={130}
          height={147}
        />
        <Socials />
      </MainCol>
    </Container>
  );
};
