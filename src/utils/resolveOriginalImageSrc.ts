function decodeNextImageUrl(url: string): string | null {
  if (!url.includes("/_next/image")) return null;

  try {
    const parsed = new URL(url, window.location.origin);
    const encoded = parsed.searchParams.get("url");
    return encoded ? decodeURIComponent(encoded) : null;
  } catch {
    return null;
  }
}

function parseLargestSrcsetUrl(srcset: string): string | null {
  let largestUrl: string | null = null;
  let largestWidth = -1;

  for (const entry of srcset.split(",")) {
    const [url, descriptor] = entry.trim().split(/\s+/);
    if (!url) continue;

    const width = descriptor?.endsWith("w")
      ? Number.parseInt(descriptor, 10)
      : 0;

    if (width >= largestWidth) {
      largestWidth = width;
      largestUrl = url;
    }
  }

  return largestUrl;
}

export function resolveOriginalImageSrc(img: HTMLImageElement): string {
  const dataFullSrc = img.getAttribute("data-full-src");
  if (dataFullSrc) return dataFullSrc;

  const candidates = [
    img.currentSrc,
    img.src,
    img.getAttribute("src"),
    parseLargestSrcsetUrl(img.getAttribute("srcset") ?? ""),
  ].filter((value): value is string => Boolean(value));

  for (const candidate of candidates) {
    const decoded = decodeNextImageUrl(candidate);
    if (decoded) return decoded;
  }

  const rawSrc = img.getAttribute("src");
  if (rawSrc && !rawSrc.includes("/_next/image")) {
    return rawSrc;
  }

  return img.currentSrc || img.src;
}

export function shouldBypassImageOptimization(src: string): boolean {
  return (
    src.startsWith("data:") ||
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("blob:")
  );
}
