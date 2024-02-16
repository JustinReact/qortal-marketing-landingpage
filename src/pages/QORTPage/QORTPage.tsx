import { useTheme } from '@mui/material';
import { ButtonCol, CoinImg, CoinImgRow, LogoContainer, MainContainer, MainText, MainTitle, SocialButton } from './QORTPage-styles'
import QortalCartoonLogo from "../../images/Home/QortalCartoonLogo.webp";
import { DiscordSVG } from '../../components/Common/Icons/DiscordSVG';
import { RedditSVG } from '../../components/Common/Icons/RedditSVG';
import ReactGA from "react-ga4";
import QORTCoin from "../../images/QORT/QORTCoin.png";

export const QORTPage = () => {

  const theme = useTheme();

  return (
    <MainContainer>
      <CoinImgRow>
        <CoinImg src={QORTCoin} alt="QORT Coin" />
      <MainTitle>
        get<br/>some<br/>QORT
      </MainTitle>
      </CoinImgRow>
    </MainContainer>
  )
}
