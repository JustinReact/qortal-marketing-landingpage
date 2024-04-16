import { useLocation, useNavigate } from "react-router-dom";
import { FooterContainer, FooterLink } from "./Footer-styles";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterLink
        onClick={() => {
          navigate(`/support`);
        }}
        className={location.pathname === "/support" ? "active" : ""}
      >
        Support
      </FooterLink>
      <FooterLink
        onClick={() => {
          navigate(`/privacy`);
        }}
        className={location.pathname === "/privacy" ? "active" : ""}
      >
        Privacy Policy
      </FooterLink>
    </FooterContainer>
  );
};
