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
  // Add the output configuration for static HTML export
  // This is the correct approach for exporting static HTML
  output: 'export',
};

module.exports = nextConfig;
