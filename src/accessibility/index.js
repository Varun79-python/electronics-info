export function announce(message) {
  if (typeof window === 'undefined') return
  let announcer = document.getElementById('live-announcer')
  if (!announcer) {
    announcer = document.createElement('div')
    announcer.id = 'live-announcer'
    announcer.setAttribute('role', 'status')
    announcer.setAttribute('aria-live', 'polite')
    announcer.className = 'sr-only'
    document.body.appendChild(announcer)
  }
  announcer.textContent = ''
  requestAnimationFrame(() => { announcer.textContent = message })
}

export function skipToContent() {
  const main = document.querySelector('main')
  if (main) {
    main.setAttribute('tabindex', '-1')
    main.focus()
    main.removeAttribute('tabindex')
  }
}
