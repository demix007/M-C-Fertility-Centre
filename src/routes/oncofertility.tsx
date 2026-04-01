import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo } from 'react'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import EggFreezing from '../assets/egg_freezing.jpg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/oncofertility')({
  component: OncofertilityPage,
})

function OncofertilityPage() {
  useSeo({
    title: 'Oncofertility (Fertility Preservation) | M&C Fertility Centre',
    description:
      'Fertility preservation explained for medical reasons. Learn how egg freezing supports future options, with calm guidance and safety-first planning.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'What is oncofertility?',
          answer:
            'Oncofertility is fertility preservation for people facing medical treatments that may affect reproductive health. It often involves freezing eggs or embryos before treatment begins.',
        },
        {
          question: 'Is it always possible to preserve fertility?',
          answer:
            'Eligibility depends on timing, diagnosis, and clinical assessment. Your care team discusses feasibility and best-fit options with responsible guidance.',
        },
        {
          question: 'How do you keep the process calm?',
          answer:
            'We prioritize clarity and coordination. Timelines, medication explanations, and follow-up steps are shared in patient-first language—so you feel supported.',
        },
      ]),
    ],
  })

  const whoFor = useMemo(
    () => [
      'Medical treatments that may affect fertility',
      'People who want future family options',
      'Situations where fertility preservation can be planned before medical therapy begins',
    ],
    [],
  )

  const steps = useMemo(
    () => [
      { t: 'Rapid assessment', d: 'We review your diagnosis timeline and confirm eligibility with your care team.' },
      { t: 'Coordinated stimulation', d: 'Medication and monitoring are planned to fit medical readiness and safety guidance.' },
      { t: 'Egg retrieval & freezing', d: 'Eggs are collected and prepared for secure storage.' },
      { t: 'Future guidance', d: 'Clear storage and renewal planning with counselling-first support.' },
    ],
    [],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <HeartHandshake className="h-4 w-4 text-primary" aria-hidden="true" />
              Oncofertility
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Fertility preservation for medical reasons</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              We support fertility preservation when medical treatments may affect reproductive health. Our goal is clarity, coordination, and calm next steps—
              with safety-first planning throughout.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: 'Safety-first coordination', desc: 'Treatment timelines are planned with your clinical context in mind.' },
                { icon: CheckCircle2, title: 'Counselling-first support', desc: 'We explain storage decisions with responsible guidance.' },
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
                <span className="relative z-10">Book a preservation consult</span>
                <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/egg-freezing"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/35 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-background/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore egg freezing
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background/25">
            <img src={EggFreezing} alt="Egg freezing support for fertility preservation planning" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Future options, thoughtfully planned</div>
              <div className="mt-1 text-xs text-muted-foreground">Preservation supports choice for later family-building decisions.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">How the oncofertility process works</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {steps.map((s, idx) => (
            <div key={s.t} className="rounded-3xl border border-border/70 bg-background/35 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-border/60 text-sm font-extrabold text-primary">
                  {idx + 1}
                </div>
                <div className="text-sm font-extrabold">{s.t}</div>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">Who is fertility preservation for?</h2>
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
        <p className="mt-2 text-sm text-muted-foreground">Fast answers for preservation planning and next steps.</p>
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="timing">
              <AccordionTrigger>Can we preserve fertility quickly?</AccordionTrigger>
              <AccordionContent>
                Sometimes urgent timelines apply. Eligibility and timing depend on your diagnosis and clinical schedule. Your care team coordinates safe planning and explains your options clearly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="guarantee">
              <AccordionTrigger>Does freezing guarantee future outcomes?</AccordionTrigger>
              <AccordionContent>
                No. Freezing supports future options, but success depends on many factors including age at freezing and clinical evaluation. We emphasize limitations and counselling-first planning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>What support will I receive?</AccordionTrigger>
              <AccordionContent>
                We provide clear explanations, monitoring coordination, and post-cycle guidance so you always know what’s next and why.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

