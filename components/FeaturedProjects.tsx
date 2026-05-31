import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { getFeaturedProjects } from '@/lib/projects'

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal mb-3">
            Recent Work
          </h2>
          <p className="text-stone text-base">
            A few examples of what we&apos;ve built for Western Cape homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              suburb={project.suburb}
              type={project.type}
              duration={project.duration}
              description={project.description}
              image={project.coverImage}
              imageAlt={project.coverImageAlt}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold px-8 py-4 rounded text-center transition-colors"
          >
            View All Projects
          </Link>
          <Link
            href="/contact"
            className="bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded text-center transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
