export type ServiceId = 'new-patient' | 'ivf' | 'mild-ivf' | 'natural-cycle' | 'egg-freezing' | 'donor' | 'genetic-testing'

export const services = [
  {
    id: 'ivf' as const,
    title: 'Conventional IVF',
    short: 'A complete IVF pathway with structured monitoring and transfer planning.',
  },
  {
    id: 'mild-ivf' as const,
    title: 'Mild IVF',
    short: 'A gentler approach focused on quality over quantity with fewer injections for many patients.',
  },
  {
    id: 'natural-cycle' as const,
    title: 'Natural Cycle IVF',
    short: 'A lower-intervention strategy tailored for specific profiles and cycle patterns.',
  },
  {
    id: 'egg-freezing' as const,
    title: 'Egg Freezing',
    short: 'Preserve fertility with clear steps: consult, stimulate, retrieve, and store.',
  },
  {
    id: 'donor' as const,
    title: 'Donor Services',
    short: 'Privacy-first donor matching supported by expert counseling.',
  },
  {
    id: 'genetic-testing' as const,
    title: 'Genetic Testing (PGT-A / PGT-M)',
    short: 'Understand options with accessible explanations and responsible counseling.',
  },
]

