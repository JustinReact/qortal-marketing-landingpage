import BlogPostsClient, {
  type BlogPost
} from "../../components/Blog/BlogPostsClient";
import { BLOG_BASE } from "../../constants/Identifiers";
import { fetchAllBlogPosts } from "../../utils/fetchQortalPosts";

export const metadata = {
  title: 'Qortal Blog - Explore the Latest About Qortal, Web3, and Decentralization',
  description: 'Explore the latest blog posts about Qortal, Web3, decentralization, and much more, on the Qortal Blog!',
};

export const dynamic = "force-dynamic";

const BlogPage = async (): Promise<JSX.Element> => {
  let blogs: BlogPost[] = [];
  try {
    blogs = await fetchAllBlogPosts(`${BLOG_BASE}-`, 3600);
  } catch (error) {
    console.error(error);
  }

  const validBlogs = blogs.filter((blog) => blog?.isValid);
  const newBlogs = validBlogs.filter(
    (blog) => blog.identifier !== "qortal-dev-blog-MnVXFVKP5P"
  );
  if (newBlogs.length === 0) {
    return <div>No blogs found</div>;
  }

  return <BlogPostsClient blogs={newBlogs} />;
};

export default BlogPage;
