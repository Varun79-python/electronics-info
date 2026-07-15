import { Link, useNavigate } from 'react-router-dom'
import { Search, Bookmark, Sun, Moon, Menu } from 'lucide-react'
import { useState } from 'react'
import useStore from '../../store/useStore'
import { cn } from '../../utils'

export default function Header() {
  const navigate = useNavigate()
  const { theme, toggleTheme, bookmarks } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 h-16 glass',
      'flex items-center justify-between px-4 md:px-6'
    )}>
      <Link to="/" className="flex items-center gap-2 text-lg font-bold no-underline text-[var(--color-text)]">
        <span className="text-[var(--color-accent)]">⚡</span>
        <span>Electronics Hub</span>
      </Link>

      <nav className="hidden md:flex items-center gap-4">
        <Link to="/categories" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">Categories</Link>
        <Link to="/calculator" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">Calculators</Link>
        <Link to="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">About</Link>
      </nav>

      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/search')} className="p-2 rounded-lg hover:bg-[var(--color-elevated)] cursor-pointer" aria-label="Search">
          <Search size={18} />
        </button>
        <button onClick={() => navigate('/bookmarks')} className="p-2 rounded-lg hover:bg-[var(--color-elevated)] relative cursor-pointer" aria-label="Bookmarks">
          <Bookmark size={18} />
          {bookmarks.length > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-accent)] text-white text-[10px] rounded-full flex items-center justify-center">
              {bookmarks.length > 9 ? '9+' : bookmarks.length}
            </span>
          )}
        </button>
        <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-[var(--color-elevated)] cursor-pointer" aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-[var(--color-elevated)] cursor-pointer" aria-label="Menu">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
