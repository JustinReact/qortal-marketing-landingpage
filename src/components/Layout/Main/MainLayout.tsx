import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Wrapper } from "./MainLayout-styles";
import { useLocation } from "react-router-dom";
export interface LayoutProps {
  setTheme: (val: string) => void;
}

export const MainLayoutRoute: FC<LayoutProps> = ({ setTheme }) => {
  const location = useLocation();
  return (
    <Wrapper className={location.pathname === "/" ? "BGImage" : ""}>
      <Header setTheme={(val: string) => setTheme(val)} />
      <Outlet />
    </Wrapper>
  );
};
