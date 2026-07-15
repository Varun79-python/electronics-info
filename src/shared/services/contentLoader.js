export async function loadComponentData(componentId) {
  const data = {}

  const files = [
    'overview', 'working', 'construction', 'types', 'specifications',
    'formulas', 'applications', 'advantages', 'disadvantages',
    'selection', 'troubleshooting', 'history', 'safety',
    'glossary', 'interview', 'mcqs', 'references', 'related',
  ]

  for (const file of files) {
    try {
      const module = await import(
        `../content/components/${componentId}/${file}.json`
      )
      data[file] = module.default
    } catch {
      data[file] = null
    }
  }

  return data
}

export function getComponentPath(componentId) {
  const segments = [
    'metadata', 'overview', 'working', 'construction', 'types',
    'specifications', 'formulas', 'applications', 'advantages',
    'disadvantages', 'selection', 'troubleshooting', 'history',
    'safety', 'glossary', 'interview', 'mcqs', 'references',
    'related', 'experiments', 'projects', 'datasheets',
    'manufacturers', 'simulation', 'animation', 'viewer',
    'timeline',
  ]
  return segments.map((s) => `content/components/${componentId}/${s}.json`)
}
