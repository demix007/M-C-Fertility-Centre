export type Guide = {
  slug: string
  title: string
  summary: string
  readingMinutes: number
}

export const guides: Guide[] = [
  {
    slug: 'guide-fertility-preservation',
    title: 'Guide to Fertility Preservation',
    summary: 'A calm, step-by-step overview of options for preserving fertility, including egg freezing basics.',
    readingMinutes: 8,
  },
  {
    slug: 'ivf-diet-plan',
    title: 'IVF Diet Plan (Practical Nigerian Edition)',
    summary: 'Simple, realistic food guidance that supports wellbeing during treatment (not medical advice).',
    readingMinutes: 6,
  },
  {
    slug: 'questions-to-ask-your-doctor',
    title: 'Questions to Ask Your Doctor',
    summary: 'Bring clarity to your appointments with a focused list of questions.',
    readingMinutes: 5,
  },
]

