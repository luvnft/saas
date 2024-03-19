/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "googleusercontent.com",
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
      "images.unsplash.com",
      "assets.aceternity.com",
    ]
  },
  // Add the target configuration
  target: 'experimental-serverless-trace',
  // Add the output configuration for static HTML export
  output: 'export',
};

module.exports = nextConfig;
