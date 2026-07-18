import componentsIndex from '../constants/components'

export function searchComponents(query) {
  const q = query.toLowerCase()
  if (!q) return []

  return Object.values(componentsIndex).filter((c) => {
    return c.name.toLowerCase().includes(q)
  }).slice(0, 20)
}

export function getComponentsByCategory(categoryId) {
  return Object.values(componentsIndex).filter((c) => c.category === categoryId)
}

export function getRelatedComponents(componentId, max = 5) {
  const component = componentsIndex[componentId]
  if (!component) return []

  return Object.values(componentsIndex)
    .filter((c) => c.id !== componentId && c.category === component.category)
    .slice(0, max)
}

export function getAllCategories() {
  const cats = {}
  Object.values(componentsIndex).forEach((c) => {
    if (!cats[c.category]) cats[c.category] = []
    cats[c.category].push(c)
  })
  return cats
}
