import { LogoContainer, QortalImg } from "./QortalLogo-styles";
import QortalLogoImg from "../../../images/Home/QortalBigLogo.png";

export const QortalBigLogo = () => {
  return (
    <LogoContainer>
      <QortalImg src={QortalLogoImg} alt="QortalBigLogo" />
    </LogoContainer>
  );
};
