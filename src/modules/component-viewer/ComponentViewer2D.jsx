import { useState } from 'react'
import { cn } from '../../shared/utils'

const THUMBNAIL_BASE = '/images/components'

// Map component IDs to their primary image type for 2D rendering
const COMPONENT_THUMBNAILS = {
  resistor: 'front',
  capacitor: 'front',
  diode: 'front',
  transistor: 'front',
}

export default function ComponentViewer2D({ componentId, bands, className }) {
  const [viewMode, setViewMode] = useState('top')
  const [showLabels, setShowLabels] = useState(true)
  const [showGrid, setShowGrid] = useState(false)
  const [zoom, setZoom] = useState(1)

  const thumbType = COMPONENT_THUMBNAILS[componentId] || 'front'
  const imgSrc = `${THUMBNAIL_BASE}/${componentId}/${thumbType}.png`
  const imgSrcSet = null

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
        <div className="w-full max-w-[300px] flex items-center justify-center">
          <img
            src={imgSrc}
            alt={`${componentId} component`}
            className="w-full h-auto object-contain rounded"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
