import React, { useState } from 'react'

import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone'
import { Highlight, themes } from 'prism-react-renderer'
import copy from 'copy-to-clipboard'
import { Tooltip } from '@mui/material'

export const DisplayCode = ({ codeBlock, language = 'javascript' }: any) => {
  const [copyText, setCopyText] = useState('Copy')
  const handleCopy = () => {
    try {
      copy(codeBlock)
      setCopyText('Copied!')
      setTimeout(() => {
        setCopyText('Copy!')
      }, 3000)
    } catch (error) {}
  }

  return (
    <div style={{ position: 'relative' }}>
      <Tooltip title={copyText} arrow placement="top">
        <ContentPasteTwoToneIcon
          onClick={handleCopy}
          style={{
            position: 'absolute',
            right: '5px',
            top: '20px',
            fontSize: '20px',
            color: 'white',
            cursor: 'pointer'
          }}
        />
      </Tooltip>
      <Highlight theme={themes.nightOwl} code={codeBlock} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} stripe-code-block`}
            style={{
              ...style,
              padding: '30px 10px 20px 10px',
              overflowX: 'auto',
              borderRadius: '7px'
            }}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                style={{ display: 'flex' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    userSelect: 'none',
                    opacity: '0.5',
                    marginRight: '8px',
                    fontSize: '14px'
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ flex: 1, fontSize: '14px' }}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
