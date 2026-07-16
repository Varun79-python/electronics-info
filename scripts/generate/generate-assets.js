// scripts/generate/generate-assets.js
// Creates placeholder SVG assets for every component so the paths referenced in
// overview.json resolve (thumbnail + schematic symbol). These are generic
// placeholders; replace with real artwork later if desired.
//
// Run with:  node scripts/generate/generate-assets.js

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import COMPONENTS from './component-list.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..') // electronics-hub
const PUBLIC = join(ROOT, 'public')

const PALETTE = {
  passive: ['#38bdf8', '#0ea5e9'],
  active: ['#a78bfa', '#8b5cf6'],
  electromechanical: ['#f472b6', '#ec4899'],
  power: ['#fbbf24', '#f59e0b'],
  sensing: ['#34d399', '#10b981'],
  digital: ['#60a5fa', '#3b82f6'],
  display: ['#f87171', '#ef4444'],
  wireless: ['#22d3ee', '#06b6d4'],
  interconnect: ['#c084fc', '#a855f7'],
  protection: ['#facc15', '#eab308'],
  audio: ['#fb923c', '#f97316'],
  misc: ['#94a3b8', '#64748b'],
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function thumbnailSVG(comp) {
  const [c1, c2] = PALETTE[comp.category] || PALETTE.misc
  const initials = comp.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" rx="16" fill="#0b1020"/>
  <rect x="8" y="8" width="384" height="284" rx="12" fill="none" stroke="${c1}" stroke-opacity="0.35"/>
  <circle cx="200" cy="120" r="56" fill="url(#g)" fill-opacity="0.18" stroke="${c1}" stroke-width="2"/>
  <text x="200" y="138" font-family="system-ui, sans-serif" font-size="44" font-weight="700" fill="${c1}" text-anchor="middle">${esc(initials)}</text>
  <text x="200" y="210" font-family="system-ui, sans-serif" font-size="26" font-weight="600" fill="#e5e7eb" text-anchor="middle">${esc(comp.name)}</text>
  <text x="200" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle" letter-spacing="2">${esc(comp.category.toUpperCase())}</text>
</svg>
`
}

function schematicSVG(comp) {
  const [c1] = PALETTE[comp.category] || PALETTE.misc
  return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 200 120">
  <rect width="200" height="120" fill="none"/>
  <line x1="20" y1="60" x2="70" y2="60" stroke="${c1}" stroke-width="2"/>
  <line x1="130" y1="60" x2="180" y2="60" stroke="${c1}" stroke-width="2"/>
  <rect x="70" y="40" width="60" height="40" rx="6" fill="none" stroke="${c1}" stroke-width="2"/>
  <text x="100" y="65" font-family="system-ui, sans-serif" font-size="11" fill="${c1}" text-anchor="middle">${esc(comp.name)}</text>
</svg>
`
}

let count = 0
for (const comp of COMPONENTS) {
  const thumbDir = join(PUBLIC, 'assets', 'images', 'components', comp.id)
  const schDir = join(PUBLIC, 'assets', 'components', comp.id, 'schematic')
  if (!existsSync(thumbDir)) mkdirSync(thumbDir, { recursive: true })
  if (!existsSync(schDir)) mkdirSync(schDir, { recursive: true })
  writeFileSync(join(thumbDir, 'thumbnail.svg'), thumbnailSVG(comp), 'utf8')
  writeFileSync(join(schDir, 'symbol.svg'), schematicSVG(comp), 'utf8')
  count++
}

console.log(`Generated placeholder assets for ${count} components.`)
