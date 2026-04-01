import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, ShieldCheck, Stethoscope, TestTube2 } from 'lucide-react'
import { useMemo } from 'react'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import PetriDish from '../assets/petri_dish.jpg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'

export const Route = createFileRoute('/icsi')({
  component: ICSIPage,
})

function ICSIPage() {
  useSeo({
    title: 'ICSI (Male-Factor Fertility) | M&C Fertility Centre',
    description:
      'ICSI explained in clear, patient-first language—what it is, who it is for, and what to expect through the cycle.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'What is ICSI?',
          answer:
            'ICSI (Intracytoplasmic Sperm Injection) is a lab procedure where a single sperm is injected into an egg to support fertilisation—often used for male-factor fertility.',
        },
        {
          question: 'Does ICSI change the IVF timeline?',
          answer:
            'Your IVF timeline is guided by monitoring and egg retrieval. ICSI mainly affects the fertilisation step in the lab after eggs are collected.',
        },
        {
          question: 'Is ICSI right for everyone?',
          answer:
            'No. It is typically recommended when there are specific male-factor considerations or when prior cycles benefit from lab-level fertilisation support. Your clinician decides based on your tests.',
        },
      ]),
    ],
  })

  const whoFor = useMemo(
    () => [
      'Male-factor fertility considerations',
      'Low sperm count or reduced motility (as clinically assessed)',
      'Previous fertilisation challenges in earlier cycles',
      'Situations where your lab strategy focuses on fertilisation support',
    ],
    [],
  )

  const steps = useMemo(
    () => [
      { t: 'Consult & baseline review', d: 'Confirm goals, review reports, and map a safety-first protocol.' },
      { t: 'Stimulation & monitoring', d: 'Medication-supported monitoring to prepare eggs for retrieval.' },
      { t: 'Egg retrieval', d: 'Eggs are collected by your care team; embryology team supports the lab step.' },
      { t: 'ICSI microinjection', d: 'A single sperm is carefully injected to support fertilisation in the lab.' },
      { t: 'Culture & transfer', d: 'Embryos are monitored, graded, and transferred with readiness planning.' },
    ],
    [],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <TestTube2 className="h-4 w-4 text-primary" aria-hidden="true" />
              ICSI pathway
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">ICSI: fertilisation support for male-factor fertility</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              ICSI is a precise embryology technique used to help fertilisation when male-factor factors may affect sperm-to-egg interaction.
              We explain each step clearly—so you know what happens and why.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: Stethoscope, title: 'Clinician-led protocol', desc: 'Safety-first decisions based on your tests and goals.' },
                { icon: ShieldCheck, title: 'Embryology precision', desc: 'Careful microinjection and lab monitoring.' },
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
            <img src={PetriDish} alt="Embryology laboratory setup for fertilisation support" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">A careful lab step</div>
              <div className="mt-1 text-xs text-muted-foreground">ICSI focuses on the fertilisation moment after retrieval.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">What your ICSI cycle typically looks like</h2>
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
        <h2 className="text-2xl font-extrabold">Who is ICSI for?</h2>
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
        <p className="mt-2 text-sm text-muted-foreground">Quick answers to support your planning and next steps.</p>
        <div className="mt-6 rounded-3xl border border-border/70 bg-background/25 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what">
              <AccordionTrigger>How is ICSI performed?</AccordionTrigger>
              <AccordionContent>
                The lab carefully injects a single sperm into an egg to support fertilisation. This is done after egg retrieval, with embryology monitoring throughout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sideeffects">
              <AccordionTrigger>Will ICSI increase side effects?</AccordionTrigger>
              <AccordionContent>
                Side effects relate mostly to stimulation, monitoring, and procedures involved in the IVF cycle—not to the lab microinjection itself.
                Your care team discusses what is expected for your protocol.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="success">
              <AccordionTrigger>Does ICSI guarantee results?</AccordionTrigger>
              <AccordionContent>
                No. Outcomes depend on many medical and lab factors. Your clinician explains what is realistic and how we tailor the pathway for safety and clarity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

