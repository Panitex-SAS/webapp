import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: false,
  },

  // Rewrites for images to bypass locale routing
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:locale(es|en)/images/:path*',
          destination: '/images/:path*',
        },
      ],
    };
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      // cPanel access
      {
        source: '/cpanel',
        destination: 'http://50.87.7.74:2083',
        permanent: false,
      },
      
      // Redirect root to default Spanish locale (temporary for flexibility)
      {
        source: '/',
        destination: '/es',
        permanent: false,
      },
      
      // Redirect old nosotros section pages to Spanish locale
      {
        source: '/nosotros',
        destination: '/es/nosotros',
        permanent: true,
      },
      {
        source: '/quienes-somos.php',
        destination: '/es/nosotros/ceo',
        permanent: true,
      },
      {
        source: '/es/quienes-somos.php',
        destination: '/es/nosotros/ceo',
        permanent: true,
      },
      {
        source: '/nosotros/ceo',
        destination: '/es/nosotros/ceo',
        permanent: true,
      },
      {
        source: '/nosotros/historia',
        destination: '/es/nosotros/historia',
        permanent: true,
      },
      {
        source: '/nosotros/proposito-valores',
        destination: '/es/nosotros/proposito-valores',
        permanent: true,
      },
      
      // Redirect old industry pages to Spanish locale
      {
        source: '/industrias',
        destination: '/es/industrias',
        permanent: true,
      },
      {
        source: '/industrias/:id',
        destination: '/es/industrias/:id',
        permanent: true,
      },
      
      // Redirect old contact page to Spanish locale
      {
        source: '/contactanos',
        destination: '/es/contactanos',
        permanent: true,
      },
      
      // Catch-all: redirect any other old URLs without locale to Spanish
      // Excludes: locale paths (es/en), Next.js internals, static files, API routes, images
      {
        source: '/:path((?!es|en|_next|static|favicon.ico|robots.txt|sitemap.xml|api|images).*)',
        destination: '/es/:path*',
        permanent: true,
      },
    ];
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
