import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Silence workspace root warning and ensure correct tracing in nested setup
  outputFileTracingRoot: path.join(__dirname, ".."),
  // Ensure Sanity/Studio packages are transpiled by Next (ESM/conditions)
  transpilePackages: [
    "sanity",
    "@sanity/vision",
    "@sanity/ui",
    "@sanity/color",
    "@rexxars/react-split-pane",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
