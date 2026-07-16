import { useState } from 'react'
import { cn } from '../../shared/utils'

const componentRenderers = {
  resistor: ({ bands }) => (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      <line x1="0" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={35 + i * 30} y="35" width="22" height="30" rx="2"
          fill={bands?.[i] ? bands[i] : '#888'} />
      ))}
      <line x1="155" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="3" />
      <line x1="155" y1="50" x2="160" y2="50" stroke="currentColor" strokeWidth="3" />
    </svg>
  ),
  capacitor: () => (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      <line x1="0" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2" />
      <line x1="70" y1="20" x2="70" y2="80" stroke="currentColor" strokeWidth="3" />
      <line x1="90" y1="20" x2="90" y2="80" stroke="currentColor" strokeWidth="3" />
      <line x1="90" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="2" />
      <text x="130" y="45" fontSize="10" fill="currentColor" opacity="0.5">+</text>
      <text x="68" y="45" fontSize="10" fill="currentColor" opacity="0.5">−</text>
    </svg>
  ),
  diode: () => (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      <line x1="0" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2" />
      <polygon points="70,30 70,70 110,50" fill="currentColor" />
      <line x1="110" y1="20" x2="110" y2="80" stroke="currentColor" strokeWidth="2" />
      <line x1="110" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  transistor: () => (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <circle cx="100" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="0" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="2" />
      <line x1="130" y1="60" x2="200" y2="60" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="90" x2="100" y2="120" stroke="currentColor" strokeWidth="2" />
      <text x="58" y="55" fontSize="8" fill="currentColor">B</text>
      <text x="135" y="55" fontSize="8" fill="currentColor">C</text>
      <text x="105" y="115" fontSize="8" fill="currentColor">E</text>
    </svg>
  ),
}

export default function ComponentViewer2D({ componentId, bands, className }) {
  const [viewMode, setViewMode] = useState('top')
  const [showLabels, setShowLabels] = useState(true)
  const [showGrid, setShowGrid] = useState(false)
  const [zoom, setZoom] = useState(1)

  const Renderer = componentRenderers[componentId] || componentRenderers.resistor

  return (
    <div className={cn('rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]', className)}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--color-border)]">
        <div className="flex gap-1">
          {['top', 'isometric', 'front'].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={cn(
                'px-2 py-1 text-xs rounded transition-colors cursor-pointer capitalize',
                viewMode === mode ? 'bg-[var(--color-text)] text-[var(--color-bg)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
              )}
            >
              {mode}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          <button onClick={() => setZoom((z) => Math.min(z + 0.25, 3))} className="px-2 py-1 text-xs rounded hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]">+</button>
          <button onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))} className="px-2 py-1 text-xs rounded hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]">−</button>
          <button onClick={() => setShowGrid(!showGrid)} className="px-2 py-1 text-xs rounded hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]">
            {showGrid ? 'Hide Grid' : 'Grid'}
          </button>
          <button onClick={() => setShowLabels(!showLabels)} className="px-2 py-1 text-xs rounded hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]">
            {showLabels ? 'Hide Labels' : 'Labels'}
          </button>
        </div>
      </div>
      <div
        className="flex items-center justify-center p-6"
        style={{ transform: `scale(${zoom})`, minHeight: 180 }}
      >
        <div className="w-full max-w-[300px]">
          <Renderer componentId={componentId} bands={bands} />
        </div>
      </div>
    </div>
  )
}
