import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export", // Enables static export
  assetPrefix: process.env.GITHUB_PAGES ? "/page/" : "",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
};

export default withMDX(nextConfig);
