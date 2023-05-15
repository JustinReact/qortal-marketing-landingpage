import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
  Collapse
} from '@mui/material'
import React, { FC, useState } from 'react'
import { DrawerLinkParent } from './LeftDrawerLinks-styles'
import { tableOfContents } from '../../../data/QAppApi'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
export const drawerWidth = 240

interface LeftDrawerLinksProps {
  selectedSection: string
}

export const LeftDrawerLinks: FC<LeftDrawerLinksProps> = ({
  selectedSection
}) => {
  const theme = useTheme()
  const [openIndex, setOpenIndex] = useState<null | number>(null)
  return (
    <DrawerLinkParent>
      <Box
        sx={{
          height: '80px'
        }}
      >
        <Typography>Q-App Api</Typography>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '80px',
            borderRight: 'none',
            backgroundColor: theme.palette.background.default,
            paddingBottom: '80px',
            overflowY: 'auto',

            '&::-webkit-scrollbar': {
              width: '16px',
              height: '10px',
              backgroundColor: 'transparent' // Hide scrollbar by default
            },

            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent'
            },

            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'transparent', // Hide scrollbar thumb by default
              borderRadius: '8px',
              backgroundClip: 'content-box',
              border: '4px solid transparent'
            },

            '&:hover::-webkit-scrollbar-thumb': {
              // Add this block
              backgroundColor:
                theme.palette.mode === 'light'
                  ? `${theme.palette.primary.main}`
                  : `${theme.palette.secondary.light}`
            },

            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor:
                theme.palette.mode === 'light'
                  ? `${theme.palette.primary.dark}`
                  : '#4e50a1'
            }
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {tableOfContents.map((section: any, index: number) => {
            return (
              <>
                <ListItem
                  key={section.title}
                  disablePadding
                  onClick={() => {
                    const my_element = document.getElementById(section?.id)
                    if (my_element) {
                      my_element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                      })
                    }
                    if (section?.subContent?.length > 0) {
                      if (index === openIndex) {
                        setOpenIndex(null)
                        return
                      }
                      setOpenIndex(index)
                    }
                  }}
                >
                  <ListItemButton
                    sx={{
                      backgroundColor:
                        section?.id === selectedSection ? 'red' : ''
                    }}
                  >
                    <ListItemText primary={section.title} />
                    {section?.subContent?.length > 0 && index !== openIndex && (
                      <ExpandMoreIcon />
                    )}
                    {section?.subContent?.length > 0 && index === openIndex && (
                      <ExpandLessIcon />
                    )}
                  </ListItemButton>
                </ListItem>
                <Collapse in={index === openIndex} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {section?.subContent?.map((subSection: any) => {
                      return (
                        <ListItem
                          key={subSection.title}
                          disablePadding
                          onClick={() => {
                            const my_element = document.getElementById(
                              subSection?.id
                            )
                            if (my_element) {
                              my_element.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                                inline: 'nearest'
                              })
                            }
                          }}
                        >
                          <ListItemButton
                            sx={{
                              backgroundColor:
                                subSection?.id === selectedSection ? 'red' : ''
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: '12px'
                              }}
                            >
                              {subSection.title}
                            </Typography>
                          </ListItemButton>
                        </ListItem>
                      )
                    })}
                  </List>
                </Collapse>
              </>
            )
          })}
        </List>
      </Drawer>
    </DrawerLinkParent>
  )
}
