import { useState, useRef, useEffect } from 'react'

/**
 * ComponentImage — displays a real photograph of an electronic component.
 *
 * Props:
 *   componentId   — e.g. "resistor", "diode" — used to derive /images/components/{id}.webp
 *   componentName — full name for alt text & fallback initials
 *   className     — optional extra classes for the outer container
 *   aspectRatio   — CSS aspect-ratio value (default "4/3")
 *   objectFit     — "cover" (default, crops to fill) or "contain" (shows whole image)
 *   size          — "sm" (40px), "md" (120px), "lg" (280px), "hero" (full width)
 *   lazy          — enable lazy loading (default true)
 */
export default function ComponentImage({
  componentId,
  componentName,
  className = '',
  aspectRatio = '4/3',
  objectFit = 'cover',
  size = 'md',
  lazy = true,
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)

  // Size classes
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-full max-w-[180px]',
    lg: 'w-full max-w-[320px]',
    hero: 'w-full max-w-[500px]',
  }

  const containerClass = sizeClasses[size] || sizeClasses.md

  // Derive the image path
  const src = `/images/components/${componentId}.webp`

  // Derive alt text from component name
  const altText = componentName
    ? `${componentName} — a ${componentId.replace(/-/g, ' ')} electronic component photograph`
    : `${componentId} electronic component`

  // Fallback: show first letters of component name
  const initials = (componentName || componentId)
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')

  return (
    <div
      className={`component-image-container rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] relative ${containerClass} ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={altText}
    >
      {!error ? (
        <img
          ref={imgRef}
          src={src}
          alt={altText}
          loading={lazy ? 'lazy' : undefined}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit, objectPosition: 'center' }}
          decoding="async"
        />
      ) : null}

      {/* Loading / error placeholder */}
      {(!loaded || error) && (
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)]">
          {error ? (
            <span className="text-lg font-semibold select-none">{initials}</span>
          ) : (
            <div className="w-6 h-6 border-2 border-[var(--color-border)] border-t-[var(--color-text-muted)] rounded-full animate-spin" />
          )}
        </div>
      )}
    </div>
  )
}
