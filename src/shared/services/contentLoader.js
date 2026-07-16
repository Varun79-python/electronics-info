// @ts-expect-error — import.meta.glob is a Vite build-time transform
const componentModules = import.meta.glob('../../content/components/**/*.json', {
  import: 'default',
})

export async function loadComponentData(componentId) {
  const data = {}

  const files = [
    'overview', 'working', 'construction', 'types', 'specifications',
    'formulas', 'applications', 'advantages', 'disadvantages',
    'selection', 'troubleshooting', 'history', 'safety',
    'glossary', 'interview', 'mcqs', 'references', 'related',
  ]

  for (const file of files) {
    const key = `../../content/components/${componentId}/${file}.json`
    const loader = componentModules[key]
    if (loader) {
      try {
        data[file] = await loader()
      } catch {
        data[file] = null
      }
    } else {
      data[file] = null
    }
  }

  return data
}
