/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Configure for GitHub Pages with a custom basePath if needed
  // Remove this line if you're using a custom domain
  basePath: '/site',
  // GitHub Pages doesn't support image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 