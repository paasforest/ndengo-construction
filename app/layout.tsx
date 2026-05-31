import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ndengo Construction | Home Renovations Western Cape',
  description:
    'Premium home renovations, extensions, plumbing and electrical for Western Cape homeowners. Free site visits. 5+ years experience. NHBRC registered.',
  openGraph: {
    title: 'Ndengo Construction | Home Renovations Western Cape',
    description:
      'Premium renovations and extensions across the Western Cape. Call +27 77 438 8845.',
    url: 'https://ndengoconstruction.co.za',
    siteName: 'Ndengo Construction',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
