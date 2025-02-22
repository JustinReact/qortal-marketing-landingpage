"use client";
import React, { FC } from "react";
import {
  ChevronIcon,
  ContributeButton,
  SectionBox,
  SectionList,
  SectionListItem,
  SectionTitle,
  SectionTitleRow,
  SidebarContainer
} from "./Sidebar-styles";
import { usePathname } from "next/navigation";
import { SidebarProps } from "../../../app/wiki/types";
import { useMediaQuery, useTheme } from "@mui/material";
import ReactGA from "react-ga4";

export const Sidebar: FC<SidebarProps> = ({ handleNavigation, sections }) => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SidebarContainer>
      {Object.entries(sections).map(([sectionTitle, pages]) => (
        <SectionBox key={sectionTitle}>
          <SectionTitleRow>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <ChevronIcon
              height="13px"
              width="13px"
              color={theme.palette.text.primary}
            />
          </SectionTitleRow>
          <>
            {pages.map((page) =>
              page.headings.length > 0 ? (
                <SectionList key={page.url}>
                  {page.headings.map((heading) => (
                    <SectionListItem
                      key={heading.title}
                      style={{
                        paddingLeft: heading.depth === 3 ? "1rem" : "0"
                      }}
                      aria-label="Navigate to page"
                      tabIndex={0}
                      role="button"
                      isActive={pathname === page.url}
                      onClick={() => handleNavigation(page.url)}
                    >
                      {heading.title}
                    </SectionListItem>
                  ))}
                </SectionList>
              ) : null
            )}
          </>
        </SectionBox>
      ))}
      <ContributeButton           
      onClick={() => {
            ReactGA.event({
              category: "User",
              action: "Clicked Wiki Contribute Button",
              label: "Wiki Contribute Button"
            });
            // Change in PROD to master branch
            window.open("https://github.com/JustinReact/qortal-marketing-landingpage/tree/feature/wiki-implementation/src/app/wiki", "_blank");
          }}>
        Contribute
      </ContributeButton>
    </SidebarContainer>
  );
};
