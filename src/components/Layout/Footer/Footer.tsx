"use client";
import { useMediaQuery } from "@mui/material";
import { FooterContainer, FooterLink } from "./Footer-styles";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const location = usePathname();
  const isMobile = useMediaQuery("(max-width: 1086px)");

  if (location.includes("/wiki") && isMobile) {
    return null; // Don't show footer on mobile wiki pages
  } else return (
    <FooterContainer style={{paddingBottom: location === "/" ? "40px" : 0}}>
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
