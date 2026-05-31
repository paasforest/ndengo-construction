import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Clock, MapPin, Award, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Ndengo Construction | Western Cape',
  description:
    'Ndengo Construction — 5+ years renovating Western Cape homes. Honest work, clear quotes, one team.',
}

const areas = [
  'Cape Town',
  'Bellville',
  'Parow',
  'Tygervalley',
  'Durbanville',
  'Brackenfell',
  'Kuils River',
  'Stellenbosch',
  'Paarl',
  'Wellington',
  'Somerset West',
  'Strand',
  'Gordon\'s Bay',
  'Franschhoek',
  'Newlands',
  'Claremont',
  'Wynberg',
  'Constantia',
  'Hout Bay',
  'And surrounding areas',
]

const capabilities = [
  'Kitchen Renovations',
  'Bathroom Renovations',
  'Home Extensions — single and double storey',
  'Full Home Renovations',
  'Plumbing — supply and drainage',
  'Electrical — certified and insured',
  'Outdoor Builds — braai areas, patios, walls',
  'Municipal plans and approval management',
]

const beliefs = [
  {
    title: 'Quality over quantity.',
    body: "We don't take on more projects than we can build properly. We'd rather do fewer jobs and do them well than spread the team thin and deliver work we're not proud of.",
  },
  {
    title: 'Communication is part of the job.',
    body: "You should never be chasing us for an update. We keep you informed throughout the project — on progress, on any issues, and on what's coming next.",
  },
  {
    title: 'We finish what we start.',
    body: "We don't move on to the next job until the current one is complete and signed off. Handover means the work is done — not almost done.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white mb-4">
            Built on honest work.
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Western Cape renovation contractors who show up, communicate clearly, and finish what
            they start.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* TODO: Replace with real team/site photo using next/image */}
            <div className="aspect-[4/3] bg-mist rounded-lg flex items-center justify-center text-stone/30 text-sm">
              Photo coming soon
            </div>
            <div>
              <h2 className="font-heading font-semibold text-3xl text-charcoal mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-stone leading-relaxed">
                <p>
                  Ndengo Construction was founded in the Western Cape with one clear purpose: to
                  give homeowners a building contractor they could actually rely on.
                </p>
                <p>
                  Over the past 5 years we&apos;ve renovated kitchens, bathrooms, and full homes
                  across the Western Cape — from Stellenbosch and Paarl through to Cape Town and
                  the surrounding suburbs.
                </p>
                <p>
                  We started because the renovation industry has a trust problem. Too many
                  homeowners have stories of contractors who disappeared mid-project, quoted one
                  price and charged another, or delivered work that failed within months. We
                  started Ndengo to be the alternative.
                </p>
                <p>
                  We&apos;re still a focused team. We don&apos;t operate like a large commercial
                  contractor. We choose the projects we take on carefully, we build them properly,
                  and we stand behind the work we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 md:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal mb-12 text-center">
            What we believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((b) => (
              <div key={b.title} className="bg-white border border-mist rounded-lg p-8">
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {b.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-semibold text-3xl text-charcoal mb-4">
                Our capabilities
              </h2>
              <p className="text-stone mb-8">
                Everything is handled in-house. One team, one contract, one standard.
              </p>
              <ul className="space-y-3">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-stone">
                    <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust signals */}
            <div className="space-y-4">
              <h2 className="font-heading font-semibold text-3xl text-charcoal mb-6">
                Why homeowners trust us
              </h2>
              {[
                { icon: Shield, label: 'Fully Insured', note: 'Public liability and contractor\'s all-risk. Proof available on request.' },
                { icon: Award, label: 'NHBRC Registration In Progress', note: 'Working towards full NHBRC registration.' },
                { icon: Clock, label: '5+ Years Experience', note: 'Renovating Western Cape homes since 2020.' },
                { icon: MapPin, label: 'Free Site Visits', note: 'No charge, no obligation. We come to you.' },
              ].map(({ icon: Icon, label, note }) => (
                <div key={label} className="flex gap-4 p-5 bg-sage-light border border-sage/20 rounded-lg">
                  <Icon className="w-6 h-6 text-sage shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{label}</p>
                    <p className="text-stone text-sm mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 md:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl text-charcoal mb-4">
            Where we work
          </h2>
          <p className="text-stone mb-8">
            We&apos;re based in the Western Cape and work across the region.
          </p>
          {/* TODO: Add map embed or static map image here */}
          <div className="aspect-video bg-mist rounded-lg flex items-center justify-center text-stone/30 text-sm mb-8 max-w-2xl">
            Map coming soon
          </div>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-white border border-mist text-stone text-sm px-3 py-1.5 rounded"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3">
            Work with us
          </h2>
          <p className="text-white/70 mb-8">
            Book a free site visit. No obligation, no sales pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-sage hover:bg-warm font-semibold px-8 py-4 rounded transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
