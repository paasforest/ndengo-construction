import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import ServicesGrid from '@/components/ServicesGrid'
import FeaturedProjects from '@/components/FeaturedProjects'
import ProcessSteps from '@/components/ProcessSteps'
import AboutStrip from '@/components/AboutStrip'
import FaqAccordion from '@/components/FaqAccordion'
import FinalCta from '@/components/FinalCta'

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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessSteps />
      <AboutStrip />
      <FaqAccordion />
      <FinalCta />
    </>
  )
}
