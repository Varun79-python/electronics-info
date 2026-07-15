import { useParams, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge } from '../../shared/components/common'
import Button from '../../shared/components/buttons/Button'
import componentsIndex from '../../shared/constants/components'

export default function Compare() {
  const { id1, id2 } = useParams()
  const [comp1, setComp1] = useState(id1 || '')
  const [comp2, setComp2] = useState(id2 || '')

  const componentList = Object.values(componentsIndex)

  const c1 = componentsIndex[comp1]
  const c2 = componentsIndex[comp2]

  const specs = useMemo(() => {
    if (!c1 || !c2) return []
    const keys = new Set([...Object.keys(c1), ...Object.keys(c2)])
    return ['category', 'description', 'difficulty'].filter((k) => keys.has(k))
  }, [c1, c2])

  return (
    <>
      <SEOHead title="Compare Components" path="/compare" />
      <div className="min-h-screen pt-24 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Compare Components</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">Side-by-side comparison of electronic components</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="text-sm font-medium mb-1 block">Component 1</label>
            <select
              value={comp1}
              onChange={(e) => setComp1(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text)]"
            >
              <option value="">Select...</option>
              {componentList.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Component 2</label>
            <select
              value={comp2}
              onChange={(e) => setComp2(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text)]"
            >
              <option value="">Select...</option>
              {componentList.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {c1 && c2 && (
          <div className="grid grid-cols-2 gap-4">
            <Card variant="elevated">
              <h2 className="text-xl font-bold mb-2">{c1.name}</h2>
              <Badge variant="default">{c1.category}</Badge>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3">{c1.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {c1.tags?.map((t) => <Badge key={t} variant="info">{t}</Badge>)}
              </div>
            </Card>
            <Card variant="elevated">
              <h2 className="text-xl font-bold mb-2">{c2.name}</h2>
              <Badge variant="default">{c2.category}</Badge>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3">{c2.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {c2.tags?.map((t) => <Badge key={t} variant="info">{t}</Badge>)}
              </div>
            </Card>
          </div>
        )}

        {!c1 && !c2 && (
          <div className="text-center py-16">
            <p className="text-[var(--color-text-secondary)]">Select two components to compare</p>
          </div>
        )}
      </div>
    </>
  )
}
