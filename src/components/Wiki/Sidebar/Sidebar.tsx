"use client";
import React, { FC } from "react";
import { SidebarContainer, StyledLink } from "./Sidebar-styles";
import { usePathname } from "next/navigation";
import { SidebarProps } from "../../../app/wiki/types";

export const Sidebar: FC<SidebarProps> = ({pages}) => {
  const pathname = usePathname();
  return (
    <SidebarContainer>
      {pages.map((page) => (
        <StyledLink
          key={page.url}
          isActive={pathname === page.url}
          href={page.url}
          onClick={() => {
            window.location.href = page.url;
          }}
        >
          {page.title}
        </StyledLink>
      ))}
    </SidebarContainer>
  );
};
