import type { NextConfig } from "next";
 
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  cleanupOutdatedCaches: true,
  clientsClaim: true,
});
 
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  turbopack: {},
 
  images: {
    remotePatterns: [
        {
        protocol: 'http',
        hostname: "motorandmechanix.co.in"
      },
      {
        protocol: 'https',
        hostname: "motorandmechanix.co.in"
      },
      {
        protocol: 'https',
        hostname: 'www.motorandmechanix.co.in',
      },
      {
        protocol: 'https',
        hostname: 'gomechprod.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: "https",
        hostname: "cms.motorandmechanix.co.in",
      }
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
 
  compress: true,
 
  poweredByHeader: false,
 
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "ngrok-skip-browser-warning",
            value: "true",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
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
};
 
module.exports = withPWA(nextConfig);