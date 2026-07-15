export default function AIAssistant({ context }) {
  return (
    <div className="rounded-[var(--radius-lg)] p-4 bg-[var(--color-surface)] border border-[var(--color-border)]">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">💡</span>
        <h4 className="text-sm font-medium">AI Assistant</h4>
      </div>
      <p className="text-xs text-[var(--color-text-secondary)]">AI assistant module ready for integration.</p>
    </div>
  )
}
