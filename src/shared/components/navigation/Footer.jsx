import { Link } from 'react-router-dom'
import { APP_INFO } from '../../constants'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-lg font-bold flex items-center gap-2 mb-3 no-underline text-[var(--color-text)]">
              <img src="/logo/logo-32.png" alt="Logo" className="h-6 w-6" />
              <span>{APP_INFO.name}</span>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              {APP_INFO.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-[var(--color-text)]">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/categories" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Browse Components</Link>
              <Link to="/calculator" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Calculators</Link>
              <Link to="/compare" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Compare Components</Link>
              <Link to="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">About</Link>
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-[var(--color-text)]">Categories</h4>
            <nav className="flex flex-wrap gap-x-4 gap-y-1">
              {['Passive', 'Semiconductor', 'Sensors', 'Digital', 'Power Electronics', 'Displays'].map((cat) => (
                <Link
                  key={cat}
                  to={`/categories/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} {APP_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
