import { useState } from 'react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card } from '../../shared/components/common'
import { cn } from '../../shared/utils'

const DIGIT_COLORS = [
  { name: 'Black', hex: '#1e293b', value: 0 },
  { name: 'Brown', hex: '#78350f', value: 1 },
  { name: 'Red', hex: '#ef4444', value: 2 },
  { name: 'Orange', hex: '#f97316', value: 3 },
  { name: 'Yellow', hex: '#eab308', value: 4 },
  { name: 'Green', hex: '#22c55e', value: 5 },
  { name: 'Blue', hex: '#3b82f6', value: 6 },
  { name: 'Violet', hex: '#a855f7', value: 7 },
  { name: 'Grey', hex: '#64748b', value: 8 },
  { name: 'White', hex: '#ffffff', value: 9 },
]

const MULTIPLIER_COLORS = [
  { name: 'Black', hex: '#1e293b', value: 1, display: '×1 Ω' },
  { name: 'Brown', hex: '#78350f', value: 10, display: '×10 Ω' },
  { name: 'Red', hex: '#ef4444', value: 100, display: '×100 Ω' },
  { name: 'Orange', hex: '#f97316', value: 1000, display: '×1 kΩ' },
  { name: 'Yellow', hex: '#eab308', value: 10000, display: '×10 kΩ' },
  { name: 'Green', hex: '#22c55e', value: 100000, display: '×100 kΩ' },
  { name: 'Blue', hex: '#3b82f6', value: 1000000, display: '×1 MΩ' },
  { name: 'Violet', hex: '#a855f7', value: 10000000, display: '×10 MΩ' },
  { name: 'Grey', hex: '#64748b', value: 100000000, display: '×100 MΩ' },
  { name: 'White', hex: '#ffffff', value: 1000000000, display: '×1 GΩ' },
  { name: 'Gold', hex: '#d97706', value: 0.1, display: '×0.1 Ω' },
  { name: 'Silver', hex: '#94a3b8', value: 0.01, display: '×0.01 Ω' },
]

const TOLERANCE_COLORS = [
  { name: 'Brown', hex: '#78350f', value: 1 },
  { name: 'Red', hex: '#ef4444', value: 2 },
  { name: 'Green', hex: '#22c55e', value: 0.5 },
  { name: 'Blue', hex: '#3b82f6', value: 0.25 },
  { name: 'Violet', hex: '#a855f7', value: 0.1 },
  { name: 'Grey', hex: '#64748b', value: 0.05 },
  { name: 'Gold', hex: '#d97706', value: 5 },
  { name: 'Silver', hex: '#94a3b8', value: 10 },
]

const TEMP_COEFF_COLORS = [
  { name: 'Black', hex: '#1e293b', value: 250 },
  { name: 'Brown', hex: '#78350f', value: 100 },
  { name: 'Red', hex: '#ef4444', value: 50 },
  { name: 'Orange', hex: '#f97316', value: 15 },
  { name: 'Yellow', hex: '#eab308', value: 25 },
  { name: 'Green', hex: '#22c55e', value: 20 },
  { name: 'Blue', hex: '#3b82f6', value: 10 },
  { name: 'Violet', hex: '#a855f7', value: 5 },
  { name: 'Grey', hex: '#64748b', value: 1 },
]

export default function Calculator() {
  const [bandCount, setBandCount] = useState(4)
  const [band1, setBand1] = useState(2) // Red (2)
  const [band2, setBand2] = useState(2) // Red (2)
  const [band3, setBand3] = useState(0) // Black (0)
  const [multiplier, setMultiplier] = useState(1) // Brown (x10)
  const [tolerance, setTolerance] = useState(6) // Gold (5%)
  const [tempCoeff, setTempCoeff] = useState(1) // Brown (100 ppm)
  const [activeBandIndex, setActiveBandIndex] = useState(0)

  // Standard Resistor color body config
  const getBandsInfo = () => {
    switch (bandCount) {
      case 3:
        return [
          { label: '1st Digit', type: 'digit', value: band1, setter: setBand1, colors: DIGIT_COLORS, active: activeBandIndex === 0 },
          { label: '2nd Digit', type: 'digit', value: band2, setter: setBand2, colors: DIGIT_COLORS, active: activeBandIndex === 1 },
          { label: 'Multiplier', type: 'multiplier', value: multiplier, setter: setMultiplier, colors: MULTIPLIER_COLORS, active: activeBandIndex === 2 }
        ]
      case 5:
        return [
          { label: '1st Digit', type: 'digit', value: band1, setter: setBand1, colors: DIGIT_COLORS, active: activeBandIndex === 0 },
          { label: '2nd Digit', type: 'digit', value: band2, setter: setBand2, colors: DIGIT_COLORS, active: activeBandIndex === 1 },
          { label: '3rd Digit', type: 'digit', value: band3, setter: setBand3, colors: DIGIT_COLORS, active: activeBandIndex === 2 },
          { label: 'Multiplier', type: 'multiplier', value: multiplier, setter: setMultiplier, colors: MULTIPLIER_COLORS, active: activeBandIndex === 3 },
          { label: 'Tolerance', type: 'tolerance', value: tolerance, setter: setTolerance, colors: TOLERANCE_COLORS, active: activeBandIndex === 4 }
        ]
      case 6:
        return [
          { label: '1st Digit', type: 'digit', value: band1, setter: setBand1, colors: DIGIT_COLORS, active: activeBandIndex === 0 },
          { label: '2nd Digit', type: 'digit', value: band2, setter: setBand2, colors: DIGIT_COLORS, active: activeBandIndex === 1 },
          { label: '3rd Digit', type: 'digit', value: band3, setter: setBand3, colors: DIGIT_COLORS, active: activeBandIndex === 2 },
          { label: 'Multiplier', type: 'multiplier', value: multiplier, setter: setMultiplier, colors: MULTIPLIER_COLORS, active: activeBandIndex === 3 },
          { label: 'Tolerance', type: 'tolerance', value: tolerance, setter: setTolerance, colors: TOLERANCE_COLORS, active: activeBandIndex === 4 },
          { label: 'Temp Coeff', type: 'tempCoeff', value: tempCoeff, setter: setTempCoeff, colors: TEMP_COEFF_COLORS, active: activeBandIndex === 5 }
        ]
      case 4:
      default:
        return [
          { label: '1st Digit', type: 'digit', value: band1, setter: setBand1, colors: DIGIT_COLORS, active: activeBandIndex === 0 },
          { label: '2nd Digit', type: 'digit', value: band2, setter: setBand2, colors: DIGIT_COLORS, active: activeBandIndex === 1 },
          { label: 'Multiplier', type: 'multiplier', value: multiplier, setter: setMultiplier, colors: MULTIPLIER_COLORS, active: activeBandIndex === 2 },
          { label: 'Tolerance', type: 'tolerance', value: tolerance, setter: setTolerance, colors: TOLERANCE_COLORS, active: activeBandIndex === 3 }
        ]
    }
  }

  const activeBands = getBandsInfo()

  // Calculate Resistance Value
  const getDigitsValue = () => {
    if (bandCount === 3 || bandCount === 4) {
      return DIGIT_COLORS[band1].value * 10 + DIGIT_COLORS[band2].value
    } else {
      return DIGIT_COLORS[band1].value * 100 + DIGIT_COLORS[band2].value * 10 + DIGIT_COLORS[band3].value
    }
  }

  const digits = getDigitsValue()
  const multValue = MULTIPLIER_COLORS[multiplier].value
  const resistance = digits * multValue

  // Tolerance
  const tolValue = bandCount === 3 ? 20 : TOLERANCE_COLORS[tolerance].value

  // Temp Coefficient (for 6 band)
  const tempCoeffValue = bandCount === 6 ? TEMP_COEFF_COLORS[tempCoeff].value : null

  // Helpers for displaying units
  const formatResistance = (val) => {
    if (val >= 1000000000) return (val / 1000000000).toFixed(2).replace(/\.00$/, '') + ' GΩ'
    if (val >= 1000000) return (val / 1000000).toFixed(2).replace(/\.00$/, '') + ' MΩ'
    if (val >= 1000) return (val / 1000).toFixed(2).replace(/\.00$/, '') + ' kΩ'
    return val.toFixed(2).replace(/\.00$/, '') + ' Ω'
  }

  // Calculate high and low ranges
  const lowRange = resistance * (1 - tolValue / 100)
  const highRange = resistance * (1 + tolValue / 100)

  // Layout positions (in percentages) of the color bands on the visual resistor
  const getBandPositionStyle = (index) => {
    if (bandCount === 3) {
      const positions = ['22%', '38%', '54%']
      return { left: positions[index] }
    } else if (bandCount === 4) {
      const positions = ['20%', '34%', '48%', '76%']
      return { left: positions[index] }
    } else if (bandCount === 5) {
      const positions = ['18%', '30%', '42%', '54%', '78%']
      return { left: positions[index] }
    } else if (bandCount === 6) {
      const positions = ['16%', '26%', '36%', '46%', '68%', '82%']
      return { left: positions[index] }
    }
    return {}
  }

  const currentActiveBand = activeBands[activeBandIndex] || activeBands[0]

  return (
    <>
      <SEOHead title="Resistor Color Code Calculator" path="/calculator" />
      <div className="min-h-screen pt-24 pb-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text)]">
            Resistor Color Code Calculator
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-xl mx-auto">
            Select a band count, interactively tap the resistor bands, and customize colors to visualize the calculation formula step-by-step.
          </p>
        </div>

        {/* Band Count Selection */}
        <div className="flex justify-center gap-2 mb-8">
          {[3, 4, 5, 6].map((n) => (
            <button
              key={n}
              onClick={() => {
                setBandCount(n)
                setActiveBandIndex(0)
              }}
              className={cn(
                'px-5 py-2 text-sm font-semibold rounded-full transition-all cursor-pointer shadow-sm border',
                bandCount === n
                  ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] scale-105 shadow'
                  : 'bg-[var(--color-elevated)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-slate-350'
              )}
            >
              {n}-Band
            </button>
          ))}
        </div>

        {/* Visual Resistor Display Card */}
        <Card variant="flat" className="p-8 mb-8 border border-[var(--color-border)] shadow-md bg-[var(--color-bg)] flex flex-col items-center">
          <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-4">
            Interactive Resistor Viewer
          </div>

          <div className="flex items-center justify-center w-full py-12 relative select-none">
            {/* Left Wire Lead */}
            <div className="w-16 md:w-24 h-1.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-l shadow-sm flex-shrink-0"></div>

            {/* Resistor Body */}
            <div className="relative w-80 h-24 rounded-3xl bg-gradient-to-b from-[#f3e1ce] via-[#e6c8a9] to-[#cba37b] border border-[#be9a73] shadow-lg flex items-center justify-between px-6 flex-shrink-0">
              
              {/* Dynamic Color Bands Overlay */}
              {activeBands.map((band, idx) => {
                const colorObj = band.colors[band.value]
                const positionStyle = getBandPositionStyle(idx)
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveBandIndex(idx)}
                    className={cn(
                      'absolute top-0 bottom-0 w-4.5 cursor-pointer transition-all flex flex-col items-center justify-center group',
                      band.active ? 'scale-y-110 shadow-2xl ring-2 ring-[var(--color-accent)] ring-offset-2 rounded-sm' : 'hover:scale-y-105'
                    )}
                    style={{ ...positionStyle, backgroundColor: colorObj.hex }}
                    title={`Click to edit: ${band.label} (${colorObj.name})`}
                  >
                    {/* Band highlight overlay */}
                    <div className="w-full h-full opacity-0 group-hover:opacity-10 bg-white" />
                    
                    {/* Floating mini tooltips */}
                    <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center z-10 pointer-events-none">
                      <div className="bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded shadow-md whitespace-nowrap">
                        {band.label}: {colorObj.name}
                      </div>
                      <div className="w-1.5 h-1.5 bg-slate-900 rotate-45 -mt-1"></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Wire Lead */}
            <div className="w-16 md:w-24 h-1.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-r shadow-sm flex-shrink-0"></div>
          </div>

          {/* Quick Active Band Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 w-full mt-2">
            {activeBands.map((band, idx) => {
              const colorObj = band.colors[band.value]
              return (
                <button
                  key={idx}
                  onClick={() => setActiveBandIndex(idx)}
                  className={cn(
                    'p-2.5 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-between',
                    band.active
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5 shadow-sm'
                      : 'border-[var(--color-border)] hover:bg-[var(--color-elevated)]'
                  )}
                >
                  <span className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider">
                    {band.label}
                  </span>
                  <div
                    className="w-5 h-5 rounded-full border border-slate-200 shadow-inner my-1.5"
                    style={{ backgroundColor: colorObj.hex }}
                  />
                  <span className="text-xs font-semibold text-[var(--color-text)]">
                    {colorObj.name}
                  </span>
                </button>
              )
            })}
          </div>
        </Card>

        {/* Calculation and Formula Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Immediate Calculation & Formulas */}
          <div className="md:col-span-7 space-y-6">
            <Card variant="flat" className="p-6 border border-[var(--color-border)] bg-[var(--color-bg)]">
              <h3 className="font-bold text-lg mb-4 text-[var(--color-text)] flex items-center gap-2">
                <span className="text-indigo-500">📊</span> Live Calculation Result
              </h3>

              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-center shadow-inner">
                <div className="text-xs text-[var(--color-text-muted)] font-bold uppercase tracking-widest mb-1">Calculated Resistance</div>
                <div className="text-4xl font-extrabold text-[var(--color-accent)] tracking-tight">
                  {formatResistance(resistance)}
                </div>
                <div className="text-sm font-semibold text-[var(--color-text-secondary)] mt-1">
                  Tolerance: ±{tolValue}%
                  {tempCoeffValue !== null && ` | Temp. Coeff: ${tempCoeffValue} ppm/K`}
                </div>
              </div>

              {/* Step-by-Step Formula Explanation */}
              <div className="mt-6 border-t border-[var(--color-border)] pt-5">
                <h4 className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                  Step-by-Step Educational Breakdown
                </h4>
                <div className="space-y-4 font-sans text-sm">
                  {/* Step 1 */}
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <span className="font-bold text-[var(--color-text)]">Extract Significant Digits:</span>
                      <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                        {bandCount === 3 || bandCount === 4 ? (
                          <>
                            Band 1 (<b>{DIGIT_COLORS[band1].name}</b> = {DIGIT_COLORS[band1].value}) and Band 2 (<b>{DIGIT_COLORS[band2].name}</b> = {DIGIT_COLORS[band2].value}) give digits <b>{digits}</b>.
                          </>
                        ) : (
                          <>
                            Band 1 (<b>{DIGIT_COLORS[band1].name}</b> = {DIGIT_COLORS[band1].value}), Band 2 (<b>{DIGIT_COLORS[band2].name}</b> = {DIGIT_COLORS[band2].value}), and Band 3 (<b>{DIGIT_COLORS[band3].name}</b> = {DIGIT_COLORS[band3].value}) give digits <b>{digits}</b>.
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <span className="font-bold text-[var(--color-text)]">Apply Multiplier:</span>
                      <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                        Multiply <b>{digits}</b> by the multiplier color <b>{MULTIPLIER_COLORS[multiplier].name}</b> ({MULTIPLIER_COLORS[multiplier].display}):
                        <div className="font-mono bg-slate-100/50 dark:bg-slate-800/30 py-1.5 px-3 rounded-lg mt-1 text-[var(--color-accent)] font-semibold inline-block">
                          {digits} × {multValue} = {formatResistance(resistance)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <span className="font-bold text-[var(--color-text)]">Evaluate Expected Range:</span>
                      <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                        Applying a tolerance of <b>±{tolValue}%</b> (<b>{bandCount === 3 ? 'Default No-Band 20%' : TOLERANCE_COLORS[tolerance].name}</b>) bounds the actual physical resistance between:
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 p-2 rounded-lg text-center">
                            <span className="text-[10px] text-emerald-600 dark:text-emerald-450 uppercase font-bold block">Min Limit (-{tolValue}%)</span>
                            <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">{formatResistance(lowRange)}</span>
                          </div>
                          <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 p-2 rounded-lg text-center">
                            <span className="text-[10px] text-rose-600 dark:text-rose-455 uppercase font-bold block">Max Limit (+{tolValue}%)</span>
                            <span className="font-mono font-bold text-rose-700 dark:text-rose-400">{formatResistance(highRange)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Temperature Coefficient (Only for 6 band) */}
                  {bandCount === 6 && (
                    <div className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <span className="font-bold text-[var(--color-text)]">Temperature Stability:</span>
                        <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                          The 6th temperature coefficient band <b>{TEMP_COEFF_COLORS[tempCoeff].name}</b> specifies that for every 1°C temperature variance, the resistance will shift by at most <b>{tempCoeffValue} ppm</b> (parts per million) per Kelvin.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Color Picker for Active Selected Band */}
          <div className="md:col-span-5">
            <Card variant="flat" className="p-6 border border-[var(--color-border)] bg-[var(--color-bg)]">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-[var(--color-text)]">
                  Select Band Color
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  Choose a color for <b>{currentActiveBand.label}</b>
                </p>
              </div>

              {/* Color Grid list */}
              <div className="grid grid-cols-1 gap-1.5">
                {currentActiveBand.colors.map((colorItem, colorIdx) => (
                  <button
                    key={colorIdx}
                    onClick={() => {
                      currentActiveBand.setter(colorIdx)
                    }}
                    className={cn(
                      'flex items-center gap-3 p-2.5 rounded-lg border text-left cursor-pointer transition-all hover:bg-[var(--color-elevated)]',
                      currentActiveBand.value === colorIdx
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5'
                        : 'border-transparent'
                    )}
                  >
                    {/* Rounded color indicator */}
                    <div
                      className="w-6 h-6 rounded-md shadow-inner border border-slate-200/50 flex-shrink-0"
                      style={{ backgroundColor: colorItem.hex }}
                    />
                    <div className="flex-grow flex justify-between items-center pr-1">
                      <span className="text-sm font-semibold text-[var(--color-text)]">
                        {colorItem.name}
                      </span>
                      <span className="text-xs font-mono text-[var(--color-text-secondary)]">
                        {currentActiveBand.type === 'digit' && `Value: ${colorItem.value}`}
                        {currentActiveBand.type === 'multiplier' && `${colorItem.display}`}
                        {currentActiveBand.type === 'tolerance' && `±${colorItem.value}%`}
                        {currentActiveBand.type === 'tempCoeff' && `${colorItem.value} ppm`}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

