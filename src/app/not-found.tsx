"use client";
import {
  Container,
  HeaderText,
  BackButton,
  HeaderRow
} from "../components/NotFound/NotFound-styles";
import { useTheme } from "@mui/material";
import { WarningSVG } from "../components/Common/Icons/WarningSVG";

export const NotFound = () => {
  const theme = useTheme();

  return (
    <Container>
      <HeaderRow>
        <WarningSVG
          color={theme.palette.text.primary}
          height={"35"}
          width={"35"}
        />
        <HeaderText variant="h1">404</HeaderText>
      </HeaderRow>
      <HeaderText variant="h2">Page Not Found</HeaderText>
      <BackButton href="/">Back Home</BackButton>
    </Container>
  );
};

export default NotFound;
