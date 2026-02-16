import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://motorandmechanix.co.in';

  // In a real app, you might fetch dynamic routes from a database or API
  // For now, we'll include the main paths
  const paths = [
    '',
    '/services',
    '/contact-us',
    '/blogs',
    '/multi-brand',
    '/tyres',
    '/why-us',
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
}
