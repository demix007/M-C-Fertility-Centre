import { clinicInfo } from './clinicInfo'

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: clinicInfo.name,
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicInfo.addressLine1 + (clinicInfo.addressLine2 ? `, ${clinicInfo.addressLine2}` : ''),
      addressLocality: clinicInfo.city,
      addressCountry: 'NG',
    },
  }
}

export function medicalOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: clinicInfo.name,
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicInfo.addressLine1 + (clinicInfo.addressLine2 ? `, ${clinicInfo.addressLine2}` : ''),
      addressLocality: clinicInfo.city,
      addressCountry: 'NG',
    },
  }
}

export function faqPageJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

