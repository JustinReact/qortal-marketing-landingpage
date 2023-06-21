import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PlaySVG } from "../Common/Icons/PlaySVG";

export const YoutubePlaceholderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "100%",
  "&:hover": {
    cursor: "pointer",
    "& svg": {
      transition: "all 0.2s ease-in-out",
      height: "85px",
      width: "85px"
    }
  }
}));

export const YoutubeHeader = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 7,
  fontFamily: "Montserrat",
  fontWeight: 400,
  color: "#fff",
  userSelect: "none",
  fontSize: "23px"
}));

export const YoutubeThumbnailImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover"
}));

export const PlayButton = styled(PlaySVG)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)"
}));
