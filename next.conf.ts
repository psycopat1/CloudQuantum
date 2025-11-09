import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "cloudquantum.ci",
          },
        ],
        permanent: true,
        destination: "https://cloudquantum.ci/:path*",
      },
    ];
  },
};

export default nextConfig;
