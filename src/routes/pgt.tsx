import { createFileRoute, Link } from '@tanstack/react-router'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { FaqSection } from '../components/sections/FaqSection'
import { ServiceCostSection } from '../components/sections/ServiceCostSection'
import { ArrowRight, CheckCircle2, Dna, Phone, ShieldCheck } from 'lucide-react'
import GeneticTesting from '../assets/genetic_testing.webp'
import FAQ_BG from '../assets/faq_bg.jpg.jpeg'

export const Route = createFileRoute('/pgt')({
  component: PGTPage,
})

const pgtFaq = [
  {
    q: 'Does PGT guarantee a pregnancy or a healthy baby?',
    a: 'No. PGT provides additional information for embryo selection. Outcomes still depend on embryo development, uterine readiness, age, and overall health.',
  },
  {
    q: 'What is the difference between PGT-A, PGT-M, and PGT-SR?',
    a: 'PGT-A screens chromosome number. PGT-M looks for a specific inherited condition when a known mutation is present. PGT-SR looks at structural chromosome rearrangements.',
  },
  {
    q: 'Why is counselling important?',
    a: 'Counselling helps interpret results responsibly, explain limitations, and discuss how information fits into a personalised care plan.',
  },
  {
    q: 'How much does PGT cost?',
    a: 'PGT pricing is confirmed in consultation because it depends on the test type and the number of embryos analysed. See our price list for how PGT sits alongside IVF packages.',
  },
] as const

function PGTPage() {
  useSeo({
    title: 'PGT | M&C Fertility Centre',
    description:
      'Learn what PGT is, the types of preimplantation genetic testing, benefits, and how cost is confirmed at M&C Fertility Centre.',
    jsonLd: [faqPageJsonLd(pgtFaq.map((item) => ({ question: item.q, answer: item.a })))],
  })

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img src={GeneticTesting} alt="Preimplantation genetic testing" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(59,130,246,0.30)_72%,rgba(236,72,153,0.30)_100%)]" />
        <div className="relative min-h-[480px] px-6 py-12 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <Dna className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Preimplantation genetic testing
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              PGT in plain language
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              PGT can support embryo selection conversations during IVF. We explain what each test can and cannot show,
              with counselling-first planning.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground"
              >
                Discuss PGT options <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/ivf"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground"
              >
                How IVF works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">What is PGT?</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Preimplantation genetic testing analyses cells from an embryo created during IVF before transfer. The aim is to
          provide information that may help your clinician discuss which embryos to consider transferring. PGT is optional
          and is never a guarantee of pregnancy.
        </p>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">Types of PGT</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: 'PGT-A',
              body: 'Screens embryos for aneuploidy — an extra or missing chromosome. Often discussed with advanced maternal age, recurrent miscarriage, or repeated failed cycles.',
            },
            {
              title: 'PGT-M',
              body: 'Looks for a specific inherited (monogenic) condition when a known mutation is present in one or both partners. Requires targeted planning and counselling.',
            },
            {
              title: 'PGT-SR',
              body: 'Assesses structural chromosome rearrangements, such as translocations, that can affect embryo viability or increase miscarriage risk.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-background/35 p-5 shadow-sm">
              <h3 className="text-sm font-extrabold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">Benefits of PGT</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            'Can support more informed embryo selection conversations',
            'May reduce some transfers that are unlikely to implant because of aneuploidy',
            'Can help families with a known inherited condition plan more confidently',
            'Results are interpreted with counselling so limitations stay clear',
            'Fits into freeze-all IVF pathways when biopsy and analysis need time',
            'Does not replace a personalised IVF protocol or uterine assessment',
          ].map((point) => (
            <li key={point} className="flex items-start gap-2 rounded-2xl border border-border/70 bg-background/35 p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 inline-flex items-start gap-2 rounded-2xl border border-border/70 bg-background/25 p-4 text-sm text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          No test is perfect. Mosaic findings, false results, and interpretation limits exist. Your clinician will explain
          what PGT can and cannot show for your case.
        </div>
      </section>

      <ServiceCostSection
        heading="Cost of PGT"
        priceLabel="Confirmed in consultation"
        body="PGT is priced according to test type and the number of embryos analysed. It sits alongside IVF and is not included in the standard IVF medication package unless confirmed in your plan. See the price list for how PGT is presented."
        hash="pgt"
      />

      <FaqSection
        backgroundImage={FAQ_BG}
        title="PGT FAQs"
        subtitle="What tests aim to assess, how results are interpreted, and what comes next."
        items={pgtFaq}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}
