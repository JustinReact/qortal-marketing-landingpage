import NewsPostsClient, {
  type NewsPost
} from "../../components/News/NewsPostsClient";
import { NEWS_BASE } from "../../constants/Identifiers";
import { fetchAllNewsPosts } from "../../utils/fetchQortalPosts";

export const metadata = {
  title: "Qortal News",
  description: "Get the latest news and updates from the Qortal team"
};

const NewsPage = async (): Promise<JSX.Element> => {
  let news: NewsPost[] = [];
  try {
    news = await fetchAllNewsPosts(`${NEWS_BASE}-`);
  } catch (error) {
    console.error(error);
  }

  const validNews = news.filter((item) => item?.isValid);
  if (validNews.length === 0) {
    return <div>No news found</div>;
  }

  return <NewsPostsClient news={validNews} />;
};

export default NewsPage;
