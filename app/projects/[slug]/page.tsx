import { client, projectQuery } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  shortDescription: string
  mainImage?: any
  body: any
  tags?: string[]
  publishedAt?: string
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project: Project = await client.fetch(projectQuery, { slug: params.slug })

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            {project.mainImage && (
              <div className="mb-8">
                <img
                  src={urlFor(project.mainImage).width(800).height(400).url()}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
            
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              
              <p className="text-xl text-gray-600 mb-6">{project.shortDescription}</p>
              
              {project.publishedAt && (
                <div className="text-sm text-gray-500 mb-4">
                  Published {format(new Date(project.publishedAt), 'MMMM dd, yyyy')}
                </div>
              )}
              
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={project.body} />
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                NeuralEdge Research Project
              </div>
              <a 
                href="/projects"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                ← Back to Projects
              </a>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
} 