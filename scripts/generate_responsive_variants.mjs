import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const dir = 'src/assets'
const targets = [
  'hero.webp',
  'hero_slide_1.webp',
  'hero_slide_2.webp',
  'hero_slide_3.webp',
  'hero_slide_4.webp',
  'hero_slide_5.webp',
  'hero_slide_6.webp',
  'booking_hero_1.webp',
  'contact_4.webp',
  'about_1.webp',
  'blog_1.webp',
  'guide_4.webp',
  'pricing_hero.webp',
  'genetic_testing_hero.webp',
]
const widths = [640, 1024, 1440]

for (const file of targets) {
  const src = path.join(dir, file)
  if (!fs.existsSync(src)) continue
  const base = src.replace(/\.webp$/, '')
  for (const width of widths) {
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72, effort: 4 })
      .toFile(`${base}-${width}.webp`)
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 50, effort: 4 })
      .toFile(`${base}-${width}.avif`)
  }
  console.log(`generated variants for ${file}`)
}

console.log('responsive variant generation complete')
