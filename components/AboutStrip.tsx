import Link from 'next/link'

export default function AboutStrip() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo placeholder */}
          {/* TODO: Replace with real team/site photo using next/image */}
          <div className="aspect-[3/4] bg-mist rounded-lg flex items-center justify-center text-stone/30 text-sm max-w-sm mx-auto md:mx-0 w-full">
            Photo coming soon
          </div>

          {/* Text */}
          <div>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal mb-6">
              Built on honest work.
            </h2>
            <div className="space-y-4 text-stone text-base leading-relaxed">
              <p>
                Ndengo Construction has been renovating Western Cape homes for over 5 years. We
                started because homeowners deserved better — a team that shows up, communicates
                clearly, and finishes what they start.
              </p>
              <p>
                We handle everything in-house: renovations, extensions, plumbing, and electrical.
                One team, one point of contact, one standard of work.
              </p>
              <p>Based in the Western Cape. Available across the region.</p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 text-sage font-semibold hover:text-sage-dark transition-colors"
            >
              More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
