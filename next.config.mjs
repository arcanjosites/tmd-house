/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.replit.dev", "*.repl.co", "*.replit.app"],
  // Three.js must be transpiled for Next.js bundler
  transpilePackages: ["three"],
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/.next/**",
          "**/.local/**",
          "**/.agents/**",
          "**/attached_assets/**",
          "**/public/models/**",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
