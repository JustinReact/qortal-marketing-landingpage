import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Wrapper } from "./MainLayout-styles";
import { useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
export interface LayoutProps {
  setTheme: (val: string) => void;
}

export const MainLayoutRoute: FC<LayoutProps> = ({ setTheme }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Wrapper
      className={
        location.pathname === "/"
          ? "BGImageMain"
          : location.pathname === "/promo"
          ? "BGImagePromo"
          : location.pathname === "/features"
          ? "BGImageFeatures"
          : location.pathname === "/qort"
          ? "BGQORTPage"
          : location.pathname === "/extension"
          ? "BGExtensionPage"
          : ""
      }
    >
      <Header setTheme={(val: string) => setTheme(val)} />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
