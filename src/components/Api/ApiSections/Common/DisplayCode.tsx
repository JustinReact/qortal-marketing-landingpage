import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import copy from "copy-to-clipboard";
import { Tooltip } from "@mui/material";
import { CodeWrapper, CopyCodeIcon } from "./Common-styles";
import { useTheme } from "@mui/material";

export const DisplayCode = ({ codeBlock, language = "javascript" }: any) => {
  const theme = useTheme();

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
      <Tooltip title={copyText} arrow placement="top">
        <CopyCodeIcon onClick={handleCopy} />
      </Tooltip>
      <Highlight
        theme={
          theme.palette.mode === "light" ? themes.oceanicNext : themes.nightOwl
        }
        code={codeBlock}
        language="javascript"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} stripe-code-block`}
            style={{
              ...style,
              padding: "30px 10px 20px 10px",
              overflowX: "auto",
              borderRadius: "7px",
              width: "100%",
              maxHeight: "800px",
              whiteSpace: "normal",
              overflowWrap: "anywhere"
            }}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                style={{ display: "flex" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "2em",
                    userSelect: "none",
                    opacity: "0.5",
                    marginRight: "8px",
                    fontSize: "14px"
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ flex: 1, fontSize: "18px" }}>
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
