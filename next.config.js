module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  assetPrefix: '/experiment',
  async rewrites() {
    return [
      {
        source: '/experiment/:path*',
        destination: '/:path*',
      }
    ];
  }
};
