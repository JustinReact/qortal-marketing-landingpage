"use client";

import { ReactNode } from "react";
import { FAQ_ANSWER_LINK_REGEX } from "./faqAnswerUtils";
import { highlightFaqText } from "./faqHighlight";
import {
  FaqExternalAnswerLink,
  FaqInternalAnswerLink
} from "./Faq-styles";

const appendTextSegment = (
  parts: ReactNode[],
  segment: string,
  searchQuery: string | undefined,
  keyPrefix: string
) => {
  if (!segment) return;

  if (searchQuery?.trim()) {
    parts.push(...highlightFaqText(segment, searchQuery, keyPrefix));
    return;
  }

  parts.push(segment);
};

export const renderFaqAnswer = (
  answer: string,
  searchQuery?: string
): ReactNode[] => {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of answer.matchAll(FAQ_ANSWER_LINK_REGEX)) {
    const matchIndex = match.index ?? 0;

    if (matchIndex > lastIndex) {
      appendTextSegment(
        parts,
        answer.slice(lastIndex, matchIndex),
        searchQuery,
        `answer-${key++}`
      );
    }

    const label = match[1];
    const href = match[2];
    const isExternal = href.startsWith("http");
    const linkLabel = searchQuery?.trim()
      ? highlightFaqText(label, searchQuery, `link-${key++}`)
      : label;

    if (isExternal) {
      parts.push(
        <FaqExternalAnswerLink
          key={`ext-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkLabel}
        </FaqExternalAnswerLink>
      );
    } else {
      parts.push(
        <FaqInternalAnswerLink key={`int-${key++}`} href={href}>
          {linkLabel}
        </FaqInternalAnswerLink>
      );
    }

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < answer.length) {
    appendTextSegment(
      parts,
      answer.slice(lastIndex),
      searchQuery,
      `answer-${key++}`
    );
  }

  return parts;
};
