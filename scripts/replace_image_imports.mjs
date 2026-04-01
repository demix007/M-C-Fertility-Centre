import fs from 'node:fs'
import path from 'node:path'

const ROOT = 'src'
const VALID_EXTS = new Set(['.ts', '.tsx'])
const pattern = /(from\s+['"])(\.\.?\/[^'"]+?)\.(jpe?g)(['"])/gi

const files = []
const walk = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) walk(full)
    else if (VALID_EXTS.has(path.extname(full))) files.push(full)
  }
}

walk(ROOT)

let changed = 0
for (const file of files) {
  const original = fs.readFileSync(file, 'utf8')
  const updated = original.replace(pattern, (match, prefix, rel, _ext, suffix) => {
    const webpPath = path.resolve(path.dirname(file), `${rel}.webp`)
    return fs.existsSync(webpPath) ? `${prefix}${rel}.webp${suffix}` : match
  })
  if (updated !== original) {
    fs.writeFileSync(file, updated, 'utf8')
    changed++
  }
}

console.log(`files changed: ${changed}`)
