// expand-abbreviations.js
// Walks all JSON files in src/content/components/ and expands abbreviations
// Rules per file: first occurrence → "Full Term (ABBR)", subsequent → "ABBR"

const fs = require('fs');
const path = require('path');

// ── Abbreviation definitions (ordered by len desc for greedy matching) ─
const ABBREVIATIONS = [
  // abbr is what appears in source text; full is what it becomes
  { abbr: 'Complementary Metal-Oxide-Semiconductor', full: 'Complementary Metal–Oxide–Semiconductor (CMOS)' },
  { abbr: 'Transistor-Transistor Logic', full: 'Transistor–Transistor Logic (TTL)' },
  { abbr: 'Insulated-Gate Bipolar Transistor', full: 'Insulated-Gate Bipolar Transistor (IGBT)' },
  { abbr: 'Uninterruptible Power Supply', full: 'Uninterruptible Power Supply (UPS)' },
  { abbr: 'Switched-Mode Power Supply', full: 'Switched-Mode Power Supply (SMPS)' },
  { abbr: 'Operational Amplifier', full: 'Operational Amplifier (Op-Amp)' },
  { abbr: 'Bipolar Junction Transistor', full: 'Bipolar Junction Transistor (BJT)' },
  { abbr: 'Light Dependent Resistor', full: 'Light Dependent Resistor (LDR)' },
  { abbr: 'Analog-to-Digital Converter', full: 'Analog-to-Digital Converter (ADC)' },
  { abbr: 'Digital-to-Analog Converter', full: 'Digital-to-Analog Converter (DAC)' },
  { abbr: 'Microcontroller Unit', full: 'Microcontroller Unit (MCU)' },
  { abbr: 'Pulse Width Modulation', full: 'Pulse Width Modulation (PWM)' },
  { abbr: 'Electromagnetic Interference', full: 'Electromagnetic Interference (EMI)' },
  { abbr: 'Electromagnetic Compatibility', full: 'Electromagnetic Compatibility (EMC)' },
  { abbr: 'Electrostatic Discharge', full: 'Electrostatic Discharge (ESD)' },
  { abbr: 'Electromotive Force', full: 'Electromotive Force (EMF)' },
  { abbr: 'Digital Signal Processing', full: 'Digital Signal Processing (DSP)' },
  { abbr: 'Radio Frequency', full: 'Radio Frequency (RF)' },
  { abbr: 'Resistance Temperature Detector', full: 'Resistance Temperature Detector (RTD)' },
  { abbr: 'Silicon Controlled Rectifier', full: 'Silicon Controlled Rectifier (SCR)' },
  { abbr: 'Junction Field-Effect Transistor', full: 'Junction Field-Effect Transistor (JFET)' },
  { abbr: 'Unijunction Transistor', full: 'Unijunction Transistor (UJT)' },
  { abbr: 'Very Large Scale Integration', full: 'Very Large Scale Integration (VLSI)' },
  { abbr: 'Field-Programmable Gate Array', full: 'Field-Programmable Gate Array (FPGA)' },
  { abbr: 'Application-Specific Integrated Circuit', full: 'Application-Specific Integrated Circuit (ASIC)' },
  { abbr: 'Microelectromechanical Systems', full: 'Microelectromechanical Systems (MEMS)' },
  { abbr: 'Universal Asynchronous Receiver-Transmitter', full: 'Universal Asynchronous Receiver-Transmitter (UART)' },
  { abbr: 'Global Positioning System', full: 'Global Positioning System (GPS)' },
  { abbr: 'Serial Peripheral Interface', full: 'Serial Peripheral Interface (SPI)' },
  { abbr: 'Local Area Network', full: 'Local Area Network (LAN)' },
  { abbr: 'Wide Area Network', full: 'Wide Area Network (WAN)' },
  { abbr: 'Global System for Mobile Communications', full: 'Global System for Mobile Communications (GSM)' },
  { abbr: 'Long-Term Evolution', full: 'Long-Term Evolution (LTE)' },
  { abbr: 'High-Definition Multimedia Interface', full: 'High-Definition Multimedia Interface (HDMI)' },
  { abbr: 'Universal Serial Bus', full: 'Universal Serial Bus (USB)' },
  { abbr: 'Internet of Things', full: 'Internet of Things (IoT)' },
  { abbr: 'Artificial Intelligence', full: 'Artificial Intelligence (AI)' },
  { abbr: 'Machine Learning', full: 'Machine Learning (ML)' },
  { abbr: 'Central Processing Unit', full: 'Central Processing Unit (CPU)' },
  { abbr: 'Graphics Processing Unit', full: 'Graphics Processing Unit (GPU)' },
  { abbr: 'Random Access Memory', full: 'Random Access Memory (RAM)' },
  { abbr: 'Read-Only Memory', full: 'Read-Only Memory (ROM)' },
  { abbr: 'Liquid Crystal Display', full: 'Liquid Crystal Display (LCD)' },
  { abbr: 'Light Emitting Diode', full: 'Light Emitting Diode (LED)' },
  { abbr: 'Organic Light Emitting Diode', full: 'Organic Light Emitting Diode (OLED)' },
  { abbr: 'Alternating Current', full: 'Alternating Current (AC)' },
  { abbr: 'Direct Current', full: 'Direct Current (DC)' },
  { abbr: 'Metal–Oxide–Semiconductor Field-Effect Transistor', full: 'Metal–Oxide–Semiconductor Field-Effect Transistor (MOSFET)' },
  { abbr: 'Microprocessor Unit', full: 'Microprocessor Unit (MPU)' },
  { abbr: 'Integrated Circuit', full: 'Integrated Circuit (IC)' },
  { abbr: 'Printed Circuit Board', full: 'Printed Circuit Board (PCB)' },
  
  // ── Single-word abbreviations (matched with word boundaries) ──
  { abbr: 'MOSFET', full: 'Metal–Oxide–Semiconductor Field-Effect Transistor (MOSFET)', wordBoundary: true },
  { abbr: 'CMOS', full: 'Complementary Metal–Oxide–Semiconductor (CMOS)', wordBoundary: true },
  { abbr: 'TTL', full: 'Transistor–Transistor Logic (TTL)', wordBoundary: true },
  { abbr: 'IGBT', full: 'Insulated-Gate Bipolar Transistor (IGBT)', wordBoundary: true },
  { abbr: 'UART', full: 'Universal Asynchronous Receiver-Transmitter (UART)', wordBoundary: true },
  { abbr: 'FPGA', full: 'Field-Programmable Gate Array (FPGA)', wordBoundary: true },
  { abbr: 'USB', full: 'Universal Serial Bus (USB)', wordBoundary: true },
  { abbr: 'HDMI', full: 'High-Definition Multimedia Interface (HDMI)', wordBoundary: true },
  { abbr: 'EEPROM', full: 'Electrically Erasable Programmable Read-Only Memory (EEPROM)', wordBoundary: true },
  { abbr: 'ASIC', full: 'Application-Specific Integrated Circuit (ASIC)', wordBoundary: true },
  { abbr: 'MEMS', full: 'Microelectromechanical Systems (MEMS)', wordBoundary: true },
  { abbr: 'SMPS', full: 'Switched-Mode Power Supply (SMPS)', wordBoundary: true },
  { abbr: 'VLSI', full: 'Very Large Scale Integration (VLSI)', wordBoundary: true },
  { abbr: 'MCU', full: 'Microcontroller Unit (MCU)', wordBoundary: true },
  { abbr: 'ADC', full: 'Analog-to-Digital Converter (ADC)', wordBoundary: true },
  { abbr: 'DAC', full: 'Digital-to-Analog Converter (DAC)', wordBoundary: true },
  { abbr: 'PWM', full: 'Pulse Width Modulation (PWM)', wordBoundary: true },
  { abbr: 'EMI', full: 'Electromagnetic Interference (EMI)', wordBoundary: true },
  { abbr: 'EMC', full: 'Electromagnetic Compatibility (EMC)', wordBoundary: true },
  { abbr: 'ESD', full: 'Electrostatic Discharge (ESD)', wordBoundary: true },
  { abbr: 'DSP', full: 'Digital Signal Processing (DSP)', wordBoundary: true },
  { abbr: 'GPS', full: 'Global Positioning System (GPS)', wordBoundary: true },
  { abbr: 'SPI', full: 'Serial Peripheral Interface (SPI)', wordBoundary: true },
  { abbr: 'UPS', full: 'Uninterruptible Power Supply (UPS)', wordBoundary: true },
  { abbr: 'LDO', full: 'Low Dropout (LDO)', wordBoundary: true },
  { abbr: 'LDR', full: 'Light Dependent Resistor (LDR)', wordBoundary: true },
  { abbr: 'RTD', full: 'Resistance Temperature Detector (RTD)', wordBoundary: true },
  { abbr: 'SCR', full: 'Silicon Controlled Rectifier (SCR)', wordBoundary: true },
  { abbr: 'BJT', full: 'Bipolar Junction Transistor (BJT)', wordBoundary: true },
  { abbr: 'UJT', full: 'Unijunction Transistor (UJT)', wordBoundary: true },
  { abbr: 'LED', full: 'Light Emitting Diode (LED)', wordBoundary: true },
  { abbr: 'LCD', full: 'Liquid Crystal Display (LCD)', wordBoundary: true },
  { abbr: 'OLED', full: 'Organic Light Emitting Diode (OLED)', wordBoundary: true },
  { abbr: 'CPU', full: 'Central Processing Unit (CPU)', wordBoundary: true },
  { abbr: 'GPU', full: 'Graphics Processing Unit (GPU)', wordBoundary: true },
  { abbr: 'MPU', full: 'Microprocessor Unit (MPU)', wordBoundary: true },
  { abbr: 'RAM', full: 'Random Access Memory (RAM)', wordBoundary: true },
  { abbr: 'ROM', full: 'Read-Only Memory (ROM)', wordBoundary: true },
  { abbr: 'IoT', full: 'Internet of Things (IoT)', wordBoundary: true },
  { abbr: 'AI', full: 'Artificial Intelligence (AI)', wordBoundary: true },
  { abbr: 'ML', full: 'Machine Learning (ML)', wordBoundary: true },
  { abbr: 'RF', full: 'Radio Frequency (RF)', wordBoundary: true },
  { abbr: 'DC', full: 'Direct Current (DC)', wordBoundary: true },
  { abbr: 'AC', full: 'Alternating Current (AC)', wordBoundary: true },
  { abbr: 'IC', full: 'Integrated Circuit (IC)', wordBoundary: true },
  { abbr: 'PCB', full: 'Printed Circuit Board (PCB)', wordBoundary: true },
  { abbr: 'TRIAC', full: 'Triode for Alternating Current (TRIAC)', wordBoundary: true },
  { abbr: 'DIAC', full: 'Diode for Alternating Current (DIAC)', wordBoundary: true },
  { abbr: 'JFET', full: 'Junction Field-Effect Transistor (JFET)', wordBoundary: true },
  { abbr: 'FET', full: 'Field-Effect Transistor (FET)', wordBoundary: true },
  { abbr: 'IR', full: 'Infrared (IR)', wordBoundary: true },
  { abbr: 'GSM', full: 'Global System for Mobile Communications (GSM)', wordBoundary: true },
  { abbr: 'LTE', full: 'Long-Term Evolution (LTE)', wordBoundary: true },
  { abbr: 'LAN', full: 'Local Area Network (LAN)', wordBoundary: true },
  { abbr: 'WAN', full: 'Wide Area Network (WAN)', wordBoundary: true },
  { abbr: 'MUX', full: 'Multiplexer (MUX)', wordBoundary: true },
  { abbr: 'DEMUX', full: 'Demultiplexer (DEMUX)', wordBoundary: true },
  { abbr: 'NTC', full: 'Negative Temperature Coefficient Thermistor (NTC)', wordBoundary: true },
  { abbr: 'PTC', full: 'Positive Temperature Coefficient Thermistor (PTC)', wordBoundary: true },
];

// ── Compile patterns ──────────────────────────────────────────────────
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\–-]/g, '\\$&');
}

function compilePatterns() {
  return ABBREVIATIONS.map(entry => {
    let source;
    if (entry.wordBoundary) {
      source = '\\b' + escapeRegex(entry.abbr) + '\\b';
    } else {
      // Multi-word phrases — match whole phrase
      source = escapeRegex(entry.abbr)
        .replace(/\\–/g, '[\\-–]')  // normalize dashes
        .replace(/\\-/g, '[\\-–]');
    }
    return {
      regex: new RegExp(source, 'g'),
      entry
    };
  });
}

const compiledPatterns = compilePatterns();

// Sort: longer patterns first (greedy matching)
compiledPatterns.sort((a, b) => b.entry.abbr.length - a.entry.abbr.length);

// ── String expansion with per-file first-occurrence tracking ──────────
// We track first occurrence PER FILE. The `seen` Set is passed through.
function expandInString(str, seen) {
  let result = str;
  for (const { regex, entry } of compiledPatterns) {
    result = result.replace(regex, (match) => {
      // Already expanded via longer match (e.g., "MOSFET" already expanded if "Power MOSFET" matched first)
      if (seen.has(entry.abbr)) {
        // Already seen in this file — use abbreviation alone
        // But check: was the earlier expansion a full-term expansion or a different context?
        // We stored the full form; subsequent occurrences should use just the abbreviation
        return entry.abbr;
      }
      seen.add(entry.abbr);
      return entry.full;
    });
  }
  return result;
}

function walkAndExpand(obj, seen) {
  if (typeof obj === 'string') {
    return expandInString(obj, seen);
  } else if (Array.isArray(obj)) {
    return obj.map(item => walkAndExpand(item, seen));
  } else if (obj && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = walkAndExpand(value, seen);
    }
    return result;
  }
  return obj;
}

// ── Main ──────────────────────────────────────────────────────────────

const contentDir = path.join(__dirname, '..', 'src', 'content', 'components');

// Recursively find all JSON files
function findJsonFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findJsonFiles(fullPath));
    } else if (entry.name.endsWith('.json')) {
      results.push(fullPath);
    }
  }
  return results;
}

const jsonFiles = findJsonFiles(contentDir);
console.log(`Found ${jsonFiles.length} JSON files to process.`);

let filesModified = 0;
let totalExpansions = 0;

for (const filePath of jsonFiles) {
  const content = fs.readFileSync(filePath, 'utf-8');
  let data;
  try {
    data = JSON.parse(content);
  } catch (e) {
    console.error(`  ✗ Parse error in ${path.relative(contentDir, filePath)}: ${e.message}`);
    continue;
  }

  // Each file gets its own seen set (first occurrence per section)
  const seen = new Set();
  const expanded = walkAndExpand(data, seen);
  const newContent = JSON.stringify(expanded, null, 2) + '\n';

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    filesModified++;
    totalExpansions += seen.size;
    if (filesModified <= 5 || filesModified % 100 === 0) {
      console.log(`  ✓ ${path.relative(contentDir, filePath)} (${seen.size} first-occurrence expansions)`);
    }
  }
}

console.log(`\nModified ${filesModified} / ${jsonFiles.length} files. ${totalExpansions} unique first-occurrence expansions across files.`);
