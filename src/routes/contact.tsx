import { createFileRoute, Link } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { api } from '../api/client'
import { useSeo } from '../lib/seo'
import { useState } from 'react'
import { clinicInfo } from '../lib/clinicInfo'
import { localBusinessJsonLd, medicalOrganizationJsonLd } from '../lib/structuredData'
import { ArrowRight, CalendarHeart, CheckCircle2, Clock3, Mail, MapPin, Phone, Sparkles, Users } from 'lucide-react'
import Review from '../assets/review.jpg'
import { FaqSection } from '../components/sections/FaqSection'
import ContactHero from '../assets/contact_4.jpeg'
import Contact2 from '../assets/contact_us_2.jpeg'
import Contact3 from '../assets/contact_us_3.jpeg'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactPage() {
  const contactFaq = [
    {
      q: 'Can I book a virtual consultation?',
      a: 'Yes. You can request either virtual or in-person consultation, and our team will guide you to the best option for your situation.',
    },
    {
      q: 'How soon will I get a response after submitting the form?',
      a: 'We typically reply during clinic working hours. For urgent matters, please call the clinic directly.',
    },
    {
      q: 'Can I ask about IVF, egg freezing, or donor options through this form?',
      a: 'Yes. Share your current stage and goals, and we will connect you with the right care pathway and specialist support.',
    },
    {
      q: 'Is this contact form for emergencies?',
      a: 'No. If this is a medical emergency, contact emergency services immediately or call the clinic directly for urgent guidance.',
    },
  ] as const

  useSeo({
    title: 'Contact Us | M&C Fertility Centre',
    description: 'Contact M&C Fertility Centre in Nigeria. Send a message using our accessible form.',
    jsonLd: [localBusinessJsonLd(), medicalOrganizationJsonLd()],
  })

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [topError, setTopError] = useState<string | null>(null)

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await api.post('/api/contact', {
        ...form,
        consent: form.consent,
      })
      return res.data as { ok: true; message: string }
    },
    onError: (e: any) => {
      const msg = e?.response?.data ? String(e.response.data) : 'Unable to submit. Please try again.'
      setTopError(msg)
    },
  })

  function validate() {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!isValidEmail(form.email)) next.email = 'Enter a valid email address.'
    if (!form.phone.trim()) next.phone = 'Phone is required.'
    if (!form.message.trim() || form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.'
    if (form.consent !== true) next.consent = 'Consent is required.'
    return next
  }

  const mapQuery = encodeURIComponent(`${clinicInfo.addressLine1}, ${clinicInfo.city}, ${clinicInfo.country}`)

  return (
    <div className="space-y-10">
      <section className="relative isolate overflow-hidden rounded-[36px] border border-border/70 shadow-sm">
        <img src={ContactHero} alt="Contact M&C Fertility Centre for consultation and support" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(7,22,50,0.86)_8%,rgba(14,35,82,0.62)_45%,rgba(2,132,199,0.34)_74%,rgba(236,72,153,0.28)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(760px_300px_at_12%_14%,rgba(56,189,248,0.28),transparent_60%),radial-gradient(600px_260px_at_88%_18%,rgba(244,114,182,0.22),transparent_64%),radial-gradient(760px_320px_at_50%_100%,rgba(16,185,129,0.16),transparent_68%)]" />

        <div className="relative min-h-[520px] px-6 py-12 md:min-h-[580px] md:px-10 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur">
              <Users className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              Contact M&C Fertility Centre
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Speak to our fertility team and start your next step with clarity
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Request a virtual or in-person consultation, ask questions about treatment options, and get practical
              guidance from our care team during clinic hours.
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
              <a
                href={`tel:${clinicInfo.phone}`}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-card/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-transform duration-500 ease-out group-hover:translate-x-full"
                />
                <span className="relative z-10">Call clinic now</span>
                <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Sparkles, label: 'Virtual or in-person' },
                { icon: CalendarHeart, label: 'Quick care guidance' },
                { icon: CheckCircle2, label: 'Clear next steps' },
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
              <div className="text-sm font-extrabold">Clinic details</div>
              <div className="mt-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 font-extrabold text-foreground">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  {clinicInfo.city}, {clinicInfo.country}
                </div>
                <div className="mt-2">{clinicInfo.addressLine1}</div>
                {clinicInfo.addressLine2 ? <div>{clinicInfo.addressLine2}</div> : null}
                <div className="mt-4 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  <a className="hover:underline" href={`tel:${clinicInfo.phone}`}>
                    {clinicInfo.phone}
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  <a className="hover:underline" href={`mailto:${clinicInfo.email}`}>
                    {clinicInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
              <div className="flex items-center gap-2 text-sm font-extrabold">
                <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
                Opening hours
              </div>
              <div className="mt-3 space-y-2">
                {clinicInfo.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/30 px-3 py-2 text-xs font-extrabold text-muted-foreground">
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/70 bg-background/30 p-2">
              <img src={Contact3} alt="Fertility support team assisting patients" className="h-44 w-full rounded-[20px] object-cover" />
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl border border-border/70 bg-background/25 p-6">
            <div className="text-sm font-extrabold">Contact form</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your goals, and we will route your enquiry to the right team.
            </p>

            {topError ? (
              <div role="alert" aria-live="assertive" className="mt-4 rounded-3xl border border-danger bg-transparent p-4 text-sm font-extrabold text-destructive">
                {topError}
              </div>
            ) : null}

            <form
              className="mt-5 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault()
                const v = validate()
                setErrors(v)
                setTopError(null)
                if (Object.keys(v).length > 0) return

                await mutation.mutateAsync()
              }}
            >
              <Field
                label="Full name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                type="text"
                autoComplete="name"
              />
              <Field
                label="Email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                type="email"
                autoComplete="email"
              />
              <Field
                label="Phone"
                value={form.phone}
                error={errors.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                type="tel"
                autoComplete="tel"
              />

              <div>
                <label className="block text-sm font-extrabold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Share your fertility question, goals, and preferred contact time."
                  className="mt-2 min-h-32 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                {errors.message ? <div className="mt-1 text-sm font-extrabold text-destructive">{errors.message}</div> : null}
              </div>

              <div className="rounded-3xl border border-border/70 bg-card/30 p-4">
                <label className="flex cursor-pointer items-start gap-3 text-sm font-semibold text-foreground">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    aria-invalid={Boolean(errors.consent)}
                  />
                  <span>
                    I consent to be contacted about my enquiry and understand this is not a medical emergency.
                  </span>
                </label>
                {errors.consent ? <div className="mt-2 text-sm font-extrabold text-destructive">{errors.consent}</div> : null}
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {mutation.isPending ? 'Sending...' : 'Submit message'}
              </button>

              {mutation.data?.ok ? (
                <div role="status" aria-live="polite" className="rounded-3xl border border-border/70 bg-background/35 p-4 text-sm font-extrabold">
                  {mutation.data.message}
                  <div className="mt-3">
                    <Link to="/booking" className="text-primary hover:underline">
                      Or book directly
                    </Link>
                  </div>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-border/70 bg-background/25 shadow-sm">
            <iframe
              title="M&C Fertility Centre location map"
              src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 text-sm text-muted-foreground">
              Use the map for route planning. If it does not load, call our clinic team for directions.
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-border/70 bg-background/25 shadow-sm">
            <img src={Contact2} alt="Clinical review and fertility consultation preparation" className="h-72 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-base font-extrabold">What to prepare before contact</h3>
              <ul className="mt-3 space-y-2">
                {[
                  'Your primary fertility goal and timeline.',
                  'Any prior treatment or fertility test results.',
                  'Key symptoms or cycle concerns to discuss.',
                  'Whether you prefer virtual or in-person consultation.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <FaqSection
        backgroundImage={Review}
        title="Contact FAQs"
        subtitle="Quick answers about consultations, response times, and how to reach the right team."
        items={contactFaq}
        ctas={[
          { to: '/booking', label: 'Book Consultation', variant: 'primary', icon: <ArrowRight className="h-4 w-4" aria-hidden="true" /> },
          { to: '/contact', label: 'Send Enquiry', variant: 'secondary', icon: <Mail className="h-4 w-4" aria-hidden="true" /> },
        ]}
      />
    </div>
  )
}

function Field({
  label,
  value,
  error,
  onChange,
  type,
  autoComplete,
}: {
  label: string
  value: string
  error?: string
  onChange: (v: string) => void
  type: string
  autoComplete?: string
}) {
  return (
    <div>
      <label className="block text-sm font-extrabold">{label}</label>
      <input
        className="mt-2 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
      />
      {error ? <div className="mt-1 text-sm font-extrabold text-destructive">{error}</div> : null}
    </div>
  )
}

