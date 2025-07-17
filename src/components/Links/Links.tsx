"use client";
import {
  AppsIcon,
  BalanceIcon,
  Container,
  DownloadingIcon,
  EbookIcon,
  ExchangeIcon,
  ExplorerIcon,
  LinkButton,
  LinksContainer,
  LinksTitle,
  MainCol,
  MobileIcon,
  MonitorIcon,
  QortalImg,
  WikiIcon,
  YoutubeIcon
} from "./Links-styles";
import { Socials } from "../Common/Socials/Socials";
import { useMediaQuery, useTheme } from "@mui/material";

export const Links = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 680px)");
  return (
    <Container>
      <MainCol>
        <QortalImg
          src="/images/Links/QortalLogo.png"
          alt="Qortal Logo"
          width={130}
          height={147}
          quality={100}
        />
        <LinksTitle>Qortal Blockchain</LinksTitle>
        <Socials />
        <LinksContainer>
          <LinkButton
            href="https://link.qortal.dev/qortal-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MonitorIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Try Qortal Hub
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/qortal-go"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MobileIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Try Qortal Go
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/downloads-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadingIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            {isMobile
              ? "Downloads Page" // Shortened text for mobile view
              : "Qortal Hub, Go, Extension, and Core Downloads"}
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/ebook-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EbookIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Ebook Download
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/wiki-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WikiIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Qortal Wiki
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/qapps-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppsIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Q-Apps Directory
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/explorer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExplorerIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Qortal Exqlorer
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/tradeogre-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExchangeIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            TradeOgre Listing
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/cmc-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BalanceIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            {isMobile
              ? "CoinMarketCap" // Shortened text for mobile view
              : "CoinMarketCap Listing"}
          </LinkButton>
          <LinkButton
            href="https://link.qortal.dev/technical-yt-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            {isMobile
              ? "Tutorials YT" // Shortened text for mobile view
              : "Technical Tutorials Youtube Channel"}
          </LinkButton>
        </LinksContainer>
      </MainCol>
    </Container>
  );
};
