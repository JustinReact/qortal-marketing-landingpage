"use client";
import { useTheme } from "@mui/material";
import {
  FooterContainer,
  FooterIconRow,
  FooterLink,
  FooterRow
} from "./Footer-styles";
import { usePathname } from "next/navigation";
import { TelegramSVG } from "../../Common/Icons/TelegramSVG";
import { YoutubeSVG } from "../../Common/Icons/YoutubeSVG";
import { DiscordSVG } from "../../Common/Icons/DiscordSVG";
import { LinkedInSVG } from "../../Common/Icons/LinkedInSVG";
import { XSVG } from "../../Common/Icons/XSVG";

export const Footer = () => {
  const location = usePathname();
  const theme = useTheme();

  const iconColor = theme.palette.mode === "dark" ? "#C2C2C2" : "#2D2D2D";
  return (
    <FooterContainer style={{ paddingBottom: location === "/" ? "40px" : 0 }}>
      <FooterIconRow>
        <XSVG
          color={iconColor}
          height="22"
          width="22"
          onClickFunc={() =>
            window.open("https://link.qortal.dev/qortal-official", "_blank")
          }
        />
        <LinkedInSVG
          color={iconColor}
          height="20"
          width="26"
          onClickFunc={() =>
            window.open("https://link.qortal.dev/linked-company-page", "_blank")
          }
        />
        <DiscordSVG
          color={iconColor}
          height="23"
          width="29"
          onClickFunc={() =>
            window.open("https://link.qortal.dev/discord-invite", "_blank")
          }
        />
        <YoutubeSVG
          color={iconColor}
          height="18"
          width="24"
          onClickFunc={() =>
            window.open("https://link.qortal.dev/qortal-community", "_blank")
          }
        />
        <TelegramSVG
          color={iconColor}
          height="22"
          width="22"
          onClickFunc={() =>
            window.open("https://link.qortal.dev/telegram-invite", "_blank")
          }
        />
      </FooterIconRow>
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
      </FooterRow>
    </FooterContainer>
  );
};
