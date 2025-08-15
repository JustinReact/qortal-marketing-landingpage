import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PlaySVG } from "../Common/Icons/PlaySVG";
import Image from "next/image";
import { raleway } from "../../app/fonts";

export const YoutubePlaceholderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "100%",
  "&:hover": {
    cursor: "pointer",
    "& svg": {
      transition: "all 0.2s ease-in-out",
      height: "82px",
      width: "82px"
    }
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center"
  },
  "&.landing-page-video": {
    "& svg": {
      transform: "translateX(-50%) translateY(120%)",
      [theme.breakpoints.down("sm")]: {
        transform: "translateX(-50%) translateY(90%)"
      }
    },
  },
  "&.creator-page-video": {
    "& img": {
      width: "100% !important",
      height: "250px !important",
    }
  }
}));

export const YoutubeHeader = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 7,
  fontFamily: raleway.style.fontFamily,
  fontWeight: 400,
  color: "#fff",
  userSelect: "none",
  fontSize: "25px",
  letterSpacing: "1.2px",
  textShadow:
    "-1px -1px 0 #000000,  1px -1px 0 #000000,-1px  1px 0 #000000, 1px  1px 0 #000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    left: 50
  },
  "@media (max-width: 662px)": {
    fontSize: "18px",
    left: 80
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
    left: 50,
    maxWidth: "250px"
  }
}));

export const YoutubeThumbnailImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover"
}));

export const PlayButton = styled(PlaySVG)({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)"
});
