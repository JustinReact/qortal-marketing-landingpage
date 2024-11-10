import NewsPostsClient from "../../components/News/NewsPostsClient";

export const metadata = {
  title: "Qortal News",
  description: "Get the latest news and updates from the Qortal team"
};

const news = [
  {
    title: "Qortal Blog - Explore the Latest About Qortal, Web3, and Decentralization",
    body: "Explore the latest blog posts about Qortal, Web3, decentralization, and much more, on the Qortal Blog!",
    thumbnail: "/images/News/NewsCardPreview.png",
    identifier: "newsPost1",
    created: 1630512000000
  }
];

const NewsPage = () => {
  return <NewsPostsClient news={news} />;
};

export default NewsPage;
