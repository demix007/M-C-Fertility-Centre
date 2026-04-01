import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import heroImg from '../assets/hero.webp'
import heroImg640 from '../assets/hero-640.webp'
import heroImg1024 from '../assets/hero-1024.webp'
import heroImg1440 from '../assets/hero-1440.webp'
import ultraSoundImg from '../assets/love_pregnancy.webp'
import TommyScan from '../assets/tommy_scan.webp'
import HealthyBaby from '../assets/healthy_baby.webp'
import HealthyMother from '../assets/healthy_mother.webp'
import PersonalisedTreatment from '../assets/personalised_treatment.webp'
import {
  ArrowRight,
  BookOpenIcon,
  CalendarHeart,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CircleDollarSign,
  Dna,
  DollarSignIcon,
  ShieldUser,
  HeartHandshake,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Quote,
  ShieldCheckIcon,
  Sparkles,
  Trophy,
} from 'lucide-react'
import { clinicInfo } from '../lib/clinicInfo'
import { services } from '../lib/data/services'
import { successStories } from '../lib/data/successes'
import { useSeo } from '../lib/seo'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  useSeo({
    title: 'M&C Fertility Centre | Where Compassion Meets Innovation',
    description:
      'Ultra-modern IVF clinic website in Nigeria. Explore IVF, egg freezing, donor services, genetic testing, pricing in Naira, and book a consultation.',
  })

  const reducedMotion = useReducedMotion()
  const target = 1000
  const [familiesCount, setFamiliesCount] = useState(() => (reducedMotion ? target : 0))

  useEffect(() => {
    if (reducedMotion) return
    let raf = 0
    const start = performance.now()
    const duration = 900
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setFamiliesCount(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reducedMotion])

  const testimonials = useMemo(
    () =>
      successStories.map((s, i) => ({
        id: s.id,
        quote: s.summary,
        outcome: s.outcome,
        meta: `${s.ageRange} ? ${s.diagnosis}`,
        name: s.patientName ?? `Patient ${i + 1}`,
      })),
    [],
  )
  const testimonialsRailRef = useRef<HTMLDivElement | null>(null)
  const [canScrollTestimonialsPrev, setCanScrollTestimonialsPrev] = useState(false)
  const [canScrollTestimonialsNext, setCanScrollTestimonialsNext] = useState(true)
  const prominentFamilies = useMemo(
    () => (reducedMotion ? 500 : Math.max(1000, familiesCount * 1)),
    [familiesCount, reducedMotion],
  )

  const servicesCards = useMemo(
    () =>
      services.map((s) => {
        const href =
          s.id === 'egg-freezing'
            ? '/egg-freezing'
            : s.id === 'donor'
              ? '/donor'
              : s.id === 'genetic-testing'
                ? '/genetic-testing'
                : '/ivf'

        const icon =
          s.id === 'ivf'
            ? ShieldUser
            : s.id === 'mild-ivf'
              ? Sparkles
              : s.id === 'natural-cycle'
                ? Microscope
                : s.id === 'egg-freezing'
                  ? CalendarHeart
                  : s.id === 'donor'
                    ? HeartHandshake
                    : Dna

        return { ...s, href, icon }
      }),
    [],
  )

  const successRateData = useMemo(
    () => [
      { ageRange: 'Ages Under 35', clinicRate: 53, nationalRate: 37 },
      { ageRange: 'Ages 35-37', clinicRate: 47, nationalRate: 31 },
      { ageRange: 'Ages 38-39', clinicRate: 38, nationalRate: 25 },
      { ageRange: 'Ages 40-42', clinicRate: 31, nationalRate: 17 },
    ],
    [],
  )

  const principleCards = useMemo(
    () => [
      {
        title: 'Healthy Woman',
        image: HealthyMother,
        points: [
          'Lower doses of fertility drugs',
          'No downregulation',
          'Reduced injections',
          'Minimal side effects',
          'Shorter treatment duration',
          'Reduced risk of OHSS',
          'Fits in with your lifestyle',
        ],
      },
      {
        title: 'Healthy Baby',
        image: HealthyBaby,
        points: [
          'Reduced multiple births',
          'Higher birth weights',
          'More full-term babies',
          'Reduced long-term health complications',
          'Closer monitoring through every stage',
        ],
      },
      {
        title: 'Personalised Treatment Plan',
        image: PersonalisedTreatment,
        points: [
          "Every woman is different, so we never use a one-size-fits-all protocol.",
          'We design bespoke plans around your diagnosis, hormone profile, and goals.',
          'Treatment timing and support are tailored to your body and lifestyle.',
        ],
      },
    ],
    [],
  )

  useEffect(() => {
    const rail = testimonialsRailRef.current
    if (!rail) return

    const updateButtons = () => {
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth
      setCanScrollTestimonialsPrev(rail.scrollLeft > 8)
      setCanScrollTestimonialsNext(rail.scrollLeft < maxScrollLeft - 8)
    }

    updateButtons()
    rail.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      rail.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [testimonials.length])

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden p-6 md:p-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1100px_380px_at_8%_0%,rgba(37,99,235,0.33),transparent_55%),radial-gradient(900px_320px_at_92%_8%,rgba(22,163,74,0.24),transparent_60%)]" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -left-12 top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold text-foreground">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              Welcome to possibility
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Fertility care, your way.
            </h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Proven outcomes with personalized treatment. We combine compassionate care with advanced reproductive science.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">Personalized treatment planning</div>
                  <div className="text-sm text-muted-foreground">Every protocol is tailored to your goals and profile.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Microscope className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">Innovative lab technology</div>
                  <div className="text-sm text-muted-foreground">Evidence-led protocols for better outcomes in fewer cycles.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheckIcon className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">Safe and secure</div>
                  <div className="text-sm text-muted-foreground">We follow strict protocols to ensure your privacy and safety.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BookOpenIcon className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">Patient-centered care</div>
                  <div className="text-sm text-muted-foreground">We focus on your individual needs and goals.</div>
                </div>
              </li>
              <li className="flex items-start gap-3"> 
                <DollarSignIcon className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <div>
                  <div className="text-sm font-extrabold">Financial Support</div>
                  <div className="text-sm text-muted-foreground">We offer flexible payment options. We can discuss options during consultation</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/booking" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400/0 via-cyan-300/35 to-cyan-400/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                />
                <span className="relative z-10">Schedule appointment</span>
                <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                />
                <span className="relative z-10">Request a call</span>
                <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: 'Families Built',
                  value: `${prominentFamilies.toLocaleString()}+`,
                  desc: 'Supported across personalized fertility pathways.',
                  icon: HeartHandshake,
                  gradient: 'from-blue-500/35 via-cyan-400/20 to-transparent',
                },
                {
                  title: 'Success Rate',
                  value: '58% vs 43%',
                  desc: 'Our sample success rate compared with national average.',
                  icon: Trophy,
                  gradient: 'from-emerald-500/35 via-lime-400/20 to-transparent',
                },
                {
                  title: 'Cycles',
                  value: '253+',
                  desc: 'Total successful cycles recorded in 2025.',
                  icon: CalendarHeart,
                  gradient: 'from-violet-500/35 via-fuchsia-400/20 to-transparent',
                },
                {
                  title: 'Babies Born',
                  value: '2,000+',
                  desc: 'New hope babies welcomed since 2006.',
                  icon: Sparkles,
                  gradient: 'from-amber-500/35 via-pink-400/20 to-transparent',
                },
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={false}
                  animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
                  transition={{ duration: 2.8 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                  whileHover={reducedMotion ? undefined : { y: -6, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/55 p-4 shadow-sm"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-80 transition group-hover:opacity-100`} aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/88 via-background/72 to-background/86" aria-hidden="true" />
                  <div className="absolute -top-8 -right-6 h-20 w-20 rounded-full bg-white/20 blur-2xl transition group-hover:bg-white/30" aria-hidden="true" />
                  <div
                    className="absolute inset-0 opacity-25 transition group-hover:opacity-40"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 18% 24%, rgba(255,255,255,0.35) 0, rgba(255,255,255,0) 3px), radial-gradient(circle at 72% 30%, rgba(255,255,255,0.28) 0, rgba(255,255,255,0) 2px), radial-gradient(circle at 40% 72%, rgba(255,255,255,0.25) 0, rgba(255,255,255,0) 2px)',
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-muted-foreground">
                      <card.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      {card.title}
                    </div>
                    <div className="mt-2 text-2xl font-extrabold leading-tight">{card.value}</div>
                    <div className="mt-2 text-xs text-muted-foreground">{card.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[300px] sm:min-h-[340px] lg:min-h-[520px]">
            <div className="relative h-full overflow-hidden rounded-[28px] bg-background/30 shadow-sm">
              <motion.img
                src={heroImg}
                srcSet={`${heroImg640} 640w, ${heroImg1024} 1024w, ${heroImg1440} 1440w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Illustration of patient care and guidance"
                className="h-full w-full object-cover"
                initial={false}
                animate={reducedMotion ? { y: 0 } : { y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: reducedMotion ? 0 : Infinity }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Comprehensive fertility services</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Access IVF, egg freezing, sperm freezing, donor pathways, and genetic testing in one coordinated care experience.</p>
            </div>
            <Link to="/services" className="hidden text-sm font-extrabold text-primary hover:underline sm:inline-flex items-center gap-2">Browse all services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
            <motion.div
              initial={false}
              animate={reducedMotion ? { y: 0 } : { y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: reducedMotion ? 0 : Infinity }}
              className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
            >
              <img
                src={ultraSoundImg}
                alt="Couple reviewing ultrasound scan with specialist"
                className="h-full min-h-[300px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/65 p-4 backdrop-blur">
                <div className="text-sm font-extrabold">Compassion-first consultations</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Every treatment starts with clear answers, realistic options, and supportive care planning.
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:ml-auto">
              {servicesCards.map((s, idx) => (
                <motion.div
                  key={s.id}
                  initial={false}
                  animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
                  transition={{ duration: 3.1 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                  whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01 }}
                  className="h-full"
                >
                  <Link
                    to={s.href as any}
                    className="group relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-3xl border border-border/70 bg-background/35 p-5 shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/7 to-transparent opacity-70 transition duration-500 group-hover:opacity-100 group-hover:from-primary/18 group-hover:via-accent/16" />
                    <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary/12 blur-2xl transition group-hover:bg-accent/20" />
                    <div className="relative flex h-full items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-border/60">
                        <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex h-full flex-1 flex-col">
                        <div className="text-sm font-extrabold">{s.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{s.short}</div>
                        <div className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-extrabold text-primary group-hover:underline">
                          Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl rounded-[28px] border border-border/70 bg-gradient-to-r from-primary/10 via-accent/10 to-background/60 p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-extrabold md:text-2xl">Why choose M&amp;C Fertility Centre?</h2>
              <p className="mt-2 max-w-3xl text-xs text-muted-foreground md:text-sm">
                Expertise, innovation, and compassionate care designed to improve outcomes and confidence through every stage of treatment.At M&C Fertility Clinic we understand that every woman is different and there is no ?one size fits all? when it comes to fertility treatment. This is why we offer bespoke, tailored treatment plans suited specifically to your body.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: Microscope,
                reason: 'Specialist in advanced untrasound',
                text: 'Our Advanced Ultrasound Scan is the foundation of our approach. We specialise in the use of ultrasound to provide detailed and accurate insight into fertility.',
                color: 'bg-blue-600',
              },
              {
                icon: ShieldUser,
                reason: 'Transparent, All-Inclusive Packages',
                text: 'Our pricing is transparent and includes all necessary treatments and procedures. Fertility treatment with no surprises and flexible installment plans, and real value across IVF, egg freezing, diagnostics and more.',
                color: 'bg-emerald-600',
              },
              {
                icon: Dna,
                reason: 'Compassion at Every Step',
                text: 'We understand that fertility treatment can be emotionally challenging. In Our expert-led care, human-first clinic, You?ll feel supported by a team that sees you, hears you, and never treats you like a number. Our compassionate team is here to support you every step of the way.',
                color: 'bg-violet-600',
              },
              {
                icon: Trophy,
                reason: 'Expert Fertility Specialists',
                text: 'Our senior medical team led by Dr. Toyin work hard to remain at the forefront of the field, developing the latest advances in treatment.',
                color: 'bg-amber-600',
              },
              {
                icon: HeartHandshake,
                reason: 'Focused on long-term health outcome of mother & child',
                text: 'Our approach to IVF focuses on the health & well-being of mother & baby. We offer lower drug dose treatments to reduce the risks & side effects to achieve healthier outcomes.',
                color: 'bg-rose-600',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.reason}
                initial={false}
                animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
                transition={{ duration: 3 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                className="group relative h-48 overflow-hidden rounded-2xl border border-border/70 bg-background/45 p-3 shadow-sm"
              >
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                  <item.icon className="h-10 w-10 text-primary" aria-hidden="true" />
                  <div className="mt-3 text-xs font-extrabold leading-snug">{item.reason}</div>
                </div>

                <div
                  className={`absolute inset-0 z-20 -translate-y-full p-3 text-white transition-transform duration-500 ease-out group-hover:translate-y-0 ${item.color}`}
                >
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
          <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-r from-primary/15 via-accent/10 to-card/30 p-8 shadow-sm md:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_260px_at_10%_0%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(700px_240px_at_90%_10%,rgba(34,197,94,0.22),transparent_60%)]" />
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-2 text-xs font-extrabold"><CalendarHeart className="h-4 w-4 text-primary" aria-hidden="true" />Start your fertility journey</div>
                <h2 className="mt-4 text-2xl font-extrabold">Your Journey Starts With a Conversation</h2>
                <p className="mt-2 text-sm text-muted-foreground">We are here to guide and support you from first consultation to treatment and beyond. Book a free 15-minute call with our hospitality team to ask questions, get guidance, and feel supported.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link to="/booking" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400/0 via-cyan-300/35 to-cyan-400/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                    />
                    <span className="relative z-10">Book Consultation</span>
                    <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link to="/contact" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                    />
                    <span className="relative z-10">Request a call</span>
                    <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[{ icon: CircleDollarSign, title: 'Affording care', desc: 'Transparent Naira pricing ranges and support.' }, { icon: Trophy, title: 'Outcome-focused', desc: 'Care planning informed by careful monitoring.' }, { icon: HeartHandshake, title: 'Respect & privacy', desc: 'Counseling with dignity at every stage.' }, { icon: Dna, title: 'Advanced options', desc: 'PGT and tailored treatments for your profile.' }].map((b, idx) => (
                  <motion.div
                    key={b.title}
                    initial={false}
                    animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
                    transition={{ duration: 3 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                    whileHover={reducedMotion ? undefined : { y: -6, scale: 1.015 }}
                    className="group relative overflow-hidden rounded-3xl border border-border/70 bg-background/35 p-5 shadow-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/8 to-transparent opacity-70 transition duration-500 group-hover:opacity-100 group-hover:from-primary/18 group-hover:via-accent/16" />
                    <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-accent/20" />
                    <div className="relative flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-110"><b.icon className="h-5 w-5 text-primary" aria-hidden="true" /></div>
                      <div><div className="text-sm font-extrabold">{b.title}</div><div className="mt-1 text-sm text-muted-foreground">{b.desc}</div></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-card/30 p-8 shadow-sm md:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_260px_at_10%_0%,rgba(37,99,235,0.22),transparent_60%),radial-gradient(700px_240px_at_90%_10%,rgba(34,197,94,0.2),transparent_60%)]" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-2 text-xs font-extrabold">
                  <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                  Patient-centered care
                </div>
                <h2 className="mt-4 text-2xl font-extrabold">Patient-centered care, success in fewer cycles</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our award-winning specialists combine innovative lab technology and personalized care pathways to help
                  you move confidently toward parenthood. Our commitment to excellence is reflected in our exceptional success rates and the 1,000+ families we?ve helped build.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'IVF',
                    'IUI',
                    'Egg freezing',
                    'sperm freezing',
                    'embryo freezing',
                    'fertility testing',
                    'Genetic Testing',
                    'Gestational Surrogacy',
                    'Donor Eggs',
                    'Recurrent Pregnancy Loss',
                    'Oncofertility',
                    'IVF for genetic reasons',
                  ].map((item, idx) => (
                    <span
                      key={item}
                      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-extrabold ${
                        idx % 6 === 0
                          ? 'border-blue-200 bg-blue-100 text-blue-900'
                          : idx % 6 === 1
                            ? 'border-emerald-200 bg-emerald-100 text-emerald-900'
                            : idx % 6 === 2
                              ? 'border-violet-200 bg-violet-100 text-violet-900'
                              : idx % 6 === 3
                                ? 'border-amber-200 bg-amber-100 text-amber-900'
                                : idx % 6 === 4
                                  ? 'border-rose-200 bg-rose-100 text-rose-900'
                                  : 'border-cyan-200 bg-cyan-100 text-cyan-900'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link to="/booking" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400/0 via-cyan-300/35 to-cyan-400/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                    />
                    <span className="relative z-10">Schedule appointment</span>
                    <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link to="/services" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                    />
                    <span className="relative z-10">Explore treatments</span>
                    <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={reducedMotion ? { y: 0 } : { y: [0, -4, 0] }}
                transition={{ duration: 4.4, repeat: reducedMotion ? 0 : Infinity }}
                className="relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-border/70 shadow-sm"
              >
                <img
                  src={TommyScan}
                  alt="Patient ultrasound consultation at the clinic"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
                  <div className="text-sm font-extrabold">Compassion + innovation</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    We tailor each cycle to your diagnosis, timeline, and family goals.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-r from-primary/10 via-accent/10 to-card/40 p-6 shadow-sm md:p-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(950px_300px_at_8%_0%,rgba(37,99,235,0.2),transparent_60%),radial-gradient(780px_280px_at_92%_10%,rgba(34,197,94,0.2),transparent_60%)]" />
            <Tabs defaultValue="results" className="relative">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-l font-extrabold">
                    <Trophy className="h-6 w-6 text-primary" aria-hidden="true" />
                    Success outcomes and our principles
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold">Success to M&C Fertility Centre is healthy outcomes, not just positive tests</h2>
                  <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                    Compare our IVF outcomes with HFEA national averages and explore the care principles that guide how we treat every patient.
                  </p>
                </div>
                <TabsList className="inline-flex w-full items-center gap-2 rounded-full border border-border/70 bg-background/50 p-1 md:w-auto">
                  <TabsTrigger value="results" className="flex-1 md:flex-none">
                    Our Results
                  </TabsTrigger>
                  <TabsTrigger value="principles" className="flex-1 md:flex-none">
                    Our Principle
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="results" className="mt-8 focus:outline-none">
                <div className="rounded-3xl border border-border/70 bg-background/45 p-5 shadow-sm md:p-6">
                  <div className="grid grid-cols-1 gap-3 text-xs font-extrabold text-muted-foreground sm:grid-cols-2">
                    <div className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                      M&amp;C Fertility Centre success rate
                    </div>
                    <div className="inline-flex items-center gap-2 sm:justify-end">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                      HFEA National Average
                    </div>
                  </div>
                  <div className="mt-5 space-y-4">
                    {successRateData.map((item, idx) => (
                      <motion.div
                        key={item.ageRange}
                        initial={false}
                        animate={reducedMotion ? { y: 0 } : { y: [0, -2, 0] }}
                        transition={{ duration: 2.8 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                        className="rounded-2xl border border-border/70 bg-card/45 p-4"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="text-sm font-extrabold">{item.ageRange}</div>
                          <div className="text-xs font-semibold text-muted-foreground">IVF treatment outcomes</div>
                        </div>
                        <div className="space-y-2.5">
                          <div className="grid grid-cols-[72px_1fr_auto] items-center gap-3">
                            <div className="text-xs font-bold text-foreground/90">M&amp;C</div>
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
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="principles" className="mt-8 focus:outline-none">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {principleCards.map((principle, idx) => (
                    <motion.div
                      key={principle.title}
                      initial={false}
                      animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
                      transition={{ duration: 3 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                      whileHover={reducedMotion ? undefined : { y: -5 }}
                      className="group relative min-h-[340px] overflow-hidden rounded-3xl border border-border/70 shadow-sm"
                    >
                      <img src={principle.image} alt={principle.title} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                      <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/30 bg-white/10 p-4 text-white backdrop-blur">
                        <div className="text-base font-extrabold">{principle.title}</div>
                      </div>

                      <div className="absolute inset-0 z-20 -translate-y-full bg-primary/95 p-5 text-primary-foreground transition-transform duration-500 ease-out group-hover:translate-y-0">
                        <div className="text-lg font-extrabold">{principle.title}</div>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-primary-foreground/95">
                          {principle.points.map((point) => (
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Real patients, real families</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Testimonials from clients who trusted us with their fertility journey.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/successes" className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card/40 px-5 py-2.5 text-sm font-extrabold shadow-sm transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">View all stories <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="relative mt-8">
            {canScrollTestimonialsPrev && (
              <button
                type="button"
                onClick={() => {
                  const rail = testimonialsRailRef.current
                  if (!rail) return
                  rail.scrollBy({ left: -(rail.clientWidth * 0.34), behavior: 'smooth' })
                }}
                className="absolute left-3 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background/85 shadow-sm transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
            {canScrollTestimonialsNext && (
              <button
                type="button"
                onClick={() => {
                  const rail = testimonialsRailRef.current
                  if (!rail) return
                  rail.scrollBy({ left: rail.clientWidth * 0.34, behavior: 'smooth' })
                }}
                className="absolute right-3 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background/85 shadow-sm transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
            <div
              ref={testimonialsRailRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t, idx) => (
                <motion.div
                  key={t.id}
                  initial={false}
                  animate={reducedMotion ? { y: 0 } : { y: [0, -4, 0] }}
                  transition={{ duration: 3 + idx * 0.25, repeat: reducedMotion ? 0 : Infinity }}
                  className="group relative w-[88%] shrink-0 snap-start overflow-hidden rounded-3xl border border-border/70 bg-background/35 p-6 shadow-sm sm:w-[48%] lg:w-[32%]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent opacity-70 transition group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs font-extrabold text-muted-foreground">{t.name}</div>
                      <Quote className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-base font-semibold leading-relaxed">"{t.quote}"</div>
                    <div className="mt-4 text-sm font-extrabold text-primary">{t.outcome}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t.meta}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 rounded-3xl border border-border/70 bg-card/30 p-6 shadow-sm md:grid-cols-3">
          {[
            {
              title: 'Call us',
              value: clinicInfo.phone,
              icon: Phone,
              gradient: 'from-blue-500/18 via-cyan-400/10 to-transparent',
            },
            {
              title: 'Email',
              value: clinicInfo.email,
              icon: Mail,
              gradient: 'from-violet-500/18 via-fuchsia-400/10 to-transparent',
            },
            {
              title: 'Visit us',
              value: `${clinicInfo.city}, ${clinicInfo.country}`,
              icon: MapPin,
              gradient: 'from-emerald-500/18 via-lime-400/10 to-transparent',
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/40 p-4 shadow-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${c.gradient} opacity-80 transition duration-500 group-hover:opacity-100`} />
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/10 blur-xl transition group-hover:bg-accent/20" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-extrabold text-muted-foreground">
                  <c.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {c.title}
                </div>
                <div className="mt-1 text-sm font-extrabold">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
