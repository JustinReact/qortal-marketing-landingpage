import { WikiPageProps, WikiSearchResult } from "../app/wiki/types";

export const getWikiSearchIndex = (
  sections: Record<string, WikiPageProps[]>
): WikiSearchResult[] => {
  const results: WikiSearchResult[] = [];

  Object.entries(sections).forEach(([sectionTitle, pages]) => {
    pages.forEach((page) => {
      results.push({
        sectionTitle,
        pageTitle: page.title,
        headingTitle: null,
        parentHeading: null,
        url: page.url,
        anchorId: null
      });

      page.headings.forEach((heading) => {
        results.push({
          sectionTitle,
          pageTitle: page.title,
          headingTitle: heading.title,
          parentHeading: heading.parentTitle ?? null,
          url: page.url,
          anchorId: heading.id
        });
      });
    });
  });

  return results;
};

export const filterWikiSearchResults = (
  searchIndex: WikiSearchResult[],
  query: string
): WikiSearchResult[] => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  return searchIndex.filter((result) => {
    const headingTitle = result.headingTitle?.toLowerCase() ?? "";
    const pageTitle = result.pageTitle.toLowerCase();
    const sectionTitle = result.sectionTitle.toLowerCase();

    return (
      headingTitle.includes(normalizedQuery) ||
      pageTitle.includes(normalizedQuery) ||
      sectionTitle.includes(normalizedQuery)
    );
  });
};
