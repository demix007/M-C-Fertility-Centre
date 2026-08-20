import { Link } from '@tanstack/react-router'
import { ArrowRight, CircleDollarSign } from 'lucide-react'

type ServiceCostSectionProps = {
  heading: string
  priceLabel: string
  body: string
  hash: string
}

export function ServiceCostSection({ heading, priceLabel, body, hash }: ServiceCostSectionProps) {
  return (
    <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-extrabold">
            <CircleDollarSign className="h-4 w-4 text-primary" aria-hidden="true" />
            Transparent pricing
          </div>
          <h2 className="mt-4 text-xl font-extrabold sm:text-2xl">{heading}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{body}</p>
        </div>
        <div className="rounded-3xl border border-border/70 bg-background/45 p-5 lg:col-span-5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">Package from</div>
          <div className="mt-2 text-2xl font-extrabold tracking-tight">{priceLabel}</div>
          <Link
            to="/prices"
            hash={hash}
            className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View full price list and payment plans
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
