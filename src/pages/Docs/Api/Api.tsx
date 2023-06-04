import { FC, Fragment, useState, useRef, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { LeftDrawerLinks } from "../../../components/Api/LeftDrawerLinks/LeftDrawerLinks";
import {
  TopOfPageRef,
  Wrapper,
  ScrollToTopButton,
  TopArrow,
  DrawerMobileIcon,
  ApiContainer
} from "./Api-styles";
import { tableOfContents } from "../../../data/QAppApi";
import ReactGA from "react-ga4";
import { motion, AnimatePresence } from "framer-motion";

export interface ApiProps {
  setTheme: (val: string) => void;
}

const Api: FC<ApiProps> = ({ setTheme }) => {
  const theme = useTheme();
  const [selectedSection, setSelectedSection] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

  const topOfPageRef = useRef<HTMLDivElement | null>(null);

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
      />
      <ApiContainer>
        <Box>
          {tableOfContents.map(({ Component, index, ...props }: any) => {
            if (!Component) return null;
            return (
              <Fragment key={index}>
                <Component {...props} setSelectedSection={setSelectedSection} />
                {props?.subContent?.map(
                  ({ Component: Component2, index, ...props2 }: any) => {
                    if (!Component2) return null;
                    return (
                      <Component2
                        key={index}
                        {...props2}
                        setSelectedSection={setSelectedSection}
                      />
                    );
                  }
                )}
              </Fragment>
            );
          })}
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
