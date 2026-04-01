import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs'
import { FaqSection } from '../components/sections/FaqSection'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, FlaskConical, HeartHandshake, Phone, Sparkles, Stethoscope, TestTube2 } from 'lucide-react'
import PetriDish from '../assets/petri_dish.webp'
import Protocols from '../assets/protocols.webp'
import Review from '../assets/review.webp'
import HeroSlide1 from '../assets/hero_slide_1.webp'
import HeroSlide2 from '../assets/hero_slide_2.webp'
import HeroSlide3 from '../assets/hero_slide_3.webp'
import HeroSlide4 from '../assets/hero_slide_4.webp'
import HeroSlide5 from '../assets/hero_slide_5.webp'
import HeroSlide6 from '../assets/hero_slide_6.webp'
import BabyFeet from '../assets/baby_feet.webp'
import Diagnose from '../assets/diagnose.webp'
import Intercourse from '../assets/intercourse.webp'
import ICU from '../assets/icu.webp'
import Ovulation from '../assets/ovulation.webp'
import IVFInfo from '../assets/ivf_info.webp'
type IvfTab = 'conventional' | 'mild' | 'natural'

const timelineSteps = [
  {
    key: 'stimulation-monitoring',
    title: 'Ovarian stimulation & monitoring',
    desc: 'Medication supports follicle development while ultrasound and bloodwork help guide timing and safety.',
  },
  {
    key: 'retrieval',
    title: 'Egg retrieval',
    desc: 'A short, clinician-led procedure under sedation. Mature eggs are collected using ultrasound guidance.',
  },
  {
    key: 'fertilization',
    title: 'Fertilization (IVF or ICSI)',
    desc: 'Eggs and sperm are combined in the lab. When needed, ICSI can help optimize fertilization.',
  },
  {
    key: 'culture',
    title: 'Embryo culture & assessment',
    desc: 'Embryos develop for several days in our embryology lab and are graded to support informed decisions.',
  },
  {
    key: 'transfer',
    title: 'Embryo transfer',
    desc: 'A carefully timed procedure where an embryo is placed in the uterus based on readiness planning.',
  },
  {
    key: 'pregnancy-test',
    title: 'Pregnancy test & next steps',
    desc: 'A blood test helps confirm results. We guide you through follow-up and future options if needed.',
  },
]

const beforeIvfOptions = [
  {
    title: 'Timed intercourse',
    desc: 'Cycle tracking and monitoring to guide optimal timing, especially when ovulation is irregular.',
    icon: HeartHandshake,
    image: Intercourse,
    points: [
      'Lower-intervention starting point for selected patients',
      'Ovulation tracking with timing guidance',
      'Can be combined with lifestyle and cycle optimization support',
    ],
  },
  {
    title: 'Ovulation induction',
    desc: 'Medication support to help follicles develop, often paired with monitoring and clear timing guidance.',
    icon: Sparkles,
    image: Ovulation,
    points: [
      'Supports ovulation in patients with irregular cycles',
      'Monitoring helps dose safely and time treatment windows',
      'Can be used before considering IVF in suitable cases',
    ],
  },
  {
    title: 'IUI (intrauterine insemination)',
    desc: 'Prepared sperm is placed directly in the uterus; often used for mild male-factor or cervical factors.',
    icon: Stethoscope,
    image: ICU,
    points: [
      'Less invasive than IVF for selected diagnoses',
      'Sperm preparation improves delivery timing',
      'Useful step before IVF when clinically appropriate',
    ],
  },
  {
    title: 'Diagnostic procedures',
    desc: 'When needed, targeted procedures can help identify issues like fibroids, scarring, or endometriosis.',
    icon: TestTube2,
    image: Diagnose,
    points: [
      'Clarifies root causes that affect fertility',
      'Supports precise treatment sequencing',
      'Improves planning confidence before advanced treatment',
    ],
  },
]

const whoIvfFor = [
  'Blocked or damaged fallopian tubes',
  'Low sperm count or male factor infertility',
  'Recurrent pregnancy loss',
  'Advanced maternal age',
  'Low ovarian reserve',
  'Endometriosis',
  'Anovulation or ovulatory dysfunction',
  'Unexplained infertility',
  'Multiple unsuccessful IUI cycles',
  'Genetic concerns (PGT-A / PGT-M)',
  'Single parents and LGBTQ+ family building plans',
  'Patients planning fertility preservation before medical treatment',
]

const successFactors = [
  { t: 'Age', d: 'The most influential predictor of egg quality and overall outcomes.' },
  { t: 'Egg quality', d: 'Influenced by age, ovarian reserve, and overall health.' },
  { t: 'Sperm quality', d: 'Can be supported with ICSI or lab selection strategies when appropriate.' },
  { t: 'Underlying diagnosis', d: 'Conditions like endometriosis or PCOS can affect response and planning.' },
  { t: 'Embryo quality', d: 'Developmental stage and grading help guide transfer strategy.' },
  { t: 'Uterine health', d: 'Readiness checks help support implantation.' },
  { t: 'Treatment history', d: 'Prior responses inform protocol tuning and realistic next steps.' },
  { t: 'Medication response', d: 'How your body responds to stimulation helps determine dosing, timing, and cycle planning.' },
  { t: 'Lifestyle and general health', d: 'Nutrition, sleep, stress, and chronic health conditions can influence treatment readiness and outcomes.' },
]

export const Route = createFileRoute('/ivf')({
  component: IVFPage,
})

function IVFPage() {
  const reducedMotion = useReducedMotion()
  const heroSlides = [HeroSlide1,BabyFeet, HeroSlide2, HeroSlide3, HeroSlide4, HeroSlide5, HeroSlide6]
  const [heroSlideIndex, setHeroSlideIndex] = useState(0)

  const IVF_FAQ = [
    {
      q: 'How long does an IVF cycle take?',
      a: 'Many cycles span several weeks from consultation to transfer. Timing depends on protocol choice, monitoring response, and whether embryos are transferred fresh or in a later frozen cycle.',
    },
    {
      q: 'Is IVF always painful or high-risk?',
      a: 'Most patients describe injections and monitoring as manageable. Egg retrieval is typically brief and done with sedation. Your care team reviews side effects and warning signs so you feel supported.',
    },
    {
      q: 'Will IVF be the first step for everyone?',
      a: 'Not always. Depending on your diagnosis, there may be lower-intervention options to try first. We focus on clarity and thoughtful sequencing, not pressure.',
    },
    {
      q: 'What determines which IVF approach I should choose?',
      a: 'Age, ovarian reserve, diagnosis, and prior responses matter. Your clinician helps you select a plan that balances effectiveness, safety, and treatment burden.',
    },
    {
      q: 'OHSS: what does it mean?',
      a: 'OHSS (Ovarian Hyperstimulation Syndrome) is a potential risk discussed during monitoring. Your clinician adjusts protocols to support safety.',
    },
    {
      q: 'Embryo and transfer: what is the difference?',
      a: 'An embryo is the developing stage after fertilization. Transfer is when a clinician places an embryo in the uterus based on readiness planning.',
    },
    {
      q: 'Monitoring: why so many check-ins?',
      a: 'Monitoring helps your care team understand how you respond and supports safer, clearer next steps.',
    },
    {
      q: 'Will my transfer be fresh or frozen?',
      a: 'Transfer planning depends on readiness, hormone response, and lab milestones. Your clinician will explain what is safest and most appropriate for your case.',
    },
    {
      q: 'What if my first cycle is not successful?',
      a: 'If a cycle is not successful, we review learnings from monitoring and lab results, then discuss next steps with compassion and realism, including frozen embryo transfer if available.',
    },
    {
      q: 'Which IVF approach is best for me?',
      a: 'The right approach depends on age, ovarian reserve, diagnosis, and prior responses. We explain options and help you choose a plan that balances outcomes, safety, and treatment burden.',
    },
  ] as const

  useSeo({
    title: 'IVF & Procedures | M&C Fertility Centre',
    description:
      'Learn IVF pathways with calm, step-by-step education: Conventional IVF, Mild IVF, and Natural Cycle IVF. Book a consultation in Nigeria.',
    jsonLd: [
      faqPageJsonLd([
        ...IVF_FAQ.map((x) => ({ question: x.q, answer: x.a })),
      ]),
    ],
  })

  const [tab, setTab] = useState<IvfTab>('conventional')

  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length)
    }, 3600)
    return () => window.clearInterval(timer)
  }, [heroSlides.length, reducedMotion])

  const tabCopy = useMemo(
    () => ({
      conventional: {
        title: 'Conventional IVF',
        body: 'A fully stimulated IVF cycle designed for broad patient profiles, with careful monitoring and clear decision points.',
        bullets: [
          'Suitable for many diagnoses, including tubal, male-factor, and unexplained infertility',
          'Focuses on supporting multiple eggs for embryo selection when appropriate',
          'Often paired with ICSI, blastocyst culture, and frozen embryo transfer strategies',
        ],
      },
      mild: {
        title: 'Mild IVF',
        body: 'Lower-intensity stimulation for many patients who may benefit from reducing medication burden while maintaining a structured plan.',
        bullets: [
          'May reduce injections and side effects for some patients',
          'Monitoring remains essential for safety and timing',
          'Eligibility depends on ovarian reserve and clinician assessment',
        ],
      },
      natural: {
        title: 'Natural Cycle IVF',
        body: 'A minimal-intervention pathway that works with natural cycle patterns and may use fewer medications.',
        bullets: [
          'Can be appropriate for select patients based on clinical evaluation',
          'Requires precise monitoring and timing',
          'Transfer planning may be fresh or frozen depending on readiness',
        ],
      },
    }),
    [],
  )

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroSlides[heroSlideIndex]}
            src={heroSlides[heroSlideIndex]}
            alt="IVF journey and fertility care"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: reducedMotion ? 0 : 0.9, ease: 'easeOut' }}
            className="absolute inset-0 -z-30 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(59,130,246,0.32)_72%,rgba(236,72,153,0.34)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_300px_at_14%_14%,rgba(14,165,233,0.26),transparent_60%),radial-gradient(640px_280px_at_86%_18%,rgba(244,114,182,0.24),transparent_62%),radial-gradient(620px_260px_at_50%_100%,rgba(59,130,246,0.18),transparent_66%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.14)_45%,transparent_60%)] opacity-70"
        />

        <div className="relative min-h-[560px] px-6 py-12 md:min-h-[620px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <FlaskConical className="h-4 w-4 text-primary" aria-hidden="true" />
              IVF &amp; procedures
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              IVF, explained clearly — with gentle, personalized pathways
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              IVF is a fertility treatment where eggs are fertilized with sperm in the laboratory and an embryo is placed in
              the uterus. We use evidence-led monitoring, calm communication, and protocols tailored to your diagnosis and
              timeline.
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
                <span className="relative z-10">Book Consultation</span>
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
                { icon: CheckCircle2, label: 'Evidence-led protocols' },
                { icon: TestTube2, label: 'Advanced embryology lab' },
                { icon: HeartHandshake, label: 'Counselling-first care' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/30 bg-white/10 p-3 backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-white">
                    <item.icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              {heroSlides.map((img, idx) => {
                const active = idx === heroSlideIndex
                return (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setHeroSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      active ? 'w-8 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/75'
                    }`}
                    aria-label={`View slide ${idx + 1}`}
                    aria-pressed={active}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE IVF */}
      <section className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_220px_at_12%_0%,rgba(59,130,246,0.16),transparent_60%),radial-gradient(620px_220px_at_88%_100%,rgba(16,185,129,0.12),transparent_62%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.2)_48%,transparent_64%)] opacity-70 transition-transform duration-1000 ease-out group-hover:translate-x-full"
        />
        <div className="relative z-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-2xl font-extrabold text-muted-foreground">Before IVF</div>
            <h2 className="mt-2 text-xl font-extrabold">Understand your options</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              IVF is not always the first step. Depending on your diagnosis, lower-intervention pathways may be suitable —
              and if IVF is clearly indicated, we’ll explain why with calm, transparent reasoning.
            </p>
          </div>
          <div className="inline-flex items-center rounded-full border border-border/70 bg-background/45 px-4 py-2 text-xs font-extrabold text-muted-foreground">
            Your plan is individualized
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {beforeIvfOptions.map((x, idx) => (
            <motion.div
              key={x.title}
              initial={false}
              animate={reducedMotion ? { y: 0 } : { y: [0, -2, 0] }}
              transition={{ duration: 3 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
              whileHover={reducedMotion ? undefined : { y: -5 }}
              className="group/card relative min-h-[320px] overflow-hidden rounded-3xl border border-border/70 shadow-sm"
            >
              <img src={x.image} alt={x.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/30 bg-white/10 p-4 text-white backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <x.icon className="h-5 w-5" aria-hidden="true" />
                  {x.title}
                </div>
                <div className="mt-2 text-xs text-white/90">{x.desc}</div>
              </div>

              <div className="absolute inset-0 z-20 -translate-y-full bg-primary/95 p-5 text-primary-foreground transition-transform duration-500 ease-out group-hover/card:translate-y-0">
                <div className="flex items-center gap-2 text-base font-extrabold">
                  <x.icon className="h-5 w-5" aria-hidden="true" />
                  {x.title}
                </div>
                <p className="mt-2 text-sm text-primary-foreground/95">{x.desc}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-primary-foreground/95">
                  {x.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* WHO IVF IS FOR */}
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">Is IVF right for you?</div>
            <h2 className="mt-2 text-xl font-extrabold">Common reasons clinicians recommend IVF</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              IVF may be recommended when there are barriers to natural conception or when previous approaches haven’t been
              successful. Your clinician will explain what’s realistic for your unique situation.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whoIvfFor.map((x, idx) => (
                <li
                  key={x}
                  className={`group flex items-start gap-2 rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/45 ${
                    idx % 4 === 0
                      ? 'border-sky-200/70 bg-sky-50/65 hover:bg-sky-50/90'
                      : idx % 4 === 1
                        ? 'border-emerald-200/70 bg-emerald-50/60 hover:bg-emerald-50/85'
                        : idx % 4 === 2
                          ? 'border-violet-200/70 bg-violet-50/55 hover:bg-violet-50/80'
                          : 'border-rose-200/70 bg-rose-50/55 hover:bg-rose-50/80'
                  }`}
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-colors duration-300 group-hover:text-primary/80"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted-foreground">{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.1, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={Protocols} alt="IVF monitoring and clinical planning" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-m font-extrabold">Comprehensive evaluation</div>
              <div className="mt-1 text-xs text-muted-foreground">
                History review, baseline scans, and lab tests help guide the most sensible next step.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IVF PROCESS */}
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.1, repeat: reducedMotion ? 0 : Infinity }}
            className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-sky-100/85 via-indigo-50/75 to-emerald-100/80 p-2 shadow-sm lg:col-span-5"
          >
            <div className="h-full w-full rounded-[20px] bg-white/55 p-2 ring-1 ring-border/40">
              <img
                src={IVFInfo}
                alt="IVF process and patient monitoring overview"
                className="h-full w-full rounded-2xl bg-sky-50/45 object-contain p-1"
              />
            </div>
          </motion.div>

          <div className="h-full lg:col-span-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-2xl font-extrabold text-muted-foreground">The IVF process</div>
                <h2 className="mt-2 text-xl font-extrabold">Step by step</h2>
                <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                  Here’s what a typical IVF journey can look like. Your timeline may differ depending on protocol choice,
                  monitoring response, and whether you plan a fresh or frozen embryo transfer.
                </p>
              </div>
              <div className="inline-flex items-center rounded-full border border-border/70 bg-background/45 px-4 py-2 text-xs font-extrabold text-muted-foreground">
                Clear milestones
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {timelineSteps.map((s, idx) => (
                <div
                  key={s.key}
                  className={`group relative overflow-hidden rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    idx % 4 === 0
                      ? 'border-sky-200/70 bg-sky-50/65'
                      : idx % 4 === 1
                        ? 'border-emerald-200/70 bg-emerald-50/60'
                        : idx % 4 === 2
                          ? 'border-violet-200/70 bg-violet-50/55'
                          : 'border-rose-200/70 bg-rose-50/55'
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-[radial-gradient(520px_220px_at_12%_0%,rgba(37,99,235,0.2),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-white/60 text-sm font-extrabold text-primary transition group-hover:scale-105">
                        {idx + 1}
                      </div>
                      <div className="text-sm font-extrabold">{s.title}</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-border/70 bg-background/30 p-5 text-sm text-muted-foreground">
              Not a medical guarantee. Your clinician finalizes your plan after baseline testing and counselling.
            </div>
          </div>
        </div>
      </section>

      {/* IVF APPROACH + TABS */}
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">Choose your approach</div>
            <h2 className="mt-2 text-xl font-extrabold">Gentle, customized IVF pathways</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              We focus on the right protocol for your biology — balancing effectiveness with treatment burden and safety.
              Your clinician explains trade-offs in plain language.
            </p>

            <div className="mt-6">
              <Tabs value={tab} onValueChange={(v) => setTab(v as IvfTab)}>
                <TabsList className="flex flex-wrap gap-2 rounded-2xl border border-border/70 bg-background/30 p-1.5">
                  <TabsTrigger
                    value="conventional"
                    className="rounded-xl border border-sky-200/80 bg-sky-50/80 px-4 py-2 text-foreground transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-100/80 data-[state=active]:border-emerald-400 data-[state=active]:bg-emerald-100 data-[state=active]:shadow-sm"
                  >
                    Conventional IVF
                  </TabsTrigger>
                  <TabsTrigger
                    value="mild"
                    className="rounded-xl border border-emerald-200/80 bg-emerald-50/80 px-4 py-2 text-foreground transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100/80 data-[state=active]:border-emerald-400 data-[state=active]:bg-emerald-100 data-[state=active]:shadow-sm"
                  >
                    Mild IVF
                  </TabsTrigger>
                  <TabsTrigger
                    value="natural"
                    className="rounded-xl border border-violet-200/80 bg-violet-50/80 px-4 py-2 text-foreground transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-100/80 data-[state=active]:border-emerald-400 data-[state=active]:bg-emerald-100 data-[state=active]:shadow-sm"
                  >
                    Natural Cycle IVF
                  </TabsTrigger>
                </TabsList>

                <div className="mt-6 space-y-5">
                  {(Object.keys(tabCopy) as IvfTab[]).map((key) => {
                    const panel = tabCopy[key]
                    const panelCardClass =
                      key === 'conventional'
                        ? 'border-sky-200/80 bg-sky-50/65 hover:bg-sky-50/90'
                        : key === 'mild'
                          ? 'border-emerald-200/80 bg-emerald-50/65 hover:bg-emerald-50/90'
                          : 'border-violet-200/80 bg-violet-50/65 hover:bg-violet-50/90'
                    return (
                      <TabsContent key={key} value={key}>
                        <div
                          className={`rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${panelCardClass}`}
                        >
                          <div className="text-lg font-extrabold">{panel.title}</div>
                          <p className="mt-2 text-sm text-muted-foreground">{panel.body}</p>
                          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            {panel.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                    )
                  })}
                </div>
              </Tabs>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.4, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={PetriDish} alt="Embryology lab and IVF procedures" className="h-full min-h-[380px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Lab precision, explained clearly</div>
              <div className="mt-1 text-xs text-muted-foreground">
                We translate lab milestones into human language so you always know what’s next.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUCCESS FACTORS */}
      <section className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_220px_at_12%_0%,rgba(59,130,246,0.16),transparent_60%),radial-gradient(620px_220px_at_88%_100%,rgba(16,185,129,0.12),transparent_62%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.2)_48%,transparent_64%)] opacity-70 transition-transform duration-1000 ease-out group-hover:translate-x-full"
        />
        <div className="relative z-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-2xl font-extrabold text-muted-foreground">Success factors</div>
            <h2 className="mt-2 text-xl font-extrabold">What influences IVF outcomes?</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              IVF outcomes depend on several variables. Understanding these helps set realistic expectations and supports
              better decision-making.
            </p>
          </div>
          <div className="inline-flex items-center rounded-full border border-border/70 bg-background/45 px-4 py-2 text-xs font-extrabold text-muted-foreground">
            Clarity over hype
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {successFactors.map((x, idx) => (
            <div
              key={x.t}
              className={`group relative overflow-hidden rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                idx % 4 === 0
                  ? 'border-sky-200/70 bg-sky-50/60 hover:border-sky-300/80 hover:bg-sky-50/85'
                  : idx % 4 === 1
                    ? 'border-emerald-200/70 bg-emerald-50/55 hover:border-emerald-300/80 hover:bg-emerald-50/80'
                    : idx % 4 === 2
                      ? 'border-violet-200/70 bg-violet-50/55 hover:border-violet-300/80 hover:bg-violet-50/80'
                      : 'border-rose-200/70 bg-rose-50/55 hover:border-rose-300/80 hover:bg-rose-50/80'
              }`}
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(520px_220px_at_12%_0%,rgba(37,99,235,0.18),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="text-sm font-extrabold">{x.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* FULL FAQ */}
      <FaqSection
        backgroundImage={Review}
        title="Frequently asked questions"
        subtitle="Straight answers about timelines, side effects, and what happens at each stage of IVF."
        items={IVF_FAQ}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}
