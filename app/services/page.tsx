import type { Metadata } from 'next'
import Link from 'next/link'
import { UtensilsCrossed, Bath, Building2, HardHat, Wrench, Trees } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Ndengo Construction',
  description:
    'Kitchen renovations, bathroom renovations, home extensions, full renovations, plumbing and electrical, and outdoor builds across the Western Cape.',
}

const services = [
  {
    id: 'kitchens',
    icon: UtensilsCrossed,
    title: 'Kitchen Renovations',
    tagline: 'Full kitchen remodels, built to last.',
    description: [
      'A kitchen renovation is one of the highest-impact projects in any home. Done well, it transforms how you live. Done poorly, it creates years of problems. We approach every kitchen renovation with the same attention to detail — whether it\'s a modest refresh or a full layout change.',
      'We handle the entire project in-house: demolition, new plumbing layouts, electrical upgrades, waterproofing, cabinetry installation, tiling, and final finishes. No subcontractors disappearing mid-project. One team, start to finish.',
      'Every kitchen we build is quoted in full detail before work begins. You know exactly what you\'re getting, what it costs, and how long it will take.',
    ],
    includes: [
      'Full demolition and waste removal',
      'Plumbing relocation and new supply lines',
      'Electrical upgrades and additional points',
      'Cabinetry installation (supply or install-only)',
      'Tiling — floors, walls, splashbacks',
      'Undercounter and overhead lighting',
      'Appliance integration',
      'Final finishes and clean-up',
    ],
  },
  {
    id: 'bathrooms',
    icon: Bath,
    title: 'Bathroom Renovations',
    tagline: 'Gut and rebuild, or a focused refresh.',
    description: [
      'A poorly waterproofed bathroom causes more damage than almost any other renovation failure. We\'ve repaired too many bathrooms where waterproofing was skipped or done incorrectly. Our approach: we do it right the first time.',
      'Whether you\'re doing a complete gut and rebuild or refreshing fittings and tiles, we bring the same standard of work. All our bathroom renovations include a full waterproofing membrane system before any tiling or fitting installation.',
      'We work neatly, protect the rest of your home during the build, and leave the space spotless when we\'re done.',
    ],
    includes: [
      'Full demolition and waste removal',
      'Waterproofing membrane installation (tanking system)',
      'Plumbing — new layouts, concealed pipework',
      'Electrical — heated towel rails, lighting, extractor fans',
      'Tiling — floor and wall',
      'Sanitaryware and fitting installation',
      'Shower enclosures and frameless glass',
      'Final grouting, silicone, and clean-up',
    ],
  },
  {
    id: 'extensions',
    icon: Building2,
    title: 'Home Extensions',
    tagline: 'Single or double storey. Plans to handover.',
    description: [
      'A home extension adds permanent value and space. It\'s also one of the most complex residential building projects — requiring structural assessment, engineering sign-off, municipal plans, and approval before a single brick is laid.',
      'We manage the full process. From initial design and drawings through to municipal submission, approval, construction, and final occupation certificate. You don\'t need to chase the municipality or manage multiple contractors.',
      'We\'ve built single-storey additions, double-storey extensions above garages, and studio rooms in gardens. Each project is assessed individually and quoted in full detail.',
    ],
    includes: [
      'Structural assessment and engineering input',
      'Architectural drawings and plans',
      'Municipal submission and approval management',
      'Foundations and structural construction',
      'Roofing and weatherproofing',
      'Windows and doors',
      'Internal finishing — plastering, tiling, painting',
      'Electrical and plumbing to the new space',
      'Occupation certificate application',
    ],
  },
  {
    id: 'full-renovations',
    icon: HardHat,
    title: 'Full Renovations',
    tagline: 'Complete home transformations.',
    description: [
      'Full home renovations require a contractor who can coordinate multiple trades simultaneously without losing control of the schedule or budget. That\'s what we do.',
      'We\'ve managed complete renovations from structural work through to final paint — kitchens, bathrooms, living spaces, electrical, plumbing, flooring, and outdoor areas, all under one contract.',
      'A full renovation is also where hidden issues tend to surface. We price honestly for what we know, communicate clearly when something unexpected comes up, and get your sign-off before any variation to the quote is actioned.',
    ],
    includes: [
      'Full project scoping and detailed quote',
      'Structural and layout changes where required',
      'All wet works — kitchens, bathrooms, laundry',
      'Electrical rewiring or upgrade',
      'Plumbing replacement or relocation',
      'Plastering, skimming, and painting',
      'Flooring — tiles, timber, screed',
      'Windows and doors',
      'Final finishes and clean',
    ],
  },
  {
    id: 'plumbing-electrical',
    icon: Wrench,
    title: 'Plumbing & Electrical',
    tagline: 'Standalone jobs done properly.',
    description: [
      'Not every project is a full renovation. Sometimes you need a specific plumbing fix, a geyser replacement, additional electrical points, or a DB board upgrade. We do those too.',
      'Our plumbers and electricians are certified and insured. We do the work, certify it correctly, and issue the compliance documentation you need.',
      'We don\'t cut corners on electrical or plumbing work. It\'s one of the areas where poor workmanship creates genuine risk — and where it shows up in a building inspection when you sell.',
    ],
    includes: [
      'Geyser installation and replacement',
      'Burst pipe repair and leak tracing',
      'Plumbing relocation and new layouts',
      'Solar geyser and heat pump installation',
      'DB board upgrades and rewiring',
      'Additional plug points and light fittings',
      'Compliance certificates (COC)',
      'Pre-sale electrical inspections',
    ],
  },
  {
    id: 'outdoor',
    icon: Trees,
    title: 'Outdoor Builds',
    tagline: 'Braai areas, patios, walls, and garden rooms.',
    description: [
      'The outdoor areas of a Western Cape home are lived in almost year-round. A well-built braai area, covered patio, or garden room adds usable space and genuine property value.',
      'We build outdoor projects to the same standard as our interior work — properly waterproofed where needed, structurally sound, and finished neatly.',
      'All outdoor builds are quoted in detail. If the project requires plans or approval, we manage that as part of the scope.',
    ],
    includes: [
      'Braai areas — built-in and countertop',
      'Covered patios and pergolas',
      'Entertainment areas',
      'Boundary walls and retaining walls',
      'Garden rooms and flatlets',
      'Paving and driveways',
      'Tiling and waterproofing',
      'Electrical and lighting to outdoor spaces',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white mb-4">
            What We Build
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Six core services, all handled in-house. One team, one quote, one standard of work.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map(({ id, icon: Icon, title, tagline, description, includes }, i) => (
        <section
          key={id}
          id={id}
          className={`py-20 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-warm'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-7 h-7 text-sage" />
                  <span className="text-stone text-sm">{tagline}</span>
                </div>
                <h2 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal mb-6">
                  {title}
                </h2>
                <div className="space-y-4 text-stone leading-relaxed mb-8">
                  {description.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                <Link
                  href={`/contact?service=${encodeURIComponent(title)}`}
                  className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold px-7 py-3.5 rounded transition-colors"
                >
                  Get a Quote for {title}
                </Link>
              </div>

              <div>
                {/* TODO: Replace with real service photo using next/image */}
                <div className="aspect-video bg-mist rounded-lg flex items-center justify-center text-stone/30 text-sm mb-8">
                  Photo coming soon
                </div>

                <div className="bg-sage-light border border-sage/20 rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-base text-charcoal mb-4">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-2">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-stone">
                        <span className="text-sage mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-16 bg-sage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-3xl text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/70 mb-8">
            Book a free site visit or send us your project details. We respond within 1 business day.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-sage hover:bg-warm font-semibold px-8 py-4 rounded transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
