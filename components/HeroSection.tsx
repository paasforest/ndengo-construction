import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:justify-start overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&auto=format&fit=crop&q=80"
        alt="Premium home renovation Western Cape"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/85 via-charcoal/70 to-sage-dark/60" />

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
