import { groupApi } from "../constants/endpoint";
import { checkStructureNews } from "./checkStructure";
import { fetchJsonWithRetry } from "./fetchHelpers";
import { toPlainExcerpt } from "./stripHTMLTags";

interface FetchNewsInput {
  name: string;
  identifier: string;
  content: any;
  mode?: "full" | "card";
  signal?: AbortSignal;
  timeoutMs?: number;
  retries?: number;
}

type NewsDocument = {
  title: string;
  thumbnail: string;
  body: string;
};

const invalidNewsPost = (content: any, name?: string, identifier?: string) => ({
  ...content,
  name,
  identifier,
  isValid: false
});

export const fetchAndEvaluateNews = async (data: FetchNewsInput) => {
  const {
    name,
    identifier,
    content,
    mode = "full",
    signal,
    timeoutMs,
    retries
  } = data;
  const fallback = invalidNewsPost(content, name, identifier);

  if (!name || !identifier) return fallback;

  try {
    const url = `${groupApi}/arbitrary/DOCUMENT/${name}/${identifier}`;
    const responseData = await fetchJsonWithRetry(
      url,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 60 },
        signal
      },
      retries ?? 3,
      1000,
      timeoutMs ?? 15_000
    );

    if (!checkStructureNews(responseData)) return fallback;

    const post = responseData as NewsDocument;
    if (mode === "card") {
      return {
        name,
        id: identifier,
        identifier,
        title: post.title,
        thumbnail: post.thumbnail,
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
    console.error(`Failed to fetch news post ${identifier}:`, error);
    return fallback;
  }
};
