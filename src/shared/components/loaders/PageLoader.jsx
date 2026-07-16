export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--color-bg)] z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[var(--color-text)]/20 border-t-[var(--color-text)] rounded-full animate-spin" />
        <p className="text-sm text-[var(--color-text-secondary)]">Loading...</p>
      </div>
    </div>
  )
}
