const simulationEngines = [
  { id: 'dc', name: 'DC Circuit Simulator', description: 'Analyze DC circuits with resistors, voltage sources, and current sources' },
  { id: 'ac', name: 'AC Circuit Simulator', description: 'Analyze AC circuits with RLC components and sinusoidal sources' },
  { id: 'transient', name: 'Transient Analysis', description: 'Simulate circuit response over time to step inputs' },
]

export default function SimulationEngine({ engineId }) {
  const engine = simulationEngines.find((e) => e.id === engineId) || simulationEngines[0]

  return (
    <div className="rounded-[var(--radius-lg)] p-6 bg-[var(--color-surface)] border border-[var(--color-border)] text-center">
      <div className="text-4xl mb-3">🔬</div>
      <h3 className="font-medium mb-1">{engine.name}</h3>
      <p className="text-sm text-[var(--color-text-secondary)]">{engine.description}</p>
      <p className="text-xs text-[var(--color-text-secondary)] mt-4">Simulation engine ready for implementation</p>
    </div>
  )
}
