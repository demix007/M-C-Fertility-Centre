import { createFileRoute, Link } from '@tanstack/react-router'
import { guides } from '../../lib/data/guides'
import { useGuideGateStore } from '../../state/guideGateStore'
import { useSeo } from '../../lib/seo'
import { GuideGateModal } from '../../components/guides/GuideGateModal'

export const Route = createFileRoute('/guides/$slug')({
  component: GuideDetailPage,
})

function GuideDetailPage() {
  const { slug } = Route.useParams()
  const guide = guides.find((g) => g.slug === slug)

  useSeo({
    title: guide ? `${guide.title} | Fertility Guides` : 'Fertility Guides | M&C Fertility Centre',
    description: guide?.summary,
  })

  const setEmail = useGuideGateStore((s) => s.setEmail)
  const setGuideSlug = useGuideGateStore((s) => s.setGuideSlug)
  const setOpen = useGuideGateStore((s) => s.setOpen)

  if (!guide) {
    return (
      <div className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="text-sm font-extrabold text-destructive">Guide not found.</div>
        <Link to="/guides" className="mt-4 inline-flex text-sm font-extrabold text-primary hover:underline">
          Back to guides
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="text-xs font-extrabold text-muted-foreground">Guide</div>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">{guide.title}</h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{guide.summary}</p>

        <div className="mt-6 rounded-3xl border border-border/70 bg-background/35 p-5">
          <div className="text-sm font-extrabold">What you will get</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Clear, calm explanations of key steps and common terms.</li>
            <li>Practical preparation tips to reduce appointment anxiety.</li>
            <li>Responsible medical notes (no guarantees, outcomes vary).</li>
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => {
              setEmail('')
              setGuideSlug(guide.slug)
              setOpen(true)
            }}
            className="rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Download (email gate)
          </button>

          <Link
            to="/booking"
            className="rounded-full border border-border bg-background/30 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-background/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book a consultation instead
          </Link>
        </div>
      </section>

      <GuideGateModal />
    </div>
  )
}

