"use client";
import React, { FC, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  SearchContainer,
  SearchEmptyState,
  SearchInput,
  SearchResultItem,
  SearchResultMeta,
  SearchResultsList,
  SearchResultTitle
} from "./Wiki-search-styles";
import { WikiPageProps, WikiSearchResult } from "../../app/wiki/types";
import {
  filterWikiSearchResults,
  getWikiSearchIndex
} from "../../utils/getWikiSearchIndex";
import { handleScrollToSectionFunc } from "../../utils/handleScrollToSectionFunc";

interface WikiSearchProps {
  sections: Record<string, WikiPageProps[]>;
  handleNavigation: (url: string) => void;
  onResultSelect?: () => void;
  onQueryChange?: (query: string) => void;
  autoFocus?: boolean;
}

export const WikiSearch: FC<WikiSearchProps> = ({
  sections,
  handleNavigation,
  onResultSelect,
  onQueryChange,
  autoFocus = false
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const searchIndex = useMemo(() => getWikiSearchIndex(sections), [sections]);
  const filteredResults = useMemo(
    () => filterWikiSearchResults(searchIndex, searchQuery),
    [searchIndex, searchQuery]
  );

  const isSearching = searchQuery.trim().length > 0;

  const handleSearchResultClick = (result: WikiSearchResult) => {
    setSearchQuery("");
    onQueryChange?.("");
    onResultSelect?.();

    if (result.anchorId && pathname === result.url) {
      handleScrollToSectionFunc(result.anchorId);
      return;
    }

    const destination = result.anchorId
      ? `${result.url}#${result.anchorId}`
      : result.url;

    handleNavigation(destination);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        value={searchQuery}
        placeholder="Search wiki..."
        aria-label="Search wiki pages and sections"
        autoFocus={autoFocus}
        onChange={(event) => {
          setSearchQuery(event.target.value);
          onQueryChange?.(event.target.value);
        }}
      />
      {isSearching && (
        <>
          {filteredResults.length > 0 ? (
            <SearchResultsList>
              {filteredResults.map((result, index) => {
                const label = result.headingTitle ?? result.pageTitle;
                const key = `${result.url}-${result.anchorId ?? "page"}-${index}`;

                return (
                  <SearchResultItem
                    key={key}
                    role="button"
                    tabIndex={0}
                    aria-label={`Go to ${label}`}
                    onClick={() => handleSearchResultClick(result)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleSearchResultClick(result);
                      }
                    }}
                  >
                    <SearchResultTitle>{label}</SearchResultTitle>
                    <SearchResultMeta>
                      {result.headingTitle
                        ? result.parentHeading
                          ? `${result.parentHeading} · ${result.pageTitle}`
                          : `${result.pageTitle} · ${result.sectionTitle}`
                        : result.sectionTitle}
                    </SearchResultMeta>
                  </SearchResultItem>
                );
              })}
            </SearchResultsList>
          ) : (
            <SearchEmptyState>No results found.</SearchEmptyState>
          )}
        </>
      )}
    </SearchContainer>
  );
};
