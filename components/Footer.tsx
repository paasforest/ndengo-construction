import Link from 'next/link'
import { Phone, Mail, Facebook, Instagram } from 'lucide-react'

const services = [
  { label: 'Kitchen Renovations', href: '/services#kitchens' },
  { label: 'Bathroom Renovations', href: '/services#bathrooms' },
  { label: 'Home Extensions', href: '/services#extensions' },
  { label: 'Full Renovations', href: '/services#full-renovations' },
  { label: 'Plumbing & Electrical', href: '/services#plumbing-electrical' },
  { label: 'Outdoor Builds', href: '/services#outdoor' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Our Process', href: '/process' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-heading font-semibold tracking-widest text-sm uppercase text-white"
            >
              Ndengo Construction
            </Link>
            <p className="text-sm text-white/60">Western Cape, South Africa</p>
            <p className="text-xs text-white/40">NHBRC Registration In Progress</p>
            <p className="text-xs text-white/40 mt-8">
              © 2025 Ndengo Construction. All rights reserved.
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/60 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/60 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/60 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+27774388845"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +27 77 438 8845
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ndengoconstruction.co.za"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  hello@ndengoconstruction.co.za
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27774388845?text=Hi%20Ndengo%20Construction%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
