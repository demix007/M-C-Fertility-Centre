import { createFileRoute, Link } from '@tanstack/react-router'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { FaqSection } from '../components/sections/FaqSection'
import { ServiceCostSection } from '../components/sections/ServiceCostSection'
import { ArrowRight, CheckCircle2, Phone, Snowflake } from 'lucide-react'
import EggFreezingImg from '../assets/egg_freezing.webp'
import FAQ_BG from '../assets/faq_bg.jpg.jpeg'

export const Route = createFileRoute('/cryopreservation')({
  component: CryopreservationPage,
})

const cryoFaq = [
  {
    q: 'What can you freeze at M&C?',
    a: 'We cryopreserve eggs (oocytes), sperm, and embryos. Storage plans are explained during consultation, including renewal and how samples are used later.',
  },
  {
    q: 'How long can samples stay frozen?',
    a: 'Gametes and embryos can remain stored for many years under regulated conditions. Your team explains local storage rules and renewal schedules.',
  },
  {
    q: 'Does freezing guarantee a future pregnancy?',
    a: 'No. Cryopreservation preserves options. Future outcomes depend on age at freezing, sample quality, and later treatment factors.',
  },
  {
    q: 'How much does sperm storage cost?',
    a: 'Sperm cryopreservation is ₦70,000 per month. Egg and embryo freezing costs are confirmed in consultation and listed on our price page.',
  },
] as const

function CryopreservationPage() {
  useSeo({
    title: 'Cryopreservation | M&C Fertility Centre',
    description:
      'Cryopreservation of eggs, sperm, and embryos at M&C Fertility Centre. Learn why people freeze, what we store, long-term benefits, and costs.',
    jsonLd: [faqPageJsonLd(cryoFaq.map((item) => ({ question: item.q, answer: item.a })))],
  })

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img
          src={EggFreezingImg}
          alt="Cryopreservation of gametes and embryos"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(16,185,129,0.28)_72%,rgba(236,72,153,0.30)_100%)]" />
        <div className="relative min-h-[480px] px-6 py-12 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <Snowflake className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Fertility preservation
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Cryopreservation of gametes and embryos
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Freezing eggs, sperm, or embryos can protect future family-building options — whether you are planning
              ahead, facing medical treatment, or storing surplus embryos after IVF.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground"
              >
                Book a preservation consult <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/prices"
                hash="sperm-cryo"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground"
              >
                View storage prices
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">What is cryopreservation?</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Cryopreservation is the controlled freezing and storage of reproductive cells or embryos at ultra-low
          temperatures. Modern vitrification methods help protect structure so samples can be thawed later for IVF, ICSI,
          or other planned treatment.
        </p>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">Why cryopreserve?</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            'You want to delay pregnancy while protecting egg or sperm quality',
            'Medical treatment such as chemotherapy may affect fertility',
            'You have surplus embryos after IVF and want a future transfer option',
            'A partner will be away or a semen sample needs to be stored in advance',
            'You are exploring donor or surrogacy pathways that require stored gametes',
            'You want more flexibility between stimulation, biopsy, and transfer',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 rounded-2xl border border-border/70 bg-background/35 p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold sm:text-2xl">What we cryopreserve</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: 'Eggs (oocytes)',
              body: 'Egg freezing after stimulation and retrieval, often chosen when you are not ready to create embryos yet.',
            },
            {
              title: 'Sperm',
              body: 'Sperm freezing for medical, personal, or treatment-timing reasons, including before IVF or IUI.',
            },
            {
              title: 'Embryos',
              body: 'Embryo freezing after IVF, including freeze-all cycles, PGT pathways, and planned frozen embryo transfer.',
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
        <h2 className="text-xl font-extrabold sm:text-2xl">Benefits and possible long-term goals</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Storage is about keeping doors open. Common long-term goals include having a child later, completing family
          building after a first successful cycle, or protecting fertility around illness.
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            'Preserves options without rushing family timing',
            'Supports oncofertility and medically indicated preservation',
            'Allows IVF and transfer to be separated when that is safer',
            'Can reduce wasted surplus embryos by storing them for later',
            'Gives time for counselling, legal steps, or donor matching',
            'Creates a planned path for future ICSI, IVF, or FET',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 rounded-2xl border border-border/70 bg-background/35 p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <ServiceCostSection
        heading="Cost of cryopreservation"
        priceLabel="Sperm storage ₦70,000 / month"
        body="Sperm cryopreservation is ₦70,000 per month. Egg and embryo freezing, processing, and longer-term storage are confirmed in consultation. See the full price list for how these sit alongside IVF packages and payment plans."
        hash="sperm-cryo"
      />

      <FaqSection
        backgroundImage={FAQ_BG}
        title="Cryopreservation FAQs"
        subtitle="What we freeze, how long samples can be stored, and how costs work."
        items={cryoFaq}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}
