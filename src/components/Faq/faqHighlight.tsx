import { ReactNode } from "react";
import { FaqSearchHighlight } from "./Faq-styles";

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const highlightFaqText = (
  text: string,
  query: string,
  keyPrefix = "hl"
): ReactNode[] => {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return [text];

  const parts = text.split(
    new RegExp(`(${escapeRegExp(trimmedQuery)})`, "gi")
  );

  return parts
    .filter((part) => part.length > 0)
    .map((part, index) =>
      part.toLowerCase() === trimmedQuery.toLowerCase() ? (
        <FaqSearchHighlight key={`${keyPrefix}-${index}`}>
          {part}
        </FaqSearchHighlight>
      ) : (
        part
      )
    );
};
