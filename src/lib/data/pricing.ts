export type PricingRow = {
  service: string
  priceRangeNgn: string
  includes: string
}

export const pricingRows: PricingRow[] = [
  {
    service: 'Initial Consultation',
    priceRangeNgn: '150,000 - 200,000 NGN',
    includes: 'Doctor review, baseline guidance, and next-step plan.',
  },
  {
    service: 'IVF Cycle (Mild IVF)',
    priceRangeNgn: '1,000,000 - 1,500,000 NGN',
    includes: 'Stimulation and monitoring bundle; medication varies by protocol.',
  },
  {
    service: 'IVF Cycle (Conventional)',
    priceRangeNgn: '1,500,000 - 2,500,000 NGN',
    includes: 'Stimulation and monitoring bundle; medication varies by protocol and response.',
  },
  {
    service: 'Egg Freezing (Collection + Processing)',
    priceRangeNgn: '1,000,000 -1,500,000 NGN',
    includes: 'Stimulation + egg retrieval; follow-up includes basic post-procedure monitoring.',
  },
  {
    service: 'Storage - Year 1',
    priceRangeNgn: '500,000 - 900,000 NGN',
    includes: 'Includes cryostorage administration and account setup.',
  },
  {
    service: 'Storage - Annual (after Year 1)',
    priceRangeNgn: '300,000 - 600,000 NGN / year',
    includes: 'Renewal for ongoing cryostorage; pricing may vary by specimen count.',
  },
  {
    service: 'Donor Program (Consult + Matching)',
    priceRangeNgn: '1,500,000 - 2,000,000 NGN',
    includes: 'Consultation and matching process. Additional costs depend on treatment pathway.',
  },
  {
    service: 'Genetic Testing (PGT-A / PGT-M)',
    priceRangeNgn: '500,000 - 1,000,000 NGN',
    includes: 'Counseling + lab processing; depends on patient pathway.',
  },
]

