import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { cn } from '../../lib/cn'

export type FaqItem = {
  q: string
  a: string
}

export type FaqCta = {
  to: string
  label: string
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
}

type FaqSectionProps = {
  backgroundImage: string
  title: string
  subtitle: string
  items: ReadonlyArray<FaqItem>
  ctas?: ReadonlyArray<FaqCta>
  className?: string
  overlayClassName?: string
}

export function FaqSection({
  backgroundImage,
  title,
  subtitle,
  items,
  ctas = [],
  className,
  overlayClassName = 'bg-background/65',
}: FaqSectionProps) {
  const reducedMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-3xl border-y border-border/70 bg-card/30 bg-cover bg-center py-16 sm:py-20',
        className,
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div aria-hidden="true" className={cn('absolute inset-0', overlayClassName)} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl space-y-2"
        >
          {items.map((faq, i) => {
            const open = openFaq === i
            return (
              <motion.div
                key={faq.q}
                initial={
                  reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : i * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className={cn(
                    'flex w-full items-center justify-between rounded-lg border px-4 py-4 text-left transition-colors',
                    open
                      ? 'border-primary/60 bg-primary/10 text-foreground'
                      : 'border-border/70 bg-background/30 hover:bg-card/40 text-foreground',
                  )}
                  aria-expanded={open}
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted-foreground transition-transform',
                      open && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-b-lg border border-t-0 border-border/70 bg-background/40 px-4 py-4 text-sm text-muted-foreground">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {ctas.length > 0 && (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            {ctas.map((cta) => {
              const variant = cta.variant ?? 'secondary'
              return (
                <Link
                  key={cta.to + cta.label}
                  to={cta.to as any}
                  className={cn(
                    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-extrabold shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    variant === 'primary'
                      ? 'bg-primary text-primary-foreground hover:-translate-y-0.5'
                      : 'border border-border bg-card/40 text-foreground hover:bg-card/70',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-0 -translate-x-full bg-gradient-to-r transition-transform duration-500 ease-out group-hover:translate-x-full',
                      variant === 'primary'
                        ? 'from-cyan-400/0 via-cyan-300/35 to-cyan-400/0'
                        : 'from-primary/0 via-primary/20 to-primary/0',
                    )}
                  />
                  <span className="relative z-10">{cta.label}</span>
                  {cta.icon ? <span className="relative z-10">{cta.icon}</span> : null}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

