import { useLocation, useNavigate } from 'react-router-dom'
import { Home, Bookmark, Calculator, Grid3X3, Settings } from 'lucide-react'
import { cn } from '../../utils'

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/categories', icon: Grid3X3, label: 'Browse' },
  { path: '/calculator', icon: Calculator, label: 'Calc' },
  { path: '/bookmarks', icon: Bookmark, label: 'Saved' },
  { path: '/settings', icon: Settings, label: 'Settings' },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={cn(
      'fixed bottom-0 left-0 right-0 z-50 h-16 md:hidden',
      'glass border-t border-[var(--color-border)]',
      'flex items-center justify-around px-2'
    )}>
      {navItems.map(({ path, icon: Icon, label }) => {
        const isActive = location.pathname === path
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={cn(
              'flex flex-col items-center gap-0.5 p-2 rounded-lg transition-colors cursor-pointer',
              'min-w-[56px]',
              isActive
                ? 'text-[var(--color-accent)]'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
            )}
            aria-label={label}
          >
            <Icon size={20} />
            <span className="text-[10px]">{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
