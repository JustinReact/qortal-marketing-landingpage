import React from 'react'
import type { Metadata } from "next";
import LandingPage from '../components/LandingPage/LandingPage';
import { SITE_DESCRIPTION, SITE_TITLE } from "../constants/siteMetadata";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  }
}

const HomePage = () => {
  return <LandingPage />
}

export default HomePage;
