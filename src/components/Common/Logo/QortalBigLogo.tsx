import { memo } from "react";
import { LogoContainer, QortalImg } from "./QortalBigLogo-styles";
import Image from "next/image";
// import QortalLogo from "../../../../public/images/Home/QortalCartoonLogo.webp";

export const QortalBigLogo: React.FC = memo(() => {
  return (
    <LogoContainer>
      <Image src={"/images/Home/QortalCartoonLogo.webp"} alt="QortalBigLogo" width={500} height={500} />
    </LogoContainer>
  );
});
