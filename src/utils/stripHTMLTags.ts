export function stripHtmlTags(htmlString: string | undefined | null): string {
  if (typeof htmlString !== "string") return "";
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
}

export function toPlainExcerpt(
  htmlString: string | undefined | null,
  maxLength = 160
): string {
  const text = stripHtmlTags(htmlString)
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}
