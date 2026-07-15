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
        <div className="flex items-center gap-3 mb-6">
          <Bookmark size={28} className="text-[var(--color-accent)]" />
          <h1 className="text-3xl font-bold">Bookmarks</h1>
          <span className="text-sm text-[var(--color-text-secondary)]">({saved.length})</span>
        </div>

        {saved.length === 0 ? (
          <div className="text-center py-16">
            <Bookmark size={48} className="mx-auto mb-4 text-[var(--color-text-secondary)] opacity-40" />
            <p className="text-[var(--color-text-secondary)] mb-2">No bookmarks yet</p>
            <Link to="/categories" className="text-sm text-[var(--color-accent)]">Browse components →</Link>
          </div>
        ) : (
          <div className="space-y-2">
            {saved.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]">
                <Link to={`/component/${c.id}`} className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm">{c.name}</h3>
                    <Badge variant="default">{c.category}</Badge>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 truncate">{c.description}</p>
                </Link>
                <button onClick={() => toggleBookmark(c.id)} className="p-2 rounded-lg hover:bg-[var(--color-elevated)] cursor-pointer ml-2" aria-label="Remove bookmark">
                  <Trash2 size={14} className="text-red-400" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
