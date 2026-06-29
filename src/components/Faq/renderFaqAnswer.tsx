"use client";

import { ReactNode } from "react";
import { FAQ_ANSWER_LINK_REGEX } from "./faqAnswerUtils";
import {
  FaqExternalAnswerLink,
  FaqInternalAnswerLink
} from "./Faq-styles";

export const renderFaqAnswer = (answer: string): ReactNode[] => {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of answer.matchAll(FAQ_ANSWER_LINK_REGEX)) {
    const matchIndex = match.index ?? 0;

    if (matchIndex > lastIndex) {
      parts.push(answer.slice(lastIndex, matchIndex));
    }

    const label = match[1];
    const href = match[2];
    const isExternal = href.startsWith("http");

    if (isExternal) {
      parts.push(
        <FaqExternalAnswerLink
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </FaqExternalAnswerLink>
      );
    } else {
      parts.push(
        <FaqInternalAnswerLink key={key++} href={href}>
          {label}
        </FaqInternalAnswerLink>
      );
    }

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < answer.length) {
    parts.push(answer.slice(lastIndex));
  }

  return parts;
};
