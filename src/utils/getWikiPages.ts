import { WikiPageProps } from "../app/wiki/types";
import { wikiOrder } from "../config/wikiOrder";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

// Extract MDX files on the server side

// ✅ Extract MDX files and group by first `##` heading, then sort by manual order
export const getWikiPages = (): Record<string, WikiPageProps[]> => {
  const docsPath = path.join(process.cwd(), "src/app/wiki");

  if (!fs.existsSync(docsPath)) return {};

  const files = fs.readdirSync(docsPath).filter((file) => file.endsWith(".mdx"));

  // ✅ Grouped pages by sections
  const sections: Record<string, WikiPageProps[]> = {};

  files.forEach((file) => {
    const fullPath = path.join(docsPath, file);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    // Extract `h2` and `h3` headings from MDX content
    const slugger = new GithubSlugger();
    let currentH2Title: string | null = null;

    const headings = content
      .split("\n")
      .filter((line) => line.startsWith("## ") || line.startsWith("### "))
      .map((line) => {
        const rawTitle = line.replace(/^##+\s/, "").trim();
        const depth = line.startsWith("## ") ? 2 : 3;

        if (depth === 2) {
          currentH2Title = rawTitle;
        }

        return {
          title: rawTitle,
          id: slugger.slug(rawTitle),
          depth,
          parentTitle: depth === 3 ? currentH2Title ?? undefined : undefined
        };
      });

    // ✅ Use manual order or default to "Miscellaneous"
    const sectionTitle = wikiOrder.find((s) => data.title?.includes(s)) || "Miscellaneous";
    const homepage = data.title?.includes("Welcome");

    const page: WikiPageProps = {
      title: data.title || file.replace(".mdx", ""),
      url: homepage ? "/wiki" : `/wiki/${file.replace(".mdx", "")}`,
      headings,
    };

    if (!sections[sectionTitle]) {
      sections[sectionTitle] = [];
    }
    sections[sectionTitle].push(page);
  });

  // ✅ Sort sections based on manual order
  const sortedSections: Record<string, WikiPageProps[]> = {};
  wikiOrder.forEach((section) => {
    if (sections[section]) {
      sortedSections[section] = sections[section];
    }
  });

  return sortedSections;
};