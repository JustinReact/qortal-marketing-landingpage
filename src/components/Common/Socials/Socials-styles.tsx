import { Box, styled } from "@mui/material";
import { XSVG } from "../Icons/XSVG";
import { LinkedInSVG } from "../Icons/LinkedInSVG";
import { DiscordSVG } from "../Icons/DiscordSVG";
import { TelegramSVG } from "../Icons/TelegramSVG";
import { YoutubeSVG } from "../Icons/YoutubeSVG";
import { GithubSVG } from "../Icons/Github";

export const IconRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "22px",
  "& svg": {
    cursor: "pointer",
  },
}));

export const XIcon = styled(XSVG)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#ffffff" : "#2D2D2D",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#f2f2f2" : "#232323",
  },
}));

export const LinkedInIcon = styled(LinkedInSVG)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#ffffff" : "#2D2D2D",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#f2f2f2" : "#232323",
  },
}));

export const DiscordIcon = styled(DiscordSVG)(({ theme }) => ({
  transition: "fill 0.3s ease-in-out",
  "&:hover": {
      fill: theme.palette.mode === "dark" ? "#f2f2f2" : "#232323",
  },
}));

export const YoutubeIcon = styled(YoutubeSVG)(({ theme }) => ({
   color: theme.palette.mode === "dark" ? "#ffffff" : "#2D2D2D",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#f2f2f2" : "#232323",
  },
}));

export const TelegramIcon = styled(TelegramSVG)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#ffffff" : "#2D2D2D",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#f2f2f2" : "#232323",
  },
}));

export const GithubIcon = styled(GithubSVG)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#ffffff" : "#2D2D2D",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#f2f2f2" : "#232323",
  },
}));