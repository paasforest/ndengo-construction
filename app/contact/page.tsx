import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact & Get a Quote | Ndengo Construction',
  description:
    'Book a free site visit or send us your project details. We respond within 1 business day.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white mb-3">
            Let&apos;s talk about your project.
          </h1>
          <p className="text-white/70 text-lg">
            Book a free site visit or send us a message. We respond within 1 business day.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 md:py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left — Contact details */}
            <div>
              <h2 className="font-heading font-semibold text-2xl text-charcoal mb-8">
                Get in touch
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-stone uppercase tracking-wide mb-2">Call or WhatsApp</p>
                  <a
                    href="tel:+27774388845"
                    className="font-heading text-3xl font-semibold text-charcoal hover:text-sage transition-colors"
                  >
                    +27 77 438 8845
                  </a>
                </div>

                <div>
                  <a
                    href="https://wa.me/27774388845?text=Hi%20Ndengo%20Construction%2C%20I%27d%20like%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-6 py-3 rounded transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Message us on WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-3 text-stone">
                  <Mail className="w-5 h-5 text-sage shrink-0" />
                  <a
                    href="mailto:hello@ndengoconstruction.co.za"
                    className="hover:text-charcoal transition-colors"
                  >
                    hello@ndengoconstruction.co.za
                  </a>
                </div>

                <div className="flex items-start gap-3 text-stone">
                  <Clock className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p>Monday–Friday: 7am–5pm</p>
                    <p>Saturday: 8am–1pm</p>
                    <p className="text-stone/60 mt-1">Closed Sundays and public holidays</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone">
                  <MapPin className="w-5 h-5 text-sage shrink-0" />
                  <span className="text-sm">Western Cape, South Africa</span>
                </div>
              </div>

              <div className="mt-12 bg-white border border-mist rounded-lg p-6">
                <h3 className="font-heading font-semibold text-base text-charcoal mb-3">
                  What to expect
                </h3>
                <ul className="space-y-2.5 text-sm text-stone">
                  <li className="flex items-start gap-2">
                    <span className="text-sage shrink-0">1.</span>
                    You send us your request
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage shrink-0">2.</span>
                    We call you back within 1 business day
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage shrink-0">3.</span>
                    We arrange a free site visit at a time that suits you
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage shrink-0">4.</span>
                    We send through a detailed written quote within 5 working days
                  </li>
                </ul>
              </div>
            </div>

            {/* Right — Quote form */}
            <div className="bg-white border border-mist rounded-lg p-8">
              <h2 className="font-heading font-semibold text-2xl text-charcoal mb-6">
                Request a Quote
              </h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
