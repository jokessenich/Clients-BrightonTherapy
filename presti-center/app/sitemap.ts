import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SERVICE_CONTENT } from '@/lib/services-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core = [
    { url: SITE.url, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${SITE.url}/about`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/services`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/staff`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/teletherapy`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/family-workshop`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/contact`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${SITE.url}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const services = SERVICE_CONTENT.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }));

  return [
    ...core.map((c) => ({ ...c, lastModified: now })),
    ...services,
  ];
}
