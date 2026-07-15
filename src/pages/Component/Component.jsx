import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowLeft, Bookmark, Check, Copy, Share2 } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge, Accordion } from '../../shared/components/common'
import Button from '../../shared/components/buttons/Button'
import useStore from '../../shared/store/useStore'
import { loadComponentData } from '../../shared/services/contentLoader'
import { cn, formatFormula, copyToClipboard, shareContent } from '../../shared/utils'

export default function Component() {
  const { id } = useParams()
  const { bookmarks, toggleBookmark, addRecentlyViewed } = useStore()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copiedFormula, setCopiedFormula] = useState(null)
  const isBookmarked = bookmarks.includes(id)

  useEffect(() => {
    setLoading(true)
    addRecentlyViewed(id)
    loadComponentData(id).then((d) => {
      setData(d)
      setLoading(false)
    })
  }, [id])

  const overview = data?.overview
  const name = overview?.name || id

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <SEOHead title={name} description={overview?.shortDescription} path={`/component/${id}`} />
      <div className="min-h-screen pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="sticky top-16 z-30 glass py-3 px-4 -mx-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">
                <ArrowLeft size={18} />
              </Link>
              <Badge variant="default">{overview?.category}</Badge>
              <h1 className="font-bold text-lg">{name}</h1>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => toggleBookmark(id)} className="p-2 rounded-lg hover:bg-[var(--color-elevated)] cursor-pointer" aria-label="Bookmark">
                <Bookmark size={16} className={isBookmarked ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : ''} />
              </button>
              <button onClick={() => shareContent(name, overview?.shortDescription, window.location.href)} className="p-2 rounded-lg hover:bg-[var(--color-elevated)] cursor-pointer">
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {overview && (
            <div className="mb-8">
              <p className="text-lg text-[var(--color-text-secondary)] mb-6">{overview.shortDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card variant="elevated">
                  <h3 className="font-semibold text-sm mb-1">What is it?</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{overview.whatIsIt}</p>
                </Card>
                <Card variant="elevated">
                  <h3 className="font-semibold text-sm mb-1">Why it exists</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{overview.whyExists}</p>
                </Card>
                <Card variant="elevated">
                  <h3 className="font-semibold text-sm mb-1">Where it's used</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{overview.whereUsed}</p>
                </Card>
              </div>
            </div>
          )}

          {data?.working?.workingPrinciple && (
            <Section title="How It Works">
              <p className="text-[var(--color-text-secondary)] mb-4">{data.working.workingPrinciple}</p>
              {data.working.steps && (
                <ol className="space-y-2">
                  {data.working.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-xs font-medium">{i + 1}</span>
                      <span className="text-[var(--color-text-secondary)]">{step}</span>
                    </li>
                  ))}
                </ol>
              )}
            </Section>
          )}

          {data?.types?.types && (
            <Section title="Types">
              <div className="space-y-3">
                {data.types.types.map((type, i) => (
                  <Card key={i} variant="flat">
                    <h3 className="font-medium text-sm mb-1">{type.name}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-2">{type.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {type.applications?.map((app, j) => (
                        <Badge key={j} variant="info">{app}</Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </Section>
          )}

          {data?.specifications?.specifications && (
            <Section title="Key Specifications">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)]">
                      <th className="text-left py-2 pr-4 font-medium">Parameter</th>
                      <th className="text-left py-2 pr-4 font-medium">Typical Values</th>
                      <th className="text-left py-2 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.specifications.specifications.map((spec, i) => (
                      <tr key={i} className="border-b border-[var(--color-border)]/50">
                        <td className="py-2 pr-4 text-[var(--color-text)]">{spec.name}</td>
                        <td className="py-2 pr-4 text-[var(--color-text-secondary)]">{spec.typicalValues}</td>
                        <td className="py-2 text-[var(--color-text-secondary)] text-xs">{spec.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          )}

          {data?.formulas?.formulas && (
            <Section title="Formulas">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.formulas.formulas.map((f, i) => (
                  <Card key={i} variant={i === 0 ? 'elevated' : 'flat'} className={i === 0 ? 'md:col-span-2' : ''}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-sm">{f.name}</h3>
                      <button
                        onClick={() => { copyToClipboard(f.formula); setCopiedFormula(i); setTimeout(() => setCopiedFormula(null), 2000) }}
                        className="p-1 rounded hover:bg-[var(--color-elevated)] cursor-pointer"
                      >
                        {copiedFormula === i ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                    <div className="text-lg font-mono text-[var(--color-accent)] mb-2">{formatFormula(f.formula)}</div>
                    <p className="text-xs text-[var(--color-text-secondary)] mb-2">{f.description}</p>
                    {f.variables && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {f.variables.map((v, j) => (
                          <Badge key={j} variant="default">{v.symbol}: {v.name}</Badge>
                        ))}
                      </div>
                    )}
                    {f.example && <p className="text-xs text-[var(--color-text-secondary)]">Example: {f.example}</p>}
                  </Card>
                ))}
              </div>
            </Section>
          )}

          {data?.applications?.applications && (
            <Section title="Real World Applications">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.applications.applications.map((app, i) => (
                  <Card key={i} variant="flat">
                    <h3 className="font-medium text-sm mb-1">{app.category}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-2">{app.description}</p>
                    {app.examples && (
                      <div className="flex flex-wrap gap-1.5">
                        {app.examples.map((ex, j) => (
                          <Badge key={j} variant="success">{ex}</Badge>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </Section>
          )}

          {data?.advantages?.advantages && data?.disadvantages?.disadvantages && (
            <Section title="Advantages & Disadvantages">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card variant="flat">
                  <h3 className="font-medium text-sm text-green-400 mb-3">Advantages</h3>
                  <ul className="space-y-2">
                    {data.advantages.advantages.map((a, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-secondary)] flex gap-2">
                        <span className="text-green-400 flex-shrink-0">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card variant="flat">
                  <h3 className="font-medium text-sm text-red-400 mb-3">Disadvantages</h3>
                  <ul className="space-y-2">
                    {data.disadvantages.disadvantages.map((d, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-secondary)] flex gap-2">
                        <span className="text-red-400 flex-shrink-0">✗</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Section>
          )}

          {data?.interview?.beginner && (
            <Section title="Interview Questions" collapsible>
              <div className="space-y-4">
                {['beginner', 'intermediate', 'advanced', 'expert'].map((level) => {
                  const questions = data.interview[level]
                  if (!questions?.length) return null
                  return (
                    <div key={level}>
                      <h3 className="text-sm font-medium capitalize mb-2 text-[var(--color-accent)]">{level}</h3>
                      <Accordion
                        items={questions.map((q) => ({
                          title: q.question,
                          content: q.answer,
                        }))}
                      />
                    </div>
                  )
                })}
              </div>
            </Section>
          )}

          {data?.mcqs?.questions && (
            <Section title="Quiz" collapsible>
              <div className="space-y-4">
                {data.mcqs.questions.map((q, i) => (
                  <MCQ key={i} question={q} index={i} />
                ))}
              </div>
            </Section>
          )}

          {data?.history?.invention && (
            <Section title="History" collapsible>
              <Card variant="flat">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-accent)]">{data.history.invention.year}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Year</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{data.history.invention.inventor}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Inventor</div>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">{data.history.invention.discovery}</p>
                {data.history.invention.evolution && (
                  <div className="mt-4 space-y-2">
                    {data.history.invention.evolution.map((e, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <span className="text-[var(--color-accent)] font-medium flex-shrink-0">{e.year}</span>
                        <span className="text-[var(--color-text-secondary)]">{e.event}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </Section>
          )}

          {data?.safety && (
            <Section title="Safety" collapsible>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(data.safety).map(([key, value]) => (
                  <Card key={key} variant="flat">
                    <h3 className="font-medium text-sm mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{value}</p>
                  </Card>
                ))}
              </div>
            </Section>
          )}

          {data?.glossary?.terms && (
            <Section title="Glossary" collapsible>
              <Accordion
                items={data.glossary.terms.map((t) => ({
                  title: t.term,
                  content: t.definition,
                }))}
              />
            </Section>
          )}

          {data?.related?.relatedComponents && (
            <Section title="Related Components">
              <div className="flex flex-wrap gap-2">
                {data.related.relatedComponents.map((r, i) => (
                  <Link key={i} to={`/component/${r.id}`}>
                    <Badge variant="default" className="cursor-pointer hover:bg-[var(--color-accent)]/20 transition-colors">
                      {r.id}
                      <span className="ml-1 text-[10px] opacity-60">— {r.relationship}</span>
                    </Badge>
                  </Link>
                ))}
              </div>
            </Section>
          )}

          {data?.references?.references && (
            <Section title="References" collapsible>
              <div className="space-y-3">
                {data.references.references.map((ref, i) => (
                  <Card key={i} variant="flat" className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium">{ref.title}</h3>
                      <p className="text-xs text-[var(--color-text-secondary)]">{ref.author} • {ref.year}</p>
                    </div>
                    <Badge variant="default">{ref.type}</Badge>
                  </Card>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </>
  )
}

function Section({ title, children, collapsible }) {
  const [open, setOpen] = useState(!collapsible)
  return (
    <section className="mb-8">
      <button
        onClick={() => collapsible && setOpen(!open)}
        className={cn(
          'flex items-center gap-2 mb-4',
          collapsible ? 'cursor-pointer w-full text-left' : ''
        )}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        {collapsible && (
          <span className={cn('text-xs text-[var(--color-text-secondary)] transition-transform', open ? 'rotate-180' : '')}>
            ▼
          </span>
        )}
      </button>
      {open && children}
    </section>
  )
}

function MCQ({ question, index }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (i) => {
    if (revealed) return
    setSelected(i)
    setRevealed(true)
  }

  const isCorrect = selected === question.correctAnswer

  return (
    <Card variant="flat">
      <p className="text-sm font-medium mb-3">
        <span className="text-[var(--color-accent)]">Q{index + 1}.</span> {question.question}
      </p>
      <div className="space-y-2">
        {question.options.map((opt, i) => {
          let variant = 'ghost'
          if (revealed && i === question.correctAnswer) variant = 'primary'
          else if (revealed && i === selected && !isCorrect) variant = 'secondary'

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-lg text-sm transition-all cursor-pointer',
                'border border-[var(--color-border)]',
                revealed && i === question.correctAnswer && 'border-green-500 bg-green-500/10 text-green-400',
                revealed && i === selected && !isCorrect && 'border-red-500 bg-red-500/10 text-red-400',
                !revealed && 'hover:border-[var(--color-accent)]'
              )}
            >
              <span className="mr-2 opacity-60">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          )
        })}
      </div>
      {revealed && (
        <p className={cn('text-xs mt-3', isCorrect ? 'text-green-400' : 'text-[var(--color-text-secondary)]')}>
          {isCorrect ? '✓ Correct!' : `✗ ${question.explanation}`}
        </p>
      )}
    </Card>
  )
}
