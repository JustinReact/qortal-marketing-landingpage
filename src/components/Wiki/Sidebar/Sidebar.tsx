"use client";
import React, { FC } from "react";
import { SidebarContainer, StyledLink } from "./Sidebar-styles";
import { usePathname } from "next/navigation";
import { SidebarProps } from "../../../app/wiki/types";

export const Sidebar: FC<SidebarProps> = ({ handleNavigation, sections }) => {
  const pathname = usePathname();
  return (
    <SidebarContainer>
      {Object.entries(sections).map(([sectionTitle, pages]) => (
        <div key={sectionTitle}>
          <h3>{sectionTitle}</h3> {/* ✅ Section Title */}
          <ul>
            {pages.map((page) => (
              <li key={page.url}>
                <StyledLink
                  aria-label="Navigate to page"
                  tabIndex={0}
                  role="button"
                  isActive={pathname === page.url}
                  onClick={() => handleNavigation(page.url)}
                >
                  {page.title}
                </StyledLink>
                {/* ✅ Render Subheadings (## & ### from MDX) */}
                {page.headings.length > 0 && (
                  <ul>
                    {page.headings.map((heading) => (
                      <li
                        key={heading.title}
                        style={{
                          paddingLeft: heading.depth === 3 ? "1rem" : "0"
                        }}
                      >
                        {heading.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SidebarContainer>
  );
};
