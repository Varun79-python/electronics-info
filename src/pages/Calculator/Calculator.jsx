import { useState } from 'react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card } from '../../shared/components/common'
import { cn } from '../../shared/utils'

const COLORS = [
  { name: 'Black', hex: '#000000', value: 0, multiplier: 1 },
  { name: 'Brown', hex: '#8B4513', value: 1, multiplier: 10 },
  { name: 'Red', hex: '#FF0000', value: 2, multiplier: 100 },
  { name: 'Orange', hex: '#FF8C00', value: 3, multiplier: 1000 },
  { name: 'Yellow', hex: '#FFD700', value: 4, multiplier: 10000 },
  { name: 'Green', hex: '#00AA00', value: 5, multiplier: 100000 },
  { name: 'Blue', hex: '#0000FF', value: 6, multiplier: 1000000 },
  { name: 'Violet', hex: '#8B00FF', value: 7, multiplier: 10000000 },
  { name: 'Grey', hex: '#808080', value: 8, multiplier: null },
  { name: 'White', hex: '#FFFFFF', value: 9, multiplier: null },
]

const TOLERANCE_COLORS = [
  { name: 'Brown', hex: '#8B4513', tolerance: 1 },
  { name: 'Red', hex: '#FF0000', tolerance: 2 },
  { name: 'Green', hex: '#00AA00', tolerance: 0.5 },
  { name: 'Blue', hex: '#0000FF', tolerance: 0.25 },
  { name: 'Violet', hex: '#8B00FF', tolerance: 0.1 },
  { name: 'Gold', hex: '#DAA520', tolerance: 5 },
  { name: 'Silver', hex: '#C0C0C0', tolerance: 10 },
]

export default function Calculator() {
  const [bandCount, setBandCount] = useState(4)
  const [band1, setBand1] = useState(2)
  const [band2, setBand2] = useState(2)
  const [band3, setBand3] = useState(1)
  const [multiplier, setMultiplier] = useState(0)
  const [tolerance, setTolerance] = useState(4)

  const bands = bandCount === 4
    ? [COLORS[band1], COLORS[band2], COLORS[multiplier], TOLERANCE_COLORS[tolerance]]
    : [COLORS[band1], COLORS[band2], COLORS[band3], COLORS[multiplier], TOLERANCE_COLORS[tolerance]]

  const resistance = bandCount === 4
    ? (band1 * 10 + band2) * (Math.pow(10, multiplier))
    : (band1 * 100 + band2 * 10 + band3) * (Math.pow(10, multiplier))

  const formatResistance = (val) => {
    if (val >= 1000000) return (val / 1000000).toFixed(1) + ' M\u2126'
    if (val >= 1000) return (val / 1000).toFixed(1) + ' k\u2126'
    return val + ' \u2126'
  }

  const tolValue = TOLERANCE_COLORS[tolerance].tolerance
  return (
    <>
      <SEOHead title="Resistor Calculator" path="/calculator" />
      <div className="min-h-screen pt-24 pb-24 px-4 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Resistor Calculator</h1>

        <Card variant="flat" className="mb-6">
          <div className="flex gap-2 mb-6">
            {[3, 4, 5, 6].map((n) => (
              <button
                key={n}
                onClick={() => setBandCount(n)}
                className={cn(
                  'px-3 py-1.5 text-sm rounded-[var(--radius-md)] transition-all cursor-pointer',
                    bandCount === n
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                )}
              >
                {n}-Band
              </button>
            ))}
          </div>

          <div className="h-20 rounded-[var(--radius-md)] bg-[var(--color-elevated)] mb-6 flex items-center overflow-hidden border border-[var(--color-border)]">
            {bands.map((b, i) => (
              <div
                key={i}
                className="flex-1 h-full flex items-center justify-center transition-all"
                style={{ backgroundColor: b.hex, color: [0, 1, 3, 4].includes(i) && b.name === 'White' ? '#000' : '#fff' }}
              >
                <span className="text-[10px] font-bold opacity-70">{b.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-[var(--color-text)]">{formatResistance(resistance)}</div>
            <div className="text-sm text-[var(--color-text-muted)]">\u00B1{tolValue}%</div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium mb-1.5 block text-[var(--color-text)]">Band 1 (First Digit)</label>
              <div className="flex flex-wrap gap-1">
                {COLORS.slice(0, 10).map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setBand1(i)}
                    className={cn(
                      'w-8 h-8 rounded border-2 cursor-pointer transition-all',
                      band1 === i ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)]'
                    )}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-[var(--color-text)]">Band 2 (Second Digit)</label>
              <div className="flex flex-wrap gap-1">
                {COLORS.slice(0, 10).map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setBand2(i)}
                    className={cn(
                      'w-8 h-8 rounded border-2 cursor-pointer transition-all',
                      band2 === i ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)]'
                    )}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
            {bandCount >= 5 && (
              <div>
                <label className="text-xs font-medium mb-1.5 block text-[var(--color-text)]">Band 3 (Third Digit)</label>
                <div className="flex flex-wrap gap-1">
                  {COLORS.slice(0, 10).map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setBand3(i)}
                      className={cn(
                        'w-8 h-8 rounded border-2 cursor-pointer transition-all',
                        band3 === i ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)]'
                      )}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}
            <div>
              <label className="text-xs font-medium mb-1.5 block text-[var(--color-text)]">Multiplier</label>
              <div className="flex flex-wrap gap-1">
                {COLORS.map((c, i) => c.multiplier !== null && (
                  <button
                    key={i}
                    onClick={() => setMultiplier(i)}
                    className={cn(
                      'w-8 h-8 rounded border-2 cursor-pointer transition-all',
                      multiplier === i ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)]'
                    )}
                    style={{ backgroundColor: c.hex }}
                    title={`${c.name} (\u00D7${c.multiplier})`}
                  />
                ))}
                <button
                  onClick={() => setMultiplier(10)}
                  className={cn(
                    'w-8 h-8 rounded border-2 cursor-pointer transition-all flex items-center justify-center text-xs font-bold',
                    multiplier === 10 ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)]',
                    'bg-[#DAA520] text-white'
                  )}
                  title="Gold (\u00D70.1)"
                >Au</button>
                <button
                  onClick={() => setMultiplier(11)}
                  className={cn(
                    'w-8 h-8 rounded border-2 cursor-pointer transition-all flex items-center justify-center text-xs font-bold',
                    multiplier === 11 ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)]',
                    'bg-[#C0C0C0] text-black'
                  )}
                  title="Silver (\u00D70.01)"
                >Ag</button>
              </div>
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-[var(--color-text)]">Tolerance</label>
              <div className="flex flex-wrap gap-1">
                {TOLERANCE_COLORS.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setTolerance(i)}
                    className={cn(
                      'w-8 h-8 rounded border-2 cursor-pointer transition-all',
                      tolerance === i ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)]'
                    )}
                    style={{ backgroundColor: c.hex }}
                    title={`${c.name} (\u00B1${c.tolerance}%)`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card variant="flat">
          <h3 className="font-medium text-sm mb-2">How to use</h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Select the color bands of your resistor using the color buttons above. The calculator will automatically compute the resistance value and tolerance.
          </p>
        </Card>
      </div>
    </>
  )
}
