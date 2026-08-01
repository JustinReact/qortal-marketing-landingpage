import withMDX from "@next/mdx";

const nextConfig = withMDX()({
  distDir: "./build",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Qortal list + per-post fetches can exceed the default 60s during `next build`
  staticPageGenerationTimeout: 120,
  async redirects() {
    return [
      {
        source: "/docs/extension",
        destination: "/docs/q-apps",
        permanent: true
      }
    ];
  }
});

export default nextConfig;
