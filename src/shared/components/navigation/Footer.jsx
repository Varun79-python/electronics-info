import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { APP_INFO } from '../../constants'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-lg font-bold flex items-center gap-2 mb-3 no-underline text-[var(--color-text)]">
              <span className="text-lg">⚡</span>
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
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
            Made with <Heart size={12} className="text-[var(--color-error)]" /> by {APP_INFO.author}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} {APP_INFO.name}. All rights reserved.
          </p>
          <a
            href={APP_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] flex items-center gap-1 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
