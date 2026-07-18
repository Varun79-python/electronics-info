export default function AITutor({ componentId: _componentId, query }) {
  return (
    <div className="rounded-[var(--radius-lg)] p-6 bg-[var(--color-surface)] border border-[var(--color-border)]">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🤖</span>
        <h3 className="font-medium">AI Tutor</h3>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)]">
        AI tutor ready — integrate with your preferred LLM API.
      </p>
      {query && (
        <div className="mt-3 p-3 rounded-lg bg-[var(--color-elevated)]">
          <p className="text-xs text-[var(--color-text-secondary)]">Query: {query}</p>
          <p className="text-sm mt-1 text-[var(--color-text-secondary)]">AI response will appear here.</p>
        </div>
      )}
    </div>
  )
}
