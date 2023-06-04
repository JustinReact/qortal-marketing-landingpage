import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DiscordSVG } from "../../Common/Icons/DiscordSVG";
import { Container, Divider, DrawerButton } from "./MobileDrawer-styles";
import { useTheme } from "@mui/material";
import { DocsSVG } from "../../Common/Icons/DocsSVG";
import { BlogSVG } from "../../Common/Icons/BlogSVG";

interface MobileDrawerProps {
  setOpenMobileDrawer: () => void;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({
  setOpenMobileDrawer
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          window.open("https://discord.gg/DRyQ79xqhd", "_blank");
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
          setOpenMobileDrawer();
          navigate("/docs/api");
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
          setOpenMobileDrawer();
          navigate("/blog");
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
