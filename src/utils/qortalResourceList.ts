import { groupApi } from "../constants/endpoint";

export interface QortalResourceRef {
  name: string;
  identifier: string;
  created?: number;
}

export async function fetchQortalResourceList(
  service: "BLOG" | "DOCUMENT",
  identifierPrefix: string,
  revalidate = 60
): Promise<QortalResourceRef[]> {
  const url = `${groupApi}/arbitrary/resources/searchsimple?service=${service}&name=Bester&identifier=${identifierPrefix}&limit=0&mode=ALL&prefix=true&includemetadata=false&reverse=true`;
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate }
  });
  const data = await response.json();
  if (!Array.isArray(data)) return [];
  return data.filter(
    (item): item is QortalResourceRef => item.name && item.identifier
  );
}
