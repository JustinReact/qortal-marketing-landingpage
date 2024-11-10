import NewsPostClient from "../../../components/News/NewsPostClient";

const NewsPost = async ({ params }: { params: { slug: string } }) => {
  // const blogPost = await getBlogPost(params.slug);

  // if (!blogPost) {
  //   return notFound();
  // }

  const newsPost = {
    title:
      "Qortal Blog - Explore the Latest About Qortal, Web3, and Decentralization",
    body: "Explore the latest blog posts about Qortal, Web3, decentralization, and much more, on the Qortal Blog!",
    thumbnail: "/images/News/NewsCardPreview.png",
    identifier: "newsPost1",
    created: 1630512000000
  };

  return <NewsPostClient newsPost={newsPost} />;
};

export default NewsPost;
