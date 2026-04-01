import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { CircleDollarSign, FlaskConical, HeartHandshake, Info, Egg, Dna, BookOpen, Newspaper, Phone, Stethoscope, Menu, X } from 'lucide-react'
// import { ThemeToggle } from '../ThemeToggle'

const nav = [
  { to: '/services', label: 'Treatments', icon: Stethoscope },
  { to: '/ivf', label: 'IVF', icon: FlaskConical },
  { to: '/egg-freezing', label: 'Egg Freezing', icon: Egg },
  { to: '/donor', label: 'Donor', icon: HeartHandshake },
  { to: '/genetic-testing', label: 'Genetic Testing', icon: Dna },
  { to: '/prices', label: 'Prices', icon: CircleDollarSign },
  { to: '/guides', label: 'Guides', icon: BookOpen },
  // { to: '/successes', label: 'Successes', icon: Trophy },
  { to: '/blog', label: 'Blog', icon: Newspaper },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Phone },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <Link
            to="/"
            className="inline-flex items-center gap-3 no-underline rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileOpen(false)}
          >
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-md ring-1 ring-border/50" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-foreground md:text-base">
                M&C Fertility Center
              </div>
              <div className="hidden text-xs text-muted-foreground md:block md:text-sm">Ultra-modern IVF care in Nigeria</div>
            </div>
          </Link>
        </div>

        <nav className="hidden min-w-0 flex-1 xl:block" aria-label="Primary navigation">
          <div className="flex w-max min-w-full items-center justify-center gap-x-3 gap-y-2 px-2 sm:gap-x-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to as any}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-2 py-2 text-[15px] font-bold text-foreground/90 no-underline transition hover:bg-card/60 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                activeOptions={{ exact: false }}
                activeProps={{
                  className: 'bg-primary/15 text-primary ring-1 ring-primary/30',
                }}
              >
                <item.icon className="h-4 w-4 text-current" aria-hidden="true" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden min-w-0 items-center gap-2 xl:flex">
          <Link
            to="/booking"
            className="rounded-full bg-primary px-4 py-2 text-sm font-extrabold text-primary-foreground no-underline shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book Consultation
          </Link>
          {/* <ThemeToggle /> */}
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <Link
            to="/booking"
            className="rounded-full bg-primary px-3 py-2 text-xs font-extrabold text-primary-foreground no-underline shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/40 text-foreground transition hover:bg-background/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-primary-nav"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-primary-nav" className="border-t border-border/70 bg-background/95 px-4 py-3 xl:hidden">
          <nav className="grid grid-cols-1 gap-2" aria-label="Mobile primary navigation">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to as any}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/30 px-3 py-3 text-sm font-bold text-foreground/90 no-underline transition hover:bg-card/60 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                activeOptions={{ exact: false }}
                activeProps={{
                  className: 'bg-primary/15 text-primary ring-1 ring-primary/30',
                }}
              >
                <item.icon className="h-4 w-4 text-current" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

