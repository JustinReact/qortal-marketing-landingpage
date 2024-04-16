import ReactGA from "react-ga4";
import { DiscordLogo, SupportContainer, SupportHeader } from "./Support-styles"
import CustomDiscordLogo from "../../images/Home/JoinDiscordLogo.png"

export const Support = () => {
  return (
    <SupportContainer>
      <SupportHeader>
        Need support? Join our Discord server and we'll be glad to help you!
      </SupportHeader>
      <DiscordLogo
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Discord Button Support Page",
            label: "Discord Button Support Page"
          });
          window.open("https://discord.gg/YKdxYUSqZR", "_blank");
        }}
        src={CustomDiscordLogo}
        alt="Join Qortal Discord"
      />
    </SupportContainer>
  )
}