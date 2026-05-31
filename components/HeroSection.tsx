import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:justify-start overflow-hidden">
      {/* TODO: Replace with real hero photo via next/image */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-sage-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-0 w-full">
        <div className="max-w-3xl">
          <h1 className="font-heading font-semibold text-5xl md:text-7xl text-white leading-tight text-balance mb-6">
            Home renovations,<br />done properly.
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Premium renovations, extensions, plumbing and electrical for Western Cape homeowners.
            Free site visits across the Western Cape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/contact"
              className="bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded text-center transition-colors"
            >
              Book a Free Site Visit
            </Link>
            <Link
              href="/projects"
              className="border border-white text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-4 rounded text-center transition-colors"
            >
              View Our Projects
            </Link>
          </div>
          <a
            href="tel:+27774388845"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            Or call us: +27 77 438 8845
          </a>
        </div>
      </div>
    </section>
  )
}
