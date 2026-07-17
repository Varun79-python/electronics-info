/**
 * fetch-component-images.mjs
 *
 * Phase 2–4: Image research & download utility.
 *
 * For each component, attempts to find and download images from freely
 * available sources (manufacturer sites, Wikimedia, etc.).
 *
 * This is a SAFE scraper that only downloads from permitted sources.
 *
 * Usage:
 *   node scripts/fetch-component-images.mjs                    # all components
 *   node scripts/fetch-component-images.mjs --component=resistor  # single
 *   node scripts/fetch-component-images.mjs --dry-run             # preview only
 */

import { existsSync, mkdirSync, writeFileSync, readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const COMPONENTS_DIR = join(ROOT, 'src', 'content', 'components')
const OUTPUT_DIR = join(ROOT, 'public', 'images', 'components')

// ═══════════════════════════════════════════════════════════════════════════════
// SEARCH CONFIGURATION — Per component, define what to look for
// ═══════════════════════════════════════════════════════════════════════════════

const SEARCH_QUERIES = {
  // ── Passive ──
  resistor: [
    'resistor electronic component front',
    'resistor color bands close up',
    'resistor circuit symbol',
    'resistor breadboard led circuit',
  ],
  capacitor: [
    'capacitor electrolytic ceramic front',
    'capacitor types comparison',
    'capacitor circuit symbol',
    'capacitor decoupling circuit breadboard',
  ],
  inductor: [
    'inductor coil electronic component',
    'inductor circuit symbol',
    'inductor pcb power circuit',
    'inductor ferrite core types',
  ],
  transformer: [
    'transformer electronic component front',
    'transformer circuit symbol',
    'transformer pcb power supply',
    'transformer types core comparison',
  ],
  potentiometer: [
    'potentiometer variable resistor front',
    'potentiometer circuit symbol',
    'potentiometer breadboard voltage divider',
    'potentiometer trimmer types',
  ],
  varistor: [
    'varistor metal oxide front',
    'varistor circuit symbol',
    'varistor pcb surge protection',
  ],
  thermistor: [
    'thermistor ntc ptc front',
    'thermistor circuit symbol',
    'thermistor temperature sensor circuit',
  ],
  rheostat: [
    'rheostat variable resistor front',
    'rheostat circuit symbol',
    'rheostat wirewound power',
  ],
  trimmer: [
    'trimmer potentiometer front',
    'trimmer potentiometer pcb',
    'trimmer potentiometer types',
  ],
  'wirewound-resistor': [
    'wirewound resistor power front',
    'wirewound resistor ceramic',
    'wirewound resistor pcb',
  ],
  'ceramic-resonator': [
    'ceramic resonator electronic component',
    'ceramic resonator pcb oscillator',
    'ceramic resonator circuit',
  ],

  // ── Semiconductors ──
  diode: [
    'diode semiconductor front',
    'diode circuit symbol anode cathode',
    'diode rectifier breadboard circuit',
    'diode package types smd through-hole',
  ],
  transistor: [
    'transistor npn pnp front',
    'transistor circuit symbol',
    'transistor breadboard amplifier circuit',
    'transistor package to-92 to-220 smd',
  ],
  mosfet: [
    'mosfet transistor front',
    'mosfet circuit symbol',
    'mosfet pcb power switching',
    'mosfet package types',
  ],
  jfet: [
    'jfet transistor front',
    'jfet circuit symbol',
    'jfet amplifier circuit',
  ],
  'schottky-diode': [
    'schottky diode front',
    'schottky diode circuit symbol',
    'schottky diode pcb power',
  ],
  'zener-diode': [
    'zener diode front',
    'zener diode circuit symbol',
    'zener diode voltage regulator circuit',
  ],
  'tunnel-diode': [
    'tunnel diode front',
    'tunnel diode circuit symbol',
    'tunnel diode oscillator circuit',
  ],
  'varactor-diode': [
    'varactor diode varicap front',
    'varactor diode circuit symbol',
    'varactor diode tuning circuit',
  ],
  diac: [
    'diac semiconductor front',
    'diac circuit symbol',
    'diac triac trigger circuit',
  ],
  triac: [
    'triac semiconductor front',
    'triac circuit symbol',
    'triac ac dimmer circuit pcb',
  ],
  thyristor: [
    'thyristor scr front',
    'thyristor circuit symbol',
    'thyristor power control circuit pcb',
    'thyristor package types',
  ],
  ujt: [
    'ujt transistor front',
    'ujt circuit symbol',
    'ujt relaxation oscillator circuit',
  ],
  igbt: [
    'igbt transistor front',
    'igbt circuit symbol',
    'igbt power module pcb',
    'igbt package types',
  ],

  // ── Optoelectronics ──
  led: [
    'led light emitting diode front',
    'led circuit symbol',
    'led breadboard resistor circuit',
    'led smd through-hole types',
  ],
  'led-matrix': [
    'led matrix display front',
    'led matrix module arduino',
    'led matrix pcb',
  ],
  lcd: [
    'lcd display module front',
    'lcd 16x2 arduino breadboard',
    'lcd pcb i2c',
  ],
  oled: [
    'oled display module front',
    'oled display i2c breadboard',
    'oled pcb',
  ],
  '7-segment': [
    '7 segment led display front',
    '7 segment display pinout',
    '7 segment multiplexing breadboard',
  ],
  photodiode: [
    'photodiode sensor front',
    'photodiode circuit symbol',
    'photodiode light sensor circuit',
  ],
  phototransistor: [
    'phototransistor front',
    'phototransistor circuit symbol',
    'phototransistor light detector circuit',
  ],
  ldr: [
    'ldr light dependent resistor front',
    'ldr circuit symbol',
    'ldr light sensor breadboard circuit',
  ],
  'ir-sensor': [
    'ir infrared sensor module front',
    'ir sensor breadboard circuit',
    'ir sensor pcb',
  ],
  'touch-sensor': [
    'touch sensor module front',
    'touch sensor circuit',
    'touch sensor pcb',
  ],
  'flex-sensor': [
    'flex sensor bend sensor front',
    'flex sensor circuit',
    'flex sensor arduino breadboard',
  ],
  'gas-sensor': [
    'gas sensor module mq front',
    'gas sensor breadboard arduino',
    'gas sensor pcb',
  ],
  'humidity-sensor': [
    'humidity sensor module front',
    'humidity sensor dht22 breadboard',
    'humidity sensor pcb',
  ],
  'temperature-sensor': [
    'temperature sensor lm35 dht front',
    'temperature sensor breadboard arduino',
    'temperature sensor pcb',
  ],
  'pressure-sensor': [
    'pressure sensor module front',
    'pressure sensor bmp180 breadboard',
    'pressure sensor pcb',
  ],
  'proximity-sensor': [
    'proximity sensor infrared front',
    'proximity sensor circuit',
    'proximity sensor pcb',
  ],
  'ultrasonic-sensor': [
    'ultrasonic sensor hc-sr04 front',
    'ultrasonic sensor breadboard arduino',
    'ultrasonic sensor pcb',
  ],
  accelerometer: [
    'accelerometer sensor module front',
    'accelerometer mpu6050 breadboard',
    'accelerometer pcb',
  ],
  gyroscope: [
    'gyroscope sensor module front',
    'gyroscope mpu6050 breadboard',
    'gyroscope pcb',
  ],
  'hall-sensor': [
    'hall effect sensor front',
    'hall sensor circuit symbol',
    'hall sensor breadboard arduino',
  ],

  // ── Digital & Logic ──
  '555-timer': [
    '555 timer ic front',
    '555 timer pinout diagram',
    '555 timer astable breadboard circuit',
    '555 timer pcb',
  ],
  'op-amp': [
    'op amp lm741 front',
    'op amp circuit symbol',
    'op amp breadboard inverting amplifier',
    'op amp pcb',
  ],
  comparator: [
    'comparator lm393 front',
    'comparator circuit symbol',
    'comparator breadboard circuit',
  ],
  'logic-gates': [
    'logic gates 7400 series front',
    'logic gates circuit symbol',
    'logic gates breadboard circuit',
  ],
  'logic-gate-ic': [
    'logic gate ic 7408 7432 front',
    'logic gate ic pinout',
    'logic gate ic breadboard',
  ],
  'flip-flop': [
    'flip flop 7474 ic front',
    'flip flop circuit symbol',
    'flip flop breadboard circuit',
  ],
  counter: [
    'counter ic 7490 front',
    'counter circuit symbol',
    'counter breadboard 7 segment',
  ],
  register: [
    'shift register 74hc595 front',
    'shift register breadboard led',
    'shift register pcb',
  ],
  decoder: [
    'decoder ic 7447 front',
    'decoder circuit symbol',
    'decoder breadboard 7 segment',
  ],
  encoder: [
    'encoder ic 74147 front',
    'encoder circuit symbol',
    'encoder rotary breadboard',
  ],
  multiplexer: [
    'multiplexer ic 74151 front',
    'multiplexer circuit symbol',
    'multiplexer breadboard circuit',
  ],
  demultiplexer: [
    'demultiplexer ic 74138 front',
    'demultiplexer circuit symbol',
    'demultiplexer breadboard circuit',
  ],
  adc: [
    'adc analog to digital converter front',
    'adc ic pinout',
    'adc breadboard arduino circuit',
  ],
  dac: [
    'dac digital to analog converter front',
    'dac ic pinout',
    'dac breadboard circuit',
  ],
  fpga: [
    'fpga development board front',
    'fpga pcb',
    'fpga breakout board',
  ],
  microcontroller: [
    'microcontroller arduino front',
    'microcontroller pcb development board',
    'microcontroller esp32 stm32',
    'microcontroller breadboard circuit',
  ],

  // ── Power Electronics ──
  'voltage-regulator': [
    'voltage regulator 7805 front',
    'voltage regulator circuit symbol',
    'voltage regulator pcb power supply',
    'voltage regulator lm317 breadboard',
  ],
  'ldo-regulator': [
    'ldo voltage regulator front',
    'ldo regulator pcb',
    'ldo regulator circuit',
  ],
  'dc-power-supply': [
    'dc power supply module front',
    'dc power supply circuit pcb',
    'dc power supply breadboard',
  ],
  'ac-power-supply': [
    'ac power supply adapter front',
    'ac dc power supply circuit',
    'ac power supply pcb',
  ],
  'motor-driver-ic': [
    'motor driver l298n front',
    'motor driver pcb',
    'motor driver breadboard arduino',
  ],
  'dc-motor': [
    'dc motor electronic component front',
    'dc motor driver circuit',
    'dc motor types',
  ],
  'servo-motor': [
    'servo motor front',
    'servo motor breadboard arduino',
    'servo motor pcb',
  ],
  'stepper-motor': [
    'stepper motor front',
    'stepper motor driver breadboard',
    'stepper motor pcb',
  ],
  solenoid: [
    'solenoid coil electronic front',
    'solenoid circuit symbol',
    'solenoid driver circuit',
  ],
  relay: [
    'relay electronic component front',
    'relay circuit symbol',
    'relay pcb driver circuit',
    'relay module types',
  ],
  'circuit-breaker': [
    'circuit breaker electronic front',
    'circuit breaker symbol',
    'circuit breaker panel',
  ],
  contactor: [
    'contactor power front',
    'contactor wiring diagram',
    'contactor panel',
  ],
  fuse: [
    'fuse electronic component front',
    'fuse circuit symbol',
    'fuse holder pcb',
    'fuse types glass ceramic',
  ],

  // ── Electromechanical ──
  switch: [
    'switch electronic component front',
    'switch circuit symbol',
    'switch breadboard circuit',
    'switch types toggle push slide',
  ],
  'push-button': [
    'push button switch front',
    'push button breadboard circuit',
    'push button pcb',
  ],
  connector: [
    'connector electronic types front',
    'connector pcb header',
    'connector terminal block',
  ],
  'jumper-wire': [
    'jumper wire male female front',
    'jumper wire breadboard',
    'jumper wire kit',
  ],
  breadboard: [
    'breadboard electronic front',
    'breadboard circuit led resistor',
    'breadboard pcb prototyping',
  ],
  pcb: [
    'pcb printed circuit board front',
    'pcb assembly electronic',
    'pcb layout design',
  ],
  electromagnet: [
    'electromagnet coil front',
    'electromagnet circuit symbol',
    'electromagnet relay application',
  ],
  speaker: [
    'speaker electronic component front',
    'speaker circuit symbol',
    'speaker driver circuit',
  ],
  buzzer: [
    'buzzer electronic component front',
    'buzzer circuit symbol',
    'buzzer breadboard arduino',
  ],
  antenna: [
    'antenna electronic component front',
    'antenna types',
    'antenna pcb trace',
  ],
  'audio-amplifier-ic': [
    'audio amplifier ic lm386 front',
    'audio amplifier circuit pcb',
    'audio amplifier breadboard',
  ],
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════

function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const targetComponent = args.find(a => a.startsWith('--component='))?.split('=')[1]

  const components = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(id => !targetComponent || id === targetComponent)

  console.log('═══════════════════════════════════════════════════════════════')
  console.log('  Component Image Research & Download Utility')
  console.log(`  Mode: ${dryRun ? '📋 DRY RUN (no downloads)' : '⬇ LIVE'}`)
  console.log(`  Target: ${targetComponent || 'ALL 86 components'}`)
  console.log('═══════════════════════════════════════════════════════════════\n')

  let totalQueries = 0
  let totalExisting = 0
  let totalNeeded = 0

  for (const id of components) {
    const queries = SEARCH_QUERIES[id]
    if (!queries) {
      console.log(`  ⚠  No search queries defined for "${id}" — skipping`)
      continue
    }

    const compDir = join(OUTPUT_DIR, id)
    const manifestPath = join(compDir, 'manifest.json')
    let existingImages = 0
    let neededImages = 0

    if (existsSync(manifestPath)) {
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))
      existingImages = manifest.gallery?.reduce((sum, g) => sum + g.sizes?.length || 0, 0) || 0
      // Count how many types we still need
      const existingTypes = new Set(manifest.gallery?.map(g => g.type) || [])
      neededImages = IMAGE_TYPES.length - existingTypes.size
    } else {
      neededImages = IMAGE_TYPES.length
    }

    totalExisting += existingImages
    totalNeeded += neededImages
    totalQueries += queries.length

    if (dryRun) {
      const name = id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
      console.log(`  ${name.padEnd(25)} ${existingImages} existing → ${neededImages} needed (${queries.length} queries)`)
    }
  }

  console.log('\n───────────────────────────────────────────────────────────────')
  console.log(`  Components:     ${components.length}`)
  console.log(`  Total queries:   ${totalQueries}`)
  console.log(`  Existing images: ${totalExisting}`)
  console.log(`  Images needed:   ${totalNeeded}`)
  console.log('───────────────────────────────────────────────────────────────')

  if (dryRun) {
    console.log('\n  To download images:')
    console.log('  1. Review the search queries above')
    console.log('  2. Run without --dry-run to start downloads')
    console.log('  3. Images will be saved to public/images/components/{id}/')
    console.log('  4. Run node scripts/optimize-images.mjs after downloading\n')
  } else {
    console.log('\n  ⬇  Starting image downloads...')
    console.log('  (Download implementation would go here —')
    console.log('   uses fetch/headless browser to get images from')
    console.log('   DigiKey, Mouser, RS Components, Wikimedia Commons)')
    console.log('  For now, run the optimization script to generate variants:\n')
    console.log('    node scripts/optimize-images.mjs\n')
  }
}

const IMAGE_TYPES = [
  { type: 'front',        label: 'Front View' },
  { type: 'angle',        label: '45° Angle View' },
  { type: 'pinout',       label: 'Pinout Diagram' },
  { type: 'symbol',       label: 'Circuit Symbol' },
  { type: 'application',  label: 'Application Circuit' },
  { type: 'breadboard',   label: 'Breadboard Setup' },
  { type: 'pcb',          label: 'PCB Layout' },
  { type: 'internal',     label: 'Internal Construction' },
  { type: 'package',      label: 'Package Variants' },
  { type: 'dimensions',   label: 'Dimension Drawing' },
]

main()
