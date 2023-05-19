import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Typography, Box } from "@mui/material";
import { CodeWrapper } from "./Common-styles";
import copy from "copy-to-clipboard";

export const DisplayCodeResponse = ({
  codeBlock,
  language = "javascript"
}: any) => {
  const [copyText, setCopyText] = useState("Copy");
  const handleCopy = () => {
    try {
      copy(codeBlock);
      setCopyText("Copied!");
      setTimeout(() => {
        setCopyText("Copy!");
      }, 3000);
    } catch (error) {}
  };

  return (
    <CodeWrapper>
      <Highlight theme={themes.github} code={codeBlock} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} stripe-code-block`}
            style={{
              ...style,
              padding: "10px",
              overflowX: "auto",
              borderRadius: "7px",
              maxHeight: "300px",
              width: "100%",
              whiteSpace: "normal",
              overflowWrap: "anywhere"
            }}
          >
            <Box
              sx={{
                padding: "5px",
                backgroundColor: "#d3d9e1",
                borderTopRightRadius: "7px",
                borderTopLeftRadius: "7px"
              }}
            >
              <Typography>RESPONSE</Typography>
            </Box>

            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                style={{ display: "flex" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    userSelect: "none",
                    opacity: "0.5",
                    marginRight: "8px",
                    fontSize: "16px"
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ flex: 1, fontSize: "14px" }}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </CodeWrapper>
  );
};
