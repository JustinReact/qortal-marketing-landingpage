import { groupApi } from "../constants/endpoint";
import { fetchJsonWithRetry } from "./fetchHelpers";

export interface QortalResourceRef {
  name: string;
  identifier: string;
  created?: number;
}

export async function fetchQortalResourceList(
  service: "BLOG" | "DOCUMENT",
  identifierPrefix: string,
  revalidate = 60,
  signal?: AbortSignal
): Promise<QortalResourceRef[]> {
  const url = `${groupApi}/arbitrary/resources/searchsimple?service=${service}&name=Bester&identifier=${identifierPrefix}&limit=0&mode=ALL&prefix=true&includemetadata=false&reverse=true`;

  try {
    const data = await fetchJsonWithRetry(
      url,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        next: { revalidate },
        signal
      },
      1,
      0,
      8_000
    );

    if (!Array.isArray(data)) return [];

    return data.filter(
      (item): item is QortalResourceRef => item.name && item.identifier
    );
  } catch (error) {
    console.error(`Failed to fetch Qortal ${service} list:`, error);
    return [];
  }
}
