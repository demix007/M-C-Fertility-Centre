import { createFileRoute, Link } from '@tanstack/react-router'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { FaqSection } from '../components/sections/FaqSection'
import { ServiceCostSection } from '../components/sections/ServiceCostSection'
import { ArrowRight, CheckCircle2, HeartHandshake, Phone } from 'lucide-react'
import Happy from '../assets/happy.webp'
import FAQ_BG from '../assets/faq_bg.jpg.jpeg'

export const Route = createFileRoute('/surrogacy')({
  component: SurrogacyPage,
})

const surrogacyFaq = [
  {
    q: 'What type of surrogacy do you support?',
    a: 'We support gestational surrogacy, where the surrogate carries a pregnancy created from the intended parents’ or donors’ gametes. The surrogate is not genetically related to the baby.',
  },
  {
    q: 'Do you help with legal and counselling steps?',
    a: 'Yes. Surrogacy involves medical, counselling, and legal pathways. We coordinate the clinical process and guide you toward the counselling and legal steps required in Nigeria.',
  },
  {
    q: 'Can donor eggs or sperm be used with surrogacy?',
    a: 'Yes, when clinically indicated. Donor matching and IVF are planned together so timing, screening, and transfer are aligned.',
  },
] as const

function SurrogacyPage() {
  useSeo({
    title: 'Surrogacy | M&C Fertility Centre',
    description:
      'Learn what surrogacy is, why to consider a surrogate, the process at M&C Fertility Centre, and the ₦8,000,000 surrogacy package.',
    jsonLd: [faqPageJsonLd(surrogacyFaq.map((item) => ({ question: item.q, answer: item.a })))],
  })

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img src={Happy} alt="Surrogacy and family building support" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(59,130,246,0.30)_72%,rgba(236,72,153,0.30)_100%)]" />
        <div className="relative min-h-[480px] px-6 py-12 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <HeartHandshake className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Gestational surrogacy
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Surrogacy with clear process and compassionate guidance
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              When carrying a pregnancy is not possible or not medically advisable, gestational surrogacy can be a path
              to parenthood. We explain the medical process, screening, and package cost with care.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground"
              >
                Book a surrogacy consult <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/prices"
                hash="surrogacy"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground"
              >
                View surrogacy package
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">What is surrogacy?</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          In gestational surrogacy, an embryo created through IVF — using the intended parents’ eggs and sperm, or donor
          gametes — is transferred to a surrogate who carries the pregnancy. The surrogate does not provide the egg, so
          she is not genetically related to the child. Treatment is coordinated with counselling, screening, and legal
          guidance.
        </p>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">Why consider a surrogate?</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            'Absence of a uterus or a significant uterine condition',
            'Medical conditions that make pregnancy high-risk',
            'Repeated implantation failure or recurrent pregnancy loss after careful review',
            'Previous pregnancy complications that advise against carrying again',
            'Same-sex male couples building a family with donor eggs',
            'Other clinician-advised situations where carrying is not possible',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 rounded-2xl border border-border/70 bg-background/35 p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">Process of surrogacy</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            { n: '1', t: 'Consultation', d: 'Review medical history, family-building goals, and whether surrogacy is appropriate.' },
            { n: '2', t: 'Counselling and legal steps', d: 'Independent counselling and legal agreements protect all parties.' },
            { n: '3', t: 'Screening and matching', d: 'Medical screening for intended parents and the surrogate, plus matching support.' },
            { n: '4', t: 'IVF and transfer', d: 'Egg collection (or donor eggs), fertilisation, and embryo transfer to the surrogate.' },
            { n: '5', t: 'Pregnancy care', d: 'Obstetric follow-up, communication, and postnatal planning with your team.' },
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

      <ServiceCostSection
        heading="Cost of surrogacy"
        priceLabel="₦8,000,000"
        body="Our surrogacy package is ₦8,000,000. Legal fees, donor gametes, extra IVF cycles, or additional screening may sit outside the package and are confirmed in consultation. See the full price list and payment plans."
        hash="surrogacy"
      />

      <FaqSection
        backgroundImage={FAQ_BG}
        title="Surrogacy FAQs"
        subtitle="What gestational surrogacy involves and how we support intended parents."
        items={surrogacyFaq}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}
