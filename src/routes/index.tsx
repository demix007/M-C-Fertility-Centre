import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'
import heroImage from '../assets/hero.jpg'
import ultraSoundImg from '../assets/love_pregnancy.webp'
import {
  ArrowRight,
  CalendarHeart,
  CheckCircle2,
  CircleDollarSign,
  Dna,
  HeartHandshake,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheckIcon,
  Sparkles,
  Snowflake,
  Stethoscope,
  Trophy,
} from 'lucide-react'
import { clinicInfo } from '../lib/clinicInfo'
import { services } from '../lib/data/services'
import { useSeo } from '../lib/seo'
import { FaqSection } from '../components/sections/FaqSection'
import FAQ_BG from '../assets/faq_bg.jpg.jpeg'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

const homeFaq = [
  {
    q: 'What treatments does M&C Fertility Centre offer?',
    a: 'We offer IVF, IUI, cryopreservation of eggs, sperm and embryos, donor services, surrogacy, and PGT. Each option is explained clearly so you can choose the pathway that fits your diagnosis and goals.',
  },
  {
    q: 'How do I book a consultation or appointment?',
    a: 'Use the Book Consultation button, call 0814 751 3285, or send a message through our contact form. We will help you choose a virtual or in-person visit.',
  },
  {
    q: 'Is IVF always the first step?',
    a: 'Not always. Depending on your history and test results, IUI or other lower-intervention options may be appropriate first. Your clinician will explain why a pathway is recommended.',
  },
  {
    q: 'Do you offer flexible payment plans?',
    a: 'Yes. We keep pricing transparent and can discuss flexible payment planning during consultation. View our price list for published packages such as IVF and surrogacy.',
  },
  {
    q: 'Where is the clinic located?',
    a: 'We are on Allen Avenue, Ikeja, Lagos. Opening hours are Monday to Friday 8:00 AM to 5:00 PM, Saturday 9:00 AM to 2:00 PM, and Sunday by appointment.',
  },
] as const

function RouteComponent() {
  const reducedMotion = useReducedMotion()

  useSeo({
    title: 'M&C Fertility Centre | Compassionate Fertility Care in Nigeria',
    description:
      'M&C Fertility Centre in Lagos offers IVF, IUI, cryopreservation, donor services, surrogacy, and PGT. Learn why patients choose us, review our success rates, and book a consultation.',
  })

  const serviceIcons = {
    ivf: Stethoscope,
    iui: HeartHandshake,
    cryopreservation: Snowflake,
    donor: HeartHandshake,
    surrogacy: CalendarHeart,
    pgt: Dna,
  } as const

  const successRateData = useMemo(
    () => [
      { ageRange: 'Ages Under 35', clinicRate: 53, nationalRate: 37 },
      { ageRange: 'Ages 35-37', clinicRate: 47, nationalRate: 31 },
      { ageRange: 'Ages 38-39', clinicRate: 38, nationalRate: 25 },
      { ageRange: 'Ages 40-42', clinicRate: 31, nationalRate: 17 },
    ],
    [],
  )

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden p-6 md:p-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1100px_380px_at_8%_0%,rgba(37,99,235,0.33),transparent_55%),radial-gradient(900px_320px_at_92%_8%,rgba(22,163,74,0.24),transparent_60%)]" />
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold text-foreground">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              About M&C Fertility Centre
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Expert fertility care, personalised for you.
            </h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              M&C Fertility Centre is dedicated to delivering compassionate, evidence-led care in Lagos. Every fertility
              journey is unique, so we combine advanced reproductive science with thoughtful, personalised treatment —
              whether you are exploring IVF, preserving fertility, or considering donor or surrogacy pathways.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">Personalised treatment planning</div>
                  <div className="text-sm text-muted-foreground">Protocols tailored to your diagnosis, timeline, and goals.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Microscope className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">Advanced laboratory care</div>
                  <div className="text-sm text-muted-foreground">Monitoring and embryology standards that support safer decisions.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheckIcon className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">Clear communication</div>
                  <div className="text-sm text-muted-foreground">Transparent pricing, counselling, and next steps at every stage.</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/booking"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="relative z-10">Book an appointment</span>
                <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Learn who we are
              </Link>
            </div>
          </div>

          <div className="relative h-full min-h-[300px] sm:min-h-[340px] lg:min-h-[520px]">
            <div className="relative h-full overflow-hidden rounded-[28px] bg-background/30 shadow-sm">
              <img
                src={heroImage}
                alt="M&C Fertility Centre patient care"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Our services</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Highlighted treatments with clear explanations. Select a service to learn who it is for, how it works, and
                how costs are presented.
              </p>
            </div>
            <Link to="/services" className="hidden items-center gap-2 text-sm font-extrabold text-primary hover:underline sm:inline-flex">
              Browse all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5">
              <img
                src={ultraSoundImg}
                alt="Couple reviewing a fertility consultation"
                className="h-full min-h-[300px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/65 p-4 backdrop-blur">
                <div className="text-sm font-extrabold">Care planned around you</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Every treatment starts with clear answers, realistic options, and supportive planning.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {services.map((service, idx) => {
                const Icon = serviceIcons[service.id]
                return (
                  <motion.div
                    key={service.id}
                    initial={false}
                    animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
                    transition={{ duration: 3.1 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                    className="h-full"
                  >
                    <Link
                      to={service.href}
                      className="group relative flex h-full min-h-[160px] flex-col overflow-hidden rounded-3xl border border-border/70 bg-background/35 p-5 shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="relative flex h-full items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-border/60">
                          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <div className="flex h-full flex-1 flex-col">
                          <div className="text-sm font-extrabold">{service.title}</div>
                          <div className="mt-1 text-sm text-muted-foreground">{service.short}</div>
                          <div className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-extrabold text-primary group-hover:underline">
                            Read the explanation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl rounded-[28px] border border-border/70 bg-gradient-to-r from-primary/10 via-accent/10 to-background/60 p-5 shadow-sm md:p-6">
          <h2 className="text-xl font-extrabold md:text-2xl">Why M&C Fertility Centre?</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            We understand that no two patients are the same. Our team combines specialist expertise, transparent packages,
            and compassionate support so you can move through treatment with confidence.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: Microscope,
                reason: 'Specialist ultrasound and monitoring',
                text: 'Detailed scans and close monitoring give accurate insight into your cycle and help us time treatment safely.',
                color: 'bg-blue-600',
              },
              {
                icon: CircleDollarSign,
                reason: 'Transparent packages and payment plans',
                text: 'Published package prices, including IVF with medications, plus flexible payment conversations in consultation.',
                color: 'bg-emerald-600',
              },
              {
                icon: HeartHandshake,
                reason: 'Compassion at every step',
                text: 'Fertility care can be emotionally demanding. You will be supported by a team that listens and never treats you like a number.',
                color: 'bg-violet-600',
              },
              {
                icon: Trophy,
                reason: 'Expert fertility specialists',
                text: 'Our clinicians stay current with evidence-based protocols and explain trade-offs in plain language.',
                color: 'bg-amber-600',
              },
              {
                icon: ShieldCheckIcon,
                reason: 'Healthy mother and baby outcomes',
                text: 'We plan for long-term wellbeing, not only a positive test, with careful dosing and follow-up.',
                color: 'bg-rose-600',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.reason}
                initial={false}
                animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
                transition={{ duration: 3 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                className="group relative h-48 overflow-hidden rounded-2xl border border-border/70 bg-background/45 p-3 shadow-sm"
              >
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                  <item.icon className="h-10 w-10 text-primary" aria-hidden="true" />
                  <div className="mt-3 text-xs font-extrabold leading-snug">{item.reason}</div>
                </div>
                <div className={`absolute inset-0 z-20 -translate-y-full p-3 text-white transition-transform duration-500 ease-out group-hover:translate-y-0 ${item.color}`}>
                  <div className="text-xs font-extrabold">{item.reason}</div>
                  <div className="mt-2 text-[11px] leading-relaxed text-white/95">{item.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-r from-primary/10 via-accent/10 to-card/40 p-6 shadow-sm md:p-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm font-extrabold">
                <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
                M&C success rates
              </div>
              <h2 className="mt-4 text-2xl font-extrabold">Success means healthy outcomes, not just a positive test</h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                IVF outcomes vary by age and diagnosis. The figures below show our clinic rates compared with published
                HFEA national averages, shared to support realistic planning.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-border/70 bg-background/45 p-5 shadow-sm md:p-6">
                  <div className="grid grid-cols-1 gap-3 text-xs font-extrabold text-muted-foreground sm:grid-cols-2">
                    <div className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                      M&C Fertility Centre success rate
                    </div>
                    <div className="inline-flex items-center gap-2 sm:justify-end">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                      HFEA National Average
                    </div>
                  </div>
                  <div className="mt-5 space-y-4">
                    {successRateData.map((item) => (
                      <div key={item.ageRange} className="rounded-2xl border border-border/70 bg-card/45 p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="text-sm font-extrabold">{item.ageRange}</div>
                          <div className="text-xs font-semibold text-muted-foreground">IVF treatment outcomes</div>
                        </div>
                        <div className="space-y-2.5">
                          <div className="grid grid-cols-[72px_1fr_auto] items-center gap-3">
                            <div className="text-xs font-bold text-foreground/90">M&C</div>
                            <div className="h-3 overflow-hidden rounded-full bg-primary/15">
                              <motion.div
                                initial={reducedMotion ? { width: `${item.clinicRate}%` } : { width: 0 }}
                                whileInView={{ width: `${item.clinicRate}%` }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="h-full rounded-full bg-gradient-to-r from-primary via-blue-500 to-cyan-400"
                              />
                            </div>
                            <div className="text-xs font-extrabold text-primary">{item.clinicRate}%</div>
                          </div>
                          <div className="grid grid-cols-[72px_1fr_auto] items-center gap-3">
                            <div className="text-xs font-bold text-foreground/90">HFEA</div>
                            <div className="h-3 overflow-hidden rounded-full bg-emerald-200/50">
                              <motion.div
                                initial={reducedMotion ? { width: `${item.nationalRate}%` } : { width: 0 }}
                                whileInView={{ width: `${item.nationalRate}%` }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-lime-400 to-green-300"
                              />
                            </div>
                            <div className="text-xs font-extrabold text-emerald-700">{item.nationalRate}%</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        backgroundImage={FAQ_BG}
        title="Frequently asked questions"
        subtitle="Quick answers before you book a consultation or visit the clinic."
        items={homeFaq}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Contact us', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-border/70 bg-card/30 p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Contact and appointment booking</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Speak with our hospitality team, request a call, or book a consultation to start your plan.
              </p>
            </div>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: 'Call us',
                value: clinicInfo.phone,
                href: `tel:${clinicInfo.phoneHref}`,
                icon: Phone,
              },
              {
                title: 'Email',
                value: clinicInfo.email,
                href: `mailto:${clinicInfo.email}`,
                icon: Mail,
              },
              {
                title: 'Visit us',
                value: `${clinicInfo.addressLine1}, ${clinicInfo.city}`,
                href: '/contact',
                icon: MapPin,
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-border/70 bg-background/40 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-extrabold text-muted-foreground">
                  <card.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {card.title}
                </div>
                {card.href.startsWith('/') ? (
                  <Link to="/contact" className="mt-1 block text-sm font-extrabold text-foreground hover:text-primary">
                    {card.value}
                  </Link>
                ) : (
                  <a href={card.href} className="mt-1 block text-sm font-extrabold text-foreground hover:text-primary">
                    {card.value}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
