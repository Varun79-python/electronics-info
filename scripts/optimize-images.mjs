/**
 * optimize-images.mjs
 *
 * Phase 5–6: Image optimization pipeline & manifest generation.
 *
 * For each component:
 *   1. Creates per-component folder: public/images/components/{id}/
 *   2. Generates multiple responsive sizes (320, 640, 960, 1280, 1920px)
 *   3. Generates WebP + AVIF formats
 *   4. Creates a gallery manifest.json
 *
 * Usage:  node scripts/optimize-images.mjs
 */

import sharp from 'sharp'
import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC_IMAGES = join(ROOT, 'public', 'images', 'components')
const COMPONENTS_DIR = join(ROOT, 'src', 'content', 'components')

// Responsive sizes to generate
const SIZES = [320, 640, 960, 1280, 1920]

// Quality settings
const WEBP_QUALITY = 82
const AVIF_QUALITY = 75

// Gallery image types — these describe the standard views we want per component
const IMAGE_TYPES = [
  { type: 'front',        label: 'Front View',           priority: 1 },
  { type: 'angle',        label: '45 Degree Angle View', priority: 2 },
  { type: 'pinout',       label: 'Pinout Diagram',       priority: 3 },
  { type: 'symbol',       label: 'Circuit Symbol',       priority: 4 },
  { type: 'application',  label: 'Application Circuit',  priority: 5 },
  { type: 'breadboard',   label: 'Breadboard Setup',     priority: 6 },
  { type: 'pcb',          label: 'PCB Layout',           priority: 7 },
  { type: 'internal',     label: 'Internal Construction',priority: 8 },
  { type: 'package',      label: 'Package Variants',     priority: 9 },
  { type: 'dimensions',   label: 'Dimension Drawing',    priority: 10 },
]

function log(msg, type = 'info') {
  const prefix = type === 'ok' ? '✓' : type === 'warn' ? '⚠' : type === 'err' ? '✗' : '→'
  console.log(`${prefix} ${msg}`)
}

async function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

async function generateVariants(inputPath, outputDir, componentId) {
  const results = []
  const metadata = await sharp(inputPath).metadata()
  const originalWidth = metadata.width
  const originalHeight = metadata.height

  for (const type of IMAGE_TYPES) {
    const baseName = type.type

    // Generate each responsive size
    const sizes = []
    // Always generate at least one size at original resolution for small images
    const effectiveSizes = new Set(SIZES)
    if (originalWidth < 320) effectiveSizes.add(originalWidth)
    const sortedSizes = [...effectiveSizes].sort((a, b) => a - b)

    for (const width of sortedSizes) {
      if (width > Math.max(originalWidth, 1920)) continue // don't upscale beyond 1920

      const webpPath = join(outputDir, `${baseName}-${width}.webp`)
      const avifPath = join(outputDir, `${baseName}-${width}.avif`)

      if (!existsSync(webpPath)) {
        await sharp(inputPath)
          .resize(width, undefined, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(webpPath)
      }

      if (!existsSync(avifPath)) {
        await sharp(inputPath)
          .resize(width, undefined, { fit: 'inside', withoutEnlargement: true })
          .avif({ quality: AVIF_QUALITY })
          .toFile(avifPath)
      }

      const webpStat = statSync(webpPath)
      sizes.push({
        width,
        webp: `${baseName}-${width}.webp`,
        avif: `${baseName}-${width}.avif`,
        size: webpStat.size,
      })
    }

    results.push({
      type: type.type,
      label: type.label,
      priority: type.priority,
      alt: `${componentId.replace(/-/g, ' ')} - ${type.label}`,
      primary: sizes.length > 0 ? `${baseName}-${sizes[0].width}.webp` : null,
      sizes,
    })
  }

  return results
}

async function buildComponentImageSystem() {
  log('Starting image optimization pipeline...\n')

  const components = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)

  let totalSizeBefore = 0
  let totalSizeAfter = 0
  let totalImages = 0

  for (const id of components) {
    const srcPath = join(SRC_IMAGES, `${id}.webp`)
    const srcJpg = join(SRC_IMAGES, `${id}.jpg`)
    const componentDir = join(SRC_IMAGES, id)

    // Determine source image
    let inputPath = null
    if (existsSync(srcPath)) inputPath = srcPath
    else if (existsSync(srcJpg)) inputPath = srcJpg

    if (!inputPath) {
      log(`No source image for "${id}" — creating folder with placeholder manifest`, 'warn')
      await ensureDir(componentDir)
      // Create a minimal manifest
      const manifest = {
        component: id,
        updated: new Date().toISOString(),
        totalImages: 0,
        gallery: [],
      }
      writeFileSync(join(componentDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
      continue
    }

    const sizeBefore = statSync(inputPath).size
    totalSizeBefore += sizeBefore

    await ensureDir(componentDir)

    log(`Processing: ${id} (${(sizeBefore / 1024).toFixed(1)} KB)`)

    // Copy primary image as "front"
    const primaryExt = inputPath.endsWith('.jpg') ? '.jpg' : '.webp'
    const primaryDest = join(componentDir, `front${primaryExt}`)
    if (!existsSync(primaryDest)) {
      copyFileSync(inputPath, primaryDest)
    }

    // Copy original to folder for reference
    const origDest = join(componentDir, `original${primaryExt}`)
    if (!existsSync(origDest)) {
      copyFileSync(inputPath, origDest)
    }

    // Generate variants
    const gallery = await generateVariants(inputPath, componentDir, id)

    // Calculate sizes
    for (const item of gallery) {
      for (const s of item.sizes) {
        totalSizeAfter += s.size
        totalImages++
      }
    }

    // Write manifest
    const manifest = {
      component: id,
      name: id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      updated: new Date().toISOString(),
      totalImages: gallery.reduce((sum, g) => sum + g.sizes.length, 0),
      primary: `front${primaryExt}`,
      gallery,
    }

    writeFileSync(join(componentDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
    log(`  → ${gallery.reduce((sum, g) => sum + g.sizes.length, 0)} variants generated`, 'ok')
  }

  // Summary
  const savings = totalSizeBefore > 0 ? ((1 - totalSizeAfter / totalSizeBefore) * 100).toFixed(1) : 'N/A'
  log('\n═══════════════════════════════════════')
  log(`Components processed: ${components.length}`)
  log(`Total images generated: ${totalImages}`)
  log(`Total size before: ${(totalSizeBefore / 1024 / 1024).toFixed(2)} MB`)
  log(`Total size after (all variants): ${(totalSizeAfter / 1024 / 1024).toFixed(2)} MB`)
  log(`Compression ratio: ${savings}%`)
  log('═══════════════════════════════════════')
}

buildComponentImageSystem().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
