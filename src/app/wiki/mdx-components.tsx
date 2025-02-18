import type { MDXComponents } from "mdx/types";
import { styled } from "@mui/system";

// Styled components for MDX elements
const StyledH1 = styled("h1")`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem;
  color: #222;
`;

const StyledH2 = styled("h2")`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
  color: #333;
`;

const StyledP = styled("p")`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const StyledA = styled("a")`
  color: #0070f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledCodeBlock = styled("pre")`
  background: #1e1e1e;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
`;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <StyledH1 {...props} />,
    h2: (props) => <StyledH2 {...props} />,
    p: (props) => <StyledP {...props} />,
    a: (props) => <StyledA {...props} />,
    pre: (props) => <StyledCodeBlock {...props} />,
  };
}
