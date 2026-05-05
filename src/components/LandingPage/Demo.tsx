"use client";

import { useEffect, useState } from "react";
import "./styles-demo.css";

const Demo = () => {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    void import("./demo.js")
      .then((mod) => {
        setHtml(mod.getHubPreviewHtml());
      })
      .catch((err) => {
        console.error("[Demo] failed to load hub preview script", err);
      });
  }, []);

  useEffect(() => {
    if (!html) {
      return;
    }
    void import("./demo.js").then((mod) => {
      mod.initHubPreviewAfterMount();
    });
  }, [html]);

  return (
    <div
      id="hub-preview-root"
      {...(html != null ? { dangerouslySetInnerHTML: { __html: html } } : {})}
    />
  );
};

export default Demo;
