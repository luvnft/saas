/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      "googleusercontent.com",
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
      "images.unsplash.com",
      "assets.aceternity.com",
    ]
  },
}
module.exports = nextConfig
