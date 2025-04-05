import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Wiki } from "../../../components/Wiki/Wiki";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRenderer } from "../../../components/Common/Wiki/MDXRenderer";
import { getWikiPages } from "../../../utils/getWikiPages";
import rehypeSlug from "rehype-slug";

/* Explanation for those looking to add new wiki pages */
/* 
  You must create a new MDX file in the `src/app/wiki` directory in order to add a new section to the wiki. If adding a new section, be sure to modify wikiOrder in `src/config/wikiOrder.ts` to include the new section. The MDX file should contain the following frontmatter: 
  ---
  title: "Page Title"
  ---

  ## Section 1
  Content here...
  ### Subsection 1
  Content here...

  ## Section 2
  Content here...
  ### Subsection 2
  Content here...

  The MDX file will be parsed and displayed in the wiki sidebar. The first `##` heading will be used as the section title, and `###` headings will be used as subsections. If no `##` heading is found, the page will be placed under "Miscellaneous" in the sidebar.

  If you want to add a new section to an existing page, simply modify the existing MDX file and add a new `##` heading. The new section will be displayed in the sidebar under the existing page.
*/

const WikiSection = async ({ params }: { params: { slug: string } }): Promise<JSX.Element> => {
  const sections = getWikiPages(); // Extract sidebar links

  // Load the correct MDX file based on `params.slug`
  const docPath = path.join(process.cwd(), `src/app/wiki/${params.slug}.mdx`);
  if (!fs.existsSync(docPath)) return notFound(); // Return 404 if page doesn't exist

  const fileContents = fs.readFileSync(docPath, "utf-8");
  const { content, data } = matter(fileContents);
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
}

export default WikiSection;
