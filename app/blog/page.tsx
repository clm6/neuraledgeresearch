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
      
      {/* Back to Home Button */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a 
            href="/"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </section>
    </div>
  )
} 