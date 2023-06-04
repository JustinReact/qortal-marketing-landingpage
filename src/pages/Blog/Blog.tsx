import { FC } from "react";
import { Wrapper } from "../Docs/Api/Api-styles";
import { BlogTopicsCol } from "./Blog-styles";

interface BlogProps {
  setTheme: (theme: string) => void;
}

export const Blog: FC<BlogProps> = ({ setTheme }) => {
  return (
    <Wrapper>
      <BlogTopicsCol></BlogTopicsCol>
    </Wrapper>
  );
};
