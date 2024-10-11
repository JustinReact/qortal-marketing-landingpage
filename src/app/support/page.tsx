"use client";
import ReactGA from "react-ga4";
import { DiscordLogo, SupportContainer, SupportHeader } from "../../components/Support/Support-styles"

const Support = () => {
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
        src={"/images/Home/JoinDiscordLogo.png"}
        alt="Join Qortal Discord"
        width={500}
        height={500}
      />
    </SupportContainer>
  )
}

export default Support;