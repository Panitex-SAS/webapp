import { MetadataRoute } from 'next';
import industries from '@locale/data/industries.json';

type Industry = {
  id: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://panitex.com.co';
  
  // Static pages for both locales
  const locales = ['es', 'en'];
  const staticPages: MetadataRoute.Sitemap = [];
  
  locales.forEach(locale => {
    staticPages.push(
      // Homepage
      {
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
        alternates: {
          languages: {
            es: `${baseUrl}/es`,
            en: `${baseUrl}/en`
          }
        }
      },
      // Nosotros section index
      {
        url: `${baseUrl}/${locale}/nosotros`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es/nosotros`,
            en: `${baseUrl}/en/nosotros`
          }
        }
      },
      {
        url: `${baseUrl}/${locale}/nosotros/ceo`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es/nosotros/ceo`,
            en: `${baseUrl}/en/nosotros/ceo`
          }
        }
      },
      {
        url: `${baseUrl}/${locale}/nosotros/historia`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es/nosotros/historia`,
            en: `${baseUrl}/en/nosotros/historia`
          }
        }
      },
      {
        url: `${baseUrl}/${locale}/nosotros/proposito-valores`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es/nosotros/proposito-valores`,
            en: `${baseUrl}/en/nosotros/proposito-valores`
          }
        }
      },
      // Industries section index
      {
        url: `${baseUrl}/${locale}/industrias`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        alternates: {
          languages: {
            es: `${baseUrl}/es/industrias`,
            en: `${baseUrl}/en/industrias`
          }
        }
      },
      // Contact page
      {
        url: `${baseUrl}/${locale}/contactanos`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            es: `${baseUrl}/es/contactanos`,
            en: `${baseUrl}/en/contactanos`
          }
        }
      }
    );
    
    // Dynamic industry detail pages
    industries.forEach((industry: Industry) => {
      staticPages.push({
        url: `${baseUrl}/${locale}/industrias/${industry.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        alternates: {
          languages: {
            es: `${baseUrl}/es/industrias/${industry.id}`,
            en: `${baseUrl}/en/industrias/${industry.id}`
          }
        }
      });
    });
  });

  return staticPages;
}
