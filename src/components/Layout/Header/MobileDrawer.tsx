"use client";
import { FC } from "react";
import { DiscordSVG } from "../../Common/Icons/DiscordSVG";
import { Container, Divider, DrawerButton } from "./MobileDrawer-styles";
import { useTheme } from "@mui/material";
import { DocsSVG } from "../../Common/Icons/DocsSVG";
import { FeaturesSVG } from "../../Common/Icons/FeaturesSVG";
import { RedditSVG } from "../../Common/Icons/RedditSVG";
import { QortalSVG } from "../../Common/Icons/QortalSVG";
import ReactGA from "react-ga4";
import { HomeSVG } from "../../Common/Icons/HomeSVG";
  import { PuzzleSVG } from "../../Common/Icons/PuzzleSVG";
import { useRouter } from "next/navigation";

interface MobileDrawerProps {
  setOpenMobileDrawer: () => void;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({
  setOpenMobileDrawer
}) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Container>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Drawer Discord Link",
            label: "Clicked Mobile Drawer Discord Link"
          });
          setOpenMobileDrawer();
          window.open("https://discord.gg/YKdxYUSqZR", "_blank");
        }}
      >
        Join Discord
        <DiscordSVG
          color={theme.palette.text.primary}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Drawer Reddit Link",
            label: "Clicked Mobile Drawer Reddit Link"
          });
          setOpenMobileDrawer();
          window.open("https://www.reddit.com/r/QortalProject/", "_blank")
        }}
      >
        Join Reddit
        <RedditSVG
          color={theme.palette.text.primary}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          router.push("/");
        }}
      >
        Home
        <HomeSVG
          color={theme.palette.text.primary}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          router.push("/extension");
        }}
      >
        Extension
        <PuzzleSVG
          color={theme.palette.text.primary}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          router.push("/qort");
        }}
      >
        QORT
        <QortalSVG
          color={theme.palette.text.primary}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          router.push("/features");
        }}
      >
        Features
        <FeaturesSVG
          color={theme.palette.text.primary}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          router.push("/docs/q-apps");
        }}
      >
        Documentation
        <DocsSVG
          color={theme.palette.text.primary}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
    </Container>
  );
};
