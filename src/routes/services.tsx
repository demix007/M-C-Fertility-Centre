import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { useSeo } from '../lib/seo'
import { useMemo } from 'react'
import { faqPageJsonLd } from '../lib/structuredData'
import { FaqSection } from '../components/sections/FaqSection'
import Fertility from '../assets/fertility.jpg'
import EggFreezing from '../assets/egg_freezing.jpg'
import Donor from '../assets/donor.jpg'
import GeneticTesting from '../assets/genetic_testing.jpg'
import PersonalisedTreatment from '../assets/personalised_treatment.jpg'
import Happy from '../assets/happy.jpg'
import FollowUp from '../assets/follow_up.jpg'
import Protocols from '../assets/protocols.jpg'
import PetriDish from '../assets/petri_dish.jpg'
import Review from '../assets/review.jpg'
import Advanced from '../assets/advanced.jpg'
import FAQ from '../assets/faq.jpg'
import {
  ArrowRight,
  Baby,
  CalendarHeart,
  CheckCircle2,
  Dna,
  Egg,
  Eye,
  FlaskConical,
  HeartHandshake,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube2,
  UserRound,
} from 'lucide-react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  const reducedMotion = useReducedMotion()
  useSeo({
    title: 'Treatment & Services | M&C Fertility Centre',
    description: 'Explore IVF, egg freezing, donor services, and genetic testing. Clear explanations and easy next steps in Nigeria.',
    jsonLd: [
      faqPageJsonLd([
        {
          question: 'How long does IVF take in practice?',
          answer:
            'Timelines depend on protocol and monitoring response. Most pathways begin with an initial consultation and a clear schedule for tests and appointment visits.',
        },
        {
          question: 'Do you offer egg freezing?',
          answer:
            'Yes. Egg freezing is designed for people who want to preserve options for the future. We explain eligibility, preparation steps, and storage notes in plain language.',
        },
        {
          question: 'What about donor and genetic testing?',
          answer:
            'Donor services and genetic testing (PGT-A / PGT-M) can be part of a personalized plan. We provide privacy-first matching and counseling-first explanations of what testing can and cannot show.',
        },
      ]),
    ],
  })

  const cards = [
    {
      id: 'ivf' as const,
      title: 'IVF & Procedures',
      desc: 'Conventional, Mild IVF, and Natural Cycle IVF with close monitoring and clear decisions.',
      to: '/ivf',
      icon: FlaskConical,
      image: Fertility,
    },
    {
      id: 'egg-freezing' as const,
      title: 'Egg Freezing',
      desc: 'Protect future options with consultation, stimulation, retrieval, and secure storage.',
      to: '/egg-freezing',
      icon: Egg,
      image: EggFreezing,
    },
    {
      id: 'donor' as const,
      title: 'Donor Services',
      desc: 'Ethical donor pathways with privacy-first matching and counseling at every milestone.',
      to: '/donor',
      icon: HeartHandshake,
      image: Donor,
    },
    {
      id: 'genetic-testing' as const,
      title: 'Genetic Testing (PGT-A / PGT-M)',
      desc: 'Understand embryo genetics and make informed choices with specialist support.',
      to: '/genetic-testing',
      icon: Dna,
      image: GeneticTesting,
    },
  ]

  const pathwaySteps = useMemo(
    () => [
      {
        title: 'Fertility Review',
        desc: 'A complete first visit with history, baseline scan, and hormone profile to understand your starting point.',
        icon: Stethoscope,
        image: Review,
        points: ['Baseline scan and hormone profile', 'Clinical history and goals review', 'Clear next-step roadmap'],
      },
      {
        title: 'Personalized Protocol',
        desc: 'A treatment plan tailored to your age, diagnosis, ovarian reserve, and family timeline goals.',
        icon: Sparkles,
        image: Protocols,
        points: ['Tailored medication strategy', 'Cycle timing for your body', 'Personalized support planning'],
      },
      {
        title: 'Lab & Embryology',
        desc: 'Advanced embryology processes with careful monitoring, insemination method selection, and embryo culture.',
        icon: Microscope,
        image: PetriDish,
        points: ['Embryology-led fertilization method', 'Embryo culture and grading', 'Data-guided treatment decisions'],
      },
      {
        title: 'Transfer & Follow-up',
        desc: 'Careful embryo transfer planning, luteal support, and post-treatment follow-up with clear next steps.',
        icon: Baby,
        image: FollowUp,
        points: ['Transfer timing and preparation', 'Post-transfer support and review', 'Next-step plan with your team'],
      },
    ],
    [],
  )

  const ivfDetails = useMemo(
    () => [
      {
        title: 'Natural Cycle IVF',
        image: EggFreezing,
        icon: CalendarHeart,
        desc: 'Pure Natural Cycle IVF is the closest that IVF treatment can get to natural fertilisation. It focuses on the quality of eggs collected, rather than the quantity, and works naturally with your body. Natural Cycle IVF involves egg collection aligned with your natural menstrual cycle; no fertility drugs/injections are used throughout the process.',
        medicationDays: 4,
        medicationRangeLabel: 'Typical: 3-5 days',
        benefits: [
          'Minimal or no ovarian stimulation drugs',
          'Fewer injections and simplified cycle experience',
          'Focuses on quality from the naturally selected egg',
          'Fewer side effects',
          'Better implantation',
          'Reduced risk of premature or low birth weight babies',
          'Opportunity for some women to have a child with their own eggs rather than donor eggs',
          'Better for your emotional and mental well-being',
          'Lower cost of treatment',
        ],
        whoForDesc: 'Natural Cycle IVF is suitable for every woman who is still ovulating and wants to avoid stimulating IVF drugs, however, it is particularly suitable for those who:',
        whoForPoints: [
          'Have a low ovarian/egg reserve',
          'Have a history of multiple miscarriages',
          'Have a history of endometriosis',
          'Have a history of PCOS',
          'Want to avoid the risks and side effects of high stimulation IVF',
          'Are older but wish to try with their own eggs, rather than with donor eggs',
          'Have had previous failure of implantation with conventional IVF',
          'Have had a poor response to conventional IVF (e.g. produced fewer than three eggs)',
          'Have a history of hormone-dependent cancers',
        ],
      },
      {
        title: 'Mild IVF',
        image: PersonalisedTreatment,
        icon: Sparkles,
        desc: 'Natural Modified IVF is a form of Natural IVF,  but differs from Natural Cycle IVF as during the Natural Modified process, medication is given for 3-4 days in order to block spontaneous ovulation (prior to egg collection), and a small dose of stimulation hormone is given to support the follicle whilst blocking ovulation. For women who want to avoid injections, we can tailor the Natural Modified IVF cycle using tablets. The aim is to collect naturally selected egg/s.',
        medicationDays: 8,
        medicationRangeLabel: 'Typical: 7-10 days',
        benefits: [
          'Lower medication doses with fewer side effects for many patients',
          'Retains many of the benefits of Natural Cycle IVF, alongside improved success rates',
          'Gentler stimulation approach with close monitoring',
          'Improved egg and embryo quality compared with conventional IVF',
          'Reduced risks and fewer side effects',
          'Reduced treatment burden while maintaining strong outcomes for selected profiles',
          'More affordable treatment costs',
          'More flexibility in timing of treatment',
        ],
        whoForDesc: 'Mild IVF is suitable for every woman who is still ovulating and wants to avoid stimulating IVF drugs, however, it is particularly suitable for those who:',
        whoForPoints: [
          'Have a normal/low ovarian/egg reserve',
          'Are having treatment due to a male factor',
          'Have PCO/PCOS (Polycystic Ovary Syndrome)',
          'Want a treatment that is aligned with their own natural menstrual cycle',
          'Want to take lower doses of medications in a stimulated cycle',
          'Want to avoid the risks and side effects of high stimulation IVF',
          'Want to reduce the physical and psychological burden associated with conventional IVF',
        ],
      },
      {
        title: 'Conventional IVF',
        image: Fertility,
        icon: FlaskConical,
        desc: 'Conventional IVF is a fully stimulated cycle, where a large number of eggs are collected. It is the most common form of IVF treatment and is suitable for most patients. Conventional IVF involves the use of fertility drugs/injections to stimulate the ovaries to produce multiple eggs. The eggs are then collected and fertilised in the laboratory.',
        medicationDays: 12,
        medicationRangeLabel: 'Typical: 10-14 days',
        benefits: [
          'Strong, established protocol with broad clinical applicability',
          'Can support multiple eggs for embryo selection',
          'Suitable for combining with ICSI and advanced lab techniques',
        ],
        whoForDesc: 'Often suitable for couples with tubal, male-factor, unexplained infertility, or previous unsuccessful lower-intensity cycles. It is particularly suitable for those who:',
        whoForPoints: [
          'Have a low ovarian/egg reserve',
          'Are having treatment due to a male factor',
          'Have PCO/PCOS (Polycystic Ovary Syndrome)',
          'Want to collect a large number of eggs',
          'Want to use ICSI for male-factor fertility challenges',
          'Want to combine with blastocyst culture and embryo grading',
          'Want to combine with frozen embryo transfer cycle planning',
          'Want to combine with preimplantation genetic testing (PGT-A / PGT-M)',
          'Want to combine with fertility preservation for medical reasons (oncofertility)',
          'Want to combine with recurrent implantation and pregnancy loss support',
        ],
      },
    ],
    [],
  )

  const totalMedicationDays = ivfDetails.reduce((sum, x) => sum + x.medicationDays, 0)

  const FAQ_ITEMS = [
    {
      q: 'What is IVF, and who might need it?',
      a: 'IVF is a medical procedure that helps couples who are unable to conceive naturally. It involves the use of fertility drugs to stimulate the ovaries to produce multiple eggs, which are then collected and fertilised in the laboratory. The fertilised eggs are then transferred to the uterus, where they implant and grow into a pregnancy. IVF is suitable for couples who have unexplained infertility, male factor infertility, or recurrent pregnancy loss.',
    },
    {
      q: 'What is the success rate of IVF?',
      a: 'The success rate of IVF varies depending on the couple\'s age, the cause of infertility, and the protocol used. The success rate is typically around 30-40% for couples under 35 years of age, and 10-20% for couples over 35 years of age.',
    },
    {
      q: 'What is the difference between IVF and IUI?',
      a: 'IVF and IUI are different in how fertilization happens and how embryos are managed. Your clinician uses your history, test results, and timing goals to recommend a plan. IVF involves the use of fertility drugs to stimulate the ovaries to produce multiple eggs, which are then collected and fertilised in the laboratory. The fertilised eggs are then transferred to the uterus, where they implant and grow into a pregnancy. IUI involves the use of a fertility drug to stimulate the ovaries to produce a single egg, which is then collected and transferred to the uterus, where it fertilises naturally.',
    },
    {q: 'Is medication included in the package price?', a: 'Yes. Medication is included in the package price. The price of the package is determined by the couple\'s age, the cause of infertility, and the protocol used. The price of the package is typically around NGN 3,000,0000 - NGN 4,000,0000.'},
    {
      q: 'How long does IVF take in practice?',
      a: 'Timelines depend on protocol and monitoring response. Most pathways begin with an initial consultation and a clear schedule for tests and appointment visits.',
    },
    {
      q: 'Do I need a consultation before starting treatment?',
      a: 'Yes, you need a consultation before starting treatment. The consultation is used to assess your suitability for treatment and to discuss your treatment plan.',
    },
    {
      q: 'Do you offer egg freezing?',
      a: 'Yes. Egg freezing is designed for people who want to preserve options for the future. We explain eligibility, preparation steps, and storage notes in plain language.',
    },
    {
      q: 'What is the difference between a fresh transfer and a freeze-all cycle?',
      a: 'A fresh transfer is when the embryos are transferred to the uterus at the same time as the eggs are collected. A freeze-all cycle is when the embryos are collected and frozen, and then transferred to the uterus at a later time.',
    },
    {
      q: 'Is frozen embryo transfer included?',
      a: 'No, Frozen embryo transfer is not included in this package and is priced separately. This allows flexibility in planning your treatment pathway.',
    },
    {
      q: 'Can I use donor sperm or Egg Donor with an IVF package?',
      a: 'Yes, you can use donor sperm or Egg Donor with an IVF package. This is priced separately and is available on request. Our Hospitality team will guide you through the donor selection process and any additional steps required.',
    },
    {
      q: 'How many embryos are transferred?',
      a: 'The number of embryos transferred is determined by the couple\'s age, the cause of infertility, and the protocol used. The number of embryos transferred is typically around 1-3 embryos. Your consultant will discuss this with you as part of your treatment planning. inclusive family building options for more information.',
    },
    {
      q: 'Is IVF suitable for single patients or same-sex couples?',
      a: 'Yes, IVF is suitable for single patients or same-sex couples. However, we recommend discussing your options with your consultant to determine the best course of action for your individual circumstances.',
    },
    {
      q: 'Can I see my embryo development in real time?',
      a: 'Yes! You can view images of your embryos, access insights, and receive updates from our embryologists. It is part of making your care more transparent, empowering, and emotionally connected.'
    },
    {
      q: 'How are my embryos stored safely?',
      a: 'Our embryos are stored in a secure, temperature-controlled environment. We use the latest technology to ensure the safety and integrity of your embryos.',
    },
    {
      q: 'What happens if my first cycle is not successful?',
      a: 'If your first cycle is not successful, we will discuss your options with you and help you decide on the next steps. We will also provide you with support and guidance throughout your journey. A plan may include a frozen embryo transfer or future treatment options depending on your circumstances.',
    },
    {
      q: 'What about donor and genetic testing?',
      a: 'Donor services and genetic testing (PGT-A / PGT-M) can be part of a personalized plan. We provide privacy-first matching and counselling-first explanations of what testing can and cannot show.',
    },
  ] as const

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[32px] border border-border/70 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(980px_320px_at_8%_0%,rgba(37,99,235,0.24),transparent_60%),radial-gradient(760px_280px_at_90%_12%,rgba(34,197,94,0.2),transparent_60%)]" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
              <CalendarHeart className="h-4 w-4 text-primary" aria-hidden="true" />
              Treatment & services
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Assisted reproduction with clarity, precision, and care</h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              From first consultation to embryo transfer and follow-up, our team supports your journey with evidence-led treatment, transparent communication, and compassionate guidance.
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
                { icon: ShieldCheck, label: 'Safety-first protocols' },
                { icon: TestTube2, label: 'Advanced embryology lab' },
                { icon: UserRound, label: 'Personalized treatment plans' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-background/45 p-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold">
                    <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 3.4, repeat: reducedMotion ? 0 : Infinity }}
            className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:min-h-[480px]"
          >
            <img
              src={Happy}
              alt="Fertility specialist consultation and assisted reproduction care"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Personalized care at every milestone</div>
              <div className="mt-1 text-xs text-muted-foreground">
                We align diagnostics, treatment, and follow-up to your timeline so every cycle is both safe and purposeful.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-extrabold text-muted-foreground">Core fertility services</div>
            <h2 className="mt-2 text-2xl font-extrabold">Explore treatment options designed for your needs</h2>
          </div>
          <div className="inline-flex items-center rounded-full border border-border/70 bg-background/45 px-4 py-2 text-xs font-extrabold text-muted-foreground">
            Evidence-based treatment cards
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.2, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img
              src={PersonalisedTreatment}
              alt="Personalised fertility treatment planning consultation"
              className="h-full min-h-[340px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Personalised treatment planning</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Your protocol is tailored to your diagnosis, goals, and timeline for safer, clearer decision-making.
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:ml-auto">
            {cards.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={false}
                animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
                transition={{ duration: 3 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
                whileHover={reducedMotion ? undefined : { y: -5, scale: 1.01 }}
              >
                <Link
                  to={c.to as any}
                  className="group flex h-full min-h-[290px] flex-col overflow-hidden rounded-3xl border border-border/70 bg-background/35 shadow-sm transition hover:bg-background/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <img src={c.image} alt={c.title} className="h-40 w-full object-cover" />
                  <div className="flex h-full flex-col p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-border/60">
                        <c.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold">{c.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 text-sm font-extrabold text-primary group-hover:underline">
                      Explore treatment <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="text-2xl font-extrabold text-muted-foreground">Pathway overview</div>
        <h2 className="mt-2 text-xl font-extrabold">What your assisted reproduction journey looks like</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Hover each card to explore what happens at every stage of treatment, from first review to follow-up.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pathwaySteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={false}
              animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
              transition={{ duration: 2.8 + idx * 0.2, repeat: reducedMotion ? 0 : Infinity }}
              whileHover={reducedMotion ? undefined : { y: -5 }}
              className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-border/70 shadow-sm"
            >
              <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/30 bg-white/10 p-4 text-white backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                  {step.title}
                </div>
                <div className="mt-2 text-xs text-white/90">{step.desc}</div>
              </div>

              <div className="absolute inset-0 z-20 -translate-y-full bg-primary/95 p-5 text-primary-foreground transition-transform duration-500 ease-out group-hover:translate-y-0">
                <div className="flex items-center gap-2 text-base font-extrabold">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                  {step.title}
                </div>
                <p className="mt-2 text-sm text-primary-foreground/95">{step.desc}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-primary-foreground/95">
                  {step.points.map((point) => (
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
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-2xl font-extrabold text-muted-foreground">Treatment tracks</div>
            <h2 className="mt-2 text-xl font-extrabold">Choose a pathway that matches your biology and goals</h2>
          </div>
          <div className="inline-flex items-center rounded-full border border-border/70 bg-background/45 px-4 py-2 text-xs font-extrabold text-muted-foreground">
            Your diagnosis guides your protocol
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-border/70 bg-background/35 p-5 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">Medication days comparison</div>
              <h3 className="mt-1 text-base font-extrabold">How many days of medication are typical?</h3>
            </div>
            <div className="text-xs font-semibold text-muted-foreground">
              Approximate ranges vary by cycle response and your care plan.
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[260px_1fr] lg:items-center">
            <div className="mx-auto">
              <div
                className="h-56 w-56 rounded-full ring-1 ring-border/70"
                style={{
                  background: `conic-gradient(
                    rgba(59,130,246,0.8) 0deg ${(ivfDetails[2].medicationDays / totalMedicationDays) * 360}deg,
                    rgba(16,185,129,0.8) ${(ivfDetails[2].medicationDays / totalMedicationDays) * 360}deg ${((ivfDetails[2].medicationDays + ivfDetails[1].medicationDays) / totalMedicationDays) * 360}deg,
                    rgba(139,92,246,0.8) ${((ivfDetails[2].medicationDays + ivfDetails[1].medicationDays) / totalMedicationDays) * 360}deg 360deg
                  )`,
                }}
                aria-label="Pie chart comparing medication days by IVF type"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {ivfDetails.map((ivf) => (
                <div
                  key={ivf.title}
                  className="rounded-2xl border border-border/70 bg-background/35 p-3 transition-colors duration-300 hover:bg-background/55 hover:border-primary/30 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-3 w-3 rounded-full ${
                        ivf.title === 'Conventional IVF'
                          ? 'bg-blue-500'
                          : ivf.title === 'Mild IVF'
                            ? 'bg-emerald-500'
                            : 'bg-violet-500'
                      }`}
                      aria-hidden="true"
                    />
                    <div className="text-xs font-extrabold">{ivf.title}</div>
                  </div>
                  <div className="mt-2 text-xl font-extrabold">{ivf.medicationDays} days</div>
                  <div className="text-[11px] font-semibold text-muted-foreground">{ivf.medicationRangeLabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {ivfDetails.map((ivf) => {
            const variant =
              ivf.title === 'Natural Cycle IVF'
                ? 'bg-violet-50 border-violet-200 hover:bg-violet-100'
                : ivf.title === 'Mild IVF'
                  ? 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-blue-50 border-blue-200 hover:bg-blue-100'

            return (
              <div
                key={ivf.title}
                className={`group rounded-3xl border shadow-sm transition-colors duration-300 ${variant}`}
              >
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-border/60">
                      <ivf.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold">{ivf.title}</h3>
                      <div className="mt-0.5 text-[11px] font-semibold text-muted-foreground">{ivf.medicationRangeLabel}</div>
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">{ivf.desc}</p>

                  <div className="mt-4">
                    <div className="text-sm font-extrabold uppercase tracking-wide text-primary">Benefits</div>
                    <ul className="mt-2 space-y-2">
                      {ivf.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    {ivf.benefits.length > 4 && (
                      <div className="mt-1 text-xs font-semibold text-muted-foreground">+{ivf.benefits.length - 4} more benefits</div>
                    )}
                  </div>

                  <div className="mt-4 rounded-2xl border border-border/70 bg-card/40 p-3">
                    <div className="text-sm font-extrabold uppercase tracking-wide text-primary">Who is it for?</div>
                    <div className="mt-1 text-sm text-muted-foreground">{ivf.whoForDesc}</div>
                    <ul className="mt-2 space-y-1.5">
                      {ivf.whoForPoints.slice(0, 4).map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {ivf.whoForPoints.length > 4 && (
                      <div className="mt-1 text-xs font-semibold text-muted-foreground">+{ivf.whoForPoints.length - 4} more candidate factors</div>
                    )}
                  </div>

                  <Link
                    to="/ivf"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary transition group-hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Explore treatment <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="w-full">
        <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-card/30 p-8 shadow-sm md:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_260px_at_10%_0%,rgba(37,99,235,0.22),transparent_60%),radial-gradient(700px_240px_at_90%_10%,rgba(34,197,94,0.2),transparent_60%)]" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-2xl font-extrabold text-muted-foreground">Advanced reproductive options</div>
              <h2 className="mt-2 text-xl font-extrabold">More assisted reproduction services under one roof</h2>

              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'ICSI for male-factor fertility challenges',
                    desc: 'When fertilisation needs extra support.',
                    icon: TestTube2,
                    gradient: 'from-cyan-500/15 via-cyan-400/10 to-transparent',
                    to: '/icsi',
                  },
                  {
                    title: 'Blastocyst culture and embryo grading',
                    desc: 'Embryology-led selection with careful assessment.',
                    icon: Microscope,
                    gradient: 'from-indigo-500/15 via-violet-400/10 to-transparent',
                    to: '/blastocyst-grading',
                  },
                  {
                    title: 'Frozen embryo transfer cycle planning',
                    desc: 'Transfer strategies tailored to your cycle.',
                    icon: CalendarHeart,
                    gradient: 'from-emerald-500/15 via-lime-400/10 to-transparent',
                    to: '/frozen-embryo-transfer',
                  },
                  {
                    title: 'Preimplantation genetic testing (PGT-A / PGT-M)',
                    desc: 'Optional genetic insight to guide decisions.',
                    icon: Dna,
                    gradient: 'from-rose-500/15 via-pink-400/10 to-transparent',
                    to: '/pgt',
                  },
                  {
                    title: 'Fertility preservation for medical reasons (oncofertility)',
                    desc: 'Preserve eggs/embryos before treatment begins.',
                    icon: HeartHandshake,
                    gradient: 'from-amber-500/15 via-orange-400/10 to-transparent',
                    to: '/oncofertility',
                  },
                  {
                    title: 'Recurrent implantation and pregnancy loss support',
                    desc: 'Extra attention, monitoring, and compassionate follow-up.',
                    icon: ShieldCheck,
                    gradient: 'from-primary/15 via-accent/10 to-transparent',
                    to: '/recurrent-implantation',
                  },
                  {
                    title: 'Non-Invasive Prenatal Testing (NIPT)',
                    desc: 'Optional genetic insight to guide decisions.',
                    icon: Dna,
                    gradient: 'from-rose-500/15 via-pink-400/10 to-transparent',
                    to: '/nipt',
                  },
                  {
                    title: 'Embryoscope',
                    desc: 'Embryoscope is a new technology that allows us to see the embryo in real time.',
                    icon: Eye,
                    gradient: 'from-rose-500/15 via-pink-400/10 to-transparent',
                    to: '/embryoscope',
                  }
                ].map((item) => (
                <Link
                  key={item.title}
                  to={item.to as any}
                  className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/35 p-4 text-sm text-muted-foreground transition hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 transition group-hover:opacity-100`}
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <div className="inline-flex items-center gap-2 font-semibold text-foreground">
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-border/70 bg-background/40">
                          <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        {item.title}
                      </div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground/95">{item.desc}</div>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary transition group-hover:underline">
                      Find out more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                    </div>
                </Link>
                ))}
              </div>
            </div>

            <motion.div
              initial={false}
              animate={reducedMotion ? { y: 0 } : { y: [0, -4, 0] }}
              transition={{ duration: 4.4, repeat: reducedMotion ? 0 : Infinity }}
              className="relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-border/70 bg-background/35 shadow-sm"
            >
              <img
                src={Advanced}
                alt="Advanced fertility treatments and clinical support"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
                <div className="text-sm font-extrabold">Specialist support</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Additional options when your care plan calls for precision.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FaqSection
        backgroundImage={FAQ}
        title="Frequently asked questions"
        subtitle="Quick answers to help you start with confidence—before you speak with our care team."
        items={FAQ_ITEMS}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}

