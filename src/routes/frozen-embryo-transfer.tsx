import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, CalendarHeart, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import { useMemo } from 'react'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import FollowUp from '../assets/follow_up.webp'

export const Route = createFileRoute('/frozen-embryo-transfer')({
  component: FrozenEmbryoTransferPage,
})

function FrozenEmbryoTransferPage() {
  useSeo({
    title: 'Frozen Embryo Transfer | M&C Fertility Centre',
    description:
      'Frozen embryo transfer (FET) explained with calm, step-by-step guidance—preparation, timing, and follow-up planning.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'What is frozen embryo transfer?',
          answer:
            'FET (Frozen Embryo Transfer) places a previously created embryo into the uterus in a planned cycle. The goal is to align uterine readiness and embryo timing.',
        },
        {
          question: 'How is the cycle prepared?',
          answer:
            'Preparation typically involves monitoring and lining/readiness planning. Your clinician confirms the safest timing for transfer and supports you with clear aftercare steps.',
        },
        {
          question: 'Is follow-up different after FET?',
          answer:
            'Follow-up includes aftercare guidance and next-step checks. Your clinician coordinates review visits and communicates realistic expectations.',
        },
      ]),
    ],
  })

  const whoFor = useMemo(
    () => [
      'Patients planning a transfer using a frozen embryo',
      'Cycles where careful timing improves readiness planning',
      'Situations where separating lab creation and transfer can support comfort and safety-first planning',
    ],
    [],
  )

  const steps = useMemo(
    () => [
      { t: 'Cycle scheduling', d: 'We plan the timeline with your clinician based on readiness.' },
      { t: 'Uterine preparation', d: 'Support for lining/readiness is guided with safety in mind.' },
      { t: 'Transfer day', d: 'A calm transfer appointment focused on clarity and preparation.' },
      { t: 'Aftercare & review', d: 'Supportive follow-up and next steps based on your checks.' },
    ],
    [],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <CalendarHeart className="h-4 w-4 text-primary" aria-hidden="true" />
              FET planning
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Frozen embryo transfer (FET)</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Frozen embryo transfer is a carefully timed process. We help you understand preparation, transfer day planning, and aftercare—
              so you feel guided from start to follow-up.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: 'Readiness-first approach', desc: 'Timing is planned with safety and lining readiness in mind.' },
                { icon: CheckCircle2, title: 'Clear aftercare', desc: 'Support and check-ins aligned to next-step clarity.' },
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
                <span className="relative z-10">Book an FET consultation</span>
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
            <img src={FollowUp} alt="Follow-up planning for frozen embryo transfer cycle" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Timely, calm transfer planning</div>
              <div className="mt-1 text-xs text-muted-foreground">We coordinate schedules so you know what to expect next.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">A typical FET journey</h2>
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
        <h2 className="text-2xl font-extrabold">Who is frozen embryo transfer for?</h2>
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
        <p className="mt-2 text-sm text-muted-foreground">Clear answers about preparation, transfer, and follow-up.</p>
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="timing">
              <AccordionTrigger>How is transfer timing decided?</AccordionTrigger>
              <AccordionContent>
                Timing is based on uterine readiness, your cycle planning, and clinician review of preparation steps. We coordinate schedules so the transfer fits your health and embryo readiness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>Will I have medication for FET?</AccordionTrigger>
              <AccordionContent>
                Many FET cycles include uterine preparation support depending on your plan. Your clinician confirms what is needed for your specific protocol and provides counseling-first guidance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="guarantee">
              <AccordionTrigger>Is FET a guarantee?</AccordionTrigger>
              <AccordionContent>
                No. Pregnancy outcomes depend on multiple clinical factors. Your care team explains what is realistic and how we tailor the pathway for safety and clarity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

