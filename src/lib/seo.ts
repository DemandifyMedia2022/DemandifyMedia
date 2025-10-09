import type { Metadata } from 'next'

// Site-wide config
const SITE_NAME = 'Demandify Media'
const SITE_TWITTER = '@demandifymedia'
const DEFAULT_OG = '/og-default.jpg'

const getSiteUrl = () =>
  (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://demandifymedia.com')

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage,
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = [],
  } = config

  const siteUrl = getSiteUrl()
  const canonicalUrl = canonical?.startsWith('http') ? canonical : canonical ? `${siteUrl}${canonical}` : undefined
  const ogImg = ogImage?.startsWith('http') ? ogImage : ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}${DEFAULT_OG}`

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: SITE_NAME }],
    openGraph: {
      title,
      description,
      type: ogType,
      locale: 'en_US',
      siteName: SITE_NAME,
      ...(ogImg && { images: [{ url: ogImg, alt: title }] }),
      ...(canonicalUrl && { url: canonicalUrl }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_TWITTER,
      ...(ogImg && { images: [ogImg] }),
    },
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  return metadata
}

// BLOG METADATA
export function generateBlogMetadata(post: {
  title: string
  excerpt: string
  slug: { current: string }
  publishedAt: string
  author?: string
  tags?: string[]
  mainImage?: string // absolute or relative
}): Metadata {
  const siteUrl = getSiteUrl()
  const canonical = `${siteUrl}/blog/${post.slug.current}`
  const ogImage = post.mainImage
    ? (post.mainImage.startsWith('http') ? post.mainImage : `${siteUrl}${post.mainImage}`)
    : `${siteUrl}${DEFAULT_OG}`

  return generateMetadata({
    title: `${post.title} | ${SITE_NAME} Blog`,
    description:
      post.excerpt || `Read ${post.title} on ${SITE_NAME} blog. Insights on B2B marketing, lead generation, and growth strategies.`,
    keywords: [
      'B2B marketing',
      'lead generation',
      'demand generation',
      'marketing strategy',
      'growth',
      ...(post.tags || []),
    ],
    canonical,
    ogImage,
    ogType: 'article',
    publishedTime: post.publishedAt,
    author: post.author || SITE_NAME,
    section: 'Blog',
    tags: post.tags || [],
  })
}

// CASE STUDY METADATA
export function generateCaseStudyMetadata(caseStudy: {
  title: string
  slug?: string
  publishedAt?: string
  thumbnail?: string
}): Metadata {
  const siteUrl = getSiteUrl()
  const canonical = caseStudy.slug ? `${siteUrl}/case-studies/${caseStudy.slug}` : `${siteUrl}/case-studies`
  const ogImage = caseStudy.thumbnail
    ? (caseStudy.thumbnail.startsWith('http') ? caseStudy.thumbnail : `${siteUrl}${caseStudy.thumbnail}`)
    : `${siteUrl}${DEFAULT_OG}`

  return generateMetadata({
    title: `${caseStudy.title} | ${SITE_NAME} Case Studies`,
    description: `Explore ${caseStudy.title} case study. Real-world examples of successful B2B marketing campaigns and strategies.`,
    keywords: [
      'case study',
      'B2B marketing',
      'success stories',
      'marketing results',
      'lead generation results',
      'demand generation',
    ],
    canonical,
    ogImage,
    ogType: 'article',
    publishedTime: caseStudy.publishedAt,
    section: 'Case Studies',
  })
}

// RESOURCE METADATA
export function generateResourceMetadata(resource: {
  title: string
  slug?: string
  publishedAt?: string
  thumbnail?: string
}): Metadata {
  const siteUrl = getSiteUrl()
  const canonical = resource.slug ? `${siteUrl}/resources/${resource.slug}` : `${siteUrl}/resources`
  const ogImage = resource.thumbnail
    ? (resource.thumbnail.startsWith('http') ? resource.thumbnail : `${siteUrl}${resource.thumbnail}`)
    : `${siteUrl}${DEFAULT_OG}`

  return generateMetadata({
    title: `${resource.title} | ${SITE_NAME} Learning Resources`,
    description: `Download ${resource.title} and level up your marketing knowledge. Free resources for B2B marketers and growth professionals.`,
    keywords: [
      'marketing resources',
      'B2B marketing guide',
      'lead generation resources',
      'marketing templates',
      'growth resources',
      'demand generation',
    ],
    canonical,
    ogImage,
    ogType: 'article',
    publishedTime: resource.publishedAt,
    section: 'Learning Resources',
  })
}

// JSON-LD HELPERS
export function generateBlogStructuredData(post: {
  title: string
  excerpt: string
  slug: { current: string }
  publishedAt: string
  author?: string
  tags?: string[]
  mainImage?: string
}) {
  const siteUrl = getSiteUrl()
  const canonical = `${siteUrl}/blog/${post.slug.current}`
  const ogImage = post.mainImage
    ? (post.mainImage.startsWith('http') ? post.mainImage : `${siteUrl}${post.mainImage}`)
    : `${siteUrl}${DEFAULT_OG}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: ogImage,
    author: {
      '@type': 'Organization',
      name: post.author || SITE_NAME,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    url: canonical,
    ...(post.tags && post.tags.length > 0 && {
      keywords: post.tags.join(', '),
      about: post.tags.map((t) => ({ '@type': 'Thing', name: t })),
    }),
  }
}

export function generateCaseStudyStructuredData(caseStudy: {
  title: string
  slug?: string
  publishedAt?: string
  thumbnail?: string
}) {
  const siteUrl = getSiteUrl()
  const canonical = caseStudy.slug ? `${siteUrl}/case-studies/${caseStudy.slug}` : `${siteUrl}/case-studies`
  const ogImage = caseStudy.thumbnail
    ? (caseStudy.thumbnail.startsWith('http') ? caseStudy.thumbnail : `${siteUrl}${caseStudy.thumbnail}`)
    : `${siteUrl}${DEFAULT_OG}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: `Case study: ${caseStudy.title}`,
    image: ogImage,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: caseStudy.publishedAt,
    dateModified: caseStudy.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    url: canonical,
    articleSection: 'Case Studies',
    about: {
      '@type': 'Thing',
      name: 'B2B Marketing Case Study',
    },
  }
}

export function generateResourceStructuredData(resource: {
  title: string
  slug?: string
  publishedAt?: string
  thumbnail?: string
}) {
  const siteUrl = getSiteUrl()
  const canonical = resource.slug ? `${siteUrl}/resources/${resource.slug}` : `${siteUrl}/resources`
  const ogImage = resource.thumbnail
    ? (resource.thumbnail.startsWith('http') ? resource.thumbnail : `${siteUrl}${resource.thumbnail}`)
    : `${siteUrl}${DEFAULT_OG}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    description: `Learning resource: ${resource.title}`,
    image: ogImage,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: resource.publishedAt,
    dateModified: resource.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    url: canonical,
    articleSection: 'Learning Resources',
    about: {
      '@type': 'Thing',
      name: 'Marketing Learning Resource',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
