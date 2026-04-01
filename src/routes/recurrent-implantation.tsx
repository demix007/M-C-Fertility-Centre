import { createFileRoute, Link } from '@tanstack/react-router'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { ArrowRight, CheckCircle2, HeartPulse, ShieldCheck } from 'lucide-react'
import { useMemo } from 'react'
import Happy from '../assets/happy.jpg'

export const Route = createFileRoute('/recurrent-implantation')({
  component: RecurrentImplantationPage,
})

function RecurrentImplantationPage() {
  useSeo({
    title: 'Recurrent Implantation Support | M&C Fertility Centre',
    description:
      'Support for recurrent implantation and pregnancy loss—step-by-step planning, compassionate monitoring, and clarity-first communication.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'What does “recurrent implantation” support focus on?',
          answer:
            'It focuses on identifying relevant clinical factors, improving protocol alignment, and coordinating monitoring and transfer planning with counselling-first clarity.',
        },
        {
          question: 'Is this different from standard IVF?',
          answer:
            'The core IVF process can be similar, but the plan often includes deeper review of history, additional checks, and refined transfer strategy to improve fit and safety context.',
        },
        {
          question: 'How do you support emotional wellbeing?',
          answer:
            'We explain each stage, provide realistic next steps, and offer patient-first communication so you feel supported through planning and aftercare.',
        },
      ]),
    ],
  })

  const whoFor = useMemo(
    () => [
      'Patients with recurrent implantation challenges',
      'People who have experienced pregnancy loss and need extra support',
      'Cases where protocol refinement and transfer timing require careful planning',
    ],
    [],
  )

  const plan = useMemo(
    () => [
      { t: 'Comprehensive history review', d: 'We review your cycle background and identify what might be influencing implantation.' },
      { t: 'Protocol alignment', d: 'Your plan is tailored for a better fit with safety-first guidance.' },
      { t: 'Monitoring & transfer planning', d: 'Readiness and timing are reviewed with clinician-led clarity.' },
      { t: 'Aftercare and next steps', d: 'We provide structured follow-up and communication so you know what to do next.' },
    ],
    [],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <HeartPulse className="h-4 w-4 text-primary" aria-hidden="true" />
              Compassionate support
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Recurrent implantation & pregnancy loss support</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              We support clients with deeper planning when implantation has been challenging or pregnancy loss has occurred.
              Our approach blends medical review, refined transfer strategy, and patient-first emotional support.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: 'Safety-first refinement', desc: 'Protocol choices are guided by clinical context and risk awareness.' },
                { icon: CheckCircle2, title: 'Clear communication', desc: 'You receive understandable explanations and next-step planning.' },
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
                <span className="relative z-10">Schedule support consult</span>
                <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/ivf"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/35 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-background/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore IVF approaches
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background/25">
            <img src={Happy} alt="Calm clinic guidance for emotional wellbeing during fertility support" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">You’re not alone</div>
              <div className="mt-1 text-xs text-muted-foreground">We plan medically and support emotionally, step by step.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">A structured support plan</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {plan.map((p, idx) => (
            <div key={p.t} className="rounded-3xl border border-border/70 bg-background/35 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-border/60 text-sm font-extrabold text-primary">
                  {idx + 1}
                </div>
                <div className="text-sm font-extrabold">{p.t}</div>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">Who is this support for?</h2>
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
        <p className="mt-2 text-sm text-muted-foreground">Answering common questions about refined planning and aftercare.</p>
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="review">
              <AccordionTrigger>What will you review during consultation?</AccordionTrigger>
              <AccordionContent>
                We review your cycle history, prior outcomes, and relevant clinical information. The goal is to identify opportunities for refined protocol alignment and safer, clearer next steps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="success">
              <AccordionTrigger>Will this always work?</AccordionTrigger>
              <AccordionContent>
                No approach guarantees outcomes. However, structured review and protocol alignment can help improve fit and decision quality. We provide realistic expectations and tailor the plan to your context.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>Do you support mental wellbeing?</AccordionTrigger>
              <AccordionContent>
                Yes. We communicate clearly, reduce uncertainty through structured explanations, and support you emotionally as part of a patient-first approach.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

