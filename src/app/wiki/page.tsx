import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Wiki } from "../../components/Wiki/Wiki";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRenderer } from "../../components/Common/Wiki/MDXRenderer";
import { getWikiPages } from "../../utils/getWikiPages";
import rehypeSlug from "rehype-slug";

// Metadata
export const metadata = {
  title: "The Qortal Wiki Page",
  description: "Learn about Qortal by reading this wiki page"
};

const WikiPage = async (): Promise<JSX.Element> => {
  const sections = getWikiPages();

  // Load home.mdx content
  const welcomePath = path.join(process.cwd(), "src/app/wiki/welcome.mdx");
  const welcomeContent = fs.existsSync(welcomePath)
    ? fs.readFileSync(welcomePath, "utf-8")
    : "⚠️ Welcome content not found.";

  const { content, data } = matter(welcomeContent);
  const mdxSource: MDXRemoteSerializeResult  = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug] // Add IDs to headings
    }
  }); // Compile MDX into JSX

  return (
    <Wiki title={data.title} sections={sections}>
      <MDXRenderer source={mdxSource} />
    </Wiki>
  );
};

export default WikiPage;
