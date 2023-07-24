/** @type {import('next').NextConfig} */
// Added due to legacy issues with a dependancy inside of RainbowKit, this has to be added to prevent crashes
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
