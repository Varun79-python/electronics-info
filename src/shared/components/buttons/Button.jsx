import { cn } from '../../utils'

export default function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const variants = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]',
    secondary: 'bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-text)] hover:bg-[var(--color-elevated)]',
    ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-elevated)]',
    danger: 'bg-[var(--color-error-bg)] text-[var(--color-error)] border border-[var(--color-error)]/30 hover:bg-[var(--color-error)]/20',
    success: 'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[var(--color-success)]/30 hover:bg-[var(--color-success)]/20',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-all cursor-pointer',
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
