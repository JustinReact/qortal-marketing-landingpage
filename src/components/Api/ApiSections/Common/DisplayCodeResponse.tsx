import React, { useState } from 'react'

import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone'
import { Highlight, themes } from 'prism-react-renderer'
import copy from 'copy-to-clipboard'
import { Tooltip, Typography, Box } from '@mui/material'

export const DisplayCodeResponse = ({
  codeBlock,
  language = 'javascript'
}: any) => {
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
      <Highlight theme={themes.github} code={codeBlock} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} stripe-code-block`}
            style={{
              ...style,
              padding: '10px',
              overflowX: 'auto',
              borderRadius: '7px',
              maxHeight: '300px'
            }}
          >
            <Box
              sx={{
                padding: '5px',
                backgroundColor: '#d3d9e1',
                borderTopRightRadius: '7px',
                borderTopLeftRadius: '7px'
              }}
            >
              <Typography>RESPONSE</Typography>
            </Box>

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
