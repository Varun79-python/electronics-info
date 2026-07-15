import { useParams, Link } from 'react-router-dom'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge } from '../../shared/components/common'
import componentsIndex from '../../shared/constants/components'
import categories from '../../shared/constants/categories'

export default function Categories() {
  const { category } = useParams()

  if (category) {
    const cat = categories.find((c) => c.id === category)
    const comps = Object.values(componentsIndex).filter((c) => c.category === category)

    return (
      <>
        <SEOHead title={cat?.name || category} path={`/categories/${category}`} />
        <div className="min-h-screen pt-24 pb-24 px-4 max-w-6xl mx-auto">
          <Link to="/categories" className="text-sm text-[var(--color-accent)] mb-4 inline-block">← All Categories</Link>
          <h1 className="text-3xl font-bold mb-2">{cat?.name || category}</h1>
          <p className="text-[var(--color-text-secondary)] mb-8">{comps.length} components</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comps.map((c) => (
              <Link key={c.id} to={`/component/${c.id}`}>
                <Card variant="elevated" className="hover:border-[var(--color-accent)] transition-colors cursor-pointer h-full">
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1 line-clamp-2">{c.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.tags.slice(0, 3).map((t) => (
                      <Badge key={t} variant="default">{t}</Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEOHead title="Categories" path="/categories" />
      <div className="min-h-screen pt-24 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Categories</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">Browse electronic components by category</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/categories/${cat.id}`}>
              <Card variant="elevated" className="hover:border-[var(--color-accent)] transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{cat.name}</h3>
                  <span className="text-2xl opacity-60">→</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">{cat.count} components</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
