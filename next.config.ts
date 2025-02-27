import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.b-cdn.net', // This will match any Bunny CDN subdomain
        port: '',
        pathname: '/**',
      },
      // If you know your exact Bunny CDN hostname, you can be more specific:
      // {
      //   protocol: 'https',
      //   hostname: 'your-storage-zone.b-cdn.net',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
  // This enables static image imports from the public folder
  // No additional configuration needed for local images
};

export default nextConfig;