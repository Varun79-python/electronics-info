import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import Button from '../../shared/components/buttons/Button'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" />
      <div className="min-h-screen flex items-center justify-center px-4 pt-16 pb-24">
        <div className="text-center max-w-md">
          <div className="text-8xl font-bold text-[var(--color-text)] mb-4">404</div>
          <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
          <p className="text-[var(--color-text-secondary)] mb-8">
            The page you're looking for doesn't exist.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/">
              <Button variant="primary">Go Home</Button>
            </Link>
            <Link to="/search">
              <Button variant="secondary">
                <Search size={16} />
                Search
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
