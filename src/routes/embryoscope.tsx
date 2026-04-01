import { createFileRoute, Link } from '@tanstack/react-router'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import Review from '../assets/review.jpg'
import { ArrowRight, CheckCircle2, Eye, ShieldCheck } from 'lucide-react'
import { useMemo } from 'react'

export const Route = createFileRoute('/embryoscope')({
  component: EmbryoscopePage,
})

function EmbryoscopePage() {
  useSeo({
    title: 'Embryoscope | M&C Fertility Centre',
    description:
      'Embryoscope explained with a patient-first approach—what it is, how it supports monitoring and lab decisions, and what to expect through transfer planning.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'What is an Embryoscope?',
          answer:
            'Embryoscope is an imaging system that can help embryologists monitor embryos over time with reduced disruption. It supports lab assessment discussions with your clinician.',
        },
        {
          question: 'Does Embryoscope guarantee outcomes?',
          answer:
            'No. Embryoscope may support monitoring and assessment, but outcomes depend on many clinical factors. We emphasize clarity and realistic expectations.',
        },
        {
          question: 'How does Embryoscope fit into IVF?',
          answer:
            'It is part of the embryology monitoring workflow in IVF. Your clinician discusses how lab monitoring supports readiness and transfer planning.',
        },
      ]),
    ],
  })

  const whoFor = useMemo(
    () => [
      'Patients who want detailed lab monitoring supported by embryology systems',
      'Cycles where assessment and timing planning are clinically discussed',
      'Anyone who values clear explanations of how lab monitoring supports decisions',
    ],
    [],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <Eye className="h-4 w-4 text-primary" aria-hidden="true" />
              Lab monitoring
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Embryoscope: real-time embryo monitoring support</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Embryoscope supports embryology assessment and monitoring workflow. We explain what lab monitoring means and how your clinician uses this information
              responsibly for readiness and transfer planning.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: 'Assessment with clarity', desc: 'We discuss how monitoring supports clinical decisions.' },
                { icon: CheckCircle2, title: 'Counselling-first planning', desc: 'Limitations and next steps are explained responsibly.' },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl border border-border/70 bg-background/45 p-4">
                  <div className="flex items-center gap-2 text-sm font-extrabold">
                    <x.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    {x.title}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{x.desc}</div>
                </div>
              ))}
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
                <span className="relative z-10">Discuss Embryoscope</span>
                <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/ivf"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/35 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-background/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore IVF overview
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background/25">
            <img src={Review} alt="Clinical review and lab monitoring support for embryo assessment" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Monitoring for informed timing</div>
              <div className="mt-1 text-xs text-muted-foreground">Your clinician uses monitoring context within your care plan goals.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">Who is Embryoscope for?</h2>
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
        <p className="mt-2 text-sm text-muted-foreground">Answers about monitoring, workflow, and expectations.</p>
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="workflow">
              <AccordionTrigger>When is Embryoscope used?</AccordionTrigger>
              <AccordionContent>
                Embryoscope is part of the embryology monitoring workflow. Your clinician explains how lab monitoring fits into readiness and transfer planning for your cycle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="limits">
              <AccordionTrigger>Are there limitations to Embryoscope?</AccordionTrigger>
              <AccordionContent>
                Yes. It supports monitoring and assessment, but lab tools and embryo outcomes are influenced by clinical factors. We emphasize responsible interpretation and counselling-first planning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="guarantee">
              <AccordionTrigger>Does it guarantee success?</AccordionTrigger>
              <AccordionContent>
                No. Embryoscope does not guarantee outcomes. It can provide monitoring context that may support lab decision conversations alongside clinician guidance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

