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
      {
        url: `${baseUrl}/${locale}/nosotros/ceo`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/nosotros/historia`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/nosotros/proposito-valores`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/contactanos`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }
    );
    
    // Dynamic industry pages
    industries.forEach((industry: Industry) => {
      staticPages.push({
        url: `${baseUrl}/${locale}/industrias/${industry.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      });
    });
  });

  return staticPages;
}
