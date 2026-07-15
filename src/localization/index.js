const translations = {
  en: {
    nav: { home: 'Home', categories: 'Categories', calculators: 'Calculators', bookmarks: 'Bookmarks', settings: 'Settings', search: 'Search' },
    common: { loading: 'Loading...', error: 'Something went wrong', empty: 'No data available', back: 'Back' },
  },
}

let currentLocale = 'en'

export function setLocale(locale) {
  currentLocale = locale
}

export function t(key) {
  const keys = key.split('.')
  let obj = translations[currentLocale] || translations.en
  for (const k of keys) {
    if (obj?.[k] === undefined) return key
    obj = obj[k]
  }
  return obj
}

export default translations
