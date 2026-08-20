import { createFileRoute, Link } from '@tanstack/react-router'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { FaqSection } from '../components/sections/FaqSection'
import { ServiceCostSection } from '../components/sections/ServiceCostSection'
import { ArrowRight, CheckCircle2, Phone, Stethoscope } from 'lucide-react'
import ICU from '../assets/icu.webp'
import FAQ_BG from '../assets/faq_bg.jpg.jpeg'

export const Route = createFileRoute('/iui')({
  component: IuiPage,
})

const iuiFaq = [
  {
    q: 'How is IUI different from IVF?',
    a: 'IUI places prepared sperm in the uterus around ovulation so fertilisation can happen in the body. IVF fertilises eggs in the laboratory and transfers an embryo. IUI is less invasive and is often considered before IVF when it is clinically appropriate.',
  },
  {
    q: 'How many IUI cycles might I need?',
    a: 'This depends on age, diagnosis, and sperm quality. Your clinician discusses a realistic number of attempts and when it may be time to consider IVF.',
  },
  {
    q: 'Is IUI painful?',
    a: 'Most patients describe IUI as similar to a smear test. The procedure is brief. Mild cramping can occur afterwards.',
  },
  {
    q: 'Do I need medication for IUI?',
    a: 'Some cycles are natural. Others use ovulation induction. Your plan depends on whether you ovulate regularly and on ultrasound findings.',
  },
] as const

function IuiPage() {
  useSeo({
    title: 'IUI | M&C Fertility Centre',
    description:
      'Learn what IUI is, who it is for, the IUI journey, success factors, and how cost is confirmed at M&C Fertility Centre.',
    jsonLd: [faqPageJsonLd(iuiFaq.map((item) => ({ question: item.q, answer: item.a })))],
  })

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img src={ICU} alt="IUI treatment consultation" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(16,185,129,0.28)_72%,rgba(236,72,153,0.30)_100%)]" />
        <div className="relative min-h-[480px] px-6 py-12 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <Stethoscope className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Intrauterine insemination
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              IUI, explained with calm next steps
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              IUI can be a thoughtful first treatment for selected patients. We explain who it is for, how the journey
              works, and when IVF may be the better path.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground"
              >
                Book Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/ivf"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground"
              >
                Compare with IVF
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">What is IUI?</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Intrauterine insemination is a fertility treatment in which washed, prepared sperm is placed directly into the
          uterus around the time of ovulation. This shortens the distance sperm must travel and can help when timing,
          cervical factors, or mild male-factor infertility are part of the picture.
        </p>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">Who is IUI for?</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          IUI is not suitable for everyone. Open fallopian tubes and an ability to ovulate (naturally or with support) are
          important. Your clinician will confirm this with tests before recommending a cycle.
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            'Unexplained infertility in selected patients',
            'Mild male-factor infertility',
            'Cervical factor infertility',
            'Ovulatory disorders with induction support',
            'Use of donor sperm',
            'Couples seeking a less invasive first step before IVF',
            'Single women using donor sperm, after counselling',
            'Patients for whom IVF is not yet indicated',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 rounded-2xl border border-border/70 bg-background/35 p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">The IUI journey</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          A typical cycle is shorter than IVF. Exact timing depends on whether you use a natural cycle or ovulation
          induction.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            { n: '1', t: 'Consultation and tests', d: 'History, scan, tubal assessment, and semen analysis where relevant.' },
            { n: '2', t: 'Cycle monitoring', d: 'Ultrasound (and sometimes bloodwork) to time ovulation accurately.' },
            { n: '3', t: 'Sperm preparation', d: 'The laboratory washes and concentrates motile sperm for insemination.' },
            { n: '4', t: 'Insemination', d: 'A brief clinic procedure places prepared sperm into the uterus.' },
            { n: '5', t: 'Pregnancy test', d: 'A blood or urine test follows, with a clear plan for next steps.' },
          ].map((step) => (
            <article key={step.n} className="rounded-3xl border border-border/70 bg-background/35 p-4 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-border/60 bg-white/65 text-sm font-extrabold text-primary">
                {step.n}
              </div>
              <h3 className="mt-3 text-sm font-extrabold">{step.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">Success factors</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Age', d: 'Age remains one of the strongest influences on IUI outcomes.' },
            { t: 'Sperm quality', d: 'Count, motility, and preparation quality affect the chance of fertilisation.' },
            { t: 'Tubal health', d: 'At least one open fallopian tube is required for IUI to be appropriate.' },
            { t: 'Timing', d: 'Insemination needs to align closely with ovulation.' },
            { t: 'Underlying diagnosis', d: 'Mild factors tend to respond better than complex infertility.' },
            { t: 'Number of cycles', d: 'Cumulative chance can rise over several well-timed cycles, then IVF may be discussed.' },
          ].map((item) => (
            <article key={item.t} className="rounded-3xl border border-border/70 bg-background/35 p-5 shadow-sm">
              <h3 className="text-sm font-extrabold">{item.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <ServiceCostSection
        heading="Cost of IUI"
        priceLabel="Confirmed in consultation"
        body="IUI pricing depends on whether medication is used, monitoring needs, and whether donor sperm is part of the plan. View our transparent price list and speak with the team about payment planning."
        hash="iui"
      />

      <FaqSection
        backgroundImage={FAQ_BG}
        title="IUI FAQs"
        subtitle="Straight answers about who IUI is for, how a cycle works, and what happens next."
        items={iuiFaq}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}
