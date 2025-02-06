import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {}
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export", // Required for GitHub Pages
  assetPrefix: "/page/", // Important for loading CSS and JS assets
  trailingSlash: true, // Ensures links work correctly
  images: {
    unoptimized: true // Required for GitHub Pages
  }
};

export default withMDX(nextConfig);
