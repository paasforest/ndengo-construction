'use client'

import { useState } from 'react'

// TODO: Replace FORMSPREE_ID with your Formspree form ID from formspree.io
// Sign up free at formspree.io → New Form → copy the ID (e.g. "xpwzgkla")
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/FORMSPREE_ID'

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const form = e.currentTarget
      const data = new FormData(form)

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please call us directly on +27 77 438 8845.')
      }
    } catch {
      setError('Something went wrong. Please call us directly on +27 77 438 8845.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-sage-light border border-sage/20 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
          Thanks, {name}.
        </h3>
        <p className="text-stone">
          We&apos;ll be in touch within 1 business day to arrange your free site visit.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-charcoal mb-1.5">
          Full name <span className="text-sage">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
          Phone / WhatsApp <span className="text-sage">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
          placeholder="+27 82 000 0000"
        />
      </div>

      <div>
        <label htmlFor="suburb" className="block text-sm font-medium text-charcoal mb-1.5">
          Suburb <span className="text-sage">*</span>
        </label>
        <input
          id="suburb"
          name="suburb"
          type="text"
          required
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
          placeholder="e.g. Bellville, Paarl, Newlands"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
          Service needed <span className="text-sage">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
        >
          <option value="">Select a service</option>
          <option value="Kitchen Renovation">Kitchen Renovation</option>
          <option value="Bathroom Renovation">Bathroom Renovation</option>
          <option value="Home Extension">Home Extension</option>
          <option value="Full Renovation">Full Renovation</option>
          <option value="Plumbing & Electrical">Plumbing &amp; Electrical</option>
          <option value="Outdoor Build">Outdoor Build</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-charcoal mb-1.5">
          When are you looking to start? <span className="text-sage">*</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          required
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition"
        >
          <option value="">Select a timeframe</option>
          <option value="As soon as possible">As soon as possible</option>
          <option value="1–3 months">1–3 months</option>
          <option value="3–6 months">3–6 months</option>
          <option value="Just exploring">Just exploring</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition resize-none"
          placeholder="A few sentences is enough. We'll get the details on the site visit."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-sage hover:bg-sage-dark disabled:opacity-60 text-white font-semibold py-4 rounded transition-colors text-base"
      >
        {submitting ? 'Sending…' : 'Send My Request'}
      </button>
    </form>
  )
}
