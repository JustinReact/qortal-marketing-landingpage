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
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // ✅ Set active section based on id
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Observe in the viewport
      rootMargin: "0px 0px -40% 0px", // Adjust to detect sections entering view
      threshold: 0.1 // Trigger when at least 10% of the section is in view
    });

    // Observe all section headings (h2 elements with IDs)
    const sectionHeadings = document.querySelectorAll("h2[id]");
    sectionHeadings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
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
