// scripts/generate/expand-strings.js
// Abbreviation expansion logic — used by generate.js during content generation.
// Expands abbreviations in string values following the textbook rule:
//   First occurrence per file → "Full Term (ABBR)"
//   Subsequent occurrences → "ABBR" alone

// ── Abbreviation definitions ──────────────────────────────────────────
const ABBREVIATIONS = [
  // Single-word abbreviations and acronyms (word-boundary matching)
  // The source text primarily uses abbreviations; when expanded they become "Full Term (ABBR)"
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

// ── Compile regex patterns ────────────────────────────────────────────
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\–-]/g, '\\$&');
}

const compiledPatterns = ABBREVIATIONS.map(entry => {
  let source;
  if (entry.wordBoundary) {
    source = '\\b' + escapeRegex(entry.abbr) + '\\b';
  } else {
    source = escapeRegex(entry.abbr).replace(/\\–/g, '[\\-–]').replace(/\\-/g, '[\\-–]');
  }
  return { regex: new RegExp(source, 'g'), entry };
});

// Sort: longer patterns first for greedy matching
compiledPatterns.sort((a, b) => b.entry.abbr.length - a.entry.abbr.length);

// ── Expand a single string (with per-call tracking) ──────────────────
function expandString(str, seen) {
  if (typeof str !== 'string') return str;
  let result = str;
  for (const { regex, entry } of compiledPatterns) {
    result = result.replace(regex, (...args) => {
      const match = args[0];
      const offset = args[args.length - 2]; // last-1 is offset (last is full string)

      // ── Skip if already in "(ABBR)" parenthetical form ──
      // Check char before match is a paren (maybe with space) and after is paren
      const before = offset > 0 ? result[offset - 1] : '';
      const after = offset + match.length < result.length ? result[offset + match.length] : '';
      const alreadyExpanded = (before === '(' && after === ')');

      if (alreadyExpanded) {
        return match; // Skip — already expanded
      }
      if (seen.has(entry.abbr)) {
        // Already expanded in this file → use abbreviation alone
        return entry.abbr;
      }
      seen.add(entry.abbr);
      return entry.full;
    });
  }
  return result;
}

// ── Walk any value recursively, expanding all strings ────────────────
export function expandAllStrings(value) {
  const seen = new Set();

  function walk(v) {
    if (typeof v === 'string') {
      return expandString(v, seen);
    }
    if (Array.isArray(v)) {
      return v.map(walk);
    }
    if (v && typeof v === 'object') {
      const result = {};
      for (const [key, val] of Object.entries(v)) {
        // Try expanding key too (e.g. "AC" in a name field)
        // But be careful — keep keys simple
        result[key] = walk(val);
      }
      return result;
    }
    return v;
  }

  return walk(value);
}
