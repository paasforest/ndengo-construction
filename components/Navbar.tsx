'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading font-semibold text-charcoal tracking-widest text-sm md:text-base uppercase shrink-0"
            >
              Ndengo Construction
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans text-charcoal hover:text-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+27774388845"
                className="flex items-center gap-1.5 text-sm text-stone hover:text-charcoal transition-colors"
              >
                <Phone className="w-4 h-4" />
                +27 77 438 8845
              </a>
              <Link
                href="/contact"
                className="bg-sage hover:bg-sage-dark text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile right */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                href="/contact"
                className="bg-sage hover:bg-sage-dark text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="p-1 text-charcoal"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-mist">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-heading font-semibold text-charcoal tracking-widest text-sm uppercase"
            >
              Ndengo Construction
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-1 text-charcoal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 py-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-2xl font-semibold text-charcoal py-3 border-b border-mist hover:text-sage transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-10 flex flex-col gap-3">
            <a
              href="tel:+27774388845"
              className="flex items-center gap-2 text-stone text-base"
            >
              <Phone className="w-4 h-4" />
              +27 77 438 8845
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-sage text-white text-center font-semibold py-3 rounded transition-colors hover:bg-sage-dark"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
