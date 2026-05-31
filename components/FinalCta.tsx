import Link from 'next/link'

export default function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-6">
          Ready to start your renovation?
        </h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Book a free site visit. We&apos;ll come look at your home, listen to what you want, and
          send through a clear quote within a week. No pressure, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-sage hover:bg-warm font-semibold px-8 py-4 rounded text-center transition-colors"
          >
            Book a Site Visit
          </Link>
          <a
            href="https://wa.me/27774388845?text=Hi%20Ndengo%20Construction%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded text-center transition-colors"
          >
            WhatsApp Us
          </a>
          <a
            href="tel:+27774388845"
            className="border border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded text-center transition-colors"
          >
            Call +27 77 438 8845
          </a>
        </div>
      </div>
    </section>
  )
}
