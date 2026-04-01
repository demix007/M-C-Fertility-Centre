import { createFileRoute, Link } from '@tanstack/react-router'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import { useMemo, useState } from 'react'
import GeneticTesting from '../assets/genetic_testing.jpg'
import { ArrowRight, CheckCircle2, Dna, Info } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs'

type PgtTab = 'pgt-a' | 'pgt-m'

export const Route = createFileRoute('/pgt')({
  component: PGTPage,
})

function PGTPage() {
  useSeo({
    title: 'PGT-A / PGT-M | M&C Fertility Centre',
    description:
      'PGT explained with patient-first clarity. Learn what each test aims to assess, how it can influence embryo selection discussions, and what counselling-first planning includes.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'How is PGT performed?',
          answer:
            'PGT is carried out after embryos reach a stage suitable for analysis. The process supports information that may be used during embryo selection conversations with clinician guidance.',
        },
        {
          question: 'Can PGT guarantee a pregnancy?',
          answer:
            'No. PGT provides additional information; outcomes depend on many clinical factors including embryo development, uterine readiness, and overall health context.',
        },
        {
          question: 'Why is counselling important?',
          answer:
            'Counselling helps interpret results responsibly, explain limitations, and discuss how information fits into a personalized care plan.',
        },
      ]),
    ],
  })

  const [tab, setTab] = useState<PgtTab>('pgt-a')

  const tabCopy = useMemo(
    () => ({
      'pgt-a': {
        title: 'PGT-A (Chromosome screening)',
        body: 'PGT-A helps provide information about chromosome composition. We explain what the lab may indicate and how results can be used in selection conversations—always with counselling-first planning.',
        checklistTitle: 'Counselling-first checklist (PGT-A)',
        checklist: ['Review what information may be available.', 'Discuss limitations and what remains unknown.', 'Align results with transfer readiness and safety context.'],
      },
      'pgt-m': {
        title: 'PGT-M (Single-gene / targeted testing)',
        body: 'PGT-M focuses on specific inherited conditions where appropriate. Your clinician explains how results influence responsible embryo selection and the counselling steps required for accurate interpretation.',
        checklistTitle: 'Counselling-first checklist (PGT-M)',
        checklist: ['Confirm the targeted condition and consent needs.', 'Discuss risks, limitations, and uncertainties.', 'Plan how results guide selection conversations.'],
      },
    }),
    [],
  )

  const active = tabCopy[tab]

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <Dna className="h-4 w-4 text-primary" aria-hidden="true" />
              PGT guidance
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">PGT-A & PGT-M in plain language</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              PGT can support embryo selection conversations. We keep the experience calm and clear, with counselling-first planning and emphasis on limitations.
            </p>

            <div className="mt-6">
              <Tabs value={tab} onValueChange={(v) => setTab(v as PgtTab)}>
                <TabsList className="flex flex-wrap gap-2 bg-transparent">
                  <TabsTrigger value="pgt-a">PGT-A</TabsTrigger>
                  <TabsTrigger value="pgt-m">PGT-M</TabsTrigger>
                </TabsList>
                <div className="mt-6 space-y-5">
                  <TabsContent value="pgt-a">
                    <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                      <div className="text-lg font-extrabold">{tabCopy['pgt-a'].title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{tabCopy['pgt-a'].body}</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="pgt-m">
                    <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                      <div className="text-lg font-extrabold">{tabCopy['pgt-m'].title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{tabCopy['pgt-m'].body}</p>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-5">
              <div className="flex items-center gap-2 text-sm font-extrabold">
                <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                {active.checklistTitle}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {active.checklist.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    <span>{c}</span>
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
                <span className="relative z-10">Discuss PGT options</span>
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
            <img src={GeneticTesting} alt="Genetic testing overview image" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Counselling-first interpretation</div>
              <div className="mt-1 text-xs text-muted-foreground">We emphasize limitations and responsible decision-making.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="text-lg font-extrabold">PGT FAQs</div>
        <p className="mt-2 text-sm text-muted-foreground">What tests aim to assess, how results are interpreted, and what comes next.</p>
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="guarantee">
              <AccordionTrigger>Does PGT guarantee pregnancy?</AccordionTrigger>
              <AccordionContent>
                No. PGT provides information; pregnancy outcomes depend on many clinical factors and uterine readiness. We interpret results with limitations and counselling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="selection">
              <AccordionTrigger>How does PGT influence selection conversations?</AccordionTrigger>
              <AccordionContent>
                Results may be part of embryo selection discussions. Your clinician guides interpretation and ensures expectations remain accurate and responsible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="counselling">
              <AccordionTrigger>Why do you emphasize counselling?</AccordionTrigger>
              <AccordionContent>
                Counselling helps ensure consent clarity, responsible interpretation, and a care plan aligned with your goals and safety context.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

