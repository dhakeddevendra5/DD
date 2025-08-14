import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for better SEO performance
  images: {
    unoptimized: false, // Keep image optimization enabled
    domains: ["aarab.vercel.app"],
  },

  // Compress responses
  compress: true,

  // Remove experimental optimizeCss as it's causing build issues
  // experimental: {
  //   optimizeCss: true,
  // },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/email",
        destination: "dhakeddevendra5@gmail.com",
        permanent: true,
      },
      {
        source: "/directresume",
        destination: "/docs/MyResume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
