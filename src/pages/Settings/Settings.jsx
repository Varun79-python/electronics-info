import { Settings as SettingsIcon, Sun, Moon, Type } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card } from '../../shared/components/common'
import useStore from '../../shared/store/useStore'
import { cn } from '../../shared/utils'

const scales = ['compact', 'normal', 'large']

export default function Settings() {
  const { theme, toggleTheme, textScale, setTextScale } = useStore()

  return (
    <>
      <SEOHead title="Settings" path="/settings" />
      <div className="min-h-screen pt-24 pb-24 px-4 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Settings</h1>

        <Card variant="flat" className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
              <div>
                <h3 className="font-medium text-sm">Theme</h3>
                <p className="text-xs text-[var(--color-text-muted)]">Current: {theme}</p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-elevated)] border border-[var(--color-border)] text-sm hover:border-[var(--color-text)]/30 transition-all cursor-pointer"
            >
              Switch to {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </Card>

        <Card variant="flat">
          <div className="flex items-center gap-3 mb-4">
            <Type size={20} />
            <div>
              <h3 className="font-medium text-sm">Text Scale</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Adjust the text size</p>
            </div>
          </div>
          <div className="flex gap-2">
            {scales.map((s) => (
              <button
                key={s}
                onClick={() => setTextScale(s)}
                className={cn(
                  'px-4 py-2 rounded-[var(--radius-md)] text-sm capitalize transition-all cursor-pointer',
                    textScale === s
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </>
  )
}
