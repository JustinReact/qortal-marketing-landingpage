"use client";
import { FC } from "react";
import { Container, Divider, DrawerButton } from "./MobileDrawer-styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { DocsSVG } from "../../Common/Icons/DocsSVG";
import { QortalSVG } from "../../Common/Icons/QortalSVG";
import ReactGA from "react-ga4";
import { HomeSVG } from "../../Common/Icons/HomeSVG";
import { useRouter } from "next/navigation";
import { ChromeStoreSVG } from "../../Common/Icons/ChromeStoreSVG";
import { BlogSVG } from "../../Common/Icons/BlogSVG";

interface MobileDrawerProps {
  setOpenMobileDrawer: () => void;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({
  setOpenMobileDrawer
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <Container>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Drawer Chrome Store Link",
            label: "Clicked Mobile Drawer Chrome Store Link"
          });
          setOpenMobileDrawer();
          window.open("https://discord.gg/YKdxYUSqZR", "_blank");
        }}
      >
        Install Qortal Browser Extension (Kiwi or Mises Browser)
        <ChromeStoreSVG
          color={theme.palette.text.primary}
          height={isMobile ? "75" : "25"}
          width={isMobile ? "75" : "25"}
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
      <Divider />
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Blog Reddit Link",
            label: "Clicked Mobile Blog Reddit Link"
          });
          setOpenMobileDrawer();
          router.push("/blog");
        }}
      >
        Blog
        <BlogSVG
          color={theme.palette.text.primary}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
    </Container>
  );
};
