import { create } from 'zustand'

type GuideGateState = {
  open: boolean
  guideSlug: string | null
  email: string
  consent: boolean
  setOpen: (open: boolean) => void
  setGuideSlug: (slug: string | null) => void
  setEmail: (email: string) => void
  setConsent: (consent: boolean) => void
  reset: () => void
}

export const useGuideGateStore = create<GuideGateState>((set) => ({
  open: false,
  guideSlug: null,
  email: '',
  consent: false,
  setOpen: (open) => set({ open }),
  setGuideSlug: (guideSlug) => set({ guideSlug }),
  setEmail: (email) => set({ email }),
  setConsent: (consent) => set({ consent }),
  reset: () => set({ open: false, guideSlug: null, email: '', consent: false }),
}))

