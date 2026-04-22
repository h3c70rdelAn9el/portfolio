import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/dev/about", destination: "/" },
      { source: "/dev/projects", destination: "/" },
    ];
  },
};

export default nextConfig;
