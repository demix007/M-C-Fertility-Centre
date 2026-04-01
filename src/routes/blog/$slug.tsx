import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../api/client'
import { useSeo } from '../../lib/seo'
import { blogPosts } from '../../lib/data/blogPosts'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/Accordion'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const res = await api.get(`/api/blog/${slug}`)
      return res.data as { post: (typeof blogPosts)[number] }
    },
  })

  const post = data?.post

  useSeo({
    title: post ? `${post.title} | M&C Fertility Centre` : 'IVF Blog | M&C Fertility Centre',
    description: post?.excerpt,
  })

  const related = post
    ? post.relatedSlugs
        .map((s) => blogPosts.find((p) => p.slug === s))
        .filter((p): p is (typeof blogPosts)[number] => Boolean(p))
    : []

  if (isLoading || !post) {
    return (
      <div className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="h-6 w-2/3 animate-pulse rounded bg-background/30" />
        <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-background/30" />
        <div className="mt-6 h-36 animate-pulse rounded-3xl border border-border/70 bg-background/25" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <article className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-extrabold text-muted-foreground">{post.category}</div>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">{post.title}</h2>
          </div>
          <div className="text-xs font-extrabold text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString()} • {post.readingMinutes} min read
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-border/70 bg-background/35 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-extrabold">{post.author.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{post.author.credential}</div>
          </div>
          <Link
            to="/booking"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book consultation
          </Link>
        </div>

        <div className="mt-6 space-y-5 text-sm text-muted-foreground sm:text-base">
          {post.body.map((b, idx) =>
            b.type === 'h' ? (
              <h3 key={idx} className="text-xl font-extrabold text-foreground">
                {b.text}
              </h3>
            ) : (
              <p key={idx} className="leading-relaxed">
                {b.text}
              </p>
            ),
          )}
        </div>

        {post.faqs?.length ? (
          <div className="mt-8 rounded-3xl border border-border/70 bg-background/35 p-5">
            <div className="text-sm font-extrabold">FAQs</div>
            <div className="mt-3 rounded-3xl border border-border/70 bg-card/30 p-2">
              <Accordion type="single" collapsible className="w-full">
                {post.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ) : null}

        <div className="mt-8 rounded-3xl border border-border/70 bg-card/30 p-5">
          <div className="text-sm font-extrabold">Next step</div>
          <p className="mt-2 text-sm text-muted-foreground">
            If you want personal clarity, book a consultation. We’ll review your situation and outline practical next steps.
          </p>
          <Link
            to="/booking"
            className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book Consultation
          </Link>
        </div>
      </article>

      {related.length ? (
        <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
          <div className="text-lg font-extrabold">Related posts</div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug } as any}
                className="rounded-3xl border border-border/70 bg-background/25 p-5 transition hover:-translate-y-0.5 hover:bg-background/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="text-xs font-extrabold text-muted-foreground">{p.category}</div>
                <div className="mt-2 text-sm font-extrabold">{p.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{p.excerpt}</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}

