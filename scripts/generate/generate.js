// scripts/generate/generate.js
// Generates 18 JSON content files per component from:
//   - component-list.js  (metadata: id, name, category, order)
//   - component-data.js  (structured Wikipedia-sourced content)
//
// Run with:  node scripts/generate/generate.js
//
// The output schema is derived from how src/pages/Component/Component.jsx
// actually consumes the data (see contentLoader.js + Component.jsx):
//   advantages.json  -> { advantages: [...] }
//   disadvantages.json -> { disadvantages: [...] }   (separate file!)
//   glossary.json    -> { terms: [...] }             (NOT "glossary")

import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import COMPONENTS from './component-list.js'
import { COMPONENT_DATA } from './component-data.js'
import { expandAllStrings } from './expand-strings.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..') // electronics-hub
const CONTENT_DIR = join(ROOT, 'src', 'content', 'components')

function deriveShortDescription(whatIsIt) {
  if (!whatIsIt) return ''
  const firstSentence = whatIsIt.split(/(?<=\.)\s/)[0]
  if (firstSentence.length <= 160) return firstSentence
  return firstSentence.slice(0, 157).trim() + '...'
}

function writeJSON(dir, name, obj) {
  // Single-pass expansion: the expandAllStrings function creates ONE seen set
  // per call, so we pass the whole object at once for per-file tracking.
  // The name field is expanded normally (first-occurrence tracking).
  const expanded = expandAllStrings(obj)
  writeFileSync(join(dir, `${name}.json`), JSON.stringify(expanded, null, 2) + '\n', 'utf8')
}

// Manually expanded names for index display
const EXPANDED_NAMES = {
  'MOSFET': 'Metal–Oxide–Semiconductor Field-Effect Transistor (MOSFET)',
  'JFET': 'Junction Field-Effect Transistor (JFET)',
  'IGBT': 'Insulated-Gate Bipolar Transistor (IGBT)',
  'TRIAC': 'Triode for Alternating Current (TRIAC)',
  'DIAC': 'Diode for Alternating Current (DIAC)',
  'Thyristor (SCR)': 'Silicon Controlled Rectifier (SCR)',
  'DC Power Supply': 'Direct Current (DC) Power Supply',
  'AC Power Supply': 'Alternating Current (AC) Power Supply',
  'DC Motor': 'Direct Current (DC) Motor',
  'LDO Voltage Regulator': 'Low Dropout (LDO) Voltage Regulator',
  'FPGA': 'Field-Programmable Gate Array (FPGA)',
  'OLED Display': 'Organic Light Emitting Diode (OLED) Display',
  'IR Sensor': 'Infrared (IR) Sensor',
  'Logic Gate IC': 'Logic Gate Integrated Circuit (IC)',
  'Audio Amplifier IC': 'Audio Amplifier Integrated Circuit (IC)',
  'Motor Driver IC': 'Motor Driver Integrated Circuit (IC)',
  'Analog to Digital Converter': 'Analog-to-Digital Converter (ADC)',
  'Digital to Analog Converter': 'Digital-to-Analog Converter (DAC)',
  '555 Timer': '555 Timer Integrated Circuit (IC)',
}

function buildFiles(comp, data = {}) {
  const { id, name, category, order } = comp
  const dir = join(CONTENT_DIR, id)
  if (existsSync(dir)) rmSync(dir, { recursive: true, force: true })
  mkdirSync(dir, { recursive: true })

  const thumb = `/assets/images/components/${id}/thumbnail.svg`
  const schematic = `/assets/components/${id}/schematic/symbol.svg`
  const displayName = EXPANDED_NAMES[name] || name

  // metadata
  writeJSON(dir, 'metadata', {
    metadata: {
      id,
      name: displayName,
      category,
      difficulty: data.difficulty || 'beginner',
      prerequisites: data.prerequisites || [],
      order: order || 0,
      status: 'published',
    },
  })

  // overview
  const ov = data.overview || {}
  writeJSON(dir, 'overview', {
    name: displayName,
    id,
    category,
    shortDescription: ov.shortDescription || deriveShortDescription(ov.whatIsIt),
    whatIsIt: ov.whatIsIt || '',
    whyExists: ov.whyExists || '',
    whereUsed: ov.whereUsed || '',
    thumbnail: thumb,
    schematic: schematic,
  })

  // working
  writeJSON(dir, 'working', {
    workingPrinciple: data.working?.workingPrinciple || '',
    steps: data.working?.steps || [],
    microscopicExplanation: data.working?.microscopicExplanation || '',
  })

  // construction
  writeJSON(dir, 'construction', { internalParts: data.construction?.internalParts || [] })

  // types
  writeJSON(dir, 'types', { types: data.types?.types || [] })

  // specifications
  writeJSON(dir, 'specifications', { specifications: data.specifications?.specifications || [] })

  // formulas
  writeJSON(dir, 'formulas', { formulas: data.formulas?.formulas || [] })

  // applications
  writeJSON(dir, 'applications', { applications: data.applications?.applications || [] })

  // advantages (separate file, shape { advantages: [...] })
  writeJSON(dir, 'advantages', { advantages: data.advantages?.advantages || [] })

  // disadvantages (separate file, shape { disadvantages: [...] })
  writeJSON(dir, 'disadvantages', { disadvantages: data.disadvantages?.disadvantages || [] })

  // selection
  writeJSON(dir, 'selection', {
    steps: data.selection?.steps || [],
    tips: data.selection?.tips || [],
  })

  // troubleshooting
  writeJSON(dir, 'troubleshooting', { failureModes: data.troubleshooting?.failureModes || [] })

  // history
  writeJSON(dir, 'history', { invention: data.history?.invention || {} })

  // safety
  writeJSON(dir, 'safety', {
    voltageSafety: data.safety?.voltageSafety || '',
    currentSafety: data.safety?.currentSafety || '',
    thermalSafety: data.safety?.thermalSafety || '',
    handling: data.safety?.handling || '',
    storage: data.safety?.storage || '',
    disposal: data.safety?.disposal || '',
  })

  // glossary -> terms (page expects data.glossary.terms)
  writeJSON(dir, 'glossary', { terms: data.glossary?.glossary || [] })

  // interview
  writeJSON(dir, 'interview', {
    beginner: data.interview?.beginner || [],
    intermediate: data.interview?.intermediate || [],
    advanced: data.interview?.advanced || [],
    expert: data.interview?.expert || [],
  })

  // mcqs — accept either { questions: [...] } or a bare array [...]
  const mcqsRaw = data.mcqs || []
  const questions = Array.isArray(mcqsRaw) ? mcqsRaw : (mcqsRaw.questions || [])
  writeJSON(dir, 'mcqs', { questions })

  // references
  writeJSON(dir, 'references', { references: data.references?.references || [] })

  // related
  writeJSON(dir, 'related', { relatedComponents: data.related?.relatedComponents || [] })
}

// ---- main ----
const compById = Object.fromEntries(
  COMPONENTS.map((c, i) => [c.id, { ...c, order: i + 1 }])
)

let count = 0
let skipped = 0
for (const [id, data] of Object.entries(COMPONENT_DATA)) {
  const comp = compById[id]
  if (!comp) {
    console.warn(`  ! no metadata entry for "${id}" — skipped`)
    skipped++
    continue
  }
  buildFiles(comp, data)
  count++
}
console.log(`\nGenerated ${count} components (${skipped} skipped, ${COMPONENTS.length} total in list).`)
