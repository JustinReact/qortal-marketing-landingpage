import { fetchAndEvaluateBlogs } from "./fetchAndEvaluateBlogs";
import { fetchAndEvaluateNews } from "./fetchAndEvaluateNews";
import { fetchQortalResourceList } from "./qortalResourceList";

export async function fetchAllNewsPosts(identifierPrefix: string) {
  const items = await fetchQortalResourceList(
    "DOCUMENT",
    identifierPrefix,
    60
  );
  return Promise.all(
    items.map((content) =>
      fetchAndEvaluateNews({
        name: content.name,
        identifier: content.identifier,
        content
      })
    )
  );
}

export async function fetchAllBlogPosts(
  identifierPrefix: string,
  revalidate = 3600
) {
  const items = await fetchQortalResourceList("BLOG", identifierPrefix, revalidate);
  return Promise.all(
    items.map((content) =>
      fetchAndEvaluateBlogs({
        name: content.name,
        identifier: content.identifier,
        content
      })
    )
  );
}
