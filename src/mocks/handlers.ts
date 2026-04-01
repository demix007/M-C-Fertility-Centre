import { http, HttpResponse } from 'msw'
import { blogPosts } from '../lib/data/blogPosts'
import { donorProfiles } from '../lib/data/donors'
import { guides } from '../lib/data/guides'
import { pricingRows } from '../lib/data/pricing'
import { successMetricPlaceholder, successStories } from '../lib/data/successes'

function parseQuery(url: URL) {
  const out: Record<string, string> = {}
  url.searchParams.forEach((v, k) => {
    out[k] = v
  })
  return out
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function makeSlots(dateStr: string, seed: number) {
  const base = new Date(`${dateStr}T00:00:00Z`)
  const day = base.getUTCDate() + seed
  const slots: string[] = []
  const startHour = 8
  const endHour = 16
  for (let h = startHour; h < endHour; h++) {
    for (const m of [0, 30]) {
      const pick = (h * 60 + m + day * 7) % 5
      if (pick === 0 || pick === 3) continue // fewer slots for realism
      const hh = String(h).padStart(2, '0')
      const mm = String(m).padStart(2, '0')
      slots.push(`${hh}:${mm}`)
    }
  }
  return slots.slice(0, 8)
}

export const handlers = [
  http.get('/api/slots', ({ request }) => {
    const url = new URL(request.url)
    const serviceId = url.searchParams.get('serviceId') ?? 'ivf'
    const date = url.searchParams.get('date') ?? new Date().toISOString().slice(0, 10)
    const seed = serviceId.length
    const slots = makeSlots(date, seed)
    return HttpResponse.json({
      date,
      serviceId,
      lastUpdatedAt: new Date().toISOString(),
      slots,
    })
  }),

  http.get('/api/donors', ({ request }) => {
    const url = new URL(request.url)
    const q = parseQuery(url)
    const filtered = donorProfiles.filter((d) => {
      const bloodTypeOk = !q.bloodType || d.bloodType === q.bloodType
      const ethnicityOk = !q.ethnicity || d.ethnicity === q.ethnicity
      const eyeColorOk = !q.eyeColor || d.eyeColor === q.eyeColor
      const educationOk = !q.education || d.education === q.education
      const ageRangeOk = !q.ageRange || d.ageRange === q.ageRange
      return bloodTypeOk && ethnicityOk && eyeColorOk && educationOk && ageRangeOk
    })
    return HttpResponse.json({
      results: filtered,
    })
  }),

  http.get('/api/successes', ({ request }) => {
    const url = new URL(request.url)
    const q = parseQuery(url)

    const results = successStories.filter((s) => {
      const ageRangeOk = !q.ageRange || s.ageRange === q.ageRange
      const diagnosisOk = !q.diagnosis || s.diagnosis === q.diagnosis
      const procedureOk = !q.procedure || s.procedure === q.procedure
      return ageRangeOk && diagnosisOk && procedureOk
    })

    return HttpResponse.json({
      stories: results,
      metrics: successMetricPlaceholder,
    })
  }),

  http.get('/api/blog', ({ request }) => {
    const url = new URL(request.url)
    const category = url.searchParams.get('category')
    const posts = category ? blogPosts.filter((p) => p.category === category) : blogPosts
    return HttpResponse.json({ posts })
  }),

  http.get('/api/blog/:slug', ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug)
    if (!post) return new HttpResponse('Not found', { status: 404 })
    return HttpResponse.json({ post })
  }),

  http.get('/api/prices', () => {
    return HttpResponse.json({ rows: pricingRows })
  }),

  http.post('/api/contact', async ({ request }) => {
    const body = (await request.json()) as {
      name?: string
      email?: string
      phone?: string
      message?: string
      consent?: boolean
    }

    if (!body?.name || !body?.email || !body?.message) {
      return new HttpResponse('Validation error', { status: 400 })
    }
    if (!isValidEmail(body.email)) return new HttpResponse('Invalid email', { status: 400 })
    if (body.consent !== true) return new HttpResponse('Consent required', { status: 400 })

    return HttpResponse.json({ ok: true, message: 'Thanks. We will contact you shortly.' })
  }),

  http.post('/api/guides/download', async ({ request }) => {
    const body = (await request.json()) as { email?: string; guideSlug?: string; consent?: boolean }
    const guide = body?.guideSlug ? guides.find((g) => g.slug === body.guideSlug) : undefined
    if (!guide) return new HttpResponse('Guide not found', { status: 404 })
    if (!body.email || !isValidEmail(body.email)) return new HttpResponse('Invalid email', { status: 400 })
    if (body.consent !== true) return new HttpResponse('Consent required', { status: 400 })
    return HttpResponse.json({
      ok: true,
      message: 'Verified. Your download is ready.',
      // MVP: front-end generates the PDF.
      canDownload: true,
      guideTitle: guide.title,
    })
  }),

  http.post('/api/booking', async ({ request }) => {
    const body = (await request.json()) as {
      serviceId?: string
      slot?: string
      date?: string
      fullName?: string
      email?: string
      phone?: string
      consent?: boolean
      notes?: string
    }
    if (!body.serviceId || !body.slot || !body.date || !body.fullName || !body.email || !body.phone) {
      return new HttpResponse('Validation error', { status: 400 })
    }
    if (!isValidEmail(body.email)) return new HttpResponse('Invalid email', { status: 400 })
    if (body.consent !== true) return new HttpResponse('Consent required', { status: 400 })

    const ref = `MCF-${Math.random().toString(16).slice(2, 8).toUpperCase()}`
    return HttpResponse.json({
      ok: true,
      reference: ref,
      status: 'confirmed',
    })
  }),
]

