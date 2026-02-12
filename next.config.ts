import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rupixel.ru",
      },
      {
        protocol: "https",
        hostname: "bvnztdunkjtbbzjzlxrm.supabase.co",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "sun9-77.userapi.com",
      },
      {
        protocol: "https",
        hostname: "sun9-15.userapi.com",
      },
      {
        protocol: "https",
        hostname: "sun9-74.userapi.com",
      },
      {
        protocol: "https",
        hostname: "sun9-2.userapi.com",
      },
      {
        protocol: "https",
        hostname: "sun9-63.userapi.com",
      },
      {
        protocol: "https",
        hostname: "sun9-12.userapi.com",
      },
      {
        protocol: "https",
        hostname: "sun9-67.userapi.com",
      },
      {
        protocol: "https",
        hostname: "sun9-30.vkuserphoto.ru",
      },
      {
        protocol: "https",
        hostname: "sun9-64.vkuserphoto.ru",
      },
    ],
  },
  // reactCompiler: true,
};

export default nextConfig;
