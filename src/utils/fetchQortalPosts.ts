import { fetchAndEvaluateBlogs } from "./fetchAndEvaluateBlogs";
import { fetchAndEvaluateNews } from "./fetchAndEvaluateNews";
import { mapWithConcurrency } from "./fetchHelpers";
import { fetchQortalResourceList } from "./qortalResourceList";

const FETCH_CONCURRENCY = 3;

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
        content
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
        content
      }),
    FETCH_CONCURRENCY
  );
}
