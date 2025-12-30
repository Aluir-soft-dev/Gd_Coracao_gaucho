/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-b1b40b96e8b84c6b99b7ed01af8d481c.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
