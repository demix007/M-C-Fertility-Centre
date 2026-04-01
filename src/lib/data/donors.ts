export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
export type EyeColor = 'Brown' | 'Blue' | 'Green' | 'Hazel'

export type DonorProfile = {
  id: string
  bloodType: BloodType
  ethnicity: 'Igbo' | 'Yoruba' | 'Hausa' | 'Other Nigeria'
  eyeColor: EyeColor
  education: 'BSc' | 'MSc' | 'PhD' | 'Medical degree'
  heightCm: number
  ageRange: '18-24' | '25-30' | '31-35'
}

export const donorProfiles: DonorProfile[] = [
  {
    id: 'dn-101',
    bloodType: 'O+',
    ethnicity: 'Yoruba',
    eyeColor: 'Brown',
    education: 'Medical degree',
    heightCm: 162,
    ageRange: '25-30',
  },
  {
    id: 'dn-102',
    bloodType: 'A+',
    ethnicity: 'Igbo',
    eyeColor: 'Hazel',
    education: 'MSc',
    heightCm: 158,
    ageRange: '25-30',
  },
  {
    id: 'dn-103',
    bloodType: 'B-',
    ethnicity: 'Hausa',
    eyeColor: 'Brown',
    education: 'BSc',
    heightCm: 165,
    ageRange: '18-24',
  },
  {
    id: 'dn-104',
    bloodType: 'AB+',
    ethnicity: 'Other Nigeria',
    eyeColor: 'Green',
    education: 'PhD',
    heightCm: 170,
    ageRange: '31-35',
  },
  {
    id: 'dn-105',
    bloodType: 'O-',
    ethnicity: 'Igbo',
    eyeColor: 'Blue',
    education: 'MSc',
    heightCm: 160,
    ageRange: '25-30',
  },
]

