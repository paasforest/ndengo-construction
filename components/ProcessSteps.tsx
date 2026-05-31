import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Site Visit',
    description:
      'We come to you. Free, no obligation. We look at the space and listen to what you want.',
  },
  {
    number: '02',
    title: 'Clear Quote',
    description:
      'You receive a detailed written quote within 5 working days. No hidden costs.',
  },
  {
    number: '03',
    title: 'We Build',
    description:
      'Our team handles everything — plumbing, electrical, tiling, and finishing. We keep you updated throughout.',
  },
  {
    number: '04',
    title: 'Handover',
    description:
      "We walk through the finished work with you. You only sign off when you're happy.",
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal mb-3">
            How It Works
          </h2>
          <p className="text-stone text-base">
            No surprises. Here&apos;s exactly what working with Ndengo Construction looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <span className="font-heading text-6xl font-light text-sage/40 leading-none mb-3">
                {step.number}
              </span>
              <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Start with a Free Site Visit
          </Link>
        </div>
      </div>
    </section>
  )
}
