import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: Vercel deploys this natively; GitHub Pages needs the
  // plain HTML/CSS/JS output since it can't run a Next.js server.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
