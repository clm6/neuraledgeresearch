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
  let posts: BlogPost[] = []
  
  try {
    posts = await client.fetch(blogPostsQuery)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Return empty array if Sanity is not available
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest articles, research insights, and case studies from our data analytics and power systems work.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <BlogList posts={posts} title="All Articles" showViewAll={false} />
    </div>
  )
} 