import "highlight.js/styles/atom-one-dark.css"; // ✅ Use VS Code Dark theme
import hljs from "highlight.js";
import { styled } from "@mui/system";
import { oxygen } from "../fonts";
import { useEffect } from "react";

// Styled components for MDX elements
const StyledLayout = styled("div")(({ theme }) => ({
  "& h1": {
    fontFamily: oxygen.style.fontFamily,
    letterSpacing: 0,
    lineHeight: "27px",
    fontSize: "30px",
    margin: "0 0 20px 0",
    fontWeight: 600,
    color: theme.palette.text.primary
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
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  }
}));

export const MDXComponents = ({ children }: any) => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
  
      // Wrap code block with a container that holds the copy button
      const parentPre = block.parentElement;
      
      if (parentPre && !parentPre.querySelector(".copy-btn")) { // Avoid duplicates
        parentPre.style.position = "relative";
  
        const copyButton = document.createElement("button");
        copyButton.innerText = "Copy";
        copyButton.className = "copy-btn";
        
        // Styling the copy button
        Object.assign(copyButton.style, {
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "12px",
          transition: "background-color 0.2s",
        });
  
        // Copying text to clipboard
        copyButton.onclick = async () => {
          try {
            await navigator.clipboard.writeText(block.textContent || "");
            copyButton.innerText = "Copied!";
            setTimeout(() => (copyButton.innerText = "Copy"), 2000);
          } catch (err) {
            console.error("Failed to copy text: ", err);
          }
        };
  
        parentPre.style.position = "relative";
        parentPre.appendChild(copyButton);
      }
    });
  }, []);
  
  return <StyledLayout>{children}</StyledLayout>;
};
