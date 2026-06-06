type FetchJsonOptions = RequestInit & { next?: { revalidate?: number } };

class HttpResponseError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
    this.name = "HttpResponseError";
  }
}

const isRetryableStatus = (status: number) => status >= 500 || status === 429;

export async function fetchJsonWithRetry(
  url: string,
  options: FetchJsonOptions = {},
  retries = 3,
  delayMs = 1000,
  timeoutMs = 15_000
): Promise<unknown> {
  let lastError: unknown;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(timeoutMs)
      });
      if (!response.ok) {
        throw new HttpResponseError(
          `HTTP ${response.status} for ${url}`,
          response.status
        );
      }
      return await response.json();
    } catch (error) {
      lastError = error;
      const status =
        error instanceof HttpResponseError ? error.status : undefined;
      const canRetry =
        attempt < retries - 1 &&
        (status === undefined || isRetryableStatus(status));

      if (!canRetry) break;

      await new Promise((resolve) =>
        setTimeout(resolve, delayMs * (attempt + 1))
      );
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
