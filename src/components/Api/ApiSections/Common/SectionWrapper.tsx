import React, { FC, useEffect, useState } from "react";
import { MainBox, SectionTitleText } from "./Common-styles";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
  children: React.ReactNode;
}
export const SectionWrapper: FC<SectionProps> = ({
  title,
  setSelectedSection,
  id,
  children
}) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.7
  });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (inView) {
      if (setSelectedSection && id) {
        setSelectedSection(id);
        setIsInView(true);
      }
    }
  }, [inView]);

  return (
    <MainBox id={id}>
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          top: "300px"
        }}
      />
      <SectionTitleText>{title}</SectionTitleText>
      <Box
        sx={{
          width: "100%"
        }}
      >
        {children}
      </Box>
    </MainBox>
  );
};
