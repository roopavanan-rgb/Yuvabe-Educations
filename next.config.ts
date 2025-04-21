import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // Needed if using <Image>
  },
};
// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/, // Ensure `.mdx` files are treated as MDX
});

module.exports = withMDX({
  // Other Next.js config options go here
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Make sure `.mdx` is included
});

export default nextConfig;
