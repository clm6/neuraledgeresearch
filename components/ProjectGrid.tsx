import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { format } from 'date-fns'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  shortDescription: string
  mainImage?: any
  tags?: string[]
  publishedAt?: string
}

interface ProjectGridProps {
  projects: Project[]
  title?: string
  showViewAll?: boolean
}

export default function ProjectGrid({ projects, title = "Our Projects", showViewAll = true }: ProjectGridProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              {project.mainImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={urlFor(project.mainImage).width(400).height(225).url()}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link href={`/projects/${project.slug.current}`} className="hover:text-blue-600 transition-colors">
                    {project.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{project.shortDescription}</p>
                
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {project.publishedAt && (
                  <div className="text-sm text-gray-500 mb-4">
                    {format(new Date(project.publishedAt), 'MMM dd, yyyy')}
                  </div>
                )}
                
                <Link 
                  href={`/projects/${project.slug.current}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View Project
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              View All Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
} 