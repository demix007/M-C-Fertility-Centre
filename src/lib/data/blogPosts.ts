export type BlogCategory = 'Success Stories' | 'Science' | 'Wellness' | 'Financing'

export type BlogPost = {
  id: string
  slug: string
  title: string
  category: BlogCategory
  excerpt: string
  publishedAt: string // ISO date
  readingMinutes: number
  author: {
    name: string
    credential: string
  }
  body: Array<{ type: 'p'; text: string } | { type: 'h'; text: string }>
  relatedSlugs: string[]
  faqs?: Array<{ q: string; a: string }>
}

export const blogPosts: BlogPost[] = [
  {
    id: 'bp-001',
    slug: 'ivf-vs-intrauterine-insemination',
    title: 'IVF vs. IUI: choosing the right path',
    category: 'Science',
    excerpt:
      'A clear, compassionate overview of how IVF and IUI work, and how your care team determines which approach fits your situation.',
    publishedAt: '2026-01-15',
    readingMinutes: 6,
    author: { name: 'Dr. M. Okafor', credential: 'Fertility Consultant' },
    body: [
      { type: 'h', text: 'A simple difference' },
      {
        type: 'p',
        text: 'IVF and IUI are different in how fertilization happens and how embryos are managed. Your clinician uses your history, test results, and timing goals to recommend a plan.',
      },
      { type: 'h', text: 'What matters most' },
      {
        type: 'p',
        text: 'Factors such as egg reserve, sperm parameters, fallopian tube health, and prior cycle results can guide the recommendation. The best choice is the one that matches your body and your goals.',
      },
    ],
    relatedSlugs: ['how-egg-freezing-works', 'booking-your-first-consult'],
    faqs: [
      {
        q: 'Is IVF always more effective than IUI?',
        a: 'Not always. Effectiveness depends on diagnosis, age, test results, and individualized protocol planning.',
      },
      {
        q: 'How long does it usually take to start?',
        a: 'Most patients schedule an initial consult first. Your care plan follows after review of baseline tests and timelines.',
      },
    ],
  },
  {
    id: 'bp-002',
    slug: 'how-egg-freezing-works',
    title: 'How egg freezing works (and what to expect)',
    category: 'Wellness',
    excerpt:
      'From consult to retrieval to storage, here is what egg freezing looks like, with calm explanations for anxious first-timers.',
    publishedAt: '2026-02-02',
    readingMinutes: 5,
    author: { name: 'Dr. A. Bello', credential: 'Embryology Lead' },
    body: [
      { type: 'h', text: 'Step-by-step' },
      {
        type: 'p',
        text: 'The process usually includes consultation, stimulation with monitoring, retrieval, and storage. Your clinic team will explain the timeline and what you will feel at each stage.',
      },
    ],
    relatedSlugs: ['ivf-vs-intrauterine-insemination', 'booking-your-first-consult'],
    faqs: [
      {
        q: 'Does egg freezing guarantee future success?',
        a: 'No. Egg freezing supports options for later. Success depends on many factors including age at freezing and overall medical evaluation.',
      },
    ],
  },
  {
    id: 'bp-003',
    slug: 'booking-your-first-consult',
    title: 'Your first fertility consultation: a checklist',
    category: 'Financing',
    excerpt:
      'Prepare confidently for your first consultation with a simple checklist of questions, documents, and practical expectations.',
    publishedAt: '2026-02-10',
    readingMinutes: 4,
    author: { name: 'M&C Care Team', credential: 'Patient Support' },
    body: [
      { type: 'h', text: 'Bring the essentials' },
      {
        type: 'p',
        text: 'When you arrive prepared, your care team can move faster and more confidently. We recommend basic records and a list of questions.',
      },
      { type: 'h', text: 'Ask about timelines' },
      {
        type: 'p',
        text: 'Ask what happens next after your consultation: tests, scheduling, and expected lead times for appointments.',
      },
    ],
    relatedSlugs: ['ivf-vs-intrauterine-insemination', 'how-egg-freezing-works'],
  },
]

