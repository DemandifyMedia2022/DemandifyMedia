import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/queries'

export const revalidate = 60

type Post = {
  _id: string
  title?: string
  slug?: { current?: string }
  excerpt?: string
  coverImage?: { asset?: { url?: string } }
}

export default async function LibraryPage() {
  const posts = await client.fetch<Post[]>(postsQuery)
  return (
    <main className="container mx-auto px-6 pt-28 md:pt-32">
      <h1 className="text-3xl font-semibold">Library</h1>
      <p className="text-neutral-600 mt-1">All blog posts</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((p: Post) => {
          const slug = p.slug?.current
          const href = slug ? `/blog/${slug}` : '#'
          return (
            <Link
              key={p._id}
              href={href}
              className="group block rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden"
              aria-disabled={!slug}
            >
              <div className="relative w-full aspect-[16/9] bg-gradient-to-b from-neutral-50 to-neutral-100">
                {p.coverImage?.asset?.url ? (
                  <Image
                    src={p.coverImage.asset.url}
                    alt={p.title || 'Post cover'}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-neutral-400 text-sm">
                    No image
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-2xl" />
              </div>
              <div className="p-5">
                <p className="font-semibold leading-snug line-clamp-2 group-hover:text-neutral-900 text-neutral-900/95">
                  {p.title || 'Untitled'}
                </p>
                {p.excerpt && (
                  <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
                    {p.excerpt}
                  </p>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}


