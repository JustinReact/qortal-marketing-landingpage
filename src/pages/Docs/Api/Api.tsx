import { FC, Fragment, useState, useRef, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { LeftDrawerLinks } from "../../../components/Api/LeftDrawerLinks/LeftDrawerLinks";
import {
  TopOfPageRef,
  Wrapper,
  ScrollToTopButton,
  TopArrow
} from "./Api-styles";
import { tableOfContents } from "../../../data/QAppApi";

export interface ApiProps {
  setTheme: (val: string) => void;
}

const Api: FC<ApiProps> = ({ setTheme }) => {
  const theme = useTheme();
  const [selectedSection, setSelectedSection] = useState("");
  const [showButton, setShowButton] = useState(false);

  const topOfPageRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <Wrapper>
      <LeftDrawerLinks setTheme={setTheme} selectedSection={selectedSection} />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "justify"
        }}
      >
        <TopOfPageRef ref={topOfPageRef} />
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
      </Box>
    </Wrapper>
  );
};

export default Api;
