import { createFileRoute, Link } from '@tanstack/react-router'
import { useSeo } from '../../lib/seo'
import { guides } from '../../lib/data/guides'
import { useGuideGateStore } from '../../state/guideGateStore'
import { GuideGateModal } from '../../components/guides/GuideGateModal'
import { ArrowRight, BookOpen, CalendarHeart, CheckCircle2, CircleHelp, PlayCircle, Phone, Sparkles } from 'lucide-react'
import { FaqSection } from '../../components/sections/FaqSection'
import FollowUp from '../../assets/follow_up.webp'
import Review from '../../assets/review.webp'
import Guide4 from '../../assets/guide_4.webp'
import Guide4640 from '../../assets/guide_4-640.webp'
import Guide41024 from '../../assets/guide_4-1024.webp'
import Guide41440 from '../../assets/guide_4-1440.webp'
import Guide from '../../assets/guide.webp'
import Guide1 from '../../assets/guide_1.webp'

export const Route = createFileRoute('/guides/')({
  component: GuidesPage,
})

function GuidesPage() {
  const guideTracks = [
    {
      title: 'Getting Started',
      points: ['How fertility works', 'When to seek support', 'What your first consult covers'],
    },
    {
      title: 'IVF Pathway',
      points: ['Cycle planning and scans', 'Medication basics', 'Egg collection to transfer'],
    },
    {
      title: 'Wellbeing & Preparation',
      points: ['Nutrition and lifestyle', 'Emotional readiness', 'Questions to ask your clinician'],
    },
    {
      title: 'Costs & Decision Planning',
      points: ['Understanding treatment ranges', 'Questions about add-ons', 'Planning your next practical step'],
    },
  ] as const

  const resourcePillars = [
    {
      icon: BookOpen,
      title: 'Patient education articles',
      text: 'Short explainers that break down common fertility terms and treatment decisions in plain language.',
      image: Guide4,
    },
    {
      icon: PlayCircle,
      title: 'Expert sessions and webinars',
      text: 'Guided learning sessions inspired by major fertility centres to help patients prepare confidently.',
      image: FollowUp,
    },
    {
      icon: CheckCircle2,
      title: 'Consultation preparation tools',
      text: 'Practical checklists for appointments, lab follow-up, and treatment timeline planning.',
      image: Review,
    },
    {
      icon: CalendarHeart,
      title: 'Cycle planning roadmaps',
      text: 'Simple timeline guides that explain what to expect before, during, and after each treatment stage.',
      image: Guide,
    },
    {
      icon: Sparkles,
      title: 'Lifestyle and wellbeing support',
      text: 'Evidence-informed habits for sleep, stress, nutrition, and emotional resilience during fertility care.',
      image: FollowUp,
    },
  ] as const

  const faqItems = [
    {
      q: 'Are these guides medical advice?',
      a: 'No. Our guides are educational and help you ask better questions. Clinical decisions should always come from your fertility specialist.',
    },
    {
      q: 'Why do I need to enter my email before download?',
      a: 'We use a light access gate to reduce spam and share relevant updates. You can still book a direct consultation if you prefer one-on-one support.',
    },
    {
      q: 'Which guide should I read first?',
      a: 'If you are new, start with fertility preservation or questions-to-ask-your-doctor. If you are already planning treatment, begin with the IVF-focused guides.',
    },
    {
      q: 'Can these guides help me prepare for my first consultation?',
      a: 'Yes. They are structured to help you organize symptoms, history, priorities, and key questions before your first visit.',
    },
  ] as const

  useSeo({
    title: 'Fertility Guides | M&C Fertility Centre',
    description: 'Download educational fertility guides with an email gate. Calm, medically responsible content for IVF, egg freezing, and preparation.',
  })

  const setOpen = useGuideGateStore((s) => s.setOpen)
  const setGuideSlug = useGuideGateStore((s) => s.setGuideSlug)
  const setEmail = useGuideGateStore((s) => s.setEmail)

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img
          src={Guide4}
          srcSet={`${Guide4640} 640w, ${Guide41024} 1024w, ${Guide41440} 1440w`}
          sizes="100vw"
          alt="Fertility education resources and IVF guide support"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(6,20,48,0.86)_8%,rgba(14,35,82,0.62)_45%,rgba(8,145,178,0.30)_74%,rgba(236,72,153,0.28)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_12%_18%,rgba(56,189,248,0.28),transparent_60%),radial-gradient(620px_280px_at_88%_18%,rgba(244,114,182,0.2),transparent_64%),radial-gradient(760px_320px_at_50%_100%,rgba(16,185,129,0.14),transparent_66%)]" />

        <div className="relative min-h-[520px] px-6 py-12 md:min-h-[580px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <BookOpen className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Fertility learning hub
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Understand your fertility options with confidence
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Explore clear, practical guides inspired by leading fertility education models. Learn IVF basics,
              treatment pathways, consultation prep, and emotional wellbeing strategies in one place.
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
                <span className="relative z-10">Start with a consultation</span>
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
                <span className="relative z-10">Talk to our care team</span>
                <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: CalendarHeart, label: 'Consult prep focused' },
                { icon: Sparkles, label: 'IVF + fertility basics' },
                { icon: CheckCircle2, label: 'Actionable checklists' },
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
            <img src={Guide} alt="Fertility guide reading and learning support" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Build confidence before consultation</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Use this learning path to understand options and ask better questions.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-2xl font-extrabold text-muted-foreground">How to use this library</div>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Read the guides in sequence if you are just starting, or jump directly to your immediate concern.
              Each topic is written to help you understand options before speaking with your clinician.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {guideTracks.map((track, idx) => (
                <div
                  key={track.title}
                  className={`rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    idx === 0
                      ? 'border-sky-200/70 bg-sky-50/60'
                      : idx === 1
                        ? 'border-emerald-200/70 bg-emerald-50/55'
                        : 'border-violet-200/70 bg-violet-50/55'
                  }`}
                >
                  <h3 className="text-sm font-extrabold">{track.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {track.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-2xl font-extrabold text-muted-foreground">Guide library</div>
            <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">Download patient-friendly fertility guides</h2>
          </div>
          <div className="rounded-full border border-border/70 bg-background/45 px-4 py-2 text-xs font-extrabold text-muted-foreground">
            Email-gated for quality follow-up support
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, idx) => (
            <div
              key={g.slug}
              className={`rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                idx % 3 === 0
                  ? 'border-cyan-200/70 bg-cyan-50/55'
                  : idx % 3 === 1
                    ? 'border-rose-200/70 bg-rose-50/55'
                    : 'border-indigo-200/70 bg-indigo-50/55'
              }`}
            >
              <div className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[11px] font-extrabold text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                {g.readingMinutes} min read
              </div>
              <div className="mt-4 text-base font-extrabold">{g.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{g.summary}</div>
              <button
                type="button"
                onClick={() => {
                  setEmail('')
                  setGuideSlug(g.slug)
                  setOpen(true)
                }}
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Download guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <div className="rounded-3xl border border-border/70 bg-background/30 p-5">
            <div className="text-sm font-extrabold text-muted-foreground">Education pillars</div>
            <h3 className="mt-2 text-xl font-extrabold">Tools inspired by top fertility resource centres</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Build confidence with practical patient resources, IVF education topics, and structured support content
              modeled after high-quality fertility education ecosystems.
            </p>

            <div className="mt-5 space-y-3">
              {resourcePillars.map((pillar) => (
                <div key={pillar.title} className="group rounded-2xl border border-border/70 bg-background/45 p-4 transition hover:bg-background/75">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border border-border/70 bg-card/40 p-2">
                      <pillar.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold">{pillar.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{pillar.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border/70 bg-background/30 p-2">
            <img src={Guide1} alt="Patient support and fertility education consultation" className="h-full min-h-[320px] w-full rounded-[20px] object-cover" />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
            <div className="text-sm font-extrabold">Why we gate downloads</div>
            <p className="mt-2 text-sm text-muted-foreground">
              This reduces spam and helps our team provide meaningful follow-up support when patients need clarification.
            </p>
            <Link to="/booking" className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:underline">
              Prefer a consultation instead? Book now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
            <div className="flex items-start gap-2 text-sm font-extrabold">
              <CircleHelp className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              Educational disclaimer
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Guide content supports informed decision-making but does not replace diagnosis or treatment advice from your clinician.
            </p>
          </div>
        </div>
      </section>

      <FaqSection
        backgroundImage={Review}
        title="Fertility guide FAQs"
        subtitle="Quick answers on how to use these educational resources during your treatment journey."
        items={faqItems}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Speak to Care Team', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />

      <GuideGateModal />
    </div>
  )
}

