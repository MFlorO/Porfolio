import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pinimg.com', 'tse4.mm.bing.net'], 
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);