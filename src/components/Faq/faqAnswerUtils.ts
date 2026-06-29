const LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Strip [label](href) markdown for FAQ JSON-LD plain-text answers. */
export const faqAnswerToPlainText = (answer: string) =>
  answer.replace(LINK_REGEX, "$1");

export const FAQ_ANSWER_LINK_REGEX = LINK_REGEX;
