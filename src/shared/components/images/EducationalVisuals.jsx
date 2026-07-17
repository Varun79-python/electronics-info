/**
 * EducationalVisuals — Auto-generated educational visual panels
 *
 * Renders contextual educational image panels from the manifest:
 *   - Pinout Diagram
 *   - Circuit Symbol
 *   - Application Circuit
 *   - Internal Construction
 *   - Package Variants
 *   - Breadboard Setup
 *   - PCB Layout
 *   - Dimension Drawing
 *
 * These appear as info cards beside or below the main gallery.
 */

import { motion } from 'framer-motion'

// Image types that are considered "educational" (vs. plain product photos)
const EDUCATIONAL_TYPES = new Set([
  'pinout', 'symbol', 'internal', 'package', 'dimensions',
])

// Image types that show "real usage"
const APPLICATION_TYPES = new Set([
  'application', 'breadboard', 'pcb',
])

export default function EducationalVisuals({ manifest, componentId, componentName }) {
  if (!manifest?.gallery) return null

  const gallery = manifest.gallery.filter(g => g.sizes?.length > 0)

  // Split into categories
  const educational = gallery.filter(g => EDUCATIONAL_TYPES.has(g.type))
  const applications = gallery.filter(g => APPLICATION_TYPES.has(g.type))
  const standard = gallery.filter(g =>
    !EDUCATIONAL_TYPES.has(g.type) && !APPLICATION_TYPES.has(g.type)
  )

  const sections = []

  if (educational.length > 0) {
    sections.push({
      title: 'Technical Diagrams',
      icon: '📐',
      items: educational,
    })
  }

  if (applications.length > 0) {
    sections.push({
      title: 'Application Examples',
      icon: '🔌',
      items: applications,
    })
  }

  if (standard.length > 0 && educational.length === 0 && applications.length === 0) {
    // Only show standard images if we have no educational ones
    sections.push({
      title: 'Component Views',
      icon: '📷',
      items: standard.slice(0, 4),
    })
  }

  if (sections.length === 0) return null

  return (
    <div className="space-y-6 mt-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3 flex items-center gap-2">
            <span>{section.icon}</span>
            {section.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {section.items.map((item) => {
              const thumbSrc = item.sizes?.[0] ? `/${item.sizes[0].webp}` : null
              if (!thumbSrc) return null

              return (
                <motion.a
                  key={item.type}
                  href={thumbSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group block rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--color-elevated)]">
                    <picture>
                      <source srcSet={thumbSrc} type="image/webp" />
                      <img
                        src={thumbSrc}
                        alt={item.alt || `${componentName || componentId} — ${item.label}`}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="px-2.5 py-2">
                    <p className="text-xs font-medium text-[var(--color-text)] truncate">{item.label}</p>
                    <p className="text-[10px] text-[var(--color-text-muted)] mt-0.5 capitalize">{item.type}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
