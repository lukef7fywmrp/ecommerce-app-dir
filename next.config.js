/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.ibb.co", "fakestoreapi.com"],
  },
};

module.exports = nextConfig;
