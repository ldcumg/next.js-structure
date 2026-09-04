import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  webpack: (config) => {
    // svg 설정
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
  }
};

export default nextConfig;
