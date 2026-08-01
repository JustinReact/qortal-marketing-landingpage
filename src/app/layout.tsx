import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import LayoutProvider from "./layout-provider";
import DeferredNotification from "../components/Common/Notification/DeferredNotification";
import { SITE_DESCRIPTION, SITE_TITLE } from "../constants/siteMetadata";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Qortal"
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "https://res.cloudinary.com/unnamed/image/upload/v1686728321/Q-AppsLogo_ola6of.webp",
        alt: "Q-Apps Logo",
        width: 1200,
        height: 1200
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  alternates: {
    canonical: "https://qortal.dev"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <LayoutProvider>
            <DeferredNotification />
            {children}
          </LayoutProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
