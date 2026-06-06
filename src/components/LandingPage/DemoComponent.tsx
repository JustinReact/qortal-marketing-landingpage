"use client";

import { useEffect, useMemo, useRef } from "react";
import "./styles-demo.css";
import { getHubPreviewHtml, initHubPreviewAfterMount } from "./demo.js";

const Demo = () => {
  const html = useMemo(() => getHubPreviewHtml(), []);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    // Inject the demo markup imperatively so React never owns (and never
    // re-creates) these nodes. This guarantees the hub interaction listeners
    // bind to the exact DOM that stays on the page.
    if (container.innerHTML.trim() === "") {
      container.innerHTML = html;
    }

    initHubPreviewAfterMount();
  }, [html]);

  return <div id="hub-preview-root" ref={containerRef} suppressHydrationWarning />;
};

export default Demo;
