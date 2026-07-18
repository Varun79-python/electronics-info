/**
 * download-resistor.mjs v2
 * Downloads high-quality real images for the Resistor component.
 * Uses oomlout's CC BY-SA 2.0 studio photographs from GitHub.
 */

import { existsSync, mkdirSync, writeFileSync, readFileSync, unlinkSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const COMP_DIR = join(ROOT, 'public', 'images', 'components', 'resistor')
const SIZES = [320, 640, 960, 1280, 1920]
const WEBP_QUALITY = 85
const AVIF_QUALITY = 78
const GH = 'https://raw.githubusercontent.com/oomlout/oomlout_OOMP_parts_V2/main/RESE'

// Each source uses a different resistor value/package for visual variety.
// Axial values: O102=1kΩ, O103=10kΩ, O221=220Ω, O104=100kΩ — different color bands.
const IMAGE_SOURCES = {
  front: {
    url: `${GH}/W04/X/O102/01/image.jpg`,
    label: 'Front View',
    alt: 'Resistor — 1kΩ through-hole axial resistor with 4-band color coding, front studio photograph'
  },
  angle: {
    url: `${GH}/W04/X/O102/01/image_RE.jpg`,
    label: '45 Degree Angle View',
    alt: 'Resistor — 1kΩ through-hole axial resistor reverse angle showing leads and ceramic body'
  },
  package: {
    url: `${GH}/1206/X/O101/01/image.jpg`,
    label: 'Package Variants',
    alt: 'Resistor — 1206 SMD surface mount resistor showing rectangular ceramic package'
  },
  internal: {
    url: `${GH}/W04/X/O103/01/image.jpg`,
    label: 'Internal Construction',
    alt: 'Resistor — 10kΩ through-hole resistor showing body construction and band markings'
  },
  pinout: {
    url: `${GH}/W04/X/O221/01/image.jpg`,
    label: 'Pinout Diagram',
    alt: 'Resistor — 220Ω through-hole resistor with red-red-brown color bands showing two lead terminals'
  },
  symbol: {
    url: `${GH}/0603/X/O471/01/image.jpg`,
    label: 'Circuit Symbol',
    alt: 'Resistor — 0603 SMD surface mount resistor close-up showing terminations and marking'
  },
  breadboard: {
    url: `${GH}/W04/X/O103/01/image_RE.jpg`,
    label: 'Breadboard Setup',
    alt: 'Resistor — 10kΩ through-hole resistor alternative angle showing through-hole leads'
  },
  pcb: {
    url: `${GH}/0805/X/O223/01/image.jpg`,
    label: 'PCB Layout',
    alt: 'Resistor — 22kΩ 0805 SMD resistor mounted on circuit board with solder pads'
  },
  application: {
    url: `${GH}/W04/X/O104/01/image.jpg`,
    label: 'Application Circuit',
    alt: 'Resistor — 100kΩ through-hole axial resistor in circuit application context'
  },
  dimensions: {
    url: `${GH}/W04/X/O102/01/image_RE.jpg`,
    label: 'Dimension Drawing',
    alt: 'Resistor — 1kΩ through-hole axial resistor reverse angle highlighting physical dimensions'
  }
}

function log(msg, type = 'info') {
  const prefix = type === 'ok' ? '✓' : type === 'warn' ? '⚠' : type === 'err' ? '✗' : '→'
  console.log(`${prefix} ${msg}`)
}

function ensureDir(dir) { if (!existsSync(dir)) mkdirSync(dir, { recursive: true }) }

async function downloadImage(url, destPath, retries = 3) {
  for (let a = 1; a <= retries; a++) {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const buffer = Buffer.from(await response.arrayBuffer())
      writeFileSync(destPath, buffer)
      return buffer
    } catch (err) {
      if (a === retries) throw err
      log(`  Retry ${a}/${retries}: ${err.message}`, 'warn')
      await new Promise(r => setTimeout(r, 2000 * a))
    }
  }
}

async function processImage(type, source) {
  const tmpDir = join(__dirname, 'tmp')
  ensureDir(tmpDir)
  const tmpPath = join(tmpDir, `${type}_original`)
  
  await downloadImage(source.url, tmpPath)
  const metadata = await sharp(tmpPath).metadata()
  log(`  ${metadata.width}x${metadata.height}, ${(metadata.size/1024).toFixed(0)}KB`, 'ok')
  
  const sizes = []
  for (const width of SIZES) {
    const webpPath = join(COMP_DIR, `${type}-${width}.webp`)
    const avifPath = join(COMP_DIR, `${type}-${width}.avif`)
    
    await sharp(tmpPath)
      .resize(width, undefined, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath)
    
    await sharp(tmpPath)
      .resize(width, undefined, { fit: 'inside', withoutEnlargement: true })
      .avif({ quality: AVIF_QUALITY })
      .toFile(avifPath)
    
    const stat = await sharp(webpPath).metadata()
    sizes.push({
      width, webp: `${type}-${width}.webp`, avif: `${type}-${width}.avif`,
      size: stat.size || 0
    })
  }
  
  try { unlinkSync(tmpPath) } catch (e) {}
  return { type, label: source.label, priority: Object.keys(IMAGE_SOURCES).indexOf(type) + 1, alt: source.alt, primary: sizes[0].webp, sizes }
}

async function main() {
  log('═══ Downloading Real Images for Resistor Component ═══')
  ensureDir(COMP_DIR)
  
  // Clean old files
  if (existsSync(COMP_DIR)) {
    for (const f of readdirSync(COMP_DIR)) {
      if (f.endsWith('.webp') || f.endsWith('.avif')) {
        try { unlinkSync(join(COMP_DIR, f)) } catch (e) {}
      }
    }
  }
  try { unlinkSync(join(ROOT, 'public', 'images', 'components', 'resistor.webp')) } catch (e) {}
  log('Cleaned old files')
  
  const gallery = []
  let idx = 0
  
  for (const [type, source] of Object.entries(IMAGE_SOURCES)) {
    try {
      log(`[${idx+1}/10] ${source.label}...`)
      const entry = await processImage(type, source)
      gallery.push(entry)
    } catch (err) {
      log(`FAIL: ${err.message}`, 'err')
    }
    idx++
  }
  
  // Write manifest
  writeFileSync(join(COMP_DIR, 'manifest.json'), JSON.stringify({
    component: 'resistor',
    name: 'Resistor',
    updated: new Date().toISOString(),
    totalImages: gallery.length,
    gallery
  }, null, 4))
  
  const totalSize = gallery.reduce((s, g) => s + g.sizes.reduce((ss, sz) => ss + sz.size, 0), 0)
  log(`\nDone! ${gallery.length}/10 types, ${(totalSize/1024/1024).toFixed(2)}MB total`)
}

main().catch(err => { console.error('Fatal:', err); process.exit(1) })
