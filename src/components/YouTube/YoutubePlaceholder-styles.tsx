import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PlaySVG } from "../Common/Icons/PlaySVG";
import Image from "next/image";
import { raleway } from "../../app/fonts";

export const YoutubePlaceholderContainer = styled(Box)({
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
});

export const YoutubeHeader = styled(Typography)({
  position: "absolute",
  top: 0,
  left: 7,
  fontFamily: raleway.style.fontFamily,
  fontWeight: 400,
  color: "#fff",
  userSelect: "none",
  fontSize: "25px",
  letterSpacing: "1.2px",
  textShadow: "-1px -1px 0 #006eff,  1px -1px 0 #006eff,-1px  1px 0 #006eff, 1px  1px 0 #006eff"
});

export const YoutubeThumbnailImg = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const PlayButton = styled(PlaySVG)({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)"
});
