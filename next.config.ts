import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/search2",
      destination: "/search",
      permanent: false,
    },
  ],
};

export default nextConfig;
