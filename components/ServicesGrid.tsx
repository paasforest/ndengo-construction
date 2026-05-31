import Link from 'next/link'
import { UtensilsCrossed, Bath, Building2, HardHat, Wrench, Trees } from 'lucide-react'

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Renovations',
    description: 'Full kitchen remodels including plumbing, electrical, tiling, and cabinetry.',
    href: '/services#kitchens',
  },
  {
    icon: Bath,
    title: 'Bathroom Renovations',
    description:
      'Gut and rebuild or refresh. We handle everything including waterproofing and plumbing.',
    href: '/services#bathrooms',
  },
  {
    icon: Building2,
    title: 'Home Extensions',
    description: 'Single or double storey extensions. We manage plans, approval, and build.',
    href: '/services#extensions',
  },
  {
    icon: HardHat,
    title: 'Full Renovations',
    description: 'Complete home transformations. From structural work to final finishes.',
    href: '/services#full-renovations',
  },
  {
    icon: Wrench,
    title: 'Plumbing & Electrical',
    description: 'Standalone plumbing and electrical jobs. Certified, insured, and reliable.',
    href: '/services#plumbing-electrical',
  },
  {
    icon: Trees,
    title: 'Outdoor Builds',
    description: 'Braai areas, patios, boundary walls, driveways, and garden rooms.',
    href: '/services#outdoor',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal mb-3">
            What We Build
          </h2>
          <p className="text-stone text-base">
            We handle everything in-house — one team, one quote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(({ icon: Icon, title, description, href }) => (
            <div
              key={title}
              className="bg-white border border-mist rounded overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="h-1 bg-sage" />
              <div className="p-6">
                <Icon className="w-8 h-8 text-sage mb-4" />
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">{title}</h3>
                <p className="text-stone text-sm leading-relaxed mb-4">{description}</p>
                <Link
                  href={href}
                  className="text-sage text-sm font-semibold hover:text-sage-dark transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Get a Quote for Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
