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
  const projects: Project[] = await client.fetch(projectsQuery)

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of data analytics projects, research initiatives, and technical solutions.
            </p>
          </div>
        </div>
      </div>
      
      <ProjectGrid projects={projects} title="All Projects" showViewAll={false} />
    </div>
  )
} 