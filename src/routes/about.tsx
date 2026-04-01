import { createFileRoute, Link } from '@tanstack/react-router'
import { useSeo } from '../lib/seo'
import {
  ArrowRight,
  CalendarHeart,
  CheckCircle2,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react'
import Fertility from '../assets/fertility.webp'
import FollowUp from '../assets/follow_up.webp'
import Review from '../assets/review.webp'
import { FaqSection } from '../components/sections/FaqSection'
import AboutHero from '../assets/about_1.webp'
import AboutHero640 from '../assets/about_1-640.webp'
import AboutHero1024 from '../assets/about_1-1024.webp'
import AboutHero1440 from '../assets/about_1-1440.webp'
import About2 from '../assets/about_3.webp'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const carePillars = [
    {
      icon: Stethoscope,
      title: 'Individualized fertility care',
      text: 'Every protocol is tailored using your fertility history, lab findings, timeline, and treatment goals.',
    },
    {
      icon: Microscope,
      title: 'Science-led clinical decisions',
      text: 'Our team combines strong embryology standards with evidence-based pathways and careful monitoring.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent, respectful support',
      text: 'We explain treatment options, trade-offs, and pricing expectations clearly so patients can decide confidently.',
    },
    {
      icon: CalendarHeart,
      title: 'Continuity from consult to follow-up',
      text: 'Your journey is coordinated across consultations, treatment milestones, and post-cycle reviews for consistent support.',
    },
  ] as const

  useSeo({
    title: 'About M&C Fertility Centre | M&C Fertility Centre',
    description: 'Meet our team, learn our values, and understand how we support fertility journeys in Nigeria.',
  })

  const team = [
    { name: 'Dr. M. Okafor', role: 'Fertility Consultant', focus: 'Patient-first IVF planning', cred: 'MD • Fertility Specialist' },
    { name: 'Dr. A. Bello', role: 'Embryology Lead', focus: 'Lab workflow clarity and care coordination', cred: 'PhD • Embryology' },
    { name: 'Nurse T. Adeyemi', role: 'Clinical Support', focus: 'Calm guidance through appointments and follow-ups', cred: 'RN • Care Coordinator' },
    { name: 'Counselor C. Eze', role: 'Genetic Counseling', focus: 'Responsible explanation and consent-first communication', cred: 'Counseling • IVF Support' },
  ]

  const aboutFaq = [
    {
      q: 'What makes M&C Fertility Centre different?',
      a: 'We combine personalized protocol planning, transparent communication, and coordinated multidisciplinary care from consult through follow-up.',
    },
    {
      q: 'Do you support both women and men fertility evaluations?',
      a: 'Yes. We evaluate both partners when appropriate and discuss male-factor and female-factor findings together for complete planning.',
    },
    {
      q: 'How do I start if I am new to fertility treatment?',
      a: 'Begin with a consultation. We review history, testing needs, and timeline goals, then create a clear next-step plan in plain language.',
    },
    {
      q: 'Can I get educational resources before treatment begins?',
      a: 'Yes. We provide practical guides and explainers so you can understand options, risks, and preparation before key decisions.',
    },
  ] as const

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img
          src={AboutHero}
          srcSet={`${AboutHero640} 640w, ${AboutHero1024} 1024w, ${AboutHero1440} 1440w`}
          sizes="100vw"
          alt="Fertility specialists supporting patients at M&C Fertility Centre"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(6,20,48,0.86)_8%,rgba(14,35,82,0.62)_45%,rgba(14,165,233,0.30)_74%,rgba(236,72,153,0.28)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_320px_at_14%_14%,rgba(56,189,248,0.26),transparent_60%),radial-gradient(620px_260px_at_86%_18%,rgba(244,114,182,0.22),transparent_64%),radial-gradient(760px_320px_at_50%_100%,rgba(16,185,129,0.14),transparent_66%)]" />

        <div className="relative min-h-[520px] px-6 py-12 md:min-h-[580px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <Users className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              About M&C Fertility Centre
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Personalized fertility care with science, compassion, and clarity
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Our team is built around individualized fertility treatment, transparent communication, and respectful care
              for women, men, couples, and every family-building pathway.
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
                <span className="relative z-10">Book consultation</span>
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
                <span className="relative z-10">Speak to care team</span>
                <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Sparkles, label: 'Customized protocols' },
                { icon: CalendarHeart, label: 'Close monitoring' },
                { icon: CheckCircle2, label: 'Patient-first guidance' },
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
            <img src={About2} alt="Compassionate fertility care and specialist support" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Care built around each person</div>
              <div className="mt-1 text-xs text-muted-foreground">
                We combine evidence-based planning with practical emotional support from first consult onward.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">Our care philosophy</div>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Inspired by leading fertility centres, our approach balances high clinical standards, individualized treatment,
              and practical support through each stage of the patient journey.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {carePillars.map((pillar, idx) => (
                <article
                  key={pillar.title}
                  className={`rounded-3xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                    idx === 0
                      ? 'border-sky-200/70 bg-sky-50/60'
                      : idx === 1
                        ? 'border-emerald-200/70 bg-emerald-50/55'
                        : 'border-violet-200/70 bg-violet-50/55'
                  }`}
                >
                  <div className="inline-flex rounded-xl border border-border/70 bg-background/55 p-2">
                    <pillar.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          <div className="rounded-3xl border border-border/70 bg-background/30 p-5">
            <div className="text-sm font-extrabold text-muted-foreground">What to expect</div>
            <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">A structured fertility journey, designed around you</h2>
            <ul className="mt-4 space-y-3">
              {[
                'Comprehensive first consultation and history review.',
                'Diagnostic planning for both women and men where relevant.',
                'Clear treatment options and personalized protocol discussion.',
                'Coordinated follow-up from stimulation to transfer and beyond.',
                'Educational resources for treatment preparation and wellbeing support.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Start your journey
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background/30 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-background/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border/70 bg-background/30 p-2">
            <img src={Fertility} alt="Consultation and fertility care planning session" className="h-full min-h-[320px] w-full rounded-[20px] object-cover" />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="text-2xl font-extrabold text-muted-foreground">Our specialists</div>
        <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">Meet the team supporting your fertility plan</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {team.map((m) => (
            <article key={m.name} className="rounded-3xl border border-border/70 bg-background/25 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/80 to-accent/80 shadow-sm ring-1 ring-border/50" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">{m.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{m.role}</div>
                </div>
              </div>
              <div className="mt-4 text-sm font-extrabold">Focus</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.focus}</div>
              <div className="mt-4 text-xs font-extrabold text-muted-foreground">{m.cred}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-border/70 bg-background/25 shadow-sm">
            <img src={FollowUp} alt="Care team follow-up and patient support" className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-base font-extrabold">Continuity of care</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We coordinate communication across clinicians, nurses, and counselors to reduce confusion and improve
                patient confidence throughout treatment.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-border/70 bg-background/25 shadow-sm">
            <img src={Review} alt="Clinical review and evidence-based fertility planning" className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-base font-extrabold">Evidence-driven planning</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We prioritize clear medical reasoning and practical education so each recommendation is understandable,
                consent-centered, and aligned with your goals.
              </p>
            </div>
          </article>
        </div>
      </section>

      <FaqSection
        backgroundImage={Review}
        title="About us FAQs"
        subtitle="Quick answers about our team, care model, and how to begin your fertility journey with us."
        items={aboutFaq}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Speak to Care Team', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}

