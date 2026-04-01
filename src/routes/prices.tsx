import { createFileRoute, Link } from '@tanstack/react-router'
import { pricingRows } from '../lib/data/pricing'
import { useSeo } from '../lib/seo'
import { useMemo, useState } from 'react'
import { ArrowRight, CalendarHeart, CheckCircle2, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import { FaqSection } from '../components/sections/FaqSection'
import Review from '../assets/review.webp'
import PricingHero from '../assets/pricing_hero.webp'
import PricingHero640 from '../assets/pricing_hero-640.webp'
import PricingHero1024 from '../assets/pricing_hero-1024.webp'
import PricingHero1440 from '../assets/pricing_hero-1440.webp'
import Pricing2 from '../assets/pricing_2.webp'
import Pricing4 from '../assets/pricing_4.webp'
import Pricing5 from '../assets/pricing_5.webp'
import pricing3 from '../assets/pricing_3.webp'

export const Route = createFileRoute('/prices')({
  component: PricesPage,
})

function PricesPage() {
  const pricingFaq = [
    {
      q: 'Are these final prices?',
      a: 'These are planning ranges in Naira. Final pricing depends on diagnosis, protocol intensity, lab needs, medication response, and clinician-confirmed treatment plan.',
    },
    {
      q: 'Why can medication costs vary so much?',
      a: 'Medication needs differ by age, ovarian reserve, diagnosis, and stimulation response. Two patients in the same pathway may still have different medication plans.',
    },
    {
      q: 'Can I get a detailed cost breakdown before treatment starts?',
      a: 'Yes. During consultation, we provide a structured breakdown showing core pathway costs, expected add-ons, and where variability is most likely.',
    },
    {
      q: 'Do you discuss payment planning options?',
      a: 'Yes. We can discuss practical payment planning and available support pathways during consultation.',
    },
  ] as const

  useSeo({
    title: 'Prices (NGN) | M&C Fertility Centre',
    description: 'Transparent IVF clinic pricing in Nigerian Naira (NGN). Includes medication variation notes and financing discussion info.',
  })

  const [showMedicationNote, setShowMedicationNote] = useState(false)
  const featuredRows = useMemo(
    () =>
      [
        pricingRows.find((r) => r.service === 'IVF Cycle (Mild IVF)'),
        pricingRows.find((r) => r.service === 'IVF Cycle (Conventional)'),
        pricingRows.find((r) => r.service === 'Egg Freezing (Collection + Processing)'),
        pricingRows.find((r) => r.service === 'Donor Program (Consult + Matching)'),
      ].filter(Boolean),
    [],
  )

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img
          src={PricingHero}
          srcSet={`${PricingHero640} 640w, ${PricingHero1024} 1024w, ${PricingHero1440} 1440w`}
          sizes="100vw"
          alt="Fertility treatment pricing and planning consultation"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(59,130,246,0.32)_72%,rgba(236,72,153,0.30)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_300px_at_14%_14%,rgba(14,165,233,0.26),transparent_60%),radial-gradient(640px_280px_at_86%_18%,rgba(244,114,182,0.22),transparent_62%),radial-gradient(620px_260px_at_50%_100%,rgba(52,211,153,0.18),transparent_66%)]" />

        <div className="relative min-h-[520px] px-6 py-12 md:min-h-[580px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <CalendarHeart className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Transparent pricing in Naira
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Clear fertility pricing designed for confident planning
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              You can review indicative treatment ranges in NGN, what is usually included, and where pricing varies
              based on personalized clinical decisions.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/booking"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400/0 via-cyan-300/35 to-cyan-400/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                />
                <span className="relative z-10">Book Pricing Consultation</span>
                <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                />
                <span className="relative z-10">Request a call</span>
                <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: 'No hidden fee mindset' },
                { icon: Sparkles, label: 'Personalized treatment ranges' },
                { icon: CheckCircle2, label: 'Clarity before commitment' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/30 bg-white/10 p-3 backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-white">
                    <item.icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5">
            <img src={Pricing2} alt="Pricing consultation and treatment planning discussion" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Transparent pricing conversations</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Clear ranges help you plan confidently before starting treatment.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">Popular treatment ranges</div>
            <h2 className="mt-2 text-xl font-extrabold">At-a-glance pathway planning</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {featuredRows.map((row, idx) => (
                <div
                  key={row?.service}
                  className={`rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    idx % 3 === 0
                      ? 'border-sky-200/70 bg-sky-50/60'
                      : idx % 3 === 1
                        ? 'border-emerald-200/70 bg-emerald-50/55'
                        : 'border-violet-200/70 bg-violet-50/55'
                  }`}
                >
                  <div className="text-sm font-extrabold">{row?.service}</div>
                  <div className="mt-2 text-base font-extrabold">{row?.priceRangeNgn}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{row?.includes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="text-2xl font-extrabold text-muted-foreground">Full price list (NGN)</div>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Indicative ranges shown in Naira. Final pricing is confirmed after clinician review and protocol planning.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="group overflow-hidden rounded-3xl border border-sky-200/70 bg-sky-50/55 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <img src={Pricing4} alt="Fertility consultation and pricing discussion" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-56" />
            <div className="p-4">
              <div className="text-sm font-extrabold">Consultation-first planning</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Every quote is contextualized with diagnosis, treatment priority, and realistic pathway planning.
              </p>
            </div>
          </article>
          <article className="group overflow-hidden rounded-3xl border border-emerald-200/70 bg-emerald-50/55 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <img src={Pricing5} alt="Transparent fertility treatment cost guidance" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-56" />
            <div className="p-4">
              <div className="text-sm font-extrabold">Transparent next-step costs</div>
              <p className="mt-1 text-sm text-muted-foreground">
                We clearly explain what is included, what may vary, and which add-ons may apply later.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-6 overflow-x-auto rounded-3xl border border-border/70 bg-gradient-to-br from-sky-50/35 via-background/35 to-violet-50/30 p-2">
          <table className="w-full min-w-[760px] border-collapse overflow-hidden rounded-2xl">
            <thead>
              <tr className="bg-background/70 text-left">
                <th className="border-b border-border/70 p-3 text-xs font-extrabold text-muted-foreground">Service</th>
                <th className="border-b border-border/70 p-3 text-xs font-extrabold text-muted-foreground">Indicative price (NGN)</th>
                <th className="border-b border-border/70 p-3 text-xs font-extrabold text-muted-foreground">What it usually includes</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((r, idx) => (
                <tr
                  key={r.service}
                  className={`transition duration-300 hover:bg-background/70 ${
                    idx % 2 === 0 ? 'bg-sky-50/25' : 'bg-emerald-50/20'
                  }`}
                >
                  <td className="border-b border-border/60 p-3 align-top text-sm font-extrabold text-foreground/90">{r.service}</td>
                  <td className="border-b border-border/60 p-3 align-top text-sm font-extrabold text-foreground/90">{r.priceRangeNgn}</td>
                  <td className="border-b border-border/60 p-3 align-top text-sm text-muted-foreground">{r.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="mt-0 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div
            className="relative min-h-[300px] overflow-hidden rounded-3xl border border-border/70 p-5 md:min-h-[340px]"
            style={{ backgroundImage: `url(${pricing3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-background/75 backdrop-blur-[1px]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-extrabold">Medication cost variation</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Tap to see why medication estimates are personalized.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowMedicationNote((v) => !v)}
                  className="rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-extrabold transition hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-expanded={showMedicationNote}
                >
                  {showMedicationNote ? 'Hide' : 'Show'}
                </button>
              </div>

              {showMedicationNote ? (
                <div className="mt-4 rounded-3xl border border-border/70 bg-card/50 p-4 text-sm text-muted-foreground">
                  Medication costs can vary by age, diagnosis, stimulation response, and protocol intensity. Your treatment
                  plan confirms final medication requirements after assessment.
                </div>
              ) : null}
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
            <div className="text-sm font-extrabold">Payment planning conversation</div>
            <div className="mt-2 text-sm text-muted-foreground">
              If you need staged planning, we can walk through options and priorities in consultation.
            </div>
            <div className="mt-4 rounded-3xl border border-border/70 bg-card/30 p-4 text-sm font-extrabold text-muted-foreground">
              Note: online payment processing is not part of current MVP workflow.
            </div>
            <Link
              to="/booking"
              className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Talk about options
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-border/70 bg-card/30 p-5 text-sm text-muted-foreground">
          Medical pricing disclaimer: these ranges are indicative only and must be validated during clinician review and
          confirmed protocol planning.
        </div>
      </section>

      <FaqSection
        backgroundImage={Review}
        title="Pricing FAQs"
        subtitle="Quick answers about how fertility pricing works and why totals can vary by patient."
        items={pricingFaq}
        ctas={[
          { to: '/booking', label: 'Book Pricing Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}

