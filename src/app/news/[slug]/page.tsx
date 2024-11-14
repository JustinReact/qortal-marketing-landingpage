import { Metadata } from "next";
import NewsPostClient from "../../../components/News/NewsPostClient";
import { groupApi } from "../../../constants/endpoint";
import { NewsPost as NewsPostInteface } from "../../../components/News/NewsPostsClient";
import { fetchAndEvaluateNews } from "../../../utils/fetchAndEvaluateNews";
import { stripHtmlTags } from "../../../utils/stripHTMLTags";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getNewsPost = async (slug: string): Promise<NewsPostInteface | null> => {
  try {
    const url = `${groupApi}/arbitrary/resources/searchsimple?service=DOCUMENT&name=Bester&identifier=${slug}&limit=1&mode=ALL&prefix=true&includemetadata=false&reverse=true`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const newsResource = await response.json();
    const newsRawData = await fetchAndEvaluateNews({
      name: "Bester",
      identifier: slug,
      content: newsResource[0]
    });
    if (!newsRawData.isValid) {
      return null; // Invalid news post
    }
    return newsRawData;
  } catch (error) {
    console.error("Error fetching news post:", error);
    return null;
  }
};

// Dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const slug = params.slug;
    const url = `${groupApi}/arbitrary/resources/searchsimple?service=DOCUMENT&name=Bester&identifier=${slug}&limit=1&mode=ALL&prefix=true&includemetadata=false&reverse=true`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const newsResource = await response.json();
    // If th  news post doesn't exist, return default metadata for a "not found" page
    if (!newsResource) {
      return {
        title: "News post not found | Qortal News",
        description: "The news post you are looking for does not exist.",
        robots: {
          index: false // Optional: Prevent indexing of 404 pages
        }
      };
    }
    const newsRawData = await fetchAndEvaluateNews({
      name: "Bester",
      identifier: slug,
      content: newsResource[0]
    });
    const strippedDescription = stripHtmlTags(newsRawData.body).slice(0, 160);
    return {
      title: `${newsRawData.title} | Qortal Blog`,
      description: strippedDescription,
      openGraph: {
        title: newsRawData.title,
        description: strippedDescription,
        url: `https://qortal.dev/news/${slug}`,
        images: [
          {
            url: newsRawData.thumbnail,
            alt: newsRawData.title
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: newsRawData.title,
        description: strippedDescription,
        images: [newsRawData.thumbnail]
      }
    };
  } catch (error) {
    console.error("Error fetching news post:", error);
    return {
      title: "Error loading news post | Qortal News",
      description:
        "There was an error loading this news post. Please try again later.",
      robots: {
        index: false // Prevent indexing of error pages
      }
    };
  }
}

const NewsPost = async ({ params }: { params: { slug: string } }) => {
  const newsPost = await getNewsPost(params.slug);

  if (!newsPost) {
    return notFound();
  }


  return <NewsPostClient newsPost={newsPost} />;
};

export default NewsPost;
