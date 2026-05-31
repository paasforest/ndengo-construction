import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    q: 'How long does a typical renovation take?',
    a: 'It depends on the scope. A bathroom renovation typically takes 2–4 weeks. A kitchen remodel 4–6 weeks. A home extension 8–14 weeks. We give you a detailed timeline in your quote before any work begins.',
  },
  {
    q: 'Are you insured?',
    a: "Yes. Ndengo Construction is fully insured for public liability and contractor's all-risk. We can provide proof of insurance on request.",
  },
  {
    q: 'Do you handle plans and municipal approval?',
    a: 'Yes, for extensions and structural work that requires approval, we manage the full process — drawings, submission, and approval — as part of the project.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We typically work on a staged payment structure tied to project milestones. Full payment terms are outlined clearly in your quote before any work begins. We never ask for full payment upfront.',
  },
  {
    q: 'Do you offer a warranty on your work?',
    a: 'Yes. We offer a 12-month workmanship warranty on all completed projects. Any defects in our work that appear within 12 months will be rectified at no cost.',
  },
  {
    q: 'Can I make changes once the build has started?',
    a: 'Small changes are usually manageable. Significant changes mid-build affect timelines and cost. We discuss and agree on any changes in writing before proceeding.',
  },
]

export default function FaqAccordion() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-charcoal">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
