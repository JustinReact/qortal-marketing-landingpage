import { styled } from "@mui/system";

// Styled components for MDX elements
const StyledLayout = styled("div")(({ theme }) => ({
  "& h1": {
    display: "none"
  },
  "& h2": {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginTop: "1rem",
    color: theme.palette.customBlue.main
  },
  "& p": {
    fontSize: "1rem",
    color: theme.palette.text.primary,  
    lineHeight: 1.6
  },
  "& a": {
    color: "#0070f3",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },

  "& pre": {
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
