import withMDX from "@next/mdx";

const nextConfig = withMDX()({
  distDir: "./build",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

export default nextConfig;
