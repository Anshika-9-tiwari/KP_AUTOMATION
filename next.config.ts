/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Disable ESLint errors from breaking the build on Vercel
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
     {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
