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
import { handleScrollToSectionFunc } from "../../../utils/handleScrollToSectionFunc";

export const Sidebar: FC<SidebarProps> = ({
  showInFullScreenMobile,
  setExpandedMobile,
  handleNavigation,
  sections
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [toggledSection, setToggledSection] = useState<string | null>(null);

  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1086px)");

  // Auto-expand the section that contains the active page after navigation
  useEffect(() => {
    Object.entries(sections).forEach(([sectionTitle, pages]) => {
      if (pages.some((page) => pathname.startsWith(page.url))) {
        setToggledSection(sectionTitle);
        setExpandedSection(sectionTitle);
      }
    });
  }, [pathname, sections]);

  // Highlight the active section based on the current scroll position
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2[id]"));
    const observer = new IntersectionObserver(handleIntersections, {
      root: null,
      threshold: 0.4,
    });
  
    function handleIntersections(entries: IntersectionObserverEntry[]) {
      let maxRatio = 0;
      let mostVisibleId: string | null = null;
  
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleId = entry.target.id;
        }
      });
  
      if (mostVisibleId) {
        setActiveSection(mostVisibleId);
      }
    }
  
    headings.forEach((heading) => observer.observe(heading));
  
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 5;
  
      if (bottomReached && headings.length > 0) {
        const lastHeading = headings[headings.length - 1];
        setActiveSection(lastHeading.id);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection((prev) => (prev === sectionTitle ? prev : sectionTitle));
  };

  return (
    <SidebarContainer
      showInFullScreenMobile={showInFullScreenMobile}
      isMobile={isMobile}
    >
      {Object.entries(sections).map(([sectionTitle, pages]) => {
        const isExpanded = expandedSection === sectionTitle;
        const isToggled = toggledSection === sectionTitle;
        return (
          <SectionBox key={sectionTitle}>
            <SectionTitleRow
              showInFullScreenMobile={showInFullScreenMobile}
              onClick={() => {
                if (isMobile) setExpandedMobile(true);

                // If already expanded, collapse it
                if (expandedSection === sectionTitle) {
                  setExpandedSection(null);
                } else {
                  if (!isToggled) {
                    handleNavigation(pages[0]?.url); // navigate if needed
                  }
                  setExpandedSection(sectionTitle);
                }
              }}
              isExpanded={isExpanded}
              isToggled={isToggled}
            >
              <SectionTitle>{sectionTitle}</SectionTitle>
              {!isMobile && (
                <ChevronIcon
                  showInFullScreenMobile={showInFullScreenMobile}
                  isExpanded={isExpanded}
                  isToggled={isToggled}
                  height="13px"
                  width="13px"
                  color={theme.palette.text.primary}
                />
              )}
            </SectionTitleRow>
            <>
              {pages.map((page) =>
                page.headings.length > 0 && isExpanded && !isMobile ? (
                  <SectionList key={page.url}>
                    {page.headings.map((heading) => {
                      return (
                        <SectionListItem
                          key={heading.title}
                          id={heading.id}
                          style={{
                            marginLeft: heading.depth === 3 ? "22px" : "0"
                          }}
                          aria-label="Navigate to page"
                          tabIndex={0}
                          role="button"
                          isActive={activeSection === heading.id}
                          onClick={() => handleScrollToSectionFunc(heading.id)}
                        >
                          {heading.title}
                        </SectionListItem>
                      );
                    })}
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
