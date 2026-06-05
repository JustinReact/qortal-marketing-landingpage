import { groupApi } from "../constants/endpoint";
import { checkStructureNews } from "./checkStructure";
import { fetchJsonWithRetry } from "./fetchHelpers";

interface FetchNewsInput {
  name: string;
  identifier: string;
  content: any;
}

const invalidNewsPost = (content: any, name?: string, identifier?: string) => ({
  ...content,
  name,
  identifier,
  isValid: false
});

export const fetchAndEvaluateNews = async (data: FetchNewsInput) => {
  const { name, identifier, content } = data;
  const fallback = invalidNewsPost(content, name, identifier);

  if (!name || !identifier) return fallback;

  try {
    const url = `${groupApi}/arbitrary/DOCUMENT/${name}/${identifier}`;
    const responseData = await fetchJsonWithRetry(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 }
    });

    if (checkStructureNews(responseData)) {
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
    console.error(`Failed to fetch news post ${identifier}:`, error);
    return fallback;
  }
};
