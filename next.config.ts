import type { NextConfig } from "next";

// GitHub Pages can't run a Next.js server, so its workflow builds with
// STATIC_EXPORT=1 to produce a plain HTML/CSS/JS bundle in out/. Vercel
// runs Next.js natively and builds fine without forcing a static export,
// so we only opt into `output: "export"` for the Pages build.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: { unoptimized: true },
};

export default nextConfig;
