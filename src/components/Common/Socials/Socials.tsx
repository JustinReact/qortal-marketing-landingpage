import React from "react";
import {
  DiscordIcon,
  GithubIcon,
  IconRow,
  LinkedInIcon,
  TelegramIcon,
  XIcon,
  YoutubeIcon
} from "./Socials-styles";
import { useTheme } from "@mui/material";
import { usePathname } from "next/navigation";

export const Socials = () => {
  const theme = useTheme();
  const iconColor = theme.palette.mode === "dark" ? "#ffffff" : "#2D2D2D";
  const location = usePathname();

  return (
    <IconRow>
      <XIcon
        color={iconColor}
        height="22"
        width="22"
        onClickFunc={() => {
          if (location.includes("/links")) {
            window.open("https://link.qortal.dev/x-link", "_blank");
          } else {
            window.open("https://link.qortal.dev/qortal-official", "_blank");
          }
        }}
      />
      <LinkedInIcon
        color={iconColor}
        height="20"
        width="26"
        onClickFunc={() => {
          if (location.includes("/links")) {
            window.open("https://link.qortal.dev/linkedin-link", "_blank");
          } else {
            window.open(
              "https://link.qortal.dev/linked-company-page",
              "_blank"
            );
          }
        }}
      />
      <DiscordIcon
        color={iconColor}
        height="26"
        width="32"
        onClickFunc={() => {
          if (location.includes("/links")) {
            window.open("https://link.qortal.dev/discord-link", "_blank");
          } else {
            window.open("https://link.qortal.dev/discord-invite", "_blank");
          }
        }}
      />
      <YoutubeIcon
        color={iconColor}
        height="18"
        width="24"
        onClickFunc={() => {
          if (location.includes("/links")) {
            window.open("https://link.qortal.dev/youtube-link", "_blank");
          } else {
            window.open("https://link.qortal.dev/qortal-community", "_blank");
          }
        }}
      />
      <TelegramIcon
        color={iconColor}
        height="22"
        width="22"
        onClickFunc={() => {
          if (location.includes("/links")) {
            window.open("https://link.qortal.dev/telegram-link", "_blank");
          } else {
            window.open("https://link.qortal.dev/telegram-invite", "_blank");
          }
        }}
      />
      <GithubIcon
        color={iconColor}
        height="22"
        width="22"
        onClickFunc={() => {
          if (location.includes("/links")) {
            window.open("https://link.qortal.dev/github-link", "_blank");
          } else {
          }
          window.open("https://link.qortal.dev/github", "_blank");
        }}
      />
    </IconRow>
  );
};
