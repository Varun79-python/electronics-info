import { cn } from '../../utils'

export default function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const variants = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]',
    secondary: 'bg-[var(--color-elevated)] text-[var(--color-text)] hover:bg-[var(--color-border)]',
    ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-elevated)]',
    glass: 'glass text-[var(--color-text)] hover:bg-[var(--color-elevated)]',
    text: 'bg-transparent text-[var(--color-accent)] hover:underline p-0',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all cursor-pointer',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
