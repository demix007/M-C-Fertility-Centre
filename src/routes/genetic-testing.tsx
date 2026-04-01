import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Dna, Microscope, Phone, ShieldCheck } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs'
import { FaqSection } from '../components/sections/FaqSection'
import { useSeo } from '../lib/seo'
import { faqPageJsonLd } from '../lib/structuredData'
import Review from '../assets/review.jpg'
import IVFInfo from '../assets/ivf_info.jpeg'
import GeneticTestingHero from '../assets/genetic_testing_hero.jpeg'
import DNA3 from '../assets/dna_3.jpeg'
import DNA1 from '../assets/dna_1.jpeg'

export const Route = createFileRoute('/genetic-testing')({
  component: GeneticTestingPage,
})

function GeneticTestingPage() {
  const reducedMotion = useReducedMotion()

  const faqItems = [
    {
      q: 'Do genetic tests guarantee pregnancy or a healthy baby?',
      a: 'No. Genetic testing provides additional information for embryo selection, but outcomes still depend on age, embryo quality, uterine factors, and broader clinical context.',
    },
    {
      q: 'What is the difference between PGT-A and PGT-M?',
      a: 'PGT-A screens chromosome number (aneuploidy risk), while PGT-M targets a specific inherited condition when a known mutation is present.',
    },
    {
      q: 'When is genetic IVF often recommended?',
      a: 'It may be considered for recurrent miscarriage, repeated failed cycles, advanced maternal age, severe male-factor concerns, or known family genetic risk.',
    },
    {
      q: 'Is embryo biopsy safe?',
      a: 'Embryo biopsy is widely used in experienced IVF laboratories. Your clinician explains its purpose, limitations, and individualized risk-benefit profile.',
    },
    {
      q: 'How long do PGT results usually take?',
      a: 'Result timing depends on laboratory workflow and test complexity. Many clinics report results within days to about two weeks after biopsy.',
    },
    {
      q: 'Can results reduce miscarriage risk?',
      a: 'For selected patients, transferring embryos with favorable screening results may reduce some causes of early loss, but it cannot remove all pregnancy risks.',
    },
    {
      q: 'Can PGT be done in natural-cycle transfer pathways?',
      a: 'In selected ovulatory patients, transfer after PGT can still be planned using lower-medication or natural-cycle protocols based on clinical suitability.',
    },
    {
      q: 'What are the limitations of genetic testing?',
      a: 'No test is perfect. False positives/negatives, mosaic findings, and interpretation limits exist. Counselling is essential before and after testing.',
    },
  ] as const

  const pgtTabs = {
    'pgt-a': {
      title: 'PGT-A (Chromosome screening)',
      body: 'PGT-A assesses embryo chromosome number to support transfer decisions and reduce avoidable failed transfers linked to aneuploidy.',
      bullets: [
        'Commonly discussed for age-related risk, recurrent miscarriage, and repeated failed cycles',
        'Aims to identify embryos with favorable chromosomal profiles for transfer',
        'Interpretation must be counselling-led and clinically contextualized',
      ],
    },
    'pgt-m': {
      title: 'PGT-M (Single-gene testing)',
      body: 'PGT-M is used when a known inherited condition exists in one or both partners, using targeted testing before embryo transfer.',
      bullets: [
        'Requires known mutation history and pre-test planning',
        'Helps reduce transmission risk for selected genetic conditions',
        'Often performed with specialist counselling and consent workflows',
      ],
    },
  } as const

  useSeo({
    title: 'Genetic Testing | M&C Fertility Centre',
    description:
      'Genetic IVF (IVF + PGT-A/PGT-M) explained with step-by-step guidance, indications, benefits, limitations, and counselling-first decision support.',
    jsonLd: [
      faqPageJsonLd([
        ...faqItems.map((x) => ({ question: x.q, answer: x.a })),
      ]),
    ],
  })

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img src={GeneticTestingHero} alt="Genetic testing and IVF laboratory support" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(9,24,52,0.82)_10%,rgba(12,26,58,0.58)_42%,rgba(59,130,246,0.30)_72%,rgba(236,72,153,0.32)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_300px_at_14%_14%,rgba(14,165,233,0.26),transparent_60%),radial-gradient(640px_280px_at_86%_18%,rgba(244,114,182,0.22),transparent_62%),radial-gradient(620px_260px_at_50%_100%,rgba(52,211,153,0.18),transparent_66%)]" />

        <div className="relative min-h-[540px] px-6 py-12 md:min-h-[600px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <Dna className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Genetic IVF pathways
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Genetic testing in IVF, explained with clarity
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Genetic IVF combines embryo creation with preimplantation testing to support safer transfer decisions in
              selected cases. We focus on counselling-first interpretation and realistic expectations.
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
                <span className="relative z-10">Book Genetic Consultation</span>
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
                { icon: Dna, label: 'PGT-A / PGT-M pathways' },
                { icon: Microscope, label: 'Embryology-led precision' },
                { icon: ShieldCheck, label: 'Counselling-first interpretation' },
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
          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">PGT-A vs PGT-M</div>
            <h2 className="mt-2 text-xl font-extrabold">Which test answers which question?</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              The distinction matters: PGT-A screens chromosome number abnormalities, while PGT-M tests for known
              inherited conditions. Your clinician guides test selection based on diagnosis and history.
            </p>

            <div className="mt-6">
              <Tabs defaultValue="pgt-a">
                <TabsList className="flex flex-wrap gap-2 rounded-2xl border border-border/70 bg-background/30 p-1.5">
                  <TabsTrigger
                    value="pgt-a"
                    className="rounded-xl border border-sky-200/80 bg-sky-50/80 px-4 py-2 text-foreground transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-100/80 data-[state=active]:border-emerald-400 data-[state=active]:bg-emerald-100 data-[state=active]:shadow-sm"
                  >
                    PGT-A
                  </TabsTrigger>
                  <TabsTrigger
                    value="pgt-m"
                    className="rounded-xl border border-violet-200/80 bg-violet-50/80 px-4 py-2 text-foreground transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-100/80 data-[state=active]:border-emerald-400 data-[state=active]:bg-emerald-100 data-[state=active]:shadow-sm"
                  >
                    PGT-M
                  </TabsTrigger>
                </TabsList>

                <div className="mt-6 space-y-5">
                  {(Object.keys(pgtTabs) as Array<'pgt-a' | 'pgt-m'>).map((key) => {
                    const panel = pgtTabs[key]
                    const panelClass =
                      key === 'pgt-a'
                        ? 'border-sky-200/80 bg-sky-50/65 hover:bg-sky-50/90'
                        : 'border-violet-200/80 bg-violet-50/65 hover:bg-violet-50/90'
                    return (
                      <TabsContent key={key} value={key}>
                        <div className={`rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${panelClass}`}>
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
            transition={{ duration: 4.2, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={DNA3} alt="Embryology and genetic screening laboratory workflow" className="h-full min-h-[360px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Precision with context</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Testing adds useful data, but decisions remain clinical and individualized.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <motion.div
            initial={false}
            animate={reducedMotion ? { y: 0 } : { y: [0, -3, 0] }}
            transition={{ duration: 4.2, repeat: reducedMotion ? 0 : Infinity }}
            className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5"
          >
            <img src={DNA1} alt="Genetic counselling and embryo screening discussion" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">When PGT conversations are relevant</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Genetic testing is not for everyone, but in selected cases it can refine treatment decisions.
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">When is genetic IVF used?</div>
            <h2 className="mt-2 text-xl font-extrabold">Common situations for IVF + genetic testing discussion</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Recommendations are individualized, but these are frequent scenarios where PGT conversations are clinically relevant.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                'Women over 35 with increasing aneuploidy risk',
                'Two or more failed assisted reproduction cycles',
                'Two or more miscarriages of unclear cause',
                'Previous pregnancy with chromosomal abnormality',
                'Known family genetic condition (for PGT-M)',
                'Significant male-factor sperm concerns in selected cases',
                'Repeated implantation failure after good-quality embryo transfer',
                'Parental chromosomal rearrangement risk under specialist guidance',
              ].map((item, idx) => (
                <div
                  key={item}
                  className={`rounded-3xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    idx % 3 === 0
                      ? 'border-sky-200/70 bg-sky-50/60'
                      : idx % 3 === 1
                        ? 'border-emerald-200/70 bg-emerald-50/55'
                        : 'border-violet-200/70 bg-violet-50/55'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{item}</span>
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
            className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-sky-100/85 via-indigo-50/75 to-emerald-100/80 p-2 shadow-sm lg:col-span-5"
          >
            <div className="h-full w-full rounded-[20px] bg-white/55 p-2 ring-1 ring-border/40">
              <img src={IVFInfo} alt="Genetic IVF treatment workflow infographic" className="h-full w-full rounded-2xl bg-sky-50/45 object-contain p-1" />
            </div>
          </motion.div>

          <div className="h-full lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">What does genetic IVF involve?</div>
            <h2 className="mt-2 text-xl font-extrabold">Step-by-step treatment flow</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Genetic IVF combines standard IVF workflow with embryo biopsy, laboratory screening, and frozen transfer planning where needed.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { n: '1', t: 'First visit', d: 'History, fertility evaluation, and treatment planning.' },
                { n: '2', t: 'Ovarian stimulation', d: 'Medication and monitoring to develop multiple mature eggs.' },
                { n: '3', t: 'Egg collection', d: 'Short ultrasound-guided retrieval under sedation.' },
                { n: '4', t: 'Fertilization (ICSI/IVF)', d: 'Eggs and sperm are combined in the IVF lab.' },
                { n: '5', t: 'Embryo culture', d: 'Embryos develop to blastocyst stage for quality review.' },
                { n: '6', t: 'Biopsy + vitrification + PGT', d: 'Cells are tested while embryos are frozen pending results.' },
                { n: '7', t: 'Transfer of selected embryo', d: 'Uterus is prepared and embryo transfer is scheduled.' },
                { n: '8', t: 'Pregnancy test', d: 'Blood test and follow-up scan planning.' },
              ].map((s, idx) => (
                <div
                  key={s.n}
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
                  <div className="absolute inset-0 bg-[radial-gradient(520px_220px_at_12%_0%,rgba(37,99,235,0.2),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-white/60 text-sm font-extrabold text-primary">
                        {s.n}
                      </div>
                      <div className="text-sm font-extrabold">{s.t}</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              ))}
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
          <div className="text-2xl font-extrabold text-muted-foreground">Advantages and limitations</div>
          <h2 className="mt-2 text-xl font-extrabold">Balanced counselling before decisions</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200/70 bg-emerald-50/55 p-5 shadow-sm">
              <div className="text-sm font-extrabold">Potential advantages</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /><span>May improve selection confidence for embryo transfer.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /><span>Can reduce some avoidable failed transfers related to aneuploidy.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /><span>Supports discussion around single-embryo transfer strategies.</span></li>
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-200/70 bg-rose-50/55 p-5 shadow-sm">
              <div className="text-sm font-extrabold">Important limitations</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /><span>Testing does not guarantee pregnancy or eliminate all risks.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /><span>Embryo mosaicism and interpretation complexity may occur.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /><span>Clinical context and counselling remain essential for decisions.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        backgroundImage={Review}
        title="Frequently asked questions"
        subtitle="Straight answers about genetic IVF, safety, timelines, and interpretation limits."
        items={faqItems}
        ctas={[
          { to: '/booking', label: 'Book Genetic Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Request a call', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}

