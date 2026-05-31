import Link from 'next/link'
import { Clock } from 'lucide-react'

interface ProjectCardProps {
  slug: string
  title: string
  suburb: string
  type: string
  duration: string
  description: string
}

export default function ProjectCard({
  slug,
  title,
  suburb,
  type,
  duration,
  description,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-mist rounded overflow-hidden group hover:shadow-md transition-shadow">
      {/* TODO: Replace with real project photo using next/image */}
      <div className="aspect-video bg-mist relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-stone/30 text-sm">
          Project photo coming soon
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-sage-light text-sage text-xs font-semibold px-2.5 py-1 rounded">
            {type}
          </span>
          <span className="text-xs text-stone">{suburb}</span>
        </div>
        <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">{title}</h3>
        <p className="text-stone text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-stone">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </span>
          <Link
            href={`/projects/${slug}`}
            className="text-sage text-sm font-semibold hover:text-sage-dark transition-colors"
          >
            View Project →
          </Link>
        </div>
      </div>
    </div>
  )
}
