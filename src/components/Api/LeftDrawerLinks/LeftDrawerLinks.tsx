import { Fragment } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
  Collapse
} from "@mui/material";
import { FC, useState } from "react";
import {
  CustomDrawer,
  QAppsLogo,
  DrawerText,
  DrawerSubText,
  CustomDrawerButton
} from "./LeftDrawerLinks-styles";
import { tableOfContents } from "../../../data/QAppApi";
import { ThemeSelectRow } from "../../../components/Layout/Header/Header-styles";
import { LightModeSVG } from "../../../components/Common/Icons/LightModeSVG";
import { DarkModeSVG } from "../../../components/Common/Icons/DarkModeSVG";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ApiProps } from "../../../pages/Docs/Api/Api";

export const drawerWidth = 240;

interface LeftDrawerLinksProps extends ApiProps {
  selectedSection: string;
}

export const LeftDrawerLinks: FC<LeftDrawerLinksProps> = ({
  selectedSection,
  setTheme
}) => {
  const theme = useTheme();
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  return (
    <CustomDrawer drawerwidth={drawerWidth} variant="permanent" anchor="left">
      <ThemeSelectRow sx={{ paddingBottom: "15px", paddingLeft: "12px" }}>
        {theme.palette.mode === "dark" ? (
          <LightModeSVG
            onClickFunc={() => setTheme("light")}
            color="white"
            height="22"
            width="22"
          />
        ) : (
          <DarkModeSVG
            onClickFunc={() => setTheme("dark")}
            color="black"
            height="22"
            width="22"
          />
        )}
        <QAppsLogo>Q-Apps Docs</QAppsLogo>
      </ThemeSelectRow>
      <List>
        {tableOfContents.map((section: any, index: number) => {
          return (
            <Fragment key={section.title}>
              <ListItem
                disablePadding
                onClick={() => {
                  const my_element = document.getElementById(section?.id);
                  if (my_element) {
                    my_element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest"
                    });
                  }
                  if (section?.subContent?.length > 0) {
                    if (index === openIndex) {
                      setOpenIndex(null);
                      return;
                    }
                    setOpenIndex(index);
                  }
                }}
              >
                <CustomDrawerButton
                  sx={{
                    backgroundColor:
                      section?.id === selectedSection
                        ? theme.palette.primary.dark
                        : ""
                  }}
                >
                  <DrawerText primary={section.title} />
                  {section?.subContent?.length > 0 && index !== openIndex && (
                    <ExpandMoreIcon />
                  )}
                  {section?.subContent?.length > 0 && index === openIndex && (
                    <ExpandLessIcon />
                  )}
                </CustomDrawerButton>
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
                          );
                          if (my_element) {
                            my_element.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                              inline: "nearest"
                            });
                          }
                        }}
                      >
                        <ListItemButton
                          sx={{
                            backgroundColor:
                              subSection?.id === selectedSection
                                ? theme.palette.primary.dark
                                : ""
                          }}
                        >
                          <DrawerSubText>{subSection.title}</DrawerSubText>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </Fragment>
          );
        })}
      </List>
    </CustomDrawer>
  );
};
