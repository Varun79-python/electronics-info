import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Bookmark, Check, Copy, Share2, ChevronRight } from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge, Accordion } from '../../shared/components/common'
import Button from '../../shared/components/buttons/Button'
import ComponentImage from '../../shared/components/images/ComponentImage'
import useStore from '../../shared/store/useStore'
import { loadComponentData } from '../../shared/services/contentLoader'
import { cn, formatFormula, copyToClipboard, shareContent } from '../../shared/utils'
import categories from '../../shared/constants/categories'

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
        <div className="w-8 h-8 border-2 border-[var(--color-text)]/20 border-t-[var(--color-text)] rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <SEOHead title={name} description={overview?.shortDescription} path={`/component/${id}`} />
      <div className="min-h-screen pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
            <ChevronRight size={12} className="shrink-0 text-[var(--color-text-muted)]" />
            <Link to="/categories" className="hover:text-[var(--color-accent)] transition-colors">Categories</Link>
            <ChevronRight size={12} className="shrink-0 text-[var(--color-text-muted)]" />
            {overview?.category && (
              <>
                <Link to={`/categories/${overview.category}`} className="hover:text-[var(--color-accent)] transition-colors capitalize">
                  {categories.find(c => c.id === overview.category)?.name || overview.category}
                </Link>
                <ChevronRight size={12} className="shrink-0 text-[var(--color-text-muted)]" />
              </>
            )}
            <span className="text-[var(--color-text)] font-medium truncate">{name}</span>
          </nav>

          {/* Title bar */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge>{overview?.category}</Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => toggleBookmark(id)} className="p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]" aria-label="Bookmark">
                <Bookmark size={16} className={isBookmarked ? 'fill-[var(--color-text)] text-[var(--color-text)]' : ''} />
              </button>
              <button onClick={() => shareContent(name, overview?.shortDescription, window.location.href)} className="p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]" aria-label="Share">
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {overview && (
            <div className="mb-10">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3 shrink-0">
                  <ComponentImage
                    componentId={id}
                    componentName={name}
                    size="hero"
                    aspectRatio="4/3"
                    objectFit="contain"
                    className="bg-[var(--color-surface)]"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">{overview.shortDescription}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card variant="flat">
                  <h3 className="font-semibold text-sm mb-1">What is it?</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{overview.whatIsIt}</p>
                </Card>
                <Card variant="flat">
                  <h3 className="font-semibold text-sm mb-1">Why it exists</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{overview.whyExists}</p>
                </Card>
                <Card variant="flat">
                  <h3 className="font-semibold text-sm mb-1">Where it's used</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{overview.whereUsed}</p>
                </Card>
              </div>
            </div>
          )}

          {data?.working?.workingPrinciple && (
            <Section title="How It Works">
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">{data.working.workingPrinciple}</p>
              {data.working.steps && (
                <ol className="space-y-2">
                  {data.working.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] flex items-center justify-center flex-shrink-0 text-xs font-medium">{i + 1}</span>
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
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">{type.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {type.applications?.map((app, j) => (
                        <Badge key={j} variant="default">{app}</Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </Section>
          )}

          {data?.specifications?.specifications && (
            <Section title="Key Specifications">
              <div className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)] bg-[var(--color-elevated)]">
                      <th className="text-left py-3 px-4 font-medium">Parameter</th>
                      <th className="text-left py-3 px-4 font-medium">Typical Values</th>
                      <th className="text-left py-3 px-4 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.specifications.specifications.map((spec, i) => (
                      <tr key={i} className="border-b border-[var(--color-border)] last:border-0">
                        <td className="py-2.5 px-4 text-[var(--color-text)]">{spec.name}</td>
                        <td className="py-2.5 px-4 text-[var(--color-text-secondary)]">{spec.typicalValues}</td>
                        <td className="py-2.5 px-4 text-[var(--color-text-muted)] text-xs">{spec.notes}</td>
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
                  <Card key={i} variant="flat" className={i === 0 ? 'md:col-span-2' : ''}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-sm">{f.name}</h3>
                      <button
                        onClick={() => { copyToClipboard(f.formula); setCopiedFormula(i); setTimeout(() => setCopiedFormula(null), 2000) }}
                        className="p-1 rounded hover:bg-[var(--color-elevated)] cursor-pointer text-[var(--color-text-secondary)]"
                      >
                        {copiedFormula === i ? <Check size={14} className="text-[var(--color-success)]" /> : <Copy size={14} />}
                      </button>
                    </div>
                    <div className="text-lg font-mono text-[var(--color-text)] mb-2">{formatFormula(f.formula)}</div>
                    <p className="text-xs text-[var(--color-text-secondary)] mb-2">{f.description}</p>
                    {f.variables && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {f.variables.map((v, j) => (
                          <Badge key={j} variant="default">{v.symbol}: {v.name}</Badge>
                        ))}
                      </div>
                    )}
                    {f.example && <p className="text-xs text-[var(--color-text-muted)]">Example: {f.example}</p>}
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
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">{app.description}</p>
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
                  <h3 className="font-medium text-sm text-[var(--color-success)] mb-3">Advantages</h3>
                  <ul className="space-y-2">
                    {data.advantages.advantages.map((a, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-secondary)] flex gap-2">
                        <span className="text-[var(--color-success)] flex-shrink-0">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card variant="flat">
                  <h3 className="font-medium text-sm text-[var(--color-error)] mb-3">Disadvantages</h3>
                  <ul className="space-y-2">
                    {data.disadvantages.disadvantages.map((d, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-secondary)] flex gap-2">
                        <span className="text-[var(--color-error)] flex-shrink-0">✗</span>
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
                      <h3 className="text-sm font-medium capitalize mb-2 text-[var(--color-text)]">{level}</h3>
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
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-text)]">{data.history.invention.year}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">Year</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{data.history.invention.inventor}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">Inventor</div>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{data.history.invention.discovery}</p>
                {data.history.invention.evolution && (
                  <div className="mt-4 space-y-2 border-t border-[var(--color-border)] pt-4">
                    {data.history.invention.evolution.map((e, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <span className="text-[var(--color-text)] font-medium flex-shrink-0">{e.year}</span>
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
                    <p className="text-sm text-[var(--color-text-secondary)]">{value instanceof Object ? JSON.stringify(value) : value}</p>
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
                    <Badge variant="default" className="cursor-pointer hover:bg-[var(--color-elevated)] transition-colors">
                      {r.id}
                      <span className="ml-1 text-[10px] text-[var(--color-text-muted)]">— {r.relationship}</span>
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
                      <p className="text-xs text-[var(--color-text-muted)]">{ref.author} • {ref.year}</p>
                    </div>
                    <Badge>{ref.type}</Badge>
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
    <section className="mb-10">
      <button
        onClick={() => collapsible && setOpen(!open)}
        className={cn(
          'flex items-center gap-2 mb-4 w-full',
          collapsible ? 'cursor-pointer text-left' : ''
        )}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        {collapsible && (
          <span className={cn('text-xs text-[var(--color-text-muted)] transition-transform', open ? 'rotate-180' : '')}>
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
        <span className="text-[var(--color-text)] font-bold">Q{index + 1}.</span> {question.question}
      </p>
      <div className="space-y-2">
        {question.options.map((opt, i) => {
          let borderColor = 'border-[var(--color-border)]'
          let bgColor = ''
          let textColor = ''
          if (revealed && i === question.correctAnswer) {
            borderColor = 'border-[var(--color-success)]'
            bgColor = 'bg-[var(--color-success-bg)]'
            textColor = 'text-[var(--color-success)]'
          } else if (revealed && i === selected && !isCorrect) {
            borderColor = 'border-[var(--color-error)]'
            bgColor = 'bg-[var(--color-error-bg)]'
            textColor = 'text-[var(--color-error)]'
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-[var(--radius-md)] text-sm transition-all cursor-pointer',
                'border',
                borderColor,
                bgColor,
                textColor,
                !revealed && 'hover:border-[var(--color-text)]/30'
              )}
            >
              <span className={cn('mr-2', revealed ? '' : 'text-[var(--color-text-muted)]')}>{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          )
        })}
      </div>
      {revealed && (
        <p className={cn('text-xs mt-3', isCorrect ? 'text-[var(--color-success)]' : 'text-[var(--color-text-secondary)]')}>
          {isCorrect ? '✓ Correct!' : `✗ ${question.explanation}`}
        </p>
      )}
    </Card>
  )
}
