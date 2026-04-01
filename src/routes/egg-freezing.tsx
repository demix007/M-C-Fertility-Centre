import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock3, FlaskConical, HeartHandshake, Phone, ShieldCheck, Sparkles, TestTube2 } from 'lucide-react'
import { useSeo } from '../lib/seo'
import { pricingRows } from '../lib/data/pricing'
import { useEggEstimatorStore } from '../state/eggFreezingStore'
import { Input } from '../components/ui/Input'
import { faqPageJsonLd } from '../lib/structuredData'
import { FaqSection } from '../components/sections/FaqSection'
import EggFreezingImg from '../assets/egg_freezing.jpg'
import Fertility from '../assets/fertility.jpg'
import FollowUp from '../assets/follow_up.jpg'
import Review from '../assets/review.jpg'
import HeroSlide1 from '../assets/hero_slide_1.jpg'
import HeroSlide2 from '../assets/hero_slide_2.jpg'
import HeroSlide4 from '../assets/hero_slide_4.jpg'
import HeroSlide5 from '../assets/hero_slide_5.jpg'
import HeroSlide6 from '../assets/hero_slide_6.jpg'

export const Route = createFileRoute('/egg-freezing')({
  component: EggFreezingPage,
})

function EggFreezingPage() {
  const reducedMotion = useReducedMotion()
  const heroSlides = [HeroSlide2, HeroSlide4, EggFreezingImg, HeroSlide5, HeroSlide1, HeroSlide6]
  const [heroSlideIndex, setHeroSlideIndex] = useState(0)

  const faqItems = [
    {
      q: 'Who should consider egg freezing?',
      a: 'Egg freezing can help people who want to preserve fertility for later life plans, before medical treatment, or when they are not ready to start a family yet.',
    },
    {
      q: 'How many eggs should I freeze?',
      a: 'The target varies by age, ovarian reserve, and family-building goals. Many plans discuss ranges such as 10-20 mature eggs, but your clinician personalizes this recommendation.',
    },
    {
      q: 'Will egg freezing guarantee a future pregnancy?',
      a: 'No. Egg freezing preserves options, not guarantees. Future outcomes depend on age at freezing, egg quality, sperm factors, embryo development, and uterine health.',
    },
    {
      q: 'Is the process painful?',
      a: 'Most patients describe the process as manageable. You may have temporary bloating during stimulation. Retrieval is typically short and done under sedation.',
    },
    {
      q: 'How long can eggs stay frozen?',
      a: 'Eggs can remain frozen for many years under regulated storage. Your care team explains local regulations, renewal schedules, and your long-term storage plan.',
    },
    {
      q: 'Is it better to freeze eggs or embryos?',
      a: 'It depends on your goals. Egg freezing preserves flexibility when sperm choice is undecided, while embryo freezing is often chosen when working with a partner or donor now.',
    },
    {
      q: 'What affects success when frozen eggs are used later?',
      a: 'Age at freezing, number of mature eggs retrieved, lab quality, and overall reproductive health are major factors that influence eventual outcomes.',
    },
    {
      q: 'How much does egg freezing cost?',
      a: 'Costs vary by protocol, medication response, and storage duration. We provide transparent ranges and confirm your personalized plan during consultation.',
    },
    {
      q: 'Is there an age limit for using frozen eggs?',
      a: 'Yes, the age limit for using frozen eggs is 50 years. However, the best age to freeze eggs is between 30 and 35 years.',
    },
    {
      q: 'What happens when I want to use my eggs?',
      a: 'When you want to use your eggs, you will need to thaw them and  fertilise them with sperm (from a partner or donor), and grow embryos in our advanced AI-guided lab before transferring each embryo to your uterus.',
    },
    {
      q: 'What are the risks of using frozen eggs?',
      a: 'The risks of using frozen eggs are the same as the risks of using fresh eggs.',
    },
    {
      q: 'Will I need IVF to use my frozen eggs?',
      a: 'Yes, you will need IVF to use your frozen eggs. Using frozen eggs involves ICSI fertilisation (injecting a sperm into each egg) and embryo transfer.',
    }
  ] as const

  useSeo({
    title: 'Egg Freezing | M&C Fertility Centre',
    description:
      'Explore egg freezing with a step-by-step journey, clear cost context, and personalized fertility preservation planning at M&C Fertility Centre.',
    jsonLd: [
      faqPageJsonLd([
        ...faqItems.map((x) => ({ question: x.q, answer: x.a })),
      ]),
    ],
  })

  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length)
    }, 3600)
    return () => window.clearInterval(timer)
  }, [heroSlides.length, reducedMotion])

  const age = useEggEstimatorStore((s) => s.age)
  const setAge = useEggEstimatorStore((s) => s.setAge)
  const estimatedPct = useEggEstimatorStore((s) => s.getEstimatedSuccessPct())
  const [ageInput, setAgeInput] = useState(String(age))

  const storageYear1 = useMemo(() => pricingRows.find((r) => r.service === 'Storage - Year 1'), [])
  const storageAnnual = useMemo(() => pricingRows.find((r) => r.service === 'Storage - Annual (after Year 1)'), [])

  useEffect(() => {
    setAgeInput(String(age))
  }, [age])

  const commitAgeInput = () => {
    const parsed = Number(ageInput)
    if (!Number.isFinite(parsed)) {
      setAgeInput(String(age))
      return
    }
    const clamped = Math.max(18, Math.min(50, Math.round(parsed)))
    setAge(clamped)
    setAgeInput(String(clamped))
  }

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroSlides[heroSlideIndex]}
            src={heroSlides[heroSlideIndex]}
            alt="Egg freezing and fertility preservation care"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: reducedMotion ? 0 : 0.9, ease: 'easeOut' }}
            className="absolute inset-0 -z-30 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(16,185,129,0.28)_72%,rgba(236,72,153,0.30)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_300px_at_14%_14%,rgba(14,165,233,0.26),transparent_60%),radial-gradient(640px_280px_at_86%_18%,rgba(52,211,153,0.24),transparent_62%),radial-gradient(620px_260px_at_50%_100%,rgba(244,114,182,0.18),transparent_66%)]" />

        <div className="relative min-h-[560px] px-6 py-12 md:min-h-[620px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <FlaskConical className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Egg freezing & preservation
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Freeze time, not your life plans
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Whether you are planning for later, protecting fertility before medical treatment, or simply creating
              future options, our team guides you through egg freezing with clear steps, transparent costs, and
              personalized care.
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
                <span className="relative z-10">Book Egg Freezing Consult</span>
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
                { icon: Sparkles, label: 'Personalized cycle plans' },
                { icon: ShieldCheck, label: 'Secure cryostorage guidance' },
                { icon: Clock3, label: 'Future flexibility' },
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
                    className={`h-2.5 rounded-full transition-all ${active ? 'w-8 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/75'}`}
                    aria-label={`View slide ${idx + 1}`}
                    aria-pressed={active}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.1, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={EggFreezingImg} alt="Egg freezing consultation and fertility preservation care" className="h-full min-h-[360px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Why people choose egg freezing</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Career planning, delayed family-building, and fertility preservation before treatment are common reasons.
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">Your egg freezing journey</div>
            <h2 className="mt-2 text-xl font-extrabold">Step by step with clarity</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              The process is structured and manageable: consultation, stimulation, retrieval, vitrification, and secure
              storage. When you are ready in the future, eggs can be thawed and used in IVF.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                { n: '1', t: 'Consultation & testing', d: 'Review goals, history, and baseline fertility markers.' },
                { n: '2', t: 'Ovarian stimulation', d: 'Medication supports mature egg development with close monitoring.' },
                { n: '3', t: 'Egg retrieval', d: 'Short outpatient procedure under sedation using ultrasound guidance.' },
                { n: '4', t: 'Vitrification', d: 'Eggs are flash-frozen to minimize ice crystal damage.' },
                { n: '5', t: 'Cryostorage', d: 'Eggs are stored in controlled conditions until needed.' },
                { n: '6', t: 'Future use', d: 'Thawing, fertilization, embryo culture, and transfer planning.' },
              ].map((s, idx) => (
                <div
                  key={s.n}
                  className={`group rounded-3xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    idx % 3 === 0
                      ? 'border-sky-200/70 bg-sky-50/60'
                      : idx % 3 === 1
                        ? 'border-emerald-200/70 bg-emerald-50/60'
                        : 'border-violet-200/70 bg-violet-50/55'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-border/60 bg-white/65 text-sm font-extrabold text-primary">
                      {s.n}
                    </div>
                    <div className="text-sm font-extrabold">{s.t}</div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="text-2xl font-extrabold text-muted-foreground">Egg freezing vs embryo freezing</div>
        <h2 className="mt-2 text-xl font-extrabold">Choose what fits your current goals</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Egg freezing keeps options open when sperm choice is not finalized. Embryo freezing may be preferred when
          you already have a partner or donor plan. Some patients consider a hybrid strategy.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: 'Egg freezing',
              desc: 'Unfertilized eggs are preserved for future use, offering maximum timing flexibility.',
              points: ['Best when partner/donor decisions are not final', 'Focus on preserving options now', 'Can be used later in IVF'],
            },
            {
              title: 'Embryo freezing',
              desc: 'Eggs are fertilized now and embryos are stored for future transfer planning.',
              points: ['Useful for couples or donor plans now', 'Embryo quality can be assessed sooner', 'Supports later frozen transfer'],
            },
            {
              title: 'Hybrid approach',
              desc: 'Some patients preserve both eggs and embryos to increase flexibility.',
              points: ['Balances present and future choices', 'Personalized by age and ovarian reserve', 'Discussed during clinician review'],
            },
          ].map((x, idx) => (
            <div
              key={x.title}
              className={`group rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                idx === 0
                  ? 'border-sky-200/70 bg-sky-50/60'
                  : idx === 1
                    ? 'border-emerald-200/70 bg-emerald-50/55'
                    : 'border-violet-200/70 bg-violet-50/55'
              }`}
            >
              <div className="text-sm font-extrabold">{x.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {x.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.4, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={Fertility} alt="Fertility diagnostics and monitoring" className="h-full min-h-[360px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Assessment and preparation</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Fertility baseline tests guide individualized protocols and realistic planning.
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">Costs, storage, and planning</div>
            <h2 className="mt-2 text-xl font-extrabold">Transparent details before you start</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Pricing depends on protocol intensity, medication response, and storage duration. We share transparent
              ranges and confirm your exact plan at consultation.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                <div className="text-sm font-extrabold">Storage info</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Transparent ranges in Naira for planning and informed decisions.
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-border/70 bg-card/30 p-4">
                    <div className="text-xs font-extrabold text-muted-foreground">{storageYear1?.service}</div>
                    <div className="mt-1 text-base font-extrabold">{storageYear1?.priceRangeNgn}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{storageYear1?.includes}</div>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-card/30 p-4">
                    <div className="text-xs font-extrabold text-muted-foreground">{storageAnnual?.service}</div>
                    <div className="mt-1 text-base font-extrabold">{storageAnnual?.priceRangeNgn}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{storageAnnual?.includes}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                <div className="text-sm font-extrabold">Age estimator (informational)</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Educational context only. Your clinician confirms individualized probabilities.
                </div>
                <label className="mt-4 block">
                  <span className="text-sm font-extrabold">Your age</span>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <Input
                      type="number"
                      min={18}
                      max={50}
                      value={ageInput}
                      onChange={(e) => setAgeInput(e.target.value)}
                      onBlur={commitAgeInput}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          commitAgeInput()
                        }
                      }}
                      aria-label="Enter your age"
                    />
                    <button
                      type="button"
                      onClick={commitAgeInput}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Run estimate
                    </button>
                    <div className="rounded-2xl border border-border/70 bg-card/30 px-3 py-2 text-sm font-extrabold">{age}</div>
                  </div>
                </label>
                <div className="mt-4 rounded-3xl border border-border/70 bg-card/30 p-4" aria-live="polite">
                  <div className="text-xs font-extrabold text-muted-foreground">Estimated success context</div>
                  <div className="mt-1 text-2xl font-extrabold">{estimatedPct}%</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Use this as guidance only. Final planning depends on tests, protocol, and clinician review.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_220px_at_12%_0%,rgba(59,130,246,0.16),transparent_60%),radial-gradient(620px_220px_at_88%_100%,rgba(16,185,129,0.12),transparent_62%)]"
        />
        <div className="relative z-10">
          <div className="text-2xl font-extrabold text-muted-foreground">The M&C difference</div>
          <h2 className="mt-2 text-xl font-extrabold">Three pillars behind every preservation journey</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                t: 'Compassionate support',
                d: 'From first consult to post-retrieval follow-up, we prioritize calm communication and emotional support.',
                icon: HeartHandshake,
              },
              {
                t: 'Innovation and precision',
                d: 'Monitoring data, lab quality, and tailored protocol choices drive safer and smarter treatment pathways.',
                icon: TestTube2,
              },
              {
                t: 'Transparent planning',
                d: 'Clear steps, honest expectations, and practical cost guidance help you make confident decisions.',
                icon: ShieldCheck,
              },
            ].map((x, idx) => (
              <div
                key={x.t}
                className={`group rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                  idx === 0
                    ? 'border-sky-200/70 bg-sky-50/60'
                    : idx === 1
                      ? 'border-emerald-200/70 bg-emerald-50/55'
                      : 'border-violet-200/70 bg-violet-50/55'
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-white/60">
                  <x.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="mt-4 text-sm font-extrabold">{x.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">When should you consider preservation?</div>
            <h2 className="mt-2 text-xl font-extrabold">Common scenarios where timing matters</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'You want to delay family-building for personal or career plans',
                'You are preparing for chemotherapy, radiation, or surgery',
                'You have reduced ovarian reserve and want proactive planning',
                'You want fertility flexibility while not ready to use sperm now',
                'You are considering donor or family-building pathways later',
                'You want to preserve options before age-related decline progresses',
              ].map((item, idx) => (
                <li
                  key={item}
                  className={`flex items-start gap-2 rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5 ${
                    idx % 3 === 0
                      ? 'border-sky-200/70 bg-sky-50/60'
                      : idx % 3 === 1
                        ? 'border-emerald-200/70 bg-emerald-50/55'
                        : 'border-violet-200/70 bg-violet-50/55'
                  }`}
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.2, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={FollowUp} alt="Egg freezing follow-up planning and support" className="h-full min-h-[360px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Peace of mind for future decisions</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Preserve possibilities now and use them when timing feels right for you.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection
        backgroundImage={Review}
        title="Frequently asked questions"
        subtitle="Clear answers about egg freezing, storage, comfort, and future use."
        items={faqItems}
        ctas={[
          { to: '/booking', label: 'Book Egg Freezing Consult', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/guides', label: 'Download Guides', variant: 'secondary' },
        ]}
      />
    </div>
  )
}

