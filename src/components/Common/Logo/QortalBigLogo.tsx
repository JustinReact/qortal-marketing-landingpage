import { memo } from "react";
import { LogoContainer, QortalImg } from "./QortalBigLogo-styles";
// import QortalLogoImg from "../../../images/Home/QortalBigLogo.webp";
import QortalCartoonLogo from "../../../images/Home/QortalCartoonLogo.webp";

export const QortalBigLogo: React.FC = memo(() => {
  return (
    <LogoContainer>
      <QortalImg src={QortalCartoonLogo} alt="QortalBigLogo" />
    </LogoContainer>
  );
});
