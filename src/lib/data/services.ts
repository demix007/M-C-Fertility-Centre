export type ServiceId = 'ivf' | 'iui' | 'cryopreservation' | 'donor' | 'surrogacy' | 'pgt'

export const services = [
  {
    id: 'ivf' as const,
    title: 'IVF',
    short: 'In vitro fertilisation with personalised protocols, lab care, and clear next steps.',
    href: '/ivf',
  },
  {
    id: 'iui' as const,
    title: 'IUI',
    short: 'Intrauterine insemination — a less invasive option for selected fertility profiles.',
    href: '/iui',
  },
  {
    id: 'cryopreservation' as const,
    title: 'Cryopreservation',
    short: 'Freezing of eggs, sperm, and embryos to preserve fertility and treatment options.',
    href: '/cryopreservation',
  },
  {
    id: 'donor' as const,
    title: 'Donor Services',
    short: 'Egg and sperm donor pathways with screening, matching, and counselling support.',
    href: '/donor',
  },
  {
    id: 'surrogacy' as const,
    title: 'Surrogacy',
    short: 'Gestational surrogacy support for people who cannot carry a pregnancy themselves.',
    href: '/surrogacy',
  },
  {
    id: 'pgt' as const,
    title: 'PGT',
    short: 'Preimplantation genetic testing to support informed embryo selection conversations.',
    href: '/pgt',
  },
]
