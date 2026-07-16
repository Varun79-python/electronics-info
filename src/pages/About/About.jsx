import { Info } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card } from '../../shared/components/common'
import { APP_INFO } from '../../shared/constants'

export default function About() {
  return (
    <>
      <SEOHead title="About" path="/about" />
      <div className="min-h-screen pt-24 pb-24 px-4 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Info size={28} className="text-[var(--color-accent)]" />
          <h1 className="text-3xl font-bold">About</h1>
        </div>

        <Card variant="elevated" className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚡</span>
            <div>
              <h2 className="text-xl font-bold">{APP_INFO.name}</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">{APP_INFO.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            ElectronicsInfo is an interactive learning platform designed for engineering students and electronics enthusiasts.
            Explore 86+ electronic components with detailed explanations, interactive visualizations, formulas, quizzes, and real-world applications.
            Built with a 100% JSON-based architecture — no backend, no database — ensuring fast loading and offline-capable learning.
          </p>
        </Card>

        <Card variant="elevated" className="mb-6">
          <h3 className="font-medium mb-3">Features</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            {[
              '86+ electronic components with detailed documentation',
              'Interactive 2D component viewer with schematic symbols',
              'Resistor color code calculator',
              'Component comparison tool',
              'Per-component MCQs and interview questions',
              'Bookmarks and reading progress tracking',
              'Full-text search across all components',
              'Dark/light theme support',
              'Offline PWA support',
              'Keyboard navigation',
            ].map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--color-accent)]">•</span>
                {f}
              </li>
            ))}
          </ul>
        </Card>

        <Card variant="flat">
          <h3 className="font-medium mb-3">Version</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">v{APP_INFO.version}</p>
        </Card>
      </div>
    </>
  )
}
