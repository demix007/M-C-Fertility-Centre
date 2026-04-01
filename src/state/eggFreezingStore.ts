import { create } from 'zustand'

type EggEstimatorState = {
  age: number
  setAge: (age: number) => void
  getEstimatedSuccessPct: () => number
}

function estimate(age: number) {
  if (age <= 30) return 70
  if (age <= 35) return 58
  if (age <= 37) return 45
  if (age <= 40) return 28
  return 14
}

export const useEggEstimatorStore = create<EggEstimatorState>((set, get) => ({
  age: 34,
  setAge: (age) => set({ age: Math.max(18, Math.min(50, Math.round(age))) }),
  getEstimatedSuccessPct: () => estimate(get().age),
}))

