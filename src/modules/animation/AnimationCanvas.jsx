import { useState } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { cn } from '../../shared/utils'

export default function AnimationCanvas({ componentId, animationId }) {
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)

  return (
    <div className="rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]">
      <div className="flex items-center justify-center p-8 min-h-[200px]">
        <div className="text-center">
          <div className="text-4xl mb-2">⚡</div>
          <p className="text-sm text-[var(--color-text-secondary)]">Animation Preview</p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            {componentId} — {animationId || 'default'}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t border-[var(--color-border)]">
        <div className="flex gap-2">
          <button
            onClick={() => setPlaying(!playing)}
            className="p-1.5 rounded hover:bg-[var(--color-elevated)] cursor-pointer"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            onClick={() => setPlaying(false)}
            className="p-1.5 rounded hover:bg-[var(--color-elevated)] cursor-pointer"
            aria-label="Reset"
          >
            <RotateCcw size={16} />
          </button>
        </div>
        <div className="flex gap-1">
          {[0.5, 1, 2].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={cn(
                'px-2 py-0.5 text-xs rounded transition-colors cursor-pointer',
                speed === s ? 'bg-[var(--color-accent)] text-white' : 'text-[var(--color-text-secondary)]'
              )}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
