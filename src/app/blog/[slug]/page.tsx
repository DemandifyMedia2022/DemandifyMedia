import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity.client'
import { postBySlugQuery, recentPostsQuery, postsQuery } from '@/lib/queries'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react'
import { urlForImage } from '@/lib/sanity.image'
import type { Metadata } from 'next'

export const revalidate = 60

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts: any[] = await client.fetch(postsQuery)
  return posts.map((p) => ({ slug: p.slug?.current }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch<any>(postBySlugQuery, { slug })
  if (!post) {
    return {
      title: 'Post not found',
      robots: { index: false, follow: false },
      alternates: { canonical: `/blog/${slug}` },
    }
  }
  const title: string = post.seoTitle || post.title || 'Blog Post'
  const description: string = post.seoDescription || post.excerpt || ''
  const ogImage: string | undefined = post.coverImage?.asset?.url
  const url = `https://demandifymedia.com/blog/${slug}`

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: { index: true, follow: true },
  }
}

export default async function SinglePostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch<any>(postBySlugQuery, { slug })
  const recent = await client.fetch<any[]>(recentPostsQuery, { slug })

  if (!post) {
    return (
      <main className="container mx-auto px-6 pt-28 md:pt-32">
        <p className="text-neutral-600">Post not found.</p>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-6 pt-28 md:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main content */}
        <article className="lg:col-span-8">
          {/* JSON-LD: Article schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: post.title,
                datePublished: post.publishedAt || undefined,
                dateModified: post._updatedAt || post.publishedAt || undefined,
                author: post.author?.name
                  ? { '@type': 'Person', name: post.author.name }
                  : undefined,
                image: post.coverImage?.asset?.url || undefined,
                mainEntityOfPage: `https://demandifymedia.com/blog/${slug}`,
                publisher: {
                  '@type': 'Organization',
                  name: 'Demandify Media',
                },
              }),
            }}
          />
          {/* Hero image */}
          {post.coverImage?.asset?.url && (
            <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden ring-1 ring-black/5">
              <Image
                src={post.coverImage.asset.url}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold leading-tight text-neutral-900">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-2 text-sm text-neutral-600">
            {post.author?.name && <span>By {post.author.name}</span>}
            {post.publishedAt && (
              <span className="ml-2">• {new Date(post.publishedAt).toLocaleDateString()}</span>
            )}
          </div>

          {/* Body */}
          <div className="mt-6 prose prose-neutral max-w-none">
            <PortableText
              value={post.body as PortableTextBlock[]}
              components={portableComponents}
            />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="rounded-xl border bg-white shadow-sm p-4">
            <h3 className="text-lg font-semibold">Recent Posts</h3>
            <div className="mt-4 space-y-4">
              {recent.map((r) => (
                <Link
                  key={r._id}
                  href={`/blog/${r.slug?.current ?? ''}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="relative w-20 h-14 rounded-md overflow-hidden bg-neutral-100 ring-1 ring-black/5">
                    {r.coverImage?.asset?.url && (
                      <Image src={r.coverImage.asset.url} alt={r.title} fill className="object-cover" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium group-hover:text-[#b300a5] transition-colors line-clamp-2">
                      {r.title}
                    </p>
                    {r.publishedAt && (
                      <p className="text-xs text-neutral-500">
                        {new Date(r.publishedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

// Local Portable Text components for rendering Sanity content
const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const builder = value ? urlForImage(value) : null
      const src = builder ? builder.width(1200).url() : null
      if (!src) return null
      const alt = value?.alt || ''
      return (
        <div className="relative w-full aspect-[16/9] my-6 rounded-xl overflow-hidden ring-1 ring-black/5 bg-neutral-100">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      )
    },
  },
  block: {
    h2: ({ children }) => <h2 className="mt-8 mb-3 text-2xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 mb-2 text-xl font-semibold">{children}</h3>,
    normal: ({ children }) => <p className="my-3 leading-7 text-neutral-800">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-1 my-3">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-1 my-3">{children}</ol>,
  },
}
