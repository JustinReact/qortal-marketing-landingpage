import { fetchAndEvaluateBlogs } from "./fetchAndEvaluateBlogs";
import { fetchAndEvaluateNews } from "./fetchAndEvaluateNews";
import { mapWithConcurrency } from "./fetchHelpers";
import { fetchQortalResourceList } from "./qortalResourceList";

const FETCH_CONCURRENCY = 3;
const NEWS_LISTING_BUDGET_MS = 8_000;
const NEWS_LISTING_POST_TIMEOUT_MS = 5_000;
const NEWS_LISTING_POST_RETRIES = 2;
const BLOG_LISTING_BUDGET_MS = 8_000;
const BLOG_LISTING_POST_TIMEOUT_MS = 5_000;
const BLOG_LISTING_POST_RETRIES = 2;

export async function fetchAllNewsPosts(identifierPrefix: string) {
  const deadline = AbortSignal.timeout(NEWS_LISTING_BUDGET_MS);
  const items = await fetchQortalResourceList(
    "DOCUMENT",
    identifierPrefix,
    60,
    deadline
  );
  if (deadline.aborted) return [];

  return mapWithConcurrency(
    items,
    (content) =>
      fetchAndEvaluateNews({
        name: content.name,
        identifier: content.identifier,
        content,
        mode: "card",
        signal: deadline,
        timeoutMs: NEWS_LISTING_POST_TIMEOUT_MS,
        retries: NEWS_LISTING_POST_RETRIES
      }),
    FETCH_CONCURRENCY,
    deadline
  );
}

export async function fetchAllBlogPosts(
  identifierPrefix: string,
  revalidate = 3600
) {
  const deadline = AbortSignal.timeout(BLOG_LISTING_BUDGET_MS);
  const items = await fetchQortalResourceList(
    "BLOG",
    identifierPrefix,
    revalidate,
    deadline
  );
  if (deadline.aborted) return [];

  return mapWithConcurrency(
    items,
    (content) =>
      fetchAndEvaluateBlogs({
        name: content.name,
        identifier: content.identifier,
        content,
        mode: "card",
        signal: deadline,
        timeoutMs: BLOG_LISTING_POST_TIMEOUT_MS,
        retries: BLOG_LISTING_POST_RETRIES
      }),
    FETCH_CONCURRENCY,
    deadline
  );
}
