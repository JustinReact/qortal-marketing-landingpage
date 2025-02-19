import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Wiki } from "../../components/Wiki/Wiki";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRenderer } from "../../components/Common/Wiki/MDXRenderer";
import { getWikiPages } from "../../utils/getWikiPages";

// Metadata
export const metadata = {
  title: "The Qortal Wiki Page",
  description: "Learn about Qortal by reading this wiki page"
};

const WikiPage = async (): Promise<JSX.Element> => {
  const sections = getWikiPages();

  // Load home.mdx content
  const homePath = path.join(process.cwd(), "src/app/wiki/home.mdx");
  const homeContent = fs.existsSync(homePath)
    ? fs.readFileSync(homePath, "utf-8")
    : "⚠️ Home content not found.";

  const { content, data } = matter(homeContent);
  const mdxSource: MDXRemoteSerializeResult  = await serialize(content); // Compile MDX into JSX

  return (
    <Wiki title={data.title} sections={sections}>
      <MDXRenderer source={mdxSource} />
    </Wiki>
  );
};

export default WikiPage;
