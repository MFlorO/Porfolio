import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'localhost'], 
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);