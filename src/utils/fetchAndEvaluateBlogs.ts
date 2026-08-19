import { groupApi } from "../constants/endpoint";
import { checkStructureBlog } from "./checkStructure";
import { fetchJsonWithRetry } from "./fetchHelpers";
import { toPlainExcerpt } from "./stripHTMLTags";

interface FetchBlogInput {
  name: string;
  identifier: string;
  content: any;
  mode?: "full" | "card";
  signal?: AbortSignal;
  timeoutMs?: number;
  retries?: number;
}

type BlogDocument = {
  title: string;
  thumbnail: string;
  body: string;
  categories: string[];
};

const invalidBlogPost = (content: any, name?: string, identifier?: string) => ({
  ...content,
  name,
  identifier,
  isValid: false
});

export const fetchAndEvaluateBlogs = async (data: FetchBlogInput) => {
  const {
    name,
    identifier,
    content,
    mode = "full",
    signal,
    timeoutMs,
    retries
  } = data;
  const fallback = invalidBlogPost(content, name, identifier);

  if (!name || !identifier) return fallback;

  try {
    const url = `${groupApi}/arbitrary/BLOG/${name}/${identifier}`;
    const responseData = await fetchJsonWithRetry(
      url,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 3600 },
        signal
      },
      retries ?? 3,
      1000,
      timeoutMs ?? 15_000
    );

    if (!checkStructureBlog(responseData)) return fallback;

    const post = responseData as BlogDocument;
    if (mode === "card") {
      return {
        name,
        id: identifier,
        identifier,
        title: post.title,
        thumbnail: post.thumbnail,
        categories: post.categories,
        created: content?.created ?? 0,
        excerpt: toPlainExcerpt(post.body),
        isValid: true
      };
    }

    return {
      ...content,
      ...post,
      name,
      id: identifier,
      identifier,
      isValid: true
    };
  } catch (error) {
    console.error(`Failed to fetch blog post ${identifier}:`, error);
    return fallback;
  }
};
