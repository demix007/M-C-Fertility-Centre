import { Link } from '@tanstack/react-router'
import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { primaryNav, serviceNavLinks, whoWeAreLinks } from '../../lib/data/navigation'
import { clinicInfo } from '../../lib/clinicInfo'

type OpenPanel = 'who' | 'services' | null

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null)
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const whoMenuId = useId()
  const servicesMenuId = useId()

  const forceScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }

  const handleCloseMenus = () => {
    setMobileOpen(false)
    setOpenPanel(null)
    setMobileWhoOpen(false)
    setMobileServicesOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleCloseMenus()
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenPanel(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('pointerdown', handlePointerDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <Link
            to="/"
            resetScroll
            className="inline-flex items-center gap-3 rounded-xl no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => {
              handleCloseMenus()
              forceScrollTop()
            }}
          >
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-md ring-1 ring-border/50" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-foreground md:text-base">
                M&C Fertility Centre
              </div>
              <div className="hidden text-xs text-muted-foreground xl:block">Compassionate IVF care in Nigeria</div>
            </div>
          </Link>
        </div>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary navigation">
          <div
            className="relative"
            onMouseEnter={() => setOpenPanel('who')}
            onMouseLeave={() => setOpenPanel(null)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-bold text-foreground/90 transition hover:bg-card/60 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={openPanel === 'who'}
              aria-controls={whoMenuId}
              onClick={() => setOpenPanel((current) => (current === 'who' ? null : 'who'))}
            >
              Who We Are
              <ChevronDown className={`h-4 w-4 transition ${openPanel === 'who' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {openPanel === 'who' ? (
              <div
                id={whoMenuId}
                className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3"
              >
                <div className="rounded-2xl border border-border/70 bg-background/95 p-3 shadow-lg backdrop-blur">
                  <div className="px-2 pb-2 text-[11px] font-extrabold uppercase tracking-wide text-muted-foreground">
                    Get to know us
                  </div>
                  {whoWeAreLinks.map((item) => (
                    <Link
                      key={item.hash}
                      to={item.to}
                      hash={item.hash}
                      resetScroll={false}
                      className="block rounded-xl px-3 py-2.5 no-underline transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={() => {
                        handleCloseMenus()
                      }}
                    >
                      <div className="text-sm font-extrabold text-foreground">{item.label}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenPanel('services')}
            onMouseLeave={() => setOpenPanel(null)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-bold text-foreground/90 transition hover:bg-card/60 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={openPanel === 'services'}
              aria-controls={servicesMenuId}
              onClick={() => setOpenPanel((current) => (current === 'services' ? null : 'services'))}
            >
              Our Services
              <ChevronDown className={`h-4 w-4 transition ${openPanel === 'services' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {openPanel === 'services' ? (
              <div
                id={servicesMenuId}
                className="absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-3"
              >
                <div className="rounded-2xl border border-border/70 bg-background/95 p-3 shadow-lg backdrop-blur">
                  <div className="px-2 pb-2 text-[11px] font-extrabold uppercase tracking-wide text-muted-foreground">
                    What we can do for you
                  </div>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                    {serviceNavLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        resetScroll
                        className="block rounded-xl px-3 py-2.5 no-underline transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => {
                          handleCloseMenus()
                          forceScrollTop()
                        }}
                      >
                        <div className="text-sm font-extrabold text-foreground">{item.label}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              resetScroll
              onClick={forceScrollTop}
              className="inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-bold text-foreground/90 no-underline transition hover:bg-card/60 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              activeOptions={{ exact: false }}
              activeProps={{
                className: 'bg-primary/15 text-primary ring-1 ring-primary/30',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href={`tel:${clinicInfo.phoneHref}`}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold text-foreground/90 no-underline hover:text-primary xl:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {clinicInfo.phone}
          </a>
          <Link
            to="/booking"
            className="rounded-full bg-primary px-4 py-2 text-sm font-extrabold text-primary-foreground no-underline shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book Consultation
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/booking"
            className="rounded-full bg-primary px-3 py-2 text-xs font-extrabold text-primary-foreground no-underline shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
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
        <div id="mobile-primary-nav" className="border-t border-border/70 bg-background/95 px-4 py-3 lg:hidden">
          <nav className="grid grid-cols-1 gap-2" aria-label="Mobile primary navigation">
            <div className="rounded-xl border border-border/70 bg-card/30">
              <button
                type="button"
                onClick={() => setMobileWhoOpen((value) => !value)}
                className="flex w-full items-center justify-between px-3 py-3 text-sm font-bold text-foreground"
                aria-expanded={mobileWhoOpen}
              >
                Who We Are
                <ChevronDown className={`h-4 w-4 transition ${mobileWhoOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {mobileWhoOpen
                ? whoWeAreLinks.map((item) => (
                    <Link
                      key={item.hash}
                      to={item.to}
                      hash={item.hash}
                      resetScroll={false}
                      onClick={handleCloseMenus}
                      className="block border-t border-border/60 px-3 py-3 text-sm font-semibold text-foreground/90 no-underline"
                    >
                      {item.label}
                    </Link>
                  ))
                : null}
            </div>

            <div className="rounded-xl border border-border/70 bg-card/30">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((value) => !value)}
                className="flex w-full items-center justify-between px-3 py-3 text-sm font-bold text-foreground"
                aria-expanded={mobileServicesOpen}
              >
                Our Services
                <ChevronDown className={`h-4 w-4 transition ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {mobileServicesOpen
                ? serviceNavLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      resetScroll
                      onClick={() => {
                        handleCloseMenus()
                        forceScrollTop()
                      }}
                      className="block border-t border-border/60 px-3 py-3 text-sm font-semibold text-foreground/90 no-underline"
                    >
                      {item.label}
                    </Link>
                  ))
                : null}
            </div>

            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                resetScroll
                onClick={() => {
                  handleCloseMenus()
                  forceScrollTop()
                }}
                className="inline-flex items-center rounded-xl border border-border/70 bg-card/30 px-3 py-3 text-sm font-bold text-foreground/90 no-underline"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${clinicInfo.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/30 px-3 py-3 text-sm font-bold text-foreground/90 no-underline"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {clinicInfo.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
