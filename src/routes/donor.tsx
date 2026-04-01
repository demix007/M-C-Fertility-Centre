import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, HeartHandshake, Phone, ShieldCheck, Sparkles, UserRoundSearch } from 'lucide-react'
import { api } from '../api/client'
import { useSeo } from '../lib/seo'
import type { BloodType, DonorProfile, EyeColor } from '../lib/data/donors'
import { faqPageJsonLd } from '../lib/structuredData'
import { FaqSection } from '../components/sections/FaqSection'
import Donor from '../assets/donor.jpg'
import Donor2 from '../assets/donor_2.jpg'
import DonorProgram from '../assets/donor_program.jpg'
import Review from '../assets/review.jpg'
import Happy from '../assets/happy.jpg'
import Protocols from '../assets/protocols.jpg'
import Fertility from '../assets/fertility.jpg'
import Donor5 from '../assets/donor5.jpg'

export const Route = createFileRoute('/donor')({
  component: DonorPage,
})

type FilterState = {
  bloodType?: BloodType
  ethnicity?: DonorProfile['ethnicity']
  eyeColor?: EyeColor
  education?: DonorProfile['education']
  ageRange?: DonorProfile['ageRange']
}

const bloodTypes: BloodType[] = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
const ethnicities: DonorProfile['ethnicity'][] = ['Yoruba', 'Igbo', 'Hausa', 'Other Nigeria']
const eyeColors: EyeColor[] = ['Brown', 'Blue', 'Green', 'Hazel']
const educations: DonorProfile['education'][] = ['BSc', 'MSc', 'PhD', 'Medical degree']
const ageRanges: DonorProfile['ageRange'][] = ['18-24', '25-30', '31-35']

export function DonorPage() {
  const reducedMotion = useReducedMotion()

  const donorFaq = [
    {
      q: 'When is egg donation usually recommended?',
      a: 'Egg donation may be recommended when egg quality is low, ovarian reserve is reduced, repeated IVF cycles have not worked, or menopause/ovarian insufficiency affects treatment options.',
    },
    {
      q: 'How long does egg donation treatment usually take?',
      a: 'Timelines vary by tests, donor assignment, and cycle preparation. Many treatment plans are completed in roughly 6-8 weeks after the pathway is confirmed.',
    },
    {
      q: 'How many attempts are typically needed?',
      a: 'Success depends on embryo quality, uterine readiness, and clinical factors. Your team discusses realistic cumulative expectations over multiple attempts.',
    },
    {
      q: 'How are donors selected and matched?',
      a: 'Matching uses medical compatibility, blood group/rhesus where relevant, phenotypic resemblance, and screening standards. The goal is safety, fit, and clarity.',
    },
    {
      q: 'Is donor information private?',
      a: 'Yes. We operate with strict privacy standards and explain clearly what is available in anonymized profile previews and what is discussed only in consultation.',
    },
    {
      q: 'Can treatment be done with minimal medication?',
      a: 'In some cases, uterine preparation can use lower-medication or natural-cycle strategies based on ovulation status and clinical suitability.',
    },
    {
      q: 'How much does egg donation cost?',
      a: 'Final cost depends on your protocol, medications, laboratory options, and transfer planning. We provide transparent estimates before treatment decisions.',
    },
    {
      q: 'Will a baby from egg donation resemble me?',
      a: 'Donor matching considers physical traits, and pregnancy itself contributes important biological influences. Your team explains genetics and expectations with sensitivity.',
    },
  ] as const

  useSeo({
    title: 'Donor Services | M&C Fertility Centre',
    description:
      'Privacy-first donor matching filters and clear next steps for consultations in Nigeria. Explore anonymized donor profiles.',
    jsonLd: [
      faqPageJsonLd([
        ...donorFaq.map((x) => ({ question: x.q, answer: x.a })),
      ]),
    ],
  })

  const [filters, setFilters] = useState<FilterState>({})

  const queryKey = useMemo(() => ['donors', filters], [filters])

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: async () => {
      const res = await api.get('/api/donors', { params: filters })
      return res.data as { results: DonorProfile[] }
    },
  })

  const results = data?.results ?? []

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img src={Donor} alt="Donor treatment and recipient support" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(59,130,246,0.30)_72%,rgba(236,72,153,0.30)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_300px_at_14%_14%,rgba(14,165,233,0.26),transparent_60%),radial-gradient(640px_280px_at_86%_18%,rgba(244,114,182,0.22),transparent_62%),radial-gradient(620px_260px_at_50%_100%,rgba(52,211,153,0.18),transparent_66%)]" />

        <div className="relative min-h-[540px] px-6 py-12 md:min-h-[600px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <HeartHandshake className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Donor pathways & matching
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Donor treatment with privacy, precision, and compassionate guidance
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Whether you are exploring donor eggs as a recipient or considering becoming a donor, we guide every step
              with confidentiality, careful matching, and clear expectations.
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
                <span className="relative z-10">Book Donor Consultation</span>
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
                { icon: ShieldCheck, label: 'Confidential pathways' },
                { icon: UserRoundSearch, label: 'Structured matching' },
                { icon: Sparkles, label: 'Counselling-first support' },
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
          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.1, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={Donor2} alt="Donor and recipient support consultation" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Who can benefit from donor treatment?</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Donor eggs may help when egg quality, ovarian reserve, or repeated IVF outcomes limit success with own eggs.
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">Recipient pathways</div>
            <h2 className="mt-2 text-xl font-extrabold">When donor eggs are often considered</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Reduced ovarian reserve or poor oocyte quality',
                'Repeated IVF failures with own eggs',
                'Advanced maternal age with low response',
                'Premature ovarian insufficiency or menopause',
                'Known genetic risk where donor pathways are advised',
                'Need for highly personalized matching and counselling',
                'Previous ovarian surgery affecting egg reserve',
                'Poor embryo quality across multiple prior cycles',
                'History of recurrent implantation failure',
                'Need for faster pathway after years of infertility',
                'Cancer treatment history impacting ovarian function',
                'Single parents or same-sex couples needing donor support',
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
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="text-2xl font-extrabold text-muted-foreground">How matching works</div>
        <h2 className="mt-2 text-xl font-extrabold">Step-by-step donor matching and treatment flow</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Matching is guided by safety and compatibility: phenotypic features, blood group where relevant, and medical
          screening criteria. Every case is reviewed with counselling and clinician oversight.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            { n: '1', t: 'First consultation', d: 'Medical history, fertility evaluation, and pathway discussion.' },
            { n: '2', t: 'Compatibility review', d: 'Phenotypic and clinical matching criteria are reviewed.' },
            { n: '3', t: 'Preparation', d: 'Endometrial preparation and treatment timing are planned.' },
            { n: '4', t: 'Embryology & transfer', d: 'Fertilization, embryo development, and transfer strategy.' },
            { n: '5', t: 'Pregnancy test & follow-up', d: 'Post-transfer blood test and next-step guidance.' },
          ].map((s, idx) => (
            <div
              key={s.n}
              className={`rounded-3xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                idx % 4 === 0
                  ? 'border-sky-200/70 bg-sky-50/65'
                  : idx % 4 === 1
                    ? 'border-emerald-200/70 bg-emerald-50/60'
                    : idx % 4 === 2
                      ? 'border-violet-200/70 bg-violet-50/55'
                      : 'border-rose-200/70 bg-rose-50/55'
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
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="text-2xl font-extrabold text-muted-foreground">Step-by-Step Egg Donation Process</div>
        <h2 className="mt-2 text-xl font-extrabold">A practical view of the recipient journey</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Once donor assignment and medical suitability are confirmed, treatment typically moves through these core stages.
          Exact timelines vary by response, medication plan, and transfer strategy.
        </p>
        <div className="mt-5 overflow-hidden rounded-3xl border border-border/70 shadow-sm">
          <img
            src={Fertility}
            alt="Egg donation consultation and planning journey"
            className="h-48 w-full object-cover md:h-56"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            {
              n: '1',
              t: 'First visit and fertility work-up',
              d: 'Review medical history, complete gynecological assessment, and run required baseline tests before treatment planning.',
            },
            {
              n: '2',
              t: 'Donor assignment',
              d: 'Donor matching uses compatibility criteria such as phenotypic profile, blood group/rhesus where relevant, and screening standards.',
            },
            {
              n: '3',
              t: 'Recipient preparation',
              d: 'Medication is used to prepare the uterine lining for implantation; in select ovulatory cases, lower-medication pathways may be considered.',
            },
            {
              n: '4',
              t: 'Embryo transfer',
              d: 'After fertilization and embryo development, transfer is timed according to readiness and individualized clinical decisions.',
            },
            {
              n: '5',
              t: 'Pregnancy test and follow-up',
              d: 'A blood test is performed after transfer. If positive, follow-up ultrasound and onward care are scheduled.',
            },
          ].map((s, idx) => (
            <div
              key={s.n}
              className={`rounded-3xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                idx % 4 === 0
                  ? 'border-sky-200/70 bg-sky-50/65'
                  : idx % 4 === 1
                    ? 'border-emerald-200/70 bg-emerald-50/60'
                    : idx % 4 === 2
                      ? 'border-violet-200/70 bg-violet-50/55'
                      : 'border-rose-200/70 bg-rose-50/55'
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
      </section>

      <section className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_220px_at_12%_0%,rgba(59,130,246,0.16),transparent_60%),radial-gradient(620px_220px_at_88%_100%,rgba(16,185,129,0.12),transparent_62%)]"
        />
        <div className="relative z-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="text-2xl font-extrabold text-muted-foreground">Why choose our donor program?</div>
              <h2 className="mt-2 text-xl font-extrabold">Built for safety, matching quality, and confidence</h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                We combine rigorous screening, advanced lab workflows, and counselling-first care to make donor treatment
                clear, secure, and personalized for every family-building path.
              </p>
            </div>
            <motion.div
              initial={false}
              animate={reducedMotion ? { y: 0 } : { y: [0, -2, 0] }}
              transition={{ duration: 4.2, repeat: reducedMotion ? 0 : Infinity }}
              className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
            >
              <img src={DonorProgram} alt="Patient support and donor treatment follow-up care" className="h-48 w-full object-cover md:h-56" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/88 via-background/30 to-transparent" />
            </motion.div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                t: 'Highly screened donors',
                d: 'Donor candidates go through structured medical, genetic, and wellbeing screening before entering the program.',
              },
              {
                t: 'Advanced lab standards',
                d: 'Our embryology workflow and vitrification protocols support consistency across retrieval, storage, and transfer planning.',
              },
              {
                t: 'Matching precision',
                d: 'Matching considers phenotypic traits and key compatibility factors to support fit and treatment confidence.',
              },
              {
                t: 'PGT-informed pathways',
                d: 'When appropriate, preimplantation genetic testing can be discussed to support embryo selection strategy.',
              },
              {
                t: 'Broad donor availability',
                d: 'A wider profile pool can reduce waiting time and help recipients find suitable options sooner.',
              },
              {
                t: 'Safety and integrity of care',
                d: 'From donor screening to recipient transfer planning, every step follows privacy-first and safety-focused protocols.',
              },
            ].map((x, idx) => (
              <div
                key={x.t}
                className={`group rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                  idx % 3 === 0
                    ? 'border-sky-200/70 bg-sky-50/60'
                    : idx % 3 === 1
                      ? 'border-emerald-200/70 bg-emerald-50/55'
                      : 'border-violet-200/70 bg-violet-50/55'
                }`}
              >
                <div className="text-sm font-extrabold">{x.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="text-2xl font-extrabold text-muted-foreground">Donor treatment pathways</div>
        <h2 className="mt-2 text-xl font-extrabold">Beyond egg donation: donor eggs, donor sperm, and egg sharing</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Donor treatment is not one-size-fits-all. Your clinical team helps you choose a pathway based on diagnosis,
          timeline, personal preferences, and family-building goals.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: 'IVF treatment with donor eggs',
              intro:
                'Often recommended when egg quality or ovarian reserve makes treatment with own eggs less likely to succeed.',
              image: Happy,
              points: [
                'Uses donor oocytes with partner or donor sperm for fertilization',
                'Includes recipient preparation, embryo development, and transfer planning',
                'Matching focuses on safety, compatibility, and counselling support',
              ],
            },
            {
              title: 'IVF treatment with donor sperm',
              intro:
                'Used when male-factor fertility challenges exist or when individuals/couples need donor sperm to build a family.',
              image: Protocols,
              points: [
                'Applicable in IVF and, in selected cases, IUI pathways',
                'Donor screening, legal guidance, and consent are reviewed before treatment',
                'Useful for single women, same-sex female couples, and specific clinical scenarios',
              ],
            },
            {
              title: 'Egg sharing',
              intro:
                'A pathway where a patient undergoing IVF may share some retrieved eggs with the donor program under strict eligibility and consent rules.',
              image: Donor5,
              points: [
                'Requires thorough counselling and informed consent from all parties',
                'Eligibility depends on age, ovarian reserve, and treatment response',
                'Can support broader donor availability while respecting ethics and patient choice',
              ],
            },
          ].map((card, idx) => (
            <div
              key={card.title}
              className={`group rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                idx === 0
                  ? 'border-sky-200/70 bg-sky-50/60'
                  : idx === 1
                    ? 'border-emerald-200/70 bg-emerald-50/55'
                    : 'border-violet-200/70 bg-violet-50/55'
              }`}
            >
              <img src={card.image} alt={card.title} className="h-36 w-full rounded-2xl object-cover" />
              <div className="mt-4 text-sm font-extrabold">{card.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{card.intro}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-3xl border border-border/70 bg-background/35 p-5 lg:col-span-4">
            <div className="text-sm font-extrabold">Filter donor profiles</div>
            <div className="mt-2 text-xs font-extrabold text-muted-foreground">Anonymized preview for consultation planning</div>

            <div className="mt-4 space-y-4">
              <FieldSelect
                label="Blood type"
                value={filters.bloodType ?? ''}
                onChange={(v) => setFilters((f) => ({ ...f, bloodType: (v ? (v as BloodType) : undefined) }))}
                options={['', ...bloodTypes]}
              />

              <FieldSelect
                label="Ethnicity"
                value={filters.ethnicity ?? ''}
                onChange={(v) => setFilters((f) => ({ ...f, ethnicity: v ? (v as DonorProfile['ethnicity']) : undefined }))}
                options={['', ...ethnicities]}
              />

              <FieldSelect
                label="Eye color"
                value={filters.eyeColor ?? ''}
                onChange={(v) => setFilters((f) => ({ ...f, eyeColor: (v ? (v as EyeColor) : undefined) }))}
                options={['', ...eyeColors]}
              />

              <FieldSelect
                label="Education"
                value={filters.education ?? ''}
                onChange={(v) => setFilters((f) => ({ ...f, education: v ? (v as DonorProfile['education']) : undefined }))}
                options={['', ...educations]}
              />

              <FieldSelect
                label="Age range"
                value={filters.ageRange ?? ''}
                onChange={(v) => setFilters((f) => ({ ...f, ageRange: (v ? (v as DonorProfile['ageRange']) : undefined) }))}
                options={['', ...ageRanges]}
              />

              <button
                type="button"
                onClick={() => setFilters({})}
                className="w-full rounded-3xl border border-border bg-card/30 px-4 py-3 text-sm font-extrabold transition hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Clear filters
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-background/25 p-6 lg:col-span-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-extrabold">Anonymized profile results</div>
                <div className="text-xs text-muted-foreground">{isLoading ? 'Loading...' : `${results.length} profiles found`}</div>
              </div>
              <Link
                to="/booking"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Schedule consultation
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-36 animate-pulse rounded-3xl border border-border/70 bg-card/30" />
                ))
              ) : results.length === 0 ? (
                <div className="col-span-full rounded-3xl border border-border bg-card/30 p-5 text-sm font-extrabold text-muted-foreground">
                  No matches found for those filters. Try adjusting your selections.
                </div>
              ) : (
                results.map((d, idx) => (
                  <div
                    key={d.id}
                    className={`rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                      idx % 3 === 0
                        ? 'border-sky-200/70 bg-sky-50/60'
                        : idx % 3 === 1
                          ? 'border-emerald-200/70 bg-emerald-50/55'
                          : 'border-violet-200/70 bg-violet-50/55'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-extrabold">Anonymized donor</div>
                        <div className="mt-1 text-xs font-extrabold text-muted-foreground">
                          {d.ageRange} • {d.ethnicity}
                        </div>
                      </div>
                      <div className="rounded-full border border-border bg-white/65 px-3 py-1 text-xs font-extrabold">{d.bloodType}</div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs font-extrabold text-muted-foreground">Eye color</div>
                        <div className="text-sm font-extrabold">{d.eyeColor}</div>
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-muted-foreground">Education</div>
                        <div className="text-sm font-extrabold">{d.education}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-xs font-extrabold text-muted-foreground">Height</div>
                        <div className="text-sm font-extrabold">{d.heightCm} cm</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">Donor participation pathway</div>
            <h2 className="mt-2 text-xl font-extrabold">How to become an egg donor</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              For people interested in donating, the process is guided and structured: application, screening, and
              retrieval preparation with continuous support from the donor coordination team.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { n: 'A', t: 'Apply', d: 'Complete pre-screening and initial application details.' },
                { n: 'B', t: 'Be screened', d: 'Medical tests and required counseling/eligibility checks.' },
                { n: 'C', t: 'Complete retrieval', d: 'Monitoring visits, medication support, and retrieval scheduling.' },
              ].map((x, idx) => (
                <div
                  key={x.n}
                  className={`rounded-3xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    idx === 0
                      ? 'border-sky-200/70 bg-sky-50/60'
                      : idx === 1
                        ? 'border-emerald-200/70 bg-emerald-50/55'
                        : 'border-violet-200/70 bg-violet-50/55'
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-border/60 bg-white/65 text-sm font-extrabold text-primary">
                    {x.n}
                  </div>
                  <div className="mt-3 text-sm font-extrabold">{x.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.4, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={Protocols} alt="Donor treatment workflow and preparation steps" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Coordinated clinical workflow</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Recipient and donor pathways are coordinated for timing, safety, and communication clarity.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection
        backgroundImage={Review}
        title="Frequently asked questions"
        subtitle="Clear answers about donor treatment, matching, timelines, and what to expect."
        items={donorFaq}
        ctas={[
          { to: '/booking', label: 'Book Donor Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}

function FieldSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <label className="block">
      <span className="text-sm font-extrabold">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o === '' ? 'Any' : o}
          </option>
        ))}
      </select>
    </label>
  )
}

