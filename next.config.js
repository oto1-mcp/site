/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // GitHub Pages doesn't support image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 