/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {},
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
