export function trackPageView(page) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem('eh_pageview', JSON.stringify({ page, time: Date.now() }))
  } catch {}
}

export function trackEvent(category, action, label) {
  if (typeof window === 'undefined') return
  try {
    const events = JSON.parse(localStorage.getItem('eh_events') || '[]')
    events.push({ category, action, label, time: Date.now() })
    localStorage.setItem('eh_events', JSON.stringify(events.slice(-100)))
  } catch {}
}
