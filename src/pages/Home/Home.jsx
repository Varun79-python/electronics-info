import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, BookOpen, Grid3X3, Calculator, Bookmark, Zap, Cpu, Shield, Activity } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge } from '../../shared/components/common'
import Button from '../../shared/components/buttons/Button'
import useStore from '../../shared/store/useStore'
import componentsIndex from '../../shared/constants/components'
import categories from '../../shared/constants/categories'

const categoryIcons = {
  passive: Zap,
  semiconductor: Cpu,
  'power-electronics': Zap,
  electromechanical: Shield,
  protection: Shield,
  sensors: Activity,
  'integrated-circuits': Cpu,
  digital: Cpu,
  displays: Grid3X3,
  prototyping: Grid3X3,
  communication: Activity,
  'energy-storage': Zap,
}

const features = [
  { icon: Grid3X3, title: '86+ Components', desc: 'Detailed guides for every common electronic component' },
  { icon: Calculator, title: 'Interactive Tools', desc: 'Resistor calculator, comparison, and more' },
  { icon: BookOpen, title: 'Quizzes & MCQs', desc: 'Test your knowledge with per-component quizzes' },
  { icon: Bookmark, title: 'Bookmarks', desc: 'Save components and track your learning progress' },
]

export default function Home() {
  const { recentlyViewed } = useStore()
  const recents = recentlyViewed
    .map((id) => componentsIndex[id])
    .filter(Boolean)
    .slice(0, 6)

  const trending = Object.values(componentsIndex).slice(0, 8)

  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative px-4 pt-28 pb-20 md:pt-36 md:pb-28 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.18),transparent_70%)]" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'linear-gradient(rgba(108,92,231,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge variant="accent" className="mb-6 px-3 py-1">⚡ Interactive Electronics Learning Platform</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-accent)] via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Understand Electronics<br />One Component at a Time
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
              Explore {Object.keys(componentsIndex).length}+ electronic components with detailed explanations, interactive visualizations, formulas, quizzes, and real-world applications.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/categories">
                <Button variant="primary" size="lg" className="shadow-[var(--shadow-glow)]">
                  <Grid3X3 size={18} />
                  Browse Components
                </Button>
              </Link>
              <Link to="/calculator">
                <Button variant="glass" size="lg">
                  <Calculator size={18} />
                  Calculators
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <Card key={f.title} variant="glass" className="hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-[1.02]">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                  <f.icon size={20} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)]">{f.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="px-4 py-16 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Grid3X3 size={28} className="text-[var(--color-accent)]" />
              Browse by Category
            </h2>
            <Link to="/categories" className="text-sm text-[var(--color-accent)] flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Grid3X3
              return (
                <Link key={cat.id} to={`/categories/${cat.id}`}>
                  <Card variant="elevated" className="hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-[1.02] h-full group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                        <Icon size={20} className="text-[var(--color-accent)]" />
                      </div>
                      <span className="text-[var(--color-text-secondary)] group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                    <h3 className="font-medium text-sm">{cat.name}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">{cat.count} components</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Trending */}
        <section className="px-4 py-16 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <TrendingUp size={28} className="text-[var(--color-accent)]" />
              Popular Components
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trending.map((c) => (
              <Link key={c.id} to={`/component/${c.id}`}>
                <Card variant="glass" className="hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-[1.02] text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                    <Zap size={24} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-medium text-sm">{c.name}</h3>
                  <Badge variant="default" className="mt-2 text-[10px]">{c.category}</Badge>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recently Viewed */}
        {recents.length > 0 && (
          <section className="px-4 py-16 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <BookOpen size={28} className="text-[var(--color-accent)]" />
                Continue Learning
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {recents.map((c) => (
                <Link key={c.id} to={`/component/${c.id}`}>
                  <Card variant="glass" className="hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-[1.02] text-center">
                    <h3 className="font-medium text-sm">{c.name}</h3>
                    <Badge variant="default" className="mt-2 text-[10px]">{c.category}</Badge>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="px-4 py-20 max-w-4xl mx-auto text-center">
          <Card variant="elevated" className="py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
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
        </section>
      </div>
    </>
  )
}
