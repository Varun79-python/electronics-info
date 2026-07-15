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
        <div className="flex items-center gap-3 mb-6">
          <SettingsIcon size={28} className="text-[var(--color-accent)]" />
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <Card variant="elevated" className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
              <div>
                <h3 className="font-medium text-sm">Theme</h3>
                <p className="text-xs text-[var(--color-text-secondary)]">Current: {theme}</p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-[var(--color-elevated)] text-sm hover:bg-[var(--color-border)] transition-colors cursor-pointer"
            >
              Switch to {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </Card>

        <Card variant="elevated">
          <div className="flex items-center gap-3 mb-4">
            <Type size={20} />
            <div>
              <h3 className="font-medium text-sm">Text Scale</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">Adjust the text size</p>
            </div>
          </div>
          <div className="flex gap-2">
            {scales.map((s) => (
              <button
                key={s}
                onClick={() => setTextScale(s)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm capitalize transition-colors cursor-pointer',
                  textScale === s
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-[var(--color-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
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
