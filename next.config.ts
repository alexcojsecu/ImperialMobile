import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  // This enables static image imports from the public folder
  // No additional configuration needed for local images
};

export default nextConfig;