import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'localhost:1337'], // Add Strapi's domain for images
  },
};

export default nextConfig;