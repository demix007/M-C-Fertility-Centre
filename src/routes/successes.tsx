import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '../api/client'
import { useSeo } from '../lib/seo'
import type { SuccessCategory } from '../lib/data/successes'
import type { SuccessStory } from '../lib/data/successes'

const ageRanges = ['Under 30', '30-34', '35-37', '38-40', '40+'] as const
const diagnoses = ['Unexplained Infertility', 'Endometriosis', 'PCOS', 'Recurrent Miscarriage', 'Male Factor'] as const
const procedures: SuccessCategory[] = ['ivf', 'mild-ivf', 'egg-freezing', 'donor', 'genetic-testing']

export const Route = createFileRoute('/successes')({
  component: SuccessesPage,
})

function SuccessesPage() {
  useSeo({
    title: 'Our Successes | M&C Fertility Centre',
    description: 'Filterable success stories and a responsible success snapshot in Nigeria (MVP sample dataset).',
  })

  const [ageRange, setAgeRange] = useState<(typeof ageRanges)[number] | ''>('')
  const [diagnosis, setDiagnosis] = useState<(typeof diagnoses)[number] | ''>('')
  const [procedure, setProcedure] = useState<SuccessCategory | ''>('')

  const queryKey = useMemo(() => ['successes', { ageRange, diagnosis, procedure }], [ageRange, diagnosis, procedure])

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: async () => {
      const params: Record<string, string> = {}
      if (ageRange) params.ageRange = ageRange
      if (diagnosis) params.diagnosis = diagnosis
      if (procedure) params.procedure = procedure
      const res = await api.get('/api/successes', { params })
      return res.data as { stories: SuccessStory[]; metrics: any }
    },
  })

  const stories = data?.stories ?? []
  const metrics = data?.metrics

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-sm md:p-10">
        <div className="text-xs font-extrabold text-muted-foreground">Our Successes</div>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Filterable stories with responsible context</h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Stories are anonymized. Success rates are presented responsibly and depend on individual medical factors.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border/70 bg-background/35 p-5">
            <div className="text-sm font-extrabold">Filters</div>
            <div className="mt-4 space-y-4">
              <FieldSelect label="Age range" value={ageRange} onChange={setAgeRange} options={ageRanges as unknown as string[]} />
              <FieldSelect
                label="Diagnosis"
                value={diagnosis}
                onChange={setDiagnosis as any}
                options={diagnoses as unknown as string[]}
              />
              <FieldSelect
                label="Procedure"
                value={procedure}
                onChange={setProcedure as any}
                options={procedures as unknown as string[]}
              />
              <button
                type="button"
                className="w-full rounded-full border border-border bg-card/30 px-4 py-3 text-sm font-extrabold transition hover:bg-card/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => {
                  setAgeRange('')
                  setDiagnosis('')
                  setProcedure('')
                }}
              >
                Clear filters
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl border border-border/70 bg-background/25 p-6">
            <div className="text-sm font-extrabold">Success snapshot</div>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border/70 bg-card/30 p-5">
                <div className="text-xs font-extrabold text-muted-foreground">Your clinic (MVP sample)</div>
                <div className="mt-1 text-3xl font-extrabold">{metrics?.ourLiveBirthRatePct ?? 58}%</div>
                <div className="mt-1 text-sm text-muted-foreground">Live birth context snapshot</div>
              </div>
              <div className="rounded-3xl border border-border/70 bg-card/30 p-5">
                <div className="text-xs font-extrabold text-muted-foreground">National average (reference)</div>
                <div className="mt-1 text-3xl font-extrabold">{metrics?.nationalAverageLiveBirthRatePct ?? 43}%</div>
                <div className="mt-1 text-sm text-muted-foreground">For education and reassurance</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Note: This is an MVP sample dataset. Your clinician will discuss outcomes and what is realistic for your profile.
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-extrabold">Stories</div>
                  <div className="text-xs font-extrabold text-muted-foreground">{isLoading ? 'Loading...' : `${stories.length} matches`}</div>
                </div>
                <Link
                  to="/booking"
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Book consultation
                </Link>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {isLoading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-40 animate-pulse rounded-3xl border border-border/70 bg-background/25" />
                    ))
                  : stories.map((s) => (
                      <div key={s.id} className="rounded-3xl border border-border/70 bg-card/30 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-extrabold">
                              {s.ageRange} • {s.diagnosis}
                            </div>
                            <div className="mt-1 text-xs font-extrabold text-muted-foreground">{s.year}</div>
                          </div>
                          <div className="rounded-full border border-border bg-background/30 px-3 py-1 text-xs font-extrabold text-muted-foreground">
                            {s.outcome}
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground">{s.summary}</div>
                        {s.disclaimer ? (
                          <div className="mt-3 text-xs font-extrabold text-muted-foreground">
                            {s.disclaimer}
                          </div>
                        ) : null}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FieldSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: any) => void
  options: string[]
}) {
  return (
    <label className="block">
      <span className="block text-sm font-extrabold">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-sm text-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <option value="">Any</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}

