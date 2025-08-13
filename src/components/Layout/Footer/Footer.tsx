"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  FooterContainer,
  FooterLink,
  FooterRow
} from "./Footer-styles";
import { usePathname } from "next/navigation";
import { Socials } from "../../Common/Socials/Socials";

export const Footer = () => {
  const location = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1086px)");

  if ((location.includes("/wiki") && isMobile) || location.includes("/links") || location.includes("/other-web3")) {
    return null; // Don't show footer on mobile wiki pages or links page
  } else
    return (
      <FooterContainer style={{ paddingBottom: location === "/" ? "40px" : 0 }}>
        <Socials />
        <FooterRow>
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
          <FooterLink
            href={"/links"}
            className={location === "/links" ? "active" : ""}
          >
            Links
          </FooterLink>
          <FooterLink
            href={"/creators"}
            className={location === "/creators" ? "active" : ""}
          >
            Creators
          </FooterLink>
        </FooterRow>
      </FooterContainer>
    );
};
