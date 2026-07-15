import { Accordion } from '../../shared/components/common'

export default function GlossaryList({ terms }) {
  if (!terms?.length) return null

  return (
    <Accordion
      items={terms.map((t) => ({
        title: t.term,
        content: t.definition,
      }))}
    />
  )
}
