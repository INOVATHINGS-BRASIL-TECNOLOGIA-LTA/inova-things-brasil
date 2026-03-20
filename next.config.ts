import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.3.202'],
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
