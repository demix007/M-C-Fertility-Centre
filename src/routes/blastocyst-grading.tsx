import { createFileRoute, Link } from '@tanstack/react-router'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { ArrowRight, CheckCircle2, Microscope, Sparkles } from 'lucide-react'
import { useMemo } from 'react'
import Protocols from '../assets/protocols.jpg'
import Happy from '../assets/happy.jpg'

export const Route = createFileRoute('/blastocyst-grading')({
  component: BlastocystGradingPage,
})

function BlastocystGradingPage() {
  useSeo({
    title: 'Blastocyst Culture & Embryo Grading | M&C Fertility Centre',
    description:
      'How blastocyst culture works and why embryo grading matters—explained clearly with a patient-first process overview.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'What is blastocyst culture?',
          answer:
            'Blastocyst culture is a lab process where embryos are cared for until they reach the blastocyst stage. During this time, the lab team monitors development and timing.',
        },
        {
          question: 'What does embryo grading mean?',
          answer:
            'Embryo grading describes how embryos develop based on clinical lab observations. Grading supports embryo selection conversations with your clinician, not guarantees of outcomes.',
        },
        {
          question: 'How does grading influence transfer?',
          answer:
            'Your clinician uses grading and readiness planning to decide which embryo(s) are most suitable for transfer in your specific cycle goals.',
        },
      ]),
    ],
  })

  const whoFor = useMemo(
    () => [
      'Patients interested in blastocyst-stage planning',
      'Cycles where careful lab-based monitoring supports decision-making',
      'Cases where prior development patterns prompt a refined lab strategy',
    ],
    [],
  )

  const points = useMemo(
    () => [
      { t: 'Culture timeline', d: 'Embryos are monitored over the culture period with lab-led care.' },
      { t: 'Grading conversation', d: 'We explain what grading means, limitations, and how it fits your plan.' },
      { t: 'Readiness & transfer', d: 'Timing and uterine readiness are coordinated for a calmer transfer experience.' },
    ],
    [],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <Microscope className="h-4 w-4 text-primary" aria-hidden="true" />
              Embryology focus
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Blastocyst culture & embryo grading</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Embryo grading helps your clinician choose a transfer strategy based on development patterns and readiness planning. We explain the lab steps
              with clarity—so you can feel confident about what’s happening.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: Sparkles, title: 'Careful monitoring', desc: 'Lab attention through development stages.' },
                { icon: CheckCircle2, title: 'Guided selection', desc: 'Grading supports decisions, alongside counseling-first planning.' },
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
                <span className="relative z-10">Schedule a consultation</span>
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
            <img src={Protocols} alt="Embryology protocols for blastocyst culture and grading" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Lab-led selection support</div>
              <div className="mt-1 text-xs text-muted-foreground">Grading is discussed with your clinician and care plan goals.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">What you can expect</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.t} className="rounded-3xl border border-border/70 bg-background/35 p-5">
              <div className="text-sm font-extrabold">{p.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">Who is this for?</h2>
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
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-5">
          <div className="flex items-center gap-3">
            <img src={Happy} alt="Calm clinic guidance" className="h-10 w-10 rounded-2xl object-cover" />
            <div>
              <div className="text-sm font-extrabold">Counseling-first planning</div>
              <div className="mt-1 text-sm text-muted-foreground">
                We explain grading outcomes with context and limitations—so you can make responsible choices for your transfer plan.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="text-lg font-extrabold">FAQs</div>
        <p className="mt-2 text-sm text-muted-foreground">Quick answers about culture, grading, and how decisions are made.</p>
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="culture">
              <AccordionTrigger>How long are embryos cultured?</AccordionTrigger>
              <AccordionContent>
                Culture length depends on clinic protocol, embryo development patterns, and readiness planning for transfer decisions discussed with your clinician.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="grading">
              <AccordionTrigger>Does grading guarantee success?</AccordionTrigger>
              <AccordionContent>
                No. Grading supports selection conversations, but outcomes depend on many medical factors including uterine readiness, embryo development, and patient-specific clinical context.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="transfer">
              <AccordionTrigger>How do we decide what to transfer?</AccordionTrigger>
              <AccordionContent>
                Your clinician reviews grading with your goals and safety context, then plans a transfer strategy aligned with your cycle timeline and readiness.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

