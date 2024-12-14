"use client";
import { Fragment, useState, useRef, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { LeftDrawerLinks } from "./LeftDrawerLinks/LeftDrawerLinks";
import {
  TopOfPageRef,
  Wrapper,
  ScrollToTopButton,
  TopArrow,
  DrawerMobileIcon,
  ApiContainer,
  DocsNavContainer,
  BackHomeButton
} from "./Api-styles";
import { tableOfContents } from "../../data/QAppApi";
import { tableOfContents as tableOfContentsExtension } from "../../data/ExtensionApi";
import ReactGA from "react-ga4";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { DocState } from "../../constants/enums";
import { CurlyBackArrowSVG } from "../Common/Icons/CurlyBackArrowSVG";

type DocStateType = DocState.Q_APPS | DocState.EXTENSION;

const Api = () => {
  const theme = useTheme();
  const router = useRouter();

  const [selectedSection, setSelectedSection] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const [docState, setDocState] = useState<DocStateType>(DocState.Q_APPS);
  const topOfPageRef = useRef<HTMLDivElement | null>(null);
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
      setDocState(DocState.Q_APPS);
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
              selectedSection={selectedSection}
              openMobileDrawer={openMobileDrawer}
              setOpenMobileDrawer={() => {
                setOpenMobileDrawer(false);
              }}
              docState={docState}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <LeftDrawerLinks
        selectedSection={selectedSection}
        openMobileDrawer={openMobileDrawer}
        setOpenMobileDrawer={() => {
          setOpenMobileDrawer(false);
        }}
        docState={docState}
      />
      <ApiContainer>
    <TopOfPageRef ref={topOfPageRef} />
      <DocsNavContainer>
          <BackHomeButton
            onClick={() => {
              router.push("/");
            }}
          >
            <CurlyBackArrowSVG color={"#ffffff"} height={"22"} width={"22"} />
            Back Home
          </BackHomeButton>
        </DocsNavContainer>
        <Box>
          {docState === DocState.Q_APPS && (
            <>
              {tableOfContents.map(
                ({ Component, id, index, ...props }: any) => {
                  if (!Component) return null;
                  return (
                    <Fragment key={id}>
                      <Component
                        id={id}
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
                              id={id}
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
                        id={id}
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
                              id={id}
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
