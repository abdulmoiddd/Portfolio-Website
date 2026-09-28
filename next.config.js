/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimages.netlify.app",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
