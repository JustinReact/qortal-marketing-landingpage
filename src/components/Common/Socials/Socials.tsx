import React from "react";
import { IconRow } from "./Socials-styles";
import { TelegramSVG } from "../../Common/Icons/TelegramSVG";
import { YoutubeSVG } from "../../Common/Icons/YoutubeSVG";
import { DiscordSVG } from "../../Common/Icons/DiscordSVG";
import { LinkedInSVG } from "../../Common/Icons/LinkedInSVG";
import { XSVG } from "../../Common/Icons/XSVG";
import { useTheme } from "@mui/material";

export const Socials = () => {
  const theme = useTheme();
  const iconColor = theme.palette.mode === "dark" ? "#ffffff" : "#2D2D2D";

  return (
    <IconRow>
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
    </IconRow>
  );
};
