import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "cloudquantum.cloud",
          },
        ],
        permanent: true,
        destination: "https://cloudquantum.cloud/:path*",
      },
    ];
  },
};

export default nextConfig;
