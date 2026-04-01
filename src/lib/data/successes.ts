export type SuccessCategory = 'ivf' | 'mild-ivf' | 'egg-freezing' | 'donor' | 'genetic-testing'

export type SuccessStory = {
  id: string
  patientName?: string
  ageRange: 'Under 30' | '30-34' | '35-37' | '38-40' | '40+'
  diagnosis: 'Unexplained Infertility' | 'Endometriosis' | 'PCOS' | 'Recurrent Miscarriage' | 'Male Factor'
  procedure: SuccessCategory
  outcome: 'Live birth' | 'Successful implantation' | 'Clinical pregnancy'
  year: number
  summary: string
  disclaimer?: string
}

export const successStories: SuccessStory[] = [
  {
    id: 'mc-001',
    patientName: 'Patience A.',
    ageRange: '35-37',
    diagnosis: 'Recurrent Miscarriage',
    procedure: 'ivf',
    outcome: 'Live birth',
    year: 2025,
    summary: 'A careful stimulation plan and transfer timing approach supported a healthy pregnancy.',
    disclaimer: 'Outcomes vary and are not guaranteed. Stories are anonymized for privacy.',
  },
  {
    id: 'mc-002',
    patientName: 'Elizabeth C.',
    ageRange: '30-34',
    diagnosis: 'PCOS',
    procedure: 'mild-ivf',
    outcome: 'Clinical pregnancy',
    year: 2024,
    summary: 'A mild protocol reduced treatment burden while aligning with the patient’s monitoring goals.',
    disclaimer: 'This is shared for education and reassurance, not a guarantee.',
  },
  {
    id: 'mc-003',
    patientName: 'Amara A.',
    ageRange: '38-40',
    diagnosis: 'Endometriosis',
    procedure: 'ivf',
    outcome: 'Live birth',
    year: 2025,
    summary: 'Targeted planning supported embryo selection and transfer readiness.',
    disclaimer: 'Medical results depend on individual factors and clinical evaluation.',
  },
  {
    id: 'mc-004',
    patientName: 'Temi T.',
    ageRange: '40+',
    diagnosis: 'Unexplained Infertility',
    procedure: 'donor',
    outcome: 'Live birth',
    year: 2023,
    summary: 'With counseling and privacy-first matching, the team supported the patient’s journey.',
    disclaimer: 'Success depends on many variables; outcomes are not guaranteed.',
  },
  {
    id: 'mc-005',
    patientName: 'Ayomide B.',
    ageRange: 'Under 30',
    diagnosis: 'Male Factor',
    procedure: 'genetic-testing',
    outcome: 'Successful implantation',
    year: 2024,
    summary: 'Genetic testing support helped the care plan focus on transfer readiness.',
    disclaimer: 'Stories reflect anonymized experiences; individual results may differ.',
  },
  {
    id: 'mc-006',
    patientName: 'Mrs. Ayoola',
    ageRange: '30-34',
    diagnosis: 'Endometriosis',
    procedure: 'egg-freezing',
    outcome: 'Clinical pregnancy',
    year: 2025,
    summary: 'Fertility preservation aligned with timing preferences and later transfer planning.',
    disclaimer: 'Fertility preservation outcomes depend on age, lab factors, and medical evaluation.',
  },
]

export const successMetricPlaceholder = {
  // PRD requirement: "live birth rates compared to national average" (placeholder until validated).
  nationalAverageLiveBirthRatePct: 43,
  ourLiveBirthRatePct: 58,
  timeframeLabel: 'MVP sample dataset (placeholder)',
}

