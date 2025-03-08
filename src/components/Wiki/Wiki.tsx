"use client";
import React, { FC, useEffect, useState, useTransition } from "react";
import { MainContainer, WikiContainer } from "./Wiki-styles";
import { Sidebar } from "./Sidebar/Sidebar";
import { WikiProps } from "../../app/wiki/types";
import { usePathname, useRouter } from "next/navigation";
import LoadingSpinner from "../../app/loading";
import { useMediaQuery } from "@mui/material";

export const Wiki: FC<WikiProps> = ({ title, children, sections }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 1130px)");
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [loadingPage, setLoadingPage] = useState<string | null>(null);
  const [isExpandedMobile, setExpandedMobile] = useState<boolean>(false);

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

  return (
    <WikiContainer>
      <Sidebar
        showInFullScreenMobile={isMobile && !isExpandedMobile}
        setExpandedMobile={setExpandedMobile}
        handleNavigation={(url: string) => {
          handleNavigation(url);
        }}
        sections={sections}
      />
      <MainContainer isMobile={isMobile} showInFullScreenMobile={isMobile && isExpandedMobile}>
        {loadingPage ? <LoadingSpinner /> : children}
      </MainContainer>
    </WikiContainer>
  );
};
