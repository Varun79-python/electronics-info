import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}

export function formatFormula(formula) {
  if (!formula) return ''
  return formula
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³')
    .replace(/_(\d+)/g, (_, d) => String.fromCharCode(0x2080 + parseInt(d)))
    .replace(/Ω/g, 'Ω')
    .replace(/μ/g, 'μ')
    .replace(/π/g, 'π')
    .replace(/->/g, '→')
    .replace(/<-/g, '←')
    .replace(/<->/g, '⇔')
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function truncate(text, length = 100) {
  if (!text || text.length <= length) return text
  return text.slice(0, length).trimEnd() + '...'
}

export function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
  }
}

export function shareContent(title, text, url) {
  if (navigator.share) {
    navigator.share({ title, text, url })
  }
}
