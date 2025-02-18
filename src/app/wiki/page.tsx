import React from "react";
import { Wiki } from "../../components/Wiki/Wiki";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { WikiPageProps } from "./types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRenderer } from "../../components/Common/Wiki/MDXRenderer";

// Metadata
export const metadata = {
  title: "The Qortal Wiki Page",
  description: "Learn about Qortal by reading this wiki page"
};

// Extract MDX files on the server side
const getWikiPages = (): WikiPageProps[] => {
  const docsPath = path.join(process.cwd(), "src/app/wiki");
  console.log(docsPath);

  if (!fs.existsSync(docsPath)) return []; // Avoids runtime errors if directory doesn't exist

  const files = fs
    .readdirSync(docsPath)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const fullPath = path.join(docsPath, file);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    // Extract `h2` and `h3` headings from MDX content
    const headings = content
      .split("\n")
      .filter((line) => line.startsWith("## ") || line.startsWith("### "))
      .map((line) => ({
        title: line.replace(/^##+\s/, ""),
        depth: line.startsWith("## ") ? 2 : 3 // `##` = section, `###` = subsection
      }));

    return {
      title: data.title || file.replace(".mdx", ""),
      url: `/wiki/${file.replace(".mdx", "")}`,
      headings
    };
  });
};

const WikiPage = async (): Promise<JSX.Element> => {
  const pages = getWikiPages();

  // Load home.mdx content
  const homePath = path.join(process.cwd(), "src/app/wiki/home.mdx");
  const homeContent = fs.existsSync(homePath)
    ? fs.readFileSync(homePath, "utf-8")
    : "⚠️ Home content not found.";

  const { content, data } = matter(homeContent);
  const mdxSource: MDXRemoteSerializeResult  = await serialize(content); // Compile MDX into JSX

  return (
    <Wiki title={data.title} pages={pages}>
      <MDXRenderer source={mdxSource} />
    </Wiki>
  );
};

export default WikiPage;
