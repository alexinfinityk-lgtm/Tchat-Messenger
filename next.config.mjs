/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nft.ton.org', 'api.ton.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ton.org',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
