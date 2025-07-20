import { client, blogPostsQuery } from '@/lib/sanity'
import BlogList from '@/components/BlogList'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  excerpt: string
  mainImage?: any
  tags?: string[]
}

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(blogPostsQuery)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest articles, research insights, and case studies from our data analytics and power systems work.
            </p>
          </div>
        </div>
      </div>
      
      <BlogList posts={posts} title="All Posts" showViewAll={false} />
    </div>
  )
} 