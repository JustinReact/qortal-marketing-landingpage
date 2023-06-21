import { FC } from "react";
import {
  PlayButton,
  YoutubeHeader,
  YoutubePlaceholderContainer,
  YoutubeThumbnailImg
} from "./YoutubePlaceholder-styles";
import YoutubeThumbnail from "../../images/Youtube/YoutubeThumbnail.webp";

interface YoutubePlaceholderProps {
  isModal: boolean;
  onClick: () => void;
}

export const YoutubePlaceholder: FC<YoutubePlaceholderProps> = ({
  isModal,
  onClick
}) => {
  return (
    <YoutubePlaceholderContainer
      style={{ width: isModal ? "auto" : "600px" }}
      onClick={onClick}
    >
      <YoutubeHeader>Introducing Qortal Q-Apps</YoutubeHeader>
      <YoutubeThumbnailImg src={YoutubeThumbnail} alt="Youtube Placeholder" />
      <PlayButton color={"#E52D27"} height={"80"} width={"80"} />
    </YoutubePlaceholderContainer>
  );
};
