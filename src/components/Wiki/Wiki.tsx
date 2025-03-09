"use client";
import React, { FC, useEffect, useState, useTransition } from "react";
import {
  ChevronIcon,
  MainContainer,
  MobileSectionList,
  MobileSectionListContainer,
  SectionTitleMobile,
  WikiContainer
} from "./Wiki-styles";
import { Sidebar } from "./Sidebar/Sidebar";
import { WikiProps } from "../../app/wiki/types";
import { usePathname, useRouter } from "next/navigation";
import LoadingSpinner from "../../app/loading";
import { useMediaQuery, useTheme } from "@mui/material";

export const Wiki: FC<WikiProps> = ({ title, children, sections }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 1130px)");
  const pathname = usePathname();
  const theme = useTheme();

  const [isPending, startTransition] = useTransition();
  const [loadingPage, setLoadingPage] = useState<string | null>(null);
  const [isExpandedMobile, setExpandedMobile] = useState<boolean>(false);

  console.log(pathname, "pathname");
  const handleNavigation = (url: string) => {
    setLoadingPage(url);
    startTransition(() => {
      router.push(url);
    });
  };

  // If on mobile, check if the pathname is anything but /wiki. If it is, automatically set isExpandedMobile to true
  useEffect(() => {
    if (isMobile && pathname !== "/wiki") {
      setExpandedMobile(true);
    }
  }, [pathname, isMobile]);

  console.log(sections, "sections");

  return (
    <WikiContainer
      isMobile={isMobile}
      showInFullScreenMobile={isMobile && isExpandedMobile}
    >
      <Sidebar
        showInFullScreenMobile={isMobile && !isExpandedMobile}
        setExpandedMobile={setExpandedMobile}
        handleNavigation={(url: string) => {
          handleNavigation(url);
        }}
        sections={sections}
      />
      <MainContainer
        isMobile={isMobile}
        showInFullScreenMobile={isMobile && isExpandedMobile}
      >
        {/* Show this only on mobile, and only if they've clicked on a Section Title */}
        {isMobile && isExpandedMobile && (
          <MobileSectionListContainer>
            <ChevronIcon
              color={theme.palette.text.primary}
              height="20px"
              width="20px"
              onClickFunc={() => {
                setExpandedMobile(false);
                handleNavigation("/wiki");
              }}
            />
            <>
              {Object.entries(sections).map(([_, pages]) => (
                <>
                  {pages
                    .filter((page) => page.url === pathname)
                    .map((page) => {
                      return (
                        <MobileSectionList key={page.url}>
                          <>
                            {page.headings
                              .filter((heading) => heading.depth === 2)
                              .map((heading) => (
                                <SectionTitleMobile
                                  key={heading.id}
                                  // onClick={() => handleNavigation(`${page.url}#${heading.id}`)}
                                >
                                  {heading.title}
                                </SectionTitleMobile>
                              ))}
                          </>
                        </MobileSectionList>
                      );
                    })}
                </>
              ))}
            </>
          </MobileSectionListContainer>
        )}
        {loadingPage ? <LoadingSpinner /> : children}
      </MainContainer>
    </WikiContainer>
  );
};
