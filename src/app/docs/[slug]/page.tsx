"use client";
import { Fragment, useState, useRef, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { LeftDrawerLinks } from "../../../components/Api/LeftDrawerLinks/LeftDrawerLinks";
import {
  TopOfPageRef,
  Wrapper,
  ScrollToTopButton,
  TopArrow,
  DrawerMobileIcon,
  ApiContainer
} from "../../../components/Api/Api-styles";
import { tableOfContents } from "../../../data/QAppApi";
import { tableOfContents as tableOfContentsExtension } from "../../../data/ExtensionApi";

import ReactGA from "react-ga4";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeProvider } from "../../../state/useTheme";
import { useParams, useRouter } from "next/navigation";

export enum DocState {
  QAPP,
  EXTENSION
}

export const Api = () => {
  const theme = useTheme();
  const { setTheme } = useThemeProvider();
  const [selectedSection, setSelectedSection] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const [docState, setDocState] = useState<DocState>(DocState.QAPP);
  const topOfPageRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const params = useParams<{ slug: string }>();

  const slug = params?.slug; // Extract 'slug' from the URL

  // Define content or logic based on the slug
  let pageTitle;
  let pageContent;

  if (slug === "q-apps") {
    pageTitle = "Q-Apps";
    pageContent = "This is the Q-Apps page with logic specific to Q-Apps.";
  } else if (slug === "extension") {
    pageTitle = "Extension";
    pageContent =
      "This is the Extension page with logic specific to Extension.";
  } else {
    pageTitle = "Unknown Page";
    pageContent = "This page does not exist.";
  }

  useEffect(() => {
    if (slug === "extension") {
      setDocState(DocState.EXTENSION);
    } else {
      setDocState(DocState.QAPP);
    }
  }, [slug]);

  // Tracking page view for Google Analytics
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "API"
    });
  }, []);

  // Intersection observer to show scroll to top button
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setShowButton(!entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (topOfPageRef?.current) {
      observer.observe(topOfPageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    if (topOfPageRef?.current) {
      topOfPageRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  // Variants for the framer-motion transition

  const mobileDrawerVariants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 95
      }
    },
    closed: {
      opacity: 0.2,
      x: -100,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <Wrapper>
      <TopOfPageRef ref={topOfPageRef} />
      {!openMobileDrawer && (
        <DrawerMobileIcon
          color={theme.palette.text.primary}
          height={"30"}
          width={"30"}
          onClickFunc={() => {
            setOpenMobileDrawer(true);
          }}
        />
      )}
      <AnimatePresence>
        {openMobileDrawer && (
          <motion.div
            animate={"opened"}
            initial={"closed"}
            exit={{ opacity: 0 }}
            variants={mobileDrawerVariants}
            style={{
              top: "-90px",
              position: "absolute",
              left: "-15px",
              right: "0",
              width: "fit-content",
              height: "100%",
              zIndex: 5
            }}
          >
            <LeftDrawerLinks
              setTheme={setTheme}
              selectedSection={selectedSection}
              openMobileDrawer={openMobileDrawer}
              setOpenMobileDrawer={() => {
                setOpenMobileDrawer(false);
              }}
              setDocState={setDocState}
              docState={docState}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <LeftDrawerLinks
        setTheme={setTheme}
        selectedSection={selectedSection}
        openMobileDrawer={openMobileDrawer}
        setOpenMobileDrawer={() => {
          setOpenMobileDrawer(false);
        }}
        setDocState={setDocState}
        docState={docState}
      />
      <ApiContainer>
        <Box>
          {docState === DocState.QAPP && (
            <>
              {tableOfContents.map(
                ({ Component, id, index, ...props }: any) => {
                  if (!Component) return null;
                  return (
                    <Fragment key={id}>
                      <Component
                        {...props}
                        setSelectedSection={setSelectedSection}
                      />
                      {props?.subContent?.map(
                        ({
                          Component: Component2,
                          id,
                          index,
                          ...props2
                        }: any) => {
                          if (!Component2) return null;
                          return (
                            <Component2
                              key={id}
                              {...props2}
                              setSelectedSection={setSelectedSection}
                            />
                          );
                        }
                      )}
                    </Fragment>
                  );
                }
              )}
            </>
          )}

          {docState === DocState.EXTENSION && (
            <>
              {tableOfContentsExtension.map(
                ({ Component, index, id, ...props }: any) => {
                  if (!Component) return null;
                  return (
                    <Fragment key={id}>
                      <Component
                        {...props}
                        setSelectedSection={setSelectedSection}
                      />
                      {props?.subContent?.map(
                        ({
                          Component: Component2,
                          id,
                          index,
                          ...props2
                        }: any) => {
                          if (!Component2) return null;
                          return (
                            <Component2
                              key={id}
                              {...props2}
                              setSelectedSection={setSelectedSection}
                            />
                          );
                        }
                      )}
                    </Fragment>
                  );
                }
              )}
            </>
          )}
        </Box>
        {showButton && (
          <ScrollToTopButton onClick={scrollToTop}>
            <TopArrow
              color={theme.palette.text.primary}
              height={"25"}
              width={"25"}
            />
          </ScrollToTopButton>
        )}
      </ApiContainer>
    </Wrapper>
  );
};

export default Api;
