import { styled } from "@mui/system";
import { oxygen } from "../fonts";

// Styled components for MDX elements
const StyledLayout = styled("div")(({ theme }) => ({
  "& h1": {
    display: "none"
  },
  "& h2": {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginTop: "1rem",
    fontFamily: oxygen.style.fontFamily,
    color: theme.palette.customBlue.main
  },
  "& p": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "1rem",
    color: theme.palette.text.primary,  
    lineHeight: 1.6,
  },
  "& a": {
    fontFamily: oxygen.style.fontFamily,
    color: "#0070f3",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  "& ul, li": {
    fontFamily: oxygen.style.fontFamily,
  },
  "& pre": {
    fontFamily: oxygen.style.fontFamily,
    background: "#1e1e1e",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    overflowX: "auto"
  }
}));

export const MDXComponents = ({ children }: any) => {
  return <StyledLayout>{children}</StyledLayout>;
};
