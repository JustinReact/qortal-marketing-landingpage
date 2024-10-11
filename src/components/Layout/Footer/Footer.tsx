"use client";
import { FooterContainer, FooterLink } from "./Footer-styles";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const location = usePathname();

  return (
    <FooterContainer>
      <FooterLink
        href={"/support"}
        className={location === "/support" ? "active" : ""}
      >
        Support
      </FooterLink>
      <FooterLink
        href={"/privacy"}
        className={location === "/privacy" ? "active" : ""}
      >
        Privacy Policy
      </FooterLink>
    </FooterContainer>
  );
};
