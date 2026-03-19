import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
