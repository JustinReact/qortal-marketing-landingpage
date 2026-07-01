import { faqAnswerToPlainText } from "./faqAnswerUtils";
import { FaqItem, FaqSection } from "./faqData";

export const matchesFaqSearch = (
  item: FaqItem,
  sectionTitle: string,
  query: string
) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;

  const haystack = [
    item.question,
    faqAnswerToPlainText(item.answer),
    sectionTitle
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(normalizedQuery);
};

export const filterFaqSections = (
  sections: FaqSection[],
  query: string
): FaqSection[] => {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) return sections;

  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        matchesFaqSearch(item, section.title, normalizedQuery)
      )
    }))
    .filter((section) => section.items.length > 0);
};
