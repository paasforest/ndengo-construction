'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function QuoteForm() {
  const [state, handleSubmit] = useForm('xbdbeqkb')
  const [submittedName, setSubmittedName] = useState('there')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const value = new FormData(e.currentTarget).get('fullName')
    if (typeof value === 'string' && value.trim()) {
      setSubmittedName(value.trim().split(' ')[0])
    }
    handleSubmit(e)
  }

  if (state.succeeded) {
    return (
      <div className="bg-sage-light border border-sage/20 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
          Thanks, {submittedName}.
        </h3>
        <p className="text-stone">
          We&apos;ll be in touch within 1 business day to arrange your free site visit.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Full name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-charcoal mb-1.5">
          Full name <span className="text-sage">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition aria-[invalid=true]:border-red-400"
          placeholder="Your full name"
        />
        <ValidationError field="fullName" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
          Phone / WhatsApp <span className="text-sage">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition aria-[invalid=true]:border-red-400"
          placeholder="+27 82 000 0000"
        />
        <ValidationError field="phone" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      {/* Suburb */}
      <div>
        <label htmlFor="suburb" className="block text-sm font-medium text-charcoal mb-1.5">
          Suburb <span className="text-sage">*</span>
        </label>
        <input
          id="suburb"
          name="suburb"
          type="text"
          required
          className="w-full border border-mist rounded px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition aria-[invalid=true]:border-red-400"
          placeholder="e.g. Bellville, Paarl, Newlands"
        />
        <ValidationError field="suburb" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      {/* Service */}
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
        <ValidationError field="service" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      {/* Timeline */}
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
        <ValidationError field="timeline" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      {/* Message */}
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
        <ValidationError field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      {/* Form-level errors (e.g. network failure) */}
      <ValidationError errors={state.errors} className="text-sm text-red-600" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-sage hover:bg-sage-dark disabled:opacity-60 text-white font-semibold py-4 rounded transition-colors text-base"
      >
        {state.submitting ? 'Sending…' : 'Send My Request'}
      </button>
    </form>
  )
}
