import type { NextConfig } from "next";

import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
    experimental:{
        staleTimes:{
            dynamic: 30,
        }
    }, 
    serverExternalPackages: ["@node-rs/argon2"],
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
            pathname: `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/*`,
          },
          {
            protocol: "https",
            hostname: "utfs.io",
            pathname: "/f/**", // Add this for final file URLs
          },
          {
            protocol: "https",
            hostname: `${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh`,
            pathname: `/f/**`,
          },
        ],
    },
    rewrites: async () => {
      return [
        {
          source: "/hashtag/:tag",
          destination: "/search?q=%23:tag",
        },
      ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
