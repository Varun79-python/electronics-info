import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Search, Bookmark, Sun, Moon, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import useStore from '../../store/useStore'
import { cn } from '../../utils'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme, bookmarks } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef(null)

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 h-16',
      'bg-[var(--color-bg)]',
      'border-b border-[var(--color-border)]',
      'flex items-center justify-between px-4 md:px-6'
    )}>
      <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight no-underline text-[var(--color-text)] shrink-0">
        <span className="text-lg">⚡</span>
        <span className="hidden sm:inline">ElectronicsInfo</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        <Link
          to="/categories"
          className={cn(
            'text-sm font-medium transition-colors relative',
            isActive('/categories') || location.pathname.startsWith('/categories')
              ? 'text-[var(--color-accent)]'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
          )}
        >
          Categories
        </Link>
        <Link
          to="/calculator"
          className={cn(
            'text-sm font-medium transition-colors',
            isActive('/calculator')
              ? 'text-[var(--color-accent)]'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
          )}
        >
          Calculators
        </Link>
        <Link
          to="/about"
          className={cn(
            'text-sm font-medium transition-colors',
            isActive('/about')
              ? 'text-[var(--color-accent)]'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
          )}
        >
          About
        </Link>
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-1">
        {/* Desktop search bar */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name..."
              className="w-40 lg:w-56 pl-9 pr-3 py-1.5 text-sm rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            />
          </div>
        </form>

        {/* Mobile search toggle */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="md:hidden p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]"
          aria-label="Search"
        >
          {searchOpen ? <X size={18} /> : <Search size={18} />}
        </button>

        <button
          onClick={() => navigate('/bookmarks')}
          className="p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-elevated)] relative cursor-pointer text-[var(--color-text-secondary)]"
          aria-label="Bookmarks"
        >
          <Bookmark size={18} />
          {bookmarks.length > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-accent)] text-white text-[10px] rounded-full flex items-center justify-center font-medium">
              {bookmarks.length > 9 ? '9+' : bookmarks.length}
            </span>
          )}
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]"
          aria-label="Menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile search bar */}
      {searchOpen && (
        <div className="absolute top-16 left-0 right-0 p-3 bg-[var(--color-bg)] border-b border-[var(--color-border)] md:hidden animate-slide-down">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search components..."
              className="flex-1 px-3 py-2 text-sm rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]"
            />
            <button type="submit" className="px-3 py-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] text-white text-sm cursor-pointer font-medium">
              Go
            </button>
          </form>
        </div>
      )}
    </header>
  )
}
