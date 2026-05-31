import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Our Projects | Ndengo Construction',
  description:
    'Renovations and builds across the Western Cape. View our portfolio of kitchen renovations, bathroom renovations, home extensions, and more.',
}

const filterTypes = [
  'All',
  'Kitchen Renovation',
  'Bathroom Renovation',
  'Home Extension',
  'Plumbing & Electrical',
  'Outdoor Build',
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white mb-4">
            Our Work
          </h1>
          <p className="text-white/70 text-lg">
            Renovations and builds across the Western Cape.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-mist sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {filterTypes.map((type) => (
              <button
                key={type}
                className={`shrink-0 text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  type === 'All'
                    ? 'bg-sage text-white border-sage'
                    : 'border-mist text-stone hover:border-sage hover:text-sage'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                suburb={project.suburb}
                type={project.type}
                duration={project.duration}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-mist">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-charcoal mb-3">
            Like what you see?
          </h2>
          <p className="text-stone mb-8">
            Book a free site visit and let&apos;s talk about your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </>
  )
}
