import { Box, useTheme } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import {
  LeftDrawerLinks,
  drawerWidth
} from '../../../components/Api/LeftDrawerLinks/LeftDrawerLinks'
import { Wrapper } from './Api-styles'
import { tableOfContents } from '../../../data/QAppApi'
interface ApiProps {
  setTheme: (val: string) => void
}
const Api: FC<ApiProps> = ({ setTheme }) => {
  const theme = useTheme()
  const [selectedSection, setSelectedSection] = useState('')

  return (
    <Wrapper>
      <Box
        sx={{
          width: drawerWidth,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <LeftDrawerLinks selectedSection={selectedSection} />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            height: '50px'
          }}
        >
          right header
        </Box>
        <Box>
          {tableOfContents.map(({ Component, ...props }: any) => {
            if (!Component) return null
            return (
              <>
                <Component {...props} setSelectedSection={setSelectedSection} />
                {props?.subContent?.map(
                  ({ Component: Component2, ...props2 }: any) => {
                    if (!Component2) return null

                    return (
                      <Component2
                        {...props2}
                        setSelectedSection={setSelectedSection}
                      />
                    )
                  }
                )}
              </>
            )
          })}
        </Box>
      </Box>
    </Wrapper>
  )
}

export default Api
