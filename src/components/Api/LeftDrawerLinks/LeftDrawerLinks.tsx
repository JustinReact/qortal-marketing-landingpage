import { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  useTheme,
  Collapse,
  useMediaQuery
} from "@mui/material";
import { FC, useState } from "react";
import {
  CustomDrawer,
  QAppsLogo,
  DrawerText,
  DrawerSubText,
  CustomDrawerButton,
  HamburgerIcon
} from "./LeftDrawerLinks-styles";
import { tableOfContents } from "../../../data/QAppApi";
import { tableOfContents as tableOfContentsExtension } from "../../../data/ExtensionApi";

import { ThemeSelectRow } from "../../../components/Layout/Header/Header-styles";
import { LightModeSVG } from "../../../components/Common/Icons/LightModeSVG";
import { DarkModeSVG } from "../../../components/Common/Icons/DarkModeSVG";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ApiProps, DocState } from "../../../pages/Docs/Api/Api";
import Dropdown from "../Dropdown/Dropdown";

export const drawerWidth = 240;

interface LeftDrawerLinksProps extends ApiProps {
  selectedSection: string;
  openMobileDrawer: boolean;
  setTheme: (val: string) => void;
  setOpenMobileDrawer: () => void;
  docState: DocState;
  setDocState: (val: DocState)=> void
}

export const LeftDrawerLinks: FC<LeftDrawerLinksProps> = ({
  selectedSection,
  openMobileDrawer,
  setTheme,
  setOpenMobileDrawer,
  setDocState,
  docState
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openIndex, setOpenIndex] = useState<null | number>(null);

  return (
    <CustomDrawer
      drawerwidth={
        !isMobile
          ? drawerWidth
          : isMobile && openMobileDrawer
          ? drawerWidth
          : isMobile && !openMobileDrawer
          ? 0
          : drawerWidth
      }
      variant="permanent"
      anchor="left"
    >
      <ThemeSelectRow
        sx={{ paddingBottom: "15px", paddingLeft: "15px", gap: "20px" }}
      >
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
        <Dropdown setDocState={setDocState} docState={docState} />
      </ThemeSelectRow>
      <ThemeSelectRow
        sx={{ paddingBottom: "15px", paddingLeft: "15px", gap: "20px" }}
      >
         {docState === DocState.QAPP && (
          <QAppsLogo>
          Q-Apps <span>API</span>
        </QAppsLogo>
         )}
        {docState === DocState.EXTENSION && (
          <QAppsLogo>
          Extension <span>API</span>
        </QAppsLogo>
        )}
        
        <HamburgerIcon
          onClickFunc={() => setOpenMobileDrawer()}
          color={theme.palette.text.primary}
          height={"30"}
          width={"30"}
        />
      </ThemeSelectRow>
         <List>
         {(docState === DocState.EXTENSION ? tableOfContentsExtension : tableOfContents).map((section: any, index: number) => {
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
                     setOpenMobileDrawer();
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
                       section?.id === selectedSection ||
                       section?.subContent?.some(
                         (subSection: any) => subSection?.id === selectedSection
                       )
                         ? theme.palette.primary.dark
                         : ""
                   }}
                 >
                   <DrawerText primary={section.title} />
                   {section?.subContent?.length > 0 &&
                     index !== openIndex &&
                     !section?.subContent?.some(
                       (subSection: any) => subSection?.id === selectedSection
                     ) &&
                     section?.id !== selectedSection && <ExpandMoreIcon />}
                   {section?.subContent?.length > 0 &&
                     (index === openIndex ||
                       section?.subContent?.some(
                         (subSection: any) => subSection?.id === selectedSection
                       ) ||
                       section?.id === selectedSection) && <ExpandLessIcon />}
                 </CustomDrawerButton>
               </ListItem>
               <Collapse
                 in={
                   index === openIndex ||
                   section?.id === selectedSection ||
                   section?.subContent?.some(
                     (subSection: any) => subSection?.id === selectedSection
                   )
                 }
                 timeout="auto"
                 unmountOnExit
               >
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
                             setOpenMobileDrawer();
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
