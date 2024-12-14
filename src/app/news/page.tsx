import NewsPostsClient from "../../components/News/NewsPostsClient";
import { groupApi } from "../../constants/endpoint";
import { NEWS_BASE } from "../../constants/Identifiers";
import { fetchAndEvaluateNews } from "../../utils/fetchAndEvaluateNews";

interface NewsPost {
  title: string;
  body: string;
  thumbnail: string;
  identifier: string;
  created: number;
}

type News = NewsPost[];

export const metadata = {
  title: "Qortal News",
  description: "Get the latest news and updates from the Qortal team"
};

const getNewsRawData = async (
  name: string,
  identifier: string,
  content: any
): Promise<NewsPost> => {
  const res = await fetchAndEvaluateNews({
    name,
    identifier,
    content
  });
  return res;
};

const getNews = async () => {
  try {
    // Fetch list of Bester's blogs resources from Qortal blockchain
    const url = `${groupApi}/arbitrary/resources/searchsimple?service=DOCUMENT&name=Bester&identifier=${NEWS_BASE}-&limit=20&mode=ALL&prefix=true&includemetadata=false&reverse=true`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      next: { revalidate: 60 } // Cache this data for 24 hours
    });
    const data = await response.json();
    let news: News = [];
    for (const content of data) {
      if (content.name && content.identifier) {
        const fullBlogData = await getNewsRawData(
          content.name,
          content.identifier,
          content
        );
        news.push(fullBlogData);
      }
    }
    return news;
  } catch (error) {
    console.error(error);
  }
};

const NewsPage = async (): Promise<JSX.Element> => {
  const news: News = (await getNews()) ?? []; // Default to an empty array if blogs is undefined
  console.log(news);

  if (!news || news.length === 0) {
    return <div>No news found</div>; // Fallback if no blogs are found
  }

  return <NewsPostsClient news={news} />;
};

export default NewsPage;
