import { memo } from "react";
import { LogoContainer, QortalImg } from "./QortalBigLogo-styles";
import QortalLogoImg from "../../../images/Home/QortalBigLogo.webp";

export const QortalBigLogo: React.FC = memo(() => {
  return (
    <LogoContainer>
      <QortalImg src={QortalLogoImg} alt="QortalBigLogo" />
    </LogoContainer>
  );
});
