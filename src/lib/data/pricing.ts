export type PricingRow = {
  id: string
  service: string
  priceRangeNgn: string
  includes: string
}

export const pricingRows: PricingRow[] = [
  {
    id: 'consultation',
    service: 'Initial Consultation',
    priceRangeNgn: 'Confirmed at booking',
    includes: 'Doctor review, baseline guidance, and a clear next-step plan.',
  },
  {
    id: 'ivf',
    service: 'IVF package including medications',
    priceRangeNgn: '₦4,000,000',
    includes: 'Complete IVF package with medications included. Final extras such as PGT or donor gametes are discussed separately.',
  },
  {
    id: 'iui',
    service: 'IUI',
    priceRangeNgn: 'Confirmed in consultation',
    includes: 'Cycle monitoring, sperm preparation, and insemination. Medication needs vary by protocol.',
  },
  {
    id: 'surrogacy',
    service: 'Surrogacy package',
    priceRangeNgn: '₦8,000,000',
    includes: 'Surrogacy treatment package. Legal, screening, and individual clinical extras are confirmed in consultation.',
  },
  {
    id: 'sperm-cryo',
    service: 'Sperm cryopreservation',
    priceRangeNgn: '₦70,000 per month',
    includes: 'Sperm freezing, processing, and monthly storage.',
  },
  {
    id: 'cryopreservation',
    service: 'Egg and embryo cryopreservation',
    priceRangeNgn: 'Confirmed in consultation',
    includes: 'Collection or freeze-all planning, laboratory processing, and storage. Duration affects total cost.',
  },
  {
    id: 'donor',
    service: 'Donor programme',
    priceRangeNgn: 'Confirmed in consultation',
    includes: 'Consultation, matching, and counselling. Treatment pathway costs depend on eggs, sperm, or IVF needs.',
  },
  {
    id: 'pgt',
    service: 'PGT (preimplantation genetic testing)',
    priceRangeNgn: 'Confirmed in consultation',
    includes: 'Counselling, embryo biopsy, and laboratory analysis. Pricing depends on test type and embryo numbers.',
  },
]
