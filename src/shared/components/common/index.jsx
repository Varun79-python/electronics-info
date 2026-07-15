import { cn } from '../../utils'

export function Card({ children, variant = 'elevated', className, ...props }) {
  const variants = {
    flat: 'bg-[var(--color-surface)] border border-[var(--color-border)]',
    elevated: 'bg-[var(--color-elevated)] border border-[var(--color-border)] shadow-[var(--shadow-md)]',
    outlined: 'bg-transparent border border-[var(--color-border)]',
    glass: 'glass',
  }

  return (
    <div className={cn('rounded-[var(--radius-md)] p-4', variants[variant], className)} {...props}>
      {children}
    </div>
  )
}

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
    success: 'bg-green-500/10 text-green-400',
    warning: 'bg-yellow-500/10 text-yellow-400',
    error: 'bg-red-500/10 text-red-400',
    info: 'bg-blue-500/10 text-blue-400',
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
          <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-[var(--color-elevated)] rounded-lg list-none">
            <span className="font-medium text-sm">{item.title}</span>
            <span className="text-[var(--color-text-secondary)] group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="px-3 pb-3 text-sm text-[var(--color-text-secondary)]">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  )
}
