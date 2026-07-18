import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search as SearchIcon, X } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge } from '../../shared/components/common'
import ComponentImage from '../../shared/components/images/ComponentImage'
import { searchComponents } from '../../shared/services/componentService'
import { useDebounce } from '../../shared/hooks'

export default function Search() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 200)
  const navigate = useNavigate()

  const results = searchComponents(debouncedQuery)

  const clear = useCallback(() => setQuery(''), [])

  return (
    <>
      <SEOHead title="Search" path="/search" />
      <div className="min-h-screen pt-24 pb-24 px-4 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Search Components</h1>
        <div className="relative mb-8">
          <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by component name..."
            autoFocus
            className="w-full pl-10 pr-10 py-3 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-text)]"
          />
          {query && (
            <button onClick={clear} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] cursor-pointer">
              <X size={16} />
            </button>
          )}
        </div>

        {query && (
          <div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">{results.length} result{results.length !== 1 ? 's' : ''}</p>
            <div className="space-y-2">
              {results.map((c) => (
                <div
                  key={c.id}
                  onClick={() => navigate(`/component/${c.id}`)}
                  className="p-3 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-text)]/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 shrink-0 rounded-[var(--radius-sm)] overflow-hidden border border-[var(--color-border)]">
                      <ComponentImage
                        componentId={c.id}
                        componentName={c.name}
                        size="sm"
                        aspectRatio="1/1"
                        objectFit="cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-medium text-sm truncate">{c.name}</h3>
                        <Badge variant="default">{c.category}</Badge>
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 line-clamp-1">{c.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!query && (
          <div className="text-center py-16">
            <SearchIcon size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
            <p className="text-[var(--color-text-secondary)]">Type to search across all components</p>
          </div>
        )}
      </div>
    </>
  )
}
