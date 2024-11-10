"use client";
import React from "react";
import {
  MainNewsWrapper,
  NewsCard,
  NewsCardBody,
  NewsCardDate,
  NewsCardImage,
  NewsCardsGrid,
  NewsCardTitle,
  NewsCardWrapper,
  NewsTitle
} from "./NewsPostsClient-styles";
import ReactGA from "react-ga4";
import { useRouter } from "next/navigation";

export interface NewsPost {
  title: string;
  body: string;
  thumbnail: string;
  identifier: string;
  created: number;
}

interface NewsPostsClientProps {
  news: NewsPost[];
}

const NewsPostsClient: React.FC<NewsPostsClientProps> = ({news}) => {
  const router = useRouter();
  return (
    <MainNewsWrapper>
      <NewsTitle>News & Announcements</NewsTitle>
      <NewsCardsGrid>
        <NewsCard  aria-label="Download the Linux Desktop version of Qortal"
            tabIndex={0}
            onClick={() => {
              console.log("here11");
              // ReactGA.event({
              //   category: "User",
              //   action: `Clicked on news post: ${news.title} from news page`,
              //   label: `Clicked on news post: ${news.title} from news page`
              // });
              router.push(`/news/news1`);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // ReactGA.event({
                //   category: "User",
                //   action: `Clicked on news post: ${news.title} from news page`,
                //   label: `Clicked on news post: ${news.title} from news page`
                // });
                router.push(`/news/news1`);
              }
            }}>
          <NewsCardImage
            src="/images/News/NewsCardPreview.png"
            alt="news1"
            width={656}
            height={440}
            quality={100}
          />
          <NewsCardWrapper>
            <NewsCardTitle>Qortal v1.3.0 Released</NewsCardTitle>
            <NewsCardBody>
              Qortal v1.3.0 has been released! This update includes a new
              feature that allows users to stake their QORT and earn rewards.
              Check out the release notes for more information. We are excited
              to see how this new feature will impact the Qortal ecosystem.
            </NewsCardBody>
            <NewsCardDate>12/12/2021</NewsCardDate>
          </NewsCardWrapper>
        </NewsCard>
        <NewsCard>
          <NewsCardImage
            src="/images/News/NewsCardPreview.png"
            alt="news1"
            width={656}
            height={440}
            quality={100}
          />
          <NewsCardWrapper>
            <NewsCardTitle>Qortal v1.3.0 Released</NewsCardTitle>
            <NewsCardBody>
              Qortal v1.3.0 has been released! This update includes a new
              feature that allows users to stake their QORT and earn rewards.
              Check out the release notes for more information. We are excited
              to see how this new feature will impact the Qortal ecosystem.
            </NewsCardBody>
            <NewsCardDate>12/12/2021</NewsCardDate>
          </NewsCardWrapper>
        </NewsCard>
        <NewsCard>
          <NewsCardImage
            src="/images/News/NewsCardPreview.png"
            alt="news1"
            width={656}
            height={440}
            quality={100}
          />
          <NewsCardWrapper>
            <NewsCardTitle>Qortal v1.3.0 Released</NewsCardTitle>
            <NewsCardBody>
              Qortal v1.3.0 has been released! This update includes a new
              feature that allows users to stake their QORT and earn rewards.
              Check out the release notes for more information. We are excited
              to see how this new feature will impact the Qortal ecosystem.
            </NewsCardBody>
            <NewsCardDate>12/12/2021</NewsCardDate>
          </NewsCardWrapper>
        </NewsCard>
        <NewsCard>
          <NewsCardImage
            src="/images/News/NewsCardPreview.png"
            alt="news1"
            width={656}
            height={440}
            quality={100}
          />
          <NewsCardWrapper>
            <NewsCardTitle>Qortal v1.3.0 Released</NewsCardTitle>
            <NewsCardBody>
              Qortal v1.3.0 has been released! This update includes a new
              feature that allows users to stake their QORT and earn rewards.
              Check out the release notes for more information. We are excited
              to see how this new feature will impact the Qortal ecosystem.
            </NewsCardBody>
            <NewsCardDate>12/12/2021</NewsCardDate>
          </NewsCardWrapper>
        </NewsCard>
        <NewsCard>
          <NewsCardImage
            src="/images/News/NewsCardPreview.png"
            alt="news1"
            width={656}
            height={440}
            quality={100}
          />
          <NewsCardWrapper>
            <NewsCardTitle>Qortal v1.3.0 Released</NewsCardTitle>
            <NewsCardBody>
              Qortal v1.3.0 has been released! This update includes a new
              feature that allows users to stake their QORT and earn rewards.
              Check out the release notes for more information. We are excited
              to see how this new feature will impact the Qortal ecosystem.
            </NewsCardBody>
            <NewsCardDate>12/12/2021</NewsCardDate>
          </NewsCardWrapper>
        </NewsCard>
        <NewsCard>
          <NewsCardImage
            src="/images/News/NewsCardPreview.png"
            alt="news1"
            width={656}
            height={440}
            quality={100}
          />
          <NewsCardWrapper>
            <NewsCardTitle>Qortal v1.3.0 Released</NewsCardTitle>
            <NewsCardBody>
              Qortal v1.3.0 has been released! This update includes a new
              feature that allows users to stake their QORT and earn rewards.
              Check out the release notes for more information. We are excited
              to see how this new feature will impact the Qortal ecosystem.
            </NewsCardBody>
            <NewsCardDate>12/12/2021</NewsCardDate>
          </NewsCardWrapper>
        </NewsCard>
      </NewsCardsGrid>
    </MainNewsWrapper>
  );
};

export default NewsPostsClient;
