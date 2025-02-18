import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Wiki } from "../../../components/Wiki/Wiki";
import { WikiPageProps } from "../types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRenderer } from "../../../components/Common/Wiki/MDXRenderer";

// Function to get all pages for the sidebar
const getWikiPages = (): WikiPageProps[] => {
  const docsPath = path.join(process.cwd(), "src/app/wiki");
  if (!fs.existsSync(docsPath)) return [];

  const files = fs
    .readdirSync(docsPath)
    .filter((file) => file.endsWith(".mdx") && file !== "home.mdx");

  return files.map((file) => {
    const fullPath = path.join(docsPath, file);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    // Extract `h2` and `h3` headings
    const headings = content
      .split("\n")
      .filter((line) => line.startsWith("## ") || line.startsWith("### "))
      .map((line) => ({
        title: line.replace(/^##+\s/, ""),
        depth: line.startsWith("## ") ? 2 : 3
      }));

    return {
      title: data.title || file.replace(".mdx", ""),
      url: `/wiki/${file.replace(".mdx", "")}`,
      headings
    };
  });
};

const WikiSection = async ({ params }: { params: { slug: string } }): Promise<JSX.Element> => {
  const pages = getWikiPages(); // Extract sidebar links

  // Load the correct MDX file based on `params.slug`
  const docPath = path.join(process.cwd(), `src/app/wiki/${params.slug}.mdx`);
  if (!fs.existsSync(docPath)) return notFound(); // Return 404 if page doesn't exist

  const fileContents = fs.readFileSync(docPath, "utf-8");
  const { content, data } = matter(fileContents);
  const mdxSource: MDXRemoteSerializeResult  = await serialize(content); // Compile MDX into JSX

  return (
    <Wiki title={data.title} pages={pages}>
      <MDXRenderer source={mdxSource} />
    </Wiki>
  );
}

export default WikiSection;
