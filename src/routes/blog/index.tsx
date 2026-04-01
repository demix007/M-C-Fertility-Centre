import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../api/client'
import { useSeo } from '../../lib/seo'
import { ArrowRight, BookOpen, CalendarHeart, Clock3, HeartPulse, Phone, Sparkles } from 'lucide-react'
import Review from '../../assets/review.webp'
import FollowUp from '../../assets/follow_up.webp'
import Fertility from '../../assets/fertility.webp'
import { FaqSection } from '../../components/sections/FaqSection'
import BlogHero from '../../assets/blog_1.webp'
import BlogHero640 from '../../assets/blog_1-640.webp'
import BlogHero1024 from '../../assets/blog_1-1024.webp'
import BlogHero1440 from '../../assets/blog_1-1440.webp'

const categories = ['Success Stories', 'Science', 'Wellness', 'Financing'] as const

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
})

function BlogIndexPage() {
  const blogPillars = [
    {
      title: 'Fertility science made simple',
      desc: 'Understand hormones, ovarian reserve, embryo quality, and common diagnostics in patient-friendly language.',
      image: Fertility,
    },
    {
      title: 'Treatment options explained',
      desc: 'Learn differences between IVF pathways, IUI, egg freezing, donor options, and genetic testing support.',
      image: Review,
    },
    {
      title: 'Wellbeing and real-life support',
      desc: 'Explore stress management, relationship communication, and lifestyle guidance through treatment seasons.',
      image: FollowUp,
    },
  ] as const

  const faqItems = [
    {
      q: 'Are blog articles a replacement for medical consultation?',
      a: 'No. Articles are educational and designed to improve understanding. Your diagnosis and treatment plan should always come from your fertility clinician.',
    },
    {
      q: 'How often is the blog updated?',
      a: 'We update as new educational topics and clinic resources become available, including fertility science updates, treatment explainers, and wellbeing content.',
    },
    {
      q: 'Which category should I start with if I am new?',
      a: 'Start with Science and Wellness for foundations, then move to Financing and Success Stories for planning and perspective.',
    },
    {
      q: 'Can I speak with someone after reading an article?',
      a: 'Yes. You can book a consultation or request a callback for personalized guidance based on your history and goals.',
    },
  ] as const

  useSeo({
    title: 'IVF Blog | M&C Fertility Centre',
    description: 'Educational IVF blog in Nigeria. Science, wellness, financing, and success story guidance with clear next steps.',
  })

  const [category, setCategory] = useState<(typeof categories)[number] | 'All'>('All')

  const queryKey = useMemo(() => ['blog', category], [category])

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: async () => {
      const res = await api.get('/api/blog', { params: category === 'All' ? {} : { category } })
      return res.data as { posts: Array<any> }
    },
  })

  const posts = data?.posts ?? []
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img
          src={BlogHero}
          srcSet={`${BlogHero640} 640w, ${BlogHero1024} 1024w, ${BlogHero1440} 1440w`}
          sizes="100vw"
          alt="IVF blog education and fertility wellbeing resources"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(7,22,50,0.86)_8%,rgba(14,35,82,0.62)_45%,rgba(2,132,199,0.34)_74%,rgba(236,72,153,0.28)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_300px_at_12%_14%,rgba(56,189,248,0.28),transparent_60%),radial-gradient(600px_260px_at_88%_18%,rgba(244,114,182,0.22),transparent_64%),radial-gradient(760px_320px_at_50%_100%,rgba(16,185,129,0.16),transparent_68%)]" />

        <div className="relative min-h-[520px] px-6 py-12 md:min-h-[580px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <BookOpen className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              IVF & fertility education blog
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Clear fertility education for every stage of your journey
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Explore treatment explainers, science updates, wellness support, and patient-focused guidance inspired by
              leading fertility education hubs.
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
                <span className="relative z-10">Talk to our team</span>
                <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Sparkles, label: 'Fertility science' },
                { icon: CalendarHeart, label: 'Treatment pathways' },
                { icon: HeartPulse, label: 'Wellbeing support' },
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
        <div className="text-2xl font-extrabold text-muted-foreground">Explore by topic</div>
        <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">Get informed. Stay informed.</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Explore articles on women and men fertility health, sexual wellbeing, treatment options, and emotional care.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {['Women Health', 'Men Health', 'Sexual Life', 'IVF Education', 'Overall Wellbeing'].map((tag) => (
            <span key={tag} className="rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs font-extrabold text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setCategory('All')}
            className={`rounded-full border px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              category === 'All'
                ? 'border-primary/60 bg-primary/15'
                : 'border-border/70 bg-background/30 hover:bg-background/55'
            }`}
            aria-pressed={category === 'All'}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                category === c ? 'border-primary/60 bg-primary/15' : 'border-border/70 bg-background/30 hover:bg-background/55'
              }`}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-5">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-44 animate-pulse rounded-3xl border border-border/70 bg-background/25" />
              ))
            : null}

          {!isLoading && featuredPost ? (
            <Link
              key={featuredPost.id}
              to="/blog/$slug"
              params={{ slug: featuredPost.slug } as any}
              className="group block overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-r from-sky-50/80 via-background/60 to-rose-50/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-extrabold text-primary">Featured article</span>
                <span className="rounded-full border border-border/70 bg-background/55 px-3 py-1 text-[11px] font-extrabold text-muted-foreground">
                  {featuredPost.category}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold sm:text-xl">{featuredPost.title}</h3>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{featuredPost.excerpt}</p>
              <div className="mt-4 flex items-center justify-between gap-3 text-xs font-extrabold text-muted-foreground">
                <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  {featuredPost.readingMinutes} min read
                </span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-primary">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
            </Link>
          ) : null}

          {!isLoading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((p, idx) => (
                <Link
                  key={p.id}
                  to="/blog/$slug"
                  params={{ slug: p.slug } as any}
                  className={`rounded-3xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    idx % 3 === 0
                      ? 'border-sky-200/70 bg-sky-50/50 hover:bg-sky-50/80'
                      : idx % 3 === 1
                        ? 'border-emerald-200/70 bg-emerald-50/50 hover:bg-emerald-50/80'
                        : 'border-violet-200/70 bg-violet-50/50 hover:bg-violet-50/80'
                  }`}
                >
                  <div className="inline-flex rounded-full border border-border/70 bg-background/55 px-3 py-1 text-[11px] font-extrabold text-muted-foreground">
                    {p.category}
                  </div>
                  <div className="mt-2 text-sm font-extrabold">{p.title}</div>
                  <div className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</div>
                  <div className="mt-4 flex items-center justify-between text-xs font-extrabold text-muted-foreground">
                    <span>{new Date(p.publishedAt).toLocaleDateString()}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                      {p.readingMinutes} min read
                    </span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-primary">
                    Read more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          ) : null}

          {!isLoading && posts.length === 0 ? (
            <div className="rounded-3xl border border-border/70 bg-background/35 p-6 text-sm text-muted-foreground">
              No posts found for this category yet. Try another filter.
            </div>
          ) : null}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="text-2xl font-extrabold text-muted-foreground">Learning pillars</div>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Educational content areas shaped by common themes seen across high-quality fertility blogs.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {blogPillars.map((pillar, idx) => (
            <article
              key={pillar.title}
              className={`overflow-hidden rounded-3xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                idx === 0
                  ? 'border-cyan-200/70 bg-cyan-50/55'
                  : idx === 1
                    ? 'border-rose-200/70 bg-rose-50/55'
                    : 'border-indigo-200/70 bg-indigo-50/55'
              }`}
            >
              <img src={pillar.image} alt={pillar.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-sm font-extrabold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="text-lg font-extrabold">Want personal clarity?</div>
        <p className="mt-2 text-sm text-muted-foreground">
          If your situation feels overwhelming, book a consultation. We help you understand what’s next and what to prepare.
        </p>
        <Link
          to="/booking"
          className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Book Consultation
        </Link>
      </section>

      <FaqSection
        backgroundImage={Review}
        title="Blog FAQs"
        subtitle="Quick answers about using our blog as part of your fertility education and planning."
        items={faqItems}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Talk to Care Team', variant: 'secondary', icon: <Phone className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}

