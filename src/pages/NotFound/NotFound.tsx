import {
  Container,
  HeaderText,
  BackButton,
  HeaderRow,
} from "./NotFound-styles";
import { useTheme } from "@mui/material";
import { WarningSVG } from "../../components/Common/Icons/WarningSVG";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
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
      <BackButton
        onClick={() => {
          navigate("/");
        }}
      >
        Back Home
      </BackButton>
    </Container>
  );
};
