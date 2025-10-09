import type { MetadataRoute } from 'next'
import { client } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://demandifymedia.com'
  const now = new Date()

  const posts: { slug?: { current?: string }; _updatedAt?: string }[] =
    await client.fetch(postsQuery)

  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/blog`, lastModified: now },
    ...posts
      .map((p) =>
        p.slug?.current
          ? {
              url: `${base}/blog/${p.slug.current}`,
              lastModified: p._updatedAt ? new Date(p._updatedAt) : now,
            }
          : null
      )
      .filter(Boolean) as MetadataRoute.Sitemap,
  ]
}
