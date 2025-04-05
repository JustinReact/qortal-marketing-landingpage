import { WikiPageProps } from "../app/wiki/types";
import { wikiOrder } from "../config/wikiOrder";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
    const headings = content
      .split("\n")
      .filter((line) => line.startsWith("## ") || line.startsWith("### "))
      .map((line) => {
        const rawTitle = line.replace(/^##+\s/, "").trim();
        const id = rawTitle
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
          .replace(/\s+/g, "-"); // Convert spaces to dashes
        
        return {
          title: rawTitle,
          id, // This ID now matches `rehypeSlug` output
          depth: line.startsWith("## ") ? 2 : 3,
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