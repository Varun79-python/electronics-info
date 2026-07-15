import { Accordion } from '../../shared/components/common'

export default function InterviewSection({ questions, level }) {
  if (!questions?.length) return null

  return (
    <div>
      <h3 className="text-sm font-medium capitalize mb-2 text-[var(--color-accent)]">{level}</h3>
      <Accordion
        items={questions.map((q) => ({
          title: q.question,
          content: q.answer,
        }))}
      />
    </div>
  )
}
