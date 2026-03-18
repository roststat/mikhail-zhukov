import { defineQuery } from 'next-sanity'

export const allPostsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "categories": categories[]->{ _id, title },
  }
`)

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "categories": categories[]->{ _id, title },
    body,
  }
`)
