"use client";
import React, {
  FC,
  Fragment,
  useEffect,
  useRef,
  useState,
  useTransition
} from "react";
import {
  ChevronIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FooterRow,
  FooterSubRow,
  MainContainer,
  MobileSectionList,
  MobileSectionListContainer,
  ScrollToTopButton,
  SectionTitleMobile,
  TopArrow,
  TopOfPageRef,
  WikiContainer
} from "./Wiki-styles";
import { Sidebar } from "./Sidebar/Sidebar";
import { WikiProps } from "../../app/wiki/types";
import { usePathname, useRouter } from "next/navigation";
import LoadingSpinner from "../../app/loading";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { handleScrollToSectionFunc } from "../../utils/handleScrollToSectionFunc";

export const Wiki: FC<WikiProps> = ({ title, children, sections }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 1086px)");
  const pathname = usePathname();
  const theme = useTheme();
  const topOfPageRef = useRef<HTMLDivElement | null>(null);

  const [isPending, startTransition] = useTransition();
  const [loadingPage, setLoadingPage] = useState<string | null>(null);
  const [isExpandedMobile, setExpandedMobile] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);

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

  // Intersection observer to show scroll to top button
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (topOfPageRef.current) {
      observer.observe(topOfPageRef.current);
    }

    return () => {
      if (topOfPageRef.current) observer.unobserve(topOfPageRef.current);
    };
  }, []);

  const scrollToTop = () => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <TopOfPageRef ref={topOfPageRef} />
        {loadingPage ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Show this header on mobile, and only if they've clicked on a section title */}
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
                {Object.entries(sections).map(([_, pages]) => (
                  <Fragment key={_}>
                    {pages
                      .filter((page) => page.url === pathname)
                      .map((page) => (
                        <MobileSectionList key={page.url}>
                          {page.headings
                            .filter((heading) => heading.depth === 2)
                            .map((heading) => (
                              <SectionTitleMobile
                                key={heading.id}
                                onClick={() =>
                                  handleScrollToSectionFunc(heading.id)
                                }
                              >
                                {heading.title}
                              </SectionTitleMobile>
                            ))}
                        </MobileSectionList>
                      ))}
                  </Fragment>
                ))}
              </MobileSectionListContainer>
            )}

            {children}
            {showButton && (
              <ScrollToTopButton onClick={scrollToTop}>
                <TopArrow
                  color={theme.palette.text.primary}
                  height={"25"}
                  width={"25"}
                />
              </ScrollToTopButton>
            )}
            {/* Show this footer on mobile, and only if they've clicked on a section title */}
            {isMobile && isExpandedMobile && (
              <FooterRow>
                {(() => {
                  const allPages = Object.values(sections).flat();
                  const currentIndex = allPages.findIndex(
                    (page) => page.url === pathname
                  );
                  const previousPage =
                    currentIndex > 0 ? allPages[currentIndex - 1] : null;

                  return previousPage ? (
                    <FooterSubRow
                      role="button"
                      tabIndex={0}
                      onClick={() => handleNavigation(previousPage.url)}
                    >
                      <ChevronLeftIcon
                        color={theme.palette.text.primary}
                        height="20px"
                        width="20px"
                      />
                      <Typography>{previousPage.title}</Typography>
                    </FooterSubRow>
                  ) : null;
                })()}

                {(() => {
                  const allPages = Object.values(sections).flat();
                  const currentIndex = allPages.findIndex(
                    (page) => page.url === pathname
                  );
                  const nextPage =
                    currentIndex < allPages.length - 1
                      ? allPages[currentIndex + 1]
                      : null;

                  return nextPage ? (
                    <FooterSubRow
                      role="button"
                      tabIndex={0}
                      onClick={() => handleNavigation(nextPage.url)}
                    >
                      <Typography>{nextPage.title}</Typography>
                      <ChevronRightIcon
                        color={theme.palette.text.primary}
                        height="20px"
                        width="20px"
                      />
                    </FooterSubRow>
                  ) : null;
                })()}
              </FooterRow>
            )}
          </>
        )}
      </MainContainer>
    </WikiContainer>
  );
};
