"use client";
import React, { FC, useState, useTransition } from "react";
import { MainContainer, WikiContainer } from "./Wiki-styles";
import { Sidebar } from "./Sidebar/Sidebar";
import { WikiProps } from "../../app/wiki/types";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../../app/loading";

export const Wiki: FC<WikiProps> = ({ title, children, sections }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [loadingPage, setLoadingPage] = useState<string | null>(null);

  const handleNavigation = (url: string) => {
    setLoadingPage(url);
    startTransition(() => {
      router.push(url);
    });
  };

  console.log({sections});

  return (
    <WikiContainer>
      <Sidebar
        handleNavigation={(url: string) => {
          handleNavigation(url);
        }}
        sections={sections}
      />
      <MainContainer>
        {loadingPage ? <LoadingSpinner /> : children}
      </MainContainer>
    </WikiContainer>
  );
};
