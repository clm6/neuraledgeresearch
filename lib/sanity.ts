import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
})

// Helper function to get image URL with proper sizing
export function urlFor(source: any) {
  return client.image(source).auto('format').fit('max')
}

// GROQ queries for fetching data
export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage,
    tags
  }
`

export const blogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage,
    body,
    tags
  }
`

export const projectsQuery = `
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    mainImage,
    tags,
    publishedAt
  }
`

export const projectQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    mainImage,
    body,
    tags,
    publishedAt
  }
`

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    title,
    tagline,
    contactEmail,
    logo,
    description
  }
` 