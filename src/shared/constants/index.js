export const UNITS = {
  resistance: { symbol: 'Ω', name: 'Ohm', prefixes: ['μΩ', 'mΩ', 'Ω', 'kΩ', 'MΩ', 'GΩ'] },
  capacitance: { symbol: 'F', name: 'Farad', prefixes: ['pF', 'nF', 'μF', 'mF', 'F'] },
  inductance: { symbol: 'H', name: 'Henry', prefixes: ['μH', 'mH', 'H'] },
  voltage: { symbol: 'V', name: 'Volt', prefixes: ['μV', 'mV', 'V', 'kV'] },
  current: { symbol: 'A', name: 'Ampere', prefixes: ['μA', 'mA', 'A', 'kA'] },
  power: { symbol: 'W', name: 'Watt', prefixes: ['mW', 'W', 'kW', 'MW'] },
  frequency: { symbol: 'Hz', name: 'Hertz', prefixes: ['Hz', 'kHz', 'MHz', 'GHz'] },
}

export const COLOR_CODES = {
  black: { value: 0, multiplier: 1, tolerance: null },
  brown: { value: 1, multiplier: 10, tolerance: 1 },
  red: { value: 2, multiplier: 100, tolerance: 2 },
  orange: { value: 3, multiplier: 1000, tolerance: null },
  yellow: { value: 4, multiplier: 10000, tolerance: null },
  green: { value: 5, multiplier: 100000, tolerance: 0.5 },
  blue: { value: 6, multiplier: 1000000, tolerance: 0.25 },
  violet: { value: 7, multiplier: 10000000, tolerance: 0.1 },
  grey: { value: 8, multiplier: null, tolerance: 0.05 },
  white: { value: 9, multiplier: null, tolerance: null },
  gold: { value: null, multiplier: 0.1, tolerance: 5 },
  silver: { value: null, multiplier: 0.01, tolerance: 10 },
}

export const APP_INFO = {
  name: 'ElectronicsInfo',
  tagline: 'Understand Electronics One Component at a Time',
  version: '1.0.0',
  author: 'ElectronicsInfo Team',
  github: 'https://github.com/anomalyco/electronics-hub',
}
