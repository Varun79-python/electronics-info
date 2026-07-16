import { Link } from 'react-router-dom'
import { Bookmark, Trash2 } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge } from '../../shared/components/common'
import useStore from '../../shared/store/useStore'
import componentsIndex from '../../shared/constants/components'

export default function Bookmarks() {
  const { bookmarks, toggleBookmark } = useStore()
  const saved = bookmarks.map((id) => componentsIndex[id]).filter(Boolean)

  return (
    <>
      <SEOHead title="Bookmarks" path="/bookmarks" />
      <div className="min-h-screen pt-24 pb-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Bookmarks
          <span className="text-sm text-[var(--color-text-muted)] font-normal ml-2">({saved.length})</span>
        </h1>

        {saved.length === 0 ? (
          <div className="text-center py-16">
            <Bookmark size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
            <p className="text-[var(--color-text-secondary)] mb-2">No bookmarks yet</p>
            <Link to="/categories" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Browse components →</Link>
          </div>
        ) : (
          <div className="space-y-2">
            {saved.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-3 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)]">
                <Link to={`/component/${c.id}`} className="flex-1 min-w-0 no-underline">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm">{c.name}</h3>
                    <Badge variant="default">{c.category}</Badge>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 truncate">{c.description}</p>
                </Link>
                <button onClick={() => toggleBookmark(c.id)} className="p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-error)] ml-2" aria-label="Remove bookmark">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
