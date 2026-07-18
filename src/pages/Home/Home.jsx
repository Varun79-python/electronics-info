import { Link } from 'react-router-dom'
import {
  ArrowRight, TrendingUp, BookOpen, Grid3X3, Calculator, Bookmark,
  Zap, Cpu, Shield, Activity, Monitor, Wifi, Battery, Settings, Toolbox, Binary
} from 'lucide-react'
import SEOHead from '../../shared/seo/SEOHead'
import { Card, Badge } from '../../shared/components/common'
import Button from '../../shared/components/buttons/Button'
import ComponentImage from '../../shared/components/images/ComponentImage'
import useStore from '../../shared/store/useStore'
import componentsIndex from '../../shared/constants/components'
import categories from '../../shared/constants/categories'

// Category icons — single color, no brand colors
const categoryIcons = {
  passive: Zap,
  semiconductor: Cpu,
  'power-electronics': Zap,
  electromechanical: Settings,
  protection: Shield,
  sensors: Activity,
  'integrated-circuits': Cpu,
  digital: Binary,
  displays: Monitor,
  prototyping: Toolbox,
  communication: Wifi,
  'energy-storage': Battery,
}

const features = [
  { icon: Grid3X3, title: '86+ Components', desc: 'Detailed guides for every common electronic component' },
  { icon: Calculator, title: 'Interactive Tools', desc: 'Resistor calculator, comparison, and more' },
  { icon: BookOpen, title: 'Quizzes & MCQs', desc: 'Test your knowledge with per-component quizzes' },
  { icon: Bookmark, title: 'Bookmarks', desc: 'Save components and track your learning progress' },
]

// Real component photograph thumbnails
function ComponentThumbnail({ id, name }) {
  return (
    <div className="w-full aspect-[4/3] mx-auto mb-3 overflow-hidden rounded-[var(--radius-md)]">
      <ComponentImage
        componentId={id}
        componentName={name}
        size="md"
        aspectRatio="4/3"
        objectFit="cover"
      />
    </div>
  )
}

function ProgressBar({ value = 0, className = '' }) {
  const pct = Math.min(Math.max(value, 0), 100)
  return (
    <div className={`w-full h-1 rounded-full bg-[var(--color-border)] overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export default function Home() {
  const { recentlyViewed, readingProgress } = useStore()
  const recents = recentlyViewed
    .map((id) => componentsIndex[id])
    .filter(Boolean)
    .slice(0, 6)

  const trending = Object.values(componentsIndex).slice(0, 8)

  const sym = {
    // IEEE 315-1975 / ANSI Y32.2-1975 standard schematic symbols
    // Resistor: 3-peak zigzag, 60-degree angles
    resistor: (
      <svg width="60" height="18" viewBox="0 0 60 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M 0,9 L 10,9 L 13,3 L 19,15 L 25,3 L 31,15 L 37,3 L 43,15 L 47,9 L 58,9" />
      </svg>
    ),
    // Capacitor (Non-polarized): two parallel straight plates
    capacitor: (
      <svg width="44" height="22" viewBox="0 0 44 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="0" y1="11" x2="18" y2="11" />
        <line x1="18" y1="2" x2="18" y2="20" />
        <line x1="26" y1="2" x2="26" y2="20" />
        <line x1="26" y1="11" x2="44" y2="11" />
      </svg>
    ),
    // Electrolytic Capacitor (Polarized): straight positive plate, curved negative plate, plus sign near positive
    e_capacitor: (
      <svg width="44" height="22" viewBox="0 0 44 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="0" y1="11" x2="16" y2="11" />
        <line x1="16" y1="3" x2="16" y2="19" />
        <path d="M24,3 Q28,11 24,19" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1="24" y1="11" x2="40" y2="11" />
        <path d="M6,5 L12,5 M9,2 L9,8" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    // Diode: triangle pointing to vertical cathode bar
    diode: (
      <svg width="44" height="22" viewBox="0 0 44 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <line x1="0" y1="11" x2="14" y2="11" />
        <polygon points="14,4 28,11 14,18" />
        <line x1="28" y1="4" x2="28" y2="18" />
        <line x1="28" y1="11" x2="42" y2="11" />
      </svg>
    ),
    // LED: diode with two outward-pointing light emission arrows
    led: (
      <svg width="56" height="30" viewBox="0 0 56 30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <line x1="0" y1="15" x2="12" y2="15" />
        <polygon points="12,7 26,15 12,23" />
        <line x1="26" y1="7" x2="26" y2="23" />
        <line x1="26" y1="15" x2="38" y2="15" />
        <path d="M21,7 L29,1" />
        <path d="M25,1 L29,1 L29,5" />
        <path d="M27,11 L35,5" />
        <path d="M31,5 L35,5 L35,9" />
      </svg>
    ),
    // NPN Transistor: circle envelope, base bar, slanted collector/emitter, emitter arrow pointing outward
    npn: (
      <svg width="56" height="44" viewBox="0 0 56 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14" />
        <line x1="13" y1="11" x2="13" y2="29" strokeWidth="2.2" />
        <line x1="0" y1="20" x2="13" y2="20" />
        <line x1="13" y1="15" x2="25" y2="8" />
        <line x1="25" y1="8" x2="36" y2="8" />
        <line x1="13" y1="25" x2="25" y2="32" />
        <line x1="25" y1="32" x2="36" y2="32" />
        <polygon points="18,29 24,31 21,26" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
    // Inductor: 4 consecutive loops
    inductor: (
      <svg width="52" height="20" viewBox="0 0 52 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="0" y1="13" x2="2" y2="13" />
        <path d="M 2,13 C 5,5 11,5 13,13 C 15,5 21,5 23,13 C 25,5 31,5 33,13 C 35,5 41,5 43,13" />
        <line x1="43" y1="13" x2="48" y2="13" />
      </svg>
    ),
    // Op-Amp: triangle with invert/non-invert inputs (+/-) and single output
    opamp: (
      <svg width="50" height="36" viewBox="0 0 50 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <polygon points="10,25 38,15 10,5" />
        <line x1="0" y1="10" x2="10" y2="10" />
        <line x1="0" y1="20" x2="10" y2="20" />
        <line x1="38" y1="15" x2="48" y2="15" />
        <line x1="13" y1="10" x2="17" y2="10" strokeWidth="1.2" />
        <path d="M13,20 L17,20 M15,18 L15,22" strokeWidth="1.2" />
      </svg>
    ),
    // AND Gate: distinctive-shape AND symbol
    and_gate: (
      <svg width="48" height="34" viewBox="0 0 48 34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M 10,4 L 20,4 A 11,11 0 0 1 20,26 L 10,26 Z" />
        <line x1="0" y1="10" x2="10" y2="10" />
        <line x1="0" y1="20" x2="10" y2="20" />
        <line x1="31" y1="15" x2="42" y2="15" />
      </svg>
    ),
    // OR Gate: distinctive-shape OR symbol with curved input face
    or_gate: (
      <svg width="44" height="34" viewBox="0 0 44 34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M 8,4 Q 13,15 8,26 Q 18,26 28,15 Q 18,4 8,4 Z" />
        <line x1="0" y1="10" x2="9" y2="10" />
        <line x1="0" y1="20" x2="9" y2="20" />
        <line x1="28" y1="15" x2="40" y2="15" />
      </svg>
    ),
    // NOT Gate: triangle pointing to inverting bubble
    not_gate: (
      <svg width="44" height="28" viewBox="0 0 44 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <polygon points="8,7 8,23 20,15" />
        <circle cx="23" cy="15" r="3" />
        <line x1="0" y1="15" x2="8" y2="15" />
        <line x1="26" y1="15" x2="38" y2="15" />
      </svg>
    ),
    // Ground: descending parallel bars (chassis ground)
    ground: (
      <svg width="24" height="26" viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="10" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="18" y2="15" />
        <line x1="10" y1="20" x2="14" y2="20" />
      </svg>
    ),
    // VCC: power supply arrowhead
    vcc: (
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M6,8 L12,2 L18,8" strokeLinejoin="round" />
        <line x1="12" y1="2" x2="12" y2="18" />
      </svg>
    ),
    // Crystal Oscillator: quartz crystal slab between parallel plates
    crystal: (
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none" stroke="currentColor" strokeWidth="1.6">
        <line x1="13" y1="4" x2="13" y2="24" />
        <line x1="23" y1="4" x2="23" y2="24" />
        <rect x="16" y="6" width="4" height="16" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <line x1="0" y1="14" x2="13" y2="14" />
        <line x1="23" y1="14" x2="36" y2="14" />
      </svg>
    ),
    // Fuse: rectangle with wire passing through
    fuse: (
      <svg width="44" height="16" viewBox="0 0 44 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="10" y="5" width="24" height="10" />
        <line x1="0" y1="10" x2="44" y2="10" />
      </svg>
    ),
    // DIP-8 IC: integrated circuit package with notch and notch marker
    dip8: (
      <svg width="44" height="56" viewBox="0 0 44 56" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="4" width="24" height="40" rx="1" />
        <path d="M17,4 A 3 3 0 0 0 23,4" />
        <circle cx="12" cy="8" r="1.5" fill="currentColor" />
        <line x1="0" y1="10" x2="8" y2="10" />
        <line x1="0" y1="20" x2="8" y2="20" />
        <line x1="0" y1="30" x2="8" y2="30" />
        <line x1="0" y1="40" x2="8" y2="40" />
        <line x1="32" y1="10" x2="40" y2="10" />
        <line x1="32" y1="20" x2="40" y2="20" />
        <line x1="32" y1="30" x2="40" y2="30" />
        <line x1="32" y1="40" x2="40" y2="40" />
      </svg>
    ),
    // Transformer: iron-core transformer with two adjacent parallel coils
    transformer: (
      <svg width="36" height="40" viewBox="0 0 36 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M 8,4 Q 2,10 8,16 Q 2,22 8,28 Q 2,34 8,40" fill="none" />
        <path d="M 28,4 Q 34,10 28,16 Q 34,22 28,28 Q 34,34 28,40" fill="none" />
        <line x1="15" y1="6" x2="15" y2="38" />
        <line x1="21" y1="6" x2="21" y2="38" />
        <line x1="0" y1="4" x2="8" y2="4" />
        <line x1="0" y1="40" x2="8" y2="40" />
        <line x1="28" y1="4" x2="36" y2="4" />
        <line x1="28" y1="40" x2="36" y2="40" />
      </svg>
    ),
    // Relay: coil and normally open switch contact
    relay: (
      <svg width="44" height="32" viewBox="0 0 44 32" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="6" y="8" width="16" height="16" fill="none" />
        <line x1="6" y1="8" x2="22" y2="24" />
        <line x1="0" y1="16" x2="6" y2="16" />
        <line x1="22" y1="16" x2="28" y2="16" />
        <circle cx="34" cy="10" r="1.5" fill="currentColor" />
        <circle cx="34" cy="22" r="1.5" fill="currentColor" />
        <line x1="34" y1="22" x2="30" y2="12" strokeWidth="1.6" />
      </svg>
    ),
  }

  // ── Generate scattered positions (deterministic) ──
  const compData = (() => {
    // Avoid center ~35%: keep components in outer bands
    // x: 0-32%, 68-100%   y: 0-32%, 68-100%  (with some buffer in between)
    const types = Object.keys(sym)
    const positions = []
    // Brownian offset for variety
    const rng = (seed) => {
      let s = seed
      return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646 }
    }
    const rand = rng(42)
    const pick = (arr) => arr[Math.floor(rand() * arr.length)]

    const placements = [
      // Top edge (x across top, y 1-10%)
      [3, 4], [12, 2], [22, 6], [78, 1], [88, 5], [96, 3],
      // Left edge (x 1-6%, y down)
      [1, 15], [4, 28], [2, 42], [5, 58], [1, 72], [3, 85],
      // Right edge (x 88-98%, y down)
      [95, 12], [92, 26], [97, 40], [90, 55], [94, 70], [96, 84],
      // Bottom edge (x across bottom, y 88-98%)
      [5, 95], [15, 90], [25, 97], [72, 92], [85, 96], [95, 90],
      // Corners (diagonal fill)
      [10, 9], [85, 8], [8, 80], [88, 82],
      // Mid gaps
      [15, 42], [78, 38], [10, 58], [82, 62],
    ]

    const rotVals = [-25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25]

    for (const [x, y] of placements) {
      const type = pick(types)
      const rot = pick(rotVals) + Math.round((rand() - 0.5) * 10)
      positions.push({ type, x, y, rot })
    }
    return positions
  })()

  return (
    <>
      <style>{`
        /* ── Drift animations (5 variants) ── */
        @keyframes drift0 { 0%,100% { transform: translate(0,0); } 25% { transform: translate(14px,-10px); } 50% { transform: translate(-8px,12px); } 75% { transform: translate(10px,-6px); } }
        @keyframes drift1 { 0%,100% { transform: translate(0,0); } 25% { transform: translate(-12px,8px); } 50% { transform: translate(10px,-14px); } 75% { transform: translate(-6px,10px); } }
        @keyframes drift2 { 0%,100% { transform: translate(0,0); } 25% { transform: translate(10px,12px); } 50% { transform: translate(-14px,-6px); } 75% { transform: translate(8px,-12px); } }
        @keyframes drift3 { 0%,100% { transform: translate(0,0); } 25% { transform: translate(-8px,-10px); } 50% { transform: translate(12px,8px); } 75% { transform: translate(-10px,6px); } }
        @keyframes drift4 { 0%,100% { transform: translate(0,0); } 25% { transform: translate(6px,14px); } 50% { transform: translate(-10px,-8px); } 75% { transform: translate(14px,-10px); } }
        /* ── Fade pulse ── */
        @keyframes fadePulse { 0%,100% { opacity:0.15; } 50% { opacity:0.45; } }
        /* ── Applied with staggered delays ── */
        @media (prefers-reduced-motion: no-preference) {
          .sym { will-change:transform,opacity; }
          .sym:nth-child(8n+1) { animation: drift0 7s ease-in-out infinite, fadePulse 4s ease-in-out infinite; }
          .sym:nth-child(8n+2) { animation: drift1 8s ease-in-out infinite, fadePulse 5s ease-in-out infinite; }
          .sym:nth-child(8n+3) { animation: drift2 9s ease-in-out infinite, fadePulse 3.5s ease-in-out infinite; }
          .sym:nth-child(8n+4) { animation: drift3 7.5s ease-in-out infinite, fadePulse 4.5s ease-in-out infinite; }
          .sym:nth-child(8n+5) { animation: drift4 8.5s ease-in-out infinite, fadePulse 5.5s ease-in-out infinite; }
          .sym:nth-child(8n+6) { animation: drift0 9.5s ease-in-out infinite, fadePulse 3.8s ease-in-out infinite; }
          .sym:nth-child(8n+7) { animation: drift2 7.2s ease-in-out infinite, fadePulse 4.2s ease-in-out infinite; }
          .sym:nth-child(8n+8) { animation: drift3 8.8s ease-in-out infinite, fadePulse 5.2s ease-in-out infinite; }
        }
        @media (prefers-reduced-motion:reduce) {
          .sym { animation:none!important; opacity:0.3!important; }
        }
      `}</style>
      <SEOHead />
      <div className="min-h-screen">
        {/* ── Hero ── */}
        <section className="relative px-4 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)] to-[var(--color-elevated)] border-b border-[var(--color-border)]">
          {/* Radial mask overlay for mesh glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.06)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.12)_0%,transparent_50%)] pointer-events-none z-0" />

          {/* ── Animated Component Symbols Background ── */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none text-[var(--color-text-muted)] opacity-60">
            {compData.map((c, i) => (
              <div
                key={i}
                className="sym absolute select-none pointer-events-none transition-all duration-300"
                style={{
                  left: `${c.x}%`,
                  top: `${c.y}%`,
                  transform: `rotate(${c.rot}deg)`,
                }}
              >
                {sym[c.type]}
              </div>
            ))}
          </div>

          {/* ── Foreground Content ── */}
          <div className="relative z-10 max-w-4xl mx-auto text-left">

            {/* Left Column: Copy & CTAs */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-sm shadow-sm text-xs font-semibold text-[var(--color-text-secondary)] mb-6 transition-all hover:border-[var(--color-accent)]/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                </span>
                <span>Interactive Learning Engine</span>
              </div>

              <h1 className="text-[40px] md:text-[54px] font-extrabold mb-6 text-[var(--color-text)] leading-[1.1] tracking-[-0.03em]">
                Understand Electronics<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent)] to-cyan-500 dark:from-[var(--color-accent)] dark:to-cyan-400">
                  Like Never Before
                </span>
              </h1>

              <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl leading-relaxed">
                Explore {Object.keys(componentsIndex).length}+ electronic components with detailed explanations, interactive visualizations, formulas, quizzes, and real-world applications.
              </p>

              <div className="flex items-center gap-3 flex-wrap mb-10">
                <Link to="/categories">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-[var(--color-accent)]/15 hover:scale-[1.01] active:scale-[0.99] transition-transform">
                    <Grid3X3 size={18} />
                    Browse Components
                  </Button>
                </Link>
                <Link to="/calculator">
                  <Button variant="secondary" size="lg" className="hover:scale-[1.01] active:scale-[0.99] transition-transform bg-[var(--color-surface)]/70 backdrop-blur-sm">
                    <Calculator size={18} />
                    Calculators
                  </Button>
                </Link>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-8 w-full max-w-md">
                <div>
                  <div className="text-2xl font-bold text-[var(--color-text)]">86+</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5 font-medium">Guides & Pinouts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--color-text)]">100%</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5 font-medium">Interactive Simulations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--color-text)]">Free</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5 font-medium">Open Source Learning</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Features ── */}
        <section className="px-4 py-16 bg-[var(--color-elevated)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <Card key={f.title} variant="flat" className="group hover:border-[var(--color-text)]/30 transition-colors">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-elevated)] border border-[var(--color-border)] flex items-center justify-center mb-3">
                    <f.icon size={20} className="text-[var(--color-text-muted)]" />
                  </div>
                  <h3 className="font-semibold text-[22px] tracking-[-0.03em] mb-1">{f.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Categories ── */}
        <section className="px-4 py-16 bg-[var(--color-bg)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[30px] font-bold tracking-[-0.03em]">
                Browse by Category
              </h2>
              <Link to="/categories" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] flex items-center gap-1 transition-colors font-medium">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat.id] || Grid3X3
                return (
                  <Link key={cat.id} to={`/categories/${cat.id}`} className="group block">
                    <Card variant="elevated" className="h-full transition-colors hover:border-[var(--color-accent)]/30 cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center">
                          <Icon size={20} className="text-[var(--color-text-muted)]" />
                        </div>
                        <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">→</span>
                      </div>
                      <h3 className="font-medium text-[22px] tracking-[-0.03em]">{cat.name}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">{cat.count} components</p>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Trending ── */}
        <section className="px-4 py-16 bg-[var(--color-elevated)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[30px] font-bold tracking-[-0.03em] flex items-center gap-2">
                <TrendingUp size={24} />
                Popular Components
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trending.map((c) => (
                <Link key={c.id} to={`/component/${c.id}`} className="group block">
                  <Card variant="flat" className="h-full text-center transition-colors hover:border-[var(--color-accent)]/30 cursor-pointer">
                    <ComponentThumbnail id={c.id} name={c.name} />
                    <h3 className="font-medium text-[22px] tracking-[-0.03em] leading-tight group-hover:text-[var(--color-accent)] transition-colors">{c.name}</h3>
                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                      {c.category}
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Recently Viewed / Continue Learning ── */}
        {recents.length > 0 && (
          <section className="px-4 py-16 bg-[var(--color-bg)]">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[30px] font-bold tracking-[-0.03em] flex items-center gap-2">
                  <BookOpen size={24} />
                  Continue Learning
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {recents.map((c) => {
                  const progress = readingProgress?.[c.id] || 0
                  return (
                    <Link key={c.id} to={`/component/${c.id}`} className="group block">
                      <Card variant="flat" className="h-full text-center transition-colors hover:border-[var(--color-accent)]/30">
                        <ComponentThumbnail id={c.id} name={c.name} />
                        <h3 className="font-medium text-sm tracking-tight group-hover:text-[var(--color-accent)] transition-colors">{c.name}</h3>
                        <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                          {c.category}
                        </span>
                        <div className="mt-3 px-2">
                          <div className="flex items-center justify-between text-[10px] text-[var(--color-text-muted)] mb-1">
                            <span>{progress >= 100 ? 'Completed' : progress > 0 ? `${progress}%` : 'Not started'}</span>
                          </div>
                          <ProgressBar value={progress} />
                        </div>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="px-4 py-20 bg-[var(--color-elevated)]">
          <div className="max-w-4xl mx-auto text-center">
            <Card variant="flat" className="py-12 px-8">
              <h2 className="text-[30px] font-bold tracking-[-0.03em] mb-4">Ready to start learning?</h2>
              <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
                Dive into detailed component guides with interactive visualizations, formulas, and quizzes.
              </p>
              <Link to="/categories">
                <Button variant="primary" size="lg">
                  Explore All Components
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
