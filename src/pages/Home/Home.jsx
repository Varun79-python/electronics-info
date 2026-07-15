import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, BookOpen, Grid3X3 } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge } from '../../shared/components/common'
import Button from '../../shared/components/buttons/Button'
import useStore from '../../shared/store/useStore'
import componentsIndex from '../../shared/constants/components'
import categories from '../../shared/constants/categories'

export default function Home() {
  const { recentlyViewed } = useStore()
  const recents = recentlyViewed
    .map((id) => componentsIndex[id])
    .filter(Boolean)
    .slice(0, 6)

  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        <section className="relative px-4 pt-24 pb-16 md:pt-32 md:pb-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,92,231,0.15),transparent_70%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Badge variant="accent" className="mb-4">Interactive Learning Platform</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--color-accent)] to-purple-400 bg-clip-text text-transparent">
              Understand Electronics<br />One Component at a Time
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
              Explore 86+ electronic components with detailed explanations, interactive visualizations, formulas, quizzes, and real-world applications.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/categories">
                <Button variant="primary" size="lg">
                  <Grid3X3 size={18} />
                  Browse Components
                </Button>
              </Link>
              <Link to="/search">
                <Button variant="glass" size="lg">
                  <BookOpen size={18} />
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Grid3X3 size={24} className="text-[var(--color-accent)]" />
              Categories
            </h2>
            <Link to="/categories" className="text-sm text-[var(--color-accent)] flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/categories/${cat.id}`}>
                <Card variant="elevated" className="hover:border-[var(--color-accent)] transition-colors cursor-pointer">
                  <h3 className="font-medium text-sm">{cat.name}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">{cat.count} components</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {recents.length > 0 && (
          <section className="px-4 py-12 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp size={24} className="text-[var(--color-accent)]" />
                Recently Viewed
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {recents.map((c) => (
                <Link key={c.id} to={`/component/${c.id}`}>
                  <Card variant="glass" className="hover:border-[var(--color-accent)] transition-colors cursor-pointer text-center">
                    <h3 className="font-medium text-sm">{c.name}</h3>
                    <Badge variant="default" className="mt-2">{c.category}</Badge>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
