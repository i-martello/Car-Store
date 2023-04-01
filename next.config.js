/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  env: {
    MONGO_URI: "mongodb+srv://First:nacho@personalcluster.hg1pfct.mongodb.net/CarStore?retryWrites=true&w=majority",
  }
}
