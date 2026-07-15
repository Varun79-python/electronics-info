const componentsIndex = {
  resistor: {
    id: 'resistor',
    name: 'Resistor',
    category: 'passive',
    description: 'A passive two-terminal electrical component that implements electrical resistance.',
    tags: ['resistance', 'ohm', 'passive', 'current limiting'],
  },
  capacitor: {
    id: 'capacitor',
    name: 'Capacitor',
    category: 'passive',
    description: 'A passive two-terminal electronic component that stores electrical energy.',
    tags: ['capacitance', 'farad', 'passive', 'energy storage'],
  },
  diode: {
    id: 'diode',
    name: 'Diode',
    category: 'semiconductor',
    description: 'A two-terminal electronic component that conducts current primarily in one direction.',
    tags: ['rectifier', 'semiconductor', 'pn-junction'],
  },
  transistor: {
    id: 'transistor',
    name: 'Transistor',
    category: 'semiconductor',
    description: 'A semiconductor device used to amplify or switch electronic signals.',
    tags: ['amplifier', 'switch', 'BJT', 'semiconductor'],
  },
  mosfet: {
    id: 'mosfet',
    name: 'MOSFET',
    category: 'semiconductor',
    description: 'A field-effect transistor used for switching and amplifying electronic signals.',
    tags: ['fet', 'field-effect', 'switch', 'semiconductor'],
  },
  relay: {
    id: 'relay',
    name: 'Relay',
    category: 'electromechanical',
    description: 'An electrically operated switch that uses an electromagnet.',
    tags: ['switch', 'electromagnet', 'electromechanical'],
  },
  transformer: {
    id: 'transformer',
    name: 'Transformer',
    category: 'passive',
    description: 'A passive component that transfers electrical energy between circuits.',
    tags: ['induction', 'voltage', 'power'],
  },
  battery: {
    id: 'battery',
    name: 'Battery',
    category: 'energy-storage',
    description: 'A device that stores chemical energy and converts it to electrical energy.',
    tags: ['power', 'dc', 'energy storage', 'electrochemical'],
  },
}

export default componentsIndex
