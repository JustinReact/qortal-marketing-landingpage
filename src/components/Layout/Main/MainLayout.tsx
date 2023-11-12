import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./MainLayout-styles";
import { useLocation } from "react-router-dom";
import { Header } from "../../../pages/Promo/Promo-styles";
export interface LayoutProps {
  setTheme: (val: string) => void;
}

export const MainLayoutRoute: FC<LayoutProps> = ({ setTheme }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};
