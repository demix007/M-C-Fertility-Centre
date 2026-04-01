import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { api } from '../../api/client'
import { useGuideGateStore } from '../../state/guideGateStore'
import { guides } from '../../lib/data/guides'
import { generateGuidePdfBytes } from '../../lib/generateGuidePdf'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/Dialog'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function GuideGateModal() {
  const open = useGuideGateStore((s) => s.open)
  const guideSlug = useGuideGateStore((s) => s.guideSlug)
  const email = useGuideGateStore((s) => s.email)
  const consent = useGuideGateStore((s) => s.consent)
  const setEmail = useGuideGateStore((s) => s.setEmail)
  const setConsent = useGuideGateStore((s) => s.setConsent)
  const reset = useGuideGateStore((s) => s.reset)

  const guide = guides.find((g) => g.slug === guideSlug)
  const [error, setError] = useState<string | null>(null)

  const downloadMutation = useMutation({
    mutationFn: async () => {
      const res = await api.post('/api/guides/download', {
        email,
        consent,
        guideSlug,
      })
      return res.data as { ok: true; message: string; canDownload: boolean }
    },
  })

  async function onDownload(e: any) {
    e.preventDefault()
    setError(null)
    if (!guide) {
      setError('Guide not found. Please try again.')
      return
    }
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.')
      return
    }
    if (!consent) {
      setError('Consent is required to download.')
      return
    }

    const result = await downloadMutation.mutateAsync()
    if (!result?.canDownload) {
      setError('Download not ready. Please try again.')
      return
    }

    const pdfBlob = await generateGuidePdfBytes(guide)
    const url = URL.createObjectURL(pdfBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${guide.title.replace(/[^a-z0-9]+/gi, '_')}.pdf`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)

    reset()
  }

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? null : reset())}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download your fertility guide</DialogTitle>
          <DialogDescription>
            Enter your email to receive the guide download. We only use your details for this purpose (MVP behavior).
          </DialogDescription>
        </DialogHeader>

        {guide ? (
          <div className="rounded-3xl border border-border/70 bg-card/30 p-4">
            <div className="text-sm font-extrabold">{guide.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{guide.summary}</div>
          </div>
        ) : null}

        <form className="mt-5 space-y-4" onSubmit={onDownload}>
          <div>
            <Label htmlFor="guide-email">Email address</Label>
            <Input
              id="guide-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="rounded-3xl border border-border/70 bg-card/30 p-4">
            <label className="flex cursor-pointer items-start gap-3 text-sm font-semibold text-foreground">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>I consent to receive this guide download and understand this is not medical advice.</span>
            </label>
          </div>

          {error ? (
            <div role="alert" aria-live="assertive" className="rounded-3xl border border-destructive bg-transparent p-4 text-sm font-extrabold text-destructive">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={downloadMutation.isPending}
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {downloadMutation.isPending ? 'Verifying...' : 'Verify & Download'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

