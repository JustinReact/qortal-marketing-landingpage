"use client";
import React, { FC, useEffect, useState } from "react";
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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Auto-expand the section that contains the active page after navigation
  useEffect(() => {
    Object.entries(sections).forEach(([sectionTitle, pages]) => {
      if (pages.some((page) => pathname.startsWith(page.url))) {
        setExpandedSection(sectionTitle);
      }
    });
  }, [pathname, sections]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection((prev) => (prev === sectionTitle ? prev : sectionTitle));
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const contentContainer = document.getElementById("main-container"); // Target MainContainer ID in Wiki.tsx
  
    if (element && contentContainer) {
      contentContainer.scrollTo({
        top: element.offsetTop - contentContainer.offsetTop, // Scroll within MainContainer
        behavior: "smooth",
      });
    }
  };
  
  return (
    <SidebarContainer>
      {Object.entries(sections).map(([sectionTitle, pages]) => {
       const isExpanded = expandedSection === sectionTitle;
        return (
          <SectionBox key={sectionTitle}>
            <SectionTitleRow
              onClick={() => {
                if (isExpanded) return;
                handleNavigation(pages[0]?.url);
                toggleSection(sectionTitle);
              }}
              isExpanded={isExpanded}
            >
              <SectionTitle>{sectionTitle}</SectionTitle>
              <ChevronIcon
                isExpanded={isExpanded}
                height="13px"
                width="13px"
                color={theme.palette.text.primary}
              />
            </SectionTitleRow>
            <>
              {pages.map((page) =>
                page.headings.length > 0 && isExpanded ? (
                  <SectionList key={page.url}>
                    {page.headings.map((heading) => (
                      <SectionListItem
                        key={heading.title}
                        style={{
                          marginLeft: heading.depth === 3 ? "20px" : "0"
                        }}
                        aria-label="Navigate to page"
                        tabIndex={0}
                        role="button"
                        isActive={pathname === page.url}
                        onClick={() => handleScrollToSection(heading.id)}
                      >
                        {heading.title}
                      </SectionListItem>
                    ))}
                  </SectionList>
                ) : null
              )}
            </>
          </SectionBox>
        );
      })}
      <ContributeButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Wiki Contribute Button",
            label: "Wiki Contribute Button"
          });
          // Change in PROD to master branch
          window.open(
            "https://github.com/JustinReact/qortal-marketing-landingpage/tree/feature/wiki-implementation/src/app/wiki",
            "_blank"
          );
        }}
      >
        Contribute
      </ContributeButton>
    </SidebarContainer>
  );
};
