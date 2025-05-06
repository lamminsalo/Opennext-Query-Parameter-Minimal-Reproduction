import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/search2",
      destination: "/search?q=äöå€",
      permanent: false,
    },
  ],
};

export default nextConfig;
