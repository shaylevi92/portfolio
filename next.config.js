/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    domains: [
      'cdn.prod.website-files.com',
      'shaylevi.com',
      'shaylevi.b-cdn.net',
    ],
  },
}

module.exports = nextConfig
