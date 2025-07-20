import { client, blogPostQuery } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  excerpt: string
  mainImage?: any
  body: any
  tags?: string[]
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post: BlogPost | null = null
  
  try {
    post = await client.fetch(blogPostQuery, { slug: params.slug })
  } catch (error) {
    console.error('Error fetching blog post:', error)
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">{post.excerpt}</p>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.mainImage && (
            <div className="mb-12">
              <img
                src={urlFor(post.mainImage).width(800).height(400).url()}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} />
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Written by {post.author}
              </div>
              <a 
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                ← Back to Blog
              </a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
} 