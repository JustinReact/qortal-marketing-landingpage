type FetchJsonOptions = RequestInit & { next?: { revalidate?: number } };

export async function fetchJsonWithRetry(
  url: string,
  options: FetchJsonOptions = {},
  retries = 3,
  delayMs = 1000
): Promise<unknown> {
  let lastError: unknown;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} for ${url}`);
      }
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < retries - 1) {
        await new Promise((resolve) =>
          setTimeout(resolve, delayMs * (attempt + 1))
        );
      }
    }
  }

  throw lastError;
}

export async function mapWithConcurrency<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  concurrency = 3
): Promise<R[]> {
  const results: R[] = [];

  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(batch.map(fn));

    for (const result of batchResults) {
      if (result.status === "fulfilled") {
        results.push(result.value);
      } else {
        console.error("Qortal resource fetch failed:", result.reason);
      }
    }
  }

  return results;
}
