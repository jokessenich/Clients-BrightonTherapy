/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next.js Image component auto-optimizes local images in /public.
  // Add remotePatterns here only if fetching from external CDNs.

  // SEO: 301 redirects from old-site URLs that changed paths. These exist so
  // Google (and any inbound backlinks) cleanly reattribute to the new URLs
  // when the site migrates from web.com hosting to Vercel.
  //
  // Note: Next.js by default already redirects trailing-slash URLs
  // (e.g. /staff/ -> /staff) so we only list paths that genuinely changed.
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/groups',
        destination: '/family-workshop',
        permanent: true,
      },
      {
        source: '/groups/',
        destination: '/family-workshop',
        permanent: true,
      },
      {
        source: '/privacy-and-cookies-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/privacy-and-cookies-policy/',
        destination: '/privacy',
        permanent: true,
      },
      // The /services/couples comparison page existed briefly before being
      // removed in favor of separate couples-counseling and couples-coaching
      // pages. Redirect any lingering links to the services index.
      {
        source: '/services/couples',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/couples/',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
