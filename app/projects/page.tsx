import { client, projectsQuery } from '@/lib/sanity'
import ProjectGrid from '@/components/ProjectGrid'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  shortDescription: string
  mainImage?: any
  tags?: string[]
  publishedAt?: string
}

export default async function ProjectsPage() {
  let projects: Project[] = []
  
  try {
    projects = await client.fetch(projectsQuery)
  } catch (error) {
    console.error('Error fetching projects:', error)
    // Return empty array if Sanity is not available
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of data analytics projects, research initiatives, and technical solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <ProjectGrid projects={projects} title="All Projects" showViewAll={false} />
      
      {/* Back to Home Button */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a 
            href="/"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
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