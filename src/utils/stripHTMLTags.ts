export function stripHtmlTags(htmlString: string | undefined | null): string {
  if (typeof htmlString !== "string") return "";
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
}
