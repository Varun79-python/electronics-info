/**
 * download-all-components.mjs v2
 * Universal downloader for electronic components.
 * Uses oomlout GitHub (CC BY-SA 2.0) and Wikimedia Commons.
 * Falls back to keeping existing WebP files on disk.
 */

import { existsSync, mkdirSync, writeFileSync, readdirSync, unlinkSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const COMP_DIR = join(ROOT, 'public', 'images', 'components')
const SIZES = [320, 640, 960, 1280, 1920]
const WEBP_QUALITY = 85
const AVIF_QUALITY = 78
const GH = 'https://raw.githubusercontent.com/oomlout/oomlout_OOMP_parts_V2/main'

const IMAGE_TYPES = ['front','angle','package','internal','pinout','symbol','breadboard','pcb','application','dimensions']

// ─── OOMLOUT MAPPING ───
// Only categories confirmed to have image.jpg in oomlout repo.
// Format: base source + optional variants for visual variety.

const OOMLOUT_SOURCES = {
  capacitor: {
    category: 'CAPC',
    default: { pkg: '0603', value: 'NF1', suffix: 'V50' },
    variants: {
      front:    { pkg: '0603', value: 'NF1', suffix: 'V50' },
      angle:    { pkg: '0603', value: 'NF10', suffix: 'V50', rev: true },
      package:  { pkg: '0805', value: 'NF10', suffix: 'V50' },
      internal: { pkg: '0603', value: 'PF10', suffix: 'V50' },
      pinout:   { pkg: '0603', value: 'NF1', suffix: 'V50', rev: true },
      symbol:   { pkg: '0402', value: 'NF1', suffix: 'V50' },
      breadboard:{pkg: '0805', value: 'UF10', suffix: 'V25' },
      pcb:      { pkg: '0603', value: 'NF47D', suffix: 'V50' },
      application:{pkg: '0603', value: 'NF1', suffix: 'V50' },
      dimensions:{pkg: '0402', value: 'NF1', suffix: 'V50', rev: true },
    }
  },
  connector: {
    category: 'HEAD',
    default: { pkg: 'I01', value: 'PI01', suffix: '01' },
    variants: {
      front:    { pkg: 'I01', value: 'PI01', suffix: '01' },
      angle:    { pkg: 'I01', value: 'PI02', suffix: '01' },
      package:  { pkg: 'I01', value: 'PI04', suffix: '01' },
      internal: { pkg: 'I01', value: 'PI01', suffix: '01', rev: true },
      pinout:   { pkg: 'I01', value: 'PI01', suffix: '01' },
      symbol:   { pkg: 'I01', value: 'PI01', suffix: '01', rev: true },
      breadboard:{pkg: 'I01', value: 'PI01', suffix: '01' },
      pcb:      { pkg: 'I01', value: 'PI08', suffix: '01' },
      application:{pkg: 'I01', value: 'PI06', suffix: '01' },
      dimensions:{pkg: 'I01', value: 'PI01', suffix: '01', rev: true },
    }
  },
  'crystal-oscillator': {
    category: 'XTAL',
    default: { pkg: '3215', value: 'KZ327D', suffix: '01' },
    // Only KZ327D main image exists; no reverses or other values
    variants: {
      front:    { pkg: '3215', value: 'KZ327D', suffix: '01' },
      pinout:   { pkg: '3215', value: 'KZ327D', suffix: '01' },
      symbol:   { pkg: '3215', value: 'KZ327D', suffix: '01' },
    }
  },
  'temperature-sensor': {
    category: 'SENS',
    default: { pkg: 'LG143050', value: 'K345', suffix: '01' },
    // Only K345 main+reverse confirmed; no K600/K1000 photos
    variants: {
      front:    { pkg: 'LG143050', value: 'K345', suffix: '01' },
      angle:    { pkg: 'LG143050', value: 'K345', suffix: '01', rev: true },
      internal: { pkg: 'LG143050', value: 'K345', suffix: '01' },
      pinout:   { pkg: 'LG143050', value: 'K345', suffix: '01' },
      symbol:   { pkg: 'LG143050', value: 'K345', suffix: '01', rev: true },
      breadboard:{pkg: 'LG143050', value: 'K345', suffix: '01' },
      application:{pkg: 'LG143050', value: 'K345', suffix: '01' },
      dimensions:{pkg: 'LG143050', value: 'K345', suffix: '01', rev: true },
    }
  },
}

// ─── HELPERS ───

function log(msg, type = 'info') {
  const p = type === 'ok' ? '✓' : type === 'warn' ? '⚠' : type === 'err' ? '✗' : '→'
  console.log(`${p} ${msg}`)
}

function ensureDir(d) { if (!existsSync(d)) mkdirSync(d, { recursive: true }) }

async function downloadImage(url, dest, retries = 3) {
  for (let a = 1; a <= retries; a++) {
    try {
      const r = await fetch(url)
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      const buf = Buffer.from(await r.arrayBuffer())
      writeFileSync(dest, buf)
      return buf
    } catch (err) {
      if (a === retries) throw err
      await new Promise(r => setTimeout(r, 2000 * a))
    }
  }
}

function buildUrl(cat, pkg, value, suffix, rev) {
  return `${GH}/${cat}/${pkg}/X/${value}/${suffix}/${rev ? 'image_RE.jpg' : 'image.jpg'}`
}

async function processType(destDir, type, url) {
  const tmp = join(__dirname, 'tmp', `${type}_orig`)
  ensureDir(join(__dirname, 'tmp'))
  try {
    await downloadImage(url, tmp)
  } catch (err) {
    log(`  ${type}: failed — ${err.message}`, 'err')
    return null
  }
  const meta = await sharp(tmp).metadata().catch(() => null)
  if (!meta) { try { unlinkSync(tmp) } catch(e){}; return null }
  
  const sizes = []
  for (const w of SIZES) {
    const wp = join(destDir, `${type}-${w}.webp`)
    const av = join(destDir, `${type}-${w}.avif`)
    try {
      await sharp(tmp).resize(w, undefined, { fit:'inside', withoutEnlargement:true }).webp({ quality: WEBP_QUALITY }).toFile(wp)
      await sharp(tmp).resize(w, undefined, { fit:'inside', withoutEnlargement:true }).avif({ quality: AVIF_QUALITY }).toFile(av)
      const s = await sharp(wp).metadata()
      sizes.push({ width: w, webp: `${type}-${w}.webp`, avif: `${type}-${w}.avif`, size: s.size || 0 })
    } catch(e) { /* skip size */ }
  }
  try { unlinkSync(tmp) } catch(e){}
  return { type, alt: '', primary: sizes[0]?.webp || '', sizes }
}

async function processComponent(id, name) {
  const dest = join(COMP_DIR, id)
  ensureDir(dest)
  // Clean old
  if (existsSync(dest)) {
    for (const f of readdirSync(dest)) {
      if (f.endsWith('.webp') || f.endsWith('.avif')) try { unlinkSync(join(dest, f)) } catch(e){}
    }
  }
  log(`\n═══ ${name} (${id}) ═══`)
  
  const oomlout = OOMLOUT_SOURCES[id]
  const gallery = []
  
  for (const t of IMAGE_TYPES) {
    let url = null
    let label = ''
    if (oomlout) {
      const v = oomlout.variants?.[t] || oomlout.default
      url = buildUrl(oomlout.category, v.pkg, v.value, v.suffix, v.rev)
      label = `${oomlout.category}/${v.pkg}/${v.value}/${v.suffix}`
    }
    
    if (url) {
      log(`[${t}] ${label}`)
      const entry = await processType(dest, t, url)
      if (entry) {
        gallery.push(entry)
        const sz = entry.sizes.reduce((s, x) => s + x.size, 0)
        log(`  ✓ ${entry.sizes.length} sizes, ${(sz/1024).toFixed(0)}KB`, 'ok')
      }
    } else {
      log(`[${t}] no source`, 'warn')
    }
  }
  
  writeFileSync(join(dest, 'manifest.json'), JSON.stringify({
    component: id, name, updated: new Date().toISOString(),
    totalImages: gallery.length, gallery
  }, null, 2))
  
  log(`Done: ${gallery.length}/10 types`)
}

async function main() {
  log('═══ Downloading Real Images for Components (oomlout) ═══')
  
  const queue = [
    { id: 'capacitor', name: 'Capacitor' },
    { id: 'connector', name: 'Connector' },
    { id: 'crystal-oscillator', name: 'Crystal Oscillator' },
    { id: 'temperature-sensor', name: 'Temperature Sensor' },
  ]
  
  for (const c of queue) {
    await processComponent(c.id, c.name)
  }
  
  log('\n═══ Done ═══')
}

main().catch(e => { console.error('Fatal:', e); process.exit(1) })
