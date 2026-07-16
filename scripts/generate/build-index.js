// scripts/generate/build-index.js
// Regenerates the two component index files from the master list + data:
//   - src/shared/constants/components.js   (componentsIndex: { id, name, category, description, tags })
//   - src/content/index/components.json     ([ { id, name, category, tags } ])
//
// Run with:  node scripts/generate/build-index.js

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import COMPONENTS from './component-list.js'
import { COMPONENT_DATA } from './component-data.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..') // electronics-hub

// Reuse the richer custom descriptions/tags already written for the first 8.
const EXISTING = {
  resistor: {
    description: 'A passive two-terminal electrical component that implements electrical resistance.',
    tags: ['resistance', 'ohm', 'passive', 'current limiting'],
  },
  capacitor: {
    description: 'A passive two-terminal electronic component that stores electrical energy.',
    tags: ['capacitance', 'farad', 'passive', 'energy storage'],
  },
  diode: {
    description: 'A two-terminal electronic component that conducts current primarily in one direction.',
    tags: ['rectifier', 'semiconductor', 'pn-junction'],
  },
  transistor: {
    description: 'A semiconductor device used to amplify or switch electronic signals.',
    tags: ['amplifier', 'switch', 'BJT', 'semiconductor'],
  },
  mosfet: {
    description: 'A field-effect transistor used for switching and amplifying electronic signals.',
    tags: ['fet', 'field-effect', 'switch', 'semiconductor'],
  },
  relay: {
    description: 'An electrically operated switch that uses an electromagnet.',
    tags: ['switch', 'electromagnet', 'electromechanical'],
  },
  transformer: {
    description: 'A passive component that transfers electrical energy between circuits.',
    tags: ['induction', 'voltage', 'power'],
  },
  battery: {
    description: 'A device that stores chemical energy and converts it to electrical energy.',
    tags: ['power', 'dc', 'energy storage', 'electrochemical'],
  },
}

function deriveDescription(id) {
  if (EXISTING[id]) return EXISTING[id].description
  const whatIsIt = COMPONENT_DATA[id]?.overview?.whatIsIt || ''
  // first sentence, trimmed
  const first = whatIsIt.split(/(?<=\.)\s/)[0] || ''
  return first.length > 200 ? first.slice(0, 197).trim() + '...' : first
}

function deriveTags(comp) {
  if (EXISTING[comp.id]) return EXISTING[comp.id].tags
  const tags = [comp.category]
  const words = comp.name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(' ').filter(Boolean)
  for (const w of words) if (w.length > 2 && !tags.includes(w)) tags.push(w)
  return tags.slice(0, 6)
}

const index = {}
const jsonList = []
for (const comp of COMPONENTS) {
  const description = deriveDescription(comp.id)
  const tags = deriveTags(comp)
  index[comp.id] = {
    id: comp.id,
    name: comp.name,
    category: comp.category,
    description,
    tags,
  }
  jsonList.push({ id: comp.id, name: comp.name, category: comp.category, tags })
}

// Write constants/components.js
const constLines = ['const componentsIndex = {']
for (const comp of COMPONENTS) {
  const e = index[comp.id]
  const tagsStr = '[' + e.tags.map((t) => `'${t}'`).join(', ') + ']'
  const descStr = `'${e.description.replace(/'/g, "\\'")}'`
  constLines.push(`  '${e.id}': {`)
  constLines.push(`    id: '${e.id}',`)
  constLines.push(`    name: '${e.name.replace(/'/g, "\\'")}',`)
  constLines.push(`    category: '${e.category}',`)
  constLines.push(`    description: ${descStr},`)
  constLines.push(`    tags: ${tagsStr},`)
  constLines.push(`  },`)
}
constLines.push('}')
constLines.push('')
constLines.push('export default componentsIndex')
constLines.push('')
writeFileSync(
  join(ROOT, 'src', 'shared', 'constants', 'components.js'),
  constLines.join('\n'),
  'utf8'
)

// Write content/index/components.json
writeFileSync(
  join(ROOT, 'src', 'content', 'index', 'components.json'),
  JSON.stringify(jsonList, null, 2) + '\n',
  'utf8'
)

console.log(`Wrote index for ${COMPONENTS.length} components.`)
