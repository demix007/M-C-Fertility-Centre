import { createFileRoute, Link } from '@tanstack/react-router'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import Advanced from '../assets/advanced.webp'
import { ArrowRight, CheckCircle2, Dna, Info } from 'lucide-react'
import { useMemo } from 'react'

export const Route = createFileRoute('/nipt')({
  component: NIPTPage,
})

function NIPTPage() {
  useSeo({
    title: 'NIPT (Non-Invasive Prenatal Testing) | M&C Fertility Centre',
    description:
      'NIPT explained with calm clarity. Learn what it can add to decision-making during pregnancy planning and why counselling-first guidance matters.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'What is NIPT?',
          answer:
            'NIPT (Non-Invasive Prenatal Testing) uses a maternal blood sample to screen for certain genetic conditions. It is screening, not diagnostic.',
        },
        {
          question: 'How does NIPT fit into fertility journeys?',
          answer:
            'For some patients, NIPT supports early pregnancy information and helps guide responsible discussions with clinicians. It does not replace clinical review and counselling.',
        },
        {
          question: 'Is NIPT a guarantee?',
          answer:
            'No. NIPT results can indicate risk levels, and limitations apply. We emphasize counselling-first interpretation and realistic expectations.',
        },
      ]),
    ],
  })

  const whoFor = useMemo(
    () => [
      'Patients seeking early screening information during pregnancy planning',
      'People who want to discuss risk information responsibly with their clinician',
      'Anyone who values counselling-first guidance and clear limitations',
    ],
    [],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <Dna className="h-4 w-4 text-primary" aria-hidden="true" />
              Screening planning
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">NIPT: Non-Invasive Prenatal Testing</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              NIPT can support early screening conversations. We keep the experience clear and responsible—explaining what NIPT can add,
              what it cannot diagnose, and why counselling-first interpretation is essential.
            </p>

            <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-5">
              <div className="flex items-center gap-2 text-sm font-extrabold">
                <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                What NIPT is for
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  'Early screening information to support clinician-led discussions.',
                  'Risk-level context with clear limitations.',
                  'Counselling-first interpretation for responsible decision-making.',
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/booking"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400/0 via-cyan-300/35 to-cyan-400/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                />
                <span className="relative z-10">Talk to a clinician</span>
                <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/genetic-testing"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/35 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-background/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Genetic testing overview
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background/25">
            <img src={Advanced} alt="Advanced prenatal screening support concept" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Counselling-first interpretation</div>
              <div className="mt-1 text-xs text-muted-foreground">We explain results with limitations and next-step clarity.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">Who is NIPT for?</h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {whoFor.map((item) => (
            <div key={item} className="rounded-3xl border border-border/70 bg-background/35 p-5">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="text-lg font-extrabold">FAQs</div>
        <p className="mt-2 text-sm text-muted-foreground">Clear questions about what NIPT screens for and how it’s interpreted.</p>
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="diagnose">
              <AccordionTrigger>Is NIPT diagnostic?</AccordionTrigger>
              <AccordionContent>
                NIPT is screening. It provides risk-level information and does not replace diagnostic testing when clinical decisions require confirmation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="limitations">
              <AccordionTrigger>What are the limitations?</AccordionTrigger>
              <AccordionContent>
                Limitations apply as with any screening test. Your clinician discusses what results can and cannot mean, and provides counselling-first interpretation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="process">
              <AccordionTrigger>How do we plan next steps?</AccordionTrigger>
              <AccordionContent>
                We use your pregnancy context to plan responsible interpretation and next clinical discussions. Clarity is prioritized at every step.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

