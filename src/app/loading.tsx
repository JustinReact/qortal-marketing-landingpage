"use client";
import React from "react";
import { QortalSVG } from "../components/Common/Icons/QortalSVG";
import {
  LoadingContainer,
  LoadingQortalLogo
} from "../components/Common/Loader/Loader-styles";

const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      {[...Array(4)].map((_, i) => (
        <LoadingQortalLogo delay={i * 0.5} key={i}>
          <QortalSVG color="#fff" height={"80"} width={"80"} />
        </LoadingQortalLogo>
      ))}
    </LoadingContainer>
  );
};

export default LoadingSpinner;
