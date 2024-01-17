import { useTheme } from '@mui/material';
import { ButtonCol, LogoContainer, MainContainer, MainText, QortalImg, SocialButton } from './MobileHome-styles'
import QortalCartoonLogo from "../../images/Home/QortalCartoonLogo.webp";
import { DiscordSVG } from '../../components/Common/Icons/DiscordSVG';
import { RedditSVG } from '../../components/Common/Icons/RedditSVG';

export const MobileHome = () => {

  const theme = useTheme();

  return (
    <MainContainer>
      <LogoContainer>
        <QortalImg src={QortalCartoonLogo} alt="QortalBigLogo" />
      </LogoContainer>
      <MainText>
        Join the Qortal community today! Be a part of the future of the internet, where you cannot be censored and you control all your data!
      </MainText>
      <ButtonCol>
        <SocialButton onClick={() => {
          window.open("https://discord.gg/9hgNdBj4aC", "_blank");
        }}>
          <DiscordSVG color={theme.palette.mode === "dark" ? "#1300af" : "#ffffff"} height={'35'} width={"35"} />
          Join On Discord
        </SocialButton>
        <SocialButton onClick={() => {
          window.open("https://www.reddit.com/r/QortalProject/", "_blank")
        }}>
          <RedditSVG color={theme.palette.mode === "dark" ? "#1300af" : "#ffffff"} height={'35'} width={"35"} />
          Join On Reddit
        </SocialButton>
      </ButtonCol>
    </MainContainer>
  )
}
