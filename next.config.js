/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'googleusercontent.com' },
      { protocol: 'https', hostname: 'oaidalleapiprodscus.blob.core.windows.net' },
      { protocol: 'https', hostname: 'cdn.openai.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'assets.aceternity.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ]
  },
  
}
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about-us': { page: '/about-us' },
      '/privacy-policy': { page: '/privacy-policyt', query: { title: 'privacy-policy' } },
      '/feedback': { page: '/feedback', query: { title: 'feedback' } },
      '/help': { page: '/help', query: { title: 'help' } },
      '/join-us': { page: '/join-us', query: { title: 'join us' } },
      '/refund': { page: '/refund', query: { title: 'refund' } },
      '/setting': { page: '/setting', query: { title: 'setting' } },
    }
  },
}

module.exports = nextConfig;
