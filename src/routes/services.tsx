import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { useSeo } from '../lib/seo'
import Fertility from '../assets/fertility.webp'
import EggFreezing from '../assets/egg_freezing.webp'
import Donor from '../assets/donor.webp'
import GeneticTesting from '../assets/genetic_testing.webp'
import Happy from '../assets/happy.webp'
import PersonalisedTreatment from '../assets/personalised_treatment.webp'
import ICU from '../assets/icu.webp'
import {
  ArrowRight,
  Baby,
  Dna,
  FlaskConical,
  HeartHandshake,
  Phone,
  Snowflake,
  Stethoscope,
} from 'lucide-react'
import { services } from '../lib/data/services'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const serviceCards = [
  {
    id: 'ivf' as const,
    title: 'IVF',
    desc: 'What IVF is, who it is for, the treatment journey, success factors, cost, and FAQs.',
    to: '/ivf',
    icon: FlaskConical,
    image: Fertility,
  },
  {
    id: 'iui' as const,
    title: 'IUI',
    desc: 'Intrauterine insemination — a less invasive option with a clear journey and cost guidance.',
    to: '/iui',
    icon: Stethoscope,
    image: ICU,
  },
  {
    id: 'cryopreservation' as const,
    title: 'Cryopreservation of gametes and embryos',
    desc: 'Why freeze, what we store, long-term benefits, and storage costs including sperm cryopreservation.',
    to: '/cryopreservation',
    icon: Snowflake,
    image: EggFreezing,
  },
  {
    id: 'donor' as const,
    title: 'Donor services',
    desc: 'Why to consider a donor, how donors are selected, and how to donate.',
    to: '/donor',
    icon: HeartHandshake,
    image: Donor,
  },
  {
    id: 'surrogacy' as const,
    title: 'Surrogacy',
    desc: 'What surrogacy is, why it may be considered, the process, and package cost.',
    to: '/surrogacy',
    icon: Baby,
    image: Happy,
  },
  {
    id: 'pgt' as const,
    title: 'PGT',
    desc: 'What preimplantation genetic testing is, types, benefits, and how cost is confirmed.',
    to: '/pgt',
    icon: Dna,
    image: GeneticTesting,
  },
]

function ServicesPage() {
  const reducedMotion = useReducedMotion()
  useSeo({
    title: 'Our Services | M&C Fertility Centre',
    description:
      'Explore IVF, IUI, cryopreservation, donor services, surrogacy, and PGT at M&C Fertility Centre in Lagos.',
  })

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[32px] border border-border/70 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              Our services
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Fertility treatments explained with clarity
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Choose a service to read a full explanation — who it is for, how the journey works, and how it links to our
              transparent price list.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/prices"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/70"
              >
                View price list
              </Link>
            </div>
          </div>
          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 3.4, repeat: reducedMotion ? 0 : Infinity }}
            className="relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-border/70 shadow-sm"
          >
            <img src={PersonalisedTreatment} alt="Personalised fertility treatment planning" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold">Treatments we offer</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          {services.length} core pathways, each with a dedicated page so you can understand options before you book.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={false}
              animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
              transition={{ duration: 3 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
            >
              <Link
                to={card.to}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-background/35 shadow-sm transition hover:bg-background/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img src={card.image} alt={card.title} className="h-40 w-full object-cover" />
                <div className="flex h-full flex-col p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-border/60">
                      <card.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold">{card.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{card.desc}</div>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 text-sm font-extrabold text-primary group-hover:underline">
                    Read the explanation <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 text-center shadow-sm md:p-8">
        <h2 className="text-xl font-extrabold">Need help choosing a pathway?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
          Book a consultation or call {`0814 751 3285`} and we will help you understand which option fits your history and
          goals.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground"
          >
            Book Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold"
          >
            Contact us <Phone className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
