import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { api } from '../api/client'
import { useSeo } from '../lib/seo'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarHeart, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Sparkles } from 'lucide-react'
import BookingHero from '../assets/booking_hero_1.jpeg'
import Booking2 from '../assets/booking_4.jpeg'

type BookingServiceId =
  | 'new-patient'
  | 'ivf-consult'
  | 'egg-freezing-consult'
  | 'donor-consult'
  | 'genetic-testing-counseling'

const bookingServices: Array<{ id: BookingServiceId; label: string; blurb: string }> = [
  { id: 'new-patient', label: 'New Patient', blurb: 'Get started with baseline guidance and next steps.' },
  { id: 'ivf-consult', label: 'IVF Consult', blurb: 'Discuss IVF pathways and what you can prepare next.' },
  { id: 'egg-freezing-consult', label: 'Egg Freezing Consult', blurb: 'Eligibility, timelines, and storage notes.' },
  { id: 'donor-consult', label: 'Donor Consultation', blurb: 'Privacy-first matching and counseling-led steps.' },
  { id: 'genetic-testing-counseling', label: 'Genetic Testing Counseling', blurb: 'PGT-A / PGT-M explanations and responsible interpretation.' },
]

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

function toIsoDate(d: Date) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

function buildIcs(params: { title: string; date: string; time: string; description?: string }) {
  // MVP note: DTSTART uses local time interpretation.
  const [y, m, d] = params.date.split('-').map((x) => Number(x))
  const [hh, mm] = params.time.split(':').map((x) => Number(x))

  const start = `${y}${pad2(m)}${pad2(d)}T${pad2(hh)}${pad2(mm)}00`
  const endDate = new Date(y, m - 1, d, hh, mm + 30)
  const end = `${endDate.getFullYear()}${pad2(endDate.getMonth() + 1)}${pad2(endDate.getDate())}T${pad2(endDate.getHours())}${pad2(endDate.getMinutes())}00`

  const uid = `${Math.random().toString(16).slice(2)}@mcfertility.ng`
  const dtStamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z')

  const escapeText = (s: string) =>
    s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//M&C Fertility Centre//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeText(params.title)}`,
    params.description ? `DESCRIPTION:${escapeText(params.description)}` : '',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean)

  return lines.join('\r\n')
}

export const Route = createFileRoute('/booking')({
  component: BookingPage,
})

function BookingPage() {
  const demoMode = true

  useSeo({
    title: 'Booking | M&C Fertility Centre',
    description: 'Multi-step booking form for IVF consultations in Nigeria. Secure lead capture with clear consents and accessible validation.',
  })

  const today = useMemo(() => {
    const d = new Date()
    // Default to tomorrow to avoid same-day unavailability.
    d.setDate(d.getDate() + 1)
    const yyyy = d.getFullYear()
    const mm = pad2(d.getMonth() + 1)
    const dd = pad2(d.getDate())
    return `${yyyy}-${mm}-${dd}`
  }, [])
  const nextSevenDays = useMemo(() => {
    const [year, month, day] = today.split('-').map((n) => Number(n))
    const start = new Date(year, month - 1, day)
    return Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(start)
      d.setDate(start.getDate() + i)
      const value = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
      return {
        value,
        label: d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }),
      }
    })
  }, [today])
  const fallbackSlots = useMemo(() => ['08:30', '09:30', '10:30', '11:30', '13:00', '14:00', '15:00', '16:00'], [])

  const [step, setStep] = useState<0 | 1 | 2 | 3>(0)
  const [serviceId, setServiceId] = useState<BookingServiceId>('new-patient')
  const [date, setDate] = useState(today)
  const [pickerMonth, setPickerMonth] = useState(today.slice(0, 7))
  const [slot, setSlot] = useState<string | null>(null)

  const [patient, setPatient] = useState({
    fullName: '',
    email: '',
    phone: '',
    insurance: '',
    consent: false,
    notes: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [topError, setTopError] = useState<string | null>(null)

  const slotsQuery = useQuery({
    queryKey: ['slots', serviceId, date],
    queryFn: async () => {
      if (demoMode) {
        return { slots: [] as string[], lastUpdatedAt: new Date().toISOString(), serviceId, date }
      }
      const res = await api.get('/api/slots', { params: { serviceId, date } })
      return res.data as { slots: string[]; lastUpdatedAt: string; serviceId: string; date: string }
    },
    enabled: !demoMode && step >= 1,
  })

  const slots = slotsQuery.data?.slots ?? []
  const displaySlots = slots.length > 0 ? slots : fallbackSlots
  const usingFallbackSlots = slots.length === 0 && !slotsQuery.isLoading
  const calendarDays = useMemo(() => {
    const [y, m] = pickerMonth.split('-').map(Number)
    const firstOfMonth = new Date(y, m - 1, 1)
    const startWeekday = firstOfMonth.getDay()
    const daysInMonth = new Date(y, m, 0).getDate()
    return Array.from({ length: 42 }).map((_, idx) => {
      const dayNumber = idx - startWeekday + 1
      if (dayNumber < 1 || dayNumber > daysInMonth) return null
      const dayDate = new Date(y, m - 1, dayNumber)
      return {
        value: toIsoDate(dayDate),
        dayNumber,
      }
    })
  }, [pickerMonth])

  const bookingMutation = useMutation({
    mutationFn: async () => {
      if (demoMode) {
        return { ok: true as const, reference: `MC-DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`, status: 'demo-confirmed' }
      }
      const res = await api.post('/api/booking', {
        serviceId,
        slot,
        date,
        fullName: patient.fullName,
        email: patient.email,
        phone: patient.phone,
        notes: patient.notes,
        consent: patient.consent,
      })
      return res.data as { ok: true; reference: string; status: string }
    },
    onError: (e: any) => {
      const msg = e?.response?.data ? String(e.response.data) : 'Unable to confirm booking right now. Please try again.'
      setTopError(msg)
    },
  })

  const [confirmed, setConfirmed] = useState<null | { reference: string }>(null)

  const stepsUi = [
    { n: 1, label: 'Service' },
    { n: 2, label: 'Date & Slot' },
    { n: 3, label: 'Your details' },
    { n: 4, label: 'Confirmation' },
  ] as const

  function validateForCurrentStep() {
    const next: Record<string, string> = {}
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patient.email)
    if (step === 0) {
      if (!serviceId) next.serviceId = 'Select a service.'
    }
    if (step === 1) {
      if (!date) next.date = 'Select a date.'
      if (!slot) next.slot = 'Select a time slot.'
    }
    if (step === 2) {
      if (!patient.fullName.trim()) next.fullName = 'Full name is required.'
      if (!patient.email.trim()) next.email = 'Email is required.'
      else if (!emailOk) next.email = 'Enter a valid email address.'
      if (!patient.phone.trim()) next.phone = 'Phone is required.'
      if (patient.consent !== true) next.consent = 'Consent is required.'
    }
    return next
  }

  function goNext() {
    setTopError(null)
    const v = validateForCurrentStep()
    setErrors(v)
    if (Object.keys(v).length > 0) {
      setTopError('Please fix the highlighted fields.')
      return
    }
    setStep((s) => (s === 2 ? 3 : ((s + 1) as any)))
  }

  if (confirmed) {
    const ics = buildIcs({
      title: 'M&C Fertility Centre Consultation',
      date,
      time: slot ?? '10:00',
      description: `Reference: ${confirmed.reference} • Service: ${serviceId}`,
    })
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    return (
      <div className="space-y-10">
        <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
          <div className="text-xs font-extrabold text-muted-foreground">Booking confirmation</div>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">You’re booked</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Your appointment is confirmed. Keep your reference number for follow-up.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-sky-200/70 bg-sky-50/55 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-xs font-extrabold text-muted-foreground">Reference</div>
              <div className="mt-2 text-xl font-extrabold">{confirmed.reference}</div>
            </div>
            <div className="rounded-3xl border border-emerald-200/70 bg-emerald-50/55 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-xs font-extrabold text-muted-foreground">Date</div>
              <div className="mt-2 text-xl font-extrabold">{new Date(date).toLocaleDateString()}</div>
            </div>
            <div className="rounded-3xl border border-violet-200/70 bg-violet-50/55 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-xs font-extrabold text-muted-foreground">Time</div>
              <div className="mt-2 text-xl font-extrabold">{slot}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={url}
              download="mcfertility_appointment.ics"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Add to Calendar (ICS)
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <Link
              to="/successes"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/30 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-background/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Success Rates
            </Link>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            Note: outcomes vary. This booking confirms a consultation, not treatment guarantees.
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img src={BookingHero} alt="Book a fertility consultation at M&C Fertility Centre" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(7,22,50,0.86)_8%,rgba(14,35,82,0.62)_45%,rgba(2,132,199,0.34)_74%,rgba(236,72,153,0.28)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_300px_at_12%_14%,rgba(56,189,248,0.28),transparent_60%),radial-gradient(600px_260px_at_88%_18%,rgba(244,114,182,0.22),transparent_64%),radial-gradient(760px_320px_at_50%_100%,rgba(16,185,129,0.16),transparent_68%)]" />

        <div className="relative min-h-[460px] px-6 py-12 md:min-h-[520px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <CalendarHeart className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Booking
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Book your fertility consultation in a few guided steps
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Select your service, choose an available time, and submit your details with clear consent and transparent follow-up.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Sparkles, label: 'Simple 4-step flow' },
                { icon: Clock3, label: 'Live slot checking' },
                { icon: CheckCircle2, label: 'Instant confirmation' },
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

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="text-xs font-extrabold text-muted-foreground">Booking</div>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Book a consultation</h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          A calm, guided booking flow with accessible validation and clear consent. (MVP: lead capture + appointment confirmation.)
        </p>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {stepsUi.map((s) => {
              const active = step === (s.n - 1) || (step === 3 && s.n === 4)
              const done = step > (s.n - 1)
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: s.n * 0.04 }}
                  className={`rounded-3xl border border-border/70 bg-background/25 p-4 transition ${
                    active ? 'border-primary/60 bg-primary/10 shadow-sm' : 'hover:bg-background/40'
                  }`}
                  aria-current={active ? 'step' : undefined}
                >
                  <div className="text-xs font-extrabold text-muted-foreground">
                    Step {s.n} {done ? '✓' : ''}
                  </div>
                  <div className="mt-1 text-sm font-extrabold">{s.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {topError ? (
          <div role="alert" aria-live="assertive" className="mt-4 rounded-3xl border border-destructive bg-transparent p-4 text-sm font-extrabold text-destructive">
            {topError}
          </div>
        ) : null}

        <div className="mt-6">
          {step === 0 ? (
            <div className="space-y-5">
              <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                <div className="text-sm font-extrabold">Choose a service</div>
                <div className="mt-3 space-y-3">
                  {bookingServices.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceId(s.id)}
                      className={`w-full rounded-3xl border px-4 py-4 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        serviceId === s.id
                          ? 'border-primary/60 bg-primary/15 shadow-sm'
                          : 'border-border/70 bg-card/30 hover:-translate-y-0.5 hover:bg-card/60 hover:shadow-sm'
                      }`}
                      aria-pressed={serviceId === s.id}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-extrabold">{s.label}</div>
                          <div className="mt-1 text-sm text-muted-foreground">{s.blurb}</div>
                        </div>
                        <div className="rounded-full border border-border bg-background/30 px-3 py-1 text-xs font-extrabold text-muted-foreground">
                          {serviceId === s.id ? 'Selected' : 'Select'}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                {errors.serviceId ? <div className="mt-2 text-sm font-extrabold text-destructive">{errors.serviceId}</div> : null}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={goNext}
                  className="group rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="inline-flex items-center gap-1">Continue <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                </button>
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="space-y-5">
              <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                <div className="text-sm font-extrabold">Pick a date</div>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="rounded-3xl border border-border/70 bg-card/30 p-4 text-sm text-muted-foreground">
                    Slots last updated: {slotsQuery.data?.lastUpdatedAt ? new Date(slotsQuery.data.lastUpdatedAt).toLocaleString() : '—'}
                  </div>
                </div>
                <div className="mt-4 rounded-3xl border border-border/70 bg-card/30 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        const [y, m] = pickerMonth.split('-').map(Number)
                        const prev = new Date(y, m - 2, 1)
                        setPickerMonth(`${prev.getFullYear()}-${pad2(prev.getMonth() + 1)}`)
                      }}
                      className="rounded-full border border-border bg-background/40 p-2 transition hover:bg-background/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <div className="text-sm font-extrabold">
                      {new Date(`${pickerMonth}-01`).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const [y, m] = pickerMonth.split('-').map(Number)
                        const next = new Date(y, m, 1)
                        setPickerMonth(`${next.getFullYear()}-${pad2(next.getMonth() + 1)}`)
                      }}
                      className="rounded-full border border-border bg-background/40 p-2 transition hover:bg-background/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Next month"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-extrabold text-muted-foreground">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                      <div key={d}>{d}</div>
                    ))}
                  </div>
                  <div className="mt-2 grid grid-cols-7 gap-2">
                    {calendarDays.map((d, idx) =>
                      d ? (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => {
                            setDate(d.value)
                            setSlot(null)
                          }}
                          className={`h-10 rounded-xl border text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            date === d.value
                              ? 'border-primary/60 bg-primary/15'
                              : 'border-border/70 bg-background/35 hover:bg-background/60'
                          }`}
                          aria-pressed={date === d.value}
                        >
                          {d.dayNumber}
                        </button>
                      ) : (
                        <div key={`empty-${idx}`} />
                      ),
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xs font-extrabold text-muted-foreground">Quick pick</div>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
                    {nextSevenDays.map((d) => {
                      const selected = date === d.value
                      return (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => {
                            setDate(d.value)
                            setPickerMonth(d.value.slice(0, 7))
                            setSlot(null)
                          }}
                          className={`rounded-2xl border px-3 py-2 text-xs font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            selected
                              ? 'border-primary/60 bg-primary/15'
                              : 'border-border/70 bg-card/30 hover:bg-card/60'
                          }`}
                          aria-pressed={selected}
                        >
                          {d.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
                {errors.date ? <div className="mt-2 text-sm font-extrabold text-destructive">{errors.date}</div> : null}
              </div>

              <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                <div className="text-sm font-extrabold">Available time slots</div>
                {slotsQuery.isLoading ? (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-12 animate-pulse rounded-3xl border border-border bg-card/30" />
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {displaySlots.map((t) => {
                      const selected = slot === t
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSlot(t)}
                          className={`rounded-3xl border px-4 py-3 text-sm font-extrabold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            selected
                              ? 'border-primary/60 bg-primary/15 shadow-sm'
                              : 'border-border/70 bg-card/30 hover:-translate-y-0.5 hover:bg-card/60 hover:shadow-sm'
                          }`}
                          aria-pressed={selected}
                        >
                          {t}
                        </button>
                      )
                    })}
                  </div>
                )}
                {usingFallbackSlots ? (
                  <div className="mt-3 rounded-2xl border border-border/70 bg-card/30 px-3 py-2 text-xs font-extrabold text-muted-foreground">
                    Showing suggested consultation windows for this date. Final confirmation is provided after submission.
                  </div>
                ) : null}
                {errors.slot ? <div className="mt-2 text-sm font-extrabold text-destructive">{errors.slot}</div> : null}
              </div>

              <div className="flex items-center justify-between">
                <button type="button" onClick={() => setStep(0)} className="rounded-full border border-border bg-card/30 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="group rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="inline-flex items-center gap-1">Continue <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                </button>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                  <label className="block text-sm font-extrabold">Full name</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={patient.fullName}
                    onChange={(e) => setPatient((p) => ({ ...p, fullName: e.target.value }))}
                    aria-invalid={Boolean(errors.fullName)}
                    autoComplete="name"
                  />
                  {errors.fullName ? <div className="mt-1 text-sm font-extrabold text-destructive">{errors.fullName}</div> : null}
                </div>

                <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                  <label className="block text-sm font-extrabold">Email</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={patient.email}
                    onChange={(e) => setPatient((p) => ({ ...p, email: e.target.value }))}
                    aria-invalid={Boolean(errors.email)}
                    autoComplete="email"
                  />
                  {errors.email ? <div className="mt-1 text-sm font-extrabold text-destructive">{errors.email}</div> : null}
                </div>

                <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                  <label className="block text-sm font-extrabold">Phone</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={patient.phone}
                    onChange={(e) => setPatient((p) => ({ ...p, phone: e.target.value }))}
                    aria-invalid={Boolean(errors.phone)}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                  {errors.phone ? <div className="mt-1 text-sm font-extrabold text-destructive">{errors.phone}</div> : null}
                </div>

                <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                  <label className="block text-sm font-extrabold">Insurance provider (optional)</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={patient.insurance}
                    onChange={(e) => setPatient((p) => ({ ...p, insurance: e.target.value }))}
                    aria-invalid={false}
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
                <label className="block text-sm font-extrabold">Notes (optional)</label>
                <textarea
                  className="mt-2 min-h-28 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={patient.notes}
                  onChange={(e) => setPatient((p) => ({ ...p, notes: e.target.value }))}
                  placeholder="Anything you'd like your clinic team to know?"
                />
              </div>

              <div className="rounded-3xl border border-border/70 bg-card/30 p-5">
                <label className="flex cursor-pointer items-start gap-3 text-sm font-semibold text-foreground">
                  <input
                    type="checkbox"
                    checked={patient.consent}
                    onChange={(e) => setPatient((p) => ({ ...p, consent: e.target.checked }))}
                    aria-invalid={Boolean(errors.consent)}
                  />
                  <span>
                    I consent to be contacted about my appointment request and understand this submission does not guarantee treatment.
                    Please confirm the clinic can contact me.
                  </span>
                </label>
                {errors.consent ? <div className="mt-2 text-sm font-extrabold text-destructive">{errors.consent}</div> : null}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-full border border-border bg-card/30 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  disabled={bookingMutation.isPending}
                  onClick={async () => {
                    setTopError(null)
                    const v = validateForCurrentStep()
                    setErrors(v)
                    if (Object.keys(v).length > 0) {
                      setTopError('Please fix the highlighted fields.')
                      return
                    }
                    if (demoMode) {
                      setStep(3)
                      setConfirmed({ reference: `MC-DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}` })
                      return
                    }
                    try {
                      const res = await bookingMutation.mutateAsync()
                      setStep(3)
                      setConfirmed({ reference: res.reference })
                    } catch {
                      // Error is surfaced by mutation onError.
                    }
                  }}
                  className="group rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {bookingMutation.isPending ? 'Confirming...' : (
                    <span className="inline-flex items-center gap-1">Confirm booking <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                  )}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-sm lg:col-span-5">
            <img src={Booking2} alt="Fertility consultation planning after booking" className="h-full min-h-[320px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/45 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="text-sm font-extrabold">Your journey continues after booking</div>
              <div className="mt-1 text-xs text-muted-foreground">
                We guide you from first consult to personalized treatment planning.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-lg font-extrabold">What to expect next</div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { t: 'Step 1: Consult', d: 'We review your goals and baseline information.' },
                { t: 'Step 2: Plan', d: 'You get a clear pathway and realistic next steps.' },
                { t: 'Step 3: Guided care', d: 'Monitoring and supportive communication throughout.' },
              ].map((x) => (
                <div key={x.t} className="rounded-3xl border border-border/70 bg-background/25 p-5">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{x.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-3xl border border-border/70 bg-background/35 p-5 text-sm text-muted-foreground">
              Medical note: We avoid guaranteed outcomes. Your plan is finalized after clinician review and counseling.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

