import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/projects'
import { Clock, MapPin, Tag } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} | Ndengo Construction`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <>
      {/* Hero image placeholder */}
      {/* TODO: Replace with real project hero image using next/image */}
      <div className="aspect-video md:aspect-[21/7] bg-mist w-full flex items-center justify-center text-stone/30 text-sm">
        Project hero photo coming soon
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-stone mb-8 flex items-center gap-2">
          <Link href="/projects" className="hover:text-sage transition-colors">
            Projects
          </Link>
          <span>›</span>
          <span className="text-charcoal">{project.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-sage-light text-sage text-xs font-semibold px-2.5 py-1 rounded">
                {project.type}
              </span>
              <span className="bg-mist text-stone text-xs font-medium px-2.5 py-1 rounded flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.suburb}
              </span>
              <span className="bg-mist text-stone text-xs font-medium px-2.5 py-1 rounded flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {project.duration}
              </span>
            </div>

            <h1 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal mb-10">
              {project.title}
            </h1>

            <div className="space-y-10">
              <div>
                <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  The Brief
                </h2>
                <p className="text-stone leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  What We Did
                </h2>
                <p className="text-stone leading-relaxed mb-3">{project.challenge}</p>
                <p className="text-stone leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  The Result
                </h2>
                <p className="text-stone leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* Photo gallery */}
            <div className="mt-12">
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-4">
                Project Photos
              </h2>
              {/* TODO: Replace with real project photos using next/image */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="aspect-video bg-mist rounded flex items-center justify-center text-stone/30 text-xs"
                  >
                    Photo {n} coming soon
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="bg-white border border-mist rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-5">
                Project Details
              </h3>
              <dl className="space-y-3 mb-6">
                <div>
                  <dt className="text-xs text-stone uppercase tracking-wide mb-1">Type</dt>
                  <dd className="text-sm font-medium text-charcoal flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-sage" />
                    {project.type}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-stone uppercase tracking-wide mb-1">Location</dt>
                  <dd className="text-sm font-medium text-charcoal flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sage" />
                    {project.suburb}, Western Cape
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-stone uppercase tracking-wide mb-1">Duration</dt>
                  <dd className="text-sm font-medium text-charcoal flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sage" />
                    {project.duration}
                  </dd>
                </div>
              </dl>

              <Link
                href={`/contact?service=${encodeURIComponent(project.type)}`}
                className="block w-full bg-sage hover:bg-sage-dark text-white font-semibold py-3.5 rounded text-center transition-colors text-sm"
              >
                Get a Similar Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-warm border-t border-mist">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-charcoal mb-3">
            Start Your Own Project
          </h2>
          <p className="text-stone mb-8">
            Book a free site visit and let&apos;s talk about what you have in mind.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Book a Free Site Visit
          </Link>
        </div>
      </section>
    </>
  )
}
