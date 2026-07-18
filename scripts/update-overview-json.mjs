/**
 * update-overview-json.mjs
 * Updates all 86 overview.json files to remove SVG references.
 * 
 * Changes:
 *   thumbnail: /assets/images/components/{id}/thumbnail.svg
 *     → /images/components/{id}/{id}-640.webp
 *   schematic: removed (no SVG files exist for this)
 */

import { existsSync, readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const COMPONENTS_DIR = join(__dirname, '..', 'src', 'content', 'components')

function updateOverview(componentId) {
  const filePath = join(COMPONENTS_DIR, componentId, 'overview.json')
  if (!existsSync(filePath)) {
    console.log(`✗ ${componentId}: no overview.json`)
    return
  }
  
  const raw = readFileSync(filePath, 'utf-8')
  const data = JSON.parse(raw)
  
  let changed = false
  
  // Update thumbnail
  if (data.thumbnail && data.thumbnail.endsWith('.svg')) {
    data.thumbnail = `/images/components/${componentId}/${componentId}-640.webp`
    changed = true
  }
  
  // Remove schematic (points to non-existent SVG)
  if (data.schematic) {
    delete data.schematic
    changed = true
  }
  
  if (changed) {
    writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8')
    console.log(`✓ ${componentId}: updated`)
  } else {
    console.log(`  ${componentId}: no changes needed`)
  }
}

function main() {
  const dirs = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort()
  
  console.log(`═══ Updating ${dirs.length} overview.json files ═══`)
  
  for (const id of dirs) {
    updateOverview(id)
  }
  
  console.log(`\nDone! ${dirs.length} files processed`)
}

main()
