import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Wrapper } from "./MainLayout-styles";
import { useLocation } from "react-router-dom";
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
          : ""
      }
    >
      <Header setTheme={(val: string) => setTheme(val)} />
      <Outlet />
    </Wrapper>
  );
};
