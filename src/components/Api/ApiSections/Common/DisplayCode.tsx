import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import copy from "copy-to-clipboard";
import { Tooltip } from "@mui/material";
import { CodeWrapper, CopyCodeIcon, DisplayCodePre } from "./Common-styles";
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
          <DisplayCodePre
            className={`${className} stripe-code-block`}
            style={{ ...style }}
          >
            {tokens.map((line, i) => {
              const { key: lineKey, ...lineProps } = getLineProps({ line });
              return (
                <div
                  key={i}
                  {...lineProps}
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
                    {line.map((token, key) => {
                      const { key: tokenKey, ...tokenProps } = getTokenProps({ token });
                      return <span key={key} {...tokenProps} />;
                    })}
                  </span>
                </div>
              );
            })}
          </DisplayCodePre>
        )}
      </Highlight>
    </CodeWrapper>
  );
};
