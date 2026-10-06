/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [32, 64, 128, 256],
  },

  // Addresses from the old Wix site that don't exist on this site, so old links and search results still land.
  async redirects() {
    return [
      { source: '/aboutus', destination: '/about', permanent: true },
      { source: '/fmcp', destination: '/additive-masterbatch', permanent: true },
      // The original Vercel address is still indexed by Bing, so send it to the real domain.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'blaubatch\\.vercel\\.app' }],
        destination: 'https://blaubatch.com/:path*',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
