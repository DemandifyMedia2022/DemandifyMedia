import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  coverImage{asset->{url}},
  publishedAt,
  author->{name, slug, image},
  tags[]-> { title, slug }
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  coverImage{asset->{url}},
  publishedAt,
  author->{name, slug, image},
  tags[]-> { title, slug },
  body
}`

export const recentPostsQuery = groq`*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...6]{
  _id,
  title,
  slug,
  coverImage{asset->{url}},
  publishedAt
}`
