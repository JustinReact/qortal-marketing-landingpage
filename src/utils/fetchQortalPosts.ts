import { fetchAndEvaluateBlogs } from "./fetchAndEvaluateBlogs";
import { fetchAndEvaluateNews } from "./fetchAndEvaluateNews";
import { mapWithConcurrency } from "./fetchHelpers";
import { fetchQortalResourceList } from "./qortalResourceList";

const FETCH_CONCURRENCY = 4;
const LISTING_POST_TIMEOUT_MS = 8_000;
const LISTING_POST_RETRIES = 2;

export async function fetchAllNewsPosts(identifierPrefix: string) {
  const items = await fetchQortalResourceList(
    "DOCUMENT",
    identifierPrefix,
    60
  );

  return mapWithConcurrency(
    items,
    (content) =>
      fetchAndEvaluateNews({
        name: content.name,
        identifier: content.identifier,
        content,
        mode: "card",
        timeoutMs: LISTING_POST_TIMEOUT_MS,
        retries: LISTING_POST_RETRIES
      }),
    FETCH_CONCURRENCY
  );
}

export async function fetchAllBlogPosts(
  identifierPrefix: string,
  revalidate = 3600
) {
  const items = await fetchQortalResourceList(
    "BLOG",
    identifierPrefix,
    revalidate
  );

  return mapWithConcurrency(
    items,
    (content) =>
      fetchAndEvaluateBlogs({
        name: content.name,
        identifier: content.identifier,
        content,
        mode: "card",
        timeoutMs: LISTING_POST_TIMEOUT_MS,
        retries: LISTING_POST_RETRIES
      }),
    FETCH_CONCURRENCY
  );
}
