import { memo } from "react";
import { LogoContainer, QortalImg } from "./QortalBigLogo-styles";

export const QortalBigLogo: React.FC = memo(() => {
  return (
    <LogoContainer>
      <QortalImg src={"/images/Home/QortalCartoonLogo.webp"} alt="QortalBigLogo" width={500} height={500} />
    </LogoContainer>
  );
});
