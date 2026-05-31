import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Process | Ndengo Construction',
  description:
    'How working with Ndengo Construction works — from free site visit to handover. No surprises.',
}

const steps = [
  {
    number: '01',
    title: 'Site Visit',
    weHandle: [
      'We come to you — no charge, no obligation',
      'We walk the space and take notes',
      'We listen to what you want and ask the right questions',
      'We identify any issues that might affect the scope or cost',
    ],
    clientDoes: [
      'Show us the space',
      'Tell us what you want and what your priorities are',
      'Ask us anything — no question is too basic',
    ],
    body: [
      "Every project starts with a face-to-face site visit. We don't quote from photos or phone calls. We come to your home, look at the actual space, and have a proper conversation about what you want.",
      "This is where we understand the full scope — not just what you want to do, but what the space allows, what might be hidden behind walls or under floors, and what trade-offs might be worth discussing. We take notes and measurements during the visit.",
      "The site visit is free and carries no obligation. You're not committing to anything by having us visit.",
    ],
  },
  {
    number: '02',
    title: 'Clear Quote',
    weHandle: [
      'Prepare a detailed, itemised written quote',
      'Include a project timeline with clear milestones',
      'Outline payment terms tied to milestones',
      'Flag any items that carry a conditional cost or risk',
    ],
    clientDoes: [
      'Review the quote at your own pace',
      'Ask us to clarify anything that isn\'t clear',
      'Confirm acceptance in writing before we start',
    ],
    body: [
      "Within 5 working days of the site visit, you receive a detailed written quote. Not a one-liner. A proper breakdown of what we're going to do, what materials are included, what the payment milestones are, and when each phase will be complete.",
      "We don't pad quotes with vague line items or hide costs. If there's something we can't price precisely until we open walls or floors, we tell you that upfront and give you a conditional range.",
      "You review the quote and come back to us with questions. We discuss, adjust if needed, and only start work once you've confirmed in writing.",
    ],
  },
  {
    number: '03',
    title: 'We Build',
    weHandle: [
      'All trades — plumbing, electrical, tiling, building',
      'Material procurement and delivery coordination',
      'Daily site management and quality checks',
      'Regular updates to you on progress',
      'Written sign-off before any scope changes',
    ],
    clientDoes: [
      'Provide access to the site as agreed',
      'Review progress at agreed milestones',
      'Respond to any queries from the team promptly',
    ],
    body: [
      "Once the quote is confirmed, we schedule the start date and mobilise the team. We handle all trades in-house — there are no random subcontractors showing up unannounced.",
      "We manage the site daily. You won't be left wondering what's happening. We send you progress updates, flag anything unexpected immediately, and get your written agreement before any change to scope or cost.",
      "Mid-project changes happen — people see the space opening up and want to adjust something. That's fine. We discuss it, price it clearly, and proceed only with your written approval.",
    ],
  },
  {
    number: '04',
    title: 'Handover',
    weHandle: [
      'Final snagging — we find and fix issues before you do',
      'Final clean of the space',
      'Walk-through with you',
      'Compliance documentation where applicable (COC for electrical)',
      '12-month workmanship warranty',
    ],
    clientDoes: [
      'Walk through the finished space with us',
      'Raise anything you\'re not happy with',
      'Sign off only when you\'re satisfied',
    ],
    body: [
      "Before we call a project complete, we do our own snagging. We walk the space looking for anything that isn't right — paint touch-ups, grout lines, fitting alignment, anything we're not satisfied with — and fix it before you see it.",
      "Then we do a walk-through together. You go through the space, you raise anything you're not happy with, and we address it. You sign off only when you're satisfied.",
      "Every project comes with a 12-month workmanship warranty. If anything we've built develops a defect within 12 months, we come back and fix it. No arguments, no charges.",
    ],
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white mb-4">
            How It Works
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            No surprises. Here&apos;s exactly what working with Ndengo Construction looks like,
            from first contact to handover.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, i) => (
        <section key={step.number} className={`py-20 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-warm'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="font-heading text-7xl font-light text-sage/30 leading-none block mb-4">
                  {step.number}
                </span>
                <h2 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal mb-6">
                  {step.title}
                </h2>
                <div className="space-y-4 text-stone leading-relaxed">
                  {step.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-sage-light border border-sage/20 rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-base text-charcoal mb-3">
                    What we handle
                  </h3>
                  <ul className="space-y-2">
                    {step.weHandle.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-stone">
                        <span className="text-sage mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-mist rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-base text-charcoal mb-3">
                    What you do
                  </h3>
                  <ul className="space-y-2">
                    {step.clientDoes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-stone">
                        <span className="text-stone/40 mt-0.5 shrink-0">→</span>
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

      {/* What We Don't Do */}
      <section className="py-20 md:py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-8">
            What We Don&apos;t Do
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            We don&apos;t take on more than we can finish. We don&apos;t disappear mid-project. We
            don&apos;t ask for full payment before starting. And we don&apos;t cut corners because
            the client won&apos;t notice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm border-t border-mist">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-charcoal mb-3">
            Book Your Free Site Visit
          </h2>
          <p className="text-stone mb-8">
            The first step costs you nothing. Let&apos;s come and see what you have in mind.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Book a Free Site Visit
          </Link>
        </div>
      </section>
    </>
  )
}
