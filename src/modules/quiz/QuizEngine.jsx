export default function QuizEngine({ questions, componentId }) {
  if (!questions?.length) return null

  return (
    <div className="space-y-4">
      {questions.map((q, i) => (
        <QuizQuestion key={i} question={q} index={i} />
      ))}
    </div>
  )
}

function QuizQuestion({ question, index }) {
  return (
    <div className="p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]">
      <p className="text-sm font-medium mb-3">
        <span className="text-[var(--color-text)] font-bold">Q{index + 1}.</span> {question.question}
      </p>
      <div className="space-y-2">
        {question.options.map((opt, i) => (
          <div key={i} className="px-3 py-2 text-sm rounded-lg bg-[var(--color-elevated)] text-[var(--color-text-secondary)]">
            <span className="mr-2 text-[var(--color-text-muted)]">{String.fromCharCode(65 + i)}.</span>
            {opt}
          </div>
        ))}
      </div>
    </div>
  )
}
