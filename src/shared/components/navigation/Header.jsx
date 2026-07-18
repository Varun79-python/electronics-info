import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Search, Bookmark, Sun, Moon, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import useStore from '../../store/useStore'
import componentsIndex from '../../constants/components'
import { useDebounce } from '../../hooks'
import ComponentImage from '../images/ComponentImage'
import { cn } from '../../utils'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme, bookmarks } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef(null)
  const dropdownRef = useRef(null)
  const mobileDropdownRef = useRef(null)

  const debouncedQuery = useDebounce(searchQuery, 200)

  const results = debouncedQuery.trim()
    ? Object.values(componentsIndex)
        .filter((c) => c.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
        .slice(0, 10)
    : []

  const showDropdown = searchQuery.trim().length > 0 && results.length > 0

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchOpen])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target)
      ) {
        // Only close if both are not the target
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  const handleSelect = (id) => {
    navigate(`/component/${id}`)
    setSearchQuery('')
    setSearchOpen(false)
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
        <div ref={dropdownRef} className="hidden md:flex items-center relative">
          <form onSubmit={handleSearch} className="flex items-center">
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
          {/* Desktop dropdown */}
          {showDropdown && (
            <div className="absolute top-full mt-1 left-0 right-0 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-lg overflow-hidden z-50">
              {results.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelect(c.id)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-[var(--color-elevated)] transition-colors cursor-pointer border-b border-[var(--color-border)] last:border-b-0"
                >
                  <div className="w-7 h-7 shrink-0 rounded-[var(--radius-sm)] overflow-hidden border border-[var(--color-border)]">
                    <ComponentImage
                      componentId={c.id}
                      componentName={c.name}
                      size="sm"
                      aspectRatio="1/1"
                      objectFit="cover"
                    />
                  </div>
                  <span className="font-medium truncate">{c.name}</span>
                  <span className="ml-auto text-[10px] text-[var(--color-text-muted)] capitalize shrink-0">{c.category}</span>
                </button>
              ))}
            </div>
          )}
        </div>

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
        <div ref={mobileDropdownRef} className="absolute top-16 left-0 right-0 bg-[var(--color-bg)] border-b border-[var(--color-border)] md:hidden animate-slide-down">
          <div className="p-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name..."
                  className="w-full px-3 py-2 text-sm rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>
              <button type="submit" className="px-3 py-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] text-white text-sm cursor-pointer font-medium">
                Go
              </button>
            </form>
            {/* Mobile dropdown */}
            {showDropdown && (
              <div className="mt-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-lg overflow-hidden">
                {results.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(c.id)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-[var(--color-elevated)] transition-colors cursor-pointer border-b border-[var(--color-border)] last:border-b-0"
                  >
                    <div className="w-7 h-7 shrink-0 rounded-[var(--radius-sm)] overflow-hidden border border-[var(--color-border)]">
                      <ComponentImage
                        componentId={c.id}
                        componentName={c.name}
                        size="sm"
                        aspectRatio="1/1"
                        objectFit="cover"
                      />
                    </div>
                    <span className="font-medium truncate">{c.name}</span>
                    <span className="ml-auto text-[10px] text-[var(--color-text-muted)] capitalize shrink-0">{c.category}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
