import { Link } from 'react-router-dom'
import {
  ArrowRight, TrendingUp, BookOpen, Grid3X3, Calculator, Bookmark,
  Zap, Cpu, Shield, Activity, Monitor, Wifi, Battery, Settings, Toolbox, Binary
} from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge } from '../../shared/components/common'
import Button from '../../shared/components/buttons/Button'
import ComponentImage from '../../shared/components/images/ComponentImage'
import useStore from '../../shared/store/useStore'
import componentsIndex from '../../shared/constants/components'
import categories from '../../shared/constants/categories'

// Category icons — single color, no brand colors
const categoryIcons = {
  passive:            Zap,
  semiconductor:      Cpu,
  'power-electronics':Zap,
  electromechanical:  Settings,
  protection:         Shield,
  sensors:            Activity,
  'integrated-circuits': Cpu,
  digital:            Binary,
  displays:           Monitor,
  prototyping:        Toolbox,
  communication:      Wifi,
  'energy-storage':   Battery,
}

const features = [
  { icon: Grid3X3, title: '86+ Components', desc: 'Detailed guides for every common electronic component' },
  { icon: Calculator, title: 'Interactive Tools', desc: 'Resistor calculator, comparison, and more' },
  { icon: BookOpen, title: 'Quizzes & MCQs', desc: 'Test your knowledge with per-component quizzes' },
  { icon: Bookmark, title: 'Bookmarks', desc: 'Save components and track your learning progress' },
]

// Real component photograph thumbnails
function ComponentThumbnail({ id, name }) {
  return (
    <div className="w-full aspect-[4/3] mx-auto mb-3 overflow-hidden rounded-[var(--radius-md)]">
      <ComponentImage
        componentId={id}
        componentName={name}
        size="md"
        aspectRatio="4/3"
        objectFit="cover"
      />
    </div>
  )
}

function ProgressBar({ value = 0, className = '' }) {
  const pct = Math.min(Math.max(value, 0), 100)
  return (
    <div className={`w-full h-1 rounded-full bg-[var(--color-border)] overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full bg-[var(--color-accent)]/30 transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export default function Home() {
  const { recentlyViewed, readingProgress } = useStore()
  const recents = recentlyViewed
    .map((id) => componentsIndex[id])
    .filter(Boolean)
    .slice(0, 6)

  const trending = Object.values(componentsIndex).slice(0, 8)

  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        {/* ── Hero ── */}
        <section className="relative px-4 pt-28 pb-20 md:pt-36 md:pb-28 text-center overflow-hidden bg-[var(--color-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 px-3 py-1 text-xs tracking-wide">Interactive Electronics Learning Platform</Badge>
            <h1 className="text-[40px] md:text-[56px] font-bold mb-6 text-[var(--color-text)] leading-[1.1] tracking-[-0.03em]">
              Understand Electronics<br />One Component at a Time
            </h1>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore {Object.keys(componentsIndex).length}+ electronic components with detailed explanations, interactive visualizations, formulas, quizzes, and real-world applications.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/categories">
                <Button variant="primary" size="lg">
                  <Grid3X3 size={18} />
                  Browse Components
                </Button>
              </Link>
              <Link to="/calculator">
                <Button variant="secondary" size="lg">
                  <Calculator size={18} />
                  Calculators
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="px-4 py-16 bg-[var(--color-elevated)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <Card key={f.title} variant="flat" className="group hover:border-[var(--color-text)]/30 transition-colors">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-elevated)] border border-[var(--color-border)] flex items-center justify-center mb-3">
                    <f.icon size={20} className="text-[var(--color-text-muted)]" />
                  </div>
                  <h3 className="font-semibold text-[22px] tracking-[-0.03em] mb-1">{f.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Categories ── */}
        <section className="px-4 py-16 bg-[var(--color-bg)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[30px] font-bold tracking-[-0.03em]">
                Browse by Category
              </h2>
              <Link to="/categories" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] flex items-center gap-1 transition-colors font-medium">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat.id] || Grid3X3
                return (
                  <Link key={cat.id} to={`/categories/${cat.id}`} className="group block">
                    <Card variant="elevated" className="h-full transition-colors hover:border-[var(--color-accent)]/30 cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center">
                          <Icon size={20} className="text-[var(--color-text-muted)]" />
                        </div>
                        <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">→</span>
                      </div>
                      <h3 className="font-medium text-[22px] tracking-[-0.03em]">{cat.name}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">{cat.count} components</p>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Trending ── */}
        <section className="px-4 py-16 bg-[var(--color-elevated)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[30px] font-bold tracking-[-0.03em] flex items-center gap-2">
                <TrendingUp size={24} />
                Popular Components
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trending.map((c) => (
                <Link key={c.id} to={`/component/${c.id}`} className="group block">
                  <Card variant="flat" className="h-full text-center transition-colors hover:border-[var(--color-accent)]/30 cursor-pointer">
                    <ComponentThumbnail id={c.id} name={c.name} />
                    <h3 className="font-medium text-[22px] tracking-[-0.03em] leading-tight group-hover:text-[var(--color-accent)] transition-colors">{c.name}</h3>
                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                      {c.category}
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Recently Viewed / Continue Learning ── */}
        {recents.length > 0 && (
          <section className="px-4 py-16 bg-[var(--color-bg)]">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] flex items-center gap-2">
                  <BookOpen size={24} />
                  Continue Learning
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {recents.map((c) => {
                  const progress = readingProgress?.[c.id] || 0
                  return (
                    <Link key={c.id} to={`/component/${c.id}`} className="group block">
                      <Card variant="flat" className="h-full text-center transition-colors hover:border-[var(--color-accent)]/30">
                        <ComponentThumbnail id={c.id} name={c.name} />
                        <h3 className="font-medium text-sm tracking-tight group-hover:text-[var(--color-accent)] transition-colors">{c.name}</h3>
                        <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                          {c.category}
                        </span>
                        <div className="mt-3 px-2">
                          <div className="flex items-center justify-between text-[10px] text-[var(--color-text-muted)] mb-1">
                            <span>{progress >= 100 ? 'Completed' : progress > 0 ? `${progress}%` : 'Not started'}</span>
                          </div>
                          <ProgressBar value={progress} />
                        </div>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="px-4 py-20 bg-[var(--color-elevated)]">
          <div className="max-w-4xl mx-auto text-center">
            <Card variant="flat" className="py-12 px-8">
              <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-4">Ready to start learning?</h2>
              <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
                Dive into detailed component guides with interactive visualizations, formulas, and quizzes.
              </p>
              <Link to="/categories">
                <Button variant="primary" size="lg">
                  Explore All Components
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
