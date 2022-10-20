/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.self.com", "images.squarespace-cdn.com"],
  },
};

module.exports = nextConfig;
