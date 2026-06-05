import { groupApi } from "../constants/endpoint";
import { checkStructureBlog } from "./checkStructure";
import { fetchJsonWithRetry } from "./fetchHelpers";

interface FetchBlogInput {
  name: string;
  identifier: string;
  content: any;
}

const invalidBlogPost = (content: any, name?: string, identifier?: string) => ({
  ...content,
  name,
  identifier,
  isValid: false
});

export const fetchAndEvaluateBlogs = async (data: FetchBlogInput) => {
  const { name, identifier, content } = data;
  const fallback = invalidBlogPost(content, name, identifier);

  if (!name || !identifier) return fallback;

  try {
    const url = `${groupApi}/arbitrary/BLOG/${name}/${identifier}`;
    const responseData = await fetchJsonWithRetry(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 3600 }
    });

    if (checkStructureBlog(responseData)) {
      return {
        ...content,
        ...(responseData as object),
        name,
        id: identifier,
        identifier,
        isValid: true
      };
    }

    return fallback;
  } catch (error) {
    console.error(`Failed to fetch blog post ${identifier}:`, error);
    return fallback;
  }
};
