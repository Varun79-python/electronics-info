import { cn } from '../../utils'

export function Card({ children, variant = 'elevated', className, ...props }) {
  const variants = {
    flat: 'bg-[var(--color-surface)] border border-[var(--color-border)]',
    elevated: 'bg-[var(--color-elevated)] border border-[var(--color-border)] shadow-[var(--shadow-md)]',
    outlined: 'bg-transparent border border-[var(--color-border)]',
  }

  return (
    <div className={cn('rounded-[var(--radius-md)] p-4', variants[variant], className)} {...props}>
      {children}
    </div>
  )
}

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-[var(--color-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
    accent: 'bg-[var(--color-accent-bg)] text-[var(--color-accent)]',
    success: 'bg-[var(--color-success-bg)] text-[var(--color-success)]',
    warning: 'bg-[var(--color-warning-bg)] text-[var(--color-warning)]',
    error: 'bg-[var(--color-error-bg)] text-[var(--color-error)]',
    info: 'bg-[var(--color-info-bg)] text-[var(--color-info)]',
    new: 'bg-[var(--color-accent-bg)] text-[var(--color-accent)]',
    popular: 'bg-[var(--color-elevated)] text-[var(--color-text)] border border-[var(--color-border)]',
  }

  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 text-xs rounded-full font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}

export function Accordion({ items }) {
  return (
    <div className="divide-y divide-[var(--color-border)]">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-[var(--color-elevated)] rounded-[var(--radius-md)] list-none transition-colors">
            <span className="font-medium text-sm">{item.title}</span>
            <span className="text-[var(--color-text-muted)] group-open:rotate-180 transition-transform text-xs">▼</span>
          </summary>
          <div className="px-3 pb-3 text-sm text-[var(--color-text-secondary)]">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  )
}
