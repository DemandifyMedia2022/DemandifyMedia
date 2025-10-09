import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, strategies, and resources from Demandify Media on performance marketing, content, and growth.',
  alternates: { canonical: '/blog' },
}

export default async function BlogPage() {
  type Post = {
    _id: string
    title?: string
    slug?: { current?: string }
    excerpt?: string
    coverImage?: { asset?: { url?: string } }
  }
  const posts = await client.fetch<Post[]>(postsQuery)
  return (
    <main className="container mx-auto px-6 pt-28 md:pt-32">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((p: Post) => {
          const slug = p.slug?.current
          const href = slug ? `/blog/${slug}` : '#'
          return (
          <Link key={p._id} href={href} className="block rounded-xl border bg-white shadow-sm overflow-hidden" aria-disabled={!slug}>
            <div className="relative w-full aspect-video bg-neutral-100">
              {p.coverImage?.asset?.url && (
                <Image
                  src={p.coverImage.asset.url}
                  alt={p.title || 'Post cover'}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <p className="font-semibold">{p.title}</p>
              {p.excerpt && <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{p.excerpt}</p>}
            </div>
          </Link>
        )})}
      </div>
    </main>
  )
}
