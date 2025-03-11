import "highlight.js/styles/atom-one-dark.css"; // ✅ Use VS Code Dark theme
import hljs from "highlight.js";
import { styled } from "@mui/system";
import { oxygen } from "../fonts";
import { useEffect } from "react";

// Styled components for MDX elements
const StyledLayout = styled("div")(({ theme }) => ({
  "& h1": {
    display: "none"
  },
  "& h2": {
    fontFamily: oxygen.style.fontFamily,
    letterSpacing: 0,
    lineHeight: "27px",
    fontSize: "27px",
    margin: "15px 0",
    fontWeight: 600,
    color: theme.palette.customBlue.main
  },
  "& h3": {
    fontFamily: oxygen.style.fontFamily,
    letterSpacing: 0,
    lineHeight: "27px",
    fontSize: "22px",
    fontWeight: 600,
    color: theme.palette.text.primary
  },
  "& p": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "20px",
    letterSpacing: 0,
    fontWeight: 400,
    lineHeight: "30px",
    color: theme.palette.text.primary,  
    margin: "0 0 10px 0"
  },
  "& a": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "30px",
    color: "#0070f3",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  "& ul, li": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "30px",
  },
  "& pre": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "30px",
    color: "#fff",
    borderRadius: "5px",
    overflowX: "auto"
  }
}));

export const MDXComponents = ({ children }: any) => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }, []);
  return <StyledLayout>{children}</StyledLayout>;
};
