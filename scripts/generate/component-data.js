// Wikipedia-sourced content for all 86 components
// Each entry provides structured data used by the generator to produce JSON files

export const COMPONENT_DATA = {
  resistor: {
    overview: {
      whatIsIt: 'A resistor is a passive two-terminal electrical component that implements electrical resistance as a circuit element. It limits or regulates the flow of electric current in electronic circuits.',
      whyExists: 'Resistors are essential for controlling current flow, dividing voltages, setting bias points in transistors, terminating transmission lines, and protecting sensitive components from excessive current.',
      whereUsed: 'Resistors are found in virtually every electronic device — from simple LED circuits to complex computers, power supplies, audio equipment, and measurement instruments.',
    },
    working: {
      workingPrinciple: 'Resistors work by converting electrical energy into heat through the collision of charge carriers (electrons) with atoms in the resistive material. This process is described by Ohm\'s Law: V = IR.',
      steps: [
        'When voltage is applied across the resistor terminals, an electric field is established',
        'Free electrons drift through the resistive material under the influence of this field',
        'Electrons collide with atoms in the material, transferring kinetic energy as heat',
        'The rate of electron flow (current) is determined by the resistance value',
        'Higher resistance means fewer electrons flow per unit of applied voltage',
      ],
      microscopicExplanation: 'At the atomic level, resistive materials have a higher density of lattice defects and impurity atoms that scatter electrons. Each scattering event converts some of the electron\'s kinetic energy into lattice vibrations (phonons), which manifests as heat.',
    },
    construction: {
      internalParts: [
        { name: 'Resistive Element', function: 'Provides the specific resistance value', material: 'Carbon film, metal film, wire-wound, or thick film' },
        { name: 'Terminal Leads', function: 'Connect the resistor to the circuit', material: 'Tinned copper wire' },
        { name: 'Insulating Body', function: 'Protects the resistive element and provides mechanical strength', material: 'Ceramic or molded plastic' },
        { name: 'Color Bands', function: 'Indicate the resistance value and tolerance', material: 'Colored paint or enamel' },
      ],
    },
    types: {
      types: [
        { name: 'Carbon Film Resistor', description: 'Made by depositing a carbon film on a ceramic substrate. Most common general-purpose resistor.', applications: ['General purpose circuits', 'Low-cost electronics'] },
        { name: 'Metal Film Resistor', description: 'Uses a thin metal film for the resistive element. Better tolerance and lower noise.', applications: ['Precision circuits', 'Audio equipment', 'Measurement devices'] },
        { name: 'Wire-Wound Resistor', description: 'A wire made of resistive alloy is wound around a ceramic core. Handles high power.', applications: ['Power supplies', 'High-current circuits', 'Load resistors'] },
        { name: 'Surface Mount (SMD) Resistor', description: 'Designed for surface-mount technology. Compact and suitable for automated assembly.', applications: ['PCB assemblies', 'Mobile devices', 'Compact electronics'] },
        { name: 'Variable Resistor (Potentiometer)', description: 'Adjustable resistance with three terminals. Used for volume controls and tuning.', applications: ['Volume controls', 'Tuning circuits', 'Adjustable voltage dividers'] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Ohm's Law", formula: 'V = I × R', description: 'The voltage across a resistor equals the current through it multiplied by its resistance.', variables: [{ symbol: 'V', name: 'Voltage', unit: 'Volts (V)' }, { symbol: 'I', name: 'Current', unit: 'Amperes (A)' }, { symbol: 'R', name: 'Resistance', unit: 'Ohms (Ω)' }], example: 'If R = 100Ω and I = 0.05A, then V = 0.05 × 100 = 5V' },
        { name: 'Power Dissipation', formula: 'P = I² × R', description: 'The power dissipated by a resistor as heat.', variables: [{ symbol: 'P', name: 'Power', unit: 'Watts (W)' }, { symbol: 'I', name: 'Current', unit: 'Amperes (A)' }, { symbol: 'R', name: 'Resistance', unit: 'Ohms (Ω)' }], example: 'If R = 100Ω and I = 0.1A, then P = 0.01 × 100 = 1W' },
        { name: 'Series Resistance', formula: 'R_total = R_1 + R_2 + ... + R_n', description: 'Total resistance of resistors connected in series.', variables: [{ symbol: 'R_total', name: 'Total Resistance', unit: 'Ohms (Ω)' }, { symbol: 'R_n', name: 'Individual Resistance', unit: 'Ohms (Ω)' }], example: 'R1 = 100Ω, R2 = 200Ω → R_total = 300Ω' },
        { name: 'Parallel Resistance', formula: '1/R_total = 1/R_1 + 1/R_2 + ... + 1/R_n', description: 'Total resistance of resistors connected in parallel.', variables: [{ symbol: 'R_total', name: 'Total Resistance', unit: 'Ohms (Ω)' }, { symbol: 'R_n', name: 'Individual Resistance', unit: 'Ohms (Ω)' }], example: 'R1 = 100Ω, R2 = 100Ω → R_total = 50Ω' },
      ],
    },
    specifications: {
      specifications: [
        { name: 'Resistance Value', typicalValues: '1Ω to 10MΩ (standard E12/E24 series)', notes: 'Standard values follow IEC 60063 preferred number series' },
        { name: 'Tolerance', typicalValues: '±1%, ±5%, ±10%', notes: 'Metal film resistors achieve ±1%; carbon film typically ±5%' },
        { name: 'Power Rating', typicalValues: '1/8W, 1/4W, 1/2W, 1W, 2W', notes: 'Higher power ratings require physically larger packages' },
        { name: 'Temperature Coefficient', typicalValues: '±50 to ±500 ppm/°C', notes: 'Lower values indicate better stability across temperature' },
        { name: 'Maximum Voltage', typicalValues: '50V to 500V', notes: 'Depends on body size and material composition' },
        { name: 'Operating Temperature', typicalValues: '-55°C to +155°C', notes: 'Industrial grade resistors have wider ranges' },
      ],
    },
    applications: {
      applications: [
        { category: 'Current Limiting', description: 'Limits current to protect LEDs and other sensitive components', examples: ['LED current limiting', 'Transistor base biasing'] },
        { category: 'Voltage Division', description: 'Creates specific voltage levels from a higher voltage source', examples: ['Voltage dividers', 'Reference voltage generation', 'Level shifting'] },
        { category: 'Pull-up/Pull-down', description: 'Ensures logic inputs have defined states when not driven', examples: ['Digital logic inputs', 'I2C bus pull-up', 'Switch debouncing'] },
        { category: 'Current Sensing', description: 'Measures current by measuring voltage drop across a known resistance', examples: ['Power monitoring', 'Battery management', 'Overcurrent detection'] },
        { category: 'Termination', description: 'Matches impedance to prevent signal reflections', examples: ['Transmission line termination', 'RF circuits', 'High-speed digital'] },
      ],
    },
    advantages: { advantages: ['Simple to use and widely available in standard values', 'Inexpensive — typically costs less than $0.01 per unit', 'Reliable with no moving parts and long operational life', 'Low noise (especially metal film types)', 'Wide range of values from milliohms to gigaohms', 'Available in multiple power ratings and package sizes', 'Temperature stable options available for precision applications'] },
    disadvantages: { disadvantages: ['Dissipates power as heat, reducing energy efficiency', 'Generates thermal noise (Johnson-Nyquist noise)', 'Limited precision in standard types (±1% typical best)', 'Value can drift with temperature and age', 'Physically larger for high power ratings', 'Cannot provide voltage regulation or amplification'] },
    selection: {
      steps: [
        { step: 1, title: 'Determine Required Resistance', description: 'Calculate the resistance value needed using Ohm\'s Law. Consider the operating voltage and desired current.' },
        { step: 2, title: 'Calculate Power Dissipation', description: 'Use P = I²R or P = V²/R to determine power. Select a resistor with at least 2× the calculated power rating.' },
        { step: 3, title: 'Select Tolerance', description: 'Standard circuits: ±5% (carbon film). Precision circuits: ±1% or better (metal film).' },
        { step: 4, title: 'Consider Temperature Requirements', description: 'For precision or high-temperature environments, select resistors with low temperature coefficients (<±100 ppm/°C).' },
        { step: 5, title: 'Choose Package Type', description: 'Through-hole for prototyping and high power. SMD for production and space-constrained designs.' },
      ],
      tips: ['Always derate power to 50% or less for reliability', 'Use metal film resistors for audio and precision circuits', 'For high-voltage circuits, verify the maximum voltage rating', 'Consider using multiple resistors in series/parallel for high-voltage or high-power applications'],
    },
    troubleshooting: {
      failureModes: [
        { failure: 'Open Circuit', symptoms: ['No current flow', 'Infinite resistance reading'], causes: ['Excessive power dissipation', 'Mechanical stress', 'Manufacturing defect'], solution: 'Replace with same value and higher power rating if needed' },
        { failure: 'Value Drift', symptoms: ['Circuit operates incorrectly', 'Measured resistance out of tolerance'], causes: ['Thermal stress over time', 'Moisture absorption', 'Aging'], solution: 'Replace with precision resistor or use derating' },
        { failure: 'Mechanical Damage', symptoms: ['Visible cracks', 'Intermittent connection'], causes: ['Physical impact', 'PCB flexing', 'Excessive lead bending'], solution: 'Replace and ensure proper mechanical strain relief' },
      ],
    },
    history: {
      invention: {
        year: 1827,
        inventor: 'Georg Simon Ohm',
        discovery: 'Published "Die galvanische Kette, mathematisch bearbeitet" establishing the relationship between voltage, current, and resistance.',
        evolution: [
          { year: 1861, event: 'British Association defines the ohm as a practical unit of resistance' },
          { year: 1885, event: 'First commercial carbon composition resistors manufactured' },
          { year: 1920, event: 'Color band coding system introduced for resistor values' },
          { year: 1960, event: 'Metal film resistors introduced, offering improved precision' },
          { year: 1980, event: 'Surface mount (SMD) resistors revolutionize PCB assembly' },
        ],
      },
    },
    safety: {
      voltageSafety: 'Resistors with voltage ratings above 250V require special attention to prevent arcing. Ensure adequate spacing on PCBs for high-voltage applications.',
      currentSafety: 'Never exceed the power rating. A resistor operating above its rated power can overheat, melt, or catch fire. Always derate by at least 50% for reliable operation.',
      thermalSafety: 'High-power resistors can reach temperatures exceeding 200°C. Ensure adequate ventilation and keep away from flammable materials and heat-sensitive components.',
      handling: 'Avoid bending leads too close to the resistor body to prevent internal damage. Use proper lead-forming tools for precision applications.',
      storage: 'Store in dry, anti-static packaging. Moisture can cause value drift in certain resistor types, especially carbon composition.',
      disposal: 'Dispose of according to local e-waste regulations. Some older resistors may contain hazardous materials.',
    },
    glossary: {
      glossary: [
        { term: 'Ohm', definition: 'The SI unit of electrical resistance. One ohm allows one ampere to flow when one volt is applied.' },
        { term: 'Conductance', definition: 'The reciprocal of resistance, measured in siemens (S). G = 1/R.' },
        { term: 'Tolerance', definition: 'The allowable deviation from the stated resistance value, expressed as a percentage.' },
        { term: 'Temperature Coefficient', definition: 'The rate at which resistance changes with temperature, expressed in ppm/°C.' },
        { term: 'Derating', definition: 'Operating a resistor below its maximum rated power to improve reliability and lifespan.' },
        { term: "Ohm's Law", definition: 'The fundamental law stating that voltage equals current times resistance (V = IR).' },
      ],
    },
    interview: {
      beginner: [
        { question: 'What is a resistor and what does it do?', answer: 'A resistor is a passive electronic component that limits current flow and divides voltage in circuits. It provides a specific amount of resistance measured in ohms (Ω).' },
        { question: 'How do you read resistor color bands?', answer: 'For a 4-band resistor: first two bands are digits, third is multiplier, fourth is tolerance. For 5-band: first three digits, fourth multiplier, fifth tolerance. For 6-band: adds temperature coefficient.' },
      ],
      intermediate: [
        { question: 'Explain the difference between series and parallel resistor connections.', answer: 'In series, resistances add (R_total = R1 + R2 + ...). Current is the same through all. In parallel, total resistance decreases (1/R_total = 1/R1 + 1/R2 + ...). Voltage is the same across all.' },
        { question: 'What is a voltage divider and how do you calculate output voltage?', answer: 'A voltage divider uses two resistors in series to produce a fraction of the input voltage. V_out = V_in × R2 / (R1 + R2).' },
      ],
      advanced: [
        { question: 'Explain Johnson-Nyquist noise in resistors.', answer: 'Johnson-Nyquist noise (thermal noise) is generated by random thermal motion of charge carriers in a resistor. It has a flat power spectral density and increases with temperature and resistance value. V_noise = sqrt(4 × k_B × T × R × Δf).' },
      ],
      expert: [
        { question: 'How does resistor self-heating affect precision measurements?', answer: 'Self-heating causes resistance value drift due to the temperature coefficient. In precision applications, this creates measurement errors. Techniques to mitigate include using low-TCR resistors, pulse-mode measurement, thermal management, and four-terminal (Kelvin) sensing.' },
      ],
    },
    mcqs: {
      questions: [
        { question: 'What is the SI unit of electrical resistance?', options: ['Volt', 'Ampere', 'Ohm', 'Watt'], correctAnswer: 2, explanation: 'The SI unit of resistance is the ohm (Ω), named after Georg Ohm.', difficulty: 'beginner' },
        { question: 'According to Ohm\'s Law, V = I × R. What does V represent?', options: ['Current', 'Resistance', 'Power', 'Voltage'], correctAnswer: 3, explanation: 'V represents voltage (potential difference) measured in volts.', difficulty: 'beginner' },
        { question: 'Three 100Ω resistors are connected in parallel. What is the total resistance?', options: ['300Ω', '100Ω', '33.3Ω', '50Ω'], correctAnswer: 2, explanation: '1/R_total = 1/100 + 1/100 + 1/100 = 3/100, so R_total = 33.3Ω', difficulty: 'intermediate' },
        { question: 'Which type of resistor has the lowest noise?', options: ['Carbon film', 'Wire-wound', 'Metal film', 'Thick film'], correctAnswer: 2, explanation: 'Metal film resistors have the lowest noise characteristics.', difficulty: 'intermediate' },
        { question: 'What does the temperature coefficient of a resistor indicate?', options: ['How much power it can dissipate', 'How much its resistance changes with temperature', 'Its physical size', 'Its maximum voltage rating'], correctAnswer: 1, explanation: 'The temperature coefficient (ppm/°C) indicates how much the resistance changes per degree Celsius.', difficulty: 'advanced' },
      ],
    },
    references: {
      references: [
        { title: 'The Art of Electronics', author: 'Paul Horowitz, Winfield Hill', year: 2015, url: '', type: 'book' },
        { title: 'Resistor Applications Guide', author: 'Vishay', year: 2020, url: 'https://www.vishay.com/docs/28879/resistorapplications.pdf', type: 'datasheet' },
        { title: 'IEC 60063: Preferred Number Series for Resistors', author: 'International Electrotechnical Commission', year: 2015, url: '', type: 'standard' },
      ],
    },
    related: {
      relatedComponents: [
        { id: 'capacitor', relationship: 'Forms RC circuits for timing and filtering' },
        { id: 'inductor', relationship: 'Forms RL circuits for filtering and transient response' },
        { id: 'diode', relationship: 'Requires current-limiting resistors in series' },
        { id: 'transistor', relationship: 'Base biasing requires precise resistor networks' },
        { id: 'potentiometer', relationship: 'Variable resistor variant for adjustable applications' },
      ],
    },
  },

  capacitor: {
    overview: {
      whatIsIt: 'A capacitor is a device that stores electrical energy by accumulating electric charges on two closely spaced surfaces that are insulated from each other. It is a passive electronic component with two terminals.',
      whyExists: 'Capacitors are used to block direct current while allowing alternating current to pass, smooth power supply output, tune circuits to specific frequencies, and store energy for later use.',
      whereUsed: 'Capacitors are found in nearly every electronic device — power supplies, filters, radio tuners, timing circuits, and memory (DRAM).',
    },
    working: {
      workingPrinciple: 'A capacitor consists of two conductors separated by a non-conductive region (dielectric). From Coulomb\'s law, a charge on one conductor attracts opposite polarity charge on the other, creating an electric field. The capacitance C = Q/V quantifies charge storage per unit voltage.',
      steps: [
        'When voltage is applied, electrons accumulate on one plate (negative)',
        'An equal number of electrons are repelled from the other plate (positive)',
        'An electric field forms across the dielectric between the plates',
        'Energy is stored in the electric field as long as the voltage is maintained',
        'When the circuit is closed, the stored charge flows back as current',
      ],
      microscopicExplanation: 'The dual of the capacitor is the inductor, which stores energy in a magnetic field. The dielectric material\'s permittivity and breakdown voltage strongly influence capacitor performance. Parasitic capacitance occurs wherever the conductor-insulator-conductor structure forms unintentionally.',
    },
    construction: {
      internalParts: [
        { name: 'Conductive Plates', function: 'Store opposite charges', material: 'Aluminum, tantalum, or metal foil' },
        { name: 'Dielectric', function: 'Insulates plates and stores electric field', material: 'Ceramic, plastic film, paper, mica, electrolyte, or air' },
        { name: 'Terminals', function: 'Connect to circuit', material: 'Tinned wire or leads' },
        { name: 'Encapsulation', function: 'Protects internal structure', material: 'Epoxy, plastic, or metal can' },
      ],
    },
    types: {
      types: [
        { name: 'Ceramic Capacitor', description: 'Small, cheap, useful for high frequency. Capacitance varies with voltage and temperature.', applications: ['Decoupling', 'RF circuits', 'General purpose'] },
        { name: 'Electrolytic Capacitor', description: 'Aluminum or tantalum plate with oxide dielectric. Very high capacitance but poor tolerance.', applications: ['Power supply filtering', 'Energy storage', 'Audio coupling'] },
        { name: 'Film Capacitor', description: 'Plastic film dielectric. Better stability and ageing than older dielectrics.', applications: ['Timer circuits', 'Motor start', 'Power-factor correction'] },
        { name: 'Supercapacitor', description: 'Extremely high capacitance (up to 5 kF) using carbon aerogel or nanotubes.', applications: ['Backup power', 'Energy storage', 'Battery replacement'] },
        { name: 'Variable Capacitor', description: 'Mechanically or electrically controlled capacitance (varactor).', applications: ['Tuning circuits', 'Phase-locked loops', 'RF filters'] },
      ],
    },
    formulas: {
      formulas: [
        { name: 'Capacitance', formula: 'C = Q / V', description: 'Capacitance equals stored charge divided by applied voltage.', variables: [{ symbol: 'C', name: 'Capacitance', unit: 'Farads (F)' }, { symbol: 'Q', name: 'Charge', unit: 'Coulombs (C)' }, { symbol: 'V', name: 'Voltage', unit: 'Volts (V)' }], example: 'If Q = 1µC and V = 10V, then C = 0.1µF' },
        { name: 'Energy Stored', formula: 'E = ½ × C × V²', description: 'Energy stored in a capacitor\'s electric field.', variables: [{ symbol: 'E', name: 'Energy', unit: 'Joules (J)' }, { symbol: 'C', name: 'Capacitance', unit: 'Farads (F)' }, { symbol: 'V', name: 'Voltage', unit: 'Volts (V)' }], example: 'If C = 100µF and V = 5V, then E = 0.5 × 100µF × 25 = 1.25mJ' },
        { name: 'Capacitive Reactance', formula: 'X_C = 1 / (2π × f × C)', description: 'Opposition to AC current flow. Decreases with frequency.', variables: [{ symbol: 'X_C', name: 'Reactance', unit: 'Ohms (Ω)' }, { symbol: 'f', name: 'Frequency', unit: 'Hertz (Hz)' }, { symbol: 'C', name: 'Capacitance', unit: 'Farads (F)' }], example: 'At 1kHz, C = 1µF → X_C ≈ 159Ω' },
        { name: 'Series Capacitance', formula: '1/C_total = 1/C_1 + 1/C_2 + ... + 1/C_n', description: 'Total capacitance of capacitors in series.', variables: [{ symbol: 'C_total', name: 'Total Capacitance', unit: 'Farads (F)' }], example: 'Two 10µF in series → 5µF' },
        { name: 'Parallel Capacitance', formula: 'C_total = C_1 + C_2 + ... + C_n', description: 'Total capacitance of capacitors in parallel.', variables: [{ symbol: 'C_total', name: 'Total Capacitance', unit: 'Farads (F)' }], example: 'Two 10µF in parallel → 20µF' },
      ],
    },
    specifications: {
      specifications: [
        { name: 'Capacitance Value', typicalValues: '1pF to 5kF (supercapacitors)', notes: 'Standard E-series values' },
        { name: 'Tolerance', typicalValues: '±1%, ±5%, ±10%, ±20%', notes: 'Electrolytic capacitors have wider tolerances' },
        { name: 'Voltage Rating', typicalValues: '6V to 1000V+', notes: 'Must exceed maximum circuit voltage' },
        { name: 'Temperature Coefficient', typicalValues: '±30 ppm/°C to ±15%', notes: 'Class 1 ceramics are most stable' },
        { name: 'ESR (Equivalent Series Resistance)', typicalValues: '1mΩ to several Ω', notes: 'Lower is better for filtering' },
        { name: 'Dielectric Type', typicalValues: 'Ceramic, Film, Electrolytic, Tantalum', notes: 'Determines stability and application' },
      ],
    },
    applications: {
      applications: [
        { category: 'Power Supply Filtering', description: 'Removes voltage ripple from rectified AC', examples: ['Smoothing capacitors', 'Bulk storage'] },
        { category: 'Signal Coupling/Decoupling', description: 'Passes AC signals while blocking DC', examples: ['Audio coupling', 'Power supply decoupling'] },
        { category: 'Timing Circuits', description: 'RC networks control clock frequencies', examples: ['555 timer', 'Oscillators'] },
        { category: 'Tuning', description: 'Selects desired frequencies in RF circuits', examples: ['Radio tuning', 'Filters'] },
        { category: 'Energy Storage', description: 'Stores energy for flash photography and PFC', examples: ['Camera flash', 'Power factor correction'] },
      ],
    },
    advantages: { advantages: ['Blocks DC while passing AC', 'Stores energy efficiently', 'Fast charge/discharge response', 'No moving parts, long life', 'Wide range of values and types', 'Essential for filtering and tuning', 'Low cost for basic types'] },
    disadvantages: { disadvantages: ['Real capacitors dissipate small amounts of energy', 'Electrolytic types have poor tolerance and leakage', 'Voltage-dependent capacitance in ceramics', 'Can degrade if unused (electrolytic)', 'Polarized types can fail catastrophically if reversed', 'Limited energy density compared to batteries'] },
    selection: {
      steps: [
        { step: 1, title: 'Determine Capacitance Needed', description: 'Calculate from circuit requirements (timing, filtering, or energy storage).' },
        { step: 2, title: 'Select Voltage Rating', description: 'Choose at least 2× the maximum circuit voltage for reliability.' },
        { step: 3, title: 'Choose Dielectric Type', description: 'Ceramic for general/high-freq, film for stability, electrolytic for bulk capacitance.' },
        { step: 4, title: 'Consider Tolerance', description: 'Precision circuits need ±1% to ±5%; general purpose can use ±20%.' },
        { step: 5, title: 'Check ESR and Temperature', description: 'Low ESR for switching power supplies; stable temp coefficient for precision.' },
      ],
      tips: ['Never exceed voltage rating — failure can be explosive', 'Use polarized capacitors with correct orientation', 'Derating voltage by 50% extends life', 'For audio, use film capacitors for best sound quality'],
    },
    troubleshooting: {
      failureModes: [
        { failure: 'Open Circuit', symptoms: ['No capacitance reading', 'Circuit fails to filter/decouple'], causes: ['Overvoltage', 'Thermal stress', 'Ageing'], solution: 'Replace with correct voltage rating' },
        { failure: 'Short Circuit (Electrolytic)', symptoms: ['Low resistance', 'Circuit draws excess current'], causes: ['Reverse polarity', 'Overvoltage', 'Internal breakdown'], solution: 'Replace immediately; check polarity' },
        { failure: 'Increased ESR', symptoms: ['Poor filtering', 'Excess heat', 'Ripple increases'], causes: ['Ageing', 'High temperature'], solution: 'Replace with low-ESR type' },
      ],
    },
    history: {
      invention: {
        year: 1745,
        inventor: 'Ewald Georg von Kleist, Pieter van Musschenbroek',
        discovery: 'The earliest forms of capacitors were created in the 1740s as Leyden jars — water-filled glass jars that stored electric charge.',
        evolution: [
          { year: 1745, event: 'Leyden jar invented, first practical capacitor' },
          { year: 1874, event: 'Paper capacitor developed' },
          { year: 1899, event: 'Mica capacitors introduced' },
          { year: 1960, event: 'Multilayer ceramic capacitors (MLCC) developed' },
          { year: 1990, event: 'Supercapacitors commercialized for energy storage' },
        ],
      },
    },
    safety: {
      voltageSafety: 'High-voltage capacitors can retain dangerous charge after power removal. Always discharge through a resistor before handling.',
      currentSafety: 'Large capacitors can deliver high surge currents. Use current-limiting resistors when charging.',
      thermalSafety: 'Electrolytic capacitors fail violently (venting) at high temperatures. Ensure adequate cooling.',
      handling: 'Avoid mechanical stress on leads. Observe polarity for electrolytic and tantalum types.',
      storage: 'Store in cool, dry conditions. Electrolytic capacitors self-degrade if unused for over a year.',
      disposal: 'Some capacitors contain hazardous electrolytes. Dispose according to e-waste regulations.',
    },
    glossary: {
      glossary: [
        { term: 'Farad', definition: 'The SI unit of capacitance. One farad stores one coulomb per volt.' },
        { term: 'Dielectric', definition: 'Insulating material between capacitor plates that stores the electric field.' },
        { term: 'ESR', definition: 'Equivalent Series Resistance — internal resistance causing power loss.' },
        { term: 'Polarized', definition: 'Capacitor with defined positive and negative terminals (electrolytic, tantalum).' },
        { term: 'Reactance', definition: 'Opposition to AC current, inversely proportional to frequency and capacitance.' },
      ],
    },
    interview: {
      beginner: [
        { question: 'What is a capacitor and what does it store?', answer: 'A capacitor is a two-terminal passive component that stores electrical energy in an electric field between two conductive plates separated by a dielectric.' },
        { question: 'What is the unit of capacitance?', answer: 'The farad (F), though practical capacitors are measured in microfarads (µF), nanofarads (nF), or picofarads (pF).' },
      ],
      intermediate: [
        { question: 'Why does capacitive reactance decrease with frequency?', answer: 'X_C = 1/(2πfC). As frequency increases, the capacitor charges and discharges faster, offering less opposition to current flow.' },
        { question: 'What happens when you connect capacitors in parallel?', answer: 'Capacitances add: C_total = C1 + C2 + ... This increases total stored charge capacity.' },
      ],
      advanced: [
        { question: 'Explain the difference between Class 1 and Class 2 ceramic capacitors.', answer: 'Class 1 ceramics (e.g., C0G/NP0) have predictable, stable capacitance with temperature. Class 2 (e.g., X7R, Y5V) offer higher capacitance but vary strongly with voltage and temperature.' },
      ],
      expert: [
        { question: 'How does dielectric absorption affect capacitor performance?', answer: 'Dielectric absorption causes a capacitor to retain a small charge after being discharged, affecting precision sampling circuits and ADCs. It is modeled as a series of parallel RC networks within the dielectric.' },
      ],
    },
    mcqs: {
      questions: [
        { question: 'What does a capacitor store?', options: ['Magnetic field', 'Electric field', 'Heat', 'Light'], correctAnswer: 1, explanation: 'A capacitor stores energy in an electric field between its plates.', difficulty: 'beginner' },
        { question: 'The unit of capacitance is:', options: ['Ohm', 'Farad', 'Henry', 'Watt'], correctAnswer: 1, explanation: 'Capacitance is measured in farads (F).', difficulty: 'beginner' },
        { question: 'Capacitive reactance is:', options: ['Directly proportional to frequency', 'Inversely proportional to frequency', 'Independent of frequency', 'Equal to resistance'], correctAnswer: 1, explanation: 'X_C = 1/(2πfC), so it decreases as frequency increases.', difficulty: 'intermediate' },
        { question: 'Two 10µF capacitors in parallel give:', options: ['5µF', '10µF', '20µF', '100µF'], correctAnswer: 2, explanation: 'Parallel capacitances add: 10 + 10 = 20µF', difficulty: 'intermediate' },
        { question: 'Which capacitor type has the highest capacitance density?', options: ['Ceramic', 'Film', 'Electrolytic', 'Supercapacitor'], correctAnswer: 3, explanation: 'Supercapacitors can reach thousands of farads using carbon aerogel or nanotubes.', difficulty: 'advanced' },
      ],
    },
    references: {
      references: [
        { title: 'Capacitor Types and Applications', author: 'KEMET', year: 2021, url: '', type: 'datasheet' },
        { title: 'The Art of Electronics', author: 'Paul Horowitz, Winfield Hill', year: 2015, url: '', type: 'book' },
        { title: 'IEC 60384: Fixed Capacitors for Use in Electronic Equipment', author: 'International Electrotechnical Commission', year: 2018, url: '', type: 'standard' },
      ],
    },
    related: {
      relatedComponents: [
        { id: 'resistor', relationship: 'Forms RC circuits for timing and filtering' },
        { id: 'inductor', relationship: 'Forms LC resonant circuits' },
        { id: 'transformer', relationship: 'Both store energy in fields' },
        { id: 'diode', relationship: 'Rectification followed by capacitor filtering' },
        { id: 'voltage-regulator', relationship: 'Output capacitors stabilize regulation' },
      ],
    },
  },

  diode: {
    overview: {
      whatIsIt: 'A diode is a two-terminal electronic component that conducts electric current primarily in one direction (asymmetric conductance). It has low resistance in one direction and high resistance in the other.',
      whyExists: 'Diodes allow current to pass in one direction while blocking it in the opposite direction. This enables rectification (AC to DC conversion), signal demodulation, and circuit protection.',
      whereUsed: 'Diodes are used in power supplies (rectifiers), radio demodulation, voltage regulation (Zener), light emission (LED), and protection circuits.',
    },
    working: {
      workingPrinciple: 'A semiconductor diode is a crystalline piece of semiconductor material with a p–n junction connected to two terminals. It has an exponential current–voltage characteristic. When forward biased (P side positive), electrons flow through the depletion region; reverse bias blocks current like a check valve.',
      steps: [
        'A p–n junction is formed by joining p-type (holes) and n-type (electrons) semiconductors',
        'At the junction, a depletion region forms with no charge carriers',
        'Forward bias reduces the barrier, allowing current to flow',
        'Reverse bias widens the depletion region, blocking current',
        'Beyond breakdown voltage, reverse current increases sharply (Zener/avalanche)',
      ],
      microscopicExplanation: 'When a p–n junction is created, electrons diffuse from n to p side, leaving immobile donor ions on the n side and acceptor ions on the p side. This creates a built-in electric field across the depletion region that opposes further diffusion.',
    },
    construction: {
      internalParts: [
        { name: 'P-type Semiconductor', function: 'Anode region with holes as majority carriers', material: 'Silicon doped with acceptors (boron)' },
        { name: 'N-type Semiconductor', function: 'Cathode region with electrons as majority carriers', material: 'Silicon doped with donors (phosphorus)' },
        { name: 'P–N Junction', function: 'The active region where rectification occurs', material: 'Crystalline silicon interface' },
        { name: 'Terminals', function: 'Connect to circuit (anode and cathode)', material: 'Tinned wire or leads' },
      ],
    },
    types: {
      types: [
        { name: 'Rectifier Diode', description: 'General-purpose diode for AC to DC conversion.', applications: ['Power supplies', 'Rectification'] },
        { name: 'Zener Diode', description: 'Designed to operate in reverse breakdown for voltage regulation.', applications: ['Voltage references', 'Shunt regulators'] },
        { name: 'Schottky Diode', description: 'Metal-semiconductor junction with low forward voltage and fast switching.', applications: ['Switch-mode power supplies', 'RF detection'] },
        { name: 'LED (Light Emitting Diode)', description: 'Emits light when forward biased.', applications: ['Indicators', 'Displays', 'Lighting'] },
        { name: 'Photodiode', description: 'Converts light into current.', applications: ['Light sensors', 'Optical communication'] },
      ],
    },
    formulas: {
      formulas: [
        { name: 'Shockley Diode Equation', formula: 'I = I_S × (e^(V/(n×V_T)) - 1)', description: 'Models the exponential I–V relationship of a diode.', variables: [{ symbol: 'I', name: 'Diode current', unit: 'Amperes (A)' }, { symbol: 'I_S', name: 'Saturation current', unit: 'Amperes (A)' }, { symbol: 'V', name: 'Voltage', unit: 'Volts (V)' }, { symbol: 'n', name: 'Ideality factor', unit: 'dimensionless' }, { symbol: 'V_T', name: 'Thermal voltage', unit: 'Volts (V)' }], example: 'At room temperature V_T ≈ 26mV' },
        { name: 'Forward Voltage Drop', formula: 'V_F ≈ 0.7V (Si), 0.3V (Ge)', description: 'Typical forward threshold voltage for common diodes.', variables: [{ symbol: 'V_F', name: 'Forward voltage', unit: 'Volts (V)' }], example: 'Silicon diode drops ~0.7V when conducting' },
        { name: 'Power Dissipation', formula: 'P = V_F × I', description: 'Power dissipated as heat in the diode.', variables: [{ symbol: 'P', name: 'Power', unit: 'Watts (W)' }, { symbol: 'V_F', name: 'Forward voltage', unit: 'Volts (V)' }, { symbol: 'I', name: 'Current', unit: 'Amperes (A)' }], example: 'At 1A with 0.7V drop, P = 0.7W' },
      ],
    },
    specifications: {
      specifications: [
        { name: 'Forward Voltage (V_F)', typicalValues: '0.15V (Schottky) to 4V (LED)', notes: 'Silicon p–n ≈ 0.6-0.7V' },
        { name: 'Reverse Breakdown Voltage (V_BR)', typicalValues: '50V to 1000V+', notes: 'Must exceed maximum reverse voltage' },
        { name: 'Maximum Forward Current (I_F)', typicalValues: '1mA to 100A', notes: 'Continuous current rating' },
        { name: 'Reverse Recovery Time (t_rr)', typicalValues: 'ns to µs', notes: 'Schottky fastest, standard p–n slower' },
        { name: 'Junction Capacitance', typicalValues: '1pF to 100pF', notes: 'Affects high-frequency performance' },
        { name: 'Operating Temperature', typicalValues: '-65°C to +175°C', notes: 'Silicon diodes wide range' },
      ],
    },
    applications: {
      applications: [
        { category: 'Rectification', description: 'Converts AC to DC in power supplies', examples: ['Bridge rectifier', 'Half-wave rectifier'] },
        { category: 'Voltage Regulation', description: 'Zener diodes clamp voltage', examples: ['Reference voltage', 'Shunt regulator'] },
        { category: 'Signal Demodulation', description: 'Extracts modulation from radio signals', examples: ['AM radio detector', 'Envelope detector'] },
        { category: 'Protection', description: 'Protects circuits from reverse polarity and spikes', examples: ['Reverse polarity protection', 'Flyback diode'] },
        { category: 'Light Emission', description: 'LEDs emit light when forward biased', examples: ['Indicators', 'Displays', 'Lighting'] },
      ],
    },
    advantages: { advantages: ['Simple two-terminal device', 'Fast switching (especially Schottky)', 'Low forward voltage drop options', 'Reliable with no moving parts', 'Wide variety for specific applications', 'Essential for rectification', 'Small and inexpensive'] },
    disadvantages: { disadvantages: ['Fixed forward voltage drop causes power loss', 'Temperature dependent characteristics', 'Reverse recovery limits high-frequency use', 'Limited reverse voltage before breakdown', 'Cannot amplify signals', 'Leakage current in reverse direction'] },
    selection: {
      steps: [
        { step: 1, title: 'Determine Application', description: 'Rectification, regulation, protection, or signaling?' },
        { step: 2, title: 'Select Voltage Ratings', description: 'V_BR must exceed peak reverse voltage with margin.' },
        { step: 3, title: 'Check Current Rating', description: 'I_F must exceed maximum forward current with derating.' },
        { step: 4, title: 'Consider Switching Speed', description: 'Use Schottky for high-frequency; standard for line frequency.' },
        { step: 5, title: 'Verify Package', description: 'Through-hole or SMD based on assembly method.' },
      ],
      tips: ['Always derate voltage by 50% for reliability', 'Use Schottky for fast switching applications', 'Add heatsink for high-current rectifiers', 'Zener voltage tolerance typically 5%'],
    },
    troubleshooting: {
      failureModes: [
        { failure: 'Short Circuit', symptoms: ['Both directions conduct', 'No rectification'], causes: ['Overvoltage', 'Overcurrent', 'Thermal runaway'], solution: 'Replace with higher rating' },
        { failure: 'Open Circuit', symptoms: ['No conduction either direction'], causes: ['Overcurrent', 'Mechanical damage'], solution: 'Replace diode' },
        { failure: 'Leaky Reverse', symptoms: ['Excess reverse current', 'Heating'], causes: ['Ageing', 'Overvoltage stress'], solution: 'Replace with fresh component' },
      ],
    },
    history: {
      invention: {
        year: 1874,
        inventor: 'Ferdinand Braun',
        discovery: 'Discovered asymmetric electrical conduction across the contact between a crystalline mineral and a metal — the first semiconductor device.',
        evolution: [
          { year: 1874, event: 'Braun discovers crystal rectification' },
          { year: 1904, event: 'Cat\'s-whisker detectors used in radio' },
          { year: 1940, event: 'Silicon and germanium diodes developed' },
          { year: 1962, event: 'First visible-spectrum LED (red)' },
          { year: 1990, event: 'Blue LED enables white light' },
        ],
      },
    },
    safety: {
      voltageSafety: 'High reverse voltages can cause breakdown. Ensure V_BR rating exceeds circuit peaks.',
      currentSafety: 'Exceeding I_F causes thermal runaway and failure. Use current-limiting resistors.',
      thermalSafety: 'Power diodes generate heat. Use heatsinks for currents above 1A.',
      handling: 'ESD can damage sensitive diodes. Use anti-static handling.',
      storage: 'Store in anti-static packaging away from moisture.',
      disposal: 'Dispose according to e-waste regulations.',
    },
    glossary: {
      glossary: [
        { term: 'P–N Junction', definition: 'The boundary between p-type and n-type semiconductor where rectification occurs.' },
        { term: 'Depletion Region', definition: 'Area at the junction depleted of mobile charge carriers, acting as an insulator.' },
        { term: 'Forward Bias', definition: 'P side positive relative to N side, allowing current flow.' },
        { term: 'Reverse Bias', definition: 'N side positive relative to P side, blocking current.' },
        { term: 'Zener Effect', definition: 'Quantum tunneling causing reverse conduction at low breakdown voltages.' },
      ],
    },
    interview: {
      beginner: [
        { question: 'What is a diode?', answer: 'A diode is a two-terminal component that conducts current primarily in one direction, acting like an electrical check valve.' },
        { question: 'What is the forward voltage of a silicon diode?', answer: 'Approximately 0.6 to 0.7 volts when conducting.' },
      ],
      intermediate: [
        { question: 'Explain the difference between a Zener diode and a regular diode.', answer: 'A Zener diode is designed to operate in reverse breakdown to maintain a stable voltage, while a regular diode is used for rectification and should avoid breakdown.' },
        { question: 'Why are Schottky diodes faster than p–n diodes?', answer: 'Schottky diodes are majority-carrier devices with no minority carrier storage, so they have negligible reverse recovery time.' },
      ],
      advanced: [
        { question: 'What is the Shockley diode equation?', answer: 'I = I_S × (e^(V/(nV_T)) - 1), modeling the exponential current-voltage relationship of a diode.' },
      ],
      expert: [
        { question: 'How does reverse recovery time affect switching power supplies?', answer: 'During reverse recovery, the diode conducts reverse current briefly, causing switching losses and EMI. Fast-recovery or Schottky diodes minimize this.' },
      ],
    },
    mcqs: {
      questions: [
        { question: 'A diode conducts primarily in:', options: ['Both directions equally', 'One direction only', 'Neither direction', 'Only at high frequency'], correctAnswer: 1, explanation: 'A diode is asymmetric, conducting in its forward direction.', difficulty: 'beginner' },
        { question: 'Forward voltage of a silicon diode is approximately:', options: ['0.2V', '0.7V', '1.5V', '5V'], correctAnswer: 1, explanation: 'Silicon p–n diodes drop about 0.6-0.7V.', difficulty: 'beginner' },
        { question: 'Which diode is fastest for switching?', options: ['Standard p–n', 'Zener', 'Schottky', 'LED'], correctAnswer: 2, explanation: 'Schottky diodes have negligible reverse recovery time.', difficulty: 'intermediate' },
        { question: 'A Zener diode is used for:', options: ['Rectification', 'Voltage regulation', 'Amplification', 'Oscillation'], correctAnswer: 1, explanation: 'Zener diodes maintain a stable voltage in reverse breakdown.', difficulty: 'intermediate' },
        { question: 'The Shockley equation models:', options: ['Resistor behavior', 'Diode I–V curve', 'Capacitor charging', 'Inductor field'], correctAnswer: 1, explanation: 'It describes the exponential current-voltage relationship of a diode.', difficulty: 'advanced' },
      ],
    },
    references: {
      references: [
        { title: 'Diode Characteristics and Applications', author: 'ON Semiconductor', year: 2020, url: '', type: 'datasheet' },
        { title: 'The Art of Electronics', author: 'Paul Horowitz, Winfield Hill', year: 2015, url: '', type: 'book' },
        { title: 'Physics of Semiconductor Devices', author: 'S. M. Sze', year: 2006, url: '', type: 'book' },
      ],
    },
    related: {
      relatedComponents: [
        { id: 'transistor', relationship: 'Diodes form the basis of transistor junctions' },
        { id: 'mosfet', relationship: 'Body diode is parasitic in MOSFETs' },
        { id: 'rectifier', relationship: 'Multiple diodes form rectifier bridges' },
        { id: 'voltage-regulator', relationship: 'Zener diodes regulate voltage' },
        { id: 'led', relationship: 'LED is a light-emitting diode variant' },
      ],
    },
  },

  inductor: {
    overview: {
      whatIsIt: "An inductor is a passive two-terminal component that stores energy in a magnetic field when current flows through it. It is typically a coil of wire wound around a core.",
      whyExists: "Inductors oppose changes in current, making them essential for filtering, energy storage in power supplies, tuning, and blocking high-frequency noise.",
      whereUsed: "Inductors appear in power supplies, radios, transformers, motors, filters, and nearly every switching-mode power converter.",
    },
    working: {
      workingPrinciple: "Current through a coil creates a magnetic field. A changing current induces a back-EMF that opposes the change, described by V = L × di/dt.",
      steps: [
        "Current enters the coil and produces a magnetic field around the windings",
        "The field stores energy equal to ½ × L × I²",
        "When current changes, the field induces a counter-voltage (back-EMF)",
        "This voltage resists rapid changes in current",
        "At steady DC the ideal inductor behaves like a short circuit",
      ],
      microscopicExplanation: "Magnetic flux linkage through the coil is proportional to current; inductance L quantifies this ratio. Energy resides in the field around the conductor, not in the wire itself.",
    },
    construction: {
      internalParts: [
        { name: "Coil Winding", function: "Conducts current and creates the magnetic field", material: "Enamel-insulated copper wire" },
        { name: "Core", function: "Concentrates and guides magnetic flux", material: "Air, ferrite, iron powder, or laminated steel" },
        { name: "Bobbin/Former", function: "Holds the winding in shape", material: "Plastic or phenolic" },
        { name: "Terminals", function: "Connect to the circuit", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "Air-Core Inductor", description: "No magnetic core; used at RF to avoid core losses.", applications: ["RF circuits", "Filters"] },
        { name: "Ferrite-Core Inductor", description: "Ferrite core gives high inductance in small size.", applications: ["Power supplies", "EMI filters"] },
        { name: "Toroidal Inductor", description: "Ring-shaped core with low magnetic leakage.", applications: ["Switch-mode power", "Audio"] },
        { name: "Variable Inductor", description: "Adjustable inductance via movable core or tap.", applications: ["Tuning", "Laboratory"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Inductance of a Solenoid", formula: "L = μ × N² × A / l", description: "Inductance of a coil with N turns, area A, length l.", variables: [{ symbol: "L", name: "Inductance", unit: "Henries (H)" }, { symbol: "N", name: "Turns", unit: "dimensionless" }, { symbol: "A", name: "Area", unit: "m²" }, { symbol: "l", name: "Length", unit: "m" }], example: "More turns or larger area increases L" },
        { name: "Inductive Reactance", formula: "X_L = 2π × f × L", description: "Opposition to AC current; rises with frequency.", variables: [{ symbol: "X_L", name: "Reactance", unit: "Ohms (Ω)" }, { symbol: "f", name: "Frequency", unit: "Hz" }, { symbol: "L", name: "Inductance", unit: "H" }], example: "At 1kHz, L=1mH → X_L ≈ 6.28Ω" },
        { name: "Energy Stored", formula: "E = ½ × L × I²", description: "Energy stored in the magnetic field.", variables: [{ symbol: "E", name: "Energy", unit: "Joules (J)" }, { symbol: "L", name: "Inductance", unit: "H" }, { symbol: "I", name: "Current", unit: "A" }], example: "L=10mH, I=2A → E=0.02J" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Inductance", typicalValues: "1µH to 100H", notes: "Standard E-series values" },
        { name: "Tolerance", typicalValues: "±5%, ±10%, ±20%", notes: "Ferrite types looser" },
        { name: "Rated Current", typicalValues: "mA to tens of A", notes: "Exceeding causes saturation" },
        { name: "DC Resistance (DCR)", typicalValues: "mΩ to Ω", notes: "Lower is better for efficiency" },
        { name: "Self-Resonant Frequency", typicalValues: "kHz to MHz", notes: "Above this it acts capacitive" },
        { name: "Q Factor", typicalValues: "10 to 200+", notes: "Higher means lower loss" },
      ],
    },
    applications: {
      applications: [
        { category: "Power Conversion", description: "Stores and transfers energy in switching regulators", examples: ["Buck converter", "Boost converter"] },
        { category: "Filtering", description: "Blocks AC ripple while passing DC", examples: ["LC filters", "Chokes"] },
        { category: "Tuning", description: "Selects frequencies with capacitors", examples: ["Radio tuners", "Oscillators"] },
        { category: "Energy Storage", description: "Buffers energy in converters", examples: ["SMPS", "Ballasts"] },
      ],
    },
    advantages: { advantages: ["Stores energy without moving parts", "Low loss at DC (just wire resistance)", "Excellent for filtering and smoothing", "Wide range of values and core materials", "Essential for efficient power conversion", "No wear in ideal operation"] },
    disadvantages: { disadvantages: ["Bulky and heavy at high inductance", "Suffers core saturation and hysteresis loss", "Parasitic capacitance limits high-frequency use", "Can radiate electromagnetic interference", "Harder to integrate into ICs", "More expensive than resistors/capacitors"] },
    selection: {
      steps: [
        { step: 1, title: "Determine Inductance", description: "Calculate L from filtering or energy-storage requirements." },
        { step: 2, title: "Check Rated Current", description: "Keep current below saturation rating with margin." },
        { step: 3, title: "Evaluate DCR", description: "Lower DCR reduces power loss and heating." },
        { step: 4, title: "Consider SRF", description: "Operating frequency must be below self-resonant frequency." },
        { step: 5, title: "Choose Core", description: "Ferrite for size, iron powder for high current, air for RF." },
      ],
      tips: ["Derate current by 20-30% for reliability", "Use shielded types to reduce EMI", "Toroids minimize radiated noise", "Verify temperature rise under load"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open Winding", symptoms: ["No inductance", "Circuit stops oscillating"], causes: ["Overcurrent", "Mechanical stress", "Thermal damage"], solution: "Replace inductor" },
        { failure: "Shorted Turns", symptoms: ["Reduced inductance", "Excess heating"], causes: ["Insulation breakdown", "Overheating"], solution: "Replace with adequate rating" },
        { failure: "Core Saturation", symptoms: ["Distorted waveform", "Excess current"], causes: ["Exceeding rated current", "DC bias too high"], solution: "Use higher-current or gapped core" },
      ],
    },
    history: {
      invention: {
        year: 1831,
        inventor: "Michael Faraday, Joseph Henry",
        discovery: "Faraday and Henry independently discovered electromagnetic induction, the principle behind the inductor.",
        evolution: [
          { year: 1831, event: "Faraday discovers electromagnetic induction" },
          { year: 1832, event: "Joseph Henry builds early practical inductors" },
          { year: 1891, event: "Tesla and Steinmetz develop AC inductors and transformers" },
          { year: 1950, event: "Ferrite cores enable compact high-frequency inductors" },
        ],
      },
    },
    safety: {
      voltageSafety: "Inductors produce high voltage spikes when current is interrupted suddenly (V = L di/dt). Use snubber or flyback diodes.",
      currentSafety: "High current causes heating via DCR. Ensure adequate current rating and cooling.",
      thermalSafety: "Power inductors get hot; provide ventilation and keep away from heat-sensitive parts.",
      handling: "Avoid dropping; ferrite cores crack easily.",
      storage: "Store in dry conditions; moisture can affect ferrite properties.",
      disposal: "Dispose per e-waste regulations; copper is recyclable.",
    },
    glossary: {
      glossary: [
        { term: "Henry", definition: "The SI unit of inductance. One henry induces 1 volt when current changes at 1 ampere per second." },
        { term: "Back-EMF", definition: "Voltage induced by a changing magnetic field that opposes the change in current." },
        { term: "Saturation", definition: "When a core cannot store more magnetic flux, inductance collapses." },
        { term: "Q Factor", definition: "Ratio of reactance to resistance; higher means lower loss." },
        { term: "Self-Resonant Frequency", definition: "Frequency above which parasitic capacitance dominates and the part acts capacitive." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is an inductor?", answer: "A passive component that stores energy in a magnetic field and opposes changes in current." },
        { question: "What happens to an ideal inductor with DC?", answer: "At steady DC it acts like a short circuit because di/dt = 0, so no induced voltage." },
      ],
      intermediate: [
        { question: "Explain inductive reactance.", answer: "X_L = 2πfL. It rises with frequency, so inductors block high frequencies and pass low frequencies." },
        { question: "What is core saturation?", answer: "When the magnetic core reaches maximum flux, inductance drops sharply, causing current spikes and distortion." },
      ],
      advanced: [
        { question: "Why does an inductor have a self-resonant frequency?", answer: "Parasitic winding capacitance forms an LC tank with the inductance, resonating at SRF above which the part behaves capacitively." },
      ],
      expert: [
        { question: "How do you minimize EMI from power inductors?", answer: "Use shielded or toroidal cores, proper layout with ground planes, and snubbers; keep loops small." },
      ],
    },
    mcqs: {
      questions: [
        { question: "The unit of inductance is:", options: ["Farad", "Henry", "Ohm", "Tesla"], correctAnswer: 1, explanation: "Inductance is measured in henries (H).", difficulty: "beginner" },
        { question: "Inductive reactance increases with:", options: ["Decreasing frequency", "Increasing frequency", "Constant resistance", "Temperature only"], correctAnswer: 1, explanation: "X_L = 2πfL, so it rises with frequency.", difficulty: "intermediate" },
        { question: "Energy stored in an inductor is:", options: ["½CV²", "½LI²", "I²R", "V²/R"], correctAnswer: 1, explanation: "E = ½LI² is stored in the magnetic field.", difficulty: "intermediate" },
        { question: "An ideal inductor at steady DC acts like:", options: ["Open circuit", "Short circuit", "Resistor", "Capacitor"], correctAnswer: 1, explanation: "With constant current, no back-EMF, so it is a short.", difficulty: "beginner" },
        { question: "Core saturation causes:", options: ["Higher inductance", "Inductance collapse and current spikes", "Lower current", "No effect"], correctAnswer: 1, explanation: "Saturation reduces effective inductance dramatically.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
        { title: "Inductor Selection Guide", author: "Würth Elektronik", year: 2021, url: "", type: "datasheet" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "capacitor", relationship: "Forms LC resonant and filter circuits" },
        { id: "transformer", relationship: "Two coupled inductors" },
        { id: "resistor", relationship: "Together form RL circuits" },
        { id: "diode", relationship: "Flyback diode protects inductive loads" },
      ],
    },
  },

  transformer: {
    overview: {
      whatIsIt: "A transformer is a passive device that transfers electrical energy between two or more circuits through electromagnetic induction. It consists of coupled coils sharing a magnetic core.",
      whyExists: "Transformers change voltage and current levels efficiently, provide isolation, and match impedances in AC systems.",
      whereUsed: "Transformers are everywhere in power grids, chargers, audio equipment, and isolation circuits.",
    },
    working: {
      workingPrinciple: "An alternating current in the primary coil creates a changing magnetic flux in the core, which induces a proportional voltage in the secondary coil (Faraday's law). The turns ratio sets the voltage ratio.",
      steps: [
        "AC in the primary winding produces a changing magnetic flux",
        "The core guides nearly all flux to the secondary winding",
        "Changing flux induces a voltage in the secondary (N_s/N_p ratio)",
        "Power is conserved (ideal): V_p × I_p = V_s × I_s",
        "The secondary delivers transformed voltage/current to the load",
      ],
      microscopicExplanation: "Mutual inductance between windings links their flux. In an ideal transformer, the core loss and leakage flux are zero, so voltage scales exactly with turns ratio and current inversely.",
    },
    construction: {
      internalParts: [
        { name: "Primary Winding", function: "Receives input AC and creates flux", material: "Copper wire" },
        { name: "Secondary Winding", function: "Delivers transformed output", material: "Copper wire" },
        { name: "Magnetic Core", function: "Channels flux between windings", material: "Laminated silicon steel or ferrite" },
        { name: "Insulation", function: "Separates windings and core", material: "Varish, tape, or resin" },
      ],
    },
    types: {
      types: [
        { name: "Step-Up Transformer", description: "More secondary turns; raises voltage.", applications: ["Power transmission", "CRT displays"] },
        { name: "Step-Down Transformer", description: "Fewer secondary turns; lowers voltage.", applications: ["Chargers", "Distribution"] },
        { name: "Isolation Transformer", description: "Equal turns; galvanically isolates circuits.", applications: ["Medical", "Lab safety"] },
        { name: "Toroidal Transformer", description: "Ring core; low leakage and hum.", applications: ["Audio", "Precision"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Turns Ratio", formula: "V_s / V_p = N_s / N_p", description: "Secondary-to-primary voltage ratio equals turns ratio.", variables: [{ symbol: "V", name: "Voltage", unit: "Volts (V)" }, { symbol: "N", name: "Turns", unit: "dimensionless" }], example: "10:1 turns → 120V becomes 12V" },
        { name: "Current Ratio", formula: "I_s / I_p = N_p / N_s", description: "Current is inversely proportional to turns ratio.", variables: [{ symbol: "I", name: "Current", unit: "Amperes (A)" }, { symbol: "N", name: "Turns", unit: "dimensionless" }], example: "Step-down 10:1 → current multiplies ~10x" },
        { name: "Impedance Ratio", formula: "Z_s / Z_p = (N_s / N_p)²", description: "Reflected impedance scales with turns ratio squared.", variables: [{ symbol: "Z", name: "Impedance", unit: "Ohms (Ω)" }, { symbol: "N", name: "Turns", unit: "dimensionless" }], example: "2:1 turns → 4:1 impedance" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Power Rating", typicalValues: "1VA to MVA", notes: "Must exceed load demand" },
        { name: "Turns Ratio", typicalValues: "Custom", notes: "Sets voltage transformation" },
        { name: "Frequency", typicalValues: "50/60Hz, or kHz for ferrite", notes: "Core material limits frequency" },
        { name: "Efficiency", typicalValues: "90% to 99%", notes: "Losses from copper and core" },
        { name: "Isolation Voltage", typicalValues: "1kV to 10kV+", notes: "Critical for safety" },
        { name: "Regulation", typicalValues: "2% to 10%", notes: "Voltage drop from no-load to full-load" },
      ],
    },
    applications: {
      applications: [
        { category: "Power Distribution", description: "Steps voltage up for transmission, down for use", examples: ["Grid transformers", "Wall adapters"] },
        { category: "Isolation", description: "Galvanic separation for safety", examples: ["Medical devices", "Lab equipment"] },
        { category: "Impedance Matching", description: "Maximizes power transfer", examples: ["Audio amplifiers", "RF"] },
        { category: "Signal Coupling", description: "Transfers AC while blocking DC", examples: ["Microphone transformers", "Modems"] },
      ],
    },
    advantages: { advantages: ["High efficiency (often >95%)", "Galvanic isolation improves safety", "No moving parts, long life", "Scales from tiny to grid-scale", "Enables long-distance power transmission", "Simple and robust"] },
    disadvantages: { disadvantages: ["Only works with AC, not DC", "Bulky and heavy at low frequency", "Core losses (hysteresis, eddy current)", "Can be expensive for custom ratios", "Generates heat and hum", "No voltage regulation by itself"] },
    selection: {
      steps: [
        { step: 1, title: "Define Voltages", description: "Fix primary and secondary voltage from turns ratio." },
        { step: 2, title: "Calculate VA Rating", description: "Sum load power; add 20-30% margin." },
        { step: 3, title: "Choose Frequency", description: "Mains 50/60Hz or switch-mode kHz designs." },
        { step: 4, title: "Verify Isolation", description: "Ensure isolation voltage meets safety standards." },
        { step: 5, title: "Pick Core Type", description: "Laminated steel for mains, ferrite for high frequency." },
      ],
      tips: ["Derate VA by 20% for reliability", "Use toroids to reduce hum in audio", "Check inrush current on power-up", "Keep windings separated for safety"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open Winding", symptoms: ["No output", "Burned smell"], causes: ["Overload", "Insulation failure"], solution: "Replace transformer" },
        { failure: "Shorted Turns", symptoms: ["Overheating", "Excess current"], causes: ["Moisture", "Overvoltage"], solution: "Replace; check environment" },
        { failure: "Core Heating", symptoms: ["Hot case", "Buzz"], causes: ["DC bias", "Overload"], solution: "Reduce load; remove DC component" },
      ],
    },
    history: {
      invention: {
        year: 1831,
        inventor: "Michael Faraday, Ottó Bláthy, Miksa Déri, Károly Zipernowsky",
        discovery: "Faraday's induction experiments led to the first practical transformers in the 1880s for AC power systems.",
        evolution: [
          { year: 1831, event: "Faraday demonstrates induction" },
          { year: 1885, event: "Zipernowsky, Déri, Bláthy build first efficient transformers" },
          { year: 1891, event: "First three-phase AC transmission demonstrated" },
          { year: 1970, event: "Ferrite and toroidal designs mature for electronics" },
        ],
      },
    },
    safety: {
      voltageSafety: "High-voltage secondaries are lethal. De-energize and discharge before servicing.",
      currentSafety: "Short circuits cause massive current. Use fuses and current limits.",
      thermalSafety: "Overload causes overheating and fire risk. Provide ventilation.",
      handling: "Heavy units need secure mounting to avoid injury.",
      storage: "Store dry; moisture degrades insulation.",
      disposal: "Contains copper and steel; recycle per regulations.",
    },
    glossary: {
      glossary: [
        { term: "Turns Ratio", definition: "Ratio of secondary to primary winding turns; sets voltage transformation." },
        { term: "Mutual Inductance", definition: "Coupling between two coils via shared magnetic flux." },
        { term: "Isolation", definition: "Galvanic separation between input and output circuits." },
        { term: "Regulation", definition: "Change in output voltage from no-load to full-load." },
        { term: "Eddy Current", definition: "Circulating currents in the core that cause loss; reduced by lamination." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a transformer do?", answer: "It transfers AC energy between circuits, changing voltage and current by the turns ratio while providing isolation." },
        { question: "Why doesn't a transformer work with DC?", answer: "DC produces constant flux, so no induced voltage in the secondary; only a brief spike occurs at switch-on/off." },
      ],
      intermediate: [
        { question: "Explain the turns ratio relationship.", answer: "V_s/V_p = N_s/N_p and I_s/I_p = N_p/N_s; power is conserved in an ideal transformer." },
        { question: "What are core losses?", answer: "Hysteresis and eddy-current losses in the core that dissipate energy as heat even at no load." },
      ],
      advanced: [
        { question: "Why laminate transformer cores?", answer: "Lamination breaks eddy-current paths, drastically reducing resistive losses in the core." },
      ],
      expert: [
        { question: "How do you minimize transformer inrush current?", answer: "Use soft-start, NTC inrush limiters, or controlled switching at voltage zero-crossing." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A transformer works on the principle of:", options: ["Resistance", "Electromagnetic induction", "Capacitance", "Conduction"], correctAnswer: 1, explanation: "Transformers rely on mutual induction.", difficulty: "beginner" },
        { question: "In a step-down transformer:", options: ["N_s > N_p", "N_s < N_p", "N_s = N_p", "Turns don't matter"], correctAnswer: 1, explanation: "Fewer secondary turns lower voltage.", difficulty: "intermediate" },
        { question: "Transformers do NOT work with:", options: ["AC", "DC", "50Hz", "60Hz"], correctAnswer: 1, explanation: "DC gives no changing flux, so no transfer.", difficulty: "beginner" },
        { question: "Eddy current loss is reduced by:", options: ["Thicker core", "Lamination", "More turns", "Higher voltage"], correctAnswer: 1, explanation: "Lamination breaks eddy-current loops.", difficulty: "advanced" },
        { question: "Impedance ratio equals:", options: ["N_s/N_p", "(N_s/N_p)²", "N_p/N_s", "1/(N_s/N_p)"], correctAnswer: 1, explanation: "Reflected impedance scales with turns ratio squared.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Transformer Engineering", author: "Blume et al.", year: 2010, url: "", type: "book" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "inductor", relationship: "A transformer is two coupled inductors" },
        { id: "rectifier", relationship: "Transforms then rectifies AC to DC" },
        { id: "capacitor", relationship: "Output capacitors smooth rectified DC" },
        { id: "voltage-regulator", relationship: "Regulates transformer output" },
      ],
    },
  },

  potentiometer: {
    overview: {
      whatIsIt: "A potentiometer is a three-terminal variable resistor with a sliding or rotating contact that taps a portion of a resistive element, acting as an adjustable voltage divider.",
      whyExists: "Potentiometers let users adjust voltage, gain, or position interactively in analog circuits.",
      whereUsed: "They are used for volume controls, tuning, brightness adjustment, and as user input in countless devices.",
    },
    working: {
      workingPrinciple: "A wiper moves along a fixed resistive track between two end terminals. The resistance from either end to the wiper changes linearly or logarithmically with position, dividing the applied voltage.",
      steps: [
        "Voltage is applied across the two fixed end terminals",
        "The wiper contacts a point along the resistive element",
        "Resistance from end A to wiper varies with position",
        "Output voltage at the wiper is a fraction of the input",
        "Moving the wiper adjusts the division ratio continuously",
      ],
      microscopicExplanation: "The resistive track has uniform resistivity; the wiper shorts a variable-length segment, so the tapped resistance is proportional to the contact position along the element.",
    },
    construction: {
      internalParts: [
        { name: "Resistive Element", function: "Provides variable resistance", material: "Carbon, cermet, or conductive plastic" },
        { name: "Wiper", function: "Sliding contact that taps the element", material: "Phosphor bronze or spring metal" },
        { name: "Terminals", function: "Connect to circuit (3 terminals)", material: "Tinned leads" },
        { name: "Housing", function: "Protects and guides the wiper", material: "Plastic or metal" },
      ],
    },
    types: {
      types: [
        { name: "Rotary Potentiometer", description: "Wiper moves via a rotating shaft.", applications: ["Volume controls", "Tuning"] },
        { name: "Linear (Slide) Pot", description: "Wiper slides along a straight track.", applications: ["Faders", "Mixing consoles"] },
        { name: "Logarithmic Taper", description: "Resistance changes logarithmically; matches human hearing.", applications: ["Audio volume"] },
        { name: "Digital Potentiometer", description: "IC that emulates a pot via switches.", applications: ["Auto-calibration", "MCU control"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Voltage Divider", formula: "V_out = V_in × (R_wiper / R_total)", description: "Output at wiper as fraction of input.", variables: [{ symbol: "V_out", name: "Output voltage", unit: "Volts (V)" }, { symbol: "V_in", name: "Input voltage", unit: "V" }, { symbol: "R_wiper", name: "Tapped resistance", unit: "Ohms (Ω)" }], example: "Mid-position → V_out = V_in/2" },
        { name: "Taper Law", formula: "R(x) = R_total × x^n", description: "Resistance vs position; n=1 linear, n≈0.5 log.", variables: [{ symbol: "x", name: "Position", unit: "0 to 1" }, { symbol: "n", name: "Taper exponent", unit: "dimensionless" }], example: "Linear pot: n=1" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Total Resistance", typicalValues: "100Ω to 10MΩ", notes: "Common: 1k, 10k, 100k" },
        { name: "Taper", typicalValues: "Linear (B), Log (A)", notes: "Audio uses log taper" },
        { name: "Power Rating", typicalValues: "0.1W to 2W", notes: "Lower than fixed resistors" },
        { name: "Tolerance", typicalValues: "±10%, ±20%", notes: "Absolute value less critical" },
        { name: "Rotational Life", typicalValues: "1k to 100k cycles", notes: "Wear affects reliability" },
        { name: "Law Error", typicalValues: "±3% to ±10%", notes: "Deviation from ideal taper" },
      ],
    },
    applications: {
      applications: [
        { category: "User Input", description: "Manual adjustment of parameters", examples: ["Volume", "Brightness", "Gain"] },
        { category: "Voltage Division", description: "Sets bias and reference voltages", examples: ["Comparator threshold", "DAC trim"] },
        { category: "Position Sensing", description: "Converts mechanical position to voltage", examples: ["Joysticks", "Throttle sensors"] },
        { category: "Calibration", description: "Trims circuit offsets", examples: ["Offset null", "Gain set"] },
      ],
    },
    advantages: { advantages: ["Simple, intuitive manual control", "Continuous adjustment", "Cheap and widely available", "Can act as sensor or control", "No power supply needed (passive)", "Many tapers and sizes"] },
    disadvantages: { disadvantages: ["Wear and wiper noise over time", "Lower precision than fixed resistors", "Can introduce noise and drift", "Power rating is limited", "Mechanical size larger than SMD", "Not suitable for frequent digital control"] },
    selection: {
      steps: [
        { step: 1, title: "Choose Total Resistance", description: "Match circuit impedance (e.g., 10k for audio)." },
        { step: 2, title: "Select Taper", description: "Linear for general use, log for audio volume." },
        { step: 3, title: "Check Power Rating", description: "Ensure current stays within rating." },
        { step: 4, title: "Decide Mounting", description: "Panel, SMD, or through-hole." },
        { step: 5, title: "Consider Life", description: "High-cycle apps need long-life types." },
      ],
      tips: ["Use log taper for volume controls", "Avoid using as variable resistor if possible", "Clean contacts in dusty environments", "Digital pots for MCU control"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Intermittent Wiper", symptoms: ["Crackling", "Jumpy response"], causes: ["Dirt", "Wear"], solution: "Clean or replace" },
        { failure: "Open Track", symptoms: ["No output in part of range"], causes: ["Wear", "Overload"], solution: "Replace pot" },
        { failure: "Drift", symptoms: ["Value changes with use"], causes: ["Aging", "Moisture"], solution: "Replace; use sealed type" },
      ],
    },
    history: {
      invention: {
        year: 1920,
        inventor: "Multiple inventors (early 20th century)",
        discovery: "Evolved from rheostats into calibrated voltage dividers for measurement and control.",
        evolution: [
          { year: 1920, event: "Carbon composition pots for radio" },
          { year: 1950, event: "Cermet and conductive plastic improve life" },
          { year: 1990, event: "Digital potentiometers emerge" },
        ],
      },
    },
    safety: {
      voltageSafety: "Keep within rated voltage; high voltage across the track can arc.",
      currentSafety: "Limit current to the power rating to avoid burning the track.",
      thermalSafety: "Overload heats the element; ensure ventilation.",
      handling: "Avoid forcing the shaft beyond end stops.",
      storage: "Store in anti-dust packaging.",
      disposal: "Dispose per e-waste regulations.",
    },
    glossary: {
      glossary: [
        { term: "Taper", definition: "The relationship between wiper position and resistance (linear or logarithmic)." },
        { term: "Wiper", definition: "The moving contact that taps the resistive element." },
        { term: "Law Error", definition: "Deviation of actual resistance from the ideal taper curve." },
        { term: "Rheostat", definition: "A two-terminal variable resistor (related device)." },
        { term: "Digital Pot", definition: "An IC that mimics a potentiometer using switches and resistors." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a potentiometer?", answer: "A three-terminal variable resistor used as an adjustable voltage divider." },
        { question: "What is the difference between linear and log taper?", answer: "Linear changes resistance evenly with position; log changes it logarithmically, suiting audio volume." },
      ],
      intermediate: [
        { question: "How do you use a pot as a voltage divider?", answer: "Apply voltage across the two ends; the wiper outputs a fraction set by its position." },
        { question: "Why use a log taper for volume?", answer: "Human loudness perception is logarithmic, so log taper gives a perceptually linear volume control." },
      ],
      advanced: [
        { question: "What limits a potentiometer's precision?", answer: "Taper law error, wiper contact resistance, temperature drift, and mechanical wear." },
      ],
      expert: [
        { question: "When would you choose a digital potentiometer?", answer: "When control must be automated, calibrated, or driven by a microcontroller without mechanical wear." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A potentiometer has how many terminals?", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "Two ends plus a wiper = 3 terminals.", difficulty: "beginner" },
        { question: "At mid-position of a linear pot, V_out is:", options: ["V_in/4", "V_in/2", "V_in", "0"], correctAnswer: 1, explanation: "Mid-position taps half the resistance.", difficulty: "beginner" },
        { question: "Log taper pots are commonly used for:", options: ["Brightness", "Volume", "Timing", "Current sense"], correctAnswer: 1, explanation: "Log matches human hearing.", difficulty: "intermediate" },
        { question: "A pot used as a two-terminal variable resistor is called a:", options: ["Rheostat", "Trimmer", "Encoder", "Divider"], correctAnswer: 0, explanation: "Two-terminal use is a rheostat.", difficulty: "intermediate" },
        { question: "Digital pots are controlled by:", options: ["Shaft", "Digital signals/MCU", "Light", "Temperature"], correctAnswer: 1, explanation: "Digital pots respond to digital commands.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
        { title: "Potentiometer Handbook", author: "Bourns", year: 2019, url: "", type: "datasheet" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "resistor", relationship: "A potentiometer is a variable resistor" },
        { id: "rheostat", relationship: "Two-terminal variable resistor variant" },
        { id: "trimmer", relationship: "Miniature preset potentiometer" },
        { id: "op-amp", relationship: "Sets gain and bias via dividers" },
      ],
    },
  },

  varistor: {
    overview: {
      whatIsIt: "A varistor is a voltage-dependent resistor whose resistance drops sharply when the applied voltage exceeds a threshold, used primarily for surge and overvoltage protection.",
      whyExists: "Varistors clamp dangerous voltage spikes, protecting sensitive electronics from lightning and switching transients.",
      whereUsed: "They are found across power inputs, telephone lines, and industrial equipment for surge suppression.",
    },
    working: {
      workingPrinciple: "Made of a polycrystalline semiconductor (typically zinc oxide), a varistor has a non-linear V-I characteristic: it is nearly insulating below its clamping voltage and highly conductive above it.",
      steps: [
        "Under normal voltage the varistor has very high resistance",
        "A transient spike raises voltage above the varistor voltage",
        "Conductance increases dramatically, shunting the surge",
        "The surge current is diverted away from the load",
        "After the transient, resistance returns to a high value",
      ],
      microscopicExplanation: "Grain boundaries between zinc-oxide grains act as back-to-back Schottky-like barriers. Low voltage keeps barriers intact; high voltage lowers them, allowing current to flow.",
    },
    construction: {
      internalParts: [
        { name: "ZnO Ceramic Disc", function: "Provides non-linear resistance", material: "Zinc oxide with dopants" },
        { name: "Metal Electrodes", function: "Connect to circuit", material: "Silver or aluminum" },
        { name: "Encapsulation", function: "Protects the disc", material: "Epoxy or resin" },
        { name: "Leads", function: "External connection", material: "Tinned wire" },
      ],
    },
    types: {
      types: [
        { name: "Metal Oxide Varistor (MOV)", description: "Zinc-oxide based; most common surge protector.", applications: ["AC line protection", "Power supplies"] },
        { name: "Silicon Carbide Varistor", description: "Older technology, higher leakage.", applications: ["Legacy systems"] },
        { name: "Multilayer Varistor", description: "SMD, low capacitance.", applications: ["Signal lines", "RF"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Non-linear I-V", formula: "I = k × V^α", description: "Current rises steeply with voltage; α is the non-linearity coefficient.", variables: [{ symbol: "I", name: "Current", unit: "A" }, { symbol: "V", name: "Voltage", unit: "V" }, { symbol: "α", name: "Non-linearity", unit: "dimensionless" }], example: "α ~ 20-50 for ZnO varistors" },
        { name: "Clamping Voltage", formula: "V_clamp ≈ V_nom + I × R_dyn", description: "Peak voltage under surge current.", variables: [{ symbol: "V_clamp", name: "Clamp voltage", unit: "V" }, { symbol: "R_dyn", name: "Dynamic resistance", unit: "Ω" }], example: "Higher surge current → higher clamp" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Varistor Voltage", typicalValues: "10V to 1000V+", notes: "Measured at 1mA" },
        { name: "Maximum Continuous Voltage", typicalValues: "AC/DC ratings", notes: "Must exceed line voltage" },
        { name: "Surge Current Rating", typicalValues: "100A to 70kA", notes: "8/20µs pulse" },
        { name: "Energy Rating", typicalValues: "Joules", notes: "Total absorbable energy" },
        { name: "Response Time", typicalValues: "<1ns", notes: "Very fast" },
        { name: "Capacitance", typicalValues: "pF to nF", notes: "Affects high-speed lines" },
      ],
    },
    applications: {
      applications: [
        { category: "Surge Protection", description: "Clamps lightning and switching transients", examples: ["AC mains", "Power strips"] },
        { category: "Overvoltage Protection", description: "Protects ICs and modules", examples: ["Motor drives", "Telecom"] },
        { category: "Noise Suppression", description: "Absorbs transient spikes", examples: ["Relay coils", "Inductive loads"] },
      ],
    },
    advantages: { advantages: ["Very fast response (<1ns)", "High surge energy absorption", "Bidirectional (no polarity)", "Simple two-terminal device", "Inexpensive", "No power supply needed"] },
    disadvantages: { disadvantages: ["Degrades with each surge (aging)", "Has leakage current at operating voltage", "Can fail short-circuit (catastrophic)", "Limited energy lifetime", "Capacitance affects fast signals", "Not precise clamping"] },
    selection: {
      steps: [
        { step: 1, title: "Set Clamp Voltage", description: "Varistor voltage should exceed peak line voltage by 10-20%." },
        { step: 2, title: "Check Surge Rating", description: "Match energy and peak current to expected transients." },
        { step: 3, title: "Verify Continuous Rating", description: "Must handle normal AC/DC continuously." },
        { step: 4, title: "Consider Capacitance", description: "Low capacitance for signal lines." },
        { step: 5, title: "Add Backup", description: "Use fuse so failed-short varistor is disconnected." },
      ],
      tips: ["Always pair with a fuse", "Replace after major surges", "Use MOVs for mains, MLVs for signals", "Account for aging margin"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Degradation", symptoms: ["Lower clamp voltage", "Higher leakage"], causes: ["Repeated surges"], solution: "Replace proactively" },
        { failure: "Short Circuit", symptoms: ["Blown fuse", "No power"], causes: ["Catastrophic surge"], solution: "Replace varistor and fuse" },
        { failure: "Cracked Body", symptoms: ["Visible damage"], causes: ["Over-energy"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1930,
        inventor: "Samuel Ruben (ZnO varistor 1960s)",
        discovery: "Early silicon-carbide varistors gave way to superior zinc-oxide types in the 1960s-70s.",
        evolution: [
          { year: 1930, event: "Silicon carbide varistors developed" },
          { year: 1968, event: "ZnO varistor invented at GE" },
          { year: 1980, event: "MOVs become standard surge protection" },
        ],
      },
    },
    safety: {
      voltageSafety: "Failed varistors can short mains. Always use a fuse in series.",
      currentSafety: "Surge currents are huge; ensure rating matches.",
      thermalSafety: "Absorbed energy becomes heat; overheating can ignite.",
      handling: "Avoid cracking the ceramic body.",
      storage: "Store dry; moisture affects leakage.",
      disposal: "Contains metal oxides; dispose per e-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Varistor Voltage", definition: "The voltage at which the device begins to conduct significantly (typically at 1mA)." },
        { term: "Clamping Voltage", definition: "The peak voltage appearing across the varistor during a surge." },
        { term: "MOV", definition: "Metal Oxide Varistor, usually zinc-oxide based." },
        { term: "Non-linearity (α)", definition: "Coefficient describing how steeply current rises with voltage." },
        { term: "Surge Rating", definition: "Maximum transient current/energy the device can absorb." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a varistor used for?", answer: "It protects circuits from voltage spikes by clamping overvoltage transients." },
        { question: "Is a varistor polarity sensitive?", answer: "No, it is bidirectional and works for either polarity." },
      ],
      intermediate: [
        { question: "How does a ZnO varistor work?", answer: "Grain boundaries act as voltage-dependent barriers; above threshold they conduct, shunting surge current." },
        { question: "Why pair a varistor with a fuse?", answer: "Varistors can fail short-circuit after a large surge; the fuse disconnects them safely." },
      ],
      advanced: [
        { question: "What is the main reliability concern?", answer: "Each surge slightly degrades the device (aging), lowering clamp voltage and raising leakage until failure." },
      ],
      expert: [
        { question: "How do you select a varistor for AC mains?", answer: "Choose varistor voltage ~1.2-1.5x the peak line voltage, with surge/energy rating above expected transients, and a series fuse." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A varistor's resistance:", options: ["Is constant", "Drops with voltage", "Rises with voltage", "Depends on light"], correctAnswer: 1, explanation: "Above threshold, resistance drops sharply.", difficulty: "beginner" },
        { question: "Varistors are typically made of:", options: ["Carbon", "Zinc oxide", "Copper", "Silicon"], correctAnswer: 1, explanation: "ZnO MOVs are standard.", difficulty: "intermediate" },
        { question: "A varistor is:", options: ["Polarity sensitive", "Bidirectional", "A diode", "A capacitor"], correctAnswer: 1, explanation: "It clamps either polarity.", difficulty: "beginner" },
        { question: "Main failure mode after surges is:", options: ["Open", "Degradation/short", "No change", "Leakage drop"], correctAnswer: 1, explanation: "Repeated surges degrade and can short it.", difficulty: "advanced" },
        { question: "Response time of a varistor is roughly:", options: ["ms", "µs", "<1ns", "seconds"], correctAnswer: 2, explanation: "Varistors respond in under a nanosecond.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Varistor Application Guide", author: "Littelfuse", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "fuse", relationship: "Fuse disconnects a failed-short varistor" },
        { id: "circuit-breaker", relationship: "Higher-level overcurrent protection" },
        { id: "transient-voltage-suppressor", relationship: "Alternative clamping device" },
        { id: "gas-sensor", relationship: "Unrelated but both sensors/protectors" },
      ],
    },
  },

  thermistor: {
    overview: {
      whatIsIt: "A thermistor is a temperature-sensitive resistor whose resistance changes significantly with temperature. Most are made from ceramic semiconductors.",
      whyExists: "Thermistors provide a simple, low-cost way to measure temperature or provide thermal protection and compensation.",
      whereUsed: "They are used in thermostats, battery chargers, medical devices, and over-temperature cutoffs.",
    },
    working: {
      workingPrinciple: "A negative-temperature-coefficient (NTC) thermistor's resistance falls as temperature rises (more carriers become available). A positive-temperature-coefficient (PTC) type rises with temperature.",
      steps: [
        "Temperature changes the semiconductor carrier density",
        "For NTC, higher temperature lowers resistance",
        "For PTC, higher temperature raises resistance sharply",
        "The resistance is measured with a simple circuit",
        "The value is converted to temperature via a curve",
      ],
      microscopicExplanation: "In NTC ceramics, thermal energy excites more charge carriers, increasing conductivity. In PTC types, a phase transition near the Curie point causes a sudden resistivity jump.",
    },
    construction: {
      internalParts: [
        { name: "Semiconductor Bead/Disc", function: "Senses temperature", material: "Metal oxide ceramic" },
        { name: "Leads", function: "Connect to circuit", material: "Platinum or nickel" },
        { name: "Encapsulation", function: "Protects and sets thermal response", material: "Epoxy, glass, or metal can" },
      ],
    },
    types: {
      types: [
        { name: "NTC Thermistor", description: "Resistance decreases with temperature.", applications: ["Temperature sensing", "Inrush limiting"] },
        { name: "PTC Thermistor", description: "Resistance increases with temperature.", applications: ["Overcurrent protection", "Heaters"] },
        { name: "Silistor", description: "Linear PTC with silicon.", applications: ["Over-temperature cutoff"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Steinhart-Hart", formula: "1/T = A + B×ln(R) + C×(ln(R))³", description: "Accurate temperature from resistance.", variables: [{ symbol: "T", name: "Temperature", unit: "Kelvin (K)" }, { symbol: "R", name: "Resistance", unit: "Ω" }, { symbol: "A,B,C", name: "Coefficients", unit: "dimensionless" }], example: "Used for ±0.1°C accuracy" },
        { name: "Beta Equation", formula: "1/T = 1/T0 + (1/B)×ln(R/R0)", description: "Simplified two-point model.", variables: [{ symbol: "B", name: "Beta constant", unit: "K" }], example: "Common for NTC" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Resistance at 25°C", typicalValues: "1kΩ to 1MΩ", notes: "Common 10kΩ NTC" },
        { name: "Beta Constant", typicalValues: "3000 to 4500K", notes: "Characterizes curve" },
        { name: "Tolerance", typicalValues: "±1% to ±10%", notes: "Affects accuracy" },
        { name: "Operating Range", typicalValues: "-50°C to +300°C", notes: "Glass types higher" },
        { name: "Thermal Time Constant", typicalValues: "ms to s", notes: "Response speed" },
        { name: "Dissipation Constant", typicalValues: "mW/°C", notes: "Self-heating effect" },
      ],
    },
    applications: {
      applications: [
        { category: "Temperature Sensing", description: "Measures and monitors temperature", examples: ["Thermostats", "Battery management"] },
        { category: "Inrush Current Limiting", description: "NTC limits surge at power-on", examples: ["Power supplies", "Motor starters"] },
        { category: "Over-temperature Protection", description: "PTC cuts off on overheat", examples: ["Battery packs", "Motors"] },
        { category: "Compensation", description: "Compensates temperature drift", examples: ["Crystal oscillators", "Meters"] },
      ],
    },
    advantages: { advantages: ["High sensitivity to temperature", "Low cost and small size", "Fast response (bead types)", "Simple interface (just measure R)", "Good accuracy with calibration", "Wide availability"] },
    disadvantages: { disadvantages: ["Non-linear response", "Narrow accurate range", "Self-heating errors", "Requires curve fitting", "Fragile bead construction", "Aging/drift over time"] },
    selection: {
      steps: [
        { step: 1, title: "Choose Type", description: "NTC for sensing, PTC for protection." },
        { step: 2, title: "Pick Nominal R", description: "Match measurement range (e.g., 10kΩ at 25°C)." },
        { step: 3, title: "Check Tolerance", description: "Tighter tolerance for accuracy." },
        { step: 4, title: "Consider Time Constant", description: "Faster for control loops." },
        { step: 5, title: "Limit Self-heating", description: "Use low excitation current." },
      ],
      tips: ["Use Steinhart-Hart for accuracy", "Minimize current to avoid self-heating", "Glass types for high temp", "Calibrate each unit if critical"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open", symptoms: ["No reading", "Infinite R"], causes: ["Thermal shock", "Overcurrent"], solution: "Replace" },
        { failure: "Drift", symptoms: ["Wrong temperature"], causes: ["Aging", "Moisture"], solution: "Recalibrate or replace" },
        { failure: "Short", symptoms: ["Zero resistance"], causes: ["Cracked encapsulation"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1930,
        inventor: "Samuel Ruben",
        discovery: "Ruben developed the first accurate thermistor in the 1930s using semiconductor materials.",
        evolution: [
          { year: 1930, event: "First thermistors developed" },
          { year: 1960, event: "NTC types mass-produced for industry" },
          { year: 1990, event: "Miniature SMD thermistors common" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; not a shock hazard.",
      currentSafety: "Excess current causes self-heating and error.",
      thermalSafety: "Avoid exceeding maximum temperature.",
      handling: "Bead types are fragile; handle carefully.",
      storage: "Store dry to prevent moisture ingress.",
      disposal: "Dispose per e-waste regulations.",
    },
    glossary: {
      glossary: [
        { term: "NTC", definition: "Negative Temperature Coefficient: resistance falls as temperature rises." },
        { term: "PTC", definition: "Positive Temperature Coefficient: resistance rises with temperature." },
        { term: "Beta Constant", definition: "Parameter characterizing an NTC's resistance-temperature curve." },
        { term: "Self-heating", definition: "Measurement current warming the thermistor, causing error." },
        { term: "Steinhart-Hart", definition: "Equation relating thermistor resistance to temperature with high accuracy." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a thermistor?", answer: "A temperature-sensitive resistor whose resistance changes with temperature." },
        { question: "What is the difference between NTC and PTC?", answer: "NTC resistance falls with temperature; PTC resistance rises with temperature." },
      ],
      intermediate: [
        { question: "How do you convert resistance to temperature?", answer: "Use the Steinhart-Hart or beta equation with the device's coefficients." },
        { question: "What causes self-heating error?", answer: "The measurement current heats the thermistor, raising its temperature above ambient." },
      ],
      advanced: [
        { question: "Why use an NTC for inrush limiting?", answer: "Cold NTC has high resistance limiting surge current, then warms and drops resistance for normal operation." },
      ],
      expert: [
        { question: "How do you achieve ±0.1°C accuracy?", answer: "Individual calibration with Steinhart-Hart coefficients, low self-heating, and stable excitation." },
      ],
    },
    mcqs: {
      questions: [
        { question: "An NTC thermistor's resistance:", options: ["Rises with temperature", "Falls with temperature", "Is constant", "Depends on light"], correctAnswer: 1, explanation: "NTC = negative temperature coefficient.", difficulty: "beginner" },
        { question: "The Steinhart-Hart equation relates:", options: ["V and I", "R and T", "C and V", "L and I"], correctAnswer: 1, explanation: "It maps resistance to temperature.", difficulty: "intermediate" },
        { question: "PTC thermistors are used for:", options: ["Sensing", "Overcurrent protection", "Filtering", "Tuning"], correctAnswer: 1, explanation: "PTC rises with heat, limiting current.", difficulty: "intermediate" },
        { question: "Self-heating is caused by:", options: ["Ambient heat", "Measurement current", "Light", "Magnetic field"], correctAnswer: 1, explanation: "Excitation current warms the device.", difficulty: "advanced" },
        { question: "Common nominal value at 25°C is:", options: ["10Ω", "10kΩ", "10MΩ", "1Ω"], correctAnswer: 1, explanation: "10kΩ NTC is very common.", difficulty: "beginner" },
      ],
    },
    references: {
      references: [
        { title: "Thermistor Handbook", author: "Murata", year: 2018, url: "", type: "datasheet" },
        { title: "Temperature Measurement", author: "National Instruments", year: 2020, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "temperature-sensor", relationship: "Thermistor is a type of temperature sensor" },
        { id: "resistor", relationship: "Temperature-dependent resistor" },
        { id: "microcontroller", relationship: "Reads thermistor via ADC" },
        { id: "ldr", relationship: "Similar variable-resistance sensor" },
      ],
    },
  },

  rheostat: {
    overview: {
      whatIsIt: "A rheostat is a two-terminal variable resistor used to control current by inserting a adjustable resistance in series with a load.",
      whyExists: "Rheostats provide manual, continuous current control for lamps, motors, and heaters without complex electronics.",
      whereUsed: "They are used in dimmers, motor speed controls, and laboratory test equipment.",
    },
    working: {
      workingPrinciple: "A sliding or rotating contact moves along a resistive element, changing the length (and thus resistance) in the current path, which sets the current by Ohm's law.",
      steps: [
        "Current enters one end terminal of the resistive element",
        "The wiper picks off a variable-length segment",
        "Longer segment = more resistance = less current",
        "Moving the wiper adjusts current continuously",
        "The load receives the reduced current",
      ],
      microscopicExplanation: "Resistance is proportional to the length of the conducting path; the wiper effectively shortens or lengthens that path, scaling total resistance linearly.",
    },
    construction: {
      internalParts: [
        { name: "Resistive Element", function: "Sets variable resistance", material: "Wire or carbon" },
        { name: "Wiper", function: "Adjustable contact", material: "Spring metal" },
        { name: "Terminals", function: "Connect in series", material: "Tinned leads" },
        { name: "Housing", function: "Mechanical support", material: "Ceramic or metal" },
      ],
    },
    types: {
      types: [
        { name: "Wirewound Rheostat", description: "High power, wire element.", applications: ["Motor control", "Heaters"] },
        { name: "Carbon Rheostat", description: "Carbon track, lower power.", applications: ["Lamps", "Audio"] },
        { name: "Slider Rheostat", description: "Linear motion control.", applications: ["Lab benches"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Ohm's Law (Current)", formula: "I = V / (R_load + R_rheo)", description: "Current with rheostat in series.", variables: [{ symbol: "I", name: "Current", unit: "A" }, { symbol: "V", name: "Voltage", unit: "V" }, { symbol: "R_rheo", name: "Rheostat resistance", unit: "Ω" }], example: "More R_rheo → less current" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Resistance Range", typicalValues: "1Ω to 10kΩ", notes: "Depends on element" },
        { name: "Power Rating", typicalValues: "5W to 100W+", notes: "Wirewound handles more" },
        { name: "Current Rating", typicalValues: "Up to tens of A", notes: "Limited by element" },
        { name: "Tolerance", typicalValues: "±10%", notes: "Absolute value less critical" },
      ],
    },
    applications: {
      applications: [
        { category: "Current Control", description: "Manually sets load current", examples: ["Lamp dimmers", "Motor speed"] },
        { category: "Load Simulation", description: "Acts as adjustable load", examples: ["Test benches", "Calibration"] },
        { category: "Heater Control", description: "Adjusts heating power", examples: ["Ovens", "Soldering"] },
      ],
    },
    advantages: { advantages: ["Simple manual control", "Handles high power (wirewound)", "Robust and cheap", "No electronics needed", "Smooth adjustment", "Easy to understand"] },
    disadvantages: { disadvantages: ["Wastes power as heat", "Lower precision than electronic control", "Bulky", "Wear and wiper noise", "Not efficient", "Limited frequency response"] },
    selection: {
      steps: [
        { step: 1, title: "Determine Range", description: "Pick max resistance above load needs." },
        { step: 2, title: "Check Power", description: "Power rating must exceed I²R at max setting." },
        { step: 3, title: "Choose Type", description: "Wirewound for power, carbon for signal." },
        { step: 4, title: "Mounting", description: "Panel or bench style." },
      ],
      tips: ["Derate power for reliability", "Use heat sink for high power", "Avoid for precision current", "Consider PWM instead for efficiency"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open Element", symptoms: ["No current", "Load off"], causes: ["Overload", "Wear"], solution: "Replace" },
        { failure: "Intermittent", symptoms: ["Flickering", "Jumpy"], causes: ["Dirty wiper"], solution: "Clean contacts" },
      ],
    },
    history: {
      invention: {
        year: 1833,
        inventor: "Charles Wheatstone (term popularized 1840s)",
        discovery: "Early variable resistors evolved from telegraph adjustments into the rheostat for current control.",
        evolution: [
          { year: 1840, event: "Term 'rheostat' coined for variable resistance" },
          { year: 1900, event: "Wirewound rheostats for industrial control" },
          { year: 1970, event: "Largely replaced by electronic dimmers" },
        ],
      },
    },
    safety: {
      voltageSafety: "High-power rheostats carry mains; insulate properly.",
      currentSafety: "Exceeding current rating causes burnout.",
      thermalSafety: "Gets hot; provide ventilation.",
      handling: "Avoid forcing the wiper.",
      storage: "Store dry.",
      disposal: "Recycle metal; e-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Rheostat", definition: "A two-terminal variable resistor for current control." },
        { term: "Wiper", definition: "The moving contact selecting resistance." },
        { term: "Wirewound", definition: "Resistive element made of resistance wire; handles high power." },
        { term: "Potentiometer", definition: "Three-terminal version used as a divider." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a rheostat?", answer: "A two-terminal variable resistor used to control current in a circuit." },
        { question: "Rheostat vs potentiometer?", answer: "Rheostat has two terminals and controls current; potentiometer has three and acts as a divider." },
      ],
      intermediate: [
        { question: "Why are rheostats inefficient?", answer: "They dissipate excess power as heat in the resistance element." },
      ],
      advanced: [
        { question: "When would you still use a rheostat?", answer: "For simple, robust, high-power manual control where efficiency is not critical." },
      ],
      expert: [
        { question: "What replaces rheostats today?", answer: "PWM and electronic drivers offer efficient control with no heat loss." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A rheostat has how many terminals used?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "Two terminals in series with the load.", difficulty: "beginner" },
        { question: "Increasing rheostat resistance:", options: ["Raises current", "Lowers current", "No effect", "Changes voltage only"], correctAnswer: 1, explanation: "More series resistance reduces current.", difficulty: "beginner" },
        { question: "Wirewound rheostats are best for:", options: ["Low power", "High power", "RF", "Audio"], correctAnswer: 1, explanation: "Wire handles high power.", difficulty: "intermediate" },
        { question: "Main drawback:", options: ["Precision", "Power wasted as heat", "Size", "Cost"], correctAnswer: 1, explanation: "They dissipate heat.", difficulty: "intermediate" },
        { question: "Modern replacement is:", options: ["PWM", "Relay", "Fuse", "Capacitor"], correctAnswer: 0, explanation: "PWM gives efficient control.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
        { title: "Rheostat Basics", author: "Ohmite", year: 2019, url: "", type: "datasheet" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "potentiometer", relationship: "Three-terminal cousin of rheostat" },
        { id: "resistor", relationship: "Fixed version of the same concept" },
        { id: "dc-motor", relationship: "Rheostats control motor speed" },
        { id: "wirewound-resistor", relationship: "Same wirewound technology" },
      ],
    },
  },

  trimmer: {
    overview: {
      whatIsIt: "A trimmer (trimmer potentiometer) is a small, preset variable resistor adjusted occasionally with a screwdriver to calibrate a circuit.",
      whyExists: "Trimmers let manufacturers and technicians fine-tune resistance without replacing parts, compensating for component tolerances.",
      whereUsed: "They sit on PCBs for gain, offset, and frequency calibration in instruments and consumer electronics.",
    },
    working: {
      workingPrinciple: "Like a potentiometer, a wiper taps a resistive element, but the adjustment is made by a screw or slot and then left fixed during normal operation.",
      steps: [
        "A small resistive element is mounted on the PCB",
        "A screw or slot moves the wiper",
        "Technician adjusts to set the desired value",
        "Once set, it remains stable in operation",
        "Used for one-time or rare calibration",
      ],
      microscopicExplanation: "The wiper contacts a short resistive track; turning the adjuster changes contact position, varying resistance like a miniature pot.",
    },
    construction: {
      internalParts: [
        { name: "Resistive Element", function: "Provides adjustable R", material: "Cermet or carbon" },
        { name: "Adjuster", function: "Moves wiper via screw/slot", material: "Plastic or metal" },
        { name: "Terminals", function: "SMD or through-hole pads", material: "Tinned" },
      ],
    },
    types: {
      types: [
        { name: "Multiturn Trimmer", description: "Several turns for fine adjustment.", applications: ["Precision calibration"] },
        { name: "Single-turn Trimmer", description: "One rotation; general use.", applications: ["Consumer electronics"] },
        { name: "SMD Trimmer", description: "Surface-mount for PCBs.", applications: ["Compact devices"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Voltage Divider", formula: "V_out = V_in × (R_set / R_total)", description: "Same divider math as a potentiometer.", variables: [{ symbol: "V_out", name: "Output", unit: "V" }, { symbol: "R_set", name: "Set resistance", unit: "Ω" }], example: "Set to trim bias" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Resistance Range", typicalValues: "10Ω to 5MΩ", notes: "Common 10k, 100k" },
        { name: "Tolerance", typicalValues: "±10% to ±20%", notes: "Absolute less critical" },
        { name: "Adjustment", typicalValues: "Single or multiturn", notes: "Multiturn = finer" },
        { name: "Power", typicalValues: "0.1W to 0.5W", notes: "Low power" },
      ],
    },
    applications: {
      applications: [
        { category: "Calibration", description: "Trims offsets and gains", examples: ["Op-amp offset", "Sensor zero"] },
        { category: "Tuning", description: "Sets frequency or threshold", examples: ["Oscillators", "Comparators"] },
        { category: "Setup", description: "Factory adjustment", examples: ["Displays", "Radios"] },
      ],
    },
    advantages: { advantages: ["Cheap calibration method", "Small footprint", "Multiturn for precision", "Stable once set", "Easy to automate setup", "Wide resistance range"] },
    disadvantages: { disadvantages: ["Can drift if disturbed", "Limited adjustment cycles", "Lower precision than fixed", "Wiper noise", "Not for frequent adjustment", "Moisture sensitivity"] },
    selection: {
      steps: [
        { step: 1, title: "Choose Range", description: "Cover the needed trim span." },
        { step: 2, title: "Single vs Multiturn", description: "Multiturn for fine calibration." },
        { step: 3, title: "Mounting", description: "SMD or through-hole." },
        { step: 4, title: "Sealing", description: "Sealed for harsh environments." },
      ],
      tips: ["Use multiturn for precision", "Lock with lacquer after setting", "Avoid touching after calibration", "Sealed types resist drift"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Drift", symptoms: ["Value changes"], causes: ["Vibration", "Moisture"], solution: "Reseal or replace" },
        { failure: "Open", symptoms: ["No connection"], causes: ["Crack", "Overload"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1950,
        inventor: "Various (post-WWII electronics)",
        discovery: "Miniaturized presets emerged with printed-circuit manufacturing for mass calibration.",
        evolution: [
          { year: 1950, event: "Carbon trimmers for radios" },
          { year: 1980, event: "SMD trimmers for compact PCBs" },
          { year: 2000, event: "Cermet multiturn dominate precision" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; not hazardous.",
      currentSafety: "Keep within power rating.",
      thermalSafety: "Minimal heating.",
      handling: "Avoid over-tightening adjuster.",
      storage: "Store dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Trimmer", definition: "A preset variable resistor adjusted for calibration." },
        { term: "Multiturn", definition: "Adjuster requiring multiple rotations for full range." },
        { term: "Cermet", definition: "Ceramic-metal resistive material; stable and precise." },
        { term: "Preset", definition: "Set during manufacturing, not by end user." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a trimmer?", answer: "A small preset variable resistor used to calibrate a circuit." },
        { question: "Trimmer vs potentiometer?", answer: "Trimmers are adjusted rarely with a tool; pots are user-controlled frequently." },
      ],
      intermediate: [
        { question: "When use a multiturn trimmer?", answer: "When fine, repeatable calibration is needed, such as precision instrument zeroing." },
      ],
      advanced: [
        { question: "How prevent trimmer drift?", answer: "Use sealed types, apply locking lacquer, and avoid mechanical stress." },
      ],
      expert: [
        { question: "Why might you avoid trimmers in production?", answer: "They add cost, drift risk, and calibration labor; digital trim or fixed precision parts can eliminate them." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A trimmer is primarily used for:", options: ["User volume", "Calibration", "Power control", "Tuning radio"], correctAnswer: 1, explanation: "Trimmers calibrate circuits.", difficulty: "beginner" },
        { question: "Multiturn trimmers offer:", options: ["Higher power", "Finer adjustment", "Lower cost", "No wiper"], correctAnswer: 1, explanation: "Multiple turns give fine control.", difficulty: "intermediate" },
        { question: "Trimmers are adjusted with:", options: ["Finger", "Screwdriver", "Light", "Heat"], correctAnswer: 1, explanation: "A tool sets the value.", difficulty: "beginner" },
        { question: "Main drift cause:", options: ["Light", "Vibration/moisture", "Sound", "Magnetism"], correctAnswer: 1, explanation: "Mechanical and environmental stress.", difficulty: "advanced" },
        { question: "Common material for precision trimmers:", options: ["Carbon", "Cermet", "Wire", "Air"], correctAnswer: 1, explanation: "Cermet is stable and precise.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "Trimmer Potentiometer Guide", author: "Bourns", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "potentiometer", relationship: "User-adjustable cousin" },
        { id: "resistor", relationship: "Fixed alternative" },
        { id: "op-amp", relationship: "Trims offset and gain" },
        { id: "comparator", relationship: "Sets threshold" },
      ],
    },
  },

  "wirewound-resistor": {
    overview: {
      whatIsIt: "A wirewound resistor is made by winding a resistive wire (such as nichrome) around an insulating core, providing precise, high-power resistance.",
      whyExists: "Wirewound construction handles high power and offers tight tolerance and low temperature coefficient where film resistors cannot.",
      whereUsed: "They are used in power supplies, audio amplifiers, test equipment, and current sensing.",
    },
    working: {
      workingPrinciple: "The long length of resistive wire provides a defined resistance (R = ρL/A). The core and former provide mechanical support and heat dissipation.",
      steps: [
        "Resistive wire is wound around a core",
        "Length and gauge set the resistance value",
        "Current flows through the wire, dissipating heat",
        "The core and coating spread the heat",
        "Terminals connect to the circuit",
      ],
      microscopicExplanation: "Resistance comes from electron scattering in the metal wire; the long thin path yields high, stable resistance with low parasitic inductance if bifilar-wound.",
    },
    construction: {
      internalParts: [
        { name: "Resistive Wire", function: "Provides resistance", material: "Nichrome or manganin" },
        { name: "Core", function: "Mechanical support and heat path", material: "Ceramic or vitreous" },
        { name: "Coating", function: "Insulation and protection", material: "Vitreous enamel or silicone" },
        { name: "Terminals", function: "Connection", material: "Tinned leads or tabs" },
      ],
    },
    types: {
      types: [
        { name: "Power Wirewound", description: "High wattage, ceramic core.", applications: ["Power supplies", "Loads"] },
        { name: "Precision Wirewound", description: "Low TCR, tight tolerance.", applications: ["Meters", "Calibration"] },
        { name: "Audio Wirewound", description: "Low noise for audio.", applications: ["Amplifiers"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Resistance of Wire", formula: "R = ρ × L / A", description: "Resistance from resistivity, length, area.", variables: [{ symbol: "ρ", name: "Resistivity", unit: "Ω·m" }, { symbol: "L", name: "Length", unit: "m" }, { symbol: "A", name: "Area", unit: "m²" }], example: "Longer/thinner wire → more R" },
        { name: "Power", formula: "P = I² × R", description: "Heat dissipated.", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "10Ω at 1A → 10W" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Resistance", typicalValues: "0.1Ω to 100kΩ", notes: "Low values common" },
        { name: "Power Rating", typicalValues: "1W to 1000W", notes: "Much higher than film" },
        { name: "Tolerance", typicalValues: "±0.1% to ±5%", notes: "Precision types tight" },
        { name: "TCR", typicalValues: "±5 to ±50 ppm/°C", notes: "Very stable" },
        { name: "Inductance", typicalValues: "µH (non-inductive options)", notes: "Bifilar reduces it" },
      ],
    },
    applications: {
      applications: [
        { category: "Power Dissipation", description: "High-wattage loads and bleeds", examples: ["Load banks", "Bleeder resistors"] },
        { category: "Current Sensing", description: "Low-value precision shunt", examples: ["Ammeters", "BMS"] },
        { category: "Audio", description: "Low-noise feedback", examples: ["Amplifier circuits"] },
        { category: "Precision", description: "Stable reference", examples: ["Calibrators"] },
      ],
    },
    advantages: { advantages: ["Handles very high power", "Tight tolerance and low TCR", "Low noise", "Stable and robust", "Non-inductive winding available", "Long life"] },
    disadvantages: { disadvantages: ["Larger and heavier", "Parasitic inductance", "More expensive", "Limited high-frequency use", "Lower max resistance than film", "Can be inductive"] },
    selection: {
      steps: [
        { step: 1, title: "Set Value and Power", description: "Compute R and P = I²R; add margin." },
        { step: 2, title: "Choose Tolerance/TCR", description: "Precision needs low TCR." },
        { step: 3, title: "Inductance Needs", description: "Use non-inductive for AC/RF." },
        { step: 4, title: "Mounting/Heatsink", description: "High power needs cooling." },
      ],
      tips: ["Derate power 50%", "Non-inductive for audio/RF", "Manganin for precision shunts", "Use heatsink for >5W"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open", symptoms: ["No continuity"], causes: ["Overload", "Thermal"], solution: "Replace with higher rating" },
        { failure: "Value Drift", symptoms: ["Wrong R"], causes: ["Overheat"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1890,
        inventor: "Early electrical engineers",
        discovery: "Wirewound resistors were among the first precision resistors, evolving with power electronics.",
        evolution: [
          { year: 1890, event: "First wirewound power resistors" },
          { year: 1920, event: "Precision manganin types" },
          { year: 1980, event: "Non-inductive windings developed" },
        ],
      },
    },
    safety: {
      voltageSafety: "High-power types can be at mains voltage; insulate.",
      currentSafety: "Exceeding rating causes burnout.",
      thermalSafety: "Surfaces get very hot; use heatsinks and spacing.",
      handling: "Avoid touching when hot.",
      storage: "Store dry.",
      disposal: "E-waste; metal recyclable.",
    },
    glossary: {
      glossary: [
        { term: "Nichrome", definition: "Nickel-chromium alloy used for resistive wire." },
        { term: "TCR", definition: "Temperature Coefficient of Resistance; lower is more stable." },
        { term: "Non-inductive", definition: "Bifilar winding that cancels magnetic field and inductance." },
        { term: "Manganin", definition: "Alloy with very low TCR, used for precision shunts." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a wirewound resistor?", answer: "A resistor made by winding resistive wire around a core; good for high power and precision." },
        { question: "Why use wirewound over film?", answer: "Higher power handling, tighter tolerance, and lower temperature coefficient." },
      ],
      intermediate: [
        { question: "What is the downside of wirewound?", answer: "Parasitic inductance from the coil, limiting high-frequency use unless non-inductive wound." },
        { question: "What is manganin used for?", answer: "Precision shunts because of its extremely low TCR." },
      ],
      advanced: [
        { question: "How do you make a wirewound resistor non-inductive?", answer: "Bifilar winding: fold the wire and wind both halves so currents oppose, canceling the magnetic field." },
      ],
      expert: [
        { question: "When would film beat wirewound?", answer: "At high frequencies or where small size and low inductance matter more than power." },
      ],
    },
    mcqs: {
      questions: [
        { question: "Wirewound resistors excel at:", options: ["High frequency", "High power", "Low cost", "Tiny size"], correctAnswer: 1, explanation: "They handle high wattage.", difficulty: "beginner" },
        { question: "Main parasitic issue:", options: ["Capacitance", "Inductance", "Noise", "Leakage"], correctAnswer: 1, explanation: "The coil adds inductance.", difficulty: "intermediate" },
        { question: "Non-inductive winding uses:", options: ["Air core", "Bifilar", "Ferrite", "Shield"], correctAnswer: 1, explanation: "Bifilar cancels inductance.", difficulty: "advanced" },
        { question: "Manganin is valued for:", options: ["Low TCR", "High power", "Low cost", "High R"], correctAnswer: 0, explanation: "Very stable resistance vs temperature.", difficulty: "intermediate" },
        { question: "Typical material:", options: ["Copper", "Nichrome", "Aluminum", "Gold"], correctAnswer: 1, explanation: "Nichrome is common resistive wire.", difficulty: "beginner" },
      ],
    },
    references: {
      references: [
        { title: "Resistor Handbook", author: "Vishay", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "resistor", relationship: "A specific high-power construction of resistor" },
        { id: "rheostat", relationship: "Often wirewound for power" },
        { id: "potentiometer", relationship: "Wirewound versions exist" },
        { id: "current-sense", relationship: "Precision shunt application" },
      ],
    },
  },

  "ceramic-resonator": {
    overview: {
      whatIsIt: "A ceramic resonator is a piezoelectric ceramic device that resonates at a fixed frequency, used as a low-cost clock source for microcontrollers.",
      whyExists: "Ceramic resonators offer a smaller, cheaper timing reference than crystal oscillators, with adequate stability for many digital systems.",
      whereUsed: "They provide clock signals in microcontrollers, remote controls, and consumer electronics.",
    },
    working: {
      workingPrinciple: "The piezoelectric ceramic mechanically vibrates at its natural frequency when electrically excited, producing a stable oscillation when placed in a feedback amplifier circuit.",
      steps: [
        "An amplifier drives the ceramic element",
        "Piezoelectric effect converts voltage to mechanical strain",
        "The ceramic resonates at its mechanical frequency",
        "The vibration generates a stable electrical signal",
        "Feedback sustains oscillation at that frequency",
      ],
      microscopicExplanation: "Piezoelectric domains in the ceramic couple mechanical stress to electric field; the device's mass and stiffness set a sharp mechanical resonance used as a timing reference.",
    },
    construction: {
      internalParts: [
        { name: "Piezoelectric Ceramic", function: "Provides resonance", material: "Lead zirconate titanate (PZT)" },
        { name: "Electrodes", function: "Drive and sense vibration", material: "Silver" },
        { name: "Package", function: "Protects and sets load", material: "Resin or metal can" },
        { name: "Terminals", function: "Connect to oscillator", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "Two-terminal Resonator", description: "Used with external capacitors.", applications: ["MCU clocks"] },
        { name: "Three-terminal Resonator", description: "Built-in load capacitors.", applications: ["Simplified designs"] },
        { name: "SMD Resonator", description: "Surface-mount package.", applications: ["Compact PCBs"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Resonant Frequency", formula: "f = (1/2π) × √(k/m)", description: "Mechanical resonance sets frequency.", variables: [{ symbol: "f", name: "Frequency", unit: "Hz" }, { symbol: "k", name: "Stiffness", unit: "N/m" }, { symbol: "m", name: "Mass", unit: "kg" }], example: "Set by ceramic geometry" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Frequency", typicalValues: "100kHz to 30MHz", notes: "Common 4/8/16MHz" },
        { name: "Frequency Tolerance", typicalValues: "±0.5%", notes: "Looser than crystal" },
        { name: "Temperature Stability", typicalValues: "±10 to ±50 ppm/°C", notes: "Worse than crystal" },
        { name: "Load Capacitance", typicalValues: "Built-in or external", notes: "3-terminal simplifies" },
      ],
    },
    applications: {
      applications: [
        { category: "Clock Source", description: "Times microcontrollers", examples: ["MCU", "Remote controls"] },
        { category: "Oscillators", description: "Generates stable frequency", examples: ["Toy electronics", "Peripherals"] },
        { category: "Cost-sensitive Timing", description: "Where crystal precision unneeded", examples: ["Consumer gadgets"] },
      ],
    },
    advantages: { advantages: ["Much cheaper than crystals", "Small and robust", "Built-in load caps (3-terminal)", "Fast start-up", "Shock resistant", "Low power"] },
    disadvantages: { disadvantages: ["Lower frequency accuracy", "Worse temperature stability", "Higher aging", "Limited frequency range", "Less stable than crystal", "Sensitive to drive level"] },
    selection: {
      steps: [
        { step: 1, title: "Pick Frequency", description: "Match MCU requirement." },
        { step: 2, title: "Two vs Three Terminal", description: "Three-terminal simplifies layout." },
        { step: 3, title: "Check Tolerance", description: "Ensure adequate for the application." },
        { step: 4, title: "Verify Load", description: "Match built-in or external caps." },
      ],
      tips: ["Use for non-critical timing", "Crystal for UART/USB precision", "Keep traces short", "Avoid over-driving"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Oscillation", symptoms: ["MCU won't start"], causes: ["Wrong load", "Damage"], solution: "Check caps and wiring" },
        { failure: "Frequency Drift", symptoms: ["Timing errors"], causes: ["Temperature", "Aging"], solution: "Use crystal if critical" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Murata and others",
        discovery: "Piezoelectric ceramics were adapted into compact resonators for consumer electronics in the late 20th century.",
        evolution: [
          { year: 1960, event: "Ceramic resonators commercialized" },
          { year: 1980, event: "3-terminal types simplify MCU clocks" },
          { year: 2000, event: "SMD miniaturization" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; not hazardous.",
      currentSafety: "Low current.",
      thermalSafety: "Minimal heating.",
      handling: "Avoid dropping; ceramic cracks.",
      storage: "Store dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Piezoelectric", definition: "Property of generating voltage under mechanical stress." },
        { term: "Resonance", definition: "Natural frequency of mechanical vibration." },
        { term: "Load Capacitance", definition: "Capacitance needed to set the exact frequency." },
        { term: "Three-terminal", definition: "Resonator with integrated load capacitors." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a ceramic resonator?", answer: "A piezoelectric ceramic that provides a fixed clock frequency for digital circuits." },
        { question: "Resonator vs crystal?", answer: "Resonators are cheaper and smaller but less accurate and stable than crystals." },
      ],
      intermediate: [
        { question: "Why use a 3-terminal resonator?", answer: "It includes the load capacitors, simplifying the circuit and layout." },
      ],
      advanced: [
        { question: "When would you avoid a resonator?", answer: "For UART, USB, or any timing where ±0.5% accuracy and low drift are required; use a crystal." },
      ],
      expert: [
        { question: "How does drive level affect life?", answer: "Excessive drive level accelerates aging and can crack the ceramic; stay within rated level." },
      ],
    },
    mcqs: {
      questions: [
        { question: "Ceramic resonators are mainly used as:", options: ["Filters", "Clock sources", "Sensors", "Amplifiers"], correctAnswer: 1, explanation: "They provide timing clocks.", difficulty: "beginner" },
        { question: "Compared to crystals, resonators are:", options: ["More accurate", "Cheaper/less accurate", "More stable", "Higher frequency"], correctAnswer: 1, explanation: "Cheaper but less precise.", difficulty: "beginner" },
        { question: "A 3-terminal resonator includes:", options: ["Crystal", "Load capacitors", "Inductor", "Battery"], correctAnswer: 1, explanation: "Built-in load caps.", difficulty: "intermediate" },
        { question: "Based on the:", options: ["Piezoelectric", "Photoelectric", "Thermoelectric", "Magnetic"], correctAnswer: 0, explanation: "Piezoelectric ceramic resonance.", difficulty: "intermediate" },
        { question: "Choose a crystal instead when:", options: ["Cost matters", "Precision timing needed", "Size matters", "Shock resistance needed"], correctAnswer: 1, explanation: "Crystals give better accuracy.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Ceramic Resonator Application", author: "Murata", year: 2019, url: "", type: "datasheet" },
        { title: "MCU Oscillator Design", author: "Microchip", year: 2021, url: "", type: "datasheet" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "crystal-oscillator", relationship: "More precise timing alternative" },
        { id: "microcontroller", relationship: "Provides its clock" },
        { id: "555-timer", relationship: "Alternative timing source" },
        { id: "op-amp", relationship: "Buffers the oscillator" },
      ],
    },
  },

  "crystal-oscillator": {
    overview: {
      whatIsIt: "A crystal oscillator uses the mechanical resonance of a piezoelectric quartz crystal to generate a highly stable electrical frequency.",
      whyExists: "Quartz crystals provide exceptional frequency stability and accuracy, essential for clocks, radios, and digital communication.",
      whereUsed: "They are the timing heart of microcontrollers, watches, radios, GPS, and network equipment.",
    },
    working: {
      workingPrinciple: "A quartz crystal behaves like a precise mechanical resonator; in an amplifier feedback loop it sustains oscillation at its natural frequency with very low drift.",
      steps: [
        "The amplifier applies a signal across the crystal",
        "Piezoelectric effect makes the quartz vibrate",
        "The crystal presents a sharp resonant impedance",
        "Feedback sustains oscillation at resonance",
        "A stable clock frequency is produced",
      ],
      microscopicExplanation: "The crystal's mass and stiffness yield a high-Q mechanical resonance; the piezoelectric effect couples it to the circuit, giving frequency stability of parts per million.",
    },
    construction: {
      internalParts: [
        { name: "Quartz Crystal", function: "Resonant element", material: "Cut quartz" },
        { name: "Electrodes", function: "Drive and sense", material: "Gold or silver" },
        { name: "Package", function: "Protects and sets load", material: "Metal can or ceramic" },
        { name: "Oscillator IC (XO)", function: "Drives the crystal", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "SPXO", description: "Simple packaged crystal oscillator.", applications: ["Clocks", "MCUs"] },
        { name: "TCXO", description: "Temperature-compensated for stability.", applications: ["GPS", "Radios"] },
        { name: "OCXO", description: "Oven-controlled, ultra-stable.", applications: ["Base stations", "Metrology"] },
        { name: "VCXO", description: "Voltage-tunable.", applications: ["PLLs", "Synth"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Series Resonance", formula: "f_s = (1/2π) × √(1/(L×C))", description: "Crystal's mechanical resonance.", variables: [{ symbol: "f_s", name: "Frequency", unit: "Hz" }, { symbol: "L", name: "Motional inductance", unit: "H" }, { symbol: "C", name: "Motional capacitance", unit: "F" }], example: "Set by crystal cut" },
        { name: "Pullability", formula: "Δf/f = C1 / (2×(C0+CL))", description: "Frequency shift from load capacitance.", variables: [{ symbol: "C1", name: "Motional C", unit: "F" }, { symbol: "C0", name: "Shunt C", unit: "F" }, { symbol: "CL", name: "Load C", unit: "F" }], example: "Tune with CL" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Frequency", typicalValues: "32kHz to 100MHz+", notes: "32.768kHz for RTC" },
        { name: "Frequency Tolerance", typicalValues: "±10 to ±50 ppm", notes: "At 25°C" },
        { name: "Temperature Stability", typicalValues: "±5 to ±30 ppm", notes: "TCXO better" },
        { name: "Aging", typicalValues: "±1 to ±5 ppm/year", notes: "Long-term drift" },
        { name: "Load Capacitance", typicalValues: "8 to 20pF", notes: "Must match circuit" },
        { name: "Drive Level", typicalValues: "1 to 100µW", notes: "Excess shortens life" },
      ],
    },
    applications: {
      applications: [
        { category: "System Clock", description: "Times digital logic", examples: ["MCU", "CPU"] },
        { category: "Communication", description: "Sets carrier and baud", examples: ["Radios", "Modems"] },
        { category: "Timekeeping", description: "Real-time clocks", examples: ["Watches", "RTC"] },
        { category: "Frequency Reference", description: "Stable source", examples: ["Test gear", "GPS"] },
      ],
    },
    advantages: { advantages: ["Extremely stable frequency", "High accuracy (ppm)", "Low phase noise", "Low power", "Wide frequency range", "Mature and reliable"] },
    disadvantages: { disadvantages: ["More expensive than resonators", "Sensitive to load capacitance", "Can be damaged by over-drive", "Mechanical (can fracture)", "Slower start-up than RC", "Limited frequency pulling"] },
    selection: {
      steps: [
        { step: 1, title: "Pick Frequency", description: "Match system requirement." },
        { step: 2, title: "Set Tolerance", description: "Choose ppm for the need." },
        { step: 3, title: "Match Load C", description: "Use correct external caps." },
        { step: 4, title: "Check Drive Level", description: "Stay within rated µW." },
        { step: 5, title: "Stability Need", description: "TCXO/OCXO for harsh env." },
      ],
      tips: ["Use 32.768kHz for RTC", "Keep traces short and symmetric", "Never over-drive the crystal", "TCXO for outdoor gear"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Start", symptoms: ["No clock", "MCU dead"], causes: ["Wrong load C", "Damage"], solution: "Fix caps; replace" },
        { failure: "Frequency Off", symptoms: ["Timing errors"], causes: ["Wrong CL", "Aging"], solution: "Recalibrate" },
        { failure: "Cracked Crystal", symptoms: ["No oscillation"], causes: ["Mechanical shock"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1921,
        inventor: "Walter Guyton Cady",
        discovery: "Cady demonstrated quartz piezoelectric resonance; the first crystal oscillators followed in the 1920s.",
        evolution: [
          { year: 1921, event: "Cady shows quartz resonance" },
          { year: 1923, event: "First crystal-controlled oscillator" },
          { year: 1970, event: "Quartz watches mass-produced" },
          { year: 2000, event: "MEMS oscillators emerge as alternative" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; not hazardous.",
      currentSafety: "Low current.",
      thermalSafety: "Minimal heating.",
      handling: "Avoid dropping; quartz fractures.",
      storage: "Store dry, anti-static.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Piezoelectric", definition: "Generates charge under mechanical stress; used to vibrate quartz." },
        { term: "ppm", definition: "Parts per million; unit of frequency accuracy." },
        { term: "TCXO", definition: "Temperature-compensated crystal oscillator." },
        { term: "OCXO", definition: "Oven-controlled crystal oscillator; ultra-stable." },
        { term: "Load Capacitance", definition: "External capacitance that sets exact frequency." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a crystal oscillator do?", answer: "It generates a highly stable clock frequency using a vibrating quartz crystal." },
        { question: "Why is a crystal stable?", answer: "The quartz's mechanical resonance has very high Q, giving low drift with temperature and time." },
      ],
      intermediate: [
        { question: "What is load capacitance?", answer: "The external capacitance required to make the crystal oscillate at its marked frequency." },
        { question: "What is ppm?", answer: "Parts per million; a measure of frequency accuracy and stability." },
      ],
      advanced: [
        { question: "What is a TCXO and when use it?", answer: "A temperature-compensated oscillator; use it where stability over a wide temperature range matters, like GPS." },
      ],
      expert: [
        { question: "Why limit crystal drive level?", answer: "Excess drive accelerates aging and can fracture the quartz, reducing long-term stability." },
      ],
    },
    mcqs: {
      questions: [
        { question: "Crystal oscillators are valued for:", options: ["Low cost", "Frequency stability", "High power", "Large size"], correctAnswer: 1, explanation: "Stability is their key feature.", difficulty: "beginner" },
        { question: "Stability is measured in:", options: ["%", "ppm", "dB", "Hz"], correctAnswer: 1, explanation: "Parts per million.", difficulty: "intermediate" },
        { question: "32.768kHz crystals are used for:", options: ["CPU", "RTC", "Radio", "Audio"], correctAnswer: 1, explanation: "Real-time clocks (2^15 per second).", difficulty: "beginner" },
        { question: "TCXO improves:", options: ["Cost", "Temp stability", "Size", "Power"], correctAnswer: 1, explanation: "Temperature compensation.", difficulty: "advanced" },
        { question: "Over-driving a crystal can:", options: ["Improve stability", "Damage/fracture it", "Lower frequency", "Nothing"], correctAnswer: 1, explanation: "Excess drive can crack quartz.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Crystal Oscillator Basics", author: "SiTime", year: 2021, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "ceramic-resonator", relationship: "Lower-cost timing alternative" },
        { id: "microcontroller", relationship: "Provides its clock" },
        { id: "555-timer", relationship: "Alternative timer" },
        { id: "op-amp", relationship: "Buffers the output" },
      ],
    },
  },

  led: {
    overview: {
      whatIsIt: "A light-emitting diode (LED) is a semiconductor diode that emits light when forward biased, through electroluminescence in a direct-bandgap material.",
      whyExists: "LEDs provide efficient, long-life, low-power illumination and indicators across the visible and infrared spectrum.",
      whereUsed: "They are used in displays, indicators, lighting, remote controls, and optical communication.",
    },
    working: {
      workingPrinciple: "When forward biased, electrons and holes recombine in the depletion region; in direct-bandgap semiconductors the recombination energy is released as photons (light).",
      steps: [
        "Forward bias injects carriers into the junction",
        "Electrons fall from conduction to valence band",
        "Recombination releases energy as a photon",
        "Photon energy sets the emitted color",
        "Light exits through the transparent package",
      ],
      microscopicExplanation: "In direct-bandgap materials like GaAs or InGaN, the bandgap energy Eg determines photon energy (E = hc/λ); higher Eg gives shorter (bluer) wavelengths.",
    },
    construction: {
      internalParts: [
        { name: "Semiconductor Die", function: "Emits light", material: "InGaN, AlInGaP, or GaAs" },
        { name: "Lead Frame", function: "Connects and conducts heat", material: "Copper alloy" },
        { name: "Encapsulant", function: "Shapes and protects", material: "Epoxy or silicone" },
        { name: "Reflector Cup", function: "Directs light", material: "Metalized plastic" },
      ],
    },
    types: {
      types: [
        { name: "Standard LED", description: "Visible indicator, various colors.", applications: ["Status lights", "Panels"] },
        { name: "High-Power LED", description: "Watt-level for lighting.", applications: ["Lamps", "Automotive"] },
        { name: "RGB LED", description: "Red/green/blue in one package.", applications: ["Displays", "Ambient"] },
        { name: "IR LED", description: "Infrared emission.", applications: ["Remote controls", "Sensors"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Photon Energy", formula: "E = h × c / λ", description: "Energy relates to wavelength.", variables: [{ symbol: "E", name: "Energy", unit: "eV" }, { symbol: "λ", name: "Wavelength", unit: "nm" }, { symbol: "h", name: "Planck constant", unit: "J·s" }], example: "Red ~620nm → ~2eV" },
        { name: "Forward Drop", formula: "V_F ≈ 1.8V (red) to 3.3V (blue)", description: "Typical forward voltage by color.", variables: [{ symbol: "V_F", name: "Forward voltage", unit: "V" }], example: "Blue LEDs need higher V" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Forward Voltage", typicalValues: "1.8V to 3.6V", notes: "By color" },
        { name: "Forward Current", typicalValues: "5mA to 1A+", notes: "20mA typical indicator" },
        { name: "Luminous Intensity", typicalValues: "mcd to kcd", notes: "Brightness" },
        { name: "Wavelength", typicalValues: "400nm to 700nm", notes: "Color" },
        { name: "Viewing Angle", typicalValues: "15° to 120°", notes: "Beam width" },
        { name: "Power", typicalValues: "mW to W", notes: "High-power for lighting" },
      ],
    },
    applications: {
      applications: [
        { category: "Indicators", description: "Status and signal lights", examples: ["Power LED", "Keypad"] },
        { category: "Lighting", description: "Efficient illumination", examples: ["Bulbs", "Street lights"] },
        { category: "Displays", description: "Pixels and backlights", examples: ["Screens", "Signage"] },
        { category: "Communication", description: "Optical signaling", examples: ["IR remote", "Fiber"] },
      ],
    },
    advantages: { advantages: ["Very high efficiency", "Long life (50k+ hours)", "Small and rugged", "Instant on", "Low voltage operation", "Wide color range"] },
    disadvantages: { disadvantages: ["Sensitive to overcurrent", "Heat shortens life (high-power)", "Requires current limiting", "Color shifts with temperature", "ESD sensitive", "Not omnidirectional naturally"] },
    selection: {
      steps: [
        { step: 1, title: "Choose Color/Brightness", description: "Match application needs." },
        { step: 2, title: "Set Current", description: "Use 20mA typical; limit with resistor." },
        { step: 3, title: "Check V_F", description: "Compute series resistor R=(Vcc-V_F)/I." },
        { step: 4, title: "Thermal", description: "Heatsink high-power LEDs." },
      ],
      tips: ["Always use a current-limiting resistor", "Use constant-current driver for power LEDs", "Avoid exceeding absolute max", "Watch junction temperature"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Light", symptoms: ["Dark"], causes: ["Reverse wired", "Burned"], solution: "Check polarity; replace" },
        { failure: "Dim", symptoms: ["Weak output"], causes: ["Low current", "Aging"], solution: "Increase current within rating" },
        { failure: "Dead", symptoms: ["Open"], causes: ["Overcurrent", "ESD"], solution: "Replace; add protection" },
      ],
    },
    history: {
      invention: {
        year: 1962,
        inventor: "Nick Holonyak Jr.",
        discovery: "Holonyak demonstrated the first visible-spectrum LED (red) at General Electric.",
        evolution: [
          { year: 1962, event: "First red visible LED" },
          { year: 1972, event: "Green/yellow LEDs" },
          { year: 1994, event: "Shuji Nakamura blue LED enables white light" },
          { year: 2014, event: "Nobel Prize for blue LED inventors" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Overcurrent destroys LEDs quickly; always limit.",
      thermalSafety: "High-power LEDs need heatsinking.",
      handling: "ESD sensitive; use grounding.",
      storage: "Store in anti-static, dry.",
      disposal: "RoHS; e-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Electroluminescence", definition: "Light emission from recombination of carriers in a semiconductor." },
        { term: "Bandgap", definition: "Energy difference between valence and conduction bands; sets color." },
        { term: "Forward Voltage", definition: "Voltage drop when the LED conducts." },
        { term: "Luminous Intensity", definition: "Perceived brightness, in candela/millicandela." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is an LED?", answer: "A diode that emits light when forward biased, via electroluminescence." },
        { question: "Why does an LED need a resistor?", answer: "Its forward voltage is fixed; a resistor limits current to a safe value." },
      ],
      intermediate: [
        { question: "What determines LED color?", answer: "The semiconductor bandgap energy; larger gap gives shorter (bluer) wavelength." },
        { question: "Why did blue LEDs matter?", answer: "Combining blue with phosphors enables white light and full-color displays." },
      ],
      advanced: [
        { question: "How does temperature affect LEDs?", answer: "Forward voltage drops and wavelength shifts with temperature; junction heat reduces life." },
      ],
      expert: [
        { question: "Best way to drive high-power LEDs?", answer: "Use a constant-current switching driver with thermal management and dimming control." },
      ],
    },
    mcqs: {
      questions: [
        { question: "An LED emits light due to:", options: ["Incandescence", "Electroluminescence", "Fluorescence", "Phosphorescence"], correctAnswer: 1, explanation: "Carrier recombination emits photons.", difficulty: "beginner" },
        { question: "Blue LEDs have ___ forward voltage than red.", options: ["Lower", "Higher", "Same", "None"], correctAnswer: 1, explanation: "Larger bandgap → higher V_F.", difficulty: "intermediate" },
        { question: "LEDs must be:", options: ["Voltage driven", "Current limited", "Reverse biased", "Unpowered"], correctAnswer: 1, explanation: "Current must be limited.", difficulty: "beginner" },
        { question: "Color is set by:", options: ["Package", "Bandgap", "Current", "Voltage"], correctAnswer: 1, explanation: "Bandgap energy sets wavelength.", difficulty: "intermediate" },
        { question: "Blue LED inventors won a Nobel Prize in:", options: ["2000", "2014", "1994", "1980"], correctAnswer: 1, explanation: "2014 Nobel Prize in Physics.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "LED Lighting Handbook", author: "OSRAM", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "diode", relationship: "LED is a light-emitting diode" },
        { id: "resistor", relationship: "Current-limiting resistor required" },
        { id: "photodiode", relationship: "Inverse optoelectronic device" },
        { id: "7-segment", relationship: "Built from LEDs" },
      ],
    },
  },

  "zener-diode": {
    overview: {
      whatIsIt: "A Zener diode is a silicon diode designed to operate in reverse breakdown, maintaining a stable reference voltage across a wide current range.",
      whyExists: "Zeners provide simple, low-cost voltage regulation and reference without active circuitry.",
      whereUsed: "They are used in shunt regulators, reference sources, and overvoltage protection.",
    },
    working: {
      workingPrinciple: "Below about 5V the Zener effect (quantum tunneling) dominates; above it avalanche breakdown dominates. In both, reverse current rises sharply at the Zener voltage while voltage stays nearly constant.",
      steps: [
        "Reverse bias is applied across the diode",
        "At the Zener voltage, breakdown begins",
        "Current increases sharply with little voltage change",
        "The diode clamps the voltage to V_Z",
        "A series resistor limits the current",
      ],
      microscopicExplanation: "In the Zener effect, a strong electric field lets carriers tunnel through the depletion region; in avalanche, carriers gain enough energy to impact-ionize, multiplying current.",
    },
    construction: {
      internalParts: [
        { name: "Heavily Doped Junction", function: "Enables low breakdown", material: "Silicon" },
        { name: "Terminals", function: "Connect (cathode/anode)", material: "Tinned leads" },
        { name: "Package", function: "Protects", material: "DO-35/DO-41" },
      ],
    },
    types: {
      types: [
        { name: "Low-Voltage Zener (<5V)", description: "Zener-effect dominated.", applications: ["Low references"] },
        { name: "High-Voltage Zener (>5V)", description: "Avalanche dominated.", applications: ["Regulation"] },
        { name: "Precision Zener (Reference)", description: "Tight tolerance, low drift.", applications: ["Metrology"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Series Resistor", formula: "R = (V_in - V_Z) / I_Z", description: "Sets Zener current.", variables: [{ symbol: "R", name: "Resistor", unit: "Ω" }, { symbol: "V_in", name: "Input", unit: "V" }, { symbol: "V_Z", name: "Zener voltage", unit: "V" }, { symbol: "I_Z", name: "Zener current", unit: "A" }], example: "12V in, 5.1V Zener, 10mA → 690Ω" },
        { name: "Power in Zener", formula: "P_Z = V_Z × I_Z", description: "Dissipation limit.", variables: [{ symbol: "P_Z", name: "Power", unit: "W" }], example: "5.1V × 20mA = 0.1W" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Zener Voltage", typicalValues: "2.4V to 200V", notes: "Common 3.3, 5.1, 12V" },
        { name: "Tolerance", typicalValues: "±2% to ±10%", notes: "Precision types ±1%" },
        { name: "Power Rating", typicalValues: "0.25W to 5W", notes: "Must not exceed" },
        { name: "Temperature Coefficient", typicalValues: "±2 to ±100 ppm/°C", notes: "Near 5V is near zero" },
        { name: "Dynamic Resistance", typicalValues: "1Ω to 100Ω", notes: "Lower is better" },
      ],
    },
    applications: {
      applications: [
        { category: "Voltage Regulation", description: "Shunt regulator", examples: ["Power supplies", "Bias"] },
        { category: "Reference", description: "Stable voltage source", examples: ["ADC ref", "Meters"] },
        { category: "Protection", description: "Clamps overvoltage", examples: ["Input protection"] },
        { category: "Wave Clipping", description: "Limits signal amplitude", examples: ["Clippers"] },
      ],
    },
    advantages: { advantages: ["Simple, cheap regulation", "Stable reference voltage", "No active parts", "Wide voltage range", "Fast response", "Small"] },
    disadvantages: { disadvantages: ["Limited current capability", "Power dissipation", "Temperature drift (except ~5V)", "Not efficient for high power", "Soft knee at low V_Z", "Needs series resistor"] },
    selection: {
      steps: [
        { step: 1, title: "Pick V_Z", description: "Match desired regulated voltage." },
        { step: 2, title: "Set Current", description: "Choose I_Z within rating (e.g., 5-20mA)." },
        { step: 3, title: "Compute R", description: "R = (V_in - V_Z)/I_Z with margin." },
        { step: 4, title: "Check Power", description: "P_Z and P_R within ratings." },
      ],
      tips: ["Use ~5V Zener for low tempco", "Add capacitor for noise", "Derate power 50%", "Precision apps use reference ICs"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Shorted", symptoms: ["No regulation", "Low V"], causes: ["Overcurrent", "Surge"], solution: "Replace; check R" },
        { failure: "Open", symptoms: ["No clamp"], causes: ["Damage"], solution: "Replace" },
        { failure: "Drift", symptoms: ["Wrong V"], causes: ["Temp", "Aging"], solution: "Use better reference" },
      ],
    },
    history: {
      invention: {
        year: 1934,
        inventor: "Clarence Zener (theory), developed 1950s",
        discovery: "Zener described the breakdown theory in 1934; practical Zener diodes came in the 1950s.",
        evolution: [
          { year: 1934, event: "Zener describes breakdown theory" },
          { year: 1950, event: "First Zener diodes produced" },
          { year: 1970, event: "Precision reference Zeners" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Series resistor mandatory to limit current.",
      thermalSafety: "Overcurrent causes heating.",
      handling: "ESD sensitive.",
      storage: "Anti-static, dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Zener Effect", definition: "Quantum tunneling causing reverse breakdown at low voltages." },
        { term: "Avalanche Breakdown", definition: "Impact ionization at higher reverse voltages." },
        { term: "Knee Voltage", definition: "The voltage where breakdown (regulation) begins." },
        { term: "Dynamic Resistance", definition: "Small-signal resistance in breakdown; lower is better." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a Zener diode?", answer: "A diode that maintains a stable voltage when operated in reverse breakdown." },
        { question: "Why a series resistor?", answer: "To limit current so the Zener stays in its safe regulation range." },
      ],
      intermediate: [
        { question: "Zener vs avalanche effect?", answer: "Below ~5V tunneling (Zener) dominates; above ~5V avalanche dominates." },
        { question: "Why is a 5V Zener temperature-stable?", answer: "Its tempco crosses zero near 5V, minimizing drift." },
      ],
      advanced: [
        { question: "When use a Zener vs a regulator IC?", answer: "Zener for simple low-current refs; IC regulators for higher current and better regulation." },
      ],
      expert: [
        { question: "How improve Zener accuracy?", answer: "Use a buried Zener reference IC with curvature correction and buffering." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A Zener diode operates in:", options: ["Forward bias", "Reverse breakdown", "Cutoff", "Saturation"], correctAnswer: 1, explanation: "It regulates in reverse breakdown.", difficulty: "beginner" },
        { question: "Zener voltage near ___ has near-zero tempco.", options: ["2V", "5V", "12V", "24V"], correctAnswer: 1, explanation: "Around 5V tempco crosses zero.", difficulty: "intermediate" },
        { question: "Series resistor purpose:", options: ["Boost voltage", "Limit current", "Filter", "Amplify"], correctAnswer: 1, explanation: "Limits Zener current.", difficulty: "beginner" },
        { question: "Below 5V breakdown is mainly:", options: ["Avalanche", "Zener (tunneling)", "Thermal", "Capacitive"], correctAnswer: 1, explanation: "Tunneling dominates below 5V.", difficulty: "advanced" },
        { question: "Zener power is:", options: ["V×I", "V²/R", "I²R", "½CV²"], correctAnswer: 0, explanation: "P = V_Z × I_Z.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "Zener Diode Handbook", author: "ON Semiconductor", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "diode", relationship: "Zener is a specialized diode" },
        { id: "voltage-regulator", relationship: "IC regulators replace Zeners for power" },
        { id: "resistor", relationship: "Series resistor sets current" },
        { id: "ldo-regulator", relationship: "Modern alternative" },
      ],
    },
  },

  "schottky-diode": {
    overview: {
      whatIsIt: "A Schottky diode is formed by a metal-semiconductor junction, giving a low forward voltage drop and very fast switching.",
      whyExists: "Its low V_F reduces power loss and its speed suits high-frequency and switching-power applications.",
      whereUsed: "They are used in switch-mode power supplies, RF detectors, and as rectifiers in low-voltage circuits.",
    },
    working: {
      workingPrinciple: "The metal-semiconductor (Schottky) barrier has no minority-carrier storage, so there is negligible reverse-recovery time and a low forward drop (~0.15-0.4V).",
      steps: [
        "Forward bias lowers the Schottky barrier",
        "Majority carriers cross without storage",
        "Low V_F results (≈0.2V typical)",
        "Reverse bias blocks like a normal diode",
        "Switching is nearly instantaneous (no recovery)",
      ],
      microscopicExplanation: "Because only majority carriers conduct, there is no charge to sweep out at turn-off, eliminating reverse-recovery charge that plagues p-n diodes.",
    },
    construction: {
      internalParts: [
        { name: "Metal Contact", function: "Forms barrier", material: "Platinum, molybdenum" },
        { name: "Semiconductor", function: "N-type silicon", material: "Silicon" },
        { name: "Terminals", function: "Connect", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "Low-VF Schottky", description: "Minimal drop for rectification.", applications: ["Power supplies"] },
        { name: "RF Schottky", description: "Fast detector diode.", applications: ["Mixers", "Detectors"] },
        { name: "High-Voltage Schottky", description: "Up to ~100V.", applications: ["Automotive"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Forward Drop", formula: "V_F ≈ 0.15 to 0.4V", description: "Much lower than silicon p-n.", variables: [{ symbol: "V_F", name: "Forward voltage", unit: "V" }], example: "0.2V at low current" },
        { name: "Rectifier Loss", formula: "P_loss = V_F × I", description: "Lower V_F means less heat.", variables: [{ symbol: "P_loss", name: "Loss", unit: "W" }], example: "0.2V × 1A = 0.2W" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Forward Voltage", typicalValues: "0.15V to 0.5V", notes: "Much lower than Si p-n" },
        { name: "Reverse Voltage", typicalValues: "20V to 100V", notes: "Lower than p-n" },
        { name: "Reverse Recovery", typicalValues: "ps to ns", notes: "Near zero" },
        { name: "Leakage", typicalValues: "Higher than p-n", notes: "Worse at high temp" },
        { name: "Current", typicalValues: "mA to 100A", notes: "Power Schottkys large" },
      ],
    },
    applications: {
      applications: [
        { category: "Rectification", description: "Efficient low-voltage rectifier", examples: ["SMPS", "Solar"] },
        { category: "Freewheeling", description: "Flyback diode", examples: ["DC-DC", "Motor"] },
        { category: "RF Detection", description: "Envelope detector", examples: ["Receivers"] },
        { category: "OR-ing", description: "Power path selection", examples: ["Battery/USB"] },
      ],
    },
    advantages: { advantages: ["Very low forward drop", "Extremely fast switching", "No reverse-recovery loss", "Efficient in SMPS", "Low noise", "Good for high frequency"] },
    disadvantages: { disadvantages: ["Lower reverse voltage", "Higher leakage current", "Leakage rises with temp", "More expensive than p-n", "ESD sensitive", "Limited high-voltage use"] },
    selection: {
      steps: [
        { step: 1, title: "Check V_R", description: "Ensure reverse rating exceeds peaks." },
        { step: 2, title: "Current Rating", description: "Match load with margin." },
        { step: 3, title: "Leakage Budget", description: "Verify acceptable at max temp." },
        { step: 4, title: "Thermal", description: "Low V_F helps but still heatsink." },
      ],
      tips: ["Great for <40V rectification", "Watch leakage at high temp", "Use for freewheeling diodes", "Avoid for high-voltage rectifiers"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Short", symptoms: ["No rectification"], causes: ["Overvoltage", "Overcurrent"], solution: "Replace" },
        { failure: "Leakage High", symptoms: ["Heat", "Inefficiency"], causes: ["High temp"], solution: "Cool; choose lower-leakage" },
      ],
    },
    history: {
      invention: {
        year: 1938,
        inventor: "Walter Schottky (theory), practical 1960s-70s",
        discovery: "Schottky described metal-semiconductor barrier theory; practical Schottky diodes followed mid-20th century.",
        evolution: [
          { year: 1938, event: "Schottky barrier theory" },
          { year: 1960, event: "First Schottky diodes" },
          { year: 1980, event: "Power Schottkys for SMPS" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Limit within rating.",
      thermalSafety: "Can heat; provide cooling.",
      handling: "ESD sensitive.",
      storage: "Anti-static, dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Schottky Barrier", definition: "Potential barrier at a metal-semiconductor junction." },
        { term: "Reverse Recovery", definition: "Time/charge to stop conducting when reversed; near zero for Schottky." },
        { term: "Majority Carrier", definition: "Only majority carriers conduct; no storage." },
        { term: "Freewheeling Diode", definition: "Diode that clamps inductive kickback." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a Schottky diode?", answer: "A metal-semiconductor diode with low forward drop and very fast switching." },
        { question: "Why is it fast?", answer: "No minority-carrier storage, so no reverse-recovery time." },
      ],
      intermediate: [
        { question: "Where use a Schottky?", answer: "Low-voltage, high-frequency rectification and freewheeling where low V_F matters." },
        { question: "Main drawback vs p-n?", answer: "Lower reverse voltage rating and higher leakage, especially when hot." },
      ],
      advanced: [
        { question: "Why does leakage matter?", answer: "At high temperature Schottky leakage can rival load current, wasting power and heating." },
      ],
      expert: [
        { question: "How choose between Schottky and synchronous rectification?", answer: "Schottky for simplicity/low cost; synchronous MOSFET rectification for highest efficiency at very low V_out." },
      ],
    },
    mcqs: {
      questions: [
        { question: "Schottky forward drop is about:", options: ["0.7V", "0.2V", "1.5V", "3V"], correctAnswer: 1, explanation: "Around 0.15-0.4V.", difficulty: "beginner" },
        { question: "Key advantage over p-n:", options: ["Higher voltage", "No reverse recovery", "Lower cost", "Higher current"], correctAnswer: 1, explanation: "Near-zero recovery time.", difficulty: "intermediate" },
        { question: "Schottky is made of:", options: ["p-n junction", "Metal-semiconductor", "Two metals", "Insulator"], correctAnswer: 1, explanation: "Metal-semiconductor junction.", difficulty: "intermediate" },
        { question: "Main weakness:", options: ["Slow", "High leakage/high temp", "Large", "Expensive always"], correctAnswer: 1, explanation: "Leakage rises with temperature.", difficulty: "advanced" },
        { question: "Common use:", options: ["High-voltage rectifier", "Freewheeling in SMPS", "Zener ref", "LED"], correctAnswer: 1, explanation: "Freewheeling/rectification in supplies.", difficulty: "beginner" },
      ],
    },
    references: {
      references: [
        { title: "Schottky Diode Application", author: "STMicroelectronics", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "diode", relationship: "Fast variant of diode" },
        { id: "mosfet", relationship: "Synchronous rectification alternative" },
        { id: "voltage-regulator", relationship: "Used in efficient supplies" },
        { id: "dc-power-supply", relationship: "Rectifies in SMPS" },
      ],
    },
  },

  photodiode: {
    overview: {
      whatIsIt: "A photodiode is a p-n junction that converts light into current when photons generate electron-hole pairs in the depletion region.",
      whyExists: "Photodiodes provide fast, linear light detection for sensing, communication, and measurement.",
      whereUsed: "They are used in optical receivers, light meters, medical devices, and industrial sensors.",
    },
    working: {
      workingPrinciple: "In photoconductive or photovoltaic mode, incident photons with energy above the bandgap create carriers that are swept across the depletion region, producing a current proportional to light intensity.",
      steps: [
        "Photons strike the depletion region",
        "Carriers are generated if hν > Eg",
        "The field sweeps carriers across the junction",
        "A photocurrent flows proportional to light",
        "The current is measured or converted to voltage",
      ],
      microscopicExplanation: "Each absorbed photon above the bandgap yields roughly one electron-hole pair; the built-in field separates them before recombination, giving a measurable current.",
    },
    construction: {
      internalParts: [
        { name: "p-n Junction", function: "Converts light to current", material: "Silicon or InGaAs" },
        { name: "Window/Optics", function: "Admits light", material: "Glass or filter" },
        { name: "Terminals", function: "Output", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "PN Photodiode", description: "General purpose.", applications: ["Sensors"] },
        { name: "PIN Photodiode", description: "Wide depletion for speed.", applications: ["Fiber optics"] },
        { name: "Avalanche Photodiode", description: "Internal gain.", applications: ["Long-range comms"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Responsivity", formula: "R = I_ph / P_opt", description: "Current per optical power.", variables: [{ symbol: "R", name: "Responsivity", unit: "A/W" }, { symbol: "I_ph", name: "Photocurrent", unit: "A" }, { symbol: "P_opt", name: "Optical power", unit: "W" }], example: "Silicon ~0.5 A/W at 850nm" },
        { name: "Transimpedance", formula: "V_out = I_ph × R_f", description: "Current-to-voltage conversion.", variables: [{ symbol: "R_f", name: "Feedback R", unit: "Ω" }], example: "1µA × 1MΩ = 1V" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Wavelength Range", typicalValues: "400nm to 1100nm (Si)", notes: "InGaAs for IR" },
        { name: "Responsivity", typicalValues: "0.1 to 0.9 A/W", notes: "By wavelength" },
        { name: "Dark Current", typicalValues: "pA to nA", notes: "Lower is better" },
        { name: "Response Time", typicalValues: "ns to ps", notes: "PIN/APD fast" },
        { name: "Active Area", typicalValues: "0.1 to 100 mm²", notes: "Larger = more light" },
      ],
    },
    applications: {
      applications: [
        { category: "Light Sensing", description: "Measures intensity", examples: ["Light meters", "Proximity"] },
        { category: "Communication", description: "Receives optical signals", examples: ["Fiber", "IR links"] },
        { category: "Medical", description: "Pulse oximetry, imaging", examples: ["SpO2", "Scanners"] },
        { category: "Industrial", description: "Position and presence", examples: ["Encoders", "Counters"] },
      ],
    },
    advantages: { advantages: ["Fast response", "Linear with light", "Wide spectral range", "Low noise (PIN)", "Compact", "Can be very sensitive (APD)"] },
    disadvantages: { disadvantages: ["Small signal current", "Needs amplification", "Temperature affects dark current", "Limited by noise", "Wavelength dependent", "Requires optical design"] },
    selection: {
      steps: [
        { step: 1, title: "Match Wavelength", description: "Pick material for your light (Si, InGaAs)." },
        { step: 2, title: "Speed Need", description: "PIN/APD for fast; PN for slow." },
        { step: 3, title: "Amplifier", description: "Use transimpedance amp." },
        { step: 4, title: "Noise", description: "Minimize dark current and stray light." },
      ],
      tips: ["Use TIA for current-to-voltage", "Shield from ambient light", "Cool for low noise", "APD for long range"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Signal", symptoms: ["Zero current"], causes: ["No light", "Wiring"], solution: "Check optics/wiring" },
        { failure: "High Noise", symptoms: ["Jittery reading"], causes: ["Ambient", "Dark current"], solution: "Shield; cool" },
        { failure: "Saturation", symptoms: ["Flat response"], causes: ["Too bright"], solution: "Attenuate light" },
      ],
    },
    history: {
      invention: {
        year: 1950,
        inventor: "Multiple researchers (Bell Labs era)",
        discovery: "Photodiodes evolved from selenium cells into silicon p-n devices for communications and sensing.",
        evolution: [
          { year: 1950, event: "Silicon photodiodes developed" },
          { year: 1970, event: "PIN structures for speed" },
          { year: 1980, event: "APDs for long-haul fiber" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Low current.",
      thermalSafety: "Minimal heating.",
      handling: "ESD sensitive.",
      storage: "Anti-static, dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Responsivity", definition: "Photocurrent produced per unit optical power (A/W)." },
        { term: "Dark Current", definition: "Leakage current with no light; adds noise." },
        { term: "Transimpedance", definition: "Amplifier converting current to voltage." },
        { term: "Photovoltaic", definition: "Mode generating voltage like a solar cell." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a photodiode?", answer: "A junction that converts light into a proportional current." },
        { question: "Photoconductive vs photovoltaic?", answer: "Photoconductive is reverse-biased for speed; photovoltaic generates voltage with no bias." },
      ],
      intermediate: [
        { question: "Why use a PIN structure?", answer: "The intrinsic layer widens the depletion region, lowering capacitance and speeding response." },
        { question: "What is responsivity?", answer: "The ratio of photocurrent to incident optical power, in A/W." },
      ],
      advanced: [
        { question: "When use an APD?", answer: "When the signal is weak and you need internal gain to overcome amplifier noise." },
      ],
      expert: [
        { question: "How minimize photodiode noise?", answer: "Cool the device, use a low-noise TIA, shield ambient light, and match bandwidth to the signal." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A photodiode converts:", options: ["Light to current", "Current to light", "Heat to current", "Sound to current"], correctAnswer: 0, explanation: "Light generates photocurrent.", difficulty: "beginner" },
        { question: "PIN photodiodes are faster due to:", options: ["Gain", "Wide depletion/low C", "Larger area", "Higher voltage"], correctAnswer: 1, explanation: "Intrinsic layer lowers capacitance.", difficulty: "intermediate" },
        { question: "Responsivity unit:", options: ["V/W", "A/W", "W/A", "dB"], correctAnswer: 1, explanation: "Amperes per watt.", difficulty: "intermediate" },
        { question: "APD provides:", options: ["No gain", "Internal gain", "Higher V_F", "Lower speed"], correctAnswer: 1, explanation: "Avalanche multiplication gives gain.", difficulty: "advanced" },
        { question: "Dark current is minimized by:", options: ["Heating", "Cooling", "More light", "Bias increase"], correctAnswer: 1, explanation: "Cooling reduces leakage.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Photodiode Application Notes", author: "Hamamatsu", year: 2021, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "led", relationship: "Inverse optoelectronic device" },
        { id: "op-amp", relationship: "Transimpedance amplifier" },
        { id: "ir-sensor", relationship: "Built around photodiodes" },
        { id: "diode", relationship: "Same p-n junction physics" },
      ],
    },
  },

  transistor: {
    overview: {
      whatIsIt: "A bipolar junction transistor (BJT) is a three-terminal semiconductor device (collector, base, emitter) that amplifies or switches current using a small base current to control a larger collector current.",
      whyExists: "Transistors enable amplification and electronic switching, the foundation of all modern electronics.",
      whereUsed: "They are used in amplifiers, switches, audio equipment, power control, and virtually every circuit.",
    },
    working: {
      workingPrinciple: "A small base-emitter current injects carriers into the thin base; most are swept into the collector, so collector current is β times the base current (I_C = β × I_B).",
      steps: [
        "Base-emitter junction is forward biased",
        "Base current injects carriers into the thin base",
        "Most carriers diffuse to the collector (reverse-biased)",
        "Collector current is β times base current",
        "Small base change controls large collector current",
      ],
      microscopicExplanation: "The thin, lightly doped base lets most injected minority carriers reach the collector before recombining; the ratio defines current gain β.",
    },
    construction: {
      internalParts: [
        { name: "Emitter", function: "Injects carriers", material: "Heavily doped" },
        { name: "Base", function: "Controls transport", material: "Thin, lightly doped" },
        { name: "Collector", function: "Collects carriers", material: "Moderately doped" },
        { name: "Terminals", function: "Connect (B, C, E)", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "NPN", description: "Electron-majority current flow.", applications: ["General amplification", "Switching"] },
        { name: "PNP", description: "Hole-majority; complementary.", applications: ["High-side switch", "Complementary pairs"] },
        { name: "Power BJT", description: "High current/voltage.", applications: ["Motor drives", "Audio"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Current Gain", formula: "I_C = β × I_B", description: "Collector current from base current.", variables: [{ symbol: "I_C", name: "Collector current", unit: "A" }, { symbol: "β", name: "Gain", unit: "dimensionless" }, { symbol: "I_B", name: "Base current", unit: "A" }], example: "β=100, I_B=1mA → I_C=100mA" },
        { name: "Transconductance", formula: "g_m = I_C / V_T", description: "Small-signal gain parameter.", variables: [{ symbol: "g_m", name: "Transconductance", unit: "S" }, { symbol: "V_T", name: "Thermal voltage", unit: "V" }], example: "At 1mA, g_m≈38mS" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Current Gain (hFE)", typicalValues: "20 to 500", notes: "Varies with current" },
        { name: "V_CEO", typicalValues: "20V to 1200V", notes: "Max collector-emitter" },
        { name: "I_C Max", typicalValues: "100mA to 100A", notes: "Continuous" },
        { name: "P_D Max", typicalValues: "0.1W to 300W", notes: "Power dissipation" },
        { name: "f_T", typicalValues: "MHz to GHz", notes: "Gain-bandwidth" },
        { name: "V_BE", typicalValues: "0.6 to 0.7V", notes: "Base-emitter drop" },
      ],
    },
    applications: {
      applications: [
        { category: "Amplification", description: "Boosts signals", examples: ["Audio amps", "RF"] },
        { category: "Switching", description: "Digital on/off", examples: ["Logic", "Relay drivers"] },
        { category: "Current Source", description: "Constant current", examples: ["LED drivers", "Sensors"] },
        { category: "Oscillators", description: "Generates waveforms", examples: ["Timers", "Clocks"] },
      ],
    },
    advantages: { advantages: ["High current gain", "Good linearity for analog", "Cheap and ubiquitous", "Wide voltage/current range", "Simple to bias", "Mature technology"] },
    disadvantages: { disadvantages: ["Current-driven (needs base current)", "β varies with temp and batch", "Lower input impedance than MOSFET", "Storage-time switching delay", "Power dissipation", "Second-breakdown risk (bipolar)"] },
    selection: {
      steps: [
        { step: 1, title: "Choose Polarity", description: "NPN for low-side, PNP for high-side." },
        { step: 2, title: "Voltage/Current", description: "Exceed V_CEO and I_C with margin." },
        { step: 3, title: "Gain Need", description: "Pick β for the stage." },
        { step: 4, title: "Power/Thermal", description: "Ensure P_D and heatsink." },
      ],
      tips: ["Use base resistor to set I_B", "Saturate for switching", "Darlington for high gain", "Watch thermal runaway"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open", symptoms: ["No conduction"], causes: ["Overstress"], solution: "Replace" },
        { failure: "Short (C-E)", symptoms: ["Always on"], causes: ["Overvoltage", "Overheat"], solution: "Replace; check snubber" },
        { failure: "Thermal Runaway", symptoms: ["Heats, fails"], causes: ["Insufficient bias/heat"], solution: "Add emitter resistor, heatsink" },
      ],
    },
    history: {
      invention: {
        year: 1947,
        inventor: "John Bardeen, Walter Brattain, William Shockley",
        discovery: "The first point-contact transistor was demonstrated at Bell Labs in December 1947.",
        evolution: [
          { year: 1947, event: "First transistor (point-contact)" },
          { year: 1948, event: "Bipolar junction transistor" },
          { year: 1956, event: "Nobel Prize to inventors" },
          { year: 1960, event: "Integrated circuits emerge" },
        ],
      },
    },
    safety: {
      voltageSafety: "High-voltage transistors need isolation.",
      currentSafety: "Exceeding I_C or P_D destroys them.",
      thermalSafety: "Heatsinks required for power use.",
      handling: "ESD sensitive.",
      storage: "Anti-static, dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "β (hFE)", definition: "DC current gain; I_C / I_B." },
        { term: "Saturation", definition: "Fully on; V_CE minimal." },
        { term: "Active Region", definition: "Linear amplification region." },
        { term: "Cutoff", definition: "Fully off; no collector current." },
        { term: "Thermal Runaway", definition: "Rising temp raises current, which raises temp." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a transistor do?", answer: "It amplifies or switches a large current using a small control current." },
        { question: "NPN vs PNP?", answer: "NPN uses electron flow from collector to emitter; PNP is complementary with opposite bias." },
      ],
      intermediate: [
        { question: "What is β?", answer: "Current gain: collector current equals β times base current." },
        { question: "What are the three regions?", answer: "Cutoff (off), active (linear amplification), and saturation (fully on)." },
      ],
      advanced: [
        { question: "What causes thermal runaway?", answer: "Increased temperature raises leakage and I_C, which increases power and temperature in a positive feedback loop." },
      ],
      expert: [
        { question: "When choose BJT over MOSFET?", answer: "For analog linearity, low-noise amplification, and where a current-driven device suits the design." },
      ],
    },
    mcqs: {
      questions: [
        { question: "Collector current equals:", options: ["I_B", "β × I_B", "I_E", "V_BE/R"], correctAnswer: 1, explanation: "I_C = β × I_B.", difficulty: "beginner" },
        { question: "A transistor in saturation is:", options: ["Off", "Fully on", "Linear", "Reverse"], correctAnswer: 1, explanation: "Saturation = fully conducting.", difficulty: "intermediate" },
        { question: "BJT is controlled by:", options: ["Voltage", "Current", "Light", "Magnetic"], correctAnswer: 1, explanation: "Base current controls it.", difficulty: "beginner" },
        { question: "Thermal runaway is a risk in:", options: ["MOSFET", "BJT", "Diode", "Resistor"], correctAnswer: 1, explanation: "Bipolar positive feedback with temperature.", difficulty: "advanced" },
        { question: "V_BE of silicon BJT is about:", options: ["0.2V", "0.7V", "1.5V", "5V"], correctAnswer: 1, explanation: "≈0.6-0.7V.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "Bipolar Transistor Basics", author: "ON Semiconductor", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "mosfet", relationship: "Voltage-controlled alternative" },
        { id: "resistor", relationship: "Base/gain-setting resistors" },
        { id: "diode", relationship: "Base-emitter is a diode" },
        { id: "op-amp", relationship: "Built from transistor stages" },
      ],
    },
  },

  mosfet: {
    overview: {
      whatIsIt: "A MOSFET (metal-oxide-semiconductor field-effect transistor) is a voltage-controlled switch/amplifier where the gate voltage creates a conductive channel between source and drain.",
      whyExists: "MOSFETs offer very high input impedance, fast switching, and low on-resistance, ideal for digital logic and power conversion.",
      whereUsed: "They are the backbone of microprocessors, power supplies, motor drivers, and switching regulators.",
    },
    working: {
      workingPrinciple: "A voltage on the insulated gate builds an electric field that attracts carriers, forming a channel. Above the threshold voltage, current flows; the gate draws almost no DC current.",
      steps: [
        "Gate voltage is applied relative to source",
        "Electric field forms a conductive channel",
        "Above threshold, source-drain conducts",
        "Higher V_GS lowers on-resistance",
        "Gate draws negligible DC current",
      ],
      microscopicExplanation: "The oxide-insulated gate capacitively induces a charge layer at the semiconductor surface; no DC gate current flows, giving near-infinite input impedance.",
    },
    construction: {
      internalParts: [
        { name: "Gate Oxide", function: "Insulates and couples field", material: "SiO2 or high-k" },
        { name: "Gate Electrode", function: "Applies field", material: "Polysilicon/metal" },
        { name: "Source/Drain", function: "Carrier terminals", material: "Doped silicon" },
        { name: "Body/Substrate", function: "Reference", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "N-Channel Enhancement", description: "Normally off; positive gate turns on.", applications: ["Low-side switch", "Buck"] },
        { name: "P-Channel Enhancement", description: "Normally off; negative gate.", applications: ["High-side switch"] },
        { name: "Power MOSFET", description: "Low R_DS(on), fast.", applications: ["SMPS", "Motor"] },
        { name: "Logic-Level MOSFET", description: "Fully on at 5V/3.3V.", applications: ["MCU drive"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "On-Resistance Loss", formula: "P = I² × R_DS(on)", description: "Conduction loss.", variables: [{ symbol: "P", name: "Power", unit: "W" }, { symbol: "I", name: "Current", unit: "A" }, { symbol: "R_DS(on)", name: "On resistance", unit: "Ω" }], example: "10A, 10mΩ → 1W" },
        { name: "Gate Charge Loss", formula: "P_sw = ½ × Q_g × V_GS × f", description: "Switching loss.", variables: [{ symbol: "Q_g", name: "Gate charge", unit: "C" }, { symbol: "f", name: "Frequency", unit: "Hz" }], example: "Higher f → more loss" },
      ],
    },
    specifications: {
      specifications: [
        { name: "V_DS Max", typicalValues: "20V to 1000V", notes: "Drain-source rating" },
        { name: "R_DS(on)", typicalValues: "1mΩ to several Ω", notes: "Lower is better" },
        { name: "I_D Max", typicalValues: "mA to 100s A", notes: "Continuous" },
        { name: "V_GS(th)", typicalValues: "1V to 4V", notes: "Threshold" },
        { name: "Q_g", typicalValues: "nC to µC", notes: "Gate charge" },
        { name: "P_D", typicalValues: "0.5W to 500W", notes: "With heatsink" },
      ],
    },
    applications: {
      applications: [
        { category: "Power Switching", description: "Efficient switches", examples: ["SMPS", "Inverters"] },
        { category: "Motor Drive", description: "H-bridge control", examples: ["Robotics", "EV"] },
        { category: "Digital Logic", description: "CMOS gates", examples: ["Microprocessors"] },
        { category: "Load Switch", description: "Power path control", examples: ["Battery", "Hot-swap"] },
      ],
    },
    advantages: { advantages: ["Voltage controlled (no gate current)", "Very fast switching", "Low on-resistance", "High input impedance", "No thermal runaway (unlike BJT)", "Scales to nanometer ICs"] },
    disadvantages: { disadvantages: ["Gate oxide ESD fragile", "Gate charge switching loss", "Body diode parasitic", "Threshold varies with temp", "Drives need gate driver at speed", "Avalanche limited"] },
    selection: {
      steps: [
        { step: 1, title: "Voltage Rating", description: "V_DS > 1.5-2x max." },
        { step: 2, title: "R_DS(on)", description: "Minimize for efficiency." },
        { step: 3, title: "Gate Drive", description: "Ensure V_GS fully enhances." },
        { step: 4, title: "Thermal", description: "Heatsink for P_loss." },
      ],
      tips: ["Use logic-level for MCU", "Gate driver for fast switching", "Watch body diode in bridges", "ESD-protect the gate"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Gate Punctured", symptoms: ["Short S-D"], causes: ["ESD", "Overvoltage"], solution: "Replace; add protection" },
        { failure: "Not Turning On", symptoms: ["High R"], causes: ["Low V_GS", "Slow gate"], solution: "Raise drive" },
        { failure: "Overheat", symptoms: ["Thermal fail"], causes: ["High R_DS", "No sink"], solution: "Better MOSFET/heatsink" },
      ],
    },
    history: {
      invention: {
        year: 1959,
        inventor: "Mohamed Atalla, Dawon Kahng",
        discovery: "The first MOSFET was invented at Bell Labs, later enabling CMOS and modern microchips.",
        evolution: [
          { year: 1959, event: "First MOSFET demonstrated" },
          { year: 1963, event: "CMOS invented" },
          { year: 1971, event: "First microprocessor (MOS)" },
          { year: 2000, event: "Nobel Prize for MOSFET" },
        ],
      },
    },
    safety: {
      voltageSafety: "High-voltage MOSFETs need isolation.",
      currentSafety: "Exceeding I_D or P_D destroys them.",
      thermalSafety: "Heatsinks required for power.",
      handling: "ESD extremely sensitive; ground wrist strap.",
      storage: "Conductive foam; anti-static.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "R_DS(on)", definition: "Drain-source resistance when fully on." },
        { term: "V_GS(th)", definition: "Gate threshold voltage to start conduction." },
        { term: "Gate Charge (Q_g)", definition: "Charge needed to switch the gate; sets switching speed." },
        { term: "Body Diode", definition: "Parasitic diode between source and drain." },
        { term: "CMOS", definition: "Complementary MOS; low-power logic family." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a MOSFET?", answer: "A voltage-controlled transistor where gate voltage creates a conductive channel." },
        { question: "Why is gate current near zero?", answer: "The gate is insulated by oxide, so only capacitive charging current flows." },
      ],
      intermediate: [
        { question: "MOSFET vs BJT key difference?", answer: "MOSFET is voltage-controlled with high input impedance; BJT is current-controlled." },
        { question: "What is R_DS(on)?", answer: "The resistance when fully on; lower means less conduction loss." },
      ],
      advanced: [
        { question: "What limits switching speed?", answer: "Gate charge and driver current; you must charge/discharge C_iss quickly." },
      ],
      expert: [
        { question: "How minimize MOSFET switching loss?", answer: "Use a strong gate driver, minimize loop inductance, and select low-Q_g devices; balance against EMI." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A MOSFET is controlled by:", options: ["Base current", "Gate voltage", "Light", "Emitter"], correctAnswer: 1, explanation: "Voltage on the gate.", difficulty: "beginner" },
        { question: "Conduction loss is:", options: ["I×V", "I²×R_DS(on)", "½CV²", "V²/R"], correctAnswer: 1, explanation: "P = I²R_DS(on).", difficulty: "intermediate" },
        { question: "Gate draws:", options: ["High DC current", "Almost no DC current", "Base current", "Leakage only at MHz"], correctAnswer: 1, explanation: "Insulated gate, no DC current.", difficulty: "beginner" },
        { question: "Parasitic element in MOSFET:", options: ["Zener", "Body diode", "Inductor", "Transformer"], correctAnswer: 1, explanation: "Source-drain body diode.", difficulty: "advanced" },
        { question: "MOSFETs enabled:", options: ["Relays", "Microprocessors", "Tubes", "Motors"], correctAnswer: 1, explanation: "CMOS chips are MOSFET-based.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "MOSFET Basics", author: "Infineon", year: 2021, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "transistor", relationship: "Current-controlled counterpart" },
        { id: "gate-driver", relationship: "Drives the gate" },
        { id: "diode", relationship: "Body diode / flyback" },
        { id: "microcontroller", relationship: "Provides gate signal" },
      ],
    },
  },

  jfet: {
    overview: {
      whatIsIt: "A JFET (junction field-effect transistor) is a voltage-controlled device where a reverse-biased p-n junction gate depletes a channel to control current.",
      whyExists: "JFETs offer very high input impedance and low noise, useful for analog front-ends and switches.",
      whereUsed: "They are used in low-noise amplifiers, buffers, and analog switches.",
    },
    working: {
      workingPrinciple: "A reverse-biased gate junction creates a depletion region that narrows the conductive channel; more reverse bias pinches it off, reducing drain current.",
      steps: [
        "Drain-source voltage drives channel current",
        "Reverse-biased gate widens depletion region",
        "Channel narrows, raising resistance",
        "At pinch-off, current saturates",
        "Gate voltage controls current with no gate current",
      ],
      microscopicExplanation: "The gate p-n junction is always reverse biased, so input impedance is extremely high; the depletion width modulates the conducting cross-section of the channel.",
    },
    construction: {
      internalParts: [
        { name: "Channel", function: "Conducts current", material: "N or P silicon" },
        { name: "Gate Junction", function: "Controls channel", material: "Opposite doping" },
        { name: "Terminals", function: "Source, gate, drain", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "N-Channel JFET", description: "Electrons carry current.", applications: ["Low-noise amps"] },
        { name: "P-Channel JFET", description: "Holes carry current.", applications: ["Complementary"] },
        { name: "Dual JFET", description: "Matched pair.", applications: ["Differential pairs"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Shockley Equation", formula: "I_D = I_DSS × (1 - V_GS/V_P)²", description: "Drain current vs gate voltage.", variables: [{ symbol: "I_D", name: "Drain current", unit: "A" }, { symbol: "I_DSS", name: "Saturation current", unit: "A" }, { symbol: "V_P", name: "Pinch-off voltage", unit: "V" }], example: "At V_GS=0, I_D=I_DSS" },
      ],
    },
    specifications: {
      specifications: [
        { name: "I_DSS", typicalValues: "1mA to 50mA", notes: "Zero-gate current" },
        { name: "V_P (Pinch-off)", typicalValues: "-0.5V to -10V", notes: "Negative for N-JFET" },
        { name: "Input Impedance", typicalValues: "10^8 to 10^12 Ω", notes: "Very high" },
        { name: "Noise Figure", typicalValues: "Low", notes: "Good for front-ends" },
        { name: "V_DS Max", typicalValues: "20V to 50V", notes: "Modest" },
      ],
    },
    applications: {
      applications: [
        { category: "Low-Noise Amplifier", description: "First stage of sensors", examples: ["Mic preamp", "Phono"] },
        { category: "Buffer", description: "High-impedance isolation", examples: ["Oscilloscopes", "Probes"] },
        { category: "Analog Switch", description: "Signal routing", examples: ["Mux", "Sample-hold"] },
      ],
    },
    advantages: { advantages: ["Extremely high input impedance", "Low noise", "Simple to bias", "Robust (no oxide to puncture)", "Good linearity", "No gate current"] },
    disadvantages: { disadvantages: ["Lower gain than MOSFET", "Normally on (needs negative bias for N)", "Modest voltage range", "Less dense than MOS", "Limited power", "Fewer types than MOSFET"] },
    selection: {
      steps: [
        { step: 1, title: "Channel Type", description: "N for low noise typically." },
        { step: 2, title: "I_DSS / V_P", description: "Match bias point." },
        { step: 3, title: "Impedance", description: "Exploit high Z for buffers." },
      ],
      tips: ["Use as constant-current source", "Self-biasing with source resistor", "Great for audio front-ends", "Robust vs ESD compared to MOS"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Gate Leakage", symptoms: ["Lower Z"], causes: ["Overvoltage"], solution: "Replace; limit V_GS" },
        { failure: "Open", symptoms: ["No current"], causes: ["Overstress"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1952,
        inventor: "Julius Lilienfeld (concept), Shockley 1952",
        discovery: "Shockley published the field-effect transistor theory leading to the JFET.",
        evolution: [
          { year: 1952, event: "JFET theory and devices" },
          { year: 1960, event: "Used in early analog ICs" },
          { year: 1980, event: "Low-noise JFETs mature" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Low current.",
      thermalSafety: "Minimal heating.",
      handling: "Less ESD sensitive than MOS, still careful.",
      storage: "Anti-static, dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Pinch-off", definition: "Gate voltage where the channel closes and current saturates." },
        { term: "I_DSS", definition: "Drain current with gate shorted to source." },
        { term: "Depletion Region", definition: "Gate junction region that modulates the channel." },
        { term: "Normally On", definition: "Conducts at zero gate voltage (JFET)." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a JFET?", answer: "A voltage-controlled FET using a reverse-biased gate junction to modulate a channel." },
        { question: "Why high input impedance?", answer: "The gate junction is reverse biased, so almost no gate current flows." },
      ],
      intermediate: [
        { question: "JFET vs MOSFET?", answer: "JFET has no oxide (robust) and is normally on; MOSFET has insulated gate and is normally off." },
        { question: "What is pinch-off?", answer: "The gate voltage at which the channel is fully depleted and current saturates." },
      ],
      advanced: [
        { question: "Why use JFET in low-noise amps?", answer: "Its conduction mechanism has very low 1/f noise, ideal for the first amplifier stage." },
      ],
      expert: [
        { question: "How bias a JFET stage?", answer: "Self-bias with a source resistor sets a stable Q-point; I_D = I_DSS(1-V_GS/V_P)²." },
      ],
    },
    mcqs: {
      questions: [
        { question: "JFET gate is:", options: ["Forward biased", "Reverse biased", "Shorted", "Floating"], correctAnswer: 1, explanation: "Reverse-biased junction.", difficulty: "beginner" },
        { question: "JFET input impedance is:", options: ["Low", "Very high", "Medium", "Zero"], correctAnswer: 1, explanation: "Reverse-biased gate → high Z.", difficulty: "beginner" },
        { question: "N-JFET is normally:", options: ["Off", "On", "Broken", "Reverse"], correctAnswer: 1, explanation: "Conducts at V_GS=0.", difficulty: "intermediate" },
        { question: "Pinch-off voltage:", options: ["Turns it on", "Closes channel", "Raises gain", "Lowers V"], correctAnswer: 1, explanation: "Channel closes at pinch-off.", difficulty: "advanced" },
        { question: "JFET excels at:", options: ["Power", "Low-noise analog", "Digital", "RF power"], correctAnswer: 1, explanation: "Low-noise front-ends.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "JFET Application Guide", author: "InterFET", year: 2019, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "mosfet", relationship: "Insulated-gate cousin" },
        { id: "transistor", relationship: "Bipolar alternative" },
        { id: "op-amp", relationship: "Input stage" },
        { id: "resistor", relationship: "Self-bias resistor" },
      ],
    },
  },

  igbt: {
    overview: {
      whatIsIt: "An IGBT (insulated-gate bipolar transistor) combines a MOSFET input with a bipolar output, giving high-voltage, high-current switching with low on-state loss.",
      whyExists: "IGBTs bridge the gap between MOSFETs (fast, low voltage) and BJTs (high voltage, high conduction loss), ideal for power conversion.",
      whereUsed: "They are used in motor drives, inverters, welding, trains, and renewable energy systems.",
    },
    working: {
      workingPrinciple: "A MOS gate controls a bipolar transistor; when on, conductivity modulation by a wide-base PNP greatly reduces on-state voltage compared with a MOSFET at high voltage.",
      steps: [
        "Gate voltage turns on the MOS structure",
        "This injects carriers into the drift region",
        "Conductivity modulation lowers on-resistance",
        "Low V_CE(sat) results at high current",
        "Gate controls switching like a MOSFET",
      ],
      microscopicExplanation: "The MOS channel triggers a parasitic PNP transistor; minority-carrier injection into the drift layer drastically reduces its resistance, giving low saturation voltage.",
    },
    construction: {
      internalParts: [
        { name: "MOS Gate", function: "Controls switching", material: "Poly/SiO2" },
        { name: "Drift Region", function: "Blocks high voltage", material: "N- silicon" },
        { name: "Collector/Emitter", function: "Power terminals", material: "Doped silicon" },
        { name: "Body Diode", function: "Freewheeling", material: "Parasitic" },
      ],
    },
    types: {
      types: [
        { name: "Punch-Through (PT)", description: "Older, faster", applications: ["Legacy drives"] },
        { name: "Non-Punch-Through (NPT)", description: "Robust, short-circuit rated", applications: ["Industrial"] },
        { name: "Trench-Gate", description: "Lower V_CE(sat)", applications: ["Modern inverters"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Saturation Voltage", formula: "V_CE(sat) ≈ 1.5V to 3V", description: "Nearly constant loss vs current.", variables: [{ symbol: "V_CE(sat)", name: "Saturation voltage", unit: "V" }], example: "At 100A still ~2V" },
        { name: "Conduction Loss", formula: "P = V_CE(sat) × I", description: "Loss independent of I².", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "2V × 50A = 100W" },
      ],
    },
    specifications: {
      specifications: [
        { name: "V_CES", typicalValues: "600V to 6500V", notes: "Collector-emitter rating" },
        { name: "I_C", typicalValues: "10A to 3600A", notes: "Module level" },
        { name: "V_CE(sat)", typicalValues: "1.5V to 3V", notes: "Low at high current" },
        { name: "Switching Speed", typicalValues: "kHz to tens of kHz", notes: "Slower than MOSFET" },
        { name: "Short-Circuit Withstand", typicalValues: "5 to 10 µs", notes: "Important for protection" },
      ],
    },
    applications: {
      applications: [
        { category: "Motor Drives", description: "VFDs for AC motors", examples: ["Industrial", "HVAC"] },
        { category: "Inverters", description: "DC-AC conversion", examples: ["Solar", "UPS"] },
        { category: "Traction", description: "Train and EV propulsion", examples: ["Locomotives"] },
        { category: "Welding/Induction", description: "High-power control", examples: ["Welders"] },
      ],
    },
    advantages: { advantages: ["High voltage/current capability", "Low on-state loss at high power", "MOS gate (easy drive)", "Robust short-circuit rating", "Good thermal performance", "Mature modules"] },
    disadvantages: { disadvantages: ["Slower than MOSFET", "Tail current at turn-off", "Cannot switch as fast", "Parasitic thyristor latch risk", "More complex gate drive", "Higher cost at low power"] },
    selection: {
      steps: [
        { step: 1, title: "Voltage Rating", description: "V_CES > 2x DC bus." },
        { step: 2, title: "Current Rating", description: "Exceed peak with margin." },
        { step: 3, title: "Switching Frequency", description: "IGBT for <20kHz typically." },
        { step: 4, title: "Gate Driver", description: "Use dedicated driver with desat." },
      ],
      tips: ["Use anti-parallel diode", "Mind tail current", "Desaturation protection", "Heatsink essential"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Latch-up", symptoms: ["Destructive on"], causes: ["dV/dt", "Overcurrent"], solution: "Snubber; protect" },
        { failure: "Short", symptoms: ["No switching"], causes: ["Overvoltage", "Overheat"], solution: "Replace module" },
        { failure: "Overheat", symptoms: ["Thermal trip"], causes: ["High loss"], solution: "Better cooling" },
      ],
    },
    history: {
      invention: {
        year: 1982,
        inventor: "B. Jayant Baliga (key developer)",
        discovery: "Baliga and others developed the IGBT, combining MOS and bipolar advantages for power electronics.",
        evolution: [
          { year: 1982, event: "First IGBT" },
          { year: 1990, event: "Trench gates improve performance" },
          { year: 2010, event: "Widespread in EVs and renewables" },
        ],
      },
    },
    safety: {
      voltageSafety: "High voltage; isolation and interlocks required.",
      currentSafety: "Lethal currents; proper fusing.",
      thermalSafety: "Large heat; forced cooling.",
      handling: "ESD sensitive gate.",
      storage: "Anti-static, dry.",
      disposal: "E-waste; contains materials to recycle.",
    },
    glossary: {
      glossary: [
        { term: "V_CE(sat)", definition: "Collector-emitter voltage when fully on." },
        { term: "Conductivity Modulation", definition: "Minority-carrier injection lowering drift resistance." },
        { term: "Tail Current", definition: "Current lingering at turn-off due to stored charge." },
        { term: "Desaturation", definition: "Fault detection when V_CE rises under overcurrent." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is an IGBT?", answer: "A device with a MOS gate and bipolar output for high-power switching." },
        { question: "IGBT vs MOSFET?", answer: "IGBT handles higher voltage with lower conduction loss but switches slower." },
      ],
      intermediate: [
        { question: "Why low on-loss?", answer: "Conductivity modulation by injected carriers reduces drift-region resistance." },
        { question: "Why slower than MOSFET?", answer: "Stored minority charge must be removed, causing tail current." },
      ],
      advanced: [
        { question: "What is latch-up risk?", answer: "High dV/dt can trigger the parasitic thyristor, causing destructive conduction." },
      ],
      expert: [
        { question: "When choose IGBT over MOSFET?", answer: "Above ~250V and moderate frequency (<20kHz) where conduction loss dominates." },
      ],
    },
    mcqs: {
      questions: [
        { question: "IGBT combines:", options: ["BJT + JFET", "MOSFET input + BJT output", "Two diodes", "SCR + MOS"], correctAnswer: 1, explanation: "MOS gate, bipolar output.", difficulty: "beginner" },
        { question: "IGBT is best for:", options: ["Low voltage", "High power <20kHz", "RF", "Audio"], correctAnswer: 1, explanation: "High-power moderate frequency.", difficulty: "intermediate" },
        { question: "On-state loss is roughly:", options: ["I²R", "V_CE(sat)×I", "½CV²", "V²/R"], correctAnswer: 1, explanation: "Near-constant V_CE(sat).", difficulty: "advanced" },
        { question: "Turn-off shows:", options: ["No loss", "Tail current", "Instant off", "Negative resistance"], correctAnswer: 1, explanation: "Stored charge tail.", difficulty: "advanced" },
        { question: "IGBT gate is like a:", options: ["BJT base", "MOSFET gate", "SCR gate", "Diode"], correctAnswer: 1, explanation: "Voltage-controlled MOS gate.", difficulty: "beginner" },
      ],
    },
    references: {
      references: [
        { title: "IGBT Fundamentals", author: "Infineon", year: 2021, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "mosfet", relationship: "Faster, lower-voltage cousin" },
        { id: "transistor", relationship: "Bipolar output stage" },
        { id: "thyristor", relationship: "Alternative high-power switch" },
        { id: "diode", relationship: "Anti-parallel freewheel diode" },
      ],
    },
  },

  thyristor: {
    overview: {
      whatIsIt: "A thyristor (SCR) is a four-layer p-n-p-n semiconductor device that acts as a latching switch, conducting only after a gate trigger and continuing until current falls below hold.",
      whyExists: "Thyristors provide robust, high-power AC/DC control with simple gate triggering.",
      whereUsed: "They are used in phase-controlled rectifiers, lamp dimmers, motor speed control, and HVDC transmission.",
    },
    working: {
      workingPrinciple: "A gate pulse turns on the device; internal positive feedback between the two transistors latches it on. It stays conducting until the anode current drops below the holding current (at AC zero-crossing).",
      steps: [
        "Forward voltage applied across anode-cathode",
        "A gate pulse triggers conduction",
        "Internal regeneration latches the device on",
        "Current flows until it falls below holding",
        "At AC zero-crossing it turns off naturally",
      ],
      microscopicExplanation: "The p-n-p-n structure forms two coupled transistors; once triggered, each sustains the other's base current, creating a stable on-state until external current is removed.",
    },
    construction: {
      internalParts: [
        { name: "p-n-p-n Stack", function: "Latching switch", material: "Silicon" },
        { name: "Gate Terminal", function: "Triggers turn-on", material: "Tinned lead" },
        { name: "Anode/Cathode", function: "Power terminals", material: "Doped silicon" },
      ],
    },
    types: {
      types: [
        { name: "SCR (Phase Control)", description: "Half/full-wave control.", applications: ["Dimmers", "Rectifiers"] },
        { name: "Fast Thyristor", description: "High di/dt, turn-off.", applications: ["Inverters"] },
        { name: "Asymmetric Thyristor", description: "Reverse-blocking optimized.", applications: ["Drives"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Holding Current", formula: "I_H (device spec)", description: "Below this, device turns off.", variables: [{ symbol: "I_H", name: "Holding current", unit: "A" }], example: "Must fall to zero at commutation" },
        { name: "Firing Angle", formula: "V_avg = (V_m/π)(1+cos α)", description: "Phase-control average output.", variables: [{ symbol: "α", name: "Firing angle", unit: "radians" }], example: "α=90° → half output" },
      ],
    },
    specifications: {
      specifications: [
        { name: "V_DRMM", typicalValues: "600V to 6000V", notes: "Peak repetitive" },
        { name: "I_T(AV)", typicalValues: "1A to 3000A", notes: "Average on-state" },
        { name: "I_H (Holding)", typicalValues: "mA to A", notes: "Turn-off threshold" },
        { name: "di/dt, dv/dt", typicalValues: "Rated limits", notes: "Snubber needed" },
        { name: "Gate Trigger", typicalValues: "0.5-2V, mA", notes: "Trigger pulse" },
      ],
    },
    applications: {
      applications: [
        { category: "Phase Control", description: "Adjusts AC power", examples: ["Lamp dimmer", "Heater"] },
        { category: "Rectification", description: "Controlled DC", examples: ["Battery charger", "Plating"] },
        { category: "Motor Control", description: "Speed of AC/DC motors", examples: ["Fans", "Pumps"] },
        { category: "HVDC", description: "High-voltage transmission", examples: ["Grid"] },
      ],
    },
    advantages: { advantages: ["Very high power handling", "Simple gate trigger", "Robust and cheap", "Low on-state voltage", "Natural AC commutation", "Mature technology"] },
    disadvantages: { disadvantages: ["Cannot turn off via gate (SCR)", "Slow switching vs transistors", "Needs commutation", "Generates harmonics", "dv/dt sensitivity", "One-way conduction"] },
    selection: {
      steps: [
        { step: 1, title: "Voltage Rating", description: "Exceed peak with margin." },
        { step: 2, title: "Current Rating", description: "Use average and surge ratings." },
        { step: 3, title: "Snubber", description: "Limit di/dt and dv/dt." },
        { step: 4, title: "Gate Drive", description: "Pulse transformer or opto." },
      ],
      tips: ["Use snubber networks", "Mind surge current", "Natural commutation at AC zero", "GTO for forced turn-off"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Won't Turn On", symptoms: ["No conduction"], causes: ["No gate pulse", "Low V"], solution: "Check gate drive" },
        { failure: "Won't Turn Off", symptoms: ["Stays on"], causes: ["Current > I_H", "No commutation"], solution: "Ensure zero-crossing" },
        { failure: "dv/dt False Trigger", symptoms: ["Random on"], causes: ["Fast rise"], solution: "Add snubber" },
      ],
    },
    history: {
      invention: {
        year: 1957,
        inventor: "John Moll, Gordon Hall, others (General Electric)",
        discovery: "The silicon controlled rectifier (SCR) was developed at GE as the first commercial thyristor.",
        evolution: [
          { year: 1957, event: "First SCR" },
          { year: 1960, event: "Widely used in controls" },
          { year: 1970, event: "GTO and triac variants" },
        ],
      },
    },
    safety: {
      voltageSafety: "High voltage; isolation required.",
      currentSafety: "High current; fusing and interlocks.",
      thermalSafety: "Heatsinks and cooling essential.",
      handling: "ESD and overvoltage care.",
      storage: "Anti-static, dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "SCR", definition: "Silicon Controlled Rectifier; a thyristor." },
        { term: "Holding Current", definition: "Minimum current to stay on." },
        { term: "Latching", definition: "Stays on after gate pulse removed." },
        { term: "Commutation", definition: "Process of turning the device off." },
        { term: "Firing Angle", definition: "Delay before triggering in AC control." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a thyristor?", answer: "A latching four-layer switch triggered by a gate pulse, conducting until current stops." },
        { question: "Can you turn off an SCR with the gate?", answer: "No; the gate only turns it on. It turns off when current falls below holding (e.g., AC zero-crossing)." },
      ],
      intermediate: [
        { question: "What is phase control?", answer: "Delaying the firing angle in each AC half-cycle to vary average power." },
        { question: "Why snubbers?", answer: "To limit di/dt and dv/dt that could damage or falsely trigger the device." },
      ],
      advanced: [
        { question: "How force-commutate an SCR?", answer: "Use a commutating circuit (capacitor/inverse thyristor) to momentarily reverse voltage and bring current to zero." },
      ],
      expert: [
        { question: "When choose thyristor over IGBT?", answer: "At very high power and where line-commutated control suffices; thyristors remain cheaper at multi-MW." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A thyristor latches on after:", options: ["Gate pulse", "Voltage rise", "Temperature", "Light"], correctAnswer: 0, explanation: "Gate triggers latching.", difficulty: "beginner" },
        { question: "It turns off when:", options: ["Gate low", "Current < holding", "Voltage high", "Light off"], correctAnswer: 1, explanation: "Below holding current.", difficulty: "intermediate" },
        { question: "SCR stands for:", options: ["Silicon Controlled Rectifier", "Switch Circuit Relay", "Semi Conductor Resistor", "Signal Control Reg"], correctAnswer: 0, explanation: "Silicon Controlled Rectifier.", difficulty: "beginner" },
        { question: "Phase control varies:", options: ["Frequency", "Firing angle", "Voltage only", "Current only"], correctAnswer: 1, explanation: "Delay angle sets power.", difficulty: "advanced" },
        { question: "Snubber limits:", options: ["Current only", "di/dt and dv/dt", "Temperature", "Light"], correctAnswer: 1, explanation: "Protects against fast transients.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Thyristor Application Handbook", author: "Littelfuse", year: 2020, url: "", type: "datasheet" },
        { title: "Power Electronics", author: "Mohan, Undeland, Robbins", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "triac", relationship: "Bidirectional thyristor" },
        { id: "igbt", relationship: "Faster turn-off alternative" },
        { id: "diode", relationship: "Rectifier companion" },
        { id: "resistor", relationship: "Gate and snubber resistors" },
      ],
    },
  },

  triac: {
    overview: {
      whatIsIt: "A TRIAC is a bidirectional thyristor that conducts in both directions when triggered by a gate pulse, used for AC power control.",
      whyExists: "TRIACs let a single device switch AC loads in both half-cycles, simplifying lamp dimmers and motor controls.",
      whereUsed: "They are used in light dimmers, fan speed controls, and AC motor starters.",
    },
    working: {
      workingPrinciple: "Two antiparallel SCR structures share a gate; a trigger pulse turns the device on in whichever direction current is flowing, latching until current crosses zero.",
      steps: [
        "AC voltage applied across MT1-MT2",
        "Gate pulse triggers conduction",
        "Conducts in the present polarity",
        "At current zero it turns off",
        "Next half-cycle triggers again as needed",
      ],
      microscopicExplanation: "The TRIAC is effectively two SCRs in inverse parallel; the gate triggers the conducting quadrant, and the device commutates off at each AC zero-crossing.",
    },
    construction: {
      internalParts: [
        { name: "Dual p-n-p-n", function: "Bidirectional switch", material: "Silicon" },
        { name: "Gate", function: "Common trigger", material: "Tinned lead" },
        { name: "MT1/MT2", function: "Main terminals", material: "Doped silicon" },
      ],
    },
    types: {
      types: [
        { name: "Standard TRIAC", description: "General AC control.", applications: ["Dimmers", "Heaters"] },
        { name: "Snubberless TRIAC", description: "Tolerates high dv/dt.", applications: ["Inductive loads"] },
        { name: "Logic-Level TRIAC", description: "Low gate trigger.", applications: ["MCU control"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Phase Control", formula: "P_avg ∝ (1 + cos α)/2", description: "Average power vs firing angle.", variables: [{ symbol: "α", name: "Firing angle", unit: "°" }], example: "α=90° → 50% power" },
      ],
    },
    specifications: {
      specifications: [
        { name: "V_DRMM", typicalValues: "400V to 800V", notes: "Peak off-state" },
        { name: "I_T(RMS)", typicalValues: "1A to 40A", notes: "Load current" },
        { name: "I_GT", typicalValues: "5mA to 50mA", notes: "Gate trigger" },
        { name: "Commutating dv/dt", typicalValues: "Rated", notes: "Inductive loads need margin" },
      ],
    },
    applications: {
      applications: [
        { category: "Light Dimming", description: "Controls lamp brightness", examples: ["Dimmers", "Mood lighting"] },
        { category: "Motor Speed", description: "Fan and pump control", examples: ["Ceiling fans"] },
        { category: "Heating", description: "Variable AC heat", examples: ["Soldering", "Ovens"] },
      ],
    },
    advantages: { advantages: ["Bidirectional (one device for AC)", "Simple gate trigger", "Cheap", "Good for resistive loads", "Compact", "Mature"] },
    disadvantages: { disadvantages: ["Slower than transistors", "Harmonics and EMI", "dv/dt sensitivity", "Poor for inductive loads (snubber)", "Gate current both polarities", "Not for high frequency"] },
    selection: {
      steps: [
        { step: 1, title: "Voltage Rating", description: "Exceed peak AC with margin." },
        { step: 2, title: "Current Rating", description: "RMS load current with margin." },
        { step: 3, title: "Snubber", description: "Needed for inductive loads." },
        { step: 4, title: "Trigger", description: "Opto-triac or diac trigger." },
      ],
      tips: ["Use snubberless for motors", "Opto-isolate the gate", "Mind commutating dv/dt", "Filter EMI"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Trigger", symptoms: ["No output"], causes: ["No gate pulse"], solution: "Check trigger circuit" },
        { failure: "False Trigger", symptoms: ["Random on"], causes: ["dv/dt", "Noise"], solution: "Snubber; filter" },
        { failure: "Won't Commutate", symptoms: ["Stays on"], causes: ["Inductive load"], solution: "Snubberless TRIAC" },
      ],
    },
    history: {
      invention: {
        year: 1963,
        inventor: "Frank W. Gutzwiller (General Electric)",
        discovery: "The TRIAC was developed as a bidirectional AC switch building on SCR technology.",
        evolution: [
          { year: 1963, event: "First TRIAC" },
          { year: 1970, event: "Ubiquitous in dimmers" },
          { year: 2000, event: "Snubberless types for motors" },
        ],
      },
    },
    safety: {
      voltageSafety: "Mains voltage; isolation required.",
      currentSafety: "High current; fusing.",
      thermalSafety: "Heatsink for power.",
      handling: "ESD care.",
      storage: "Anti-static, dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "TRIAC", definition: "Triode for Alternating Current; bidirectional thyristor." },
        { term: "MT1/MT2", definition: "Main terminals of a TRIAC." },
        { term: "Commutation", definition: "Turn-off at current zero-crossing." },
        { term: "Snubberless", definition: "Tolerates high dv/dt without snubber." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a TRIAC?", answer: "A bidirectional thyristor that switches AC in both directions with one gate." },
        { question: "TRIAC vs SCR?", answer: "TRIAC conducts both polarities; SCR only one." },
      ],
      intermediate: [
        { question: "Why snubber for inductive loads?", answer: "Inductive current lags voltage, preventing natural commutation and causing dv/dt false triggering." },
        { question: "How control power?", answer: "By delaying the firing angle in each half-cycle (phase control)." },
      ],
      advanced: [
        { question: "Why not use TRIAC for motors always?", answer: "Commutation and EMI issues; IGBTs are better for precise motor control." },
      ],
      expert: [
        { question: "How reduce TRIAC EMI?", answer: "Use zero-crossing switching for resistive loads and snubbers plus filtering for phase control." },
      ],
    },
    mcqs: {
      questions: [
        { question: "TRIAC conducts:", options: ["One direction", "Both directions", "Only DC", "Never"], correctAnswer: 1, explanation: "Bidirectional AC switch.", difficulty: "beginner" },
        { question: "Used mainly for:", options: ["DC motors", "AC power control", "RF", "Audio"], correctAnswer: 1, explanation: "AC dimming/motor control.", difficulty: "beginner" },
        { question: "Turns off at:", options: ["Gate low", "Current zero", "Voltage peak", "Light"], correctAnswer: 1, explanation: "Commutates at zero-crossing.", difficulty: "intermediate" },
        { question: "Inductive loads need:", options: ["No snubber", "Snubber", "Bigger gate", "Nothing"], correctAnswer: 1, explanation: "Snubber for commutation.", difficulty: "advanced" },
        { question: "Trigger is via:", options: ["Anode", "Gate pulse", "Light", "Base"], correctAnswer: 1, explanation: "Gate triggers conduction.", difficulty: "beginner" },
      ],
    },
    references: {
      references: [
        { title: "TRIAC Application Note", author: "STMicroelectronics", year: 2020, url: "", type: "datasheet" },
        { title: "Power Electronics", author: "Mohan, Undeland, Robbins", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "thyristor", relationship: "Unidirectional counterpart" },
        { id: "diac", relationship: "Common TRIAC trigger" },
        { id: "igbt", relationship: "Alternative AC switch" },
        { id: "resistor", relationship: "Gate/snubber resistors" },
      ],
    },
  },

  diac: {
    overview: {
      whatIsIt: "A DIAC is a bidirectional trigger diode that conducts abruptly when its breakover voltage is exceeded in either direction, used to trigger TRIACs.",
      whyExists: "DIACs provide a symmetric trigger point, improving TRIAC firing symmetry in AC controllers.",
      whereUsed: "They are used in lamp dimmers and motor speed controls as TRIAC gate triggers.",
    },
    working: {
      workingPrinciple: "Below the breakover voltage the DIAC is off (high resistance). Once exceeded, it switches to a low-voltage conducting state until current falls below holding.",
      steps: [
        "Voltage rises across the DIAC",
        "Below breakover it stays off",
        "At breakover voltage it switches on",
        "A trigger pulse flows to the TRIAC gate",
        "Current drops after firing; DIAC resets",
      ],
      microscopicExplanation: "The p-n-p-n symmetric structure has no gate; avalanche breakdown at the breakover voltage creates a negative-resistance region that snaps the device into conduction.",
    },
    construction: {
      internalParts: [
        { name: "Symmetric p-n-p-n", function: "Bidirectional breakover", material: "Silicon" },
        { name: "Terminals", function: "Two equal ends", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "Standard DIAC", description: "≈30-40V breakover.", applications: ["Dimmers"] },
        { name: "SIDAC", description: "Higher voltage, latch.", applications: ["Ignition", "Strobes"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Breakover", formula: "V_BO ≈ 30V (typical)", description: "Voltage to trigger.", variables: [{ symbol: "V_BO", name: "Breakover voltage", unit: "V" }], example: "Used to fire TRIAC" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Breakover Voltage", typicalValues: "28V to 40V", notes: "Symmetric" },
        { name: "Breakover Current", typicalValues: "µA to tens µA", notes: "Low" },
        { name: "Holding Current", typicalValues: "mA", notes: "Reset threshold" },
      ],
    },
    applications: {
      applications: [
        { category: "TRIAC Trigger", description: "Symmetric firing", examples: ["Dimmers", "Motor"] },
        { category: "Oscillators", description: "Relaxation oscillators", examples: ["Timers"] },
        { category: "Protection", description: "Overvoltage crowbar", examples: ["Surge"] },
      ],
    },
    advantages: { advantages: ["Symmetric triggering", "Simple two-terminal", "Cheap", "Improves dimmer symmetry", "No gate", "Robust"] },
    disadvantages: { disadvantages: ["Fixed breakover", "Limited current", "Not a power switch", "Temperature drift", "Only a trigger", "Slow vs digital"] },
    selection: {
      steps: [
        { step: 1, title: "Breakover Match", description: "Match TRIAC gate need." },
        { step: 2, title: "Series Resistor", description: "Limit DIAC current." },
        { step: 3, title: "Symmetry", description: "Use for balanced AC firing." },
      ],
      tips: ["Pair with TRIAC in dimmers", "Add series resistor", "Use for symmetry", "SIDAC for higher V"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Trigger", symptoms: ["TRIAC won't fire"], causes: ["Open DIAC"], solution: "Replace" },
        { failure: "Asymmetric", symptoms: ["Uneven dimming"], causes: ["Drift"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Developed alongside TRIACs",
        discovery: "DIACs emerged as trigger devices for AC power control in the 1960s.",
        evolution: [
          { year: 1960, event: "DIAC developed" },
          { year: 1970, event: "Standard in dimmers" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage trigger; safe.",
      currentSafety: "Limit current with resistor.",
      thermalSafety: "Minimal.",
      handling: "ESD care.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Breakover Voltage", definition: "Voltage at which the DIAC switches on." },
        { term: "Negative Resistance", definition: "Voltage drops as current rises during switching." },
        { term: "SIDAC", definition: "Silicon bilateral switch with latch." },
        { term: "Symmetric", definition: "Same behavior in both polarities." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a DIAC?", answer: "A bidirectional trigger diode that fires at a symmetric breakover voltage." },
        { question: "DIAC vs TRIAC?", answer: "DIAC only triggers; TRIAC switches the load." },
      ],
      intermediate: [
        { question: "Why use a DIAC with a TRIAC?", answer: "It gives symmetric breakover firing in both AC half-cycles for even control." },
      ],
      advanced: [
        { question: "What is negative resistance here?", answer: "After breakover, voltage falls while current rises, snapping the device into conduction." },
      ],
      expert: [
        { question: "Modern replacement?", answer: "Microcontroller phase-control with opto-triac often replaces analog DIAC-TRIAC dimmers." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A DIAC is:", options: ["Unidirectional", "Bidirectional trigger", "A transistor", "A diode rectifier"], correctAnswer: 1, explanation: "Fires both polarities.", difficulty: "beginner" },
        { question: "It triggers a:", options: ["MOSFET", "TRIAC", "BJT", "LED"], correctAnswer: 1, explanation: "Common TRIAC trigger.", difficulty: "beginner" },
        { question: "Breakover is about:", options: ["1V", "30V", "100V", "1kV"], correctAnswer: 1, explanation: "Typical ~30V.", difficulty: "intermediate" },
        { question: "DIAC has:", options: ["A gate", "No gate", "Three terminals", "Four layers only"], correctAnswer: 1, explanation: "Two-terminal, no gate.", difficulty: "advanced" },
        { question: "Used in:", options: ["Power supplies", "Dimmers", "Radios", "Clocks"], correctAnswer: 1, explanation: "AC dimmer trigger.", difficulty: "beginner" },
      ],
    },
    references: {
      references: [
        { title: "DIAC/TRIAC Design", author: "STMicroelectronics", year: 2020, url: "", type: "datasheet" },
        { title: "Power Electronics", author: "Mohan, Undeland, Robbins", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "triac", relationship: "Triggered by DIAC" },
        { id: "thyristor", relationship: "Related trigger family" },
        { id: "resistor", relationship: "Series current limit" },
        { id: "capacitor", relationship: "Timing with DIAC oscillator" },
      ],
    },
  },

  phototransistor: {
    overview: {
      whatIsIt: "A phototransistor is a bipolar transistor whose base current is generated by incident light, producing a larger collector current gain than a photodiode.",
      whyExists: "Phototransistors offer higher sensitivity than photodiodes at the cost of speed, simplifying light detection.",
      whereUsed: "They are used in object sensors, encoders, and optical isolation.",
    },
    working: {
      workingPrinciple: "Light falling on the base-collector region generates carriers that act like base current; the transistor's gain amplifies it into a larger collector current.",
      steps: [
        "Photons hit the exposed base region",
        "Carriers generated act as base current",
        "Transistor gain amplifies the current",
        "Collector current rises with light",
        "Output is read as current or voltage",
      ],
      microscopicExplanation: "The optical generation in the collector-base depletion region supplies base drive; the transistor's β multiplies it, giving higher responsivity than a bare photodiode.",
    },
    construction: {
      internalParts: [
        { name: "Photosensitive Base", function: "Converts light", material: "Silicon" },
        { name: "Collector/Emitter", function: "Amplify and output", material: "Doped silicon" },
        { name: "Lens/Window", function: "Focus light", material: "Epoxy" },
      ],
    },
    types: {
      types: [
        { name: "NPN Phototransistor", description: "Common type.", applications: ["Sensors"] },
        { name: "Darlington Phototransistor", description: "Higher gain.", applications: ["Low light"] },
        { name: "Photodarlington", description: "Very high sensitivity.", applications: ["Ambient light"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Output Current", formula: "I_C ≈ β × I_ph", description: "Gain multiplies photocurrent.", variables: [{ symbol: "I_C", name: "Collector current", unit: "A" }, { symbol: "β", name: "Gain", unit: "dimensionless" }, { symbol: "I_ph", name: "Photocurrent", unit: "A" }], example: "β=100 amplifies small I_ph" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Spectral Range", typicalValues: "400nm to 1100nm", notes: "Silicon" },
        { name: "Gain", typicalValues: "20 to 1000", notes: "Darlington higher" },
        { name: "Response Time", typicalValues: "µs to ms", notes: "Slower than photodiode" },
        { name: "Dark Current", typicalValues: "nA", notes: "Lower is better" },
      ],
    },
    applications: {
      applications: [
        { category: "Object Detection", description: "Presence/position", examples: ["Proximity", "Counters"] },
        { category: "Encoders", description: "Slot/reflective", examples: ["Rotary", "Linear"] },
        { category: "Optical Isolation", description: "Coupled with LED", examples: ["Optocouplers"] },
      ],
    },
    advantages: { advantages: ["Higher sensitivity than photodiode", "Built-in gain (no amp needed)", "Simple two/three terminals", "Cheap", "Good for presence sensing", "Compact"] },
    disadvantages: { disadvantages: ["Slower than photodiode", "Gain varies with temp", "Less linear", "More noise", "Larger dark current", "Narrower bandwidth"] },
    selection: {
      steps: [
        { step: 1, title: "Sensitivity Need", description: "Darlington for low light." },
        { step: 2, title: "Speed", description: "Photodiode if fast needed." },
        { step: 3, title: "Bias", description: "Collector load resistor." },
      ],
      tips: ["Use with IR LED for slotted sensors", "Add ambient shielding", "Darlington for faint light", "Photodiode for speed"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Response", symptoms: ["No output"], causes: ["No light", "Wiring"], solution: "Check optics" },
        { failure: "Saturation", symptoms: ["Flat output"], causes: ["Too bright"], solution: "Attenuate" },
        { failure: "Drift", symptoms: ["Unstable"], causes: ["Temp", "Ambient"], solution: "Shield; compensate" },
      ],
    },
    history: {
      invention: {
        year: 1950,
        inventor: "Evolved with photodiodes/transistors",
        discovery: "Phototransistors combined photodiode and transistor functions as optoelectronics matured.",
        evolution: [
          { year: 1950, event: "Early phototransistors" },
          { year: 1970, event: "Common in sensors" },
          { year: 2000, event: "Miniature SMD types" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Low current.",
      thermalSafety: "Minimal.",
      handling: "ESD care.",
      storage: "Anti-static, dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Photocurrent", definition: "Light-generated current acting as base drive." },
        { term: "Photodarlington", definition: "Two-stage phototransistor for high gain." },
        { term: "Optocoupler", definition: "LED-phototransistor pair for isolation." },
        { term: "Response Time", definition: "Speed of light-to-current conversion." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a phototransistor?", answer: "A transistor whose base current is produced by light, giving amplified output." },
        { question: "Phototransistor vs photodiode?", answer: "Phototransistor has built-in gain (slower); photodiode is faster and linear." },
      ],
      intermediate: [
        { question: "Why higher sensitivity?", answer: "The transistor's β multiplies the small photocurrent." },
      ],
      advanced: [
        { question: "When prefer photodiode?", answer: "When speed, linearity, or low noise matter more than raw sensitivity." },
      ],
      expert: [
        { question: "How use in an optocoupler?", answer: "LED on the input side, phototransistor on the output side, with isolation between." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A phototransistor outputs:", options: ["Voltage only", "Amplified current", "Light", "Sound"], correctAnswer: 1, explanation: "Gain amplifies photocurrent.", difficulty: "beginner" },
        { question: "Compared to photodiode it is:", options: ["Faster", "Slower", "Same speed", "Noiseless"], correctAnswer: 1, explanation: "Slower due to gain/storage.", difficulty: "intermediate" },
        { question: "Light acts as:", options: ["Collector", "Base current", "Emitter", "Gate"], correctAnswer: 1, explanation: "Optical base drive.", difficulty: "beginner" },
        { question: "Darlington gives:", options: ["Lower gain", "Higher gain", "Faster", "Less noise"], correctAnswer: 1, explanation: "Two-stage gain.", difficulty: "advanced" },
        { question: "Used in:", options: ["Optocouplers", "Amplifiers", "Oscillators", "Regulators"], correctAnswer: 0, explanation: "LED-phototransistor isolation.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "Phototransistor Basics", author: "Vishay", year: 2019, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "photodiode", relationship: "Faster, linear alternative" },
        { id: "transistor", relationship: "Same transistor physics" },
        { id: "led", relationship: "Paired in optocouplers" },
        { id: "ir-sensor", relationship: "Core of IR sensors" },
      ],
    },
  },

  ujt: {
    overview: {
      whatIsIt: "A UJT (unijunction transistor) is a three-terminal device with one emitter and two bases, used mainly as a relaxation oscillator and trigger.",
      whyExists: "UJTs provide a simple, stable way to generate timing pulses and trigger thyristors.",
      whereUsed: "They are used in oscillator circuits, timers, and SCR/TRIAC trigger generators.",
    },
    working: {
      workingPrinciple: "When the emitter voltage exceeds a fraction (η) of the interbase voltage, the UJT switches on, lowering emitter resistance and discharging a capacitor in a relaxation oscillator.",
      steps: [
        "Capacitor charges through a resistor",
        "Emitter voltage rises with the capacitor",
        "At η×V_BB the UJT turns on",
        "Emitter discharges the capacitor rapidly",
        "Cycle repeats, producing oscillations",
      ],
      microscopicExplanation: "The emitter-base1 junction is normally reverse biased; once the emitter exceeds the intrinsic standoff voltage, it injects carriers that sharply reduce base resistance, creating negative resistance.",
    },
    construction: {
      internalParts: [
        { name: "N-type Bar", function: "Base resistance", material: "Silicon" },
        { name: "Emitter p-n Junction", function: "Trigger point", material: "P silicon" },
        { name: "Base1/Base2 Contacts", function: "Terminals", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "Standard UJT", description: "Relaxation oscillator.", applications: ["Timers", "Triggers"] },
        { name: "Programmable UJT (PUT)", description: "Adjustable parameters.", applications: ["Flexible timers"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Standoff Voltage", formula: "V_P = η × V_BB + V_D", description: "Emitter firing threshold.", variables: [{ symbol: "η", name: "Intrinsic standoff", unit: "dimensionless" }, { symbol: "V_BB", name: "Interbase voltage", unit: "V" }], example: "η≈0.6 typical" },
        { name: "Oscillation Period", formula: "T ≈ R × C × ln(1/(1-η))", description: "Relaxation period.", variables: [{ symbol: "R", name: "Charge resistor", unit: "Ω" }, { symbol: "C", name: "Timing cap", unit: "F" }], example: "Sets frequency" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Intrinsic Standoff η", typicalValues: "0.5 to 0.8", notes: "Device parameter" },
        { name: "Interbase Resistance", typicalValues: "4kΩ to 10kΩ", notes: "R_BB" },
        { name: "Peak Current", typicalValues: "µA", notes: "Low" },
        { name: "Valley Current", typicalValues: "mA", notes: "Hold-on" },
      ],
    },
    applications: {
      applications: [
        { category: "Relaxation Oscillator", description: "Generates sawtooth/pulse", examples: ["Timers", "Beepers"] },
        { category: "SCR Trigger", description: "Fires thyristors", examples: ["Phase control"] },
        { category: "Timing", description: "Simple delays", examples: ["Flashers"] },
      ],
    },
    advantages: { advantages: ["Simple oscillator", "Stable timing", "Low cost", "Easy to design", "Good trigger source", "Robust"] },
    disadvantages: { disadvantages: ["Obsolete vs IC timers", "Fixed η per device", "Limited frequency range", "Temperature drift", "Not for precision", "Large vs IC"] },
    selection: {
      steps: [
        { step: 1, title: "Pick η", description: "Sets firing threshold." },
        { step: 2, title: "Choose R, C", description: "Set frequency." },
        { step: 3, title: "Verify Trigger", description: "Ensure enough current." },
      ],
      tips: ["Use PUT for programmability", "555 replaces in many designs", "Stable supply improves timing", "Snub base2 resistor"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Oscillation", symptoms: ["Flat output"], causes: ["R too large", "Wrong C"], solution: "Adjust R/C" },
        { failure: "Wrong Freq", symptoms: ["Off calibration"], causes: ["Drift"], solution: "Recalc; stabilize V_BB" },
      ],
    },
    history: {
      invention: {
        year: 1948,
        inventor: "General Electric researchers",
        discovery: "The UJT was developed as a simple oscillator/trigger device in the late 1940s.",
        evolution: [
          { year: 1948, event: "UJT invented" },
          { year: 1960, event: "Widely used in triggers" },
          { year: 1980, event: "Largely replaced by 555/ICs" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Low current.",
      thermalSafety: "Minimal.",
      handling: "ESD care.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Intrinsic Standoff η", definition: "Fraction of V_BB at which the emitter fires." },
        { term: "Relaxation Oscillator", definition: "Circuit charging/discharging a capacitor to make pulses." },
        { term: "PUT", definition: "Programmable UJT; adjustable parameters." },
        { term: "Negative Resistance", definition: "Emitter resistance drops as current rises." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a UJT?", answer: "A three-terminal device used mainly as a relaxation oscillator and trigger." },
        { question: "What does η represent?", answer: "The intrinsic standoff ratio setting the firing threshold." },
      ],
      intermediate: [
        { question: "How does it oscillate?", answer: "A capacitor charges until the emitter fires the UJT, discharging it, then recharges." },
        { question: "Why largely obsolete?", answer: "IC timers like the 555 are more flexible and precise." },
      ],
      advanced: [
        { question: "How trigger an SCR with UJT?", answer: "The UJT pulse at base1 drives the SCR gate through a pulse transformer or resistor." },
      ],
      expert: [
        { question: "When still use a UJT?", answer: "In simple, robust, low-cost trigger circuits where an IC is unnecessary." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A UJT has:", options: ["One base", "Two bases", "Three bases", "No base"], correctAnswer: 1, explanation: "Base1 and Base2.", difficulty: "beginner" },
        { question: "Main use:", options: ["Amplifier", "Relaxation oscillator", "Rectifier", "Filter"], correctAnswer: 1, explanation: "Oscillator/trigger.", difficulty: "beginner" },
        { question: "Firing threshold depends on:", options: ["η and V_BB", "Only R", "Only C", "Temperature only"], correctAnswer: 0, explanation: "V_P = ηV_BB + V_D.", difficulty: "intermediate" },
        { question: "Frequency set by:", options: ["L only", "R and C", "V only", "β"], correctAnswer: 1, explanation: "RC timing.", difficulty: "intermediate" },
        { question: "Largely replaced by:", options: ["Transistor", "555 timer", "Diode", "Relay"], correctAnswer: 1, explanation: "IC timers.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "UJT Application Note", author: "ON Semiconductor", year: 2018, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "555-timer", relationship: "Modern replacement" },
        { id: "thyristor", relationship: "Triggered by UJT" },
        { id: "capacitor", relationship: "Timing capacitor" },
        { id: "resistor", relationship: "Timing/charge resistor" },
      ],
    },
  },

  "tunnel-diode": {
    overview: {
      whatIsIt: "A tunnel diode (Esaki diode) is a heavily doped p-n junction exhibiting negative resistance due to quantum tunneling, enabling very high-frequency oscillators.",
      whyExists: "Its negative-resistance region allows ultra-fast oscillators and amplifiers at microwave frequencies.",
      whereUsed: "They are used in microwave oscillators, amplifiers, and high-speed switching.",
    },
    working: {
      workingPrinciple: "Heavy doping makes the depletion region extremely thin, so carriers tunnel through it. The I-V curve has a region where current decreases as voltage increases (negative differential resistance).",
      steps: [
        "Low forward bias: carriers tunnel (current rises)",
        "Peak current reached at V_p",
        "Further bias: tunneling reduces (current falls)",
        "Negative-resistance region between V_p and V_v",
        "Beyond valley, normal diode conduction resumes",
      ],
      microscopicExplanation: "Quantum mechanical tunneling through the thin barrier dominates at low bias; as bias increases the alignment of states shifts, reducing the tunnel current and creating the negative-resistance valley.",
    },
    construction: {
      internalParts: [
        { name: "Heavily Doped Junction", function: "Enables tunneling", material: "Ge, GaAs, or Si" },
        { name: "Terminals", function: "Connect", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "Germanium Tunnel Diode", description: "Classic type.", applications: ["Oscillators"] },
        { name: "GaAs Tunnel Diode", description: "Higher frequency.", applications: ["Microwave"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Negative Resistance", formula: "R_d = dV/dI < 0 (in valley)", description: "Region of negative differential resistance.", variables: [{ symbol: "R_d", name: "Differential resistance", unit: "Ω" }], example: "Used for oscillation" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Peak Current I_p", typicalValues: "mA", notes: "At V_p" },
        { name: "Peak Voltage V_p", typicalValues: "50mV to 100mV", notes: "Low" },
        { name: "Valley Voltage V_v", typicalValues: "300mV to 500mV", notes: "Beyond peak" },
        { name: "Frequency", typicalValues: "GHz", notes: "Very fast" },
      ],
    },
    applications: {
      applications: [
        { category: "Microwave Oscillator", description: "Generates GHz signals", examples: ["Local oscillators"] },
        { category: "Amplifier", description: "Negative-resistance amp", examples: ["Low-noise"] },
        { category: "High-Speed Switch", description: "Fast logic", examples: ["Legacy"] },
      ],
    },
    advantages: { advantages: ["Extremely fast (GHz)", "Low noise", "Operates at room temp", "Simple two-terminal", "Stable negative resistance", "Low voltage"] },
    disadvantages: { disadvantages: ["Low voltage/power", "Hard to bias", "Sensitive to parameters", "Obsolete vs transistors", "Limited power", "Specialized use"] },
    selection: {
      steps: [
        { step: 1, title: "Frequency Need", description: "GHz oscillators." },
        { step: 2, title: "Bias Point", description: "Set in negative-resistance region." },
        { step: 3, title: "Matching", description: "RF matching network." },
      ],
      tips: ["Use for microwave sources", "Careful bias stability", "Pair with resonant tank", "Largely legacy"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Oscillation", symptoms: ["No output"], causes: ["Wrong bias", "No tank"], solution: "Adjust bias; add resonator" },
        { failure: "Drift", symptoms: ["Freq shift"], causes: ["Temp", "Bias"], solution: "Stabilize" },
      ],
    },
    history: {
      invention: {
        year: 1957,
        inventor: "Leo Esaki",
        discovery: "Esaki discovered the tunneling effect in heavily doped junctions, earning the 1973 Nobel Prize.",
        evolution: [
          { year: 1957, event: "Tunnel diode invented" },
          { year: 1973, event: "Nobel Prize to Esaki" },
          { year: 1980, event: "Largely superseded by transistors" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Low current.",
      thermalSafety: "Minimal.",
      handling: "ESD care.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Negative Resistance", definition: "Current falls as voltage rises in a region." },
        { term: "Tunneling", definition: "Quantum crossing of a barrier without energy gain." },
        { term: "Peak/Valley", definition: "Points bounding the negative-resistance region." },
        { term: "Esaki Diode", definition: "Another name for tunnel diode." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a tunnel diode?", answer: "A heavily doped diode with a negative-resistance region from quantum tunneling." },
        { question: "Why is it fast?", answer: "Tunneling is instantaneous; no carrier storage." },
      ],
      intermediate: [
        { question: "What is negative resistance?", answer: "A region where increasing voltage decreases current, enabling oscillation." },
        { question: "Who discovered it?", answer: "Leo Esaki, who won a Nobel Prize for the tunneling effect." },
      ],
      advanced: [
        { question: "Why obsolete?", answer: "Modern transistors and MMICs handle GHz with more power and control." },
      ],
      expert: [
        { question: "How build an oscillator?", answer: "Bias in the negative-resistance region and add a resonant tank; the device sustains oscillation." },
      ],
    },
    mcqs: {
      questions: [
        { question: "Tunnel diode shows:", options: ["Positive resistance only", "Negative resistance", "No conduction", "Zener effect"], correctAnswer: 1, explanation: "Negative differential resistance.", difficulty: "beginner" },
        { question: "Mechanism is:", options: ["Avalanche", "Quantum tunneling", "Thermal", "Capacitive"], correctAnswer: 1, explanation: "Quantum tunneling.", difficulty: "intermediate" },
        { question: "Used at:", options: ["Audio", "GHz microwave", "DC", "kHz"], correctAnswer: 1, explanation: "Microwave frequencies.", difficulty: "intermediate" },
        { question: "Discovered by:", options: ["Shockley", "Esaki", "Bardeen", "Zener"], correctAnswer: 1, explanation: "Leo Esaki.", difficulty: "advanced" },
        { question: "Now mostly:", options: ["Ubiquitous", "Obsolete/legacy", "Growing", "Banned"], correctAnswer: 1, explanation: "Superseded by transistors.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Tunnel Diode Theory", author: "IEEE", year: 2010, url: "", type: "book" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "diode", relationship: "Specialized diode" },
        { id: "varactor-diode", relationship: "Another microwave diode" },
        { id: "transistor", relationship: "Superseded it for most uses" },
        { id: "capacitor", relationship: "Resonant tank element" },
      ],
    },
  },

  "varactor-diode": {
    overview: {
      whatIsIt: "A varactor (varicap) diode is a reverse-biased p-n junction whose depletion capacitance varies with applied voltage, acting as a voltage-controlled capacitor.",
      whyExists: "Varactors provide electronic tuning without mechanical parts, essential for RF and PLL circuits.",
      whereUsed: "They are used in voltage-controlled oscillators, tuners, and frequency synthesizers.",
    },
    working: {
      workingPrinciple: "Under reverse bias the depletion region widens as voltage increases, reducing junction capacitance (C ∝ 1/√(V + V0)). This makes the diode a voltage-tuned capacitor.",
      steps: [
        "Diode is reverse biased",
        "Reverse voltage widens the depletion region",
        "Wider region lowers junction capacitance",
        "Capacitance tracks the control voltage",
        "Used in resonant tanks for tuning",
      ],
      microscopicExplanation: "The reverse-biased junction forms a voltage-dependent capacitor; the depletion width sets the plate separation, so C decreases with reverse voltage following the abrupt/junction grading law.",
    },
    construction: {
      internalParts: [
        { name: "p-n Junction", function: "Voltage-dependent C", material: "Silicon or GaAs" },
        { name: "Terminals", function: "Connect (cathode/anode)", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "Abrupt Varactor", description: "Steep C-V curve.", applications: ["Wide tuning"] },
        { name: "Hyperabrupt Varactor", description: "Very steep; linear tuning.", applications: ["VCOs"] },
        { name: "GaAs Varactor", description: "Low loss at RF.", applications: ["Microwave"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Junction Capacitance", formula: "C_j = C_0 / (1 + V_R/V0)^n", description: "Capacitance vs reverse voltage.", variables: [{ symbol: "C_j", name: "Junction capacitance", unit: "pF" }, { symbol: "V_R", name: "Reverse voltage", unit: "V" }, { symbol: "n", name: "Grading coefficient", unit: "dimensionless" }], example: "Higher V_R → lower C" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Capacitance Range", typicalValues: "1pF to 100pF", notes: "At bias" },
        { name: "Tuning Ratio", typicalValues: "2:1 to 10:1", notes: "C_max/C_min" },
        { name: "Q Factor", typicalValues: "High at RF", notes: "Low loss" },
        { name: "Reverse Voltage", typicalValues: "Up to 30V", notes: "Max bias" },
      ],
    },
    applications: {
      applications: [
        { category: "VCO", description: "Voltage-controlled oscillator", examples: ["PLL", "Synthesizers"] },
        { category: "Tuning", description: "Electronic tuners", examples: ["Radios", "TV"] },
        { category: "Frequency Modulation", description: "FM via bias", examples: ["Comms"] },
      ],
    },
    advantages: { advantages: ["Electronic tuning", "No moving parts", "Fast response", "Small and cheap", "Wide tuning range", "Low power"] },
    disadvantages: { disadvantages: ["Non-linear C-V", "Limited Q at high freq", "Sensitive to bias noise", "Small capacitance", "Reverse-bias only", "Temperature drift"] },
    selection: {
      steps: [
        { step: 1, title: "Tuning Range", description: "Pick C range and ratio." },
        { step: 2, title: "Q and Loss", description: "Higher Q for low phase noise." },
        { step: 3, title: "Bias Circuit", description: "Clean, filtered control voltage." },
      ],
      tips: ["Use hyperabrupt for linear tuning", "Filter the control line", "Keep reverse biased", "Match to tank"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Tuning", symptoms: ["Fixed freq"], causes: ["Forward biased", "Open"], solution: "Check bias" },
        { failure: "Phase Noise", symptoms: ["Jittery"], causes: ["Bias noise"], solution: "Filter control" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Developed with solid-state RF",
        discovery: "Varactor diodes became key for electronic tuning as RF electronics advanced in the 1960s.",
        evolution: [
          { year: 1960, event: "Varactors for tuning" },
          { year: 1980, event: "Hyperabrupt types" },
          { year: 2000, event: "Integrated in RF ICs" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Keep reverse biased; limit current.",
      thermalSafety: "Minimal.",
      handling: "ESD care.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Varicap", definition: "Another name for varactor." },
        { term: "Tuning Ratio", definition: "Ratio of maximum to minimum capacitance." },
        { term: "Hyperabrupt", definition: "Junction with very steep C-V for linear tuning." },
        { term: "VCO", definition: "Voltage-controlled oscillator using a varactor." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a varactor?", answer: "A reverse-biased diode whose capacitance changes with voltage—a voltage-controlled capacitor." },
        { question: "Why reverse bias?", answer: "Reverse bias sets the depletion width, which sets the capacitance." },
      ],
      intermediate: [
        { question: "How used in a VCO?", answer: "The varactor is part of the resonant tank; control voltage sets the frequency." },
        { question: "What is tuning ratio?", answer: "The ratio of maximum to minimum capacitance across the bias range." },
      ],
      advanced: [
        { question: "Why hyperabrupt?", answer: "Its steep C-V gives more linear frequency-vs-voltage tuning." },
      ],
      expert: [
        { question: "How reduce VCO phase noise?", answer: "Use a high-Q varactor, filter the control line, and stabilize the bias and supply." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A varactor acts as a:", options: ["Resistor", "Voltage-controlled capacitor", "Inductor", "Switch"], correctAnswer: 1, explanation: "Voltage-tuned capacitor.", difficulty: "beginner" },
        { question: "Increasing reverse bias:", options: ["Raises C", "Lowers C", "No effect", "Reverses"], correctAnswer: 1, explanation: "Wider depletion → lower C.", difficulty: "intermediate" },
        { question: "Used in:", options: ["VCO", "Rectifier", "Amplifier", "LED"], correctAnswer: 0, explanation: "Tuning oscillators.", difficulty: "beginner" },
        { question: "Hyperabrupt gives:", options: ["Lower Q", "Linear tuning", "Higher V", "Less C"], correctAnswer: 1, explanation: "Steeper, more linear C-V.", difficulty: "advanced" },
        { question: "Must be:", options: ["Forward biased", "Reverse biased", "Zener", "Shorted"], correctAnswer: 1, explanation: "Reverse bias sets capacitance.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "Varactor Application", author: "Skyworks", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "diode", relationship: "Specialized junction" },
        { id: "capacitor", relationship: "Voltage-controlled version" },
        { id: "555-timer", relationship: "VCO applications" },
        { id: "crystal-oscillator", relationship: "Alternative frequency source" },
      ],
    },
  },

  "voltage-regulator": {
    overview: {
      whatIsIt: "A voltage regulator maintains a constant output voltage despite variations in input voltage and load current, using linear or switching techniques.",
      whyExists: "Regulators protect circuits from supply fluctuations and provide stable reference voltages for reliable operation.",
      whereUsed: "They are used in virtually every powered electronic device, from phones to industrial systems.",
    },
    working: {
      workingPrinciple: "A linear regulator drops excess voltage across a pass element; a switching regulator chops and filters energy to regulate efficiently. Feedback compares output to a reference and adjusts control.",
      steps: [
        "Output is sampled and compared to a reference",
        "Error amplifier drives the pass element",
        "Pass element adjusts to hold output constant",
        "Feedback continuously corrects deviations",
        "Load/input changes are rejected",
      ],
      microscopicExplanation: "A bandgap reference provides a stable voltage; the feedback loop adjusts the series pass device (BJT/MOSFET) or the duty cycle to keep V_out fixed.",
    },
    construction: {
      internalParts: [
        { name: "Reference", function: "Stable voltage", material: "Bandgap circuit" },
        { name: "Error Amplifier", function: "Compares and drives", material: "Silicon" },
        { name: "Pass Element", function: "Drops/regulates", material: "Transistor" },
        { name: "Feedback Divider", function: "Sets ratio", material: "Resistors" },
      ],
    },
    types: {
      types: [
        { name: "Linear (LDO)", description: "Simple, low noise, low efficiency.", applications: ["Sensors", "Analog"] },
        { name: "Switching Buck", description: "Step-down, efficient.", applications: ["Power supplies"] },
        { name: "Switching Boost", description: "Step-up.", applications: ["Battery"] },
        { name: "Shunt Regulator", description: "Zener-like active.", applications: ["References"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Linear Efficiency", formula: "η = V_out / V_in", description: "Efficiency of a linear regulator.", variables: [{ symbol: "η", name: "Efficiency", unit: "%" }, { symbol: "V_out", name: "Output", unit: "V" }, { symbol: "V_in", name: "Input", unit: "V" }], example: "5V from 12V → 42%" },
        { name: "Dropout", formula: "V_dropout = V_in(min) - V_out", description: "Minimum headroom needed.", variables: [{ symbol: "V_dropout", name: "Dropout", unit: "V" }], example: "LDO ~0.2V" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Output Voltage", typicalValues: "1.2V to 24V", notes: "Fixed or adjustable" },
        { name: "Output Current", typicalValues: "100mA to 10A", notes: "By type" },
        { name: "Dropout Voltage", typicalValues: "0.1V to 2V", notes: "LDO very low" },
        { name: "Line/Load Regulation", typicalValues: "mV", notes: "Stability" },
        { name: "Ripple Rejection", typicalValues: "40 to 80 dB", notes: "PSRR" },
        { name: "Efficiency", typicalValues: "40% (linear) to 95% (switcher)", notes: "Key tradeoff" },
      ],
    },
    applications: {
      applications: [
        { category: "Power Supplies", description: "Stable rails", examples: ["PCB", "Modules"] },
        { category: "Reference", description: "Clean voltage", examples: ["ADC", "Sensors"] },
        { category: "Battery Systems", description: "Constant output", examples: ["Portable"] },
        { category: "Protection", description: "Overvoltage/overcurrent", examples: ["Loads"] },
      ],
    },
    advantages: { advantages: ["Stable output", "Simple (linear)", "Low noise (LDO)", "Protection features", "Wide availability", "Good PSRR"] },
    disadvantages: { disadvantages: ["Linear wastes power as heat", "Needs headroom (dropout)", "Switchers have ripple/EMI", "More parts (switcher)", "Cost", "Thermal management"] },
    selection: {
      steps: [
        { step: 1, title: "Linear or Switching?", description: "Low noise vs efficiency." },
        { step: 2, title: "Voltage/Current", description: "Match output needs." },
        { step: 3, title: "Dropout", description: "Ensure V_in headroom (LDO)." },
        { step: 4, title: "Thermal", description: "P_diss = (V_in-V_out)×I." },
      ],
      tips: ["LDO for analog/RF", "Switcher for efficiency", "Check PSRR", "Heatsink for linear power"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Oscillation", symptoms: ["Unstable output"], causes: ["Bad caps", "Layout"], solution: "Add capacitance; fix layout" },
        { failure: "Thermal Shutdown", symptoms: ["Drops out"], causes: ["Overheat"], solution: "Heatsink; reduce P_diss" },
        { failure: "Dropout", symptoms: ["Low V_out"], causes: ["V_in too low"], solution: "Raise input" },
      ],
    },
    history: {
      invention: {
        year: 1970,
        inventor: "Linear Technology, National Semiconductor era",
        discovery: "Integrated voltage regulators like the 78xx series standardized power in the 1970s.",
        evolution: [
          { year: 1970, event: "78xx/79xx three-terminal regulators" },
          { year: 1980, event: "LDO regulators" },
          { year: 1990, event: "High-efficiency switchers" },
        ],
      },
    },
    safety: {
      voltageSafety: "Observe max input; overvoltage damages.",
      currentSafety: "Limit load; protect with fuse.",
      thermalSafety: "Heatsinks for linear regulators.",
      handling: "ESD care.",
      storage: "Dry, anti-static.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "LDO", definition: "Low-dropout linear regulator." },
        { term: "PSRR", definition: "Power Supply Rejection Ratio; ripple rejection." },
        { term: "Dropout", definition: "Minimum input-output voltage difference." },
        { term: "Line Regulation", definition: "Output change with input variation." },
        { term: "Load Regulation", definition: "Output change with load variation." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a regulator do?", answer: "It keeps output voltage constant despite input and load changes." },
        { question: "Linear vs switching?", answer: "Linear is simple/low-noise but inefficient; switching is efficient but noisier." },
      ],
      intermediate: [
        { question: "What is dropout?", answer: "The minimum input-output voltage difference the regulator needs to regulate." },
        { question: "Why does a linear regulator heat up?", answer: "It dissipates (V_in - V_out) × I as heat." },
      ],
      advanced: [
        { question: "When choose an LDO?", answer: "When low noise/PSRR matters and efficiency is not critical (small headroom)." },
      ],
      expert: [
        { question: "How improve switcher stability?", answer: "Proper output caps with low ESR, good layout, and correct compensation." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A regulator keeps ___ constant.", options: ["Current", "Voltage", "Frequency", "Power"], correctAnswer: 1, explanation: "Output voltage.", difficulty: "beginner" },
        { question: "Linear regulator efficiency is:", options: ["V_out/V_in", "V_in/V_out", "100%", "50% always"], correctAnswer: 0, explanation: "η = V_out/V_in.", difficulty: "intermediate" },
        { question: "LDO means:", options: ["Low dropout", "Low density", "Long delay", "Low duty"], correctAnswer: 0, explanation: "Low-dropout.", difficulty: "beginner" },
        { question: "Switchers are better for:", options: ["Low noise", "Efficiency", "Simplicity", "No EMI"], correctAnswer: 1, explanation: "High efficiency.", difficulty: "intermediate" },
        { question: "Dropout is the:", options: ["Max voltage", "Min V_in-V_out", "Output current", "Ripple"], correctAnswer: 1, explanation: "Minimum headroom.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Linear Regulator Handbook", author: "Analog Devices", year: 2021, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "ldo-regulator", relationship: "Specific low-dropout type" },
        { id: "zener-diode", relationship: "Simple shunt regulator" },
        { id: "capacitor", relationship: "Stabilizing/output caps" },
        { id: "dc-power-supply", relationship: "Built from regulators" },
      ],
    },
  },

  "dc-power-supply": {
    overview: {
      whatIsIt: "A DC power supply converts AC (or another DC) into a stable direct-current output, typically via rectification, filtering, and regulation.",
      whyExists: "Electronic circuits need clean, stable DC at specific voltages to operate reliably.",
      whereUsed: "They power everything from bench equipment to embedded systems and chargers.",
    },
    working: {
      workingPrinciple: "AC is stepped (via transformer), rectified to pulsating DC, smoothed by capacitors, and regulated to a steady DC level.",
      steps: [
        "Transformer sets the voltage level",
        "Rectifier converts AC to pulsating DC",
        "Filter capacitor smooths the ripple",
        "Regulator stabilizes the output",
        "Protection limits fault current",
      ],
      microscopicExplanation: "Rectification uses diodes to pass only one polarity; the reservoir capacitor supplies current between peaks, and the regulator removes residual ripple.",
    },
    construction: {
      internalParts: [
        { name: "Transformer", function: "Voltage scaling/isolation", material: "Laminated steel" },
        { name: "Rectifier", function: "AC to DC", material: "Diodes" },
        { name: "Filter Capacitor", function: "Smooths ripple", material: "Electrolytic" },
        { name: "Regulator", function: "Stabilizes output", material: "IC" },
      ],
    },
    types: {
      types: [
        { name: "Linear Supply", description: "Transformer + linear reg.", applications: ["Bench", "Audio"] },
        { name: "Switching Supply (SMPS)", description: "Efficient, compact.", applications: ["Chargers", "Computers"] },
        { name: "Bench Supply", description: "Adjustable, metered.", applications: ["Lab"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Ripple Voltage", formula: "V_ripple ≈ I_load / (f × C)", description: "Capacitor ripple approximation.", variables: [{ symbol: "V_ripple", name: "Ripple", unit: "V" }, { symbol: "I_load", name: "Load current", unit: "A" }, { symbol: "f", name: "Frequency", unit: "Hz" }, { symbol: "C", name: "Capacitance", unit: "F" }], example: "Bigger C → less ripple" },
        { name: "DC Output (Bridge)", formula: "V_dc ≈ 1.414 × V_rms - 2V_F", description: "Peak minus diode drops.", variables: [{ symbol: "V_dc", name: "DC output", unit: "V" }], example: "12Vrms → ~15.6V" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Output Voltage", typicalValues: "3.3V to 48V", notes: "Fixed/adjustable" },
        { name: "Output Current", typicalValues: "0.5A to 50A", notes: "By supply" },
        { name: "Ripple", typicalValues: "mV to tens mV", notes: "Lower is better" },
        { name: "Efficiency", typicalValues: "60% (linear) to 90% (SMPS)", notes: "Key" },
        { name: "Regulation", typicalValues: "±1%", notes: "Load/line" },
      ],
    },
    applications: {
      applications: [
        { category: "Bench Power", description: "Lab testing", examples: ["Prototyping"] },
        { category: "Embedded", description: "Board rails", examples: ["5V, 3.3V"] },
        { category: "Charging", description: "Battery chargers", examples: ["Phones", "Laptops"] },
        { category: "Industrial", description: "Control power", examples: ["PLC"] },
      ],
    },
    advantages: { advantages: ["Stable clean DC", "Adjustable (bench)", "Isolation (linear)", "Protected outputs", "Wide ranges", "Essential"] },
    disadvantages: { disadvantages: ["Linear supplies heavy/inefficient", "SMPS has EMI", "Cost", "Heat", "Ripple (if poor)", "Size"] },
    selection: {
      steps: [
        { step: 1, title: "Voltage/Current", description: "Match load requirements." },
        { step: 2, title: "Type", description: "Linear for low noise, SMPS for efficiency." },
        { step: 3, title: "Ripple Need", description: "Low ripple for analog." },
        { step: 4, title: "Protection", description: "OVP/OCP/OTP features." },
      ],
      tips: ["SMPS for efficiency", "Linear for sensitive analog", "Check ripple spec", "Use bench for prototyping"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Output", symptoms: ["0V"], causes: ["Fuse", "Fault"], solution: "Check fuse; repair" },
        { failure: "High Ripple", symptoms: ["Noisy"], causes: ["Bad cap"], solution: "Replace capacitor" },
        { failure: "Overheat", symptoms: ["Shutdown"], causes: ["Overload"], solution: "Reduce load" },
      ],
    },
    history: {
      invention: {
        year: 1900,
        inventor: "Evolved with electronics",
        discovery: "Power supplies matured with vacuum tubes and then semiconductors for stable DC.",
        evolution: [
          { year: 1900, event: "Battery/rectifier supplies" },
          { year: 1960, event: "Transistorized supplies" },
          { year: 1980, event: "Switch-mode supplies dominate" },
        ],
      },
    },
    safety: {
      voltageSafety: "Mains inside; qualified service only.",
      currentSafety: "OCP protects; still dangerous.",
      thermalSafety: "Heatsinks; ventilation.",
      handling: "Qualified only for internal repair.",
      storage: "Dry.",
      disposal: "E-waste; recycle metals.",
    },
    glossary: {
      glossary: [
        { term: "Ripple", definition: "Residual AC variation on the DC output." },
        { term: "SMPS", definition: "Switched-mode power supply; efficient." },
        { term: "Rectifier", definition: "Converts AC to DC." },
        { term: "Regulation", definition: "Stability of output under varying conditions." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a DC supply do?", answer: "Converts AC to a stable DC voltage for circuits." },
        { question: "Why filter capacitor?", answer: "It smooths the rectified pulsating DC into steadier DC." },
      ],
      intermediate: [
        { question: "Linear vs SMPS?", answer: "Linear is simple/low-noise but inefficient; SMPS is efficient and compact." },
        { question: "What causes ripple?", answer: "The capacitor discharging between rectified peaks; larger C reduces it." },
      ],
      advanced: [
        { question: "How reduce SMPS EMI?", answer: "Proper filtering, shielding, and layout with good grounding." },
      ],
      expert: [
        { question: "Design a low-noise analog supply?", answer: "Use an SMPS pre-regulator followed by an LDO for low ripple and good efficiency." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A DC supply outputs:", options: ["AC", "Stable DC", "RF", "Pulse"], correctAnswer: 1, explanation: "Stable DC.", difficulty: "beginner" },
        { question: "Ripple is reduced by:", options: ["Smaller cap", "Larger cap", "No rectifier", "Higher freq only"], correctAnswer: 1, explanation: "Bigger filter cap.", difficulty: "intermediate" },
        { question: "SMPS is:", options: ["Inefficient", "Efficient", "Heavy", "Noisy always"], correctAnswer: 1, explanation: "High efficiency.", difficulty: "beginner" },
        { question: "Bridge rectifier output ≈:", options: ["V_rms", "1.414×V_rms", "2×V_rms", "0.5×V_rms"], correctAnswer: 1, explanation: "Peak ≈ √2 × V_rms.", difficulty: "advanced" },
        { question: "Linear supply downside:", options: ["Noise", "Inefficiency/heat", "Size small", "No isolation"], correctAnswer: 1, explanation: "Wastes power as heat.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "Power Supply Design", author: "Texas Instruments", year: 2021, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "voltage-regulator", relationship: "Core of the supply" },
        { id: "rectifier", relationship: "AC-DC conversion" },
        { id: "capacitor", relationship: "Filter smoothing" },
        { id: "transformer", relationship: "Voltage scaling/isolation" },
      ],
    },
  },

  "ac-power-supply": {
    overview: {
      whatIsIt: "An AC power supply provides a controllable alternating-voltage output, either from the mains (via transformer) or synthesized by an inverter/function generator.",
      whyExists: "Many devices and tests require adjustable AC voltage or frequency, such as motors, lamps, and compliance testing.",
      whereUsed: "They are used in labs, motor test benches, and variable-speed drives.",
    },
    working: {
      workingPrinciple: "Mains AC may be transformed and varied (autotransformer/variac); synthesized AC is generated by switching DC into an H-bridge and filtering to a sine wave (inverter).",
      steps: [
        "Input AC is transformed or rectified",
        "For variac: tap adjusts voltage",
        "For inverter: DC is switched into AC",
        "Output is filtered to a sine",
        "Voltage/frequency is controlled",
      ],
      microscopicExplanation: "An inverter uses PWM from an H-bridge to create a synthesized sine; a low-pass filter removes switching harmonics, yielding clean adjustable AC.",
    },
    construction: {
      internalParts: [
        { name: "Transformer/Variac", function: "Adjusts AC voltage", material: "Copper/steel" },
        { name: "Inverter Bridge", function: "DC to AC (synthesized)", material: "MOSFET/IGBT" },
        { name: "Output Filter", function: "Smooths sine", material: "Inductor/cap" },
        { name: "Control", function: "Sets V/f", material: "MCU" },
      ],
    },
    types: {
      types: [
        { name: "Variac Supply", description: "Adjustable transformer.", applications: ["Bench", "Lamps"] },
        { name: "AC Inverter", description: "Synthesized sine.", applications: ["Motor drives"] },
        { name: "Function/AC Source", description: "Precise V/f.", applications: ["Test"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "RMS", formula: "V_rms = V_peak / √2", description: "AC RMS value.", variables: [{ symbol: "V_rms", name: "RMS voltage", unit: "V" }], example: "Sine peak 10V → 7.07Vrms" },
        { name: "Power", formula: "P = V_rms × I_rms × cos φ", description: "AC real power.", variables: [{ symbol: "P", name: "Power", unit: "W" }, { symbol: "cos φ", name: "Power factor", unit: "dimensionless" }], example: "Resistive: cosφ=1" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Output Voltage", typicalValues: "0 to 250V", notes: "Adjustable" },
        { name: "Frequency", typicalValues: "50/60Hz or 10-400Hz", notes: "Synthesized" },
        { name: "Waveform", typicalValues: "Sine, sometimes THD spec", notes: "Low THD better" },
        { name: "Power Rating", typicalValues: "100VA to kVA", notes: "By unit" },
        { name: "Power Factor", typicalValues: "0.5 to 1", notes: "Load dependent" },
      ],
    },
    applications: {
      applications: [
        { category: "Motor Testing", description: "Variable V/f", examples: ["Drives", "Pumps"] },
        { category: "Compliance", description: "Simulate mains", examples: ["IEC tests"] },
        { category: "Lamp/Heater", description: "Variable AC", examples: ["Dimming"] },
        { category: "Lab", description: "Adjustable AC source", examples: ["Education"] },
      ],
    },
    advantages: { advantages: ["Adjustable voltage/frequency", "Isolation (transformer)", "Clean sine (inverter)", "Versatile testing", "Protective features", "Wide use"] },
    disadvantages: { disadvantages: ["Inverters have THD/EMI", "Cost", "Complex (synthesized)", "Efficiency loss", "Heavier (transformer)", "Reactive load issues"] },
    selection: {
      steps: [
        { step: 1, title: "Voltage/Freq Range", description: "Match DUT." },
        { step: 2, title: "Power", description: "Exceed load VA." },
        { step: 3, title: "Waveform Quality", description: "Low THD for sensitive loads." },
        { step: 4, title: "Protection", description: "OVP/OCP/OTP." },
      ],
      tips: ["Variac for simple needs", "Inverter for V/f control", "Check THD", "Mind reactive loads"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Output", symptoms: ["0V"], causes: ["Fuse", "Fault"], solution: "Check fuse" },
        { failure: "Distorted Sine", symptoms: ["THD high"], causes: ["Load", "Filter"], solution: "Reduce load; check filter" },
        { failure: "Overload", symptoms: ["Trip"], causes: ["Excess VA"], solution: "Reduce load" },
      ],
    },
    history: {
      invention: {
        year: 1880,
        inventor: "Evolved with AC systems",
        discovery: "AC supplies grew with the AC power grid and test equipment needs.",
        evolution: [
          { year: 1880, event: "AC distribution" },
          { year: 1960, event: "Variable AC benches" },
          { year: 1990, event: "DSP-based AC sources" },
        ],
      },
    },
    safety: {
      voltageSafety: "Mains/high voltage; isolation required.",
      currentSafety: "High current; fusing.",
      thermalSafety: "Ventilation.",
      handling: "Qualified service.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Variac", definition: "Adjustable autotransformer for AC voltage." },
        { term: "THD", definition: "Total Harmonic Distortion of the waveform." },
        { term: "Inverter", definition: "Converts DC to AC." },
        { term: "Power Factor", definition: "Ratio of real to apparent power." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is an AC supply?", answer: "A source providing adjustable alternating voltage, often variable frequency." },
        { question: "Variac vs inverter?", answer: "Variac transforms mains; inverter synthesizes AC from DC." },
      ],
      intermediate: [
        { question: "What is THD?", answer: "Total harmonic distortion; lower means a cleaner sine wave." },
        { question: "Why V/f control for motors?", answer: "Keeping V/f constant maintains flux and torque across speeds." },
      ],
      advanced: [
        { question: "How synthesize a clean sine?", answer: "PWM H-bridge plus LC filter, with feedback for low THD." },
      ],
      expert: [
        { question: "Reactive load challenges?", answer: "Inductive/capacitive loads cause phase shift and current peaks; size VA accordingly." },
      ],
    },
    mcqs: {
      questions: [
        { question: "AC supply provides:", options: ["DC", "Alternating voltage", "RF", "Pulse"], correctAnswer: 1, explanation: "Adjustable AC.", difficulty: "beginner" },
        { question: "V_rms of 10V peak sine:", options: ["10V", "7.07V", "14.14V", "5V"], correctAnswer: 1, explanation: "10/√2.", difficulty: "intermediate" },
        { question: "Variac is a:", options: ["Inverter", "Autotransformer", "Rectifier", "Regulator"], correctAnswer: 1, explanation: "Adjustable transformer.", difficulty: "beginner" },
        { question: "THD means:", options: ["Total heat dissipation", "Total harmonic distortion", "Time harmonic delay", "Transient high drop"], correctAnswer: 1, explanation: "Waveform distortion.", difficulty: "advanced" },
        { question: "Inverter converts:", options: ["AC to DC", "DC to AC", "AC to AC", "DC to DC"], correctAnswer: 1, explanation: "DC to AC.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "AC Source Design", author: "Chroma/Keysight", year: 2020, url: "", type: "datasheet" },
        { title: "Power Electronics", author: "Mohan, Undeland, Robbins", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "transformer", relationship: "Voltage scaling" },
        { id: "igbt", relationship: "Inverter bridge switches" },
        { id: "dc-power-supply", relationship: "DC counterpart" },
        { id: "voltage-regulator", relationship: "Regulates derived rails" },
      ],
    },
  },

  relay: {
    overview: {
      whatIsIt: "A relay is an electrically operated switch that uses an electromagnet to mechanically open or close contacts, providing isolation between control and load circuits.",
      whyExists: "Relays let a low-power signal switch high-power or high-voltage loads and isolate circuits galvanically.",
      whereUsed: "They are used in automotive systems, industrial control, home appliances, and protection circuits.",
    },
    working: {
      workingPrinciple: "Current through the coil creates a magnetic field that pulls a ferromagnetic armature, moving the contacts to make or break the load circuit.",
      steps: [
        "Control current energizes the coil",
        "Magnetic field attracts the armature",
        "Armature moves the contacts",
        "Load circuit is connected or disconnected",
        "Removing current releases the armature (spring return)",
      ],
      microscopicExplanation: "The coil's ampere-turns magnetize the core; the resulting force overcomes spring tension to actuate the contact, a classic electromechanical energy conversion.",
    },
    construction: {
      internalParts: [
        { name: "Coil", function: "Creates magnetic field", material: "Copper wire" },
        { name: "Armature", function: "Moves contacts", material: "Ferromagnetic metal" },
        { name: "Contacts", function: "Switch the load", material: "Silver alloy" },
        { name: "Spring", function: "Returns armature", material: "Spring steel" },
      ],
    },
    types: {
      types: [
        { name: "Electromechanical (EMR)", description: "Classic coil-actuated.", applications: ["General switching"] },
        { name: "Reed Relay", description: "Fast, small sealed.", applications: ["Test equipment"] },
        { name: "Solid-State Relay", description: "No moving parts.", applications: ["Fast/quiet"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Coil Power", formula: "P = V² / R_coil", description: "Power to energize.", variables: [{ symbol: "P", name: "Power", unit: "W" }, { symbol: "V", name: "Coil voltage", unit: "V" }, { symbol: "R_coil", name: "Coil resistance", unit: "Ω" }], example: "12V, 400Ω → 0.36W" },
        { name: "Pull-in Current", formula: "I = N×I (ampere-turns)", description: "Force to actuate.", variables: [{ symbol: "N", name: "Turns", unit: "dimensionless" }], example: "More turns → less current" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Coil Voltage", typicalValues: "5V, 12V, 24V", notes: "DC common" },
        { name: "Contact Rating", typicalValues: "1A to 30A", notes: "Resistive" },
        { name: "Contact Form", typicalValues: "SPST, SPDT, DPDT", notes: "Configuration" },
        { name: "Switching Time", typicalValues: "ms", notes: "EMR slower" },
        { name: "Life", typicalValues: "10^5 to 10^7 ops", notes: "Mechanical/electrical" },
      ],
    },
    applications: {
      applications: [
        { category: "Load Switching", description: "Control high-power from logic", examples: ["Lamps", "Motors"] },
        { category: "Isolation", description: "Separate control/load", examples: ["MCU to mains"] },
        { category: "Protection", description: "Trip on fault", examples: ["Safety"] },
        { category: "Automotive", description: "Control subsystems", examples: ["ECU"] },
      ],
    },
    advantages: { advantages: ["Galvanic isolation", "High current/voltage switching", "Simple", "Cheap", "No heat in load path (EMR)", "Familiar"] },
    disadvantages: { disadvantages: ["Slow (ms)", "Wear and contact bounce", "Coil power consumption", "Size", "EMI on switching", "Limited life"] },
    selection: {
      steps: [
        { step: 1, title: "Coil Voltage", description: "Match control supply." },
        { step: 2, title: "Contact Rating", description: "Exceed load current/voltage." },
        { step: 3, title: "Form", description: "SPST/SPDT as needed." },
        { step: 4, title: "Flyback Diode", description: "Protect coil driver." },
      ],
      tips: ["Use flyback diode on coil", "Snubber for inductive loads", "SSR for silent/fast", "Derating extends life"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Coil Open", symptoms: ["No click", "No switch"], causes: ["Burnout"], solution: "Replace" },
        { failure: "Contacts Welded", symptoms: ["Stuck on"], causes: ["Arc", "Overload"], solution: "Replace; snubber" },
        { failure: "Contact Bounce", symptoms: ["Glitches"], causes: ["Mechanical"], solution: "Debounce in software" },
      ],
    },
    history: {
      invention: {
        year: 1835,
        inventor: "Joseph Henry (electromagnetic relay)",
        discovery: "Henry built early electromagnetic relays, foundational to the telegraph.",
        evolution: [
          { year: 1835, event: "First practical relay" },
          { year: 1844, event: "Telegraph relays" },
          { year: 1970, event: "SSRs emerge" },
        ],
      },
    },
    safety: {
      voltageSafety: "Contacts switch mains; isolate properly.",
      currentSafety: "Arc risk; rate contacts.",
      thermalSafety: "Overload welds contacts.",
      handling: "Avoid coil overvoltage.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "SPDT", definition: "Single-pole double-throw contact." },
        { term: "Ampere-Turns", definition: "Coil current × turns; sets magnetic force." },
        { term: "Contact Bounce", definition: "Mechanical chatter when contacts close." },
        { term: "SSR", definition: "Solid-state relay; no moving parts." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a relay?", answer: "An electromagnetically operated switch providing isolation between control and load." },
        { question: "Why flyback diode?", answer: "The coil is inductive; the diode clamps the turn-off voltage spike." },
      ],
      intermediate: [
        { question: "EMR vs SSR?", answer: "EMR gives true isolation and no on-state loss; SSR is silent, fast, and long-lived but has leakage and drop." },
        { question: "What is contact bounce?", answer: "Mechanical chatter on closing; needs debouncing in digital circuits." },
      ],
      advanced: [
        { question: "How protect relay contacts?", answer: "Use RC snubbers or TVS for inductive loads to reduce arcing and welding." },
      ],
      expert: [
        { question: "When choose SSR over EMR?", answer: "For silent, fast, high-cycle, or spark-free switching where small leakage/drop is acceptable." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A relay provides:", options: ["Amplification", "Isolation + switching", "Rectification", "Filtering"], correctAnswer: 1, explanation: "Isolated switching.", difficulty: "beginner" },
        { question: "Coil needs a:", options: ["Flyback diode", "Capacitor only", "Resistor only", "Nothing"], correctAnswer: 0, explanation: "Clamps inductive spike.", difficulty: "intermediate" },
        { question: "SPDT means:", options: ["Single throw", "Single-pole double-throw", "Solid state", "Slow turn-off"], correctAnswer: 1, explanation: "One pole, two throws.", difficulty: "beginner" },
        { question: "EMR downside:", options: ["No isolation", "Wear/bounce", "Leakage", "Drop"], correctAnswer: 1, explanation: "Mechanical wear and bounce.", difficulty: "advanced" },
        { question: "Contacts switch:", options: ["Only low voltage", "High power/voltage", "Only DC", "Only signal"], correctAnswer: 1, explanation: "High-power loads.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "Relay Application Guide", author: "Omron", year: 2020, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "electromagnet", relationship: "Coil principle" },
        { id: "transistor", relationship: "Drives the coil" },
        { id: "diode", relationship: "Flyback protection" },
        { id: "switch", relationship: "Solid-state equivalent" },
      ],
    },
  },

  "dc-motor": {
    overview: {
      whatIsIt: "A DC motor converts electrical DC energy into rotational mechanical energy using magnetic fields and commutation.",
      whyExists: "DC motors provide simple, controllable torque and speed for countless mechanical tasks.",
      whereUsed: "They are used in toys, appliances, power tools, robots, and automotive accessories.",
    },
    working: {
      workingPrinciple: "Current in the armature within a stator field produces torque (F = BIL); a commutator switches current direction to keep torque in the same rotational direction.",
      steps: [
        "DC applied to armature via brushes",
        "Current in windings creates force in the field",
        "Rotor experiences torque and spins",
        "Commutator reverses current each half-turn",
        "Back-EMF builds with speed, limiting current",
      ],
      microscopicExplanation: "Lorentz force on current-carrying conductors in the magnetic field produces torque; the commutator ensures the torque direction stays constant as the rotor turns.",
    },
    construction: {
      internalParts: [
        { name: "Armature", function: "Rotating windings", material: "Copper on steel" },
        { name: "Stator Magnet/Field", function: "Provides field", material: "Permanent magnet or coil" },
        { name: "Commutator", function: "Switches current", material: "Copper segments" },
        { name: "Brushes", function: "Feed current", material: "Carbon" },
      ],
    },
    types: {
      types: [
        { name: "Brushed DC", description: "Simple, cheap.", applications: ["Toys", "Tools"] },
        { name: "Brushless DC (BLDC)", description: "Electronic commutation.", applications: ["Drones", "Appliances"] },
        { name: "Coreless", description: "Low inertia.", applications: ["Precision"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Back-EMF", formula: "E = k_e × ω", description: "Speed-proportional voltage.", variables: [{ symbol: "E", name: "Back-EMF", unit: "V" }, { symbol: "ω", name: "Angular speed", unit: "rad/s" }, { symbol: "k_e", name: "Constant", unit: "V·s/rad" }], example: "Faster → higher E" },
        { name: "Torque", formula: "τ = k_t × I", description: "Torque proportional to current.", variables: [{ symbol: "τ", name: "Torque", unit: "N·m" }, { symbol: "I", name: "Current", unit: "A" }], example: "More current → more torque" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Voltage", typicalValues: "3V to 48V", notes: "Common 6/12/24V" },
        { name: "No-Load Speed", typicalValues: "1000 to 20000 rpm", notes: "By size" },
        { name: "Stall Torque", typicalValues: "mN·m to N·m", notes: "Max at stall" },
        { name: "Current", typicalValues: "mA to tens A", notes: "Stall high" },
        { name: "Efficiency", typicalValues: "50% to 90%", notes: "BLDC higher" },
      ],
    },
    applications: {
      applications: [
        { category: "Motion", description: "Rotary actuation", examples: ["Fans", "Pumps"] },
        { category: "Robotics", description: "Wheel/arm drive", examples: ["Cars", "Arms"] },
        { category: "Appliances", description: "Everyday motion", examples: ["Blenders", "Washers"] },
        { category: "Automotive", description: "Accessories", examples: ["Wipers", "Windows"] },
      ],
    },
    advantages: { advantages: ["Simple speed control", "High starting torque", "Inexpensive (brushed)", "Reversible", "Wide speed range", "Robust"] },
    disadvantages: { disadvantages: ["Brush wear (brushed)", "Sparking/EMI", "Commutator maintenance", "Lower efficiency than BLDC", "Acoustic noise", "Bearings wear"] },
    selection: {
      steps: [
        { step: 1, title: "Voltage", description: "Match supply." },
        { step: 2, title: "Torque/Speed", description: "Match mechanical load." },
        { step: 3, title: "Brushed vs BLDC", description: "BLDC for efficiency/life." },
        { step: 4, title: "Driver", description: "PWM for speed control." },
      ],
      tips: ["Use PWM for speed", "BLDC for long life", "Gear down for torque", "Protect against stall current"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Start", symptoms: ["Hum, no spin"], causes: ["Stuck", "Open coil"], solution: "Free; replace" },
        { failure: "Brush Wear", symptoms: ["Sparks, weak"], causes: ["Age"], solution: "Replace brushes/motor" },
        { failure: "Overheat", symptoms: ["Hot"], causes: ["Stall", "Overload"], solution: "Reduce load" },
      ],
    },
    history: {
      invention: {
        year: 1832,
        inventor: "William Sturgeon, Thomas Davenport",
        discovery: "Early DC motors developed in the 1830s-40s; refined through the industrial age.",
        evolution: [
          { year: 1832, event: "First DC motor" },
          { year: 1873, event: "Practical commutator motors" },
          { year: 1960, event: "BLDC emerges" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage usually; safe.",
      currentSafety: "Stall current high; fuse.",
      thermalSafety: "Overload heats; ventilate.",
      handling: "Keep fingers clear of rotor.",
      storage: "Dry.",
      disposal: "E-waste; recycle magnets/copper.",
    },
    glossary: {
      glossary: [
        { term: "Back-EMF", definition: "Speed-proportional voltage opposing supply." },
        { term: "Commutator", definition: "Rotating switch reversing armature current." },
        { term: "Stall Torque", definition: "Torque at zero speed (max current)." },
        { term: "BLDC", definition: "Brushless DC motor with electronic commutation." },
      ],
    },
    interview: {
      beginner: [
        { question: "How does a DC motor spin?", answer: "Current in a magnetic field produces torque; the commutator keeps it unidirectional." },
        { question: "What is back-EMF?", answer: "A speed-dependent voltage that opposes the supply and limits current as speed rises." },
      ],
      intermediate: [
        { question: "How control speed?", answer: "Vary voltage or use PWM; speed roughly tracks applied voltage minus losses." },
        { question: "Brushed vs BLDC?", answer: "Brushed simple/cheap with wear; BLDC efficient, long-lived, needs electronics." },
      ],
      advanced: [
        { question: "Why limit stall current?", answer: "At stall back-EMF is zero, so current is V/R and can be many times rated, overheating the motor." },
      ],
      expert: [
        { question: "How maximize efficiency?", answer: "Use BLDC with field-oriented control and proper commutation timing." },
      ],
    },
    mcqs: {
      questions: [
        { question: "DC motor torque depends on:", options: ["Voltage only", "Current", "Frequency", "Light"], correctAnswer: 1, explanation: "τ = k_t × I.", difficulty: "beginner" },
        { question: "Back-EMF increases with:", options: ["Current", "Speed", "Temperature", "Load"], correctAnswer: 1, explanation: "E = k_e × ω.", difficulty: "intermediate" },
        { question: "Commutator's job:", options: ["Reduce speed", "Reverse current direction", "Cool motor", "Filter"], correctAnswer: 1, explanation: "Keeps torque unidirectional.", difficulty: "intermediate" },
        { question: "BLDC uses:", options: ["Brushes", "Electronic commutation", "No magnet", "AC only"], correctAnswer: 1, explanation: "Electronic switching.", difficulty: "advanced" },
        { question: "Stall current is:", options: ["Zero", "Very high", "Normal", "Negative"], correctAnswer: 1, explanation: "No back-EMF → high current.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "DC Motor Basics", author: "Maxon", year: 2020, url: "", type: "datasheet" },
        { title: "Electric Machinery", author: "Fitzgerald", year: 2013, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "battery", relationship: "DC source" },
        { id: "transistor", relationship: "PWM driver" },
        { id: "electromagnet", relationship: "Field principle" },
        { id: "diode", relationship: "Flyback on driver" },
      ],
    },
  },

  "stepper-motor": {
    overview: {
      whatIsIt: "A stepper motor rotates in discrete steps, positioning precisely by energizing stator coils in sequence under electronic control.",
      whyExists: "Steppers give open-loop precise positioning without encoders, ideal for automation.",
      whereUsed: "They are used in 3D printers, CNC machines, cameras, and robotics.",
    },
    working: {
      workingPrinciple: "Energizing coils in sequence creates a rotating magnetic field that pulls the rotor (permanent magnet or variable reluctance) one step at a time.",
      steps: [
        "Controller energizes coil pair A",
        "Rotor aligns to that field",
        "Next coil energized, field shifts",
        "Rotor steps to new position",
        "Repeat sequence for rotation",
      ],
      microscopicExplanation: "The rotor follows the sequentially energized stator poles; microstepping varies coil currents sinusoidally for smoother, finer motion.",
    },
    construction: {
      internalParts: [
        { name: "Stator Coils", function: "Create stepping field", material: "Copper" },
        { name: "Rotor", function: "Steps to field", material: "Permanent magnet" },
        { name: "Bearings/Shaft", function: "Output motion", material: "Steel" },
      ],
    },
    types: {
      types: [
        { name: "Permanent Magnet", description: "Common, good torque.", applications: ["Printers", "CNC"] },
        { name: "Hybrid", definition: "High resolution.", description: "Combines PM and VR.", applications: ["Precision"] },
        { name: "Variable Reluctance", description: "Soft iron rotor.", applications: ["Legacy"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Step Angle", formula: "θ = 360 / (N_steps)", description: "Angle per full step.", variables: [{ symbol: "θ", name: "Step angle", unit: "°" }, { symbol: "N_steps", name: "Steps/rev", unit: "dimensionless" }], example: "200 steps/rev → 1.8°" },
        { name: "Speed", formula: "rpm = (steps/s × 60) / N_steps", description: "Speed from step rate.", variables: [{ symbol: "steps/s", name: "Step rate", unit: "steps/s" }], example: "1000 steps/s → 300 rpm" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Step Angle", typicalValues: "0.9° to 1.8°", notes: "Common 1.8°" },
        { name: "Holding Torque", typicalValues: "mN·m to N·m", notes: "At standstill" },
        { name: "Phases", typicalValues: "2, 4, 5", notes: "Bipolar/uniplar" },
        { name: "Current", typicalValues: "0.5A to 5A", notes: "Per phase" },
        { name: "Resolution", typicalValues: "200 to 51200 steps/rev", notes: "With microstep" },
      ],
    },
    applications: {
      applications: [
        { category: "Positioning", description: "Precise motion", examples: ["CNC", "3D print"] },
        { category: "Robotics", description: "Joint/axis control", examples: ["Arms"] },
        { category: "Cameras", description: "Lens/optics", examples: ["Focus", "Zoom"] },
        { category: "Automation", description: "Conveyors, feeders", examples: ["Factory"] },
      ],
    },
    advantages: { advantages: ["Precise open-loop position", "Holds position when stopped", "Good torque at low speed", "Simple control", "Repeatable", "Rugged"] },
    disadvantages: { disadvantages: ["Low speed high torque only", "Can lose steps under load", "Resonances", "Inefficient at high speed", "Needs driver", "Heats when holding"] },
    selection: {
      steps: [
        { step: 1, title: "Torque Need", description: "Match holding/running torque." },
        { step: 2, title: "Step Resolution", description: "Microstepping for smoothness." },
        { step: 3, title: "Driver", description: "Bipolar chopper driver." },
        { step: 4, title: "Supply", description: "Voltage for speed." },
      ],
      tips: ["Use microstepping", "Bipolar drivers stronger", "Avoid resonance bands", "Current limit to avoid heat"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Lost Steps", symptoms: ["Position drift"], causes: ["Overload", "Resonance"], solution: "Reduce speed/load" },
        { failure: "No Move", symptoms: ["Vibrate"], causes: ["Wrong sequence"], solution: "Fix phase wiring" },
        { failure: "Overheat", symptoms: ["Hot"], causes: ["High current"], solution: "Lower current limit" },
      ],
    },
    history: {
      invention: {
        year: 1950,
        inventor: "Developed mid-20th century",
        discovery: "Stepper motors evolved for precise incremental motion in instrumentation.",
        evolution: [
          { year: 1950, event: "Early steppers" },
          { year: 1970, event: "Widely used in automation" },
          { year: 2000, event: "Microstepping ubiquitous" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Driver current limit.",
      thermalSafety: "Holding current heats; ventilate.",
      handling: "Avoid forcing shaft.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Step Angle", definition: "Rotation per full step." },
        { term: "Microstepping", definition: "Fractional steps via current control." },
        { term: "Holding Torque", definition: "Torque at standstill with energized coils." },
        { term: "Bipolar", definition: "Driver reverses coil current for more torque." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a stepper motor?", answer: "A motor that moves in discrete steps for precise positioning." },
        { question: "Open-loop means?", answer: "Position is known from step count without feedback (encoder)." },
      ],
      intermediate: [
        { question: "What is microstepping?", answer: "Varying coil currents sinusoidally to achieve fractional steps and smoother motion." },
        { question: "Why lose steps?", answer: "If load torque exceeds motor torque at speed, rotor slips and position drifts." },
      ],
      advanced: [
        { question: "How avoid resonance?", answer: "Use microstepping, higher supply voltage, or mechanical damping." },
      ],
      expert: [
        { question: "When add closed-loop?", answer: "When load varies or missed steps are unacceptable; encoders correct position." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A stepper moves in:", options: ["Continuous", "Discrete steps", "Random", "Only CW"], correctAnswer: 1, explanation: "Incremental steps.", difficulty: "beginner" },
        { question: "200 steps/rev means:", options: ["0.9°", "1.8°", "7.2°", "10°"], correctAnswer: 1, explanation: "360/200 = 1.8°.", difficulty: "intermediate" },
        { question: "Microstepping gives:", options: ["More torque", "Finer resolution", "Higher speed", "Less heat"], correctAnswer: 1, explanation: "Fractional steps.", difficulty: "intermediate" },
        { question: "Losing steps is due to:", options: ["Low voltage", "Overload/resonance", "Cold", "Light"], correctAnswer: 1, explanation: "Torque insufficient.", difficulty: "advanced" },
        { question: "Open-loop lacks:", options: ["Power", "Feedback", "Steps", "Coils"], correctAnswer: 1, explanation: "No encoder feedback.", difficulty: "beginner" },
      ],
    },
    references: {
      references: [
        { title: "Stepper Motor Handbook", author: "Microchip", year: 2021, url: "", type: "datasheet" },
        { title: "Electric Machinery", author: "Fitzgerald", year: 2013, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "dc-motor", relationship: "Continuous-motion cousin" },
        { id: "microcontroller", relationship: "Generates step sequence" },
        { id: "transistor", relationship: "Driver stage" },
        { id: "encoder", relationship: "Closed-loop feedback" },
      ],
    },
  },

  "servo-motor": {
    overview: {
      whatIsIt: "A servo motor is a motor with integrated feedback (encoder/resolver) and control, providing precise position, speed, or torque.",
      whyExists: "Servos deliver closed-loop accuracy for dynamic motion control in automation and robotics.",
      whereUsed: "They are used in robotics, CNC, cameras, drones, and industrial automation.",
    },
    working: {
      workingPrinciple: "A controller compares a commanded position to feedback from an encoder and drives the motor to minimize error via a control loop (often PID).",
      steps: [
        "Command position is set",
        "Encoder reports actual position",
        "Controller computes error",
        "Motor driven to reduce error",
        "Loop maintains accuracy dynamically",
      ],
      microscopicExplanation: "The feedback loop continuously corrects error; the motor (DC, BLDC, or AC) plus encoder forms a closed system that holds or tracks the setpoint.",
    },
    construction: {
      internalParts: [
        { name: "Motor", function: "Produces motion", material: "BLDC/AC" },
        { name: "Encoder/Resolver", function: "Feedback", material: "Optical/magnetic" },
        { name: "Gearbox", function: "Torque/speed", material: "Steel" },
        { name: "Controller", function: "Closed-loop", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "DC Servo", description: "Brushed with encoder.", applications: ["Hobby", "Small"] },
        { name: "BLDC Servo", description: "Efficient, precise.", applications: ["Robotics"] },
        { name: "AC Servo", description: "High power.", applications: ["Industrial"] },
        { name: "Hobby Servo", description: "Position by PWM pulse.", applications: ["RC", "Small bots"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "PID Output", formula: "u = Kp·e + Ki·∫e + Kd·de/dt", description: "Control law.", variables: [{ symbol: "u", name: "Control", unit: "dimensionless" }, { symbol: "e", name: "Error", unit: "dimensionless" }], example: "Tunes response" },
        { name: "Position Error", formula: "e = θ_cmd - θ_actual", description: "Drives correction.", variables: [{ symbol: "θ", name: "Angle", unit: "°" }], example: "Zero when on target" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Rated Torque", typicalValues: "mN·m to 100s N·m", notes: "By size" },
        { name: "Speed", typicalValues: "1000 to 6000 rpm", notes: "Rated" },
        { name: "Resolution", typicalValues: "1000 to 100000 cpr", notes: "Encoder" },
        { name: "Bandwidth", typicalValues: "Hz", notes: "Loop response" },
        { name: "Voltage", typicalValues: "5V (hobby) to 400V", notes: "By class" },
      ],
    },
    applications: {
      applications: [
        { category: "Robotics", description: "Joint control", examples: ["Arms", "Legs"] },
        { category: "CNC", description: "Axis positioning", examples: ["Mills", "Lathes"] },
        { category: "Cameras", description: "Gimbal/optics", examples: ["Stabilization"] },
        { category: "Drones", description: "Attitude control", examples: ["Flight"] },
      ],
    },
    advantages: { advantages: ["Precise closed-loop control", "High dynamic response", "Holds position under load", "High torque", "Programmable", "Feedback accuracy"] },
    disadvantages: { disadvantages: ["Cost", "Needs tuning", "Complex drive", "Encoder can fail", "Heat", "Size/weight"] },
    selection: {
      steps: [
        { step: 1, title: "Torque/Speed", description: "Match mechanical need." },
        { step: 2, title: "Feedback", description: "Resolution adequate." },
        { step: 3, title: "Drive", description: "Compatible servo drive." },
        { step: 4, title: "Tuning", description: "PID for stability." },
      ],
      tips: ["Tune PID carefully", "Use BLDC for efficiency", "Gear for torque", "Shield encoder lines"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Oscillation", symptoms: ["Vibration"], causes: ["Bad tuning"], solution: "Retune PID" },
        { failure: "Encoder Fault", symptoms: ["Position error"], causes: ["Noise", "Damage"], solution: "Check wiring/shield" },
        { failure: "Overheat", symptoms: ["Trip"], causes: ["Overload"], solution: "Reduce load" },
      ],
    },
    history: {
      invention: {
        year: 1860,
        inventor: "Evolved with control theory",
        discovery: "Servomechanisms date to 19th-century steam engine governors; modern servo motors matured mid-20th century.",
        evolution: [
          { year: 1868, event: "Maxwell analyzes governors" },
          { year: 1940, event: "WWII servo systems" },
          { year: 1990, event: "Digital servo drives" },
        ],
      },
    },
    safety: {
      voltageSafety: "Higher voltage for industrial; isolate.",
      currentSafety: "High torque; guard.",
      thermalSafety: "Heats; ventilate.",
      handling: "Pinch hazard from moving parts.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Servo", definition: "Closed-loop motion system with feedback." },
        { term: "PID", definition: "Proportional-Integral-Derivative control." },
        { term: "Encoder", definition: "Sensor reporting position/speed." },
        { term: "Bandwidth", definition: "Loop frequency response limit." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a servo motor?", answer: "A motor with feedback and control for precise position/speed/torque." },
        { question: "Hobby servo signal?", answer: "A PWM pulse width sets the angle (e.g., 1-2ms)." },
      ],
      intermediate: [
        { question: "What is a PID loop?", answer: "A control law using error, its integral, and derivative to drive the motor to setpoint." },
        { question: "Why feedback?", answer: "To correct disturbances and hold accuracy under varying load." },
      ],
      advanced: [
        { question: "How tune a servo?", answer: "Set P for response, I to remove steady error, D to damp; avoid instability." },
      ],
      expert: [
        { question: "When choose AC servo over DC?", answer: "For higher power, speed, and maintenance-free operation in industrial settings." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A servo uses:", options: ["Open loop", "Feedback/closed loop", "No motor", "Only gears"], correctAnswer: 1, explanation: "Closed-loop with feedback.", difficulty: "beginner" },
        { question: "Feedback comes from:", options: ["Resistor", "Encoder", "Capacitor", "Diode"], correctAnswer: 1, explanation: "Encoder/resolver.", difficulty: "beginner" },
        { question: "PID stands for:", options: ["Power in drive", "Proportional-Integral-Derivative", "Pulse input data", "Position index device"], correctAnswer: 1, explanation: "Control law.", difficulty: "intermediate" },
        { question: "Hobby servo angle set by:", options: ["Voltage", "PWM pulse width", "Current", "Frequency only"], correctAnswer: 1, explanation: "Pulse width = angle.", difficulty: "intermediate" },
        { question: "Oscillation means:", options: ["Good tuning", "Bad tuning", "Low torque", "High speed"], correctAnswer: 1, explanation: "Unstable PID.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Servo System Design", author: "Yaskawa", year: 2020, url: "", type: "datasheet" },
        { title: "Electric Machinery", author: "Fitzgerald", year: 2013, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "dc-motor", relationship: "Often the prime mover" },
        { id: "encoder", relationship: "Position feedback" },
        { id: "microcontroller", relationship: "Runs control loop" },
        { id: "stepper-motor", relationship: "Open-loop alternative" },
      ],
    },
  },

  speaker: {
    overview: {
      whatIsIt: "A loudspeaker converts electrical audio signals into sound by driving a diaphragm with a voice coil in a magnetic field.",
      whyExists: "Speakers are the primary transducers that let us hear electronic audio.",
      whereUsed: "They are used in phones, TVs, headphones, PA systems, and musical instruments.",
    },
    working: {
      workingPrinciple: "An audio current in the voice coil produces a force (F = BIL) that moves the cone; the cone pushes air to create sound waves matching the signal.",
      steps: [
        "Audio signal drives the voice coil",
        "Coil sits in a permanent magnet field",
        "Current creates force moving the coil/cone",
        "Cone displaces air as sound",
        "Cone returns via suspension, repeating",
      ],
      microscopicExplanation: "Lorentz force on the coil current in the radial magnetic field moves the diaphragm; the suspension (surround/spider) provides restoring force for linear motion.",
    },
    construction: {
      internalParts: [
        { name: "Voice Coil", function: "Converts current to motion", material: "Copper wire" },
        { name: "Magnet", function: "Provides field", material: "Ferrite/Neodymium" },
        { name: "Cone/Diaphragm", function: "Moves air", material: "Paper/plastic" },
        { name: "Suspension", function: "Centers and returns", material: "Rubber/foam" },
      ],
    },
    types: {
      types: [
        { name: "Dynamic (Moving Coil)", description: "Most common.", applications: ["Speakers", "PA"] },
        { name: "Piezo", description: "Crystal-driven diaphragm.", applications: ["Tweeters", "Buzzers"] },
        { name: "Planar/Ribbon", description: "Light, detailed.", applications: ["Hi-fi"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Force", formula: "F = B × I × L", description: "Coil force from current.", variables: [{ symbol: "F", name: "Force", unit: "N" }, { symbol: "B", name: "Field", unit: "T" }, { symbol: "I", name: "Current", unit: "A" }, { symbol: "L", name: "Wire length", unit: "m" }], example: "More current → more force" },
        { name: "Sensitivity", formula: "dB SPL at 1W/1m", description: "Loudness efficiency.", variables: [{ symbol: "dB", name: "SPL", unit: "dB" }], example: "88dB typical" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Impedance", typicalValues: "4Ω, 8Ω, 16Ω", notes: "Nominal" },
        { name: "Power Rating", typicalValues: "0.5W to 1000W", notes: "RMS" },
        { name: "Frequency Response", typicalValues: "20Hz to 20kHz", notes: "By size" },
        { name: "Sensitivity", typicalValues: "80 to 100 dB", notes: "Higher = louder" },
        { name: "Resonance Fs", typicalValues: "Hz", notes: "Enclosure matters" },
      ],
    },
    applications: {
      applications: [
        { category: "Audio Playback", description: "Reproduces sound", examples: ["Music", "TV"] },
        { category: "Communication", description: "Voice output", examples: ["Phones", "Intercom"] },
        { category: "Alerting", description: "Tones/alarms", examples: ["Alarms"] },
        { category: "PA Systems", description: "Public address", examples: ["Stadiums"] },
      ],
    },
    advantages: { advantages: ["Direct sound reproduction", "Wide frequency (with range)", "Robust (dynamic)", "Scalable size", "Efficient", "Affordable"] },
    disadvantages: { disadvantages: ["Non-linear at extremes", "Enclosure dependent", "Distortion", "Power handling limits", "Resonance effects", "Phase issues"] },
    selection: {
      steps: [
        { step: 1, title: "Impedance", description: "Match amplifier." },
        { step: 2, title: "Power", description: "Exceed amp RMS." },
        { step: 3, title: "Frequency", description: "Cover needed band." },
        { step: 4, title: "Enclosure", description: "Box tunes response." },
      ],
      tips: ["Match impedance to amp", "Use crossover for ranges", "Seal enclosure", "Avoid clipping"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Sound", symptoms: ["Silent"], causes: ["Open coil", "Wiring"], solution: "Check; replace" },
        { failure: "Distortion", symptoms: ["Rattling"], causes: ["Cone damage", "Overdrive"], solution: "Replace; lower level" },
        { failure: "Weak", symptoms: ["Low output"], causes: ["Magnet", "Amp"], solution: "Check amp" },
      ],
    },
    history: {
      invention: {
        year: 1925,
        inventor: "Edward Kellogg, Chester Rice",
        discovery: "The moving-coil loudspeaker was developed at General Electric in the 1920s.",
        evolution: [
          { year: 1925, event: "First moving-coil speaker" },
          { year: 1930, event: "Permanent magnet types" },
          { year: 1970, event: "High-fidelity speakers" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Amplifier current; don't short.",
      thermalSafety: "Overpower heats voice coil.",
      handling: "Avoid puncturing cone.",
      storage: "Dry, avoid magnet debris.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Impedance", definition: "AC resistance the amplifier drives." },
        { term: "Sensitivity", definition: "Loudness per input power." },
        { term: "Crossover", definition: "Splits bands to drivers." },
        { term: "Fs", definition: "Resonant frequency of the driver." },
      ],
    },
    interview: {
      beginner: [
        { question: "How does a speaker make sound?", answer: "Current in the voice coil moves a cone that pushes air, creating sound waves." },
        { question: "What is impedance?", answer: "The AC resistance the amplifier must drive, typically 4 or 8 ohms." },
      ],
      intermediate: [
        { question: "Why enclosure matters?", answer: "It controls resonance and prevents front/back wave cancellation." },
        { question: "What is sensitivity?", answer: "How loud the speaker is per watt at a distance; higher needs less power." },
      ],
      advanced: [
        { question: "What causes distortion?", answer: "Cone excursion limits, suspension non-linearity, and voice-coil heating." },
      ],
      expert: [
        { question: "How design a 2-way system?", answer: "Use a crossover to send lows to a woofer and highs to a tweeter, matching sensitivities." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A speaker converts:", options: ["Sound to electricity", "Electricity to sound", "Light to sound", "Heat to sound"], correctAnswer: 1, explanation: "Electroacoustic transducer.", difficulty: "beginner" },
        { question: "Typical impedance:", options: ["4Ω or 8Ω", "100Ω", "1Ω", "1000Ω"], correctAnswer: 0, explanation: "4/8 ohms common.", difficulty: "beginner" },
        { question: "Force on coil is:", options: ["B×I×L", "V×I", "R×I", "C×V"], correctAnswer: 0, explanation: "Lorentz force.", difficulty: "intermediate" },
        { question: "Enclosure affects:", options: ["Color", "Frequency response", "Impedance only", "Weight"], correctAnswer: 1, explanation: "Resonance/cancellation.", difficulty: "advanced" },
        { question: "Distortion source:", options: ["Perfect coil", "Cone non-linearity", "Magnet", "Wire"], correctAnswer: 1, explanation: "Mechanical non-linearity.", difficulty: "intermediate" },
      ],
    },
    references: {
      references: [
        { title: "Loudspeaker Design", author: "Vance Dickason", year: 2018, url: "", type: "book" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "electromagnet", relationship: "Voice coil principle" },
        { id: "audio-amplifier-ic", relationship: "Drives the speaker" },
        { id: "buzzer", relationship: "Simple alerting transducer" },
        { id: "capacitor", relationship: "Crossover element" },
      ],
    },
  },

  buzzer: {
    overview: {
      whatIsIt: "A buzzer is an audible signaling device that produces a tone from an electrical signal, using electromagnetic or piezoelectric actuation.",
      whyExists: "Buzzers provide simple, low-cost audible alerts and notifications.",
      whereUsed: "They are used in alarms, timers, appliances, and user interfaces.",
    },
    working: {
      workingPrinciple: "An electromagnetic buzzer uses a vibrating armature; a piezo buzzer uses a crystal that flexes when voltage is applied, both creating sound at a set frequency.",
      steps: [
        "Voltage applied to the element",
        "Piezo flexes or armature vibrates",
        "Mechanical oscillation creates sound",
        "Resonant cavity amplifies tone",
        "Sound emitted at rated frequency",
      ],
      microscopicExplanation: "Piezoelectric material changes shape with voltage, oscillating at its mechanical resonance; electromagnetic types use an AC-driven coil to vibrate a diaphragm.",
    },
    construction: {
      internalParts: [
        { name: "Piezo Element", function: "Vibrates with voltage", material: "Piezoelectric ceramic" },
        { name: "Oscillator (active)", function: "Generates tone", material: "IC" },
        { name: "Housing/Cavity", function: "Amplifies", material: "Plastic" },
        { name: "Terminals", function: "Connect", material: "Tinned leads" },
      ],
    },
    types: {
      types: [
        { name: "Piezo Buzzer", description: "Efficient, crisp tone.", applications: ["Alarms", "UI"] },
        { name: "Electromagnetic Buzzer", description: "Classic mechanical.", applications: ["Timers"] },
        { name: "Active vs Passive", description: "Active has oscillator; passive needs drive.", applications: ["Flexible"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Sound Pressure", formula: "SPL in dB at rated V", description: "Loudness spec.", variables: [{ symbol: "SPL", name: "Sound level", unit: "dB" }], example: "85dB at 10cm" },
        { name: "Resonant Frequency", formula: "f = mechanical resonance", description: "Tone frequency.", variables: [{ symbol: "f", name: "Frequency", unit: "Hz" }], example: "2.7kHz typical" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Rated Voltage", typicalValues: "3V to 12V", notes: "DC common" },
        { name: "Frequency", typicalValues: "1kHz to 4kHz", notes: "Audible" },
        { name: "Sound Level", typicalValues: "70 to 100 dB", notes: "At distance" },
        { name: "Current", typicalValues: "mA to 30mA", notes: "Low" },
        { name: "Type", typicalValues: "Active/Passive", notes: "Active simpler" },
      ],
    },
    applications: {
      applications: [
        { category: "Alarms", description: "Warning tones", examples: ["Smoke", "Security"] },
        { category: "User Feedback", description: "Button/confirm", examples: ["Appliances"] },
        { category: "Timers", description: "End-of-cycle", examples: ["Microwave"] },
        { category: "Toys", description: "Sound effects", examples: ["Gadgets"] },
      ],
    },
    advantages: { advantages: ["Very low cost", "Low power", "Simple drive", "Loud enough", "Small", "Reliable"] },
    disadvantages: { disadvantages: ["Single tone (usually)", "Limited frequency range", "Harsh sound", "Not for music", "Environmental limits", "Piezo brittle"] },
    selection: {
      steps: [
        { step: 1, title: "Active or Passive", description: "Active for simplicity." },
        { step: 2, title: "Voltage", description: "Match supply." },
        { step: 3, title: "Loudness", description: "dB at distance." },
        { step: 4, title: "Frequency", description: "Audible/preference." },
      ],
      tips: ["Active buzzers need only DC", "Passive needs square wave", "Drive with transistor", "Don't overdrive"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Sound", symptoms: ["Silent"], causes: ["No power", "Open"], solution: "Check drive" },
        { failure: "Weak", symptoms: ["Quiet"], causes: ["Low V", "Damage"], solution: "Raise V within rating" },
      ],
    },
    history: {
      invention: {
        year: 1900,
        inventor: "Early 20th century",
        discovery: "Electromagnetic buzzers preceded piezo types; piezo became common later.",
        evolution: [
          { year: 1900, event: "Electromagnetic buzzers" },
          { year: 1970, event: "Piezo buzzers common" },
          { year: 2000, event: "SMD piezo types" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Low current.",
      thermalSafety: "Minimal.",
      handling: "Piezo brittle; careful.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Piezo", definition: "Crystal that flexes with voltage." },
        { term: "Active Buzzer", definition: "Has internal oscillator; apply DC." },
        { term: "Passive Buzzer", definition: "Needs external AC drive." },
        { term: "SPL", definition: "Sound Pressure Level in decibels." },
      ],
    },
    interview: {
      beginner: [
        { question: "Active vs passive buzzer?", answer: "Active has a built-in oscillator (apply DC); passive needs an external AC tone." },
        { question: "How does a piezo buzzer work?", answer: "A piezoelectric disc flexes with applied voltage, vibrating to make sound." },
      ],
      intermediate: [
        { question: "Why 2-4kHz tone?", answer: "That range is most audible to humans at low power." },
      ],
      advanced: [
        { question: "Drive a passive buzzer?", answer: "Use a square wave from a timer/MCU through a transistor." },
      ],
      expert: [
        { question: "How vary pitch?", answer: "For passive types, change the drive frequency; active types are fixed." },
      ],
    },
    mcqs: {
      questions: [
        { question: "A buzzer produces:", options: ["Light", "Sound", "Heat", "Motion"], correctAnswer: 1, explanation: "Audible alert.", difficulty: "beginner" },
        { question: "Active buzzer needs:", options: ["AC tone", "Just DC", "High voltage", "Nothing"], correctAnswer: 1, explanation: "Internal oscillator.", difficulty: "beginner" },
        { question: "Piezo works by:", options: ["Magnetism", "Crystal flexing", "Heat", "Light"], correctAnswer: 1, explanation: "Piezoelectric flex.", difficulty: "intermediate" },
        { question: "Typical frequency:", options: ["10Hz", "2.7kHz", "20kHz+", "1MHz"], correctAnswer: 1, explanation: "Audible range.", difficulty: "intermediate" },
        { question: "Passive buzzer requires:", options: ["DC only", "External AC drive", "No power", "Magnet"], correctAnswer: 1, explanation: "External tone.", difficulty: "advanced" },
      ],
    },
    references: {
      references: [
        { title: "Buzzer Selection Guide", author: "Murata", year: 2019, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "speaker", relationship: "Larger audio transducer" },
        { id: "transistor", relationship: "Drives the buzzer" },
        { id: "555-timer", relationship: "Tone generator" },
        { id: "electromagnet", relationship: "EM buzzer principle" },
      ],
    },
  },

  solenoid: {
    overview: {
      whatIsIt: "A solenoid is a coil that produces a linear (or rotary) mechanical motion when energized, often pushing a plunger into a magnetic field.",
      whyExists: "Solenoids convert electrical signals into linear actuation for valves, locks, and mechanisms.",
      whereUsed: "They are used in door locks, fuel injectors, valves, and vending machines.",
    },
    working: {
      workingPrinciple: "Current in the coil magnetizes the core, pulling a ferromagnetic plunger into the coil center; spring return restores it when de-energized.",
      steps: [
        "Coil energized with current",
        "Magnetic field pulls the plunger",
        "Plunger moves linearly (stroke)",
        "Mechanical work done at the end",
        "Spring returns plunger when off",
      ],
      microscopicExplanation: "Ampere-turns create flux that minimizes reluctance by drawing the plunger into the high-field region, converting electrical energy to mechanical work.",
    },
    construction: {
      internalParts: [
        { name: "Coil", function: "Creates field", material: "Copper" },
        { name: "Plunger/Armature", function: "Moves linearly", material: "Ferromagnetic steel" },
        { name: "Return Spring", function: "Restores position", material: "Spring steel" },
        { name: "Frame", function: "Guides flux", material: "Steel" },
      ],
    },
    types: {
      types: [
        { name: "Pull Solenoid", description: "Pulls plunger in.", applications: ["Locks", "Valves"] },
        { name: "Push Solenoid", description: "Pushes rod out.", applications: ["Latches"] },
        { name: "Latching Solenoid", description: "Holds without power.", applications: ["Energy save"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Force", formula: "F ∝ (N×I)² / gap²", description: "Force vs current and air gap.", variables: [{ symbol: "N", name: "Turns", unit: "dimensionless" }, { symbol: "I", name: "Current", unit: "A" }], example: "Force drops as gap closes" },
        { name: "Coil Power", formula: "P = V² / R", description: "Hold power.", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "12V, 24Ω → 6W" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Voltage", typicalValues: "5V to 24V", notes: "DC common" },
        { name: "Stroke", typicalValues: "2mm to 25mm", notes: "Travel" },
        { name: "Force", typicalValues: "0.1N to 100N", notes: "At full stroke" },
        { name: "Duty Cycle", typicalValues: "10% to 100%", notes: "Heat limits" },
        { name: "Current", typicalValues: "0.1A to 3A", notes: "Inrush/hold" },
      ],
    },
    applications: {
      applications: [
        { category: "Locking", description: "Electronic locks", examples: ["Doors", "Cabinets"] },
        { category: "Valves", description: "Fluid control", examples: ["Water", "Fuel"] },
        { category: "Actuation", description: "Mechanical push", examples: ["Vending", "Printers"] },
        { category: "Relays", description: "Heavy contactors", examples: ["Industrial"] },
      ],
    },
    advantages: { advantages: ["Simple linear motion", "Fast actuation", "Strong force", "Compact", "Reliable", "Cheap"] },
    disadvantages: { disadvantages: ["Coil power when held", "Heat at 100% duty", "Stroke limited", "Wear", "Only on/off (mostly)", "Inrush current"] },
    selection: {
      steps: [
        { step: 1, title: "Force/Stroke", description: "Match mechanical need." },
        { step: 2, title: "Voltage", description: "Match supply." },
        { step: 3, title: "Duty Cycle", description: "Ensure thermal rating." },
        { step: 4, title: "Flyback", description: "Protect driver." },
      ],
      tips: ["Use PWM to reduce hold current", "Flyback diode essential", "Mind duty cycle", "Latching saves power"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Move", symptoms: ["Stuck"], causes: ["No current", "Jammed"], solution: "Check drive; free" },
        { failure: "Overheat", symptoms: ["Burn"], causes: ["100% duty"], solution: "Reduce duty/PWM" },
        { failure: "Weak", symptoms: ["Low force"], causes: ["Low V", "Wear"], solution: "Raise V; replace" },
      ],
    },
    history: {
      invention: {
        year: 1820,
        inventor: "André-Marie Ampère (principle), applied later",
        discovery: "The solenoid principle followed Ampère's work on electromagnetism in the 1820s.",
        evolution: [
          { year: 1820, event: "Electromagnetism discovered" },
          { year: 1900, event: "Practical solenoids" },
          { year: 1980, event: "Miniature/SMD types" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage; safe.",
      currentSafety: "Inrush; fuse/driver.",
      thermalSafety: "Holding heats; duty limit.",
      handling: "Pinch hazard when actuating.",
      storage: "Dry.",
      disposal: "E-waste rules.",
    },
    glossary: {
      glossary: [
        { term: "Stroke", definition: "Linear travel of the plunger." },
        { term: "Duty Cycle", definition: "On-time fraction before overheating." },
        { term: "Latching", definition: "Holds position without continuous power." },
        { term: "Ampere-Turns", definition: "Coil current × turns; sets force." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a solenoid?", answer: "A coil that creates linear motion by pulling a plunger into its magnetic field." },
        { question: "Why flyback diode?", answer: "The coil is inductive; the diode clamps turn-off spike." },
      ],
      intermediate: [
        { question: "Why duty cycle matters?", answer: "Continuous holding dissipates coil power as heat; exceeding duty overheats." },
        { question: "How reduce hold power?", answer: "Use PWM or a lower hold voltage after pull-in." },
      ],
      advanced: [
        { question: "Force vs gap?", answer: "Force is roughly inversely proportional to the square of the air gap; strongest near closed." },
      ],
      expert: [
        { question: "When use latching solenoid?", answer: "When the actuator must hold position without continuous power, saving energy." },
      ],
    },
    mcqs: [
      { question: "A solenoid produces:", options: ["Rotation", "Linear motion", "Sound", "Light"], correctAnswer: 1, explanation: "Linear plunger motion.", difficulty: "beginner" },
      { question: "Force depends on:", options: ["Only voltage", "(N×I)²/gap²", "Frequency", "Light"], correctAnswer: 1, explanation: "Ampere-turns and gap.", difficulty: "intermediate" },
      { question: "Flyback diode protects:", options: ["Coil driver", "Plunger", "Spring", "Frame"], correctAnswer: 0, explanation: "Clamps coil spike.", difficulty: "beginner" },
      { question: "Duty cycle limits:", options: ["Speed", "Heat", "Stroke", "Force"], correctAnswer: 1, explanation: "Thermal limit.", difficulty: "advanced" },
      { question: "Latching solenoid:", options: ["Needs power always", "Holds without power", "No coil", "Rotates"], correctAnswer: 1, explanation: "Holds position unpowered.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Solenoid Design", author: "Takano/Magnet-Schultz", year: 2019, url: "", type: "datasheet" },
        { title: "The Art of Electronics", author: "Paul Horowitz, Winfield Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "electromagnet", relationship: "Same coil principle" },
        { id: "relay", relationship: "Solenoid actuates contacts" },
        { id: "transistor", relationship: "Drives the coil" },
        { id: "diode", relationship: "Flyback protection" },
      ],
    },
  },

  contactor: {
    overview: {
      whatIsIt: "A contactor is a heavy-duty relay designed to switch large electrical loads, especially high-current AC motors and power circuits.",
      whyExists: "Contactors safely control high-power equipment from a low-power control signal with isolation.",
      whereUsed: "They are used in motor starters, HVAC, elevators, and industrial power distribution.",
    },
    working: {
      workingPrinciple: "A control coil energizes, creating a magnetic field that closes heavy power contacts, connecting the load. A spring opens them when de-energized.",
      steps: [
        "Control voltage energizes the coil",
        "Magnetic field pulls the armature",
        "Main contacts close, powering the load",
        "Auxiliary contacts signal status",
        "De-energize opens contacts (spring)",
      ],
      microscopicExplanation: "Like a large relay, ampere-turns actuate the contacts; arc chutes quench the arc formed when breaking high-current inductive loads.",
    },
    construction: {
      internalParts: [
        { name: "Power Contacts", function: "Switch load current", material: "Silver-cadmium/silver-tin" },
        { name: "Coil", function: "Actuates", material: "Copper" },
        { name: "Arc Chute", function: "Quenches arc", material: "Ceramic/metal" },
        { name: "Auxiliary Contacts", function: "Feedback", material: "Silver" },
      ],
    },
    types: {
      types: [
        { name: "AC Contactor", description: "For AC loads/motors.", applications: ["Motor starters"] },
        { name: "DC Contactor", description: "For DC power.", applications: ["Battery", "EV"] },
        { name: "Reversing Contactor", description: "Pair for direction.", applications: ["Motor reverse"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Coil Power", formula: "P = V² / R", description: "Control power.", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "24V coil ~10W" },
        { name: "Making/Breaking", formula: "I_rated (AC3 duty)", description: "Motor duty rating.", variables: [{ symbol: "I_rated", name: "Rated current", unit: "A" }], example: "AC3 for motors" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Coil Voltage", typicalValues: "24V, 110V, 230V AC/DC", notes: "Control" },
        { name: "Rated Current", typicalValues: "9A to 1000A+", notes: "AC3" },
        { name: "Poles", typicalValues: "3P common", notes: "For 3-phase" },
        { name: "Utilization Category", typicalValues: "AC1, AC3", notes: "Duty type" },
        { name: "Electrical Life", typicalValues: "10^5 to 10^7", notes: "Operations" },
      ],
    },
    applications: {
      applications: [
        { category: "Motor Control", description: "Start/stop motors", examples: ["Pumps", "Conveyors"] },
        { category: "Power Switching", description: "Large loads", examples: ["HVAC", "Lighting"] },
        { category: "Industrial", description: "Machine control", examples: ["Panels"] },
        { category: "EV/Storage", description: "High-current DC", examples: ["Battery isolation"] },
      ],
    },
    advantages: { advantages: ["Switches very high current", "Control isolation", "Durable", "Auxiliary feedback", "Modular", "Safe arc handling"] },
    disadvantages: { disadvantages: ["Large and heavy", "Coil power", "Acoustic noise (clunk)", "Wear on contacts", "Needs arc chute", "Cost"] },
    selection: {
      steps: [
        { step: 1, title: "Current Rating", description: "Match load (AC3 for motors)." },
        { step: 2, title: "Coil Voltage", description: "Match control supply." },
        { step: 3, title: "Poles", description: "3-phase needs 3P." },
        { step: 4, title: "Protection", description: "Pair with overload relay." },
      ],
      tips: ["Use overload relay with it", "Snubber/RC for coil", "Derate for harsh duty", "Check utilization category"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Coil Burnout", symptoms: ["No pull-in"], causes: ["Overvoltage"], solution: "Replace; check V" },
        { failure: "Welded Contacts", symptoms: ["Stuck on"], causes: ["Arc", "Short"], solution: "Replace; protect" },
        { failure: "Chatter", symptoms: ["Buzz, flicker"], causes: ["Low coil V"], solution: "Raise voltage" },
      ],
    },
    history: {
      invention: {
        year: 1900,
        inventor: "Evolved with industrial power",
        discovery: "Contactors developed alongside electric motors for safe industrial switching.",
        evolution: [
          { year: 1900, event: "Early motor controllers" },
          { year: 1950, event: "Standardized contactors" },
          { year: 2000, event: "Compact, efficient coils" },
        ],
      },
    },
    safety: {
      voltageSafety: "Mains/high voltage; qualified service.",
      currentSafety: "Arc flash risk; isolation required.",
      thermalSafety: "Overload causes fire; use protection.",
      handling: "Qualified only.",
      storage: "Dry.",
      disposal: "E-waste; recycle metals.",
    },
    glossary: {
      glossary: [
        { term: "AC3", definition: "Utilization category for motor starting." },
        { term: "Arc Chute", definition: "Device that extinguishes switching arc." },
        { term: "Auxiliary Contact", definition: "Low-power contact for feedback." },
        { term: "Overload Relay", definition: "Protects motor from overcurrent." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a contactor?", answer: "A heavy-duty relay for switching large electrical loads with a control coil." },
        { question: "Contactor vs relay?", answer: "Contactor handles much higher current and has arc suppression; relay is for signals/small loads." },
      ],
      intermediate: [
        { question: "Why overload relay?", answer: "To protect the motor and contactor from sustained overcurrent." },
        { question: "What is AC3?", answer: "A utilization category describing motor starting duty." },
      ],
      advanced: [
        { question: "How quench the arc?", answer: "Arc chutes split and cool the arc, extinguishing it quickly at contact opening." },
      ],
      expert: [
        { question: "When use contactor vs SSR?", answer: "Contactor for very high current/isolation; SSR for silent, fast, frequent switching." },
      ],
    },
    mcqs: [
      { question: "A contactor switches:", options: ["Signals only", "High-power loads", "Data", "Light only"], correctAnswer: 1, explanation: "Heavy loads.", difficulty: "beginner" },
      { question: "Contactor vs relay:", options: ["Same", "Higher current + arc handling", "Lower current", "No coil"], correctAnswer: 1, explanation: "Heavy-duty relay.", difficulty: "intermediate" },
      { question: "AC3 refers to:", options: ["Voltage", "Motor duty category", "Coil type", "Poles"], correctAnswer: 1, explanation: "Utilization category.", difficulty: "advanced" },
      { question: "Arc is handled by:", options: ["Spring", "Arc chute", "Coil", "Frame"], correctAnswer: 1, explanation: "Quenches arc.", difficulty: "intermediate" },
      { question: "Often paired with:", options: ["Capacitor", "Overload relay", "Diode", "Resistor"], correctAnswer: 1, explanation: "Motor protection.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Contactor Handbook", author: "Schneider/Eaton", year: 2020, url: "", type: "datasheet" },
        { title: "Power Electronics", author: "Mohan, Undeland, Robbins", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "relay", relationship: "Small-signal cousin" },
        { id: "electromagnet", relationship: "Coil actuation" },
        { id: "dc-motor", relationship: "Switches motor power" },
        { id: "diode", relationship: "Coil flyback" },
      ],
    },
  },

  switch: {
    overview: {
      whatIsIt: "A switch is a mechanical device that opens or closes an electrical circuit, interrupting or diverting current flow.",
      whyExists: "Switches provide manual, reliable control to energize or de-energize circuits safely.",
      whereUsed: "Used everywhere in lighting, appliances, power tools, and control panels.",
    },
    working: {
      workingPrinciple: "A movable contact is pressed against a fixed contact to complete the circuit, or lifted to break it, controlling current path.",
      steps: [
        "User applies force to the actuator",
        "Contacts touch (close) or separate (open)",
        "Current flows or stops",
        "Spring returns (momentary) or latch holds (maintained)",
      ],
      microscopicExplanation: "Closed contacts give very low contact resistance; the air gap when open provides high insulation resistance.",
    },
    construction: {
      internalParts: [
        { name: "Actuator", function: "User input", material: "Plastic/metal" },
        { name: "Contacts", function: "Conduct current", material: "Silver alloy" },
        { name: "Spring", function: "Return force", material: "Steel" },
        { name: "Housing", function: "Insulate", material: "Plastic/ceramic" },
      ],
    },
    types: {
      types: [
        { name: "SPST", description: "Single-pole single-throw on/off.", applications: ["Lights"] },
        { name: "SPDT", description: "Single-pole double-throw selector.", applications: ["Mode select"] },
        { name: "DPDT", description: "Double-pole double-throw.", applications: ["Motor reverse"] },
        { name: "Rotary", description: "Multi-position selector.", applications: ["Range"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Switched Power", formula: "P = V I", description: "Load power controlled.", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "230V x 10A = 2300W" },
        { name: "Contact Rating", formula: "I_max, V_max", description: "Max safe switched load.", variables: [{ symbol: "I_max", name: "Current", unit: "A" }], example: "10A 250V AC" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Current Rating", typicalValues: "1A to 30A", notes: "Depends type" },
        { name: "Voltage Rating", typicalValues: "12V to 600V", notes: "AC/DC differ" },
        { name: "Poles/Throws", typicalValues: "SPST to DPDT", notes: "Configuration" },
        { name: "Mechanical Life", typicalValues: "10^4 to 10^6 cycles", notes: "Actuations" },
      ],
    },
    applications: {
      applications: [
        { category: "Control", description: "On/off power", examples: ["Lights", "Fans"] },
        { category: "Selection", description: "Choose mode", examples: ["Appliances"] },
        { category: "Safety", description: "Emergency stop", examples: ["Machines"] },
      ],
    },
    advantages: { advantages: ["Simple", "Cheap", "No hold power", "Reliable", "Many configurations"] },
    disadvantages: { disadvantages: ["Mechanical wear", "Contact arcing", "Slow", "Manual", "Contact bounce"] },
    selection: {
      steps: [
        { step: 1, title: "Current/Voltage", description: "Match the load rating." },
        { step: 2, title: "Poles/Throws", description: "Match the circuit." },
        { step: 3, title: "AC/DC", description: "Ratings differ." },
        { step: 4, title: "Environment", description: "IP rating for dust/wet." },
      ],
      tips: ["Derate for inductive loads", "Use snubber for coils", "Sealed type for wet areas"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Burnt Contacts", symptoms: ["No continuity"], causes: ["Arcing/overload"], solution: "Replace switch" },
        { failure: "Stuck", symptoms: ["Won't toggle"], causes: ["Dirt/age"], solution: "Clean or replace" },
        { failure: "Bounce", symptoms: ["Flicker"], causes: ["Mechanical"], solution: "Debounce in logic" },
      ],
    },
    history: {
      invention: {
        year: 1880,
        inventor: "Evolved with electrification",
        discovery: "Manual switches developed alongside early electrical wiring for control.",
        evolution: [
          { year: 1880, event: "Knife switches" },
          { year: 1920, event: "Tumbler switches" },
          { year: 2000, event: "Sealed/membrane switches" },
        ],
      },
    },
    safety: {
      voltageSafety: "Mains voltage is lethal; isolate before work.",
      currentSafety: "Arcing at break; rated switching.",
      thermalSafety: "Overload causes fire.",
      handling: "De-energize first.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "SPST", definition: "Single-pole single-throw switch." },
        { term: "DPDT", definition: "Double-pole double-throw switch." },
        { term: "Momentary", definition: "Returns to rest when released." },
        { term: "Contact Bounce", definition: "Brief multiple makes when closing." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a switch do?", answer: "It opens or closes a circuit to stop or allow current flow." },
        { question: "SPST vs SPDT?", answer: "SPST is simple on/off; SPDT selects between two outputs." },
      ],
      intermediate: [
        { question: "Why derate for inductive loads?", answer: "Inductive loads cause arcing that degrades contacts." },
      ],
      advanced: [
        { question: "How handle contact bounce?", answer: "Use RC snubber or software debounce." },
      ],
      expert: [
        { question: "When choose solid-state over mechanical?", answer: "For silent, fast, frequent, no-bounce switching." },
      ],
    },
    mcqs: [
      { question: "SPST means:", options: ["Single-pole single-throw", "Single-pole double-throw", "Double-pole", "None"], correctAnswer: 0, explanation: "One pole, one throw.", difficulty: "beginner" },
      { question: "Switch controls:", options: ["Current path", "Voltage", "Power source", "Frequency"], correctAnswer: 0, explanation: "Opens/closes circuit.", difficulty: "beginner" },
      { question: "Inductive loads cause:", options: ["Arcing", "No effect", "Lower current", "None"], correctAnswer: 0, explanation: "Arc at break.", difficulty: "intermediate" },
      { question: "Contact bounce is:", options: ["Multiple makes", "Open always", "Weld", "None"], correctAnswer: 0, explanation: "Brief chatter.", difficulty: "advanced" },
      { question: "Momentary returns:", options: ["To rest", "Stays", "Off only", "On only"], correctAnswer: 0, explanation: "Spring return.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Switch Types Guide", author: "Manufacturer", year: 2021, url: "", type: "datasheet" },
        { title: "Practical Electronics", author: "Scherz", year: 2016, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "relay", relationship: "Electrically operated switch" },
        { id: "push-button", relationship: "Momentary switch" },
        { id: "contactor", relationship: "Heavy switch" },
      ],
    },
  },
  "push-button": {
    overview: {
      whatIsIt: "A push-button is a momentary switch actuated by pressing a button, returning to rest when released (or latching).",
      whyExists: "Push-buttons give ergonomic, reliable human input for control and signaling.",
      whereUsed: "Found on keyboards, doorbells, panels, and industrial controls.",
    },
    working: {
      workingPrinciple: "Pressing the button moves internal contacts together (normally-open) or apart (normally-closed); release lets a spring return them.",
      steps: [
        "Press the actuator",
        "Contacts change state",
        "Circuit completes or breaks",
        "Spring returns on release (momentary)",
      ],
      microscopicExplanation: "A dome or leaf contact bridges the gap; gold plating reduces contact resistance for low-signal use.",
    },
    construction: {
      internalParts: [
        { name: "Button Cap", function: "User press", material: "Plastic" },
        { name: "Contacts", function: "Conduct", material: "Gold/silver" },
        { name: "Spring", function: "Return", material: "Steel" },
        { name: "Housing", function: "Mount", material: "Plastic" },
      ],
    },
    types: {
      types: [
        { name: "Momentary NO", description: "Normally open, closes on press.", applications: ["Doorbell"] },
        { name: "Momentary NC", description: "Normally closed, opens on press.", applications: ["Stop"] },
        { name: "Latching", description: "Toggles state each press.", applications: ["Power"] },
        { name: "Illuminated", description: "Built-in LED.", applications: ["Panels"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Rating", formula: "I_max, V_max", description: "Max switched load.", variables: [{ symbol: "I_max", name: "Current", unit: "A" }], example: "2A 24V" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Current Rating", typicalValues: "0.1A to 10A", notes: "Signal to power" },
        { name: "Voltage Rating", typicalValues: "12V to 250V", notes: "AC/DC" },
        { name: "Contact Form", typicalValues: "NO/NC", notes: "Config" },
        { name: "Life", typicalValues: "10^5 to 10^7 cycles", notes: "Actuations" },
      ],
    },
    applications: {
      applications: [
        { category: "Input", description: "User command", examples: ["Start", "Reset"] },
        { category: "Signaling", description: "Indicate state", examples: ["Panels"] },
        { category: "Safety", description: "Emergency stop", examples: ["Machines"] },
      ],
    },
    advantages: { advantages: ["Ergonomic", "Tactile feedback", "Cheap", "Reliable", "Many forms"] },
    disadvantages: { disadvantages: ["Mechanical wear", "Bounce", "Limited current", "Manual", "Environmental seal needed"] },
    selection: {
      steps: [
        { step: 1, title: "NO/NC", description: "Match logic." },
        { step: 2, title: "Rating", description: "Match load." },
        { step: 3, title: "Mount", description: "Panel/PCB." },
        { step: 4, title: "Environment", description: "IP rating." },
      ],
      tips: ["Debounce in firmware", "Use illuminated for status", "Sealed for harsh use"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Stuck", symptoms: ["No return"], causes: ["Dirt"], solution: "Clean/replace" },
        { failure: "No Contact", symptoms: ["Dead"], causes: ["Wear"], solution: "Replace" },
        { failure: "Bounce", symptoms: ["Double trigger"], causes: ["Mechanical"], solution: "Debounce" },
      ],
    },
    history: {
      invention: {
        year: 1900,
        inventor: "Industrial control evolution",
        discovery: "Push-buttons standardized human-machine control in machinery.",
        evolution: [
          { year: 1900, event: "Industrial buttons" },
          { year: 1980, event: "Membrane keyboards" },
          { year: 2000, event: "Tactile SMD buttons" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage typical; isolate mains.",
      currentSafety: "Limited current.",
      thermalSafety: "Overload melts.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "NO", definition: "Normally open contact." },
        { term: "NC", definition: "Normally closed contact." },
        { term: "Latching", definition: "Stays in toggled state." },
        { term: "Debounce", definition: "Filtering bounce signals." },
      ],
    },
    interview: {
      beginner: [
        { question: "NO vs NC?", answer: "NO is open until pressed; NC is closed until pressed." },
        { question: "Why debounce?", answer: "Mechanical bounce causes multiple transitions." },
      ],
      intermediate: [
        { question: "When use latching?", answer: "For power on/off without holding." },
      ],
      advanced: [
        { question: "Gold vs silver contacts?", answer: "Gold for low-signal; silver for power." },
      ],
      expert: [
        { question: "Design for high cycle life?", answer: "Use sealed contacts and rated current." },
      ],
    },
    mcqs: [
      { question: "NO contact is:", options: ["Open at rest", "Closed at rest", "Always open", "None"], correctAnswer: 0, explanation: "Normally open.", difficulty: "beginner" },
      { question: "Momentary returns:", options: ["On release", "Stays", "Never", "None"], correctAnswer: 0, explanation: "Spring return.", difficulty: "beginner" },
      { question: "Debounce handles:", options: ["Bounce", "Voltage", "Current", "Heat"], correctAnswer: 0, explanation: "Mechanical bounce.", difficulty: "intermediate" },
      { question: "Latching button:", options: ["Toggles state", "Momentary", "NC only", "None"], correctAnswer: 0, explanation: "Stays toggled.", difficulty: "advanced" },
      { question: "Gold contacts for:", options: ["Low signal", "High power", "Both", "None"], correctAnswer: 0, explanation: "Low-signal use.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Pushbutton Handbook", author: "Manufacturer", year: 2020, url: "", type: "datasheet" },
        { title: "Human Interface Design", author: "Norman", year: 2013, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "switch", relationship: "Momentary variant" },
        { id: "relay", relationship: "Driven by button" },
        { id: "microcontroller", relationship: "Reads input" },
      ],
    },
  },
  electromagnet: {
    overview: {
      whatIsIt: "An electromagnet is a coil of wire that produces a magnetic field when current flows, controllable by electricity.",
      whyExists: "Electromagnets give switchable, variable magnetism impossible with permanent magnets.",
      whereUsed: "Used in relays, motors, speakers, MRI, and lifting magnets.",
    },
    working: {
      workingPrinciple: "Current through a coiled conductor creates a magnetic field along its axis; an iron core concentrates the flux.",
      steps: [
        "Current flows through the coil",
        "Magnetic field builds around the core",
        "Attracts ferromagnetic material",
        "Field collapses when current stops",
      ],
      microscopicExplanation: "Ampère's law: circulating current produces B field; the ferromagnetic core aligns domains, multiplying flux.",
    },
    construction: {
      internalParts: [
        { name: "Coil", function: "Carries current", material: "Copper wire" },
        { name: "Core", function: "Concentrates flux", material: "Soft iron" },
        { name: "Frame", function: "Supports", material: "Steel" },
        { name: "Insulation", function: "Isolate turns", material: "Enamel/varnish" },
      ],
    },
    types: {
      types: [
        { name: "DC Electromagnet", description: "Steady field with DC.", applications: ["Relays"] },
        { name: "AC Electromagnet", description: "Pulsating field with AC.", applications: ["Buzzers"] },
        { name: "Lifting Magnet", description: "Heavy ferrous lift.", applications: ["Scrap yards"] },
        { name: "Solenoid", description: "Linear motion.", applications: ["Valves"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Magnetic Field (solenoid)", formula: "B = μ₀ n I", description: "Field inside coil.", variables: [{ symbol: "B", name: "Field", unit: "T" }, { symbol: "n", name: "Turns/m", unit: "1/m" }, { symbol: "I", name: "Current", unit: "A" }], example: "n=1000/m, I=1A -> B~1.26mT" },
        { name: "Force", formula: "F ∝ (N I)² / gap²", description: "Attraction force.", variables: [{ symbol: "F", name: "Force", unit: "N" }], example: "More turns or current -> more force" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Coil Voltage", typicalValues: "5V to 240V", notes: "DC/AC" },
        { name: "Pull Force", typicalValues: "0.1N to kN", notes: "Depends size" },
        { name: "Duty", typicalValues: "Continuous/intermittent", notes: "Heating" },
        { name: "Stroke", typicalValues: "1mm to 50mm", notes: "Travel" },
      ],
    },
    applications: {
      applications: [
        { category: "Actuation", description: "Motion", examples: ["Relays", "Valves"] },
        { category: "Lifting", description: "Move steel", examples: ["Scrap"] },
        { category: "Medical", description: "Imaging", examples: ["MRI"] },
        { category: "Audio", description: "Drive cone", examples: ["Speakers"] },
      ],
    },
    advantages: { advantages: ["Controllable field", "Variable strength", "Fast on/off", "Strong pull", "Reversible"] },
    disadvantages: { disadvantages: ["Coil heating", "Power needed", "Residual magnetism", "Weight", "Core saturation"] },
    selection: {
      steps: [
        { step: 1, title: "Force", description: "Match required pull." },
        { step: 2, title: "Voltage", description: "Match supply." },
        { step: 3, title: "Duty", description: "Continuous vs intermittent." },
        { step: 4, title: "Stroke", description: "Required travel." },
      ],
      tips: ["Use flyback diode on DC coil", "Derate for heat", "Soft iron core for fast response"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open Coil", symptoms: ["No field"], causes: ["Burnout"], solution: "Replace" },
        { failure: "Weak Field", symptoms: ["Low pull"], causes: ["Low V", "Demag"], solution: "Check supply" },
        { failure: "Overheat", symptoms: ["Smell"], causes: ["Over duty"], solution: "Reduce on-time" },
      ],
    },
    history: {
      invention: {
        year: 1825,
        inventor: "William Sturgeon",
        discovery: "Sturgeon built the first practical electromagnet, showing electricity could make magnetism.",
        evolution: [
          { year: 1825, event: "Sturgeon's electromagnet" },
          { year: 1831, event: "Faraday's coils" },
          { year: 1900, event: "Industrial lifting magnets" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage typical.",
      currentSafety: "Heating risk.",
      thermalSafety: "Burns from hot coil.",
      handling: "Pinch from strong pull.",
      storage: "Dry.",
      disposal: "Recycle copper/iron.",
    },
    glossary: {
      glossary: [
        { term: "Flux", definition: "Magnetic field lines." },
        { term: "Soft Iron", definition: "Easily magnetized/demagnetized core." },
        { term: "Turns", definition: "Coil windings." },
        { term: "Residual Magnetism", definition: "Remaining field after off." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is an electromagnet?", answer: "A coil that makes a magnetic field when current flows." },
        { question: "Why iron core?", answer: "It concentrates and strengthens the field." },
      ],
      intermediate: [
        { question: "Why flyback diode?", answer: "To clamp coil's inductive kick when switched off." },
      ],
      advanced: [
        { question: "Force vs gap?", answer: "Force drops sharply as air gap increases." },
      ],
      expert: [
        { question: "Reduce heating?", answer: "Use higher voltage/fewer turns or intermittent duty." },
      ],
    },
    mcqs: [
      { question: "Electromagnet field needs:", options: ["Current", "Permanent magnet", "Heat", "Light"], correctAnswer: 0, explanation: "Current makes field.", difficulty: "beginner" },
      { question: "Core material:", options: ["Soft iron", "Copper", "Plastic", "Wood"], correctAnswer: 0, explanation: "Concentrates flux.", difficulty: "beginner" },
      { question: "B = μ₀ n I is for:", options: ["Solenoid field", "Resistance", "Power", "Force"], correctAnswer: 0, explanation: "Coil field.", difficulty: "intermediate" },
      { question: "Flyback diode protects:", options: ["Coil switch-off", "Core", "Frame", "None"], correctAnswer: 0, explanation: "Clamps kick.", difficulty: "advanced" },
      { question: "Force decreases with:", options: ["Larger gap", "More turns", "More current", "Iron core"], correctAnswer: 0, explanation: "Gap weakens pull.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "Introduction to Electromagnetism", author: "Griffiths", year: 2017, url: "", type: "book" },
        { title: "Magnet Design Guide", author: "Manufacturer", year: 2019, url: "", type: "datasheet" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "relay", relationship: "Coil actuates" },
        { id: "solenoid", relationship: "Linear electromagnet" },
        { id: "speaker", relationship: "Voice coil" },
        { id: "contactor", relationship: "Coil actuation" },
      ],
    },
  },

  fuse: {
    overview: {
      whatIsIt: "A fuse is a sacrificial overcurrent protection device: a metal link that melts and opens the circuit when current exceeds a rated value.",
      whyExists: "Fuses protect wiring and devices from overcurrent and short circuits by breaking the fault quickly.",
      whereUsed: "Found in every power supply, appliance, and distribution board.",
    },
    working: {
      workingPrinciple: "Excess current heats the fusible element above its melting point; it melts and interrupts the circuit, requiring replacement.",
      steps: [
        "Normal current flows through the element",
        "Overcurrent raises temperature",
        "Element melts at rated current",
        "Circuit opens, stopping fault",
      ],
      microscopicExplanation: "I²t heating: the element's thermal mass sets the melting integral; it clears before downstream damage.",
    },
    construction: {
      internalParts: [
        { name: "Fusible Element", function: "Melts on fault", material: "Tin/copper alloy" },
        { name: "Body", function: "Contain/quench", material: "Ceramic/glass" },
        { name: "End Caps", function: "Connect", material: "Brass" },
        { name: "Filler", function: "Quench arc", material: "Silica sand" },
      ],
    },
    types: {
      types: [
        { name: "Fast-Acting", description: "Quick clear, no surge tolerance.", applications: ["Electronics"] },
        { name: "Time-Delay (Slow-Blow)", description: "Tolerates inrush.", applications: ["Motors"] },
        { name: "Glass Cartridge", description: "Visible element.", applications: ["Appliances"] },
        { name: "Blade (ATO)", description: "Automotive.", applications: ["Cars"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Melting Integral", formula: "I²t", description: "Energy to melt.", variables: [{ symbol: "I", name: "Current", unit: "A" }, { symbol: "t", name: "Time", unit: "s" }], example: "Must exceed rating to blow" },
        { name: "Power Dissipation", formula: "P = I² R", description: "Self-heating.", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "Small at rated I" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Rated Current", typicalValues: "0.1A to 100A+", notes: "Blows above" },
        { name: "Voltage Rating", typicalValues: "32V to 1000V", notes: "Max interrupt" },
        { name: "Breaking Capacity", typicalValues: "35A to 100kA", notes: "Max fault" },
        { name: "Speed", typicalValues: "FF, F, T, TT", notes: "Characteristic" },
      ],
    },
    applications: {
      applications: [
        { category: "Protection", description: "Overcurrent", examples: ["PSUs", "Wiring"] },
        { category: "Safety", description: "Fire prevention", examples: ["Boards"] },
        { category: "Automotive", description: "Circuit protect", examples: ["Cars"] },
      ],
    },
    advantages: { advantages: ["Cheap", "Simple", "Fast clear", "No power needed", "Reliable"] },
    disadvantages: { disadvantages: ["One-time use", "Must replace", "Single fault only", "Aging", "Cannot reset"] },
    selection: {
      steps: [
        { step: 1, title: "Current Rating", description: "125% of normal load." },
        { step: 2, title: "Voltage", description: "Above circuit max." },
        { step: 3, title: "Speed", description: "Slow-blow for inrush." },
        { step: 4, title: "Breaking Capacity", description: "Above fault current." },
      ],
      tips: ["Never oversize too much", "Match characteristic to load", "Use certified types"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Blown", symptoms: ["No power"], causes: ["Overload/short"], solution: "Replace; find cause" },
        { failure: "Nuisance Blow", symptoms: ["Frequent"], causes: ["Undersized"], solution: "Upsize/check" },
        { failure: "Won't Blow", symptoms: ["No protect"], causes: ["Oversized"], solution: "Correct rating" },
      ],
    },
    history: {
      invention: {
        year: 1880,
        inventor: "Thomas Edison (patented)",
        discovery: "Edison patented an early fuse for lamp protection; fuses became standard safety devices.",
        evolution: [
          { year: 1880, event: "Edison fuse patent" },
          { year: 1920, event: "Cartridge fuses" },
          { year: 1970, event: "Blade automotive fuses" },
        ],
      },
    },
    safety: {
      voltageSafety: "Mains; isolate.",
      currentSafety: "Arc on clear.",
      thermalSafety: "Hot element.",
      handling: "Replace with correct rating only.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "I²t", definition: "Melting energy integral." },
        { term: "Breaking Capacity", definition: "Max fault current it can clear." },
        { term: "Slow-Blow", definition: "Tolerates inrush current." },
        { term: "Inrush", definition: "Initial surge current." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a fuse do?", answer: "It melts to break the circuit when current is too high." },
        { question: "Fuse vs breaker?", answer: "Fuse is one-time; breaker resets." },
      ],
      intermediate: [
        { question: "Why slow-blow for motors?", answer: "Motors have high inrush that would blow a fast fuse." },
      ],
      advanced: [
        { question: "What is breaking capacity?", answer: "Max fault current the fuse can safely interrupt." },
      ],
      expert: [
        { question: "Select fuse for inductive load?", answer: "Use time-delay type and rate above running current." },
      ],
    },
    mcqs: [
      { question: "A fuse protects against:", options: ["Overcurrent", "Overvoltage", "Heat", "Noise"], correctAnswer: 0, explanation: "Opens on excess current.", difficulty: "beginner" },
      { question: "Fuse is:", options: ["One-time", "Resettable", "Adjustable", "None"], correctAnswer: 0, explanation: "Sacrificial.", difficulty: "beginner" },
      { question: "Slow-blow tolerates:", options: ["Inrush", "Overvoltage", "Heat", "None"], correctAnswer: 0, explanation: "Surge current.", difficulty: "intermediate" },
      { question: "I²t relates to:", options: ["Melting energy", "Voltage", "Resistance", "Power"], correctAnswer: 0, explanation: "Energy to melt.", difficulty: "advanced" },
      { question: "Breaking capacity is:", options: ["Max fault current", "Rated current", "Voltage", "Size"], correctAnswer: 0, explanation: "Clear capability.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "Fuse Application Guide", author: "Littelfuse", year: 2021, url: "", type: "datasheet" },
        { title: "Electrical Protection", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "circuit-breaker", relationship: "Resettable alternative" },
        { id: "resistor", relationship: "Current sense" },
        { id: "relay", relationship: "Load switch" },
      ],
    },
  },
  "circuit-breaker": {
    overview: {
      whatIsIt: "A circuit breaker is an automatically operated electrical switch that protects a circuit from overcurrent and can be reset.",
      whyExists: "Breakers protect wiring and allow reset without replacement, unlike fuses.",
      whereUsed: "Used in homes, industry, and vehicles for distribution protection.",
    },
    working: {
      workingPrinciple: "Overcurrent trips a mechanism (thermal for moderate, magnetic for short) that opens contacts; it can be manually reset.",
      steps: [
        "Current flows normally",
        "Overload heats bimetal (thermal trip)",
        "Short causes magnetic trip",
        "Contacts open, breaking circuit",
        "Reset after fault cleared",
      ],
      microscopicExplanation: "Thermal: bimetallic strip bends with heat; magnetic: solenoid pulls trip bar on high current.",
    },
    construction: {
      internalParts: [
        { name: "Contacts", function: "Carry/break", material: "Silver alloy" },
        { name: "Bimetal Strip", function: "Thermal trip", material: "Two metals" },
        { name: "Solenoid", function: "Magnetic trip", material: "Copper" },
        { name: "Arc Chute", function: "Quench arc", material: "Ceramic" },
      ],
    },
    types: {
      types: [
        { name: "MCB", description: "Miniature, thermal-magnetic.", applications: ["Homes"] },
        { name: "MCCB", description: "Molded case, higher rating.", applications: ["Industry"] },
        { name: "RCCB/GFCI", description: "Earth-leakage protection.", applications: ["Safety"] },
        { name: "AFCI", description: "Arc-fault detection.", applications: ["Bedrooms"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Trip Curve", formula: "I vs t characteristic", description: "Time to trip vs current.", variables: [{ symbol: "I", name: "Current", unit: "A" }], example: "Type B/C/D" },
        { name: "Power", formula: "P = V I", description: "Protected load.", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "230V x 16A" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Rated Current", typicalValues: "6A to 100A", notes: "Per pole" },
        { name: "Breaking Capacity", typicalValues: "6kA to 100kA", notes: "Fault clear" },
        { name: "Trip Type", typicalValues: "B/C/D", notes: "Curve" },
        { name: "Poles", typicalValues: "1P to 4P", notes: "Config" },
      ],
    },
    applications: {
      applications: [
        { category: "Distribution", description: "Panel protection", examples: ["Homes"] },
        { category: "Safety", description: "Earth leakage", examples: ["RCCB"] },
        { category: "Industry", description: "Large loads", examples: ["MCCB"] },
      ],
    },
    advantages: { advantages: ["Resettable", "Reusable", "Adjustable trip", "No replacement", "Status visible"] },
    disadvantages: { disadvantages: ["Costlier", "Wear over time", "Bulkier", "Can fail closed", "Needs rating care"] },
    selection: {
      steps: [
        { step: 1, title: "Current", description: "Match load." },
        { step: 2, title: "Curve", description: "B/C/D by load." },
        { step: 3, title: "Breaking", description: "Above fault." },
        { step: 4, title: "Type", description: "Add RCCB if needed." },
      ],
      tips: ["Type C for motors", "Use RCCB for shock protection", "Derate for heat"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Trips Often", symptoms: ["Frequent off"], causes: ["Overload"], solution: "Reduce load" },
        { failure: "Won't Reset", symptoms: ["Stuck"], causes: ["Fault present"], solution: "Find fault" },
        { failure: "No Trip", symptoms: ["No protect"], causes: ["Faulty"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1920,
        inventor: "Hugo Stotz (MCB)",
        discovery: "Stotz developed the modern miniature circuit breaker for safe resettable protection.",
        evolution: [
          { year: 1920, event: "MCB invented" },
          { year: 1970, event: "RCCB introduced" },
          { year: 2000, event: "AFCI/electronic" },
        ],
      },
    },
    safety: {
      voltageSafety: "Mains; qualified only.",
      currentSafety: "Arc flash.",
      thermalSafety: "Overload fire.",
      handling: "De-energize to service.",
      storage: "Dry.",
      disposal: "E-waste; recycle metals.",
    },
    glossary: {
      glossary: [
        { term: "MCB", definition: "Miniature circuit breaker." },
        { term: "RCCB", definition: "Residual current (earth-leakage) breaker." },
        { term: "Trip Curve", definition: "Time-current trip characteristic." },
        { term: "Breaking Capacity", definition: "Max fault it can clear." },
      ],
    },
    interview: {
      beginner: [
        { question: "Breaker vs fuse?", answer: "Breaker resets; fuse is replaced." },
        { question: "What trips on short?", answer: "The magnetic element acts fast." },
      ],
      intermediate: [
        { question: "Type C vs B?", answer: "C tolerates higher inrush (motors); B for resistive." },
      ],
      advanced: [
        { question: "Why RCCB?", answer: "Detects earth leakage to prevent shock." },
      ],
      expert: [
        { question: "Coordinate breakers?", answer: "Selective tripping by rating/curve for discrimination." },
      ],
    },
    mcqs: [
      { question: "Breaker is:", options: ["Resettable", "One-time", "Fuse", "None"], correctAnswer: 0, explanation: "Reusable.", difficulty: "beginner" },
      { question: "Thermal trip uses:", options: ["Bimetal", "Solenoid", "Fuse", "Relay"], correctAnswer: 0, explanation: "Bends with heat.", difficulty: "intermediate" },
      { question: "RCCB detects:", options: ["Earth leakage", "Overvoltage", "Heat", "Current"], correctAnswer: 0, explanation: "Leakage to ground.", difficulty: "advanced" },
      { question: "Type C for:", options: ["Motor inrush", "Resistive", "Lighting", "None"], correctAnswer: 0, explanation: "Higher inrush.", difficulty: "intermediate" },
      { question: "Magnetic trip on:", options: ["Short circuit", "Overload", "Heat", "None"], correctAnswer: 0, explanation: "Fast on fault.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "Circuit Breaker Handbook", author: "ABB/Schneider", year: 2020, url: "", type: "datasheet" },
        { title: "Power Distribution", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "fuse", relationship: "One-time alternative" },
        { id: "relay", relationship: "Switching" },
        { id: "contactor", relationship: "Load switching" },
      ],
    },
  },

  "temperature-sensor": {
    overview: {
      whatIsIt: "A temperature sensor converts temperature into an electrical signal (resistance, voltage, or digital value).",
      whyExists: "Temperature monitoring is essential for safety, control, and process automation.",
      whereUsed: "Used in thermostats, HVAC, medical devices, and industrial control.",
    },
    working: {
      workingPrinciple: "Different technologies: thermistors change resistance with temperature; thermocouples generate voltage from a junction; IC sensors output proportional voltage/digital.",
      steps: [
        "Sensor exposed to temperature",
        "Physical property changes (R or V)",
        "Conditioning circuit reads it",
        "Converts to temperature value",
      ],
      microscopicExplanation: "Thermistors: semiconductor resistance drops with heat; thermocouples: Seebeck effect at dissimilar-metal junction.",
    },
    construction: {
      internalParts: [
        { name: "Sensing Element", function: "Temperature to signal", material: "Semiconductor/metal" },
        { name: "Leads", function: "Connect", material: "Platinum" },
        { name: "Housing", function: "Protect", material: "Stainless/glass" },
        { name: "IC (digital)", function: "Condition", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "Thermistor (NTC)", description: "Resistance falls with heat.", applications: ["Thermostats"] },
        { name: "Thermocouple", description: "Voltage from junction.", applications: ["Furnaces"] },
        { name: "RTD (Pt100)", description: "Stable resistance.", applications: ["Industry"] },
        { name: "IC (LM35)", description: "Linear voltage out.", applications: ["MCU"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "NTC Resistance", formula: "R = R₀ e^(B(1/T - 1/T₀))", description: "Steinhart relation.", variables: [{ symbol: "R", name: "Resistance", unit: "Ω" }, { symbol: "T", name: "Temp", unit: "K" }], example: "B~3950K" },
        { name: "Thermocouple", formula: "V = S (T_hot - T_cold)", description: "Seebeck voltage.", variables: [{ symbol: "V", name: "Voltage", unit: "mV" }], example: "Type K ~41µV/°C" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Range", typicalValues: "-200°C to 1250°C", notes: "By type" },
        { name: "Accuracy", typicalValues: "±0.1°C to ±2°C", notes: "IC best" },
        { name: "Output", typicalValues: "Analog/digital", notes: "R, V, I²C" },
        { name: "Response", typicalValues: "ms to s", notes: "Thermal mass" },
      ],
    },
    applications: {
      applications: [
        { category: "Climate", description: "HVAC control", examples: ["Thermostats"] },
        { category: "Industrial", description: "Process", examples: ["Ovens"] },
        { category: "Medical", description: "Body temp", examples: ["Probes"] },
        { category: "Electronics", description: "Thermal protect", examples: ["CPU"] },
      ],
    },
    advantages: { advantages: ["Wide range", "Cheap (NTC)", "Accurate (RTD/IC)", "Digital options", "Small"] },
    disadvantages: { disadvantages: ["Self-heating (current)", "Nonlinear (NTC)", "Calibration", "Slow (mass)", "Lead resistance (RTD)"] },
    selection: {
      steps: [
        { step: 1, title: "Range", description: "Match temperature span." },
        { step: 2, title: "Accuracy", description: "Needed precision." },
        { step: 3, title: "Output", description: "Analog or digital." },
        { step: 4, title: "Environment", description: "Harsh? use RTD." },
      ],
      tips: ["Use bridge for RTD", "Self-heating: limit current", "Calibrate endpoints"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open", symptoms: ["No read"], causes: ["Broken"], solution: "Replace" },
        { failure: "Drift", symptoms: ["Wrong value"], causes: ["Aging"], solution: "Recalibrate" },
        { failure: "Noise", symptoms: ["Jitter"], causes: ["EMI"], solution: "Shield/filter" },
      ],
    },
    history: {
      invention: {
        year: 1821,
        inventor: "Thomas Johann Seebeck (thermocouple)",
        discovery: "Seebeck discovered the thermoelectric effect enabling temperature measurement by voltage.",
        evolution: [
          { year: 1821, event: "Thermocouple effect" },
          { year: 1930, event: "Thermistors" },
          { year: 2000, event: "Digital IC sensors" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "Sensor may be hot; handle carefully.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "NTC", definition: "Negative temperature coefficient (R falls with T)." },
        { term: "RTD", definition: "Resistance temperature detector." },
        { term: "Seebeck", definition: "Voltage from temperature gradient." },
        { term: "Self-heating", definition: "Current warms the sensor." },
      ],
    },
    interview: {
      beginner: [
        { question: "NTC means?", answer: "Resistance decreases as temperature rises." },
        { question: "Thermocouple output?", answer: "A small voltage from the junction." },
      ],
      intermediate: [
        { question: "Why self-heating matters?", answer: "Measurement current warms NTC, adding error." },
      ],
      advanced: [
        { question: "RTD vs thermistor accuracy?", answer: "RTD more stable/linear; thermistor cheaper but nonlinear." },
      ],
      expert: [
        { question: "Compensate lead resistance?", answer: "Use 3/4-wire RTD configuration." },
      ],
    },
    mcqs: [
      { question: "NTC resistance:", options: ["Falls with heat", "Rises with heat", "Constant", "None"], correctAnswer: 0, explanation: "Negative coefficient.", difficulty: "beginner" },
      { question: "Thermocouple uses:", options: ["Seebeck", "Peltier", "Hall", "Piezo"], correctAnswer: 0, explanation: "Thermoelectric.", difficulty: "intermediate" },
      { question: "RTD element often:", options: ["Platinum", "Copper", "Iron", "Gold"], correctAnswer: 0, explanation: "Pt100 common.", difficulty: "intermediate" },
      { question: "Self-heating caused by:", options: ["Measurement current", "Ambient", "Light", "None"], correctAnswer: 0, explanation: "I²R heating.", difficulty: "advanced" },
      { question: "Digital temp IC outputs:", options: ["I²C/1-Wire", "Only analog", "Relay", "None"], correctAnswer: 0, explanation: "Bus digital.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Temperature Measurement", author: "Omega", year: 2020, url: "", type: "datasheet" },
        { title: "Sensor Technology", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "thermistor", relationship: "NTC type" },
        { id: "microcontroller", relationship: "Reads sensor" },
        { id: "adc", relationship: "Converts analog" },
      ],
    },
  },
  "pressure-sensor": {
    overview: {
      whatIsIt: "A pressure sensor measures pressure (force per area) and converts it to an electrical signal.",
      whyExists: "Pressure monitoring is vital in industry, automotive, and medical systems.",
      whereUsed: "Used in tire pressure, industrial tanks, and blood pressure monitors.",
    },
    working: {
      workingPrinciple: "A diaphragm deflects under pressure; the deflection is sensed by strain gauges (Wheatstone bridge) or capacitive/piezoresistive elements.",
      steps: [
        "Pressure acts on diaphragm",
        "Diaphragm deflects",
        "Strain changes resistance/capacitance",
        "Bridge outputs proportional voltage",
      ],
      microscopicExplanation: "Piezoresistive silicon changes resistivity with mechanical stress; bridge converts to voltage.",
    },
    construction: {
      internalParts: [
        { name: "Diaphragm", function: "Deflects", material: "Silicon/steel" },
        { name: "Strain Gauge", function: "Sense strain", material: "Piezoresistive" },
        { name: "ASIC", function: "Condition", material: "Silicon" },
        { name: "Port", function: "Pressure inlet", material: "Metal" },
      ],
    },
    types: {
      types: [
        { name: "Piezoresistive", description: "Silicon strain.", applications: ["Automotive"] },
        { name: "Capacitive", description: "Plate gap change.", applications: ["Low pressure"] },
        { name: "Strain Gauge", description: "Metal foil bridge.", applications: ["Industrial"] },
        { name: "Absolute/Gauge", description: "Referenced types.", applications: ["Barometer"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Pressure", formula: "P = F / A", description: "Force per area.", variables: [{ symbol: "P", name: "Pressure", unit: "Pa" }, { symbol: "F", name: "Force", unit: "N" }, { symbol: "A", name: "Area", unit: "m²" }], example: "1 bar ~100kPa" },
        { name: "Bridge Output", formula: "V_out = V_ex (ΔR/R)", description: "Strain signal.", variables: [{ symbol: "V_out", name: "Voltage", unit: "V" }], example: "mV range" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Range", typicalValues: "0 to 1000 bar", notes: "By type" },
        { name: "Accuracy", typicalValues: "±0.1% to ±1%", notes: "FS" },
        { name: "Output", typicalValues: "0.5-4.5V, 4-20mA", notes: "Analog" },
        { name: "Media", typicalValues: "Gas/liquid", notes: "Compatibility" },
      ],
    },
    applications: {
      applications: [
        { category: "Automotive", description: "Manifold/TPMS", examples: ["Engines"] },
        { category: "Industrial", description: "Tank level", examples: ["Process"] },
        { category: "Medical", description: "Blood pressure", examples: ["Monitors"] },
      ],
    },
    advantages: { advantages: ["Accurate", "Wide range", "Digital options", "Rugged", "Small"] },
    disadvantages: { disadvantages: ["Drift", "Overpressure damage", "Media corrosion", "Calibration", "Temperature error"] },
    selection: {
      steps: [
        { step: 1, title: "Range", description: "Above max pressure." },
        { step: 2, title: "Media", description: "Compatible material." },
        { step: 3, title: "Output", description: "Voltage/current/digital." },
        { step: 4, title: "Accuracy", description: "Needed precision." },
      ],
      tips: ["Add overpressure margin", "Temperature-compensate", "Use 4-20mA for long runs"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Drift", symptoms: ["Wrong value"], causes: ["Aging"], solution: "Recalibrate" },
        { failure: "Clogged", symptoms: ["No change"], causes: ["Media"], solution: "Clean" },
        { failure: "Burst", symptoms: ["Dead"], causes: ["Overpressure"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1950,
        inventor: "Evolved with transducers",
        discovery: "Piezoresistive effect enabled miniaturized silicon pressure sensors.",
        evolution: [
          { year: 1950, event: "Strain-gauge sensors" },
          { year: 1970, event: "Silicon piezoresistive" },
          { year: 2000, event: "MEMS pressure sensors" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "Process temp.",
      handling: "Avoid overpressure.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Piezoresistive", definition: "Resistance changes with stress." },
        { term: "Gauge Pressure", definition: "Relative to atmosphere." },
        { term: "Absolute Pressure", definition: "Relative to vacuum." },
        { term: "4-20mA", definition: "Current loop signal." },
      ],
    },
    interview: {
      beginner: [
        { question: "What deflects in a pressure sensor?", answer: "A diaphragm under pressure." },
        { question: "Common output?", answer: "Voltage, current loop, or digital." },
      ],
      intermediate: [
        { question: "Why 4-20mA?", answer: "Noise-immune, detects broken wire at 0mA." },
      ],
      advanced: [
        { question: "Temperature compensation?", answer: "ASIC corrects thermal drift of bridge." },
      ],
      expert: [
        { question: "MEMS advantage?", answer: "Tiny, cheap, integrated signal conditioning." },
      ],
    },
    mcqs: [
      { question: "Pressure =", options: ["F/A", "V/I", "R×I", "P×V"], correctAnswer: 0, explanation: "Force per area.", difficulty: "beginner" },
      { question: "Diaphragm does:", options: ["Deflects", "Heats", "Emits", "None"], correctAnswer: 0, explanation: "Mechanical response.", difficulty: "beginner" },
      { question: "4-20mA detects:", options: ["Broken wire", "Overpressure", "Heat", "None"], correctAnswer: 0, explanation: "0mA = fault.", difficulty: "intermediate" },
      { question: "Piezoresistive uses:", options: ["Silicon strain", "Capacitor", "Coil", "Diode"], correctAnswer: 0, explanation: "Resistive change.", difficulty: "advanced" },
      { question: "Gauge pressure refs:", options: ["Atmosphere", "Vacuum", "Earth", "None"], correctAnswer: 0, explanation: "vs ambient.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Pressure Sensor Guide", author: "Bosch/Honeywell", year: 2021, url: "", type: "datasheet" },
        { title: "MEMS Sensors", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "adc", relationship: "Converts signal" },
        { id: "microcontroller", relationship: "Reads" },
        { id: "temperature-sensor", relationship: "Often co-packaged" },
      ],
    },
  },
  "ultrasonic-sensor": {
    overview: {
      whatIsIt: "An ultrasonic sensor measures distance by emitting ultrasound and timing the echo return.",
      whyExists: "Non-contact distance/level measurement is useful where optical or tactile sensing fails.",
      whereUsed: "Used in robotics, parking aids, and liquid level sensing.",
    },
    working: {
      workingPrinciple: "A transducer emits a sound pulse (>20kHz); the echo reflects off an object and returns; time-of-flight gives distance.",
      steps: [
        "Emit ultrasonic pulse",
        "Pulse travels to object",
        "Echo reflects back",
        "Measure round-trip time",
        "Compute distance = c·t/2",
      ],
      microscopicExplanation: "Piezoelectric crystal vibrates to emit and receive sound; electronics time the echo.",
    },
    construction: {
      internalParts: [
        { name: "Piezoelectric Transducer", function: "Emit/receive", material: "Ceramic" },
        { name: "Driver", function: "Pulse", material: "Silicon" },
        { name: "Housing", function: "Protect", material: "Plastic" },
        { name: "Receiver", function: "Echo", material: "Ceramic" },
      ],
    },
    types: {
      types: [
        { name: "Proximity", description: "Short range detect.", applications: ["Parking"] },
        { name: "Level", description: "Tank measurement.", applications: ["Liquids"] },
        { name: "Through-beam", description: "Transmitter/receiver.", applications: ["Counting"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Distance", formula: "d = c·t / 2", description: "Half round-trip.", variables: [{ symbol: "d", name: "Distance", unit: "m" }, { symbol: "c", name: "Sound speed", unit: "m/s" }, { symbol: "t", name: "Time", unit: "s" }], example: "c~343m/s air" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Range", typicalValues: "2cm to 10m", notes: "By model" },
        { name: "Frequency", typicalValues: "40kHz common", notes: "Higher = shorter" },
        { name: "Beam Angle", typicalValues: "5° to 30°", notes: "Cone" },
        { name: "Output", typicalValues: "Analog/PWM/serial", notes: "Varied" },
      ],
    },
    applications: {
      applications: [
        { category: "Robotics", description: "Obstacle detect", examples: ["Drones"] },
        { category: "Automotive", description: "Parking", examples: ["Cars"] },
        { category: "Industrial", description: "Level", examples: ["Tanks"] },
      ],
    },
    advantages: { advantages: ["Non-contact", "Works in dark", "Cheap", "Simple", "Good range"] },
    disadvantages: { disadvantages: ["Affected by foam/soft", "Blind spot near", "Temperature drift (c)", "Narrow beam", "Slow update"] },
    selection: {
      steps: [
        { step: 1, title: "Range", description: "Match distance." },
        { step: 2, title: "Output", description: "Analog/digital." },
        { step: 3, title: "Environment", description: "Foam/soft absorb." },
        { step: 4, title: "Beam", description: "Cone fits target." },
      ],
      tips: ["Temperature-compensate c", "Avoid soft targets", "Add blind-zone margin"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Echo", symptoms: ["Max read"], causes: ["Soft/absorb"], solution: "Change target" },
        { failure: "Jitter", symptoms: ["Unstable"], causes: ["Noise"], solution: "Average" },
        { failure: "Blind", symptoms: ["Near error"], causes: ["Min range"], solution: "Offset" },
      ],
    },
    history: {
      invention: {
        year: 1912,
        inventor: "Echo sounding (sonar)",
        discovery: "Sonar used ultrasound for ranging; later miniaturized for industry.",
        evolution: [
          { year: 1912, event: "Sonar" },
          { year: 1980, event: "Industrial ultrasonic" },
          { year: 2000, event: "Low-cost modules" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Time-of-Flight", definition: "Round-trip echo time." },
        { term: "Blind Zone", definition: "Minimum measurable distance." },
        { term: "Beam Angle", definition: "Cone of sensitivity." },
        { term: "Echo", definition: "Reflected sound return." },
      ],
    },
    interview: {
      beginner: [
        { question: "How measures distance?", answer: "Times the echo round-trip and uses d=c·t/2." },
        { question: "Typical frequency?", answer: "Around 40kHz." },
      ],
      intermediate: [
        { question: "Why temperature compensation?", answer: "Speed of sound varies with temperature." },
      ],
      advanced: [
        { question: "Soft targets problem?", answer: "Foam/cloth absorb ultrasound, no echo." },
      ],
      expert: [
        { question: "Improve accuracy?", answer: "Calibrate c with temperature, average readings." },
      ],
    },
    mcqs: [
      { question: "Distance formula:", options: ["c·t/2", "c·t", "2·c·t", "c/t"], correctAnswer: 0, explanation: "Half trip.", difficulty: "beginner" },
      { question: "Ultrasonic freq ~", options: ["40kHz", "40Hz", "4kHz", "400kHz"], correctAnswer: 0, explanation: "Common module.", difficulty: "beginner" },
      { question: "Blind zone is:", options: ["Min distance", "Max range", "Beam", "None"], correctAnswer: 0, explanation: "Near limit.", difficulty: "intermediate" },
      { question: "Soft target causes:", options: ["No echo", "Loud echo", "None", "Heat"], correctAnswer: 0, explanation: "Absorbs sound.", difficulty: "advanced" },
      { question: "c depends on:", options: ["Temperature", "Light", "Pressure only", "None"], correctAnswer: 0, explanation: "Sound speed vs T.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Ultrasonic Sensing Guide", author: "TI", year: 2020, url: "", type: "datasheet" },
        { title: "Sensor Handbook", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "microcontroller", relationship: "Times echo" },
        { id: "ir-sensor", relationship: "Alternative ranging" },
        { id: "proximity-sensor", relationship: "Similar use" },
      ],
    },
  },
  accelerometer: {
    overview: {
      whatIsIt: "An accelerometer measures proper acceleration (including gravity) along one or more axes.",
      whyExists: "Motion, tilt, and vibration sensing enable phones, stability, and safety systems.",
      whereUsed: "Used in smartphones, airbags, drones, and game controllers.",
    },
    working: {
      workingPrinciple: "A proof mass deflects under acceleration; capacitive or piezoelectric sensing converts deflection to a signal.",
      steps: [
        "Acceleration acts on proof mass",
        "Mass deflects against spring",
        "Capacitance/charge changes",
        "ASIC outputs acceleration",
      ],
      microscopicExplanation: "MEMS: etched silicon mass and fixed plates form a variable capacitor; ΔC ∝ displacement.",
    },
    construction: {
      internalParts: [
        { name: "Proof Mass", function: "Responds to a", material: "Silicon" },
        { name: "Spring", function: "Restores", material: "Silicon" },
        { name: "Sense Plates", function: "Capacitive sense", material: "Silicon" },
        { name: "ASIC", function: "Condition", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "1-Axis", description: "Single direction.", applications: ["Tilt"] },
        { name: "3-Axis", description: "X/Y/Z.", applications: ["Phones"] },
        { name: "Analog", description: "Voltage out.", applications: ["Simple"] },
        { name: "Digital (I²C)", description: "Bus output.", applications: ["MCU"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Force", formula: "F = m a", description: "Mass response.", variables: [{ symbol: "F", name: "Force", unit: "N" }, { symbol: "a", name: "Accel", unit: "m/s²" }], example: "1g = 9.81m/s²" },
        { name: "Displacement", formula: "x = F/k", description: "Spring deflection.", variables: [{ symbol: "x", name: "Displacement", unit: "m" }], example: "Small µm" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Range", typicalValues: "±2g to ±16g", notes: "Full scale" },
        { name: "Sensitivity", typicalValues: "mg/LSB", notes: "Resolution" },
        { name: "Bandwidth", typicalValues: "up to kHz", notes: "Response" },
        { name: "Axes", typicalValues: "1/2/3", notes: "Count" },
      ],
    },
    applications: {
      applications: [
        { category: "Consumer", description: "Orientation", examples: ["Phones"] },
        { category: "Automotive", description: "Airbag deploy", examples: ["Cars"] },
        { category: "Industrial", description: "Vibration", examples: ["Motors"] },
        { category: "Aerospace", description: "Stabilization", examples: ["Drones"] },
      ],
    },
    advantages: { advantages: ["Small", "Low power", "Multi-axis", "Digital", "Cheap (MEMS)"] },
    disadvantages: { disadvantages: ["Drift", "Noise", "Temperature error", "Saturation", "Cross-axis"] },
    selection: {
      steps: [
        { step: 1, title: "Range", description: "Above max accel." },
        { step: 2, title: "Axes", description: "1/2/3 as needed." },
        { step: 3, title: "Interface", description: "Analog/I²C/SPI." },
        { step: 4, title: "Bandwidth", description: "Match signal." },
      ],
      tips: ["Calibrate zero-g offset", "Filter noise", "Temperature-compensate"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Drift", symptoms: ["Offset"], causes: ["Temp"], solution: "Recalibrate" },
        { failure: "Saturation", symptoms: ["Clipped"], causes: ["High a"], solution: "Larger range" },
        { failure: "Noisy", symptoms: ["Jitter"], causes: ["EMI"], solution: "Filter" },
      ],
    },
    history: {
      invention: {
        year: 1970,
        inventor: "MEMS research (e.g., Draper)",
        discovery: "Micro-machined accelerometers enabled ubiquitous motion sensing.",
        evolution: [
          { year: 1970, event: "Early MEMS" },
          { year: 1990, event: "Automotive airbag" },
          { year: 2007, event: "Smartphone integration" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "g", definition: "Acceleration of gravity (9.81m/s²)." },
        { term: "Proof Mass", definition: "Moving inertial element." },
        { term: "MEMS", definition: "Micro-electromechanical system." },
        { term: "Cross-axis", definition: "Sensitivity to other axes." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does it measure?", answer: "Acceleration including gravity (tilt)." },
        { question: "At rest reads?", answer: "About 1g from gravity." },
      ],
      intermediate: [
        { question: "Why 1g at rest?", answer: "Gravity acts as acceleration on the mass." },
      ],
      advanced: [
        { question: "MEMS sensing method?", answer: "Capacitive change of moving mass vs fixed plates." },
      ],
      expert: [
        { question: "Reduce drift?", answer: "Calibrate offset/gain and temperature-compensate." },
      ],
    },
    mcqs: [
      { question: "At rest accelerometer reads ~", options: ["1g", "0g", "9.81m", "None"], correctAnswer: 0, explanation: "Gravity.", difficulty: "beginner" },
      { question: "MEMS uses:", options: ["Capacitive mass", "Coil", "Diode", "Resistor"], correctAnswer: 0, explanation: "Variable capacitor.", difficulty: "advanced" },
      { question: "F = m a gives:", options: ["Force on mass", "Voltage", "Current", "None"], correctAnswer: 0, explanation: "Inertial force.", difficulty: "beginner" },
      { question: "3-axis measures:", options: ["X/Y/Z", "Only X", "Speed", "None"], correctAnswer: 0, explanation: "Three directions.", difficulty: "beginner" },
      { question: "Drift from:", options: ["Temperature", "Light", "Sound", "None"], correctAnswer: 0, explanation: "Thermal offset.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "MEMS Accelerometer Datasheet", author: "ST/ADI", year: 2021, url: "", type: "datasheet" },
        { title: "MEMS Design", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "gyroscope", relationship: "Rotation pair" },
        { id: "microcontroller", relationship: "Reads" },
        { id: "adc", relationship: "Analog path" },
      ],
    },
  },
  gyroscope: {
    overview: {
      whatIsIt: "A gyroscope measures angular velocity (rotation rate) about one or more axes.",
      whyExists: "Rotation sensing enables stabilization, navigation, and gesture control.",
      whereUsed: "Used in drones, phones, gaming, and inertial navigation.",
    },
    working: {
      workingPrinciple: "MEMS gyros use the Coriolis effect: a vibrating mass deflected by rotation induces a measurable signal.",
      steps: [
        "Drive mass to vibrate",
        "Apply rotation",
        "Coriolis force deflects mass",
        "Sense deflection as signal",
      ],
      microscopicExplanation: "Coriolis acceleration on the oscillating mass produces capacitive change proportional to angular rate.",
    },
    construction: {
      internalParts: [
        { name: "Vibrating Mass", function: "Senses rotation", material: "Silicon" },
        { name: "Drive Combs", function: "Oscillate", material: "Silicon" },
        { name: "Sense Combs", function: "Detect", material: "Silicon" },
        { name: "ASIC", function: "Condition", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "1-Axis (Yaw)", description: "Single rotation.", applications: ["Compass"] },
        { name: "3-Axis", description: "Full rotation.", applications: ["Drones"] },
        { name: "Analog", description: "Voltage out.", applications: ["Simple"] },
        { name: "Digital", description: "Bus out.", applications: ["MCU"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Coriolis", formula: "a_c = 2 ω × v", description: "Coriolis acceleration.", variables: [{ symbol: "a_c", name: "Accel", unit: "m/s²" }, { symbol: "ω", name: "Ang vel", unit: "rad/s" }], example: "Signal ∝ ω" },
        { name: "Angle", formula: "θ = ∫ ω dt", description: "Integrate rate.", variables: [{ symbol: "θ", name: "Angle", unit: "rad" }], example: "Dead-reckoning" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Range", typicalValues: "±250 to ±2000 °/s", notes: "Full scale" },
        { name: "Sensitivity", typicalValues: "mdps/LSB", notes: "Resolution" },
        { name: "Drift", typicalValues: "°/s bias", notes: "Stability" },
        { name: "Axes", typicalValues: "1/3", notes: "Count" },
      ],
    },
    applications: {
      applications: [
        { category: "Stabilization", description: "Keep level", examples: ["Drones", "Gimbals"] },
        { category: "Navigation", description: "IMU", examples: ["Robots"] },
        { category: "Consumer", description: "Gesture", examples: ["Phones"] },
      ],
    },
    advantages: { advantages: ["Small", "Low power", "Multi-axis", "Digital", "Cheap (MEMS)"] },
    disadvantages: { disadvantages: ["Bias drift", "Temperature error", "Noise", "Saturation", "Cross-coupling"] },
    selection: {
      steps: [
        { step: 1, title: "Range", description: "Above max rate." },
        { step: 2, title: "Axes", description: "1 or 3." },
        { step: 3, title: "Interface", description: "Analog/I²C/SPI." },
        { step: 4, title: "Drift", description: "Acceptable bias." },
      ],
      tips: ["Calibrate bias", "Temperature-compensate", "Fuse with accel/mag"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Bias Drift", symptoms: ["Angle error"], causes: ["Temp"], solution: "Recalibrate" },
        { failure: "Saturation", symptoms: ["Clipped"], causes: ["High ω"], solution: "Larger range" },
        { failure: "Noise", symptoms: ["Jitter"], causes: ["EMI"], solution: "Filter" },
      ],
    },
    history: {
      invention: {
        year: 1852,
        inventor: "Léon Foucault (concept)",
        discovery: "Foucault demonstrated Earth's rotation with a gyroscope; MEMS later miniaturized it.",
        evolution: [
          { year: 1852, event: "Gyroscope concept" },
          { year: 1990, event: "MEMS gyro" },
          { year: 2007, event: "Smartphone use" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Coriolis", definition: "Force on moving mass in rotating frame." },
        { term: "Bias", definition: "Zero-rate offset." },
        { term: "IMU", definition: "Inertial measurement unit." },
        { term: "Angular Rate", definition: "Rotation speed (°/s)." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a gyro measure?", answer: "Angular velocity (rotation rate)." },
        { question: "MEMS principle?", answer: "Coriolis effect on a vibrating mass." },
      ],
      intermediate: [
        { question: "Why integrate for angle?", answer: "Angle is the integral of angular rate over time." },
      ],
      advanced: [
        { question: "Bias drift issue?", answer: "Integration of bias causes angle error growth." },
      ],
      expert: [
        { question: "Improve heading?", answer: "Sensor-fuse gyro with accel/magnetometer (Kalman)." },
      ],
    },
    mcqs: [
      { question: "Gyro measures:", options: ["Angular velocity", "Acceleration", "Position", "Force"], correctAnswer: 0, explanation: "Rotation rate.", difficulty: "beginner" },
      { question: "MEMS gyro uses:", options: ["Coriolis", "Hall", "Piezo", "Seebeck"], correctAnswer: 0, explanation: "Coriolis force.", difficulty: "advanced" },
      { question: "Angle from:", options: ["Integrate rate", "Differentiate", "Multiply", "None"], correctAnswer: 0, explanation: "θ = ∫ω.", difficulty: "intermediate" },
      { question: "Bias causes:", options: ["Angle drift", "No effect", "Gain", "None"], correctAnswer: 0, explanation: "Integration error.", difficulty: "advanced" },
      { question: "Common with accel as:", options: ["IMU", "ADC", "Relay", "None"], correctAnswer: 0, explanation: "Inertial unit.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "MEMS Gyro Datasheet", author: "ST/Invensense", year: 2021, url: "", type: "datasheet" },
        { title: "Inertial Sensors", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "accelerometer", relationship: "IMU pair" },
        { id: "microcontroller", relationship: "Reads" },
        { id: "magnetometer-ish", relationship: "Heading fusion" },
      ],
    },
  },
  ldr: {
    overview: {
      whatIsIt: "An LDR (light-dependent resistor or photoresistor) changes resistance with incident light intensity.",
      whyExists: "LDRs give a simple, cheap way to sense ambient light.",
      whereUsed: "Used in street lights, camera exposure, and night lamps.",
    },
    working: {
      workingPrinciple: "Photons excite electrons in a semiconductor (e.g., cadmium sulfide), increasing carriers and lowering resistance as light rises.",
      steps: [
        "Light hits the semiconductor",
        "Photons free electrons",
        "Conductivity increases",
        "Resistance drops",
      ],
      microscopicExplanation: "Intrinsic photoconductivity: photon energy bridges the band gap, creating electron-hole pairs.",
    },
    construction: {
      internalParts: [
        { name: "Semiconductor Layer", function: "Photoconductive", material: "CdS" },
        { name: "Electrodes", function: "Collect", material: "Metal comb" },
        { name: "Substrate", function: "Support", material: "Ceramic" },
        { name: "Encapsulation", function: "Protect", material: "Epoxy" },
      ],
    },
    types: {
      types: [
        { name: "CdS Cell", description: "Visible light.", applications: ["Lamps"] },
        { name: "PbS Cell", description: "Infrared.", applications: ["IR detect"] },
        { name: "High-resistance", description: "Dark high R.", applications: ["Switching"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Resistance vs Light", formula: "R ∝ 1 / L^γ", description: "Light-dependent.", variables: [{ symbol: "R", name: "Resistance", unit: "Ω" }, { symbol: "L", name: "Light", unit: "lux" }], example: "kΩ in dark, Ω in light" },
        { name: "Voltage Divider", formula: "V_out = V (R2/(R1+R2))", description: "Read as voltage.", variables: [{ symbol: "V_out", name: "Voltage", unit: "V" }], example: "With fixed R" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Dark Resistance", typicalValues: "1MΩ+", notes: "No light" },
        { name: "Light Resistance", typicalValues: "100Ω to 1kΩ", notes: "Bright" },
        { name: "Response", typicalValues: "10-100ms", notes: "Slow" },
        { name: "Spectral", typicalValues: "Visible/IR", notes: "Peak" },
      ],
    },
    applications: {
      applications: [
        { category: "Lighting", description: "Auto on/off", examples: ["Street lights"] },
        { category: "Consumer", description: "Exposure", examples: ["Cameras"] },
        { category: "Toys", description: "Light react", examples: ["Gadgets"] },
      ],
    },
    advantages: { advantages: ["Cheap", "Simple", "No bias needed", "Rugged", "Analog"] },
    disadvantages: { disadvantages: ["Slow", "Nonlinear", "Temperature drift", "CdS toxic", "Hysteresis"] },
    selection: {
      steps: [
        { step: 1, title: "Spectral", description: "Match light." },
        { step: 2, title: "Range", description: "Dark/light R." },
        { step: 3, title: "Speed", description: "Slow ok?" },
        { step: 4, title: "Divider", description: "Pick fixed R." },
      ],
      tips: ["Use divider + ADC", "Avoid CdS if RoHS strict", "Average for stability"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Stuck High", symptoms: ["Always dark"], causes: ["Dead"], solution: "Replace" },
        { failure: "Slow", symptoms: ["Lag"], causes: ["Inherent"], solution: "Accept/tolerance" },
        { failure: "Drift", symptoms: ["Wrong"], causes: ["Temp"], solution: "Compensate" },
      ],
    },
    history: {
      invention: {
        year: 1873,
        inventor: "Willoughby Smith (photoconductivity)",
        discovery: "Smith found selenium's resistance changed with light, founding photodetection.",
        evolution: [
          { year: 1873, event: "Photoconductivity" },
          { year: 1930, event: "CdS cells" },
          { year: 2000, event: "Replaced by photodiodes" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dark, dry.",
      disposal: "CdS is hazardous e-waste.",
    },
    glossary: {
      glossary: [
        { term: "Photoconductivity", definition: "Conductance change with light." },
        { term: "CdS", definition: "Cadmium sulfide LDR material." },
        { term: "Lux", definition: "Unit of illuminance." },
        { term: "Hysteresis", definition: "Lag between light/dark response." },
      ],
    },
    interview: {
      beginner: [
        { question: "LDR resistance with light?", answer: "It decreases as light increases." },
        { question: "How read it?", answer: "Use a voltage divider into an ADC." },
      ],
      intermediate: [
        { question: "Why slow?", answer: "Carrier recombination is relatively slow." },
      ],
      advanced: [
        { question: "CdS concern?", answer: "Toxic; RoHS restricts in new designs." },
      ],
      expert: [
        { question: "Better alternative?", answer: "Photodiodes/phototransistors for speed/linearity." },
      ],
    },
    mcqs: [
      { question: "LDR resistance with light:", options: ["Decreases", "Increases", "Constant", "None"], correctAnswer: 0, explanation: "Photoconductive.", difficulty: "beginner" },
      { question: "LDR material often:", options: ["CdS", "Si", "Cu", "Fe"], correctAnswer: 0, explanation: "Cadmium sulfide.", difficulty: "beginner" },
      { question: "Read via:", options: ["Voltage divider", "Direct ADC current", "Relay", "None"], correctAnswer: 0, explanation: "Resistive divider.", difficulty: "intermediate" },
      { question: "LDR is:", options: ["Slow", "Very fast", "Digital", "None"], correctAnswer: 0, explanation: "Tens of ms.", difficulty: "intermediate" },
      { question: "CdS issue:", options: ["Toxic/RoHS", "Too fast", "Expensive", "None"], correctAnswer: 0, explanation: "Hazardous.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "LDR Datasheet", author: "Manufacturer", year: 2020, url: "", type: "datasheet" },
        { title: "Optoelectronics", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "photodiode", relationship: "Faster alternative" },
        { id: "resistor", relationship: "Divider partner" },
        { id: "adc", relationship: "Reads voltage" },
      ],
    },
  },
  "proximity-sensor": {
    overview: {
      whatIsIt: "A proximity sensor detects the presence of an object without physical contact.",
      whyExists: "Non-contact detection improves reliability and enables automation.",
      whereUsed: "Used in phones, industrial automation, and touchless switches.",
    },
    working: {
      workingPrinciple: "Types vary: inductive senses metal via eddy currents; capacitive senses any material; optical uses light; ultrasonic uses sound.",
      steps: [
        "Emitter/sensor active",
        "Field interacts with object",
        "Change detected (eddy/light/capacitance)",
        "Output toggles",
      ],
      microscopicExplanation: "Inductive: oscillator's coil field induces eddy currents in metal, damping the oscillation when near.",
    },
    construction: {
      internalParts: [
        { name: "Coil/Antenna", function: "Field", material: "Copper" },
        { name: "Oscillator", function: "Drive", material: "Silicon" },
        { name: "Detector", function: "Sense change", material: "Silicon" },
        { name: "Output", function: "Signal", material: "Transistor" },
      ],
    },
    types: {
      types: [
        { name: "Inductive", description: "Metal only.", applications: ["Industry"] },
        { name: "Capacitive", description: "Any material.", applications: ["Liquids"] },
        { name: "Optical", description: "Light beam.", applications: ["Counters"] },
        { name: "Magnetic", description: "Magnet target.", applications: ["Position"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Sense Distance", formula: "Sn (rated)", description: "Nominal range.", variables: [{ symbol: "Sn", name: "Distance", unit: "mm" }], example: "4mm, 8mm common" },
        { name: "Eddy Damping", formula: "Δf ∝ proximity", description: "Frequency shift.", variables: [{ symbol: "Δf", name: "Freq shift", unit: "Hz" }], example: "Oscillator drop" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Range", typicalValues: "1mm to 50mm", notes: "By type" },
        { name: "Target", typicalValues: "Metal/any", notes: "Type dependent" },
        { name: "Output", typicalValues: "NPN/PNP, analog", notes: "Logic" },
        { name: "Supply", typicalValues: "10-30V", notes: "DC" },
      ],
    },
    applications: {
      applications: [
        { category: "Automation", description: "Part detect", examples: ["Conveyors"] },
        { category: "Consumer", description: "Approach", examples: ["Phones"] },
        { category: "Safety", description: "Guard", examples: ["Doors"] },
      ],
    },
    advantages: { advantages: ["Non-contact", "Rugged", "Long life", "Fast", "No wear"] },
    disadvantages: { disadvantages: ["Material limit (inductive)", "Range limited", "Environmental (dust/water)", "Calibration", "Blind spot"] },
    selection: {
      steps: [
        { step: 1, title: "Target", description: "Metal? capacitive?" },
        { step: 2, title: "Range", description: "Match distance." },
        { step: 3, title: "Output", description: "NPN/PNP/analog." },
        { step: 4, title: "Environment", description: "IP rating." },
      ],
      tips: ["Shielded vs unshielded", "Avoid metal nearby (inductive)", "Use analog for distance"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Detect", symptoms: ["No trigger"], causes: ["Wrong target"], solution: "Match type" },
        { failure: "False", symptoms: ["Stuck on"], causes: ["Stray metal"], solution: "Relocate" },
        { failure: "Short Range", symptoms: ["Late"], causes: ["Misalign"], solution: "Align" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Industrial sensing evolution",
        discovery: "Inductive proximity sensors emerged with factory automation.",
        evolution: [
          { year: 1960, event: "Inductive sensors" },
          { year: 1980, event: "Capacitive/optical" },
          { year: 2000, event: "Miniature SMD" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Eddy Current", definition: "Induced current in metal target." },
        { term: "NPN/PNP", definition: "Output transistor type." },
        { term: "Sn", definition: "Rated sensing distance." },
        { term: "Shielded", description: "Confines field to front." },
      ],
    },
    interview: {
      beginner: [
        { question: "Inductive senses?", answer: "Only metal targets." },
        { question: "Capacitive senses?", answer: "Any material including liquids." },
      ],
      intermediate: [
        { question: "Why shielded?", answer: "Prevents false triggers from side metal." },
      ],
      advanced: [
        { question: "Output types?", answer: "NPN (sink) or PNP (source) open-collector." },
      ],
      expert: [
        { question: "Analog proximity use?", answer: "Gives distance proportional to position." },
      ],
    },
    mcqs: [
      { question: "Inductive proximity senses:", options: ["Metal", "Plastic", "Water", "All"], correctAnswer: 0, explanation: "Eddy currents.", difficulty: "beginner" },
      { question: "Capacitive senses:", options: ["Any material", "Metal only", "Light", "None"], correctAnswer: 0, explanation: "Dielectric change.", difficulty: "beginner" },
      { question: "NPN output is:", options: ["Sinking", "Sourcing", "Relay", "None"], correctAnswer: 0, explanation: "Pulls to ground.", difficulty: "intermediate" },
      { question: "Shielded reduces:", options: ["Side false triggers", "Range", "Voltage", "None"], correctAnswer: 0, explanation: "Confines field.", difficulty: "advanced" },
      { question: "Sn means:", options: ["Rated distance", "Supply", "Speed", "None"], correctAnswer: 0, explanation: "Nominal sense range.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Proximity Sensor Guide", author: "Omron/Pepperl+Fuchs", year: 2021, url: "", type: "datasheet" },
        { title: "Industrial Sensing", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "hall-sensor", relationship: "Magnetic detect" },
        { id: "ir-sensor", relationship: "Optical detect" },
        { id: "microcontroller", relationship: "Reads" },
      ],
    },
  },

  "humidity-sensor": {
    overview: {
      whatIsIt: "A humidity sensor measures the amount of water vapor in air (relative or absolute humidity).",
      whyExists: "Humidity control is important for comfort, storage, and industrial processes.",
      whereUsed: "Used in HVAC, weather stations, and agriculture.",
    },
    working: {
      workingPrinciple: "Capacitive types use a hygroscopic dielectric whose capacitance changes with moisture; resistive types change resistance.",
      steps: [
        "Air moisture reaches sensor",
        "Hygroscopic layer absorbs water",
        "Dielectric constant changes",
        "Capacitance/resistance shifts",
      ],
      microscopicExplanation: "Water molecules alter the polymer/ceramic permittivity, changing the capacitor's value linearly with RH.",
    },
    construction: {
      internalParts: [
        { name: "Hygroscopic Film", function: "Absorbs moisture", material: "Polymer/ceramic" },
        { name: "Electrodes", function: "Form capacitor", material: "Gold" },
        { name: "Substrate", function: "Support", material: "Silicon" },
        { name: "ASIC", function: "Condition", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "Capacitive", description: "C changes with RH.", applications: ["HVAC"] },
        { name: "Resistive", description: "R changes with RH.", applications: ["Low-cost"] },
        { name: "Thermal (Chilled Mirror)", description: "Dew point.", applications: ["Lab"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Relative Humidity", formula: "RH = (P_v / P_sat) × 100%", description: "Vapor vs saturation.", variables: [{ symbol: "RH", name: "Humidity", unit: "%" }, { symbol: "P_v", name: "Vapor pressure", unit: "Pa" }], example: "50% typical" },
        { name: "Capacitance", formula: "C = ε A / d", description: "Dielectric shift.", variables: [{ symbol: "C", name: "Capacitance", unit: "pF" }], example: "Δ with RH" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Range", typicalValues: "0-100% RH", notes: "Full" },
        { name: "Accuracy", typicalValues: "±2% to ±5%", notes: "RH" },
        { name: "Output", typicalValues: "I²C/analog", notes: "Digital common" },
        { name: "Response", typicalValues: "seconds", notes: "Recovery" },
      ],
    },
    applications: {
      applications: [
        { category: "Climate", description: "Comfort", examples: ["Thermostats"] },
        { category: "Storage", description: "Preserve", examples: ["Museums"] },
        { category: "Agriculture", description: "Irrigation", examples: ["Greenhouses"] },
      ],
    },
    advantages: { advantages: ["Small", "Digital", "Low power", "Accurate", "Cheap (MEMS)"] },
    disadvantages: { disadvantages: ["Drift", "Condensation damage", "Slow recovery", "Temperature effect", "Contamination"] },
    selection: {
      steps: [
        { step: 1, title: "Range", description: "0-100% RH." },
        { step: 2, title: "Accuracy", description: "Needed %." },
        { step: 3, title: "Output", description: "I²C/analog." },
        { step: 4, title: "Environment", description: "Avoid condensation." },
      ],
      tips: ["Pair with temp sensor", "Allow recovery time", "Calibrate periodically"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Stuck", symptoms: ["No change"], causes: ["Condensation"], solution: "Dry out" },
        { failure: "Drift", symptoms: ["Wrong"], causes: ["Aging"], solution: "Recalibrate" },
        { failure: "Slow", symptoms: ["Lag"], causes: ["Film"], solution: "Accept" },
      ],
    },
    history: {
      invention: {
        year: 1950,
        inventor: "Hygrometry evolution",
        discovery: "Capacitive polymer humidity sensors enabled low-cost digital RH sensing.",
        evolution: [
          { year: 1950, event: "Hair/film sensors" },
          { year: 1980, event: "Capacitive polymer" },
          { year: 2000, event: "Integrated RH+T sensors" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Avoid condensation.",
      storage: "Sealed.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "RH", definition: "Relative humidity percent." },
        { term: "Dew Point", definition: "Temp where condensation begins." },
        { term: "Hygroscopic", definition: "Absorbs moisture." },
        { term: "Permittivity", definition: "Dielectric constant." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does it measure?", answer: "Water vapor content (relative humidity)." },
        { question: "Common type?", answer: "Capacitive polymer sensor." },
      ],
      intermediate: [
        { question: "Why pair with temp?", answer: "RH depends on temperature; dew point needs both." },
      ],
      advanced: [
        { question: "Condensation risk?", answer: "Liquid water damages the hygroscopic film." },
      ],
      expert: [
        { question: "Improve accuracy?", answer: "Calibrate and protect from contamination/condensation." },
      ],
    },
    mcqs: [
      { question: "RH is:", options: ["Vapor/sat ×100%", "Temp", "Pressure", "None"], correctAnswer: 0, explanation: "Relative humidity.", difficulty: "beginner" },
      { question: "Capacitive humidity uses:", options: ["Dielectric change", "Coil", "Diode", "Resistor only"], correctAnswer: 0, explanation: "Permittivity shift.", difficulty: "intermediate" },
      { question: "Condensation can:", options: ["Damage film", "Help", "None", "Cool"], correctAnswer: 0, explanation: "Wets sensor.", difficulty: "advanced" },
      { question: "Often paired with:", options: ["Temperature", "Pressure", "Light", "None"], correctAnswer: 0, explanation: "For dew point.", difficulty: "beginner" },
      { question: "Output often:", options: ["I²C", "Relay", "AC", "None"], correctAnswer: 0, explanation: "Digital bus.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Humidity Sensor Datasheet", author: "Sensirion", year: 2021, url: "", type: "datasheet" },
        { title: "Environmental Sensing", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "temperature-sensor", relationship: "Paired" },
        { id: "microcontroller", relationship: "Reads" },
        { id: "adc", relationship: "Analog path" },
      ],
    },
  },
  "gas-sensor": {
    overview: {
      whatIsIt: "A gas sensor detects the presence and concentration of gases (e.g., CO, methane, VOC).",
      whyExists: "Gas detection protects life and equipment from toxic or explosive atmospheres.",
      whereUsed: "Used in alarms, air quality monitors, and industrial safety.",
    },
    working: {
      workingPrinciple: "Metal-oxide (MQ) sensors change resistance when target gas reacts on a heated sensing element; electrochemical cells generate current.",
      steps: [
        "Gas reaches heated element",
        "Chemical reaction occurs",
        "Resistance/current changes",
        "Circuit outputs concentration",
      ],
      microscopicExplanation: "Heated SnO₂ surface adsorbs oxygen; target gas changes carrier density, altering resistance.",
    },
    construction: {
      internalParts: [
        { name: "Sensing Element", function: "Reacts with gas", material: "SnO₂" },
        { name: "Heater", function: "Raises temp", material: "Platinum coil" },
        { name: "Electrodes", function: "Measure", material: "Gold" },
        { name: "Housing", function: "Vent", material: "Mesh/plastic" },
      ],
    },
    types: {
      types: [
        { name: "Metal-Oxide (MQ)", description: "Resistive, broad.", applications: ["Air quality"] },
        { name: "Electrochemical", description: "Current output.", applications: ["CO alarms"] },
        { name: "NDIR (CO₂)", description: "Infrared absorption.", applications: ["HVAC"] },
        { name: "Catalytic (LEL)", description: "Combustible gas.", applications: ["Explosion"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Resistance Ratio", formula: "Rs/R0 ∝ gas", description: "Concentration relation.", variables: [{ symbol: "Rs", name: "Sensor R", unit: "Ω" }, { symbol: "R0", name: "Clean R", unit: "Ω" }], example: "Calibrate curve" },
        { name: "PPM", formula: "C = f(Rs/R0)", description: "Concentration.", variables: [{ symbol: "C", name: "Concentration", unit: "ppm" }], example: "From datasheet" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Target Gas", typicalValues: "CO, CH₄, LPG", notes: "Specific" },
        { name: "Range", typicalValues: "ppm to %", notes: "By type" },
        { name: "Heater", typicalValues: "5V, ~100mA", notes: "MQ needs heat" },
        { name: "Response", typicalValues: "seconds-min", notes: "Warm-up" },
      ],
    },
    applications: {
      applications: [
        { category: "Safety", description: "Toxic detect", examples: ["CO alarms"] },
        { category: "Air Quality", description: "VOC monitor", examples: ["Homes"] },
        { category: "Industry", description: "Leak detect", examples: ["Plants"] },
      ],
    },
    advantages: { advantages: ["Detects many gases", "Low cost (MQ)", "Sensitive", "Small", "Digital options"] },
    disadvantages: { disadvantages: ["Cross-sensitive", "Needs heater power", "Warm-up", "Drift", "Calibration"] },
    selection: {
      steps: [
        { step: 1, title: "Target Gas", description: "Pick specific sensor." },
        { step: 2, title: "Range", description: "Match concentration." },
        { step: 3, title: "Power", description: "Heater budget." },
        { step: 4, title: "Calibration", description: "Baseline R0." },
      ],
      tips: ["Allow warm-up", "Ventilate for baseline", "Cross-sensitivity aware"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Response", symptoms: ["Flat"], causes: ["Dead heater"], solution: "Replace" },
        { failure: "Drift", symptoms: ["Wrong"], causes: ["Aging"], solution: "Recalibrate" },
        { failure: "False", symptoms: ["Triggers"], causes: ["Other gas"], solution: "Filter/select" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Figaro (MQ) evolution",
        discovery: "Metal-oxide semiconductor gas sensors enabled cheap gas detection.",
        evolution: [
          { year: 1960, event: "Taguchi (MQ) sensor" },
          { year: 1980, event: "CO alarms" },
          { year: 2000, event: "MEMS gas sensors" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Heater current.",
      thermalSafety: "Element hot.",
      handling: "Avoid explosive atmospheres when testing.",
      storage: "Sealed.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "PPM", definition: "Parts per million concentration." },
        { term: "R0", definition: "Sensor resistance in clean air." },
        { term: "Cross-sensitivity", definition: "Responds to other gases." },
        { term: "LEL", definition: "Lower explosive limit." },
      ],
    },
    interview: {
      beginner: [
        { question: "MQ sensor needs?", answer: "A heated element to react with gas." },
        { question: "What changes?", answer: "Resistance changes with gas concentration." },
      ],
      intermediate: [
        { question: "Why calibrate R0?", answer: "Baseline in clean air sets the ratio curve." },
      ],
      advanced: [
        { question: "Cross-sensitivity issue?", answer: "Sensor may respond to multiple gases, reducing specificity." },
      ],
      expert: [
        { question: "Best CO₂ sensor?", answer: "NDIR for specificity over metal-oxide." },
      ],
    },
    mcqs: [
      { question: "MQ sensor uses:", options: ["Heated metal-oxide", "Coil only", "Diode", "Capacitor"], correctAnswer: 0, explanation: "SnO₂ heated.", difficulty: "intermediate" },
      { question: "R0 is:", options: ["Clean-air resistance", "Max R", "Voltage", "None"], correctAnswer: 0, explanation: "Baseline.", difficulty: "intermediate" },
      { question: "CO alarms often:", options: ["Electrochemical", "MQ", "PIR", "None"], correctAnswer: 0, explanation: "Specific current.", difficulty: "advanced" },
      { question: "Needs:", options: ["Warm-up", "Cooling", "Light", "None"], correctAnswer: 0, explanation: "Heater stabilizes.", difficulty: "beginner" },
      { question: "Cross-sensitivity means:", options: ["Responds to other gases", "None", "High power", "None"], correctAnswer: 0, explanation: "Non-specific.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "Gas Sensor Datasheet", author: "Figaro/Sensirion", year: 2021, url: "", type: "datasheet" },
        { title: "Air Quality Monitoring", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "temperature-sensor", relationship: "Compensation" },
        { id: "microcontroller", relationship: "Reads" },
        { id: "adc", relationship: "Analog" },
      ],
    },
  },
  "ir-sensor": {
    overview: {
      whatIsIt: "An IR sensor detects infrared radiation, either as a proximity/obstacle detector or as a thermal/remote receiver.",
      whyExists: "IR sensing enables remote control, night vision, and non-contact detection.",
      whereUsed: "Used in TV remotes, proximity modules, and PIR motion detectors.",
    },
    working: {
      workingPrinciple: "Active IR uses an LED and photodiode with reflected light; PIR detects body heat via pyroelectric elements.",
      steps: [
        "IR LED emits (active)",
        "Object reflects IR",
        "Photodiode receives",
        "Or PIR senses heat change",
        "Output toggles",
      ],
      microscopicExplanation: "Pyroelectric crystal generates charge when temperature (IR flux) changes; active uses reflectance.",
    },
    construction: {
      internalParts: [
        { name: "IR LED", function: "Emit", material: "GaAs" },
        { name: "Photodiode", function: "Receive", material: "Si" },
        { name: "Pyro Element", function: "Heat sense", material: "Lithium tantalate" },
        { name: "Lens", function: "Focus", material: "Plastic" },
      ],
    },
    types: {
      types: [
        { name: "Active (reflective)", description: "Emitter+receiver.", applications: ["Proximity"] },
        { name: "PIR", description: "Motion/heat.", applications: ["Security"] },
        { name: "IR Receiver", description: "Decodes remote.", applications: ["TV"] },
        { name: "Thermal Array", description: "Temperature map.", applications: ["Imaging"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Reflectance", formula: "V ∝ reflected IR", description: "Distance signal.", variables: [{ symbol: "V", name: "Voltage", unit: "V" }], example: "Closer = stronger" },
        { name: "Stefan-Boltzmann", formula: "P = ε σ T⁴", description: "Emitted IR power.", variables: [{ symbol: "P", name: "Power", unit: "W/m²" }, { symbol: "T", name: "Temp", unit: "K" }], example: "Body heat" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Wavelength", typicalValues: "850-940nm", notes: "Near IR" },
        { name: "Range", typicalValues: "2cm to 10m", notes: "By type" },
        { name: "Output", typicalValues: "Digital/analog", notes: "Varied" },
        { name: "Field", typicalValues: "Narrow/wide", notes: "Lens" },
      ],
    },
    applications: {
      applications: [
        { category: "Consumer", description: "Remote control", examples: ["TV"] },
        { category: "Security", description: "Motion", examples: ["PIR"] },
        { category: "Robotics", description: "Line/edge", examples: ["Bots"] },
      ],
    },
    advantages: { advantages: ["Cheap", "Non-contact", "Low power", "Small", "Versatile"] },
    disadvantages: { disadvantages: ["Sunlight interference", "Black surfaces absorb", "Limited range", "Ambient IR noise", "Beam alignment"] },
    selection: {
      steps: [
        { step: 1, title: "Type", description: "Active/PIR/receiver." },
        { step: 2, title: "Range", description: "Match distance." },
        { step: 3, title: "Output", description: "Digital/analog." },
        { step: 4, title: "Environment", description: "Avoid sunlight." },
      ],
      tips: ["Modulate to reject ambient", "Use IR filter", "Shield from sun"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Detect", symptoms: ["Dead"], causes: ["Sunlight"], solution: "Shield/modulate" },
        { failure: "False", symptoms: ["Triggers"], causes: ["Heat source"], solution: "Reposition" },
        { failure: "Weak", symptoms: ["Short"], causes: ["Low V"], solution: "Check supply" },
      ],
    },
    history: {
      invention: {
        year: 1950,
        inventor: "IR detector evolution",
        discovery: "Pyroelectric and photodiode IR sensing enabled remote and motion detection.",
        evolution: [
          { year: 1950, event: "IR photodiodes" },
          { year: 1970, event: "PIR motion" },
          { year: 1990, event: "IR remote ubiquitous" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "PIR", definition: "Passive infrared motion sensor." },
        { term: "Pyroelectric", definition: "Charge from temperature change." },
        { term: "Near-IR", definition: "850-940nm band." },
        { term: "Modulation", definition: "Pulsing to reject ambient." },
      ],
    },
    interview: {
      beginner: [
        { question: "PIR senses?", answer: "Changes in infrared (body heat), not distance." },
        { question: "Sunlight problem?", answer: "Ambient IR overwhelms the sensor." },
      ],
      intermediate: [
        { question: "Why modulate IR?", answer: "To distinguish signal from ambient light." },
      ],
      advanced: [
        { question: "Active vs PIR?", answer: "Active measures reflectance/distance; PIR detects motion only." },
      ],
      expert: [
        { question: "Improve robustness?", answer: "Modulate, filter, and use differential detection." },
      ],
    },
    mcqs: [
      { question: "PIR detects:", options: ["Heat motion", "Distance", "Color", "Sound"], correctAnswer: 0, explanation: "Infrared change.", difficulty: "beginner" },
      { question: "Sunlight causes:", options: ["Interference", "None", "Cooling", "None"], correctAnswer: 0, explanation: "Ambient IR.", difficulty: "intermediate" },
      { question: "IR wavelength ~", options: ["940nm", "940µm", "94nm", "9.4nm"], correctAnswer: 0, explanation: "Near IR.", difficulty: "beginner" },
      { question: "Modulation helps:", options: ["Reject ambient", "Increase range", "Cool", "None"], correctAnswer: 0, explanation: "Separates signal.", difficulty: "advanced" },
      { question: "Active IR uses:", options: ["LED+photodiode", "Coil", "Mic", "None"], correctAnswer: 0, explanation: "Reflectance.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "IR Sensor Datasheet", author: "Sharp/Vishay", year: 2021, url: "", type: "datasheet" },
        { title: "Optoelectronics", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "photodiode", relationship: "Receiver" },
        { id: "led", relationship: "IR emitter" },
        { id: "proximity-sensor", relationship: "Similar use" },
      ],
    },
  },
  "hall-sensor": {
    overview: {
      whatIsIt: "A Hall-effect sensor detects magnetic fields and is used for proximity, position, and current sensing.",
      whyExists: "Non-contact magnetic sensing is robust and immune to dust, light, and wear.",
      whereUsed: "Used in speedometers, BLDC motors, and contactless current measurement.",
    },
    working: {
      workingPrinciple: "A current-carrying conductor in a magnetic field develops a transverse voltage (Hall voltage) proportional to field strength.",
      steps: [
        "Current flows through plate",
        "Magnetic field applied perpendicular",
        "Lorentz force deflects carriers",
        "Hall voltage appears across sides",
      ],
      microscopicExplanation: "Lorentz force qv×B separates charges, building an electric field (Hall voltage) balancing the force.",
    },
    construction: {
      internalParts: [
        { name: "Hall Plate", function: "Senses field", material: "GaAs/Si" },
        { name: "Current Source", function: "Drives", material: "Silicon" },
        { name: "Amplifier", function: "Boost V_H", material: "Silicon" },
        { name: "Comparator", function: "Digital out", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "Linear", description: "V ∝ B.", applications: ["Current sense"] },
        { name: "Latch/Switch", description: "Digital on/off.", applications: ["RPM"] },
        { name: "Omnipolar", description: "Either pole.", applications: ["Proximity"] },
        { name: "3D", description: "Vector field.", applications: ["Joystick"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Hall Voltage", formula: "V_H = (I B) / (n e t)", description: "Field proportional.", variables: [{ symbol: "V_H", name: "Hall V", unit: "V" }, { symbol: "B", name: "Field", unit: "T" }, { symbol: "I", name: "Current", unit: "A" }], example: "mV range" },
        { name: "Current Sense", formula: "B = μ₀ I / (2π r)", description: "From conductor.", variables: [{ symbol: "B", name: "Field", unit: "T" }], example: "Clamp meter" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Sensitivity", typicalValues: "mV/mT", notes: "Linear" },
        { name: "Range", typicalValues: "±几十 to ±1000mT", notes: "By type" },
        { name: "Output", typicalValues: "Analog/digital", notes: "Varied" },
        { name: "Supply", typicalValues: "3-24V", notes: "DC" },
      ],
    },
    applications: {
      applications: [
        { category: "Automotive", description: "Wheel speed", examples: ["ABS"] },
        { category: "Motor", description: "Commutation", examples: ["BLDC"] },
        { category: "Power", description: "Current sense", examples: ["Inverters"] },
        { category: "Position", description: "Linear/angle", examples: ["Encoders"] },
      ],
    },
    advantages: { advantages: ["Non-contact", "Robust", "No wear", "Immune to light/dust", "Wide range"] },
    disadvantages: { disadvantages: ["Temperature drift", "Offset", "Needs magnet", "EMI sensitive", "Limited bandwidth"] },
    selection: {
      steps: [
        { step: 1, title: "Type", description: "Linear or switch." },
        { step: 2, title: "Field Range", description: "Match B." },
        { step: 3, title: "Output", description: "Analog/digital." },
        { step: 4, title: "Magnet", description: "Provide field." },
      ],
      tips: ["Calibrate offset", "Temperature-compensate", "Shield EMI"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Output", symptoms: ["Flat"], causes: ["No field"], solution: "Add magnet" },
        { failure: "Drift", symptoms: ["Offset"], causes: ["Temp"], solution: "Compensate" },
        { failure: "Noise", symptoms: ["Jitter"], causes: ["EMI"], solution: "Filter/shield" },
      ],
    },
    history: {
      invention: {
        year: 1879,
        inventor: "Edwin Hall",
        discovery: "Hall discovered the transverse voltage in a current-carrying conductor in a magnetic field.",
        evolution: [
          { year: 1879, event: "Hall effect" },
          { year: 1960, event: "Integrated Hall IC" },
          { year: 2000, event: "High-sensitivity MEMS" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Hall Voltage", definition: "Transverse voltage from B field." },
        { term: "Lorentz Force", definition: "Force on moving charge in field." },
        { term: "Latch", definition: "Stays on until opposite pole." },
        { term: "mT", definition: "Millitesla field unit." },
      ],
    },
    interview: {
      beginner: [
        { question: "Hall sensor detects?", answer: "Magnetic field strength/direction." },
        { question: "Common use?", answer: "Speed, position, and current sensing." },
      ],
      intermediate: [
        { question: "Why for current sense?", answer: "A conductor's field is proportional to its current." },
      ],
      advanced: [
        { question: "Offset issue?", answer: "Temperature and process cause a zero-field offset." },
      ],
      expert: [
        { question: "Improve accuracy?", answer: "Chop/auto-zero and temperature compensation." },
      ],
    },
    mcqs: [
      { question: "Hall voltage ∝", options: ["B field", "Light", "Temp only", "None"], correctAnswer: 0, explanation: "Field strength.", difficulty: "beginner" },
      { question: "Hall discovered by:", options: ["Edwin Hall", "Faraday", "Ohm", "Ampere"], correctAnswer: 0, explanation: "1879.", difficulty: "beginner" },
      { question: "Used for current by:", options: ["Field around wire", "Resistance", "Voltage drop", "None"], correctAnswer: 0, explanation: "B ∝ I.", difficulty: "intermediate" },
      { question: "Latch stays on with:", options: ["Same pole until reverse", "Any field", "Light", "None"], correctAnswer: 0, explanation: "Bistable.", difficulty: "advanced" },
      { question: "Immune to:", options: ["Light/dust", "Magnet", "Heat", "None"], correctAnswer: 0, explanation: "Magnetic only.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Hall Sensor Datasheet", author: "Allegro/Melexis", year: 2021, url: "", type: "datasheet" },
        { title: "Magnetic Sensors", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "magnetometer-ish", relationship: "Field sensing" },
        { id: "microcontroller", relationship: "Reads" },
        { id: "adc", relationship: "Analog" },
      ],
    },
  },
  "flex-sensor": {
    overview: {
      whatIsIt: "A flex (bend) sensor changes resistance as it is bent, measuring the degree of deflection.",
      whyExists: "Flex sensing enables low-cost gesture and bend-angle measurement.",
      whereUsed: "Used in gloves, robotics, and wearable interfaces.",
    },
    working: {
      workingPrinciple: "Bending stretches/conduits conductive ink paths, changing resistance proportionally to bend angle.",
      steps: [
        "Sensor bent",
        "Conductive element deforms",
        "Path length/resistance changes",
        "Read as analog value",
      ],
      microscopicExplanation: "Strain alters the geometry of the conductive composite, increasing resistance with curvature.",
    },
    construction: {
      internalParts: [
        { name: "Conductive Ink", function: "Variable R", material: "Carbon" },
        { name: "Substrate", function: "Flexible", material: "Polyester" },
        { name: "Contacts", function: "Connect", material: "Silver" },
        { name: "Seal", function: "Protect", material: "Laminate" },
      ],
    },
    types: {
      types: [
        { name: "Linear Flex", description: "Strip bends.", applications: ["Gloves"] },
        { name: "Angular", description: "Hinge type.", applications: ["Robotics"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Resistance vs Bend", formula: "R = R₀ (1 + k θ)", description: "Rises with angle.", variables: [{ symbol: "R", name: "Resistance", unit: "Ω" }, { symbol: "θ", name: "Angle", unit: "°" }], example: "10kΩ flat to 30kΩ bent" },
        { name: "Divider", formula: "V_out = V (R_f/(R_f+R))", description: "Read voltage.", variables: [{ symbol: "V_out", name: "Voltage", unit: "V" }], example: "With fixed R" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Range", typicalValues: "0° to 90°", notes: "Bend" },
        { name: "Resistance", typicalValues: "10k-100kΩ", notes: "Flat to bent" },
        { name: "Life", typicalValues: "10^5 bends", notes: "Durability" },
        { name: "Length", typicalValues: "2-10cm", notes: "Size" },
      ],
    },
    applications: {
      applications: [
        { category: "Wearables", description: "Gesture", examples: ["Gloves"] },
        { category: "Robotics", description: "Joint angle", examples: ["Limbs"] },
        { category: "HMI", description: "Bend input", examples: ["Toys"] },
      ],
    },
    advantages: { advantages: ["Cheap", "Simple", "Flexible", "Light", "Analog"] },
    disadvantages: { disadvantages: ["Nonlinear", "Hysteresis", "Drift", "Fragile", "Needs calibration"] },
    selection: {
      steps: [
        { step: 1, title: "Range", description: "Match bend." },
        { step: 2, title: "Divider", description: "Pick fixed R." },
        { step: 3, title: "Mount", description: "Secure ends." },
        { step: 4, title: "Calibrate", description: "Map R to angle." },
      ],
      tips: ["Don't crease", "Average readings", "Replace if cracked"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open", symptoms: ["Infinite R"], causes: ["Cracked"], solution: "Replace" },
        { failure: "Drift", symptoms: ["Wrong"], causes: ["Creep"], solution: "Recalibrate" },
        { failure: "Hysteresis", symptoms: ["Lag"], causes: ["Material"], solution: "Model it" },
      ],
    },
    history: {
      invention: {
        year: 1980,
        inventor: "Conductive polymer evolution",
        discovery: "Printed conductive-ink flex sensors enabled cheap bend sensing.",
        evolution: [
          { year: 1980, event: "Early flex sensors" },
          { year: 2000, event: "Wearable use" },
          { year: 2015, event: "Glove interfaces" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Don't over-bend.",
      storage: "Flat.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Hysteresis", definition: "Different R bending vs straightening." },
        { term: "Conductive Ink", definition: "Carbon composite path." },
        { term: "Creep", definition: "Slow resistance change under strain." },
        { term: "Divider", definition: "Resistive voltage divider." },
      ],
    },
    interview: {
      beginner: [
        { question: "What changes when bent?", answer: "Resistance increases with bend angle." },
        { question: "How read it?", answer: "Use a voltage divider into an ADC." },
      ],
      intermediate: [
        { question: "Why calibrate?", answer: "Response is nonlinear and varies per unit." },
      ],
      advanced: [
        { question: "Failure mode?", answer: "Cracking the ink path causes open circuit." },
      ],
      expert: [
        { question: "Improve life?", answer: "Avoid sharp creases; use within rated bend." },
      ],
    },
    mcqs: [
      { question: "Bending a flex sensor:", options: ["Increases R", "Decreases R", "No change", "None"], correctAnswer: 0, explanation: "Path stretches.", difficulty: "beginner" },
      { question: "Read via:", options: ["Voltage divider", "Relay", "Coil", "None"], correctAnswer: 0, explanation: "Resistive.", difficulty: "intermediate" },
      { question: "Common issue:", options: ["Hysteresis", "Too fast", "Digital", "None"], correctAnswer: 0, explanation: "Lag in response.", difficulty: "advanced" },
      { question: "Don't:", options: ["Crease sharply", "Bend", "Read", "None"], correctAnswer: 0, explanation: "Cracks ink.", difficulty: "beginner" },
      { question: "Used in:", options: ["Gloves", "Motors", "Speakers", "None"], correctAnswer: 0, explanation: "Wearable gesture.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Flex Sensor Datasheet", author: "Spectra Symbol", year: 2020, url: "", type: "datasheet" },
        { title: "Wearable Electronics", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "resistor", relationship: "Divider" },
        { id: "adc", relationship: "Reads" },
        { id: "microcontroller", relationship: "Processes" },
      ],
    },
  },
  "touch-sensor": {
    overview: {
      whatIsIt: "A touch sensor detects physical contact or proximity of a finger, enabling intuitive input.",
      whyExists: "Touch input replaces buttons for modern, seamless human interfaces.",
      whereUsed: "Used in phones, kiosks, and appliances.",
    },
    working: {
      workingPrinciple: "Capacitive touch senses the finger's capacitance changing a local field; resistive senses pressure closing two layers.",
      steps: [
        "Finger approaches/contact",
        "Local capacitance changes (cap)",
        "Or layers short (resistive)",
        "Controller detects threshold",
      ],
      microscopicExplanation: "A finger (grounded conductor) draws field lines, raising capacitance at the pad; the chip measures ΔC.",
    },
    construction: {
      internalParts: [
        { name: "Sense Pad", function: "Capacitive plate", material: "ITO/copper" },
        { name: "Controller IC", function: "Measure ΔC", material: "Silicon" },
        { name: "Overlay", function: "Protect", material: "Glass/plastic" },
        { name: "Ground", function: "Reference", material: "Copper" },
      ],
    },
    types: {
      types: [
        { name: "Capacitive", description: "No force needed.", applications: ["Phones"] },
        { name: "Resistive", description: "Pressure based.", applications: ["Industrial"] },
        { name: "Mutual Capacitance", description: "Grid (multi-touch).", applications: ["Tablets"] },
        { name: "Self Capacitance", description: "Single pad.", applications: ["Buttons"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Capacitance", formula: "C = ε A / d", description: "Pad capacitance.", variables: [{ symbol: "C", name: "Capacitance", unit: "pF" }], example: "ΔC from finger" },
        { name: "Threshold", formula: "ΔC > C_th", description: "Detect touch.", variables: [{ symbol: "ΔC", name: "Delta C", unit: "fF" }], example: "Few fF" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Sensitivity", typicalValues: "fF detect", notes: "Capacitive" },
        { name: "Layers", typicalValues: "Single/multi", notes: "Touch count" },
        { name: "Interface", typicalValues: "I²C, GPIO", notes: "Output" },
        { name: "Thickness", typicalValues: "up to 10mm glass", notes: "Cover" },
      ],
    },
    applications: {
      applications: [
        { category: "Consumer", description: "Phones/tablets", examples: ["Displays"] },
        { category: "Appliance", description: "Panels", examples: ["Ovens"] },
        { category: "Industrial", description: "Rugged input", examples: ["HMI"] },
      ],
    },
    advantages: { advantages: ["No moving parts", "Sealed", "Multi-touch", "Durable", "Sleek"] },
    disadvantages: { disadvantages: ["Water false-touch", "Glove no touch (cap)", "Calibration", "Noise", "Cost (controller)"] },
    selection: {
      steps: [
        { step: 1, title: "Type", description: "Cap vs resistive." },
        { step: 2, title: "Multi-touch", description: "Need grid?" },
        { step: 3, title: "Overlay", description: "Glass thickness." },
        { step: 4, title: "Interface", description: "I²C/GPIO." },
      ],
      tips: ["Guard against water", "Use ground shield", "Tune threshold"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "False Touch", symptoms: ["Triggers"], causes: ["Water"], solution: "Algorithm reject" },
        { failure: "No Touch", symptoms: ["Dead"], causes: ["Shield"], solution: "Check ground" },
        { failure: "Drift", symptoms: ["Offset"], causes: ["Noise"], solution: "Recalibrate" },
      ],
    },
    history: {
      invention: {
        year: 1965,
        inventor: "Touch tech evolution (e.g., Johnson)",
        discovery: "Early capacitive touch paved the way for modern multi-touch interfaces.",
        evolution: [
          { year: 1965, event: "Capacitive touch" },
          { year: 2007, event: "Multi-touch phones" },
          { year: 2015, event: "In-display fingerprint" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "ΔC", definition: "Change in capacitance from touch." },
        { term: "Mutual Cap", definition: "Cross-point grid sensing." },
        { term: "ITO", definition: "Indium tin oxide transparent conductor." },
        { term: "Threshold", definition: "Detection limit." },
      ],
    },
    interview: {
      beginner: [
        { question: "Capacitive touch needs?", answer: "A change in local capacitance from the finger." },
        { question: "Gloves issue?", answer: "Non-conductive gloves don't affect the field." },
      ],
      intermediate: [
        { question: "Water false touch?", answer: "Water also changes capacitance like a finger." },
      ],
      advanced: [
        { question: "Multi-touch how?", answer: "Mutual-capacitance grid locates multiple points." },
      ],
      expert: [
        { question: "Robust design?", answer: "Guard rings, ground shielding, and adaptive thresholds." },
      ],
    },
    mcqs: [
      { question: "Capacitive touch senses:", options: ["Capacitance change", "Pressure only", "Light", "Heat"], correctAnswer: 0, explanation: "ΔC from finger.", difficulty: "beginner" },
      { question: "Multi-touch uses:", options: ["Mutual cap grid", "Single pad", "Resistor", "None"], correctAnswer: 0, explanation: "Cross-points.", difficulty: "advanced" },
      { question: "Water causes:", options: ["False touch", "None", "Cooling", "None"], correctAnswer: 0, explanation: "Like a finger.", difficulty: "intermediate" },
      { question: "Resistive needs:", options: ["Pressure", "Field", "Light", "None"], correctAnswer: 0, explanation: "Layers short.", difficulty: "beginner" },
      { question: "ITO is:", options: ["Transparent conductor", "Metal", "Plastic", "None"], correctAnswer: 0, explanation: "Indium tin oxide.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Touch Controller Datasheet", author: "Cypress/Atmel", year: 2021, url: "", type: "datasheet" },
        { title: "HMI Design", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "microcontroller", relationship: "Reads" },
        { id: "lcd", relationship: "Overlay display" },
        { id: "push-button", relationship: "Alternative input" },
      ],
    },
  },

  "op-amp": {
    overview: {
      whatIsIt: "An operational amplifier is a high-gain DC-coupled differential amplifier used for analog signal conditioning.",
      whyExists: "Op-amps provide configurable gain, filtering, and math operations on analog signals.",
      whereUsed: "Used in sensors, audio, filters, and control systems.",
    },
    working: {
      workingPrinciple: "It amplifies the difference between its inverting and non-inverting inputs with very high open-loop gain, set by feedback.",
      steps: [
        "Two inputs compared",
        "Difference amplified hugely",
        "Feedback network sets gain",
        "Output drives load",
      ],
      microscopicExplanation: "Internal differential pair and gain stages give high gain; negative feedback forces V+ ≈ V- (virtual short).",
    },
    construction: {
      internalParts: [
        { name: "Differential Pair", function: "Compare inputs", material: "BJT/MOS" },
        { name: "Gain Stage", function: "Amplify", material: "Silicon" },
        { name: "Output Stage", function: "Drive load", material: "Silicon" },
        { name: "Bias", function: "Set current", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "General Purpose", description: "e.g., LM358.", applications: ["Many"] },
        { name: "Precision", description: "Low offset.", applications: ["Instrumentation"] },
        { name: "High-Speed", description: "Wide BW.", applications: ["Video"] },
        { name: "Rail-to-Rail", description: "Full swing.", applications: ["Single supply"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Inverting Gain", formula: "V_out = -Rf/Rin · V_in", description: "Gain set by resistors.", variables: [{ symbol: "V_out", name: "Output", unit: "V" }, { symbol: "Rf", name: "Feedback", unit: "Ω" }], example: "Gain 10" },
        { name: "Non-inverting", formula: "V_out = (1 + Rf/Rin) V_in", description: "Positive gain.", variables: [{ symbol: "V_out", name: "Output", unit: "V" }], example: "Buffer = 1" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Gain (Aol)", typicalValues: "100k to 10M", notes: "Open loop" },
        { name: "Input Offset", typicalValues: "µV to mV", notes: "Precision" },
        { name: "Bandwidth", typicalValues: "kHz to GHz", notes: "GBW" },
        { name: "Slew Rate", typicalValues: "0.1 to 100 V/µs", notes: "Speed" },
      ],
    },
    applications: {
      applications: [
        { category: "Conditioning", description: "Amplify sensor", examples: ["Strain"] },
        { category: "Filtering", description: "Active filters", examples: ["Audio"] },
        { category: "Math", description: "Add/integrate", examples: ["Control"] },
        { category: "Compare", description: "Threshold", examples: ["Schmitt"] },
      ],
    },
    advantages: { advantages: ["Versatile", "High gain", "Cheap", "Stable with feedback", "Many configs"] },
    disadvantages: { disadvantages: ["Offset/drift", "Limited BW", "Not rail at output (some)", "Power needed", "Noise"] },
    selection: {
      steps: [
        { step: 1, title: "Gain/BW", description: "Match signal." },
        { step: 2, title: "Offset", description: "Precision need." },
        { step: 3, title: "Supply", description: "Single/dual." },
        { step: 4, title: "Rail-to-Rail?", description: "Output swing." },
      ],
      tips: ["Use decoupling caps", "Balance for low offset", "Check stability"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Oscillation", symptoms: ["Unstable"], causes: ["Poor decoupling"], solution: "Add caps" },
        { failure: "Offset", symptoms: ["Wrong V"], causes: ["Temp"], solution: "Trim/calibrate" },
        { failure: "Saturation", symptoms: ["Rails"], causes: ["Over gain"], solution: "Reduce gain" },
      ],
    },
    history: {
      invention: {
        year: 1967,
        inventor: "Fairchild (µA741)",
        discovery: "The µA741 popularized the monolithic op-amp for analog design.",
        evolution: [
          { year: 1967, event: "µA741" },
          { year: 1980, event: "CMOS/precise" },
          { year: 2000, event: "Rail-to-rail" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Virtual Short", definition: "V+ ≈ V- under feedback." },
        { term: "GBW", definition: "Gain-bandwidth product." },
        { term: "Slew Rate", definition: "Max output dV/dt." },
        { term: "Rail-to-Rail", definition: "Swings to supply rails." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is an op-amp?", answer: "A high-gain differential amplifier for analog signals." },
        { question: "Virtual short?", answer: "Negative feedback makes inputs nearly equal." },
      ],
      intermediate: [
        { question: "Why decoupling?", answer: "Stabilizes supply, prevents oscillation." },
      ],
      advanced: [
        { question: "Slew rate limit?", answer: "Output can't change faster than slew rate, causing distortion." },
      ],
      expert: [
        { question: "Reduce offset?", answer: "Use precision op-amp, trim, or chopper-stabilized." },
      ],
    },
    mcqs: [
      { question: "Op-amp amplifies:", options: ["Difference of inputs", "Sum", "One input", "None"], correctAnswer: 0, explanation: "Differential.", difficulty: "beginner" },
      { question: "Inverting gain =", options: ["-Rf/Rin", "Rf+Rin", "Rf/Rin", "1"], correctAnswer: 0, explanation: "Negative gain.", difficulty: "intermediate" },
      { question: "Virtual short means:", options: ["V+≈V-", "Shorted pins", "No gain", "None"], correctAnswer: 0, explanation: "Feedback equalizes.", difficulty: "intermediate" },
      { question: "Slew rate is:", options: ["Max dV/dt", "Gain", "BW", "Offset"], correctAnswer: 0, explanation: "Speed limit.", difficulty: "advanced" },
      { question: "Rail-to-rail means:", options: ["Full swing output", "High gain", "Low power", "None"], correctAnswer: 0, explanation: "To supplies.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Op Amp Applications", author: "Analog Devices", year: 2020, url: "", type: "datasheet" },
        { title: "Art of Electronics", author: "Horowitz & Hill", year: 2015, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "comparator", relationship: "No feedback cousin" },
        { id: "resistor", relationship: "Sets gain" },
        { id: "adc", relationship: "Drives conversion" },
      ],
    },
  },
  "555-timer": {
    overview: {
      whatIsIt: "The 555 timer is a versatile IC for generating pulses, delays, and oscillations.",
      whyExists: "It provides simple, reliable timing and waveform generation without a microcontroller.",
      whereUsed: "Used in blinking LEDs, buzzers, and pulse generators.",
    },
    working: {
      workingPrinciple: "Internal comparators and a flip-flop switch based on a capacitor charging/discharging through resistors between 1/3 and 2/3 Vcc.",
      steps: [
        "Cap charges via R",
        "Reaches 2/3 Vcc -> reset",
        "Discharge pin empties cap",
        "Falls to 1/3 Vcc -> set",
        "Cycle repeats (astable)",
      ],
      microscopicExplanation: "Two comparators trip at 1/3 and 2/3 Vcc; the flip-flop and discharge transistor form the timing loop.",
    },
    construction: {
      internalParts: [
        { name: "Comparators", function: "Threshold detect", material: "Silicon" },
        { name: "Flip-Flop", function: "Latch state", material: "Silicon" },
        { name: "Discharge Transistor", function: "Empty cap", material: "Silicon" },
        { name: "Voltage Divider", function: "1/3, 2/3 refs", material: "Resistors" },
      ],
    },
    types: {
      types: [
        { name: "Astable", description: "Free-running oscillator.", applications: ["Blink"] },
        { name: "Monostable", description: "One-shot pulse.", applications: ["Delay"] },
        { name: "Bistable", description: "Latch/flip-flop.", applications: ["Toggle"] },
        { name: "CMOS (7555)", description: "Low power.", applications: ["Battery"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Astable Frequency", formula: "f = 1.44 / ((R1+2R2) C)", description: "Oscillation rate.", variables: [{ symbol: "f", name: "Frequency", unit: "Hz" }, { symbol: "C", name: "Cap", unit: "F" }], example: "1kHz typical" },
        { name: "Monostable Pulse", formula: "T = 1.1 R C", description: "Pulse width.", variables: [{ symbol: "T", name: "Time", unit: "s" }], example: "1s with 1MΩ,1µF" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Supply", typicalValues: "4.5-18V", notes: "Wide" },
        { name: "Max Frequency", typicalValues: "up to 1MHz", notes: "CMOS higher" },
        { name: "Output", typicalValues: "200mA sink/source", notes: "Drive" },
        { name: "Modes", typicalValues: "3", notes: "Astable/mono/bi" },
      ],
    },
    applications: {
      applications: [
        { category: "Timing", description: "Delays", examples: ["Relays"] },
        { category: "Oscillator", description: "Clocks", examples: ["Tone"] },
        { category: "PWM", description: "Dim/control", examples: ["LED"] },
        { category: "Education", description: "Learn timing", examples: ["Labs"] },
      ],
    },
    advantages: { advantages: ["Cheap", "Robust", "Easy", "Wide supply", "No code"] },
    disadvantages: { disadvantages: ["Drift with temp", "Not precise", "Power (bipolar)", "Limited freq", "External parts"] },
    selection: {
      steps: [
        { step: 1, title: "Mode", description: "Astable/mono/bi." },
        { step: 2, title: "Timing", description: "Pick R, C." },
        { step: 3, title: "Supply", description: "Match Vcc." },
        { step: 4, title: "CMOS?", description: "For low power." },
      ],
      tips: ["Use stable caps", "Decouple Vcc", "CMOS for battery"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Oscillation", symptoms: ["Flat"], causes: ["Bad cap"], solution: "Replace" },
        { failure: "Wrong Freq", symptoms: ["Off"], causes: ["Tolerance"], solution: "Recalc" },
        { failure: "Overheat", symptoms: ["Hot"], causes: ["Short"], solution: "Check load" },
      ],
    },
    history: {
      invention: {
        year: 1971,
        inventor: "Hans Camenzind (Signetics)",
        discovery: "Camenzind designed the 555, becoming the best-selling IC of its era.",
        evolution: [
          { year: 1971, event: "NE555 released" },
          { year: 1978, event: "CMOS 7555" },
          { year: 2000, event: "Still ubiquitous" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Output current limit.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Astable", definition: "Free-running oscillator mode." },
        { term: "Monostable", definition: "One-shot pulse mode." },
        { term: "Discharge", definition: "Pin that empties the timing cap." },
        { term: "Threshold", definition: "2/3 Vcc comparator input." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a 555?", answer: "A timer IC for pulses, delays, and oscillations." },
        { question: "Astable does?", answer: "Continuously oscillates." },
      ],
      intermediate: [
        { question: "Frequency formula?", answer: "f = 1.44/((R1+2R2)C)." },
      ],
      advanced: [
        { question: "Why 1/3 and 2/3?", answer: "Internal divider sets the comparator thresholds." },
      ],
      expert: [
        { question: "Improve accuracy?", answer: "Use stable components and CMOS variant; or use a crystal reference." },
      ],
    },
    mcqs: [
      { question: "555 astable is:", options: ["Oscillator", "Amplifier", "Regulator", "None"], correctAnswer: 0, explanation: "Free-running.", difficulty: "beginner" },
      { question: "Monostable pulse T =", options: ["1.1RC", "0.7RC", "2RC", "RC"], correctAnswer: 0, explanation: "One-shot width.", difficulty: "intermediate" },
      { question: "Thresholds at:", options: ["1/3, 2/3 Vcc", "1/2, 1/4", "0, Vcc", "None"], correctAnswer: 0, explanation: "Internal divider.", difficulty: "advanced" },
      { question: "Invented by:", options: ["Camenzind", "Shockley", "Bardeen", "None"], correctAnswer: 0, explanation: "Signetics 1971.", difficulty: "beginner" },
      { question: "CMOS 7555 for:", options: ["Low power", "High freq", "High V", "None"], correctAnswer: 0, explanation: "Battery use.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "555 Timer Datasheet", author: "Texas Instruments", year: 2021, url: "", type: "datasheet" },
        { title: "Timer Circuits", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "capacitor", relationship: "Timing" },
        { id: "resistor", relationship: "Timing" },
        { id: "microcontroller", relationship: "Alternative" },
      ],
    },
  },
  adc: {
    overview: {
      whatIsIt: "An Analog-to-Digital Converter (ADC) converts continuous analog voltage into digital numbers.",
      whyExists: "Microcontrollers need digital values to process real-world analog signals.",
      whereUsed: "Used in sensors, audio, and measurement instruments.",
    },
    working: {
      workingPrinciple: "It samples the input, compares it (via SAR, flash, or sigma-delta) to a reference, and outputs a binary code.",
      steps: [
        "Sample and hold input",
        "Compare to reference",
        "Quantize to steps",
        "Output digital code",
      ],
      microscopicExplanation: "SAR binary-searches the voltage with a DAC; sigma-delta oversamples and filters for high resolution.",
    },
    construction: {
      internalParts: [
        { name: "Sample/Hold", function: "Freeze input", material: "Silicon" },
        { name: "Comparator", function: "Decide bit", material: "Silicon" },
        { name: "DAC", function: "Reference", material: "Silicon" },
        { name: "Logic", function: "Encode", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "SAR", description: "Medium speed/res.", applications: ["MCU built-in"] },
        { name: "Sigma-Delta", description: "High res, slow.", applications: ["Audio/scale"] },
        { name: "Flash", description: "Very fast.", applications: ["Oscilloscopes"] },
        { name: "Pipeline", description: "High speed.", applications: ["Video"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Resolution", formula: "LSB = V_ref / 2^N", description: "Step size.", variables: [{ symbol: "LSB", name: "Step", unit: "V" }, { symbol: "N", name: "Bits", unit: "" }], example: "12-bit, 3.3V -> 0.8mV" },
        { name: "Digital Value", formula: "D = round(V_in / LSB)", description: "Code.", variables: [{ symbol: "D", name: "Code", unit: "" }], example: "0..4095" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Resolution", typicalValues: "8 to 24 bits", notes: "Precision" },
        { name: "Sample Rate", typicalValues: "ksps to MSps", notes: "Speed" },
        { name: "Input Range", typicalValues: "0-Vref", notes: "Span" },
        { name: "INL/DNL", typicalValues: "±LSB", notes: "Linearity" },
      ],
    },
    applications: {
      applications: [
        { category: "Sensing", description: "Read sensors", examples: ["Temp"] },
        { category: "Audio", description: "Digitize sound", examples: ["Mics"] },
        { category: "Instrumentation", description: "Measure", examples: ["Meters"] },
      ],
    },
    advantages: { advantages: ["Bridges analog/digital", "Many types", "Integrated", "Flexible", "High res options"] },
    disadvantages: { disadvantages: ["Quantization error", "Sampling aliasing", "Speed limited", "Noise", "Reference needed"] },
    selection: {
      steps: [
        { step: 1, title: "Resolution", description: "Bits needed." },
        { step: 2, title: "Speed", description: "Sample rate." },
        { step: 3, title: "Interface", description: "SAR/I²C/SPI." },
        { step: 4, title: "Reference", description: "Stable Vref." },
      ],
      tips: ["Anti-alias filter", "Stable reference", "Oversample to improve"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Noisy", symptoms: ["Jitter"], causes: ["Noise"], solution: "Filter/ref" },
        { failure: "Aliasing", symptoms: ["Wrong"], causes: ["Under-sample"], solution: "Filter" },
        { failure: "Clipping", symptoms: ["Max code"], causes: ["Over range"], solution: "Attenuate" },
      ],
    },
    history: {
      invention: {
        year: 1970,
        inventor: "ADC evolution",
        discovery: "Successive-approximation and sigma-delta techniques enabled practical digitization.",
        evolution: [
          { year: 1970, event: "SAR ADCs" },
          { year: 1980, event: "Sigma-delta" },
          { year: 2000, event: "High-res audio ADC" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "LSB", definition: "Least significant bit step size." },
        { term: "SAR", definition: "Successive approximation register." },
        { term: "Quantization", definition: "Mapping to discrete steps." },
        { term: "Aliasing", definition: "Under-sampling artifact." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does ADC do?", answer: "Converts analog voltage to a digital number." },
        { question: "Resolution?", answer: "Number of bits in the output code." },
      ],
      intermediate: [
        { question: "Nyquist rule?", answer: "Sample at least twice the highest frequency." },
      ],
      advanced: [
        { question: "Sigma-delta advantage?", answer: "Oversampling yields high resolution." },
      ],
      expert: [
        { question: "Reduce error?", answer: "Stable reference, anti-alias filter, oversampling/dithering." },
      ],
    },
    mcqs: [
      { question: "ADC converts:", options: ["Analog to digital", "Digital to analog", "AC to DC", "None"], correctAnswer: 0, explanation: "A->D.", difficulty: "beginner" },
      { question: "LSB =", options: ["Vref/2^N", "Vref×N", "Vref/N", "None"], correctAnswer: 0, explanation: "Step size.", difficulty: "intermediate" },
      { question: "Nyquist needs:", options: ["2× freq", "Equal", "Half", "None"], correctAnswer: 0, explanation: "Avoid aliasing.", difficulty: "advanced" },
      { question: "Sigma-delta is:", options: ["High-res slow", "Fast low-res", "Analog", "None"], correctAnswer: 0, explanation: "Oversampling.", difficulty: "advanced" },
      { question: "SAR stands for:", options: ["Successive approximation", "Sample and read", "None", "None"], correctAnswer: 0, explanation: "Binary search.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "ADC Handbook", author: "Analog Devices", year: 2020, url: "", type: "datasheet" },
        { title: "Data Conversion", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "dac", relationship: "Inverse" },
        { id: "microcontroller", relationship: "Uses ADC" },
        { id: "op-amp", relationship: "Conditions input" },
      ],
    },
  },
  dac: {
    overview: {
      whatIsIt: "A Digital-to-Analog Converter (DAC) converts digital codes into proportional analog voltages or currents.",
      whyExists: "Digital systems must produce real analog signals (audio, control).",
      whereUsed: "Used in audio playback, waveform generation, and motor control.",
    },
    working: {
      workingPrinciple: "A binary code selects weighted currents (or a resistor ladder) summed to produce a proportional analog output.",
      steps: [
        "Digital code applied",
        "Weighted currents switched",
        "Summed at output",
        "Smoothed (if needed)",
      ],
      microscopicExplanation: "An R-2R ladder or string of resistors maps each bit to a precise fraction of the reference voltage.",
    },
    construction: {
      internalParts: [
        { name: "Resistor Ladder", function: "Weight bits", material: "Silicon" },
        { name: "Switches", function: "Select bits", material: "CMOS" },
        { name: "Summing Amp", function: "Combine", material: "Silicon" },
        { name: "Reference", function: "Set span", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "R-2R Ladder", description: "Common, precise.", applications: ["General"] },
        { name: "String", description: "Simple, fast.", applications: ["LCD bias"] },
        { name: "Sigma-Delta", description: "High res, oversampled.", applications: ["Audio"] },
        { name: "PWM+Filter", description: "MCU software DAC.", applications: ["Simple"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Output", formula: "V_out = V_ref · (D / 2^N)", description: "Proportional code.", variables: [{ symbol: "V_out", name: "Output", unit: "V" }, { symbol: "D", name: "Code", unit: "" }, { symbol: "N", name: "Bits", unit: "" }], example: "Mid code = Vref/2" },
        { name: "Step", formula: "LSB = V_ref / 2^N", description: "Resolution.", variables: [{ symbol: "LSB", name: "Step", unit: "V" }], example: "12-bit fine" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Resolution", typicalValues: "8 to 20 bits", notes: "Precision" },
        { name: "Settling", typicalValues: "µs to ns", notes: "Speed" },
        { name: "Output", typicalValues: "Voltage/current", notes: "Type" },
        { name: "INL", typicalValues: "±LSB", notes: "Linearity" },
      ],
    },
    applications: {
      applications: [
        { category: "Audio", description: "Play sound", examples: ["Speakers"] },
        { category: "Control", description: "Setpoint", examples: ["PSU"] },
        { category: "Waveform", description: "Generate", examples: ["FG"] },
      ],
    },
    advantages: { advantages: ["Drives analog", "Many types", "Integrated", "Precise", "Fast options"] },
    disadvantages: { disadvantages: ["Glitches", "Reference needed", "Settling time", "Noise", "Limited drive"] },
    selection: {
      steps: [
        { step: 1, title: "Resolution", description: "Bits needed." },
        { step: 2, title: "Speed", description: "Settling time." },
        { step: 3, title: "Output", description: "Voltage/current." },
        { step: 4, title: "Reference", description: "Stable Vref." },
      ],
      tips: ["Use op-amp buffer", "Stable reference", "Watch glitches"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Glitches", symptoms: ["Spikes"], causes: ["Switching"], solution: "Deglitch" },
        { failure: "Nonlinear", symptoms: ["Distortion"], causes: ["INL"], solution: "Calibrate" },
        { failure: "No Output", symptoms: ["Flat"], causes: ["No ref"], solution: "Check Vref" },
      ],
    },
    history: {
      invention: {
        year: 1970,
        inventor: "DAC evolution",
        discovery: "Resistor-ladder DACs enabled practical digital-to-analog output.",
        evolution: [
          { year: 1970, event: "Ladder DACs" },
          { year: 1980, event: "Audio DACs" },
          { year: 2000, event: "High-res sigma-delta" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "R-2R", definition: "Resistor ladder topology." },
        { term: "Settling Time", definition: "Time to reach final value." },
        { term: "Glitch", definition: "Transient during code change." },
        { term: "INL", definition: "Integral nonlinearity." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does DAC do?", answer: "Converts a digital code to an analog voltage." },
        { question: "Output at mid code?", answer: "About half the reference voltage." },
      ],
      intermediate: [
        { question: "R-2R purpose?", answer: "Maps each bit to a precise weighted fraction." },
      ],
      advanced: [
        { question: "Glitch cause?", answer: "Unequal switch timing creates transient spikes." },
      ],
      expert: [
        { question: "Improve accuracy?", answer: "Stable reference, deglitching, and calibration." },
      ],
    },
    mcqs: [
      { question: "DAC converts:", options: ["Digital to analog", "Analog to digital", "AC to DC", "None"], correctAnswer: 0, explanation: "D->A.", difficulty: "beginner" },
      { question: "V_out =", options: ["Vref·D/2^N", "Vref·N", "Vref+D", "None"], correctAnswer: 0, explanation: "Proportional.", difficulty: "intermediate" },
      { question: "R-2R is:", options: ["Resistor ladder", "Amplifier", "Filter", "None"], correctAnswer: 0, explanation: "Weighted bits.", difficulty: "advanced" },
      { question: "Glitch is:", options: ["Transient spike", "DC error", "Noise only", "None"], correctAnswer: 0, explanation: "Code-change spike.", difficulty: "advanced" },
      { question: "Used in:", options: ["Audio playback", "Sensing", "Relay", "None"], correctAnswer: 0, explanation: "D->A output.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "DAC Handbook", author: "Analog Devices", year: 2020, url: "", type: "datasheet" },
        { title: "Data Conversion", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "adc", relationship: "Inverse" },
        { id: "op-amp", relationship: "Buffer" },
        { id: "audio-amplifier-ic", relationship: "Drives output" },
      ],
    },
  },
  comparator: {
    overview: {
      whatIsIt: "A comparator compares two voltages and outputs high or low depending on which is greater.",
      whyExists: "Comparators make fast digital decisions from analog levels (threshold detection).",
      whereUsed: "Used in zero-crossing, window detection, and oscillators.",
    },
    working: {
      workingPrinciple: "It amplifies the difference between inputs; without feedback it snaps the output to rail based on sign of (V+ - V-).",
      steps: [
        "Two inputs applied",
        "Difference evaluated",
        "Output swings to high/low rail",
        "No linear region (typically)",
      ],
      microscopicExplanation: "High open-loop gain forces the output to saturate; hysteresis (positive feedback) adds noise immunity.",
    },
    construction: {
      internalParts: [
        { name: "Differential Pair", function: "Compare", material: "BJT/MOS" },
        { name: "Gain Stage", function: "Amplify", material: "Silicon" },
        { name: "Output Stage", function: "Rail swing", material: "Silicon" },
        { name: "Optional Hysteresis", function: "Stabilize", material: "Feedback" },
      ],
    },
    types: {
      types: [
        { name: "Open-Collector", description: "Needs pull-up.", applications: ["Wired-OR"] },
        { name: "Push-Pull", description: "Active both ways.", applications: ["Fast"] },
        { name: "Window", description: "Two comparators.", applications: ["Bounds"] },
        { name: "With Hysteresis", description: "Schmitt trigger.", applications: ["Noisy"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Decision", formula: "Out = high if V+ > V-", description: "Comparison rule.", variables: [{ symbol: "Out", name: "Output", unit: "" }], example: "Simple" },
        { name: "Hysteresis", formula: "V_th = V_ref ± (R2/R1) V_out", description: "Schmitt thresholds.", variables: [{ symbol: "V_th", name: "Threshold", unit: "V" }], example: "Two thresholds" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Response", typicalValues: "ns to µs", notes: "Speed" },
        { name: "Offset", typicalValues: "mV", notes: "Accuracy" },
        { name: "Supply", typicalValues: "2-36V", notes: "Wide" },
        { name: "Output", typicalValues: "Open/PP", notes: "Type" },
      ],
    },
    applications: {
      applications: [
        { category: "Threshold", description: "Level detect", examples: ["Battery"] },
        { category: "Timing", description: "Zero-cross", examples: ["AC"] },
        { category: "Oscillator", description: "Relaxation", examples: ["555-like"] },
      ],
    },
    advantages: { advantages: ["Fast", "Simple", "Cheap", "Wide supply", "No feedback needed"] },
    disadvantages: { disadvantages: ["No linear region", "Chatter without hysteresis", "Offset", "Limited drive", "Oscillation prone"] },
    selection: {
      steps: [
        { step: 1, title: "Speed", description: "Response time." },
        { step: 2, title: "Output", description: "Open/PP." },
        { step: 3, title: "Hysteresis", description: "Add for noise." },
        { step: 4, title: "Supply", description: "Match." },
      ],
      tips: ["Add hysteresis for noisy", "Decouple supply", "Pull-up if open-collector"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Chatter", symptoms: ["Oscillate"], causes: ["No hysteresis"], solution: "Add feedback" },
        { failure: "Wrong Level", symptoms: ["Offset"], causes: ["Input offset"], solution: "Trim" },
        { failure: "No Output", symptoms: ["Flat"], causes: ["No pull-up"], solution: "Add resistor" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Comparator IC evolution",
        discovery: "Dedicated comparator ICs optimized op-amps for fast switching decisions.",
        evolution: [
          { year: 1960, event: "Comparator ICs" },
          { year: 1970, event: "LM339 quad" },
          { year: 2000, event: "Fast nano-second" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Hysteresis", definition: "Two-threshold noise immunity." },
        { term: "Schmitt Trigger", definition: "Comparator with hysteresis." },
        { term: "Open-Collector", definition: "Needs external pull-up." },
        { term: "Offset", definition: "Input mismatch voltage." },
      ],
    },
    interview: {
      beginner: [
        { question: "Comparator vs op-amp?", answer: "Comparator snaps digital; op-amp used with feedback for linear." },
        { question: "Why hysteresis?", answer: "Prevents chatter near the threshold." },
      ],
      intermediate: [
        { question: "Open-collector needs?", answer: "An external pull-up resistor." },
      ],
      advanced: [
        { question: "Chatter cause?", answer: "Noise around threshold without hysteresis." },
      ],
      expert: [
        { question: "Fast comparator design?", answer: "Minimize input capacitance, use proper layout and hysteresis." },
      ],
    },
    mcqs: [
      { question: "Comparator outputs:", options: ["High/Low", "Analog", "Gain", "None"], correctAnswer: 0, explanation: "Digital decision.", difficulty: "beginner" },
      { question: "Hysteresis prevents:", options: ["Chatter", "Gain", "Offset", "None"], correctAnswer: 0, explanation: "Noise bounce.", difficulty: "intermediate" },
      { question: "Open-collector needs:", options: ["Pull-up", "Pull-down", "Cap", "None"], correctAnswer: 0, explanation: "External resistor.", difficulty: "intermediate" },
      { question: "Schmitt is:", options: ["Comparator+hysteresis", "Amplifier", "Regulator", "None"], correctAnswer: 0, explanation: "Two thresholds.", difficulty: "advanced" },
      { question: "Compares:", options: ["Two voltages", "Current", "Power", "None"], correctAnswer: 0, explanation: "V+ vs V-.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Comparator Datasheet", author: "TI/Maxim", year: 2021, url: "", type: "datasheet" },
        { title: "Analog Design", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "op-amp", relationship: "Linear cousin" },
        { id: "resistor", relationship: "Hysteresis" },
        { id: "microcontroller", relationship: "Reads output" },
      ],
    },
  },
  "ldo-regulator": {
    overview: {
      whatIsIt: "A Low-Dropout (LDO) regulator provides a stable output voltage with very small difference between input and output.",
      whyExists: "LDOs efficiently regulate from sources close to the output voltage with low noise.",
      whereUsed: "Used in battery-powered and noise-sensitive analog circuits.",
    },
    working: {
      workingPrinciple: "An error amplifier drives a pass transistor to keep the output equal to a reference times a divider ratio.",
      steps: [
        "Output sampled by divider",
        "Compared to reference",
        "Error amplifier drives pass transistor",
        "Adjusts pass device to hold V_out",
      ],
      microscopicExplanation: "Feedback loop modulates the pass FET's resistance to regulate; dropout is the minimum Vin-Vout to stay in regulation.",
    },
    construction: {
      internalParts: [
        { name: "Pass Transistor", function: "Drops voltage", material: "MOSFET" },
        { name: "Error Amp", function: "Compare", material: "Silicon" },
        { name: "Bandgap Ref", function: "Stable Vref", material: "Silicon" },
        { name: "Feedback Divider", function: "Set ratio", material: "Resistors" },
      ],
    },
    types: {
      types: [
        { name: "Fixed Output", description: "Set voltage.", applications: ["3.3V rails"] },
        { name: "Adjustable", description: "External divider.", applications: ["Custom"] },
        { name: "Low-Noise", description: "For RF/ADC.", applications: ["Sensitive"] },
        { name: "High-PSRR", description: "Rejects ripple.", applications: ["Audio"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Output (adj)", formula: "V_out = V_ref (1 + R1/R2)", description: "Divider sets.", variables: [{ symbol: "V_out", name: "Output", unit: "V" }, { symbol: "V_ref", name: "Ref", unit: "V" }], example: "1.25V ref" },
        { name: "Dropout", formula: "V_do = V_in(min) - V_out", description: "Min headroom.", variables: [{ symbol: "V_do", name: "Dropout", unit: "V" }], example: "0.2V" },
        { name: "Power Dissipation", formula: "P = (V_in - V_out) I", description: "Lost as heat.", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "Linear loss" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Dropout", typicalValues: "0.1-0.5V", notes: "Low" },
        { name: "Output Current", typicalValues: "100mA-5A", notes: "By model" },
        { name: "PSRR", typicalValues: "40-80dB", notes: "Ripple reject" },
        { name: "Quiescent", typicalValues: "µA to mA", notes: "Efficiency" },
      ],
    },
    applications: {
      applications: [
        { category: "Power", description: "Clean rail", examples: ["MCU"] },
        { category: "Audio", description: "Low noise", examples: ["Codecs"] },
        { category: "RF", description: "Stable V", examples: ["Radios"] },
        { category: "Battery", description: "Near-Vin", examples: ["Wearables"] },
      ],
    },
    advantages: { advantages: ["Low dropout", "Low noise", "Simple", "Few parts", "Good PSRR"] },
    disadvantages: { disadvantages: ["Inefficient (linear)", "Heat at high drop", "Limited current", "Needs caps", "Quiescent loss"] },
    selection: {
      steps: [
        { step: 1, title: "Dropout", description: "Vin-Vout headroom." },
        { step: 2, title: "Current", description: "Max load." },
        { step: 3, title: "Noise/PSRR", description: "Sensitive?" },
        { step: 4, title: "Caps", description: "ESR requirements." },
      ],
      tips: ["Mind thermal", "Use correct ESR caps", "Check stability"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Oscillation", symptoms: ["Unstable"], causes: ["Wrong cap ESR"], solution: "Fix caps" },
        { failure: "Dropout", symptoms: ["Low Vout"], causes: ["Vin too low"], solution: "Raise Vin" },
        { failure: "Overheat", symptoms: ["Hot"], causes: ["High drop×I"], solution: "Heatsink/switch" },
      ],
    },
    history: {
      invention: {
        year: 1970,
        inventor: "Linear regulator evolution",
        discovery: "LDO topologies reduced the required input-output headroom vs older regulators.",
        evolution: [
          { year: 1970, event: "Linear regs" },
          { year: 1980, event: "LDO topologies" },
          { year: 2000, event: "Ultra-low-Iq LDO" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Thermal limit.",
      thermalSafety: "Can overheat; use heatsink.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Dropout", definition: "Min Vin-Vout to regulate." },
        { term: "PSRR", definition: "Power supply rejection ratio." },
        { term: "Bandgap", definition: "Temperature-stable reference." },
        { term: "Quiescent", definition: "No-load supply current." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is dropout?", answer: "Minimum input-output voltage difference to stay regulated." },
        { question: "LDO vs switching?", answer: "LDO is simpler/quiet but less efficient." },
      ],
      intermediate: [
        { question: "Why heatsink?", answer: "Power lost as heat = (Vin-Vout)×I." },
      ],
      advanced: [
        { question: "PSRR importance?", answer: "Rejects input ripple for clean analog power." },
      ],
      expert: [
        { question: "Stability concern?", answer: "Output capacitor ESR must be in the stable range." },
      ],
    },
    mcqs: [
      { question: "LDO dropout is:", options: ["Vin-Vout min", "Vout-Vin", "Vref", "None"], correctAnswer: 0, explanation: "Headroom.", difficulty: "beginner" },
      { question: "LDO is:", options: ["Linear", "Switching", "Transformer", "None"], correctAnswer: 0, explanation: "Pass transistor.", difficulty: "beginner" },
      { question: "PSRR means:", options: ["Ripple rejection", "Gain", "Current", "None"], correctAnswer: 0, explanation: "Supply rejection.", difficulty: "advanced" },
      { question: "Heat =", options: ["(Vin-Vout)I", "Vin×I", "Vout×I", "None"], correctAnswer: 0, explanation: "Linear loss.", difficulty: "intermediate" },
      { question: "Adj output uses:", options: ["External divider", "Fixed pin", "Coil", "None"], correctAnswer: 0, explanation: "Sets ratio.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "LDO Datasheet", author: "TI/ADI", year: 2021, url: "", type: "datasheet" },
        { title: "Power Management", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "voltage-regulator", relationship: "Linear family" },
        { id: "capacitor", relationship: "Stability" },
        { id: "microcontroller", relationship: "Powers" },
      ],
    },
  },

  microcontroller: {
    overview: {
      whatIsIt: "A microcontroller (MCU) is a self-contained computer on a chip with CPU, memory, and peripherals for embedded control.",
      whyExists: "MCUs provide programmable, low-cost control for countless electronic devices.",
      whereUsed: "Used in appliances, cars, IoT, and virtually every smart device.",
    },
    working: {
      workingPrinciple: "It fetches instructions from flash, executes them on the CPU, and interacts with the world via GPIO, ADC, timers, and communication peripherals.",
      steps: [
        "Reset fetches vector",
        "CPU runs firmware from flash",
        "Reads inputs (GPIO/ADC)",
        "Processes and writes outputs",
        "Handles interrupts/timers",
      ],
      microscopicExplanation: "A Harvard/Von Neumann core executes opcodes; peripherals are memory-mapped registers the firmware configures.",
    },
    construction: {
      internalParts: [
        { name: "CPU Core", function: "Execute code", material: "Silicon" },
        { name: "Flash", function: "Store firmware", material: "Silicon" },
        { name: "RAM", function: "Runtime data", material: "Silicon" },
        { name: "Peripherals", function: "GPIO/ADC/UART", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "8-bit (AVR)", description: "Simple, cheap.", applications: ["Hobby"] },
        { name: "32-bit (ARM)", description: "Powerful, common.", applications: ["IoT"] },
        { name: "ESP32", description: "Wi-Fi/BT.", applications: ["Connected"] },
        { name: "DSP/RT", description: "Real-time.", applications: ["Control"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Clock Period", formula: "T = 1 / f", description: "Cycle time.", variables: [{ symbol: "T", name: "Period", unit: "s" }, { symbol: "f", name: "Clock", unit: "Hz" }], example: "16MHz" },
        { name: "Baud Rate", formula: "Bits/s = f / divisor", description: "UART speed.", variables: [{ symbol: "Bits/s", name: "Rate", unit: "bps" }], example: "115200" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Clock", typicalValues: "8-300MHz", notes: "Core" },
        { name: "Flash", typicalValues: "8KB-2MB", notes: "Program" },
        { name: "GPIO", typicalValues: "8-100+", notes: "Pins" },
        { name: "Peripherals", typicalValues: "ADC/UART/SPI/I²C", notes: "Interfaces" },
      ],
    },
    applications: {
      applications: [
        { category: "Control", description: "Automation", examples: ["Relays"] },
        { category: "IoT", description: "Connected", examples: ["Sensors"] },
        { category: "Consumer", description: "Smart devices", examples: ["Toys"] },
        { category: "Auto", description: "ECU", examples: ["Cars"] },
      ],
    },
    advantages: { advantages: ["Programmable", "Low cost", "Integrated", "Low power", "Versatile"] },
    disadvantages: { disadvantages: ["Learning curve", "Limited power", "Real-time limits", "Debug complexity", "Toolchain"] },
    selection: {
      steps: [
        { step: 1, title: "Performance", description: "Needed MIPS." },
        { step: 2, title: "Memory", description: "Flash/RAM." },
        { step: 3, title: "Peripherals", description: "Required I/F." },
        { step: 4, title: "Ecosystem", description: "Tools/cost." },
      ],
      tips: ["Leave headroom", "Check power budget", "Use dev board first"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Boot", symptoms: ["Dead"], causes: ["Bad flash"], solution: "Reflash" },
        { failure: "Reset Loop", symptoms: ["Reboots"], causes: ["Watchdog"], solution: "Fix code" },
        { failure: "Peripheral Fail", symptoms: ["No I/O"], causes: ["Config"], solution: "Check init" },
      ],
    },
    history: {
      invention: {
        year: 1971,
        inventor: "Intel (4004 family)",
        discovery: "The first microprocessors led to single-chip microcontrollers for embedded control.",
        evolution: [
          { year: 1971, event: "Microprocessor" },
          { year: 1980, event: "8051 MCU" },
          { year: 2000, event: "ARM Cortex-M" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage (3.3/5V).",
      currentSafety: "IO current limit.",
      thermalSafety: "None typical.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "GPIO", definition: "General-purpose input/output pin." },
        { term: "Flash", definition: "Non-volatile program memory." },
        { term: "ISR", definition: "Interrupt service routine." },
        { term: "Peripheral", definition: "On-chip hardware block." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is an MCU?", answer: "A tiny computer on a chip with CPU, memory, and I/O." },
        { question: "Flash vs RAM?", answer: "Flash stores code; RAM holds runtime data." },
      ],
      intermediate: [
        { question: "What is an interrupt?", answer: "A hardware event that pauses code to run an ISR." },
      ],
      advanced: [
        { question: "Real-time concern?", answer: "Meeting timing deadlines; use RTOS or careful ISRs." },
      ],
      expert: [
        { question: "Reduce power?", answer: "Sleep modes, clock gating, lower frequency." },
      ],
    },
    mcqs: [
      { question: "MCU contains:", options: ["CPU+mem+IO", "CPU only", "Memory only", "None"], correctAnswer: 0, explanation: "Integrated.", difficulty: "beginner" },
      { question: "Flash stores:", options: ["Firmware", "RAM data", "Cache", "None"], correctAnswer: 0, explanation: "Program.", difficulty: "beginner" },
      { question: "GPIO means:", options: ["General I/O", "Ground", "Gain", "None"], correctAnswer: 0, explanation: "Configurable pins.", difficulty: "intermediate" },
      { question: "Interrupt does:", options: ["Pause for ISR", "Reset", "Sleep", "None"], correctAnswer: 0, explanation: "Event handler.", difficulty: "advanced" },
      { question: "ARM Cortex-M is:", options: ["32-bit MCU core", "8-bit", "FPGA", "None"], correctAnswer: 0, explanation: "Common MCU.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "MCU Datasheet", author: "ST/ESP", year: 2021, url: "", type: "datasheet" },
        { title: "Embedded Systems", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "adc", relationship: "Reads analog" },
        { id: "sensor", relationship: "Interfaces" },
        { id: "led", relationship: "Drives output" },
      ],
    },
  },
  fpga: {
    overview: {
      whatIsIt: "An FPGA (Field-Programmable Gate Array) is a reconfigurable chip of logic blocks and interconnects programmed by the user.",
      whyExists: "FPGAs give hardware-level parallelism and reconfigurability without fabricating an ASIC.",
      whereUsed: "Used in signal processing, prototyping, and high-speed interfaces.",
    },
    working: {
      workingPrinciple: "Configurable logic blocks (LUTs), flip-flops, and routing are programmed via a bitstream to implement any digital circuit.",
      steps: [
        "Write HDL (Verilog/VHDL)",
        "Synthesize to netlist",
        "Place and route",
        "Load bitstream into fabric",
        "Circuit behaves as described",
      ],
      microscopicExplanation: "LUTs implement combinational logic; flip-flops store state; programmable switches connect blocks per the bitstream.",
    },
    construction: {
      internalParts: [
        { name: "LUT", function: "Logic", material: "SRAM" },
        { name: "Flip-Flop", function: "State", material: "Silicon" },
        { name: "Routing", function: "Connect", material: "Switches" },
        { name: "IOB", function: "Pins", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "SRAM-based", description: "Reprogrammable.", applications: ["Prototyping"] },
        { name: "Flash-based", description: "Non-volatile.", applications: ["Embedded"] },
        { name: "SoC FPGA", description: "With ARM core.", applications: ["Complex"] },
        { name: "Low-power", description: "Small.", applications: ["Edge"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Throughput", formula: "Ops = f × parallelism", description: "Parallel gain.", variables: [{ symbol: "Ops", name: "Ops/s", unit: "1/s" }, { symbol: "f", name: "Clock", unit: "Hz" }], example: "Massive parallel" },
        { name: "LUT count", formula: "Logic = Σ LUTs", description: "Capacity.", variables: [{ symbol: "Logic", name: "Capacity", unit: "" }], example: "100k LUTs" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Logic Cells", typicalValues: "1k to millions", notes: "Capacity" },
        { name: "Clock", typicalValues: "up to 500MHz+", notes: "Speed" },
        { name: "Block RAM", typicalValues: "Kb to Mb", notes: "Memory" },
        { name: "DSP Slices", typicalValues: "tens to thousands", notes: "Math" },
      ],
    },
    applications: {
      applications: [
        { category: "DSP", description: "Filtering", examples: ["Radio"] },
        { category: "Prototyping", description: "ASIC emulation", examples: ["Chips"] },
        { category: "Vision", description: "Image pipe", examples: ["Cameras"] },
        { category: "Networking", description: "Packet", examples: ["Switches"] },
      ],
    },
    advantages: { advantages: ["Reconfigurable", "Parallel", "Fast I/O", "Low latency", "No NRE"] },
    disadvantages: { disadvantages: ["Power hungry", "Cost (vs MCU)", "Hard to design", "Tool cost", "Bitstream volatile"] },
    selection: {
      steps: [
        { step: 1, title: "Logic Need", description: "LUT count." },
        { step: 2, title: "Speed", description: "Clock/I/O." },
        { step: 3, title: "DSP/RAM", description: "Math/memory." },
        { step: 4, title: "Tools", description: "Vendor flow." },
      ],
      tips: ["Estimate utilization <70%", "Plan timing early", "Use IP cores"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Timing Fail", symptoms: ["Unstable"], causes: ["Slack"], solution: "Optimize" },
        { failure: "No Config", symptoms: ["Dead"], causes: ["Bad bitstream"], solution: "Reload" },
        { failure: "Overheat", symptoms: ["Hot"], causes: ["High util"], solution: "Cool/reduce" },
      ],
    },
    history: {
      invention: {
        year: 1985,
        inventor: "Ross Freeman (Xilinx)",
        discovery: "Freeman co-founded Xilinx and invented the first commercial FPGA.",
        evolution: [
          { year: 1985, event: "First FPGA" },
          { year: 2000, event: "SoC FPGAs" },
          { year: 2015, event: "Adaptive SoC" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage (core 1V).",
      currentSafety: "Can be high total.",
      thermalSafety: "Needs cooling at load.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "LUT", definition: "Look-up table for logic." },
        { term: "Bitstream", definition: "Configuration data." },
        { term: "HDL", definition: "Hardware description language." },
        { term: "Place & Route", definition: "Physical mapping step." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is an FPGA?", answer: "A reconfigurable chip you program as custom hardware." },
        { question: "FPGA vs MCU?", answer: "FPGA is parallel hardware; MCU is sequential software." },
      ],
      intermediate: [
        { question: "What is a bitstream?", answer: "The configuration loaded to set up the fabric." },
      ],
      advanced: [
        { question: "Timing closure?", answer: "Meeting setup/hold across the design at target clock." },
      ],
      expert: [
        { question: "When choose FPGA?", answer: "When parallelism, latency, or I/O speed beat an MCU/ASIC tradeoff." },
      ],
    },
    mcqs: [
      { question: "FPGA is:", options: ["Reconfigurable hardware", "Fixed MCU", "Memory", "None"], correctAnswer: 0, explanation: "Programmable fabric.", difficulty: "beginner" },
      { question: "LUT implements:", options: ["Combinational logic", "Memory only", "Clock", "None"], correctAnswer: 0, explanation: "Logic block.", difficulty: "intermediate" },
      { question: "Bitstream is:", options: ["Config data", "Firmware C", "Power", "None"], correctAnswer: 0, explanation: "Sets fabric.", difficulty: "intermediate" },
      { question: "Invented by:", options: ["Freeman/Xilinx", "Intel", "ARM", "None"], correctAnswer: 0, explanation: "1985.", difficulty: "beginner" },
      { question: "FPGA advantage:", options: ["Parallelism", "Low cost", "Easy", "None"], correctAnswer: 0, explanation: "Hardware parallel.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "FPGA Datasheet", author: "Xilinx/Intel", year: 2021, url: "", type: "datasheet" },
        { title: "FPGA Design", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "microcontroller", relationship: "Alternative" },
        { id: "adc", relationship: "Feeds data" },
        { id: "logic-gate-ic", relationship: "Fixed logic" },
      ],
    },
  },
  "logic-gate-ic": {
    overview: {
      whatIsIt: "A logic-gate IC integrates several basic logic gates (AND, OR, NOT, etc.) in one package.",
      whyExists: "Logic ICs implement combinational and sequential digital functions compactly.",
      whereUsed: "Used in control, interfacing, and glue logic everywhere digital.",
    },
    working: {
      workingPrinciple: "Transistors implement Boolean functions; the output is a logic level determined by the input combination per the gate truth table.",
      steps: [
        "Inputs applied as levels",
        "Internal transistors switch",
        "Boolean function computed",
        "Output driven to rail",
      ],
      microscopicExplanation: "CMOS pairs of MOSFETs pull the output high or low based on input states, with no DC path when static.",
    },
    construction: {
      internalParts: [
        { name: "CMOS Cells", function: "Implement gates", material: "Silicon" },
        { name: "Output Buffer", function: "Drive load", material: "Silicon" },
        { name: "ESD Diodes", function: "Protect", material: "Silicon" },
        { name: "Package", function: "Pins", material: "Plastic" },
      ],
    },
    types: {
      types: [
        { name: "74HC", description: "CMOS, fast.", applications: ["General"] },
        { name: "74LS", description: "TTL, legacy.", applications: ["Older"] },
        { name: "74LVC", description: "Low voltage.", applications: ["3.3V"] },
        { name: "Single-gate", description: "One function.", applications: ["Glue"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Fan-out", formula: "N = I_out / I_in", description: "Loads driven.", variables: [{ symbol: "N", name: "Fan-out", unit: "" }], example: "10 typical" },
        { name: "Propagation", formula: "t_pd", description: "Delay per gate.", variables: [{ symbol: "t_pd", name: "Delay", unit: "ns" }], example: "Few ns" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Family", typicalValues: "HC/LS/LVC", notes: "Tech" },
        { name: "Vcc", typicalValues: "2-6V (HC)", notes: "Supply" },
        { name: "Speed", typicalValues: "ns prop delay", notes: "Fast" },
        { name: "Gates/pkg", typicalValues: "1-6", notes: "Count" },
      ],
    },
    applications: {
      applications: [
        { category: "Glue Logic", description: "Interconnect", examples: ["Boards"] },
        { category: "Control", description: "Decode", examples: ["Address"] },
        { category: "Interface", description: "Level shift", examples: ["Buffers"] },
      ],
    },
    advantages: { advantages: ["Simple", "Cheap", "Fast", "Standard", "Robust"] },
    disadvantages: { disadvantages: ["Fixed function", "Power (vs MCU)", "Board space", "Limited", "Static sensitive"] },
    selection: {
      steps: [
        { step: 1, title: "Family", description: "Match voltage." },
        { step: 2, title: "Function", description: "Gate type." },
        { step: 3, title: "Speed", description: "Prop delay." },
        { step: 4, title: "Package", description: "Footprint." },
      ],
      tips: ["Unused inputs to Vcc/GND", "Decouple Vcc", "Check fan-out"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Floating Input", symptoms: ["Erratic"], causes: ["Open pin"], solution: "Tie off" },
        { failure: "No Output", symptoms: ["Stuck"], causes: ["Bad IC"], solution: "Replace" },
        { failure: "Oscillation", symptoms: ["Ringing"], causes: ["No decoup"], solution: "Add cap" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Texas Instruments (7400)",
        discovery: "The 7400 TTL series standardized logic families for digital design.",
        evolution: [
          { year: 1960, event: "7400 TTL" },
          { year: 1980, event: "74HC CMOS" },
          { year: 2000, event: "Low-voltage families" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Fan-out", definition: "Number of inputs one output drives." },
        { term: "Propagation Delay", definition: "Time from input to output change." },
        { term: "CMOS", definition: "Complementary MOS logic." },
        { term: "Truth Table", definition: "Input-output logic map." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a logic gate?", answer: "A circuit performing a Boolean function on digital inputs." },
        { question: "Unused inputs?", answer: "Tie them to Vcc or GND, never float." },
      ],
      intermediate: [
        { question: "HC vs LS?", answer: "HC is CMOS (low power); LS is older TTL." },
      ],
      advanced: [
        { question: "Fan-out limit?", answer: "Set by output current vs input current." },
      ],
      expert: [
        { question: "Why decouple?", answer: "Supply spikes from switching cause instability." },
      ],
    },
    mcqs: [
      { question: "Logic gate does:", options: ["Boolean function", "Amplify", "Regulate", "None"], correctAnswer: 0, explanation: "Digital logic.", difficulty: "beginner" },
      { question: "Unused input should:", options: ["Be tied off", "Float", "Connect out", "None"], correctAnswer: 0, explanation: "Avoid float.", difficulty: "intermediate" },
      { question: "74HC is:", options: ["CMOS", "TTL", "ECL", "None"], correctAnswer: 0, explanation: "CMOS family.", difficulty: "beginner" },
      { question: "Fan-out is:", options: ["Loads driven", "Speed", "Power", "None"], correctAnswer: 0, explanation: "Output capacity.", difficulty: "advanced" },
      { question: "Propagation delay is:", options: ["Input→output time", "Clock", "Voltage", "None"], correctAnswer: 0, explanation: "Gate delay.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Logic IC Datasheet", author: "TI/Nexperia", year: 2021, url: "", type: "datasheet" },
        { title: "Digital Design", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "logic-gates", relationship: "Concept" },
        { id: "microcontroller", relationship: "Alternative" },
        { id: "fpga", relationship: "Reconfigurable logic" },
      ],
    },
  },
  "audio-amplifier-ic": {
    overview: {
      whatIsIt: "An audio power amplifier IC boosts low-level audio signals to drive speakers or headphones.",
      whyExists: "Amplifiers provide the current/voltage gain needed to produce audible sound.",
      whereUsed: "Used in phones, TVs, radios, and musical equipment.",
    },
    working: {
      workingPrinciple: "A small input signal modulates a larger current through output transistors, reproducing the waveform with gain and power.",
      steps: [
        "Small signal input",
        "Voltage gain stage",
        "Driver and output stage",
        "Current delivered to load",
      ],
      microscopicExplanation: "Class AB uses biased complementary transistors to reduce crossover distortion while staying efficient.",
    },
    construction: {
      internalParts: [
        { name: "Input Stage", function: "Gain", material: "Silicon" },
        { name: "Driver", function: "Buffer", material: "Silicon" },
        { name: "Output Transistors", function: "Power", material: "Silicon" },
        { name: "Feedback", function: "Stability", material: "Resistors" },
      ],
    },
    types: {
      types: [
        { name: "Class AB", description: "Good fidelity.", applications: ["Hi-fi"] },
        { name: "Class D", description: "PWM, efficient.", applications: ["Portable"] },
        { name: "Headphone", description: "Low power.", applications: ["Phones"] },
        { name: "Mono/Stereo", description: "Channels.", applications: ["TV"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Voltage Gain", formula: "A_v = V_out / V_in", description: "Amplification.", variables: [{ symbol: "A_v", name: "Gain", unit: "" }, { symbol: "V_out", name: "Output", unit: "V" }], example: "20-100" },
        { name: "Output Power", formula: "P = V² / (2 R_load)", description: "Into speaker.", variables: [{ symbol: "P", name: "Power", unit: "W" }, { symbol: "R_load", name: "Load", unit: "Ω" }], example: "8Ω speaker" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Output Power", typicalValues: "0.1W to 100W", notes: "Per channel" },
        { name: "THD", typicalValues: "<0.1%", notes: "Distortion" },
        { name: "Supply", typicalValues: "3-50V", notes: "Wide" },
        { name: "Class", typicalValues: "AB/D", notes: "Efficiency" },
      ],
    },
    applications: {
      applications: [
        { category: "Consumer", description: "Sound", examples: ["TVs"] },
        { category: "Portable", description: "Efficient", examples: ["Phones"] },
        { category: "Pro", description: "Instruments", examples: ["Amps"] },
      ],
    },
    advantages: { advantages: ["Loud output", "Efficient (D)", "Integrated", "Cheap", "Simple"] },
    disadvantages: { disadvantages: ["Heat (AB)", "EMI (D)", "Distortion", "Speaker load matters", "Power needed"] },
    selection: {
      steps: [
        { step: 1, title: "Power", description: "Match speaker." },
        { step: 2, title: "Class", description: "AB vs D." },
        { step: 3, title: "Supply", description: "Available V." },
        { step: 4, title: "Load", description: "Ohms." },
      ],
      tips: ["Heatsink for AB", "Filter Class D output", "Stable load"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Sound", symptoms: ["Silent"], causes: ["No input"], solution: "Check signal" },
        { failure: "Distortion", symptoms: ["Clipping"], causes: ["Overdrive"], solution: "Lower gain" },
        { failure: "Overheat", symptoms: ["Hot"], causes: ["Low load"], solution: "Check ohms" },
      ],
    },
    history: {
      invention: {
        year: 1950,
        inventor: "Audio amp evolution",
        discovery: "Transistor audio amplifiers replaced tubes, enabling compact sound systems.",
        evolution: [
          { year: 1950, event: "Transistor amps" },
          { year: 1980, event: "Class D research" },
          { year: 2000, event: "Efficient Class D ICs" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Output current.",
      thermalSafety: "Heatsink needed.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Class D", definition: "PWM switching amplifier." },
        { term: "THD", definition: "Total harmonic distortion." },
        { term: "Crossover", definition: "Distortion near zero crossing." },
        { term: "Load", definition: "Speaker impedance." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does it do?", answer: "Amplifies audio to drive a speaker." },
        { question: "Class D benefit?", answer: "High efficiency via PWM switching." },
      ],
      intermediate: [
        { question: "Why heatsink?", answer: "Class AB dissipates power as heat." },
      ],
      advanced: [
        { question: "THD meaning?", answer: "Unwanted harmonics added to the signal." },
      ],
      expert: [
        { question: "Class D EMI?", answer: "Switching creates RF; needs output filter and layout care." },
      ],
    },
    mcqs: [
      { question: "Audio amp drives:", options: ["Speaker", "LED", "Relay", "None"], correctAnswer: 0, explanation: "Load power.", difficulty: "beginner" },
      { question: "Class D is:", options: ["PWM efficient", "Linear", "Transformer", "None"], correctAnswer: 0, explanation: "Switching.", difficulty: "intermediate" },
      { question: "P = V²/(2R) is:", options: ["Output power", "Gain", "Current", "None"], correctAnswer: 0, explanation: "Into load.", difficulty: "advanced" },
      { question: "THD is:", options: ["Distortion", "Gain", "Power", "None"], correctAnswer: 0, explanation: "Harmonics.", difficulty: "intermediate" },
      { question: "Class AB issue:", options: ["Heat", "Low eff only", "Noise", "None"], correctAnswer: 0, explanation: "Dissipates heat.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Audio Amp Datasheet", author: "TI/ST", year: 2021, url: "", type: "datasheet" },
        { title: "Audio Electronics", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "speaker", relationship: "Drives" },
        { id: "op-amp", relationship: "Preamp" },
        { id: "dac", relationship: "Feeds signal" },
      ],
    },
  },
  "motor-driver-ic": {
    overview: {
      whatIsIt: "A motor driver IC controls the direction and speed of a motor, typically using an H-bridge.",
      whyExists: "MCUs can't directly drive motor currents; drivers provide the power interface.",
      whereUsed: "Used in robots, drones, and toys with DC/stepper motors.",
    },
    working: {
      workingPrinciple: "An H-bridge of four switches reverses polarity across the motor; PWM controls speed; drivers handle high current and flyback.",
      steps: [
        "MCU sends direction/PWM",
        "H-bridge switches polarity",
        "Motor spins one way",
        "Reverse switches -> other way",
        "PWM sets speed",
      ],
      microscopicExplanation: "Diagonal switch pairs conduct to set polarity; freewheeling diodes clamp inductive kickback.",
    },
    construction: {
      internalParts: [
        { name: "H-Bridge", function: "Reverse polarity", material: "MOSFET" },
        { name: "Gate Drive", function: "Switch FETs", material: "Silicon" },
        { name: "Current Sense", function: "Limit", material: "Resistor" },
        { name: "Protection", function: "OCP/OTP", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "DC Driver", description: "Single H-bridge.", applications: ["Toys"] },
        { name: "Dual", description: "Two motors.", applications: ["Robots"] },
        { name: "Stepper Driver", description: "Coil sequencing.", applications: ["CNC"] },
        { name: "Brushless (ESC)", description: "3-phase.", applications: ["Drones"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "PWM Speed", formula: "V_avg = D × V_supply", description: "Duty sets speed.", variables: [{ symbol: "V_avg", name: "Avg voltage", unit: "V" }, { symbol: "D", name: "Duty", unit: "" }], example: "50% = half" },
        { name: "Motor Current", formula: "I = V / R", description: "Stall current.", variables: [{ symbol: "I", name: "Current", unit: "A" }], example: "High at stall" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Voltage", typicalValues: "2-46V", notes: "Motor supply" },
        { name: "Current", typicalValues: "1-50A", notes: "Continuous" },
        { name: "Type", typicalValues: "H-bridge/stepper", notes: "Topology" },
        { name: "Protection", typicalValues: "OCP/OTP", notes: "Safety" },
      ],
    },
    applications: {
      applications: [
        { category: "Robotics", description: "Wheel drive", examples: ["Cars"] },
        { category: "Drones", description: "Brushless", examples: ["Props"] },
        { category: "CNC", description: "Steppers", examples: ["3D print"] },
      ],
    },
    advantages: { advantages: ["High current", "Direction control", "PWM speed", "Protection", "Easy MCU link"] },
    disadvantages: { disadvantages: ["Heat", "Shoot-through risk", "Cost", "Board space", "Inductive spikes"] },
    selection: {
      steps: [
        { step: 1, title: "Voltage/Current", description: "Match motor." },
        { step: 2, title: "Type", description: "DC/stepper/BLDC." },
        { step: 3, title: "Interface", description: "PWM/step-dir." },
        { step: 4, title: "Protection", description: "OCP needed." },
      ],
      tips: ["Avoid shoot-through", "Heatsink", "Flyback diodes"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Shoot-through", symptoms: ["Hot/short"], causes: ["Both sides on"], solution: "Dead-time" },
        { failure: "No Move", symptoms: ["Still"], causes: ["No PWM"], solution: "Check MCU" },
        { failure: "Overheat", symptoms: ["Trip"], causes: ["Stall"], solution: "Current limit" },
      ],
    },
    history: {
      invention: {
        year: 1970,
        inventor: "Motor driver evolution",
        discovery: "Integrated H-bridge drivers simplified motor control vs discrete circuits.",
        evolution: [
          { year: 1970, event: "Discrete H-bridge" },
          { year: 1990, event: "Integrated drivers" },
          { year: 2010, event: "Smart BLDC drivers" },
        ],
      },
    },
    safety: {
      voltageSafety: "Motor voltage.",
      currentSafety: "High current risk.",
      thermalSafety: "Heatsink required.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "H-Bridge", definition: "Four-switch polarity reverser." },
        { term: "Shoot-through", definition: "Both sides conducting (short)." },
        { term: "PWM", definition: "Pulse-width modulation for speed." },
        { term: "Stall Current", definition: "Max current at zero speed." },
      ],
    },
    interview: {
      beginner: [
        { question: "What reverses motor?", answer: "An H-bridge swaps the polarity across it." },
        { question: "PWM controls?", answer: "The average voltage, hence speed." },
      ],
      intermediate: [
        { question: "Shoot-through danger?", answer: "Both sides on creates a short; needs dead-time." },
      ],
      advanced: [
        { question: "Flyback handling?", answer: "Diodes or synchronous FETs clamp inductive kick." },
      ],
      expert: [
        { question: "BLDC driving?", answer: "Commutate three phases in sequence via PWM." },
      ],
    },
    mcqs: [
      { question: "H-bridge does:", options: ["Reverse polarity", "Amplify", "Regulate", "None"], correctAnswer: 0, explanation: "Direction.", difficulty: "beginner" },
      { question: "Speed by:", options: ["PWM duty", "Voltage only", "Frequency", "None"], correctAnswer: 0, explanation: "Avg voltage.", difficulty: "intermediate" },
      { question: "Shoot-through is:", options: ["Short circuit", "Stall", "Heat", "None"], correctAnswer: 0, explanation: "Both sides on.", difficulty: "advanced" },
      { question: "Flyback needs:", options: ["Clamp diodes", "Cap", "Resistor", "None"], correctAnswer: 0, explanation: "Inductive kick.", difficulty: "advanced" },
      { question: "Drives:", options: ["Motor", "LED", "Sensor", "None"], correctAnswer: 0, explanation: "Power interface.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Motor Driver Datasheet", author: "TI/Allegro", year: 2021, url: "", type: "datasheet" },
        { title: "Motor Control", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "dc-motor", relationship: "Drives" },
        { id: "stepper-motor", relationship: "Drives" },
        { id: "microcontroller", relationship: "Controls" },
      ],
    },
  },

  "logic-gates": {
    overview: {
      whatIsIt: "Logic gates are the fundamental building blocks of digital circuits that implement Boolean functions.",
      whyExists: "All digital computation is built from combinations of basic gates.",
      whereUsed: "Used in every digital system from simple controllers to CPUs.",
    },
    working: {
      workingPrinciple: "Each gate outputs a logic level based on its inputs per a truth table (AND, OR, NOT, NAND, NOR, XOR, XNOR).",
      steps: [
        "Inputs arrive as levels",
        "Transistors implement function",
        "Boolean result computed",
        "Output driven",
      ],
      microscopicExplanation: "CMOS pairs pull the output high or low; the function is the Boolean combination of inputs.",
    },
    construction: {
      internalParts: [
        { name: "PMOS Network", function: "Pull-up", material: "Silicon" },
        { name: "NMOS Network", function: "Pull-down", material: "Silicon" },
        { name: "Output", function: "Drive", material: "Silicon" },
        { name: "Package", function: "Pins", material: "Plastic" },
      ],
    },
    types: {
      types: [
        { name: "AND/OR", description: "Basic combine.", applications: ["Enable"] },
        { name: "NOT", description: "Invert.", applications: ["Buffer"] },
        { name: "NAND/NOR", description: "Universal.", applications: ["All logic"] },
        { name: "XOR", description: "Difference.", applications: ["Adders"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Boolean", formula: "Y = A·B (AND)", description: "Conjunction.", variables: [{ symbol: "Y", name: "Output", unit: "" }], example: "1 only if both 1" },
        { name: "De Morgan", formula: "NOT(A+B) = NOT A · NOT B", description: "Equivalence.", variables: [{ symbol: "A", name: "Input", unit: "" }], example: "Transform" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Family", typicalValues: "CMOS/TTL", notes: "Tech" },
        { name: "Vcc", typicalValues: "2-6V", notes: "Supply" },
        { name: "Speed", typicalValues: "ns", notes: "Prop delay" },
        { name: "Levels", typicalValues: "0/1", notes: "Logic" },
      ],
    },
    applications: {
      applications: [
        { category: "Computation", description: "Arithmetic", examples: ["Adders"] },
        { category: "Control", description: "Decode", examples: ["Logic"] },
        { category: "Interface", description: "Combine", examples: ["Signals"] },
      ],
    },
    advantages: { advantages: ["Fundamental", "Simple", "Fast", "Cheap", "Standard"] },
    disadvantages: { disadvantages: ["Many for complex", "Board space", "Power", "Static sensitive", "Fixed"] },
    selection: {
      steps: [
        { step: 1, title: "Function", description: "Needed gate." },
        { step: 2, title: "Family", description: "Match voltage." },
        { step: 3, title: "Package", description: "Footprint." },
        { step: 4, title: "Unused", description: "Tie inputs." },
      ],
      tips: ["Use NAND universal", "Decouple", "Avoid float"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Float", symptoms: ["Erratic"], causes: ["Open"], solution: "Tie off" },
        { failure: "Stuck", symptoms: ["Fixed"], causes: ["Bad"], solution: "Replace" },
        { failure: "Slow", symptoms: ["Delay"], causes: ["Load"], solution: "Buffer" },
      ],
    },
    history: {
      invention: {
        year: 1938,
        inventor: "Claude Shannon (Boolean)",
        discovery: "Shannon showed Boolean algebra maps to switching circuits, founding digital logic.",
        evolution: [
          { year: 1938, event: "Boolean circuits" },
          { year: 1960, event: "IC gates" },
          { year: 2000, event: "Nanometer CMOS" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Boolean", definition: "True/false algebra." },
        { term: "Truth Table", definition: "Input-output map." },
        { term: "Universal Gate", definition: "Can build any function (NAND/NOR)." },
        { term: "CMOS", definition: "Complementary MOS." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a gate?", answer: "A circuit doing a Boolean function on digital inputs." },
        { question: "Universal gate?", answer: "NAND or NOR can build any logic." },
      ],
      intermediate: [
        { question: "De Morgan's law?", answer: "Inversion swaps AND/OR with inverted inputs." },
      ],
      advanced: [
        { question: "Why CMOS?", answer: "Near-zero static power, simple fabrication." },
      ],
      expert: [
        { question: "Build XOR from NAND?", answer: "Yes, using four NAND gates." },
      ],
    },
    mcqs: [
      { question: "AND output 1 when:", options: ["Both 1", "Either 1", "None", "XOR"], correctAnswer: 0, explanation: "Conjunction.", difficulty: "beginner" },
      { question: "Universal gate:", options: ["NAND", "OR", "XOR", "Buffer"], correctAnswer: 0, explanation: "Builds all.", difficulty: "intermediate" },
      { question: "NOT is:", options: ["Inverter", "AND", "OR", "None"], correctAnswer: 0, explanation: "Inverts.", difficulty: "beginner" },
      { question: "XOR is 1 when:", options: ["Inputs differ", "Both 1", "Both 0", "None"], correctAnswer: 0, explanation: "Difference.", difficulty: "intermediate" },
      { question: "De Morgan relates:", options: ["AND/OR+invert", "XOR", "Buffer", "None"], correctAnswer: 0, explanation: "Equivalence.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "Logic Families", author: "TI", year: 2021, url: "", type: "datasheet" },
        { title: "Digital Logic", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "logic-gate-ic", relationship: "Physical IC" },
        { id: "flip-flop", relationship: "Sequential" },
        { id: "microcontroller", relationship: "Contains gates" },
      ],
    },
  },
  "flip-flop": {
    overview: {
      whatIsIt: "A flip-flop is a bistable sequential circuit that stores one bit of state, changing on a clock or control edge.",
      whyExists: "State storage is essential for memory, registers, and sequential logic.",
      whereUsed: "Used in counters, registers, and every digital memory.",
    },
    working: {
      workingPrinciple: "Cross-coupled gates form a latch; a clock edge transfers the input (D) to the output (Q) and holds it until the next edge.",
      steps: [
        "Clock edge arrives",
        "Input sampled",
        "Output updates to Q",
        "State held until next edge",
      ],
      microscopicExplanation: "Master-slave or edge-triggered structures prevent race conditions during the transition.",
    },
    construction: {
      internalParts: [
        { name: "Cross-coupled Gates", function: "Store", material: "Silicon" },
        { name: "Clock Gate", function: "Trigger", material: "Silicon" },
        { name: "Set/Reset", function: "Force state", material: "Silicon" },
        { name: "Output Buffer", function: "Drive", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "D Flip-Flop", description: "Data latch.", applications: ["Registers"] },
        { name: "JK", description: "Toggle capable.", applications: ["Counters"] },
        { name: "T (Toggle)", description: "Flips each clock.", applications: ["Divide"] },
        { name: "SR Latch", description: "Set/reset.", applications: ["Basic"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Divide-by-2", formula: "f_out = f_clk / 2", description: "T-FF divides.", variables: [{ symbol: "f_out", name: "Output", unit: "Hz" }], example: "Frequency halver" },
        { name: "Setup Time", formula: "t_su before clock", description: "Input stable.", variables: [{ symbol: "t_su", name: "Setup", unit: "ns" }], example: "Few ns" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Type", typicalValues: "D/JK/T/SR", notes: "Function" },
        { name: "Clock", typicalValues: "up to GHz", notes: "Speed" },
        { name: "Setup/Hold", typicalValues: "ns", notes: "Timing" },
        { name: "Package", typicalValues: "IC", notes: "Multi-bit" },
      ],
    },
    applications: {
      applications: [
        { category: "Memory", description: "Store bits", examples: ["RAM"] },
        { category: "Counters", description: "Sequence", examples: ["Timers"] },
        { category: "Sync", description: "Pipeline", examples: ["CPU"] },
      ],
    },
    advantages: { advantages: ["Stores state", "Edge-triggered", "Standard", "Fast", "Scalable"] },
    disadvantages: { disadvantages: ["Timing critical", "Metastability", "Power (clock)", "Complex", "Clock needed"] },
    selection: {
      steps: [
        { step: 1, title: "Type", description: "D/JK/T." },
        { step: 2, title: "Speed", description: "Clock rate." },
        { step: 3, title: "Timing", description: "Setup/hold." },
        { step: 4, title: "Package", description: "Bits needed." },
      ],
      tips: ["Mind metastability", "Meet timing", "Use async clear"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Metastable", symptoms: ["Wrong"], causes: ["Async input"], solution: "Synchronize" },
        { failure: "No Clock", symptoms: ["Frozen"], causes: ["No edge"], solution: "Check clock" },
        { failure: "Wrong State", symptoms: ["Error"], causes: ["Setup viol"], solution: "Fix timing" },
      ],
    },
    history: {
      invention: {
        year: 1918,
        inventor: "Eccles & Jordan (multivibrator)",
        discovery: "The Eccles-Jordan flip-flop introduced bistable storage in electronics.",
        evolution: [
          { year: 1918, event: "Flip-flop" },
          { year: 1960, event: "IC FF" },
          { year: 2000, event: "GHz flip-flops" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Bistable", definition: "Two stable states." },
        { term: "Edge-triggered", definition: "Acts on clock edge." },
        { term: "Metastability", definition: "Indeterminate state from violation." },
        { term: "Setup Time", definition: "Input stable before clock." },
      ],
    },
    interview: {
      beginner: [
        { question: "What stores a flip-flop?", answer: "One bit of state (Q)." },
        { question: "D vs T?", answer: "D copies input; T toggles on clock." },
      ],
      intermediate: [
        { question: "Metastability?", answer: "When async input violates timing, output may be undefined." },
      ],
      advanced: [
        { question: "Why two FFs for sync?", answer: "Reduces metastability probability." },
      ],
      expert: [
        { question: "Setup/hold?", answer: "Input must be stable around the clock edge." },
      ],
    },
    mcqs: [
      { question: "Flip-flop stores:", options: ["1 bit", "1 byte", "Word", "None"], correctAnswer: 0, explanation: "Bistable.", difficulty: "beginner" },
      { question: "D-FF output =", options: ["Input at clock", "Toggle", "Reset", "None"], correctAnswer: 0, explanation: "Samples D.", difficulty: "intermediate" },
      { question: "T-FF does:", options: ["Divide by 2", "Store", "Add", "None"], correctAnswer: 0, explanation: "Halves freq.", difficulty: "intermediate" },
      { question: "Metastability from:", options: ["Async violation", "Clock", "Power", "None"], correctAnswer: 0, explanation: "Timing.", difficulty: "advanced" },
      { question: "Edge-triggered means:", options: ["On clock edge", "Level", "Always", "None"], correctAnswer: 0, explanation: "Transition.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Flip-Flop Datasheet", author: "TI", year: 2021, url: "", type: "datasheet" },
        { title: "Digital Design", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "logic-gates", relationship: "Built from" },
        { id: "counter", relationship: "Uses FFs" },
        { id: "register", relationship: "Array of FFs" },
      ],
    },
  },
  counter: {
    overview: {
      whatIsIt: "A counter is a sequential circuit that counts clock pulses, producing a binary (or other) sequence.",
      whyExists: "Counting is needed for timing, addressing, and frequency division.",
      whereUsed: "Used in timers, frequency dividers, and digital clocks.",
    },
    working: {
      workingPrinciple: "Flip-flops chained with logic increment a count on each clock; modulo-N counters wrap at N.",
      steps: [
        "Clock pulse arrives",
        "Count increments",
        "Outputs reflect binary",
        "Wrap at modulus",
      ],
      microscopicExplanation: "Ripple counters chain T-FFs (each divides by 2); synchronous counters update all bits on one edge.",
    },
    construction: {
      internalParts: [
        { name: "Flip-Flops", function: "Store bits", material: "Silicon" },
        { name: "Logic", function: "Carry/reset", material: "Silicon" },
        { name: "Clock", function: "Drive", material: "Signal" },
        { name: "Reset", function: "Clear", material: "Signal" },
      ],
    },
    types: {
      types: [
        { name: "Ripple", description: "Cascaded FFs.", applications: ["Simple"] },
        { name: "Synchronous", description: "All update.", applications: ["Fast"] },
        { name: "Up/Down", description: "Both directions.", applications: ["Position"] },
        { name: "Johnson/Ring", description: "Shift patterns.", applications: ["Sequencer"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Modulus", formula: "States = 2^N", description: "N flip-flops.", variables: [{ symbol: "N", name: "Bits", unit: "" }], example: "4-bit = 16" },
        { name: "Divide", formula: "f_out = f_clk / M", description: "Modulo divide.", variables: [{ symbol: "f_out", name: "Output", unit: "Hz" }, { symbol: "M", name: "Modulus", unit: "" }], example: "÷10" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Bits", typicalValues: "3-16", notes: "Count range" },
        { name: "Speed", typicalValues: "up to 100s MHz", notes: "Clock" },
        { name: "Type", typicalValues: "Sync/ripple", notes: "Topology" },
        { name: "Reset", typicalValues: "Async/sync", notes: "Clear" },
      ],
    },
    applications: {
      applications: [
        { category: "Timing", description: "Delay/clock", examples: ["Timers"] },
        { category: "Frequency", description: "Divide", examples: ["Oscillators"] },
        { category: "Addressing", description: "Sequence", examples: ["Memory"] },
      ],
    },
    advantages: { advantages: ["Simple", "Standard", "Versatile", "Cheap", "Reliable"] },
    disadvantages: { disadvantages: ["Ripple delay", "Glitches", "Limited range", "Clock needed", "Power"] },
    selection: {
      steps: [
        { step: 1, title: "Range", description: "Bits/modulus." },
        { step: 2, title: "Speed", description: "Clock rate." },
        { step: 3, title: "Type", description: "Sync vs ripple." },
        { step: 4, title: "Direction", description: "Up/down." },
      ],
      tips: ["Sync for speed", "Decode carefully", "Use reset"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Wrong Count", symptoms: ["Off"], causes: ["Glitch"], solution: "Sync design" },
        { failure: "Stuck", symptoms: ["Frozen"], causes: ["No clock"], solution: "Check" },
        { failure: "Ripple Delay", symptoms: ["Skew"], causes: ["Cascade"], solution: "Use sync" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Counter IC evolution",
        discovery: "Integrated counter ICs (e.g., 7490) standardized counting functions.",
        evolution: [
          { year: 1960, event: "Counter ICs" },
          { year: 1980, event: "Synchronous" },
          { year: 2000, event: "High-speed" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Modulus", definition: "Number of states before wrap." },
        { term: "Ripple", definition: "Cascaded, delayed carry." },
        { term: "Synchronous", definition: "All bits update together." },
        { term: "Divide", definition: "Output frequency reduction." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a counter do?", answer: "Counts clock pulses as a binary number." },
        { question: "4 bits count to?", answer: "16 states (0-15)." },
      ],
      intermediate: [
        { question: "Ripple vs sync?", answer: "Ripple has carry delay; sync updates together." },
      ],
      advanced: [
        { question: "Glitch on decode?", answer: "Ripple transitions cause spurious codes; use sync." },
      ],
      expert: [
        { question: "Frequency divider?", answer: "Modulo-N counter outputs f/N." },
      ],
    },
    mcqs: [
      { question: "Counter counts:", options: ["Clock pulses", "Voltage", "Current", "None"], correctAnswer: 0, explanation: "Sequential.", difficulty: "beginner" },
      { question: "4-bit modulus:", options: ["16", "8", "4", "32"], correctAnswer: 0, explanation: "2^4.", difficulty: "intermediate" },
      { question: "Ripple issue:", options: ["Carry delay", "No clock", "Power", "None"], correctAnswer: 0, explanation: "Skew.", difficulty: "advanced" },
      { question: "f_out = f_clk/M is:", options: ["Division", "Multiplication", "None", "None"], correctAnswer: 0, explanation: "Divide by M.", difficulty: "intermediate" },
      { question: "Used in:", options: ["Timers", "Amplifiers", "Regulators", "None"], correctAnswer: 0, explanation: "Counting.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Counter Datasheet", author: "TI", year: 2021, url: "", type: "datasheet" },
        { title: "Digital Design", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "flip-flop", relationship: "Built from" },
        { id: "decoder", relationship: "Decodes count" },
        { id: "555-timer", relationship: "Clock source" },
      ],
    },
  },
  register: {
    overview: {
      whatIsIt: "A register is a group of flip-flops that stores multiple bits, often with parallel load/shift capability.",
      whyExists: "Registers hold data temporarily in digital systems for processing and transfer.",
      whereUsed: "Used in CPUs, shift registers, and data buses.",
    },
    working: {
      workingPrinciple: "An array of D flip-flops captures a data word on a clock; shift registers move bits serially in/out.",
      steps: [
        "Clock edge",
        "Bits captured in parallel (or shifted)",
        "Held until next operation",
        "Output available",
      ],
      microscopicExplanation: "Each flip-flop stores one bit; shared clock and enable coordinate the word.",
    },
    construction: {
      internalParts: [
        { name: "Flip-Flops", function: "Store bits", material: "Silicon" },
        { name: "Clock/Enable", function: "Control", material: "Signal" },
        { name: "Mux", function: "Select mode", material: "Silicon" },
        { name: "I/O Buffers", function: "Drive", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "Parallel Load", description: "Word in/out.", applications: ["CPU"] },
        { name: "Shift Register", description: "Serial in/out.", applications: ["LEDs"] },
        { name: "Ring", description: "Circulate bits.", applications: ["Sequencer"] },
        { name: "Stack", description: "LIFO.", applications: ["Compute"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Shift Rate", formula: "bits/s = f_clk", description: "Serial speed.", variables: [{ symbol: "bits/s", name: "Rate", unit: "bps" }, { symbol: "f_clk", name: "Clock", unit: "Hz" }], example: "1 bit/cycle" },
        { name: "Capacity", formula: "N bits", description: "Word size.", variables: [{ symbol: "N", name: "Bits", unit: "" }], example: "8/16/32" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Width", typicalValues: "4-64 bits", notes: "Word" },
        { name: "Clock", typicalValues: "up to GHz", notes: "Speed" },
        { name: "Type", typicalValues: "Parallel/shift", notes: "Mode" },
        { name: "Interface", typicalValues: "SPI/parallel", notes: "Bus" },
      ],
    },
    applications: {
      applications: [
        { category: "Computing", description: "Hold data", examples: ["CPU"] },
        { category: "Display", description: "Drive LEDs", examples: ["Matrix"] },
        { category: "Comms", description: "Serialize", examples: ["SPI"] },
      ],
    },
    advantages: { advantages: ["Stores words", "Fast", "Standard", "Flexible", "Scalable"] },
    disadvantages: { disadvantages: ["Clock needed", "Power", "Timing", "Complex", "Volatile"] },
    selection: {
      steps: [
        { step: 1, title: "Width", description: "Bits needed." },
        { step: 2, title: "Mode", description: "Parallel/shift." },
        { step: 3, title: "Speed", description: "Clock rate." },
        { step: 4, title: "Interface", description: "Bus type." },
      ],
      tips: ["Match width", "Use enable", "Clock carefully"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Wrong Data", symptoms: ["Error"], causes: ["Setup viol"], solution: "Fix timing" },
        { failure: "No Load", symptoms: ["Frozen"], causes: ["No clock"], solution: "Check" },
        { failure: "Shift Error", symptoms: ["Offset"], causes: ["Clock"], solution: "Align" },
      ],
    },
    history: {
      invention: {
        year: 1940,
        inventor: "Early computing",
        discovery: "Registers emerged as the fastest storage in early computers.",
        evolution: [
          { year: 1940, event: "Relay registers" },
          { year: 1970, event: "IC registers" },
          { year: 2000, event: "CPU registers" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Word", definition: "Group of bits." },
        { term: "Shift Register", definition: "Serial bit mover." },
        { term: "Enable", definition: "Clock gate control." },
        { term: "LIFO", definition: "Last-in-first-out." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a register?", answer: "A set of flip-flops storing a data word." },
        { question: "Shift register use?", answer: "Converts serial to parallel and vice versa." },
      ],
      intermediate: [
        { question: "Parallel vs shift?", answer: "Parallel loads a word at once; shift moves bit by bit." },
      ],
      advanced: [
        { question: "Timing concern?", answer: "Setup/hold on the shared clock." },
      ],
      expert: [
        { question: "CPU register role?", answer: "Fastest operand storage for the ALU." },
      ],
    },
    mcqs: [
      { question: "Register stores:", options: ["Multiple bits", "1 bit", "Analog", "None"], correctAnswer: 0, explanation: "Word.", difficulty: "beginner" },
      { question: "Shift register:", options: ["Serial in/out", "Parallel only", "Analog", "None"], correctAnswer: 0, explanation: "Bit stream.", difficulty: "intermediate" },
      { question: "Built from:", options: ["Flip-flops", "Gates only", "Relay", "None"], correctAnswer: 0, explanation: "Array of FFs.", difficulty: "beginner" },
      { question: "Used in:", options: ["CPU", "Amplifier", "Regulator", "None"], correctAnswer: 0, explanation: "Data hold.", difficulty: "beginner" },
      { question: "Shift rate =", options: ["f_clk", "f_clk/2", "2f", "None"], correctAnswer: 0, explanation: "1 bit/cycle.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "Register Datasheet", author: "TI", year: 2021, url: "", type: "datasheet" },
        { title: "Computer Organization", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "flip-flop", relationship: "Building block" },
        { id: "counter", relationship: "Sequential" },
        { id: "microcontroller", relationship: "Contains registers" },
      ],
    },
  },
  multiplexer: {
    overview: {
      whatIsIt: "A multiplexer (MUX) selects one of many inputs and routes it to a single output based on a select code.",
      whyExists: "MUXes save pins and wires by sharing one line among many signals.",
      whereUsed: "Used in data selection, ADC input switching, and buses.",
    },
    working: {
      workingPrinciple: "Select lines choose which input passes to the output through internal gates (like a digital selector switch).",
      steps: [
        "Select code applied",
        "Decoder enables one path",
        "Chosen input reaches output",
        "Others blocked",
      ],
      microscopicExplanation: "A binary decoder turns the select bits into one enable; transmission gates pass that input.",
    },
    construction: {
      internalParts: [
        { name: "Decoder", function: "Select path", material: "Silicon" },
        { name: "Transmission Gates", function: "Pass signal", material: "Silicon" },
        { name: "Select Inputs", function: "Choose", material: "Signal" },
        { name: "Output", function: "Drive", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "2:1", description: "Two to one.", applications: ["Simple"] },
        { name: "4:1 / 8:1", description: "More inputs.", applications: ["ADC mux"] },
        { name: "Analog MUX", description: "Passes analog.", applications: ["Sensors"] },
        { name: "Bus MUX", description: "Data select.", applications: ["CPU"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Inputs", formula: "N = 2^S", description: "S select lines.", variables: [{ symbol: "N", name: "Inputs", unit: "" }, { symbol: "S", name: "Select", unit: "" }], example: "3 sel -> 8 in" },
        { name: "Select", formula: "Y = I[code]", description: "Chosen input.", variables: [{ symbol: "Y", name: "Output", unit: "" }], example: "code picks" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Channels", typicalValues: "2-16", notes: "Inputs" },
        { name: "Type", typicalValues: "Digital/analog", notes: "Signal" },
        { name: "On-Resistance", typicalValues: "Ω (analog)", notes: "Pass" },
        { name: "Speed", typicalValues: "ns switch", notes: "Fast" },
      ],
    },
    applications: {
      applications: [
        { category: "Data", description: "Select source", examples: ["ADC"] },
        { category: "Comms", description: "Time-share", examples: ["Buses"] },
        { category: "Routing", description: "Signal path", examples: ["Instruments"] },
      ],
    },
    advantages: { advantages: ["Saves pins", "Flexible", "Fast", "Standard", "Cheap"] },
    disadvantages: { disadvantages: ["Adds delay", "On-resistance (analog)", "Select decoding", "Crosstalk", "Power"] },
    selection: {
      steps: [
        { step: 1, title: "Channels", description: "How many." },
        { step: 2, title: "Type", description: "Digital/analog." },
        { step: 3, title: "Speed", description: "Switch time." },
        { step: 4, title: "On-R", description: "Analog tolerance." },
      ],
      tips: ["Analog: low on-R", "Decode select", "Watch crosstalk"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Wrong Channel", symptoms: ["Bad data"], causes: ["Select error"], solution: "Fix code" },
        { failure: "Crosstalk", symptoms: ["Leakage"], causes: ["Adjacent"], solution: "Shield" },
        { failure: "High On-R", symptoms: ["Loss"], causes: ["Analog"], solution: "Buffer" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "MUX IC evolution",
        discovery: "Integrated multiplexers enabled shared data paths in digital systems.",
        evolution: [
          { year: 1960, event: "MUX ICs" },
          { year: 1980, event: "Analog MUX" },
          { year: 2000, event: "High-speed" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "MUX", definition: "Many-to-one selector." },
        { term: "Select", definition: "Code choosing input." },
        { term: "On-Resistance", definition: "Pass element resistance." },
        { term: "Demux", definition: "One-to-many (inverse)." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a MUX?", answer: "A selector that routes one of many inputs to one output." },
        { question: "8:1 needs how many select?", answer: "3 lines (2^3=8)." },
      ],
      intermediate: [
        { question: "Analog MUX concern?", answer: "On-resistance and signal loss." },
      ],
      advanced: [
        { question: "Crosstalk fix?", answer: "Guard traces and proper decoding." },
      ],
      expert: [
        { question: "Use in ADC?", answer: "To sequence multiple sensor channels." },
      ],
    },
    mcqs: [
      { question: "MUX is:", options: ["Many-to-one", "One-to-many", "Amplifier", "None"], correctAnswer: 0, explanation: "Selector.", difficulty: "beginner" },
      { question: "8:1 select lines:", options: ["3", "4", "8", "2"], correctAnswer: 0, explanation: "2^3.", difficulty: "intermediate" },
      { question: "Inverse of MUX:", options: ["Demux", "Counter", "Register", "None"], correctAnswer: 0, explanation: "One-to-many.", difficulty: "beginner" },
      { question: "Analog MUX has:", options: ["On-resistance", "Gain", "Invert", "None"], correctAnswer: 0, explanation: "Pass element.", difficulty: "advanced" },
      { question: "Used in:", options: ["ADC channel select", "Power", "Audio", "None"], correctAnswer: 0, explanation: "Routing.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "MUX Datasheet", author: "TI/ADI", year: 2021, url: "", type: "datasheet" },
        { title: "Digital Design", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "demultiplexer", relationship: "Inverse" },
        { id: "decoder", relationship: "Select logic" },
        { id: "adc", relationship: "Channel mux" },
      ],
    },
  },
  demultiplexer: {
    overview: {
      whatIsIt: "A demultiplexer (DEMUX) takes one input and routes it to one of many outputs based on a select code.",
      whyExists: "DEMUX distributes a single signal to many destinations, saving lines.",
      whereUsed: "Used in memory addressing, display driving, and bus distribution.",
    },
    working: {
      workingPrinciple: "Select lines choose which output receives the input via an internal decoder enabling one path.",
      steps: [
        "Input applied",
        "Select code applied",
        "Decoder enables one output",
        "Input appears there only",
      ],
      microscopicExplanation: "A binary decoder turns select bits into a one-hot enable that connects input to the chosen output.",
    },
    construction: {
      internalParts: [
        { name: "Decoder", function: "Select output", material: "Silicon" },
        { name: "Transmission Gates", function: "Route", material: "Silicon" },
        { name: "Select Inputs", function: "Choose", material: "Signal" },
        { name: "Outputs", function: "Drive", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "1:2 / 1:4", description: "Few outputs.", applications: ["Simple"] },
        { name: "1:8 / 1:16", description: "Many outputs.", applications: ["Address"] },
        { name: "Analog DEMUX", description: "Route analog.", applications: ["Sampling"] },
        { name: "Bus DEMUX", description: "Distribute.", applications: ["CPU"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Outputs", formula: "M = 2^S", description: "S select lines.", variables: [{ symbol: "M", name: "Outputs", unit: "" }, { symbol: "S", name: "Select", unit: "" }], example: "3 sel -> 8 out" },
        { name: "Select", formula: "Y[code] = In", description: "Routed output.", variables: [{ symbol: "Y", name: "Output", unit: "" }], example: "code picks" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Outputs", typicalValues: "2-16", notes: "Count" },
        { name: "Type", typicalValues: "Digital/analog", notes: "Signal" },
        { name: "Speed", typicalValues: "ns", notes: "Switch" },
        { name: "Drive", typicalValues: "mA", notes: "Output" },
      ],
    },
    applications: {
      applications: [
        { category: "Memory", description: "Address decode", examples: ["RAM"] },
        { category: "Display", description: "Drive digits", examples: ["7-seg"] },
        { category: "Distribution", description: "Bus fan-out", examples: ["Systems"] },
      ],
    },
    advantages: { advantages: ["Saves lines", "Flexible", "Fast", "Standard", "Cheap"] },
    disadvantages: { disadvantages: ["Delay", "Decoding", "Crosstalk", "Power", "One at a time"] },
    selection: {
      steps: [
        { step: 1, title: "Outputs", description: "How many." },
        { step: 2, title: "Type", description: "Digital/analog." },
        { step: 3, title: "Speed", description: "Switch time." },
        { step: 4, title: "Drive", description: "Output current." },
      ],
      tips: ["Decode select", "Watch crosstalk", "Buffer outputs"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Wrong Out", symptoms: ["Misroute"], causes: ["Select error"], solution: "Fix code" },
        { failure: "No Out", symptoms: ["Dead"], causes: ["Bad input"], solution: "Check" },
        { failure: "Crosstalk", symptoms: ["Leak"], causes: ["Adjacent"], solution: "Shield" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "DEMUX IC evolution",
        discovery: "Integrated demultiplexers enabled address decoding and distribution.",
        evolution: [
          { year: 1960, event: "DEMUX ICs" },
          { year: 1980, event: "Address decoders" },
          { year: 2000, event: "High-speed" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "DEMUX", definition: "One-to-many router." },
        { term: "One-hot", definition: "Single line active." },
        { term: "Decoder", definition: "Select logic." },
        { term: "MUX", definition: "Inverse (many-to-one)." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a DEMUX?", answer: "Routes one input to one of many outputs by select code." },
        { question: "1:8 needs select?", answer: "3 lines." },
      ],
      intermediate: [
        { question: "DEMUX in memory?", answer: "Decodes addresses to enable one chip/row." },
      ],
      advanced: [
        { question: "Crosstalk concern?", answer: "Guard and decode to avoid leakage." },
      ],
      expert: [
        { question: "Display use?", answer: "Scans digits by enabling one at a time." },
      ],
    },
    mcqs: [
      { question: "DEMUX is:", options: ["One-to-many", "Many-to-one", "Amplifier", "None"], correctAnswer: 0, explanation: "Distributor.", difficulty: "beginner" },
      { question: "1:8 select lines:", options: ["3", "8", "4", "2"], correctAnswer: 0, explanation: "2^3.", difficulty: "intermediate" },
      { question: "Inverse of DEMUX:", options: ["MUX", "Counter", "Register", "None"], correctAnswer: 0, explanation: "Many-to-one.", difficulty: "beginner" },
      { question: "Used in:", options: ["Memory decode", "Power", "Audio", "None"], correctAnswer: 0, explanation: "Addressing.", difficulty: "beginner" },
      { question: "Output active:", options: ["One at a time", "All", "None", "Pair"], correctAnswer: 0, explanation: "One-hot.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "DEMUX Datasheet", author: "TI", year: 2021, url: "", type: "datasheet" },
        { title: "Digital Design", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "multiplexer", relationship: "Inverse" },
        { id: "decoder", relationship: "Select logic" },
        { id: "7-segment", relationship: "Drives digits" },
      ],
    },
  },
  encoder: {
    overview: {
      whatIsIt: "An encoder converts one active input (or a position) into a binary code on its outputs.",
      whyExists: "Encoders compress many input lines into a few coded outputs.",
      whereUsed: "Used in keyboards, position sensing, and priority logic.",
    },
    working: {
      workingPrinciple: "When one of N inputs is active, combinational logic produces the corresponding binary code on the output lines.",
      steps: [
        "One input asserted",
        "Logic detects which",
        "Produces binary code",
        "Outputs the code",
      ],
      microscopicExplanation: "Priority encoders resolve multiple active inputs by selecting the highest priority.",
    },
    construction: {
      internalParts: [
        { name: "Detection Logic", function: "Find active", material: "Silicon" },
        { name: "Priority Circuit", function: "Resolve", material: "Silicon" },
        { name: "Output Encoder", function: "Code", material: "Silicon" },
        { name: "Valid Flag", function: "Indicate", material: "Signal" },
      ],
    },
    types: {
      types: [
        { name: "Binary", description: "N->log2 N.", applications: ["Keys"] },
        { name: "Priority", description: "Highest wins.", applications: ["Interrupts"] },
        { name: "Rotary", description: "Position code.", applications: ["Knobs"] },
        { name: "Linear", description: "Position.", applications: ["Sensors"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Output Bits", formula: "B = ceil(log2 N)", description: "Code width.", variables: [{ symbol: "B", name: "Bits", unit: "" }, { symbol: "N", name: "Inputs", unit: "" }], example: "8 in -> 3 out" },
        { name: "Code", formula: "Out = index(active)", description: "Position code.", variables: [{ symbol: "Out", name: "Code", unit: "" }], example: "Binary" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Inputs", typicalValues: "8-16", notes: "Lines" },
        { name: "Outputs", typicalValues: "3-4", notes: "Code bits" },
        { name: "Type", typicalValues: "Priority/simple", notes: "Mode" },
        { name: "Speed", typicalValues: "ns", notes: "Prop delay" },
      ],
    },
    applications: {
      applications: [
        { category: "Input", description: "Key scan", examples: ["Keyboards"] },
        { category: "Interrupts", description: "Priority", examples: ["CPU"] },
        { category: "Position", description: "Encode", examples: ["Encoders"] },
      ],
    },
    advantages: { advantages: ["Saves lines", "Simple", "Fast", "Standard", "Cheap"] },
    disadvantages: { disadvantages: ["One-at-a-time (simple)", "Priority ambiguity", "Decoding", "Power", "Glitches"] },
    selection: {
      steps: [
        { step: 1, title: "Inputs", description: "How many." },
        { step: 2, title: "Priority?", description: "Need resolve." },
        { step: 3, title: "Outputs", description: "Code width." },
        { step: 4, title: "Speed", description: "Prop delay." },
      ],
      tips: ["Use priority for IRQs", "Add valid flag", "Debounce inputs"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Wrong Code", symptoms: ["Error"], causes: ["Multiple"], solution: "Priority" },
        { failure: "No Code", symptoms: ["Dead"], causes: ["No input"], solution: "Check" },
        { failure: "Glitch", symptoms: ["Transient"], causes: ["Bounce"], solution: "Debounce" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Encoder IC evolution",
        discovery: "Encoders compressed parallel inputs into coded outputs for keyboards and logic.",
        evolution: [
          { year: 1960, event: "Encoder ICs" },
          { year: 1980, event: "Priority encoders" },
          { year: 2000, event: "Integrated with MCU" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Encoder", definition: "Input-to-code converter." },
        { term: "Priority", definition: "Highest active wins." },
        { term: "Valid Flag", definition: "Indicates active input." },
        { term: "DEMUX", definition: "Inverse function." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does an encoder do?", answer: "Converts an active input into a binary code." },
        { question: "8-to-3 means?", answer: "8 inputs become 3-bit code." },
      ],
      intermediate: [
        { question: "Priority encoder use?", answer: "Resolves multiple active inputs (e.g., interrupts)." },
      ],
      advanced: [
        { question: "Glitch source?", answer: "Input transitions cause transient wrong codes." },
      ],
      expert: [
        { question: "Keyboard scan?", answer: "Matrix rows/cols encoded to a code." },
      ],
    },
    mcqs: [
      { question: "Encoder does:", options: ["Input to code", "Code to output", "Amplify", "None"], correctAnswer: 0, explanation: "Compress.", difficulty: "beginner" },
      { question: "8 inputs -> bits:", options: ["3", "8", "4", "2"], correctAnswer: 0, explanation: "log2 8.", difficulty: "intermediate" },
      { question: "Priority means:", options: ["Highest wins", "All out", "None", "Lowest"], correctAnswer: 0, explanation: "Resolve multi.", difficulty: "advanced" },
      { question: "Used in:", options: ["Keyboards", "Power", "Audio", "None"], correctAnswer: 0, explanation: "Input coding.", difficulty: "beginner" },
      { question: "Inverse of encoder:", options: ["Decoder", "MUX", "Counter", "None"], correctAnswer: 0, explanation: "Code to lines.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Encoder Datasheet", author: "TI", year: 2021, url: "", type: "datasheet" },
        { title: "Digital Design", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "decoder", relationship: "Inverse" },
        { id: "multiplexer", relationship: "Related select" },
        { id: "microcontroller", relationship: "Reads code" },
      ],
    },
  },
  decoder: {
    overview: {
      whatIsIt: "A decoder converts a binary code on its inputs into one active output line among many.",
      whyExists: "Decoders enable addressing, chip-select, and display driving from few control lines.",
      whereUsed: "Used in memory selection, 7-segment display, and control logic.",
    },
    working: {
      workingPrinciple: "The binary input is decoded by logic so exactly one (or a defined set) of the output lines is asserted.",
      steps: [
        "Binary code applied",
        "Logic decodes it",
        "One output asserted",
        "Others inactive",
      ],
      microscopicExplanation: "A binary-to-one-hot decoder uses AND gates combining true/inverted input bits.",
    },
    construction: {
      internalParts: [
        { name: "Input Buffers", function: "Clean code", material: "Silicon" },
        { name: "AND/NAND Array", function: "Decode", material: "Silicon" },
        { name: "Enable", function: "Gate all", material: "Signal" },
        { name: "Outputs", function: "Drive", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "2:4 / 3:8", description: "Common sizes.", applications: ["Select"] },
        { name: "BCD-7seg", description: "Drives display.", applications: ["Meters"] },
        { name: "Address Decoder", description: "Memory select.", applications: ["CPU"] },
        { name: "One-hot", description: "Single active.", applications: ["Logic"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Outputs", formula: "M = 2^N", description: "N input bits.", variables: [{ symbol: "M", name: "Outputs", unit: "" }, { symbol: "N", name: "Inputs", unit: "" }], example: "3 in -> 8 out" },
        { name: "Active", formula: "Y[code] = 1", description: "One asserted.", variables: [{ symbol: "Y", name: "Output", unit: "" }], example: "One-hot" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Inputs", typicalValues: "2-4", notes: "Code bits" },
        { name: "Outputs", typicalValues: "4-16", notes: "Lines" },
        { name: "Active", typicalValues: "High/Low", notes: "Polarity" },
        { name: "Enable", typicalValues: "Yes", notes: "Gate" },
      ],
    },
    applications: {
      applications: [
        { category: "Memory", description: "Chip select", examples: ["RAM"] },
        { category: "Display", description: "7-seg drive", examples: ["Clocks"] },
        { category: "Control", description: "Select device", examples: ["Buses"] },
      ],
    },
    advantages: { advantages: ["Saves lines", "Standard", "Fast", "Simple", "Cheap"] },
    disadvantages: { disadvantages: ["One at a time", "Decoding delay", "Power", "Glitches", "Limited"] },
    selection: {
      steps: [
        { step: 1, title: "Size", description: "In/out count." },
        { step: 2, title: "Polarity", description: "Active high/low." },
        { step: 3, title: "Enable", description: "Needed?" },
        { step: 4, title: "Speed", description: "Prop delay." },
      ],
      tips: ["Use enable to gate", "Watch glitches", "Match polarity"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Wrong Out", symptoms: ["Misselect"], causes: ["Code error"], solution: "Fix input" },
        { failure: "Glitch", symptoms: ["Transient"], causes: ["Transition"], solution: "Latch" },
        { failure: "All Off", symptoms: ["Dead"], causes: ["Enable low"], solution: "Assert enable" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "Decoder IC evolution",
        discovery: "Integrated decoders enabled memory addressing and display driving.",
        evolution: [
          { year: 1960, event: "Decoder ICs" },
          { year: 1980, event: "7-seg decoders" },
          { year: 2000, event: "CPLD/FPGA internal" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "ESD sensitive.",
      storage: "Antistatic.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Decoder", definition: "Code-to-line converter." },
        { term: "One-hot", definition: "Single line active." },
        { term: "Enable", definition: "Master gate." },
        { term: "Encoder", definition: "Inverse function." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a decoder do?", answer: "Turns a binary code into one active output line." },
        { question: "3:8 means?", answer: "3 inputs select 1 of 8 outputs." },
      ],
      intermediate: [
        { question: "Decoder in memory?", answer: "Selects which chip/row is active (chip-select)." },
      ],
      advanced: [
        { question: "Glitch on change?", answer: "Intermediate codes can briefly assert wrong lines; latch or sync." },
      ],
      expert: [
        { question: "7-seg decoder?", answer: "Maps BCD to segment patterns." },
      ],
    },
    mcqs: [
      { question: "Decoder does:", options: ["Code to line", "Line to code", "Amplify", "None"], correctAnswer: 0, explanation: "Expand.", difficulty: "beginner" },
      { question: "3:8 outputs:", options: ["8", "3", "6", "16"], correctAnswer: 0, explanation: "2^3.", difficulty: "intermediate" },
      { question: "Used in:", options: ["Memory select", "Power", "Audio", "None"], correctAnswer: 0, explanation: "Addressing.", difficulty: "beginner" },
      { question: "Enable does:", options: ["Gate all outputs", "Invert", "Amplify", "None"], correctAnswer: 0, explanation: "Master control.", difficulty: "intermediate" },
      { question: "Inverse of decoder:", options: ["Encoder", "MUX", "Counter", "None"], correctAnswer: 0, explanation: "Line to code.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Decoder Datasheet", author: "TI", year: 2021, url: "", type: "datasheet" },
        { title: "Digital Design", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "encoder", relationship: "Inverse" },
        { id: "demultiplexer", relationship: "Similar" },
        { id: "7-segment", relationship: "Drives display" },
      ],
    },
  },

  lcd: {
    overview: {
      whatIsIt: "A Liquid Crystal Display (LCD) uses polarized light and liquid crystals to show images without emitting light itself.",
      whyExists: "LCDs offer low-power, thin, high-resolution displays for devices.",
      whereUsed: "Used in phones, monitors, calculators, and instruments.",
    },
    working: {
      workingPrinciple: "A backlight passes through liquid crystals whose orientation (controlled by voltage) modulates light passing polarizers; TFT arrays switch pixels.",
      steps: [
        "Backlight emits light",
        "Polarizer aligns it",
        "Crystals rotate polarization by voltage",
        "Color filters form pixels",
      ],
      microscopicExplanation: "Twisted nematic crystals rotate polarized light; voltage untwists them, blocking light at the second polarizer.",
    },
    construction: {
      internalParts: [
        { name: "Backlight", function: "Illuminate", material: "LED" },
        { name: "Glass Substrate", function: "Hold crystals", material: "Glass" },
        { name: "TFT Array", function: "Switch pixels", material: "Silicon" },
        { name: "Polarizers", function: "Filter light", material: "Film" },
      ],
    },
    types: {
      types: [
        { name: "TN", description: "Cheap, fast.", applications: ["Monitors"] },
        { name: "IPS", description: "Better color.", applications: ["Phones"] },
        { name: "Character LCD", description: "Text (16x2).", applications: ["Hobby"] },
        { name: "TFT", description: "Full graphics.", applications: ["Displays"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Resolution", formula: "Pixels = W × H", description: "Total dots.", variables: [{ symbol: "Pixels", name: "Count", unit: "" }], example: "1920x1080" },
        { name: "Contrast", formula: "L_on / L_off", description: "Brightness ratio.", variables: [{ symbol: "L_on", name: "On lum", unit: "cd/m²" }], example: "1000:1" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Size", typicalValues: "1-30+ inch", notes: "Diagonal" },
        { name: "Resolution", typicalValues: "up to 4K", notes: "Pixels" },
        { name: "Interface", typicalValues: "RGB/SPI/HDMI", notes: "Signal" },
        { name: "Power", typicalValues: "Low-moderate", notes: "Backlight" },
      ],
    },
    applications: {
      applications: [
        { category: "Consumer", description: "Screens", examples: ["Phones"] },
        { category: "Industrial", description: "HMI", examples: ["Panels"] },
        { category: "Embedded", description: "Status", examples: ["Modules"] },
      ],
    },
    advantages: { advantages: ["Thin", "Low power", "High res", "Color", "Mature"] },
    disadvantages: { disadvantages: ["Needs backlight", "Viewing angle", "Response time", "Cost (large)", "Fragile glass"] },
    selection: {
      steps: [
        { step: 1, title: "Size/Res", description: "Match need." },
        { step: 2, title: "Interface", description: "SPI/RGB." },
        { step: 3, title: "Backlight", description: "Brightness." },
        { step: 4, title: "Controller", description: "Driver IC." },
      ],
      tips: ["Use SPI for small", "Contrast adjust", "Handle gently"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Backlight", symptoms: ["Dark"], causes: ["LED fail"], solution: "Replace" },
        { failure: "Ghosting", symptoms: ["Trails"], causes: ["Slow"], solution: "Faster" },
        { failure: "Lines", symptoms: ["Dead rows"], causes: ["Flex break"], solution: "Reseat" },
      ],
    },
    history: {
      invention: {
        year: 1964,
        inventor: "George Heilmeier (LCD)",
        discovery: "Heilmeier developed the first working liquid crystal displays.",
        evolution: [
          { year: 1964, event: "First LCD" },
          { year: 1980, event: "TN panels" },
          { year: 2000, event: "TFT/IPS" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "Backlight warm.",
      handling: "Fragile glass.",
      storage: "Cool, dry.",
      disposal: "Recycle electronics.",
    },
    glossary: {
      glossary: [
        { term: "TFT", definition: "Thin-film transistor pixel switch." },
        { term: "TN/IPS", definition: "LCD panel technologies." },
        { term: "Backlight", definition: "Light source behind LCD." },
        { term: "Polarizer", definition: "Filters light orientation." },
      ],
    },
    interview: {
      beginner: [
        { question: "Does LCD emit light?", answer: "No, it uses a backlight and modulates it." },
        { question: "TFT role?", answer: "Switches individual pixels." },
      ],
      intermediate: [
        { question: "Why backlight?", answer: "Liquid crystals only modulate, not emit, light." },
      ],
      advanced: [
        { question: "IPS vs TN?", answer: "IPS has better color/angles; TN is faster/cheaper." },
      ],
      expert: [
        { question: "Reduce power?", answer: "Lower backlight and use efficient driver." },
      ],
    },
    mcqs: [
      { question: "LCD emits light?", options: ["No (backlight does)", "Yes", "Sometimes", "None"], correctAnswer: 0, explanation: "Modulates only.", difficulty: "beginner" },
      { question: "TFT switches:", options: ["Pixels", "Backlight", "Color", "None"], correctAnswer: 0, explanation: "Per-pixel.", difficulty: "intermediate" },
      { question: "Backlight is:", options: ["LED source", "Crystal", "Glass", "None"], correctAnswer: 0, explanation: "Illuminates.", difficulty: "beginner" },
      { question: "IPS better at:", options: ["Viewing angle", "Speed", "Cost", "None"], correctAnswer: 0, explanation: "Color/angle.", difficulty: "advanced" },
      { question: "Resolution =", options: ["W×H", "W+H", "W/H", "None"], correctAnswer: 0, explanation: "Pixel count.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "LCD Module Datasheet", author: "Manufacturer", year: 2021, url: "", type: "datasheet" },
        { title: "Display Technology", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "led", relationship: "Backlight" },
        { id: "microcontroller", relationship: "Drives" },
        { id: "oled", relationship: "Alternative" },
      ],
    },
  },
  oled: {
    overview: {
      whatIsIt: "An OLED (Organic LED) display uses organic compounds that emit light when current flows, pixel by pixel.",
      whyExists: "OLEDs give true black, thin, flexible, high-contrast displays without a backlight.",
      whereUsed: "Used in premium phones, wearables, and TVs.",
    },
    working: {
      workingPrinciple: "Current through organic layers causes electroluminescence; each pixel emits its own light, controlled by TFT backplane.",
      steps: [
        "Voltage applied to pixel",
        "Holes and electrons recombine",
        "Organic layer emits light",
        "TFT sets brightness per pixel",
      ],
      microscopicExplanation: "Electroluminescence: recombination of carriers in the emissive organic layer releases photons.",
    },
    construction: {
      internalParts: [
        { name: "Emissive Layer", function: "Emit light", material: "Organic" },
        { name: "TFT Backplane", function: "Drive pixel", material: "Silicon" },
        { name: "Cathode/Anode", function: "Inject carriers", material: "Metal/ITO" },
        { name: "Substrate", function: "Support", material: "Glass/flex" },
      ],
    },
    types: {
      types: [
        { name: "PMOLED", description: "Passive matrix.", applications: ["Small"] },
        { name: "AMOLED", description: "Active matrix.", applications: ["Phones"] },
        { name: "Flexible", description: "Bendable.", applications: ["Wearables"] },
        { name: "Transparent", description: "See-through.", applications: ["HUD"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Brightness", formula: "L ∝ current density", description: "Drive sets lum.", variables: [{ symbol: "L", name: "Luminance", unit: "cd/m²" }], example: "Per pixel" },
        { name: "Power", formula: "P = Σ pixel current × V", description: "Depends content.", variables: [{ symbol: "P", name: "Power", unit: "W" }], example: "Black saves" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Size", typicalValues: "0.5-80 inch", notes: "Range" },
        { name: "Contrast", typicalValues: "Infinite (true black)", notes: "Per pixel off" },
        { name: "Interface", typicalValues: "SPI/I²C/MIPI", notes: "Signal" },
        { name: "Lifetime", typicalValues: "10k-100k h", notes: "Blue fades" },
      ],
    },
    applications: {
      applications: [
        { category: "Consumer", description: "Screens", examples: ["Phones"] },
        { category: "Wearable", description: "Flexible", examples: ["Watches"] },
        { category: "TV", description: "Premium", examples: ["Home"] },
      ],
    },
    advantages: { advantages: ["True black", "Thin/flexible", "Fast", "High contrast", "No backlight"] },
    disadvantages: { disadvantages: ["Burn-in", "Lifetime (blue)", "Cost", "Moisture sensitive", "Power with white"] },
    selection: {
      steps: [
        { step: 1, title: "Size/Res", description: "Match need." },
        { step: 2, title: "Interface", description: "SPI/MIPI." },
        { step: 3, title: "Type", description: "PM/AM." },
        { step: 4, title: "Lifetime", description: "Avoid burn-in." },
      ],
      tips: ["Avoid static images", "Seal from moisture", "Use dimming"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Burn-in", symptoms: ["Ghost"], causes: ["Static"], solution: "Avoid" },
        { failure: "Dead Pixels", symptoms: ["Spots"], causes: ["Defect"], solution: "Replace" },
        { failure: "Dim", symptoms: ["Fade"], causes: ["Age"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1987,
        inventor: "Ching Tang & Steven Van Slyke (Kodak)",
        discovery: "They demonstrated the first practical OLED device.",
        evolution: [
          { year: 1987, event: "First OLED" },
          { year: 2000, event: "AMOLED phones" },
          { year: 2015, event: "Flexible OLED" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Minimal.",
      thermalSafety: "None.",
      handling: "Moisture sensitive.",
      storage: "Dry, sealed.",
      disposal: "Recycle electronics.",
    },
    glossary: {
      glossary: [
        { term: "Electroluminescence", definition: "Light from recombination." },
        { term: "AMOLED", definition: "Active-matrix OLED." },
        { term: "Burn-in", definition: "Persistent image ghost." },
        { term: "True Black", definition: "Pixel fully off." },
      ],
    },
    interview: {
      beginner: [
        { question: "OLED emits its own light?", answer: "Yes, each pixel is self-emissive." },
        { question: "No backlight?", answer: "Correct; black pixels are simply off." },
      ],
      intermediate: [
        { question: "Burn-in cause?", answer: "Static bright images degrade organic material unevenly." },
      ],
      advanced: [
        { question: "Power vs content?", answer: "Bright/white content draws more current." },
      ],
      expert: [
        { question: "Lifetime issue?", answer: "Blue subpixel degrades fastest." },
      ],
    },
    mcqs: [
      { question: "OLED is:", options: ["Self-emissive", "Backlit", "Reflective", "None"], correctAnswer: 0, explanation: "Per-pixel light.", difficulty: "beginner" },
      { question: "True black because:", options: ["Pixel off", "Backlight off", "Filter", "None"], correctAnswer: 0, explanation: "Emissive off.", difficulty: "intermediate" },
      { question: "Burn-in from:", options: ["Static image", "Heat", "Voltage", "None"], correctAnswer: 0, explanation: "Uneven aging.", difficulty: "advanced" },
      { question: "AMOLED is:", options: ["Active matrix", "Passive", "LCD", "None"], correctAnswer: 0, explanation: "TFT driven.", difficulty: "beginner" },
      { question: "Power depends on:", options: ["Content", "Size only", "Backlight", "None"], correctAnswer: 0, explanation: "Brightness/content.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "OLED Datasheet", author: "Manufacturer", year: 2021, url: "", type: "datasheet" },
        { title: "Display Technology", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "led", relationship: "Emissive cousin" },
        { id: "lcd", relationship: "Alternative" },
        { id: "microcontroller", relationship: "Drives" },
      ],
    },
  },
  "7-segment": {
    overview: {
      whatIsIt: "A seven-segment display shows decimal digits using seven LED (or LCD) segments arranged as an '8'.",
      whyExists: "It provides a simple, cheap way to display numbers.",
      whereUsed: "Used in clocks, meters, and counters.",
    },
    working: {
      workingPrinciple: "Each segment is an LED; a decoder or MCU lights the right combination to form digits 0-9 (and some letters).",
      steps: [
        "Digit value computed",
        "Decoder/MCU picks segments",
        "Current drives those LEDs",
        "Number appears",
      ],
      microscopicExplanation: "Seven independent LEDs (plus dp) are switched by segment drivers; current limited by resistors.",
    },
    construction: {
      internalParts: [
        { name: "Segments (a-g)", function: "Form digits", material: "LED" },
        { name: "Decimal Point", function: "Fraction", material: "LED" },
        { name: "Common Pin", function: "Anode/Cathode", material: "Metal" },
        { name: "Housing", function: "Diffuse", material: "Plastic" },
      ],
    },
    types: {
      types: [
        { name: "Common Anode", description: "V+ common, sink segments.", applications: ["MCU"] },
        { name: "Common Cathode", description: "GND common, source.", applications: ["Logic"] },
        { name: "Single/Dual", description: "1-2 digits.", applications: ["Meters"] },
        { name: "RGB", description: "Color.", applications: ["Fancy"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Segment Current", formula: "I = (V_cc - V_led) / R", description: "Limit per LED.", variables: [{ symbol: "I", name: "Current", unit: "A" }, { symbol: "R", name: "Resistor", unit: "Ω" }], example: "10mA" },
        { name: "Multiplex", formula: "Duty = 1/N digits", description: "Scan sharing.", variables: [{ symbol: "Duty", name: "Duty", unit: "" }], example: "4 digits 25%" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Digits", typicalValues: "1-8", notes: "Count" },
        { name: "Color", typicalValues: "Red/green/blue", notes: "LED" },
        { name: "Forward V", typicalValues: "1.8-3.3V", notes: "Per segment" },
        { name: "Type", typicalValues: "CA/CC", notes: "Common" },
      ],
    },
    applications: {
      applications: [
        { category: "Instruments", description: "Readouts", examples: ["Meters"] },
        { category: "Clocks", description: "Time", examples: ["Timers"] },
        { category: "Counters", description: "Counts", examples: ["Tally"] },
      ],
    },
    advantages: { advantages: ["Simple", "Cheap", "Bright", "Robust", "Low parts"] },
    disadvantages: { disadvantages: ["Digits only", "Current draw", "Multiplex flicker", "Limited chars", "Power"] },
    selection: {
      steps: [
        { step: 1, title: "Common", description: "CA or CC." },
        { step: 2, title: "Digits", description: "How many." },
        { step: 3, title: "Current", description: "Limit resistors." },
        { step: 4, title: "Drive", description: "Direct/mux." },
      ],
      tips: ["Use decoder (7447)", "Limit current", "Multiplex for many"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Dim", symptoms: ["Faint"], causes: ["No resistor"], solution: "Add R" },
        { failure: "Wrong Digit", symptoms: ["Garbage"], causes: ["Bad code"], solution: "Fix map" },
        { failure: "Flicker", symptoms: ["Blink"], causes: ["Slow mux"], solution: "Faster" },
      ],
    },
    history: {
      invention: {
        year: 1910,
        inventor: "Segment display evolution",
        discovery: "Seven-segment arrangement became standard for numeric readouts.",
        evolution: [
          { year: 1910, event: "Early numeric" },
          { year: 1970, event: "LED 7-seg" },
          { year: 2000, event: "RGB/low-power" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Current limit needed.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Common Anode", definition: "Shared positive pin." },
        { term: "Common Cathode", definition: "Shared ground pin." },
        { term: "Multiplex", definition: "Scan digits in turn." },
        { term: "dp", definition: "Decimal point segment." },
      ],
    },
    interview: {
      beginner: [
        { question: "How show a digit?", answer: "Light the segment combination for that number." },
        { question: "CA vs CC?", answer: "Common anode shares +; cathode shares ground." },
      ],
      intermediate: [
        { question: "Why multiplex?", answer: "Share driver pins across digits by scanning." },
      ],
      advanced: [
        { question: "Current limit?", answer: "Each segment needs a series resistor." },
      ],
      expert: [
        { question: "Flicker fix?", answer: "Increase multiplex refresh rate." },
      ],
    },
    mcqs: [
      { question: "7-seg shows:", options: ["Digits", "Graphics", "Video", "None"], correctAnswer: 0, explanation: "Numeric.", difficulty: "beginner" },
      { question: "Common anode shares:", options: ["+ pin", "GND", "Clock", "None"], correctAnswer: 0, explanation: "Positive.", difficulty: "intermediate" },
      { question: "Needs:", options: ["Current limit", "Backlight", "High V", "None"], correctAnswer: 0, explanation: "Resistors.", difficulty: "beginner" },
      { question: "Multiplex shares:", options: ["Pins by scan", "Power", "Color", "None"], correctAnswer: 0, explanation: "Time-division.", difficulty: "advanced" },
      { question: "Driven by:", options: ["Decoder/MCU", "Relay", "Transformer", "None"], correctAnswer: 0, explanation: "Segment logic.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "7-Seg Datasheet", author: "Kingbright", year: 2021, url: "", type: "datasheet" },
        { title: "Display Basics", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "led", relationship: "Segment LEDs" },
        { id: "decoder", relationship: "Drives segments" },
        { id: "resistor", relationship: "Current limit" },
      ],
    },
  },
  "led-matrix": {
    overview: {
      whatIsIt: "An LED matrix arranges LEDs in a grid (rows/columns) to display text, icons, or video.",
      whyExists: "Matrices show graphics with far fewer pins than one-per-LED by multiplexing.",
      whereUsed: "Used in signs, wearables, and indicators.",
    },
    working: {
      workingPrinciple: "Rows and columns are scanned; an LED lights when its row is driven and column is sunk, building an image over time (persistence of vision).",
      steps: [
        "Select a row",
        "Drive column data",
        "Light that row's LEDs",
        "Move to next row rapidly",
      ],
      microscopicExplanation: "Multiplexing cycles rows fast enough that the eye sees a stable image; duty cycle sets brightness.",
    },
    construction: {
      internalParts: [
        { name: "LED Grid", function: "Pixels", material: "LED" },
        { name: "Row Drivers", function: "Select row", material: "Silicon" },
        { name: "Column Drivers", function: "Data", material: "Silicon" },
        { name: "Controller", function: "Scan", material: "Silicon" },
      ],
    },
    types: {
      types: [
        { name: "Monochrome", description: "One color.", applications: ["Signs"] },
        { name: "RGB", description: "Full color.", applications: ["Video"] },
        { name: "Dot Matrix", description: "8x8 blocks.", applications: ["Scrolling"] },
        { name: "Flexible", description: "Bendable strip.", applications: ["Decor"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Pixels", formula: "N = R × C", description: "Grid size.", variables: [{ symbol: "N", name: "Pixels", unit: "" }], example: "8x8=64" },
        { name: "Scan Duty", formula: "Duty = 1/R_rows", description: "Per-row on time.", variables: [{ symbol: "Duty", name: "Duty", unit: "" }], example: "8 rows 12.5%" },
        { name: "Current", formula: "I_total = I_led × lit_per_row", description: "Peak current.", variables: [{ symbol: "I_total", name: "Current", unit: "A" }], example: "Peak high" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Size", typicalValues: "8x8 to large", notes: "Grid" },
        { name: "Color", typicalValues: "Mono/RGB", notes: "Type" },
        { name: "Scan Rate", typicalValues: "60+ Hz", notes: "No flicker" },
        { name: "Interface", typicalValues: "SPI/parallel", notes: "Signal" },
      ],
    },
    applications: {
      applications: [
        { category: "Signage", description: "Scroll text", examples: ["Boards"] },
        { category: "Wearable", description: "Indicators", examples: ["Badges"] },
        { category: "Art", description: "Light shows", examples: ["Installations"] },
      ],
    },
    advantages: { advantages: ["Graphics", "Few pins (mux)", "Bright", "Scalable", "Color options"] },
    disadvantages: { disadvantages: ["Flicker if slow", "Peak current", "Multiplex complexity", "Power", "Viewing angle"] },
    selection: {
      steps: [
        { step: 1, title: "Size/Color", description: "Match need." },
        { step: 2, title: "Interface", description: "SPI/driver." },
        { step: 3, title: "Scan", description: "Refresh rate." },
        { step: 4, title: "Power", description: "Peak current." },
      ],
      tips: ["Refresh >60Hz", "Current limit", "Use driver IC (MAX7219)"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Flicker", symptoms: ["Blink"], causes: ["Slow scan"], solution: "Faster" },
        { failure: "Dim Rows", symptoms: ["Uneven"], causes: ["Current"], solution: "Boost" },
        { failure: "Stuck Pixel", symptoms: ["Always on"], causes: ["Short"], solution: "Replace" },
      ],
    },
    history: {
      invention: {
        year: 1960,
        inventor: "LED matrix evolution",
        discovery: "Multiplexed LED matrices enabled large displays efficiently.",
        evolution: [
          { year: 1960, event: "LED arrays" },
          { year: 1990, event: "Dot-matrix signs" },
          { year: 2010, event: "RGB video walls" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Peak current limit.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Multiplex", definition: "Row/column time scan." },
        { term: "Persistence", definition: "Eye integrates fast scan." },
        { term: "Duty Cycle", definition: "On-time fraction." },
        { term: "RGB", definition: "Red-green-blue pixel." },
      ],
    },
    interview: {
      beginner: [
        { question: "Why matrix not one LED each?", answer: "Multiplexing saves many pins." },
        { question: "How see image?", answer: "Fast row scan integrates in the eye." },
      ],
      intermediate: [
        { question: "Flicker cause?", answer: "Refresh too slow for persistence." },
      ],
      advanced: [
        { question: "Peak current?", answer: "Only one row lit at a time, so peak can be high." },
      ],
      expert: [
        { question: "Driver IC benefit?", answer: "Handles scan/current (e.g., MAX7219)." },
      ],
    },
    mcqs: [
      { question: "LED matrix uses:", options: ["Multiplex", "Backlight", "LCD", "None"], correctAnswer: 0, explanation: "Row/col scan.", difficulty: "beginner" },
      { question: "Pixels =", options: ["Rows×Cols", "Rows+Cols", "Rows", "None"], correctAnswer: 0, explanation: "Grid product.", difficulty: "beginner" },
      { question: "Flicker if:", options: ["Scan too slow", "Bright", "Color", "None"], correctAnswer: 0, explanation: "Below persistence.", difficulty: "intermediate" },
      { question: "RGB means:", options: ["3 colors/pixel", "Resistor", "Row", "None"], correctAnswer: 0, explanation: "Full color.", difficulty: "beginner" },
      { question: "Driver like MAX7219:", options: ["Scans/current", "Amplifies", "Regulates", "None"], correctAnswer: 0, explanation: "Manages matrix.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "LED Matrix Datasheet", author: "Manufacturer", year: 2021, url: "", type: "datasheet" },
        { title: "Display Basics", author: "Textbook", year: 2018, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "led", relationship: "Pixel element" },
        { id: "resistor", relationship: "Current limit" },
        { id: "microcontroller", relationship: "Drives scan" },
      ],
    },
  },

  breadboard: {
    overview: {
      whatIsIt: "A breadboard is a reusable solderless board with spring clips for quickly prototyping circuits.",
      whyExists: "Breadboards let you build and modify circuits without soldering.",
      whereUsed: "Used by students, hobbyists, and for quick prototypes.",
    },
    working: {
      workingPrinciple: "Underneath, metal clips connect rows and columns; inserting leads makes temporary electrical contacts in a standard layout.",
      steps: [
        "Place IC across center gap",
        "Power rails along edges",
        "Insert components/wires",
        "Clips connect them",
      ],
      microscopicExplanation: "Spring-metal terminals grip leads; rows are common, with a center gap splitting the two halves.",
    },
    construction: {
      internalParts: [
        { name: "Terminal Strips", function: "Connect rows", material: "Spring metal" },
        { name: "Power Rails", function: "Common supply", material: "Metal" },
        { name: "Center Gap", function: "Split IC rows", material: "Plastic" },
        { name: "Base", function: "Insulate", material: "Plastic" },
      ],
    },
    types: {
      types: [
        { name: "Full-size", description: "Many points.", applications: ["Projects"] },
        { name: "Half-size", description: "Compact.", applications: ["Small"] },
        { name: "Mini", description: "Tiny.", applications: ["Portable"] },
        { name: "With rails", description: "Power buses.", applications: ["General"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Pitch", formula: "2.54mm (0.1in)", description: "Standard spacing.", variables: [{ symbol: "Pitch", name: "Spacing", unit: "mm" }], example: "Fits DIP" },
        { name: "Capacity", formula: "Points count", description: "Size.", variables: [{ symbol: "Points", name: "Count", unit: "" }], example: "400/830" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Points", typicalValues: "170-830+", notes: "Capacity" },
        { name: "Pitch", typicalValues: "2.54mm", notes: "Standard" },
        { name: "Current", typicalValues: "1A typical", notes: "Limit" },
        { name: "Type", typicalValues: "Solderless", notes: "Reusable" },
      ],
    },
    applications: {
      applications: [
        { category: "Prototyping", description: "Test circuits", examples: ["Labs"] },
        { category: "Education", description: "Learn", examples: ["Schools"] },
        { category: "Debug", description: "Try ideas", examples: ["Hobby"] },
      ],
    },
    advantages: { advantages: ["Reusable", "No solder", "Fast", "Cheap", "Flexible"] },
    disadvantages: { disadvantages: ["Loose contacts", "Parasitics", "Low current", "Not permanent", "Messy"] },
    selection: {
      steps: [
        { step: 1, title: "Size", description: "Points needed." },
        { step: 2, title: "Rails", description: "Power buses." },
        { step: 3, title: "Quality", description: "Tight clips." },
        { step: 4, title: "Accessories", description: "Wires/power." },
      ],
      tips: ["Use solid wire", "Check contacts", "Don't exceed current"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Contact", symptoms: ["Dead"], causes: ["Loose"], solution: "Reseat" },
        { failure: "Short", symptoms: ["Wrong"], causes: ["Stray lead"], solution: "Inspect" },
        { failure: "Intermittent", symptoms: ["Flaky"], causes: ["Worn"], solution: "Replace board" },
      ],
    },
    history: {
      invention: {
        year: 1970,
        inventor: "Ronald Morrison (modern breadboard)",
        discovery: "The solderless breadboard made rapid prototyping accessible.",
        evolution: [
          { year: 1970, event: "Solderless board" },
          { year: 1990, event: "Standard 0.1in" },
          { year: 2010, event: "Mini boards" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage only.",
      currentSafety: "Limit ~1A.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "Plastic e-waste.",
    },
    glossary: {
      glossary: [
        { term: "Terminal Strip", definition: "Row of connected clips." },
        { term: "Power Rail", definition: "Common supply bus." },
        { term: "Center Gap", definition: "Splits IC rows." },
        { term: "Pitch", definition: "2.54mm lead spacing." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a breadboard?", answer: "A solderless board to prototype circuits." },
        { question: "Pitch?", answer: "2.54mm standard DIP spacing." },
      ],
      intermediate: [
        { question: "Why not for final?", answer: "Loose contacts and parasitics; make a PCB." },
      ],
      advanced: [
        { question: "Current limit?", answer: "Clips handle ~1A; not for power." },
      ],
      expert: [
        { question: "Parasitics issue?", answer: "Stray L/C affect high-speed circuits." },
      ],
    },
    mcqs: [
      { question: "Breadboard is:", options: ["Solderless", "Soldered", "PCB", "None"], correctAnswer: 0, explanation: "Reusable.", difficulty: "beginner" },
      { question: "Pitch is:", options: ["2.54mm", "1mm", "5mm", "None"], correctAnswer: 0, explanation: "0.1in.", difficulty: "beginner" },
      { question: "Center gap for:", options: ["IC rows", "Power", "Ground", "None"], correctAnswer: 0, explanation: "DIP split.", difficulty: "intermediate" },
      { question: "Current limit ~", options: ["1A", "10A", "100A", "None"], correctAnswer: 0, explanation: "Clips weak.", difficulty: "advanced" },
      { question: "Used for:", options: ["Prototyping", "Production", "Power", "None"], correctAnswer: 0, explanation: "Temp builds.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Breadboard Guide", author: "Manufacturer", year: 2020, url: "", type: "datasheet" },
        { title: "Practical Electronics", author: "Scherz", year: 2016, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "jumper-wire", relationship: "Connections" },
        { id: "pcb", relationship: "Permanent form" },
        { id: "resistor", relationship: "Placed on it" },
      ],
    },
  },
  pcb: {
    overview: {
      whatIsIt: "A Printed Circuit Board (PCB) mechanically supports and electrically connects components via copper traces.",
      whyExists: "PCBs make reliable, compact, repeatable electronic assemblies.",
      whereUsed: "Used in every modern electronic device.",
    },
    working: {
      workingPrinciple: "Copper layers etched into traces route signals and power; vias connect layers; solder joints mount components.",
      steps: [
        "Design schematic + layout",
        "Etch copper traces",
        "Drill vias/holes",
        "Solder components",
      ],
      microscopicExplanation: "Controlled-impedance traces and ground planes manage signal integrity and return currents.",
    },
    construction: {
      internalParts: [
        { name: "Substrate", function: "Insulate", material: "FR4" },
        { name: "Copper Layers", function: "Conduct", material: "Copper" },
        { name: "Solder Mask", function: "Protect", material: "Polymer" },
        { name: "Silkscreen", function: "Label", material: "Ink" },
      ],
    },
    types: {
      types: [
        { name: "Single-layer", description: "One side.", applications: ["Simple"] },
        { name: "Double-layer", description: "Both sides.", applications: ["General"] },
        { name: "Multi-layer", description: "4-20+ layers.", applications: ["Phones"] },
        { name: "Flex/Rigid-flex", description: "Bendable.", applications: ["Wearables"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Trace Width", formula: "W ∝ I / (ΔT^0.44)", description: "Current capacity (IPC).", variables: [{ symbol: "W", name: "Width", unit: "mil" }, { symbol: "I", name: "Current", unit: "A" }], example: "10mil per A rough" },
        { name: "Impedance", formula: "Z₀ = (87/√(εr+1.41)) ln(5.98h/(0.8w+t))", description: "Microstrip.", variables: [{ symbol: "Z₀", name: "Impedance", unit: "Ω" }], example: "50Ω" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Layers", typicalValues: "1-20+", notes: "Complexity" },
        { name: "Thickness", typicalValues: "1.6mm common", notes: "Board" },
        { name: "Finish", typicalValues: "HASL/ENIG", notes: "Pad" },
        { name: "Min Trace", typicalValues: "0.1mm", notes: "Fab limit" },
      ],
    },
    applications: {
      applications: [
        { category: "All Electronics", description: "Assemble", examples: ["Devices"] },
        { category: "RF", description: "Controlled impedance", examples: ["Antennas"] },
        { category: "Power", description: "Current planes", examples: ["PSU"] },
      ],
    },
    advantages: { advantages: ["Reliable", "Compact", "Repeatable", "Scalable", "Professional"] },
    disadvantages: { disadvantages: ["Fixed (not modifiable)", "Design effort", "Fab cost", "Lead time", "Rework hard"] },
    selection: {
      steps: [
        { step: 1, title: "Layers", description: "Complexity." },
        { step: 2, title: "Stack-up", description: "Impedance needs." },
        { step: 3, title: "Finish", description: "Solderability." },
        { step: 4, title: "Fab", description: "Capabilities." },
      ],
      tips: ["Use ground plane", "Watch trace width", "DFM rules"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Open Trace", symptoms: ["No conn"], causes: ["Etch/break"], solution: "Jumper" },
        { failure: "Short", symptoms: ["Power drain"], causes: ["Bridge"], solution: "Inspect" },
        { failure: "Lifted Pad", symptoms: ["No joint"], causes: ["Rework"], solution: "Repair" },
      ],
    },
    history: {
      invention: {
        year: 1936,
        inventor: "Paul Eisler (printed circuit)",
        discovery: "Eisler invented the printed circuit, revolutionizing electronics manufacturing.",
        evolution: [
          { year: 1936, event: "First PCB" },
          { year: 1960, event: "Multilayer" },
          { year: 2000, event: "HDI/flex" },
        ],
      },
    },
    safety: {
      voltageSafety: "Depends on circuit.",
      currentSafety: "Trace limits.",
      thermalSafety: "Solder heat.",
      handling: "Standard.",
      storage: "Dry, ESD for assemblies.",
      disposal: "Recycle (lead-free preferred).",
    },
    glossary: {
      glossary: [
        { term: "Via", definition: "Hole connecting layers." },
        { term: "FR4", definition: "Common PCB substrate." },
        { term: "Silkscreen", definition: "Component labels." },
        { term: "Impedance", definition: "Controlled trace Z₀." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a PCB?", answer: "A board with copper traces connecting components." },
        { question: "Via does?", answer: "Connects different layers." },
      ],
      intermediate: [
        { question: "Why ground plane?", answer: "Return path and noise reduction." },
      ],
      advanced: [
        { question: "50Ω trace?", answer: "Width/stack-up set characteristic impedance." },
      ],
      expert: [
        { question: "DFM importance?", answer: "Design for manufacturability avoids fab failures." },
      ],
    },
    mcqs: [
      { question: "PCB connects via:", options: ["Copper traces", "Wires only", "Air", "None"], correctAnswer: 0, explanation: "Etched copper.", difficulty: "beginner" },
      { question: "Via is:", options: ["Layer connector", "Resistor", "Cap", "None"], correctAnswer: 0, explanation: "Hole through layers.", difficulty: "intermediate" },
      { question: "FR4 is:", options: ["Substrate", "Copper", "Solder", "None"], correctAnswer: 0, explanation: "Board material.", difficulty: "beginner" },
      { question: "50Ω relates to:", options: ["Impedance", "Voltage", "Current", "None"], correctAnswer: 0, explanation: "Controlled trace.", difficulty: "advanced" },
      { question: "Multilayer for:", options: ["Complexity/density", "Cost only", "Color", "None"], correctAnswer: 0, explanation: "More routing.", difficulty: "intermediate" },
    ],
    references: {
      references: [
        { title: "PCB Design Guide", author: "Manufacturer", year: 2021, url: "", type: "datasheet" },
        { title: "High-Speed PCB", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "connector", relationship: "Mounted on PCB" },
        { id: "breadboard", relationship: "Prototyping alt" },
        { id: "solder", relationship: "Assembly" },
      ],
    },
  },
  "jumper-wire": {
    overview: {
      whatIsIt: "A jumper wire is a short pre-stripped wire used to make connections on breadboards or between headers.",
      whyExists: "Jumper wires provide quick, reusable electrical connections in prototypes.",
      whereUsed: "Used on breadboards, Arduino, and test setups.",
    },
    working: {
      workingPrinciple: "A solid or stranded conductor with ends plugs into sockets/headers to complete a circuit path.",
      steps: [
        "Insert end into point A",
        "Insert other into point B",
        "Completes connection",
        "Reposition as needed",
      ],
      microscopicExplanation: "The conductor's low resistance carries signal/power; insulation prevents shorts to neighbors.",
    },
    construction: {
      internalParts: [
        { name: "Conductor", function: "Carry current", material: "Copper" },
        { name: "Insulation", function: "Isolate", material: "PVC" },
        { name: "Tip", function: "Plug in", material: "Bare copper" },
        { name: "Color", function: "Identify", material: "Dye" },
      ],
    },
    types: {
      types: [
        { name: "Male-Male", description: "Both pins.", applications: ["Breadboard"] },
        { name: "Male-Female", description: "Pin to socket.", applications: ["Headers"] },
        { name: "Female-Female", description: "Socket both.", applications: ["Modules"] },
        { name: "Solid/Stranded", description: "Stiff/flex.", applications: ["Bread/proto"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Resistance", formula: "R = ρ L / A", description: "Wire resistance.", variables: [{ symbol: "R", name: "Resistance", unit: "Ω" }, { symbol: "L", name: "Length", unit: "m" }], example: "Negligible short" },
        { name: "Current", formula: "I_max by gauge", description: "AWG limit.", variables: [{ symbol: "I_max", name: "Current", unit: "A" }], example: "22AWG ~1A" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Gauge", typicalValues: "22-26 AWG", notes: "Breadboard" },
        { name: "Length", typicalValues: "2-30cm", notes: "Varied" },
        { name: "Type", typicalValues: "M/M, M/F, F/F", notes: "Ends" },
        { name: "Current", typicalValues: "~1A", notes: "Limit" },
      ],
    },
    applications: {
      applications: [
        { category: "Prototyping", description: "Connect", examples: ["Breadboard"] },
        { category: "Test", description: "Patch", examples: ["Bench"] },
        { category: "Modules", description: "Link", examples: ["Sensors"] },
      ],
    },
    advantages: { advantages: ["Reusable", "Cheap", "Flexible", "Color-coded", "Quick"] },
    disadvantages: { disadvantages: ["Loose", "Messy", "Current limit", "Wear", "Not permanent"] },
    selection: {
      steps: [
        { step: 1, title: "Ends", description: "M/M/F types." },
        { step: 2, title: "Gauge", description: "Current need." },
        { step: 3, title: "Length", description: "Fit layout." },
        { step: 4, title: "Color", description: "Signal coding." },
      ],
      tips: ["Color by function", "Don't overload", "Use solid for breadboard"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Loose", symptoms: ["No conn"], causes: ["Poor fit"], solution: "Reseat" },
        { failure: "Break", symptoms: ["Open"], causes: ["Flex"], solution: "Replace" },
        { failure: "Short", symptoms: ["Wrong"], causes: ["Bare touch"], solution: "Separate" },
      ],
    },
    history: {
      invention: {
        year: 1970,
        inventor: "Prototyping accessory",
        discovery: "Jumper wires became standard with solderless breadboarding.",
        evolution: [
          { year: 1970, event: "Hookup wires" },
          { year: 2000, event: "Color dupont sets" },
          { year: 2010, event: "Pre-cut kits" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low voltage.",
      currentSafety: "Limit ~1A.",
      thermalSafety: "None.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "AWG", definition: "Wire gauge standard." },
        { term: "M/M", definition: "Male-male ends." },
        { term: "Dupont", definition: "Common connector type." },
        { term: "Solid", definition: "Single stiff conductor." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a jumper wire?", answer: "A short wire to connect points in a prototype." },
        { question: "M/F means?", answer: "One male pin, one female socket." },
      ],
      intermediate: [
        { question: "Current limit?", answer: "Thin wire ~1A; don't power heavy loads." },
      ],
      advanced: [
        { question: "Solid vs stranded?", answer: "Solid fits breadboard; stranded flexes for modules." },
      ],
      expert: [
        { question: "Signal integrity?", answer: "Keep short; avoid loops in high-speed." },
      ],
    },
    mcqs: [
      { question: "Jumper wire is for:", options: ["Connections", "Solder", "Regulate", "None"], correctAnswer: 0, explanation: "Patch link.", difficulty: "beginner" },
      { question: "M/F means:", options: ["Male+female", "Metal", "Meter", "None"], correctAnswer: 0, explanation: "Mixed ends.", difficulty: "beginner" },
      { question: "Current ~", options: ["1A", "10A", "100A", "None"], correctAnswer: 0, explanation: "Thin wire.", difficulty: "intermediate" },
      { question: "Use solid for:", options: ["Breadboard", "High power", "Antenna", "None"], correctAnswer: 0, explanation: "Fits sockets.", difficulty: "advanced" },
      { question: "Color used to:", options: ["Identify signal", "Carry more", "Insulate", "None"], correctAnswer: 0, explanation: "Coding.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Jumper Wire Spec", author: "Manufacturer", year: 2020, url: "", type: "datasheet" },
        { title: "Practical Electronics", author: "Scherz", year: 2016, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "breadboard", relationship: "Used on" },
        { id: "connector", relationship: "Similar link" },
        { id: "pcb", relationship: "Permanent alt" },
      ],
    },
  },
  connector: {
    overview: {
      whatIsIt: "A connector is a detachable interface that joins circuits, cables, or boards electrically and mechanically.",
      whyExists: "Connectors allow modular, serviceable connections without soldering each time.",
      whereUsed: "Used everywhere signals or power must plug in/out.",
    },
    working: {
      workingPrinciple: "Mating contacts align and press together, forming a low-resistance path; housing ensures correct orientation and strain relief.",
      steps: [
        "Align connector",
        "Mate contacts",
        "Spring pressure connects",
        "Latch secures",
      ],
      microscopicExplanation: "Gold/nickel plating and spring contacts maintain low contact resistance and corrosion resistance.",
    },
    construction: {
      internalParts: [
        { name: "Contacts", function: "Conduct", material: "Copper/gold" },
        { name: "Housing", function: "Align/insulate", material: "Plastic" },
        { name: "Latch", function: "Secure", material: "Plastic" },
        { name: "Shell", function: "Shield (RF)", material: "Metal" },
      ],
    },
    types: {
      types: [
        { name: "Header (2.54mm)", description: "Pin rows.", applications: ["Boards"] },
        { name: "USB", description: "Data/power.", applications: ["Devices"] },
        { name: "Barrel Jack", description: "DC power.", applications: ["Adapters"] },
        { name: "RF (SMA)", description: "Coax.", applications: ["Antenna"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Contact Resistance", formula: "R_c (mΩ)", description: "Joint resistance.", variables: [{ symbol: "R_c", name: "Resistance", unit: "mΩ" }], example: "Low is good" },
        { name: "Current Rating", formula: "I_max per pin", description: "Pin limit.", variables: [{ symbol: "I_max", name: "Current", unit: "A" }], example: "1-10A" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Pitch", typicalValues: "0.5-5mm", notes: "Spacing" },
        { name: "Current", typicalValues: "1-50A", notes: "Per pin" },
        { name: "Cycles", typicalValues: "100-10000", notes: "Mating life" },
        { name: "Type", typicalValues: "Signal/power/RF", notes: "Class" },
      ],
    },
    applications: {
      applications: [
        { category: "Interconnect", description: "Board to cable", examples: ["Wiring"] },
        { category: "Power", description: "DC in", examples: ["Adapters"] },
        { category: "Data", description: "USB/etc", examples: ["Comms"] },
        { category: "RF", description: "Coax", examples: ["Antenna"] },
      ],
    },
    advantages: { advantages: ["Modular", "Serviceable", "Standard", "Reliable", "Many types"] },
    disadvantages: { disadvantages: ["Wear", "Contact resistance", "Mating force", "Cost", "Orientation"] },
    selection: {
      steps: [
        { step: 1, title: "Signal/Power", description: "Class." },
        { step: 2, title: "Current", description: "Per pin." },
        { step: 3, title: "Pitch", description: "Space." },
        { step: 4, title: "Mating", description: "Cycles/orientation." },
      ],
      tips: ["Keyed to avoid reverse", "Gold for signals", "Strain relief"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Intermittent", symptoms: ["Flaky"], causes: ["Worn/contam"], solution: "Clean/replace" },
        { failure: "No Contact", symptoms: ["Dead"], causes: ["Misalign"], solution: "Reseat" },
        { failure: "High R", symptoms: ["Drop"], causes: ["Oxide"], solution: "Clean" },
      ],
    },
    history: {
      invention: {
        year: 1940,
        inventor: "Connector standardization",
        discovery: "Standard connectors enabled interchangeable electronic equipment.",
        evolution: [
          { year: 1940, event: "Early connectors" },
          { year: 1990, event: "USB" },
          { year: 2010, event: "USB-C/compact" },
        ],
      },
    },
    safety: {
      voltageSafety: "Match rating.",
      currentSafety: "Per-pin limit.",
      thermalSafety: "Overload heats.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "Recycle metals.",
    },
    glossary: {
      glossary: [
        { term: "Pitch", definition: "Contact spacing." },
        { term: "Contact R", definition: "Joint resistance." },
        { term: "Keyed", definition: "Prevents wrong mate." },
        { term: "Strain Relief", definition: "Cable support." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does a connector do?", answer: "Provides a detachable electrical/mechanical link." },
        { question: "Pitch means?", answer: "Spacing between contacts." },
      ],
      intermediate: [
        { question: "Gold plating why?", answer: "Low, stable contact resistance and corrosion resistance." },
      ],
      advanced: [
        { question: "Contact resistance matter?", answer: "Adds voltage drop and heating at current." },
      ],
      expert: [
        { question: "RF connector concern?", answer: "Impedance and shielding to avoid reflections." },
      ],
    },
    mcqs: [
      { question: "Connector provides:", options: ["Detachable link", "Amplify", "Regulate", "None"], correctAnswer: 0, explanation: "Interconnect.", difficulty: "beginner" },
      { question: "Pitch is:", options: ["Contact spacing", "Current", "Voltage", "None"], correctAnswer: 0, explanation: "Distance.", difficulty: "beginner" },
      { question: "Gold plating for:", options: ["Low contact R", "Color", "Strength", "None"], correctAnswer: 0, explanation: "Stable contact.", difficulty: "intermediate" },
      { question: "USB is:", options: ["Data+power connector", "Resistor", "Cap", "None"], correctAnswer: 0, explanation: "Standard.", difficulty: "beginner" },
      { question: "RF connector needs:", options: ["Impedance match", "High R", "No shield", "None"], correctAnswer: 0, explanation: "50Ω coax.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "Connector Catalog", author: "Molex/TE", year: 2021, url: "", type: "datasheet" },
        { title: "Interconnect Design", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "jumper-wire", relationship: "Temporary link" },
        { id: "pcb", relationship: "Mounted on" },
        { id: "antenna", relationship: "RF connect" },
      ],
    },
  },
  antenna: {
    overview: {
      whatIsIt: "An antenna is a transducer that converts electrical signals to electromagnetic waves (and vice versa) for radio communication.",
      whyExists: "Antennas enable wireless transmission and reception of RF energy.",
      whereUsed: "Used in Wi-Fi, phones, radio, GPS, and IoT.",
    },
    working: {
      workingPrinciple: "An oscillating current in the antenna creates a radiating electromagnetic field; incoming waves induce a current.",
      steps: [
        "RF signal applied",
        "Current oscillates in element",
        "EM wave radiates",
        "Reverse for receive",
      ],
      microscopicExplanation: "Accelerating charges radiate; the element length set to a fraction of wavelength resonates efficiently.",
    },
    construction: {
      internalParts: [
        { name: "Radiating Element", function: "Emit/receive", material: "Copper" },
        { name: "Feed Point", function: "Connect RF", material: "Metal" },
        { name: "Ground Plane", function: "Reflect/balance", material: "Metal" },
        { name: "Housing", function: "Protect", material: "Plastic" },
      ],
    },
    types: {
      types: [
        { name: "Dipole", description: "Half-wave.", applications: ["Wi-Fi"] },
        { name: "Monopole", description: "Quarter-wave.", applications: ["Phones"] },
        { name: "Patch", description: "Flat PCB.", applications: ["GPS"] },
        { name: "Yagi", description: "Directional.", applications: ["TV"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Wavelength", formula: "λ = c / f", description: "Wave length.", variables: [{ symbol: "λ", name: "Wavelength", unit: "m" }, { symbol: "c", name: "Speed", unit: "m/s" }, { symbol: "f", name: "Freq", unit: "Hz" }], example: "2.4GHz -> 12.5cm" },
        { name: "Dipole Length", formula: "L ≈ λ/2", description: "Resonant length.", variables: [{ symbol: "L", name: "Length", unit: "m" }], example: "Quarter wave common" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Frequency", typicalValues: "MHz-GHz", notes: "Band" },
        { name: "Gain", typicalValues: "0-15 dBi", notes: "Directivity" },
        { name: "Impedance", typicalValues: "50Ω", notes: "Match" },
        { name: "Polarization", typicalValues: "Linear/circular", notes: "Orientation" },
      ],
    },
    applications: {
      applications: [
        { category: "Wireless", description: "Wi-Fi/BT", examples: ["Routers"] },
        { category: "Broadcast", description: "Radio/TV", examples: ["Towers"] },
        { category: "Navigation", description: "GPS", examples: ["Devices"] },
        { category: "IoT", description: "Connect", examples: ["Sensors"] },
      ],
    },
    advantages: { advantages: ["Wireless", "Many types", "Directional options", "Integrated", "Essential"] },
    disadvantages: { disadvantages: ["Tuning needed", "Losses", "Size at low freq", "Interference", "Matching"] },
    selection: {
      steps: [
        { step: 1, title: "Frequency", description: "Match band." },
        { step: 2, title: "Gain/Pattern", description: "Omni vs directional." },
        { step: 3, title: "Impedance", description: "50Ω match." },
        { step: 4, title: "Size", description: "Space." },
      ],
      tips: ["Match impedance", "Orientation matters", "Avoid near metal"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "No Signal", symptoms: ["Dead"], causes: ["Broken"], solution: "Replace" },
        { failure: "Weak", symptoms: ["Short range"], causes: ["Mismatch"], solution: "Tune" },
        { failure: "Interference", symptoms: ["Noise"], causes: ["Nearby"], solution: "Relocate" },
      ],
    },
    history: {
      invention: {
        year: 1888,
        inventor: "Heinrich Hertz (radio waves)",
        discovery: "Hertz demonstrated electromagnetic wave transmission, founding radio.",
        evolution: [
          { year: 1888, event: "First antenna" },
          { year: 1900, event: "Marconi radio" },
          { year: 2000, event: "Integrated antennas" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low at antenna (RF).",
      currentSafety: "RF exposure limits.",
      thermalSafety: "None typical.",
      handling: "Standard.",
      storage: "Dry.",
      disposal: "E-waste.",
    },
    glossary: {
      glossary: [
        { term: "Wavelength", definition: "λ = c/f." },
        { term: "Gain (dBi)", definition: "Directivity vs isotropic." },
        { term: "Impedance", definition: "50Ω typical match." },
        { term: "Polarization", definition: "Field orientation." },
      ],
    },
    interview: {
      beginner: [
        { question: "What does an antenna do?", answer: "Converts electrical RF to/from radio waves." },
        { question: "Length relation?", answer: "Resonant length is a fraction of wavelength." },
      ],
      intermediate: [
        { question: "Why 50Ω?", answer: "Standard coax/RF system impedance for match." },
      ],
      advanced: [
        { question: "Gain meaning?", answer: "Directivity; focuses energy in a pattern." },
      ],
      expert: [
        { question: "Matching importance?", answer: "Mismatch causes reflections (SWR) and loss." },
      ],
    },
    mcqs: [
      { question: "Antenna converts:", options: ["RF <-> waves", "DC->AC", "V->I", "None"], correctAnswer: 0, explanation: "Transducer.", difficulty: "beginner" },
      { question: "λ =", options: ["c/f", "f/c", "c×f", "None"], correctAnswer: 0, explanation: "Wavelength.", difficulty: "intermediate" },
      { question: "Typical impedance:", options: ["50Ω", "75Ω only", "1Ω", "None"], correctAnswer: 0, explanation: "RF match.", difficulty: "beginner" },
      { question: "Dipole length ~", options: ["λ/2", "λ", "λ/4", "None"], correctAnswer: 0, explanation: "Half-wave.", difficulty: "intermediate" },
      { question: "Gain is:", options: ["Directivity", "Power", "Voltage", "None"], correctAnswer: 0, explanation: "Pattern focus.", difficulty: "advanced" },
    ],
    references: {
      references: [
        { title: "Antenna Handbook", author: "ARRL", year: 2020, url: "", type: "book" },
        { title: "RF Design", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "connector", relationship: "RF feed" },
        { id: "pcb", relationship: "Patch antenna" },
        { id: "microcontroller", relationship: "Radio SoC" },
      ],
    },
  },
  battery: {
    overview: {
      whatIsIt: "A battery stores chemical energy and converts it to electrical energy, providing portable power.",
      whyExists: "Batteries enable cordless, mobile, and backup power.",
      whereUsed: "Used in phones, cars, laptops, and grid storage.",
    },
    working: {
      workingPrinciple: "Electrochemical cells drive ions through electrolyte; electrons flow through the external circuit, doing work.",
      steps: [
        "Chemical reaction at electrodes",
        "Ions move through electrolyte",
        "Electrons flow externally",
        "Recharge reverses (secondary)",
      ],
      microscopicExplanation: "Oxidation at anode releases electrons; reduction at cathode consumes them; EMF equals cell potential.",
    },
    construction: {
      internalParts: [
        { name: "Anode", function: "Oxidize", material: "Graphite/Li" },
        { name: "Cathode", function: "Reduce", material: "Metal oxide" },
        { name: "Electrolyte", function: "Ion path", material: "Salt/liquid" },
        { name: "Separator", function: "Block short", material: "Polymer" },
      ],
    },
    types: {
      types: [
        { name: "Li-ion", description: "Rechargeable, dense.", applications: ["Phones"] },
        { name: "LiPo", description: "Polymer, thin.", applications: ["Drones"] },
        { name: "NiMH", description: "Rechargeable.", applications: ["Toys"] },
        { name: "Alkaline", description: "Primary.", applications: ["Remotes"] },
      ],
    },
    formulas: {
      formulas: [
        { name: "Energy", formula: "E = V × Q", description: "Capacity energy.", variables: [{ symbol: "E", name: "Energy", unit: "Wh" }, { symbol: "V", name: "Voltage", unit: "V" }, { symbol: "Q", name: "Charge", unit: "Ah" }], example: "3.7V×2Ah=7.4Wh" },
        { name: "Charge Time", formula: "t = Q / I", description: "At current I.", variables: [{ symbol: "t", name: "Time", unit: "h" }], example: "2Ah at 1A = 2h" },
        { name: "C-rate", formula: "I = C × rate", description: "Discharge speed.", variables: [{ symbol: "I", name: "Current", unit: "A" }, { symbol: "C", name: "Capacity", unit: "Ah" }], example: "1C = 1h drain" },
      ],
    },
    specifications: {
      specifications: [
        { name: "Voltage", typicalValues: "1.2-3.7V/cell", notes: "Cell" },
        { name: "Capacity", typicalValues: "mAh-Ah", notes: "Charge" },
        { name: "Chemistry", typicalValues: "Li-ion/NiMH", notes: "Type" },
        { name: "Cycles", typicalValues: "300-2000", notes: "Life" },
      ],
    },
    applications: {
      applications: [
        { category: "Portable", description: "Devices", examples: ["Phones"] },
        { category: "Transport", description: "EVs", examples: ["Cars"] },
        { category: "Backup", description: "UPS", examples: ["Servers"] },
        { category: "Grid", description: "Storage", examples: ["Solar"] },
      ],
    },
    advantages: { advantages: ["Portable", "High energy", "Rechargeable types", "Scalable", "Essential"] },
    disadvantages: { disadvantages: ["Aging", "Thermal risk (Li)", "Voltage sag", "Recycle need", "Self-discharge"] },
    selection: {
      steps: [
        { step: 1, title: "Capacity", description: "mAh/Ah needed." },
        { step: 2, title: "Voltage", description: "Cell count." },
        { step: 3, title: "Chemistry", description: "Li/NiMH." },
        { step: 4, title: "Protection", description: "BMS for Li." },
      ],
      tips: ["Use BMS", "Avoid over-discharge", "Temperature limits"],
    },
    troubleshooting: {
      failureModes: [
        { failure: "Swollen", symptoms: ["Bulge"], causes: ["Overcharge"], solution: "Replace safely" },
        { failure: "Dead", symptoms: ["No V"], causes: ["Deep discharge"], solution: "Recycle" },
        { failure: "Overheat", symptoms: ["Hot"], causes: ["Short"], solution: "Disconnect" },
      ],
    },
    history: {
      invention: {
        year: 1800,
        inventor: "Alessandro Volta (voltaic pile)",
        discovery: "Volta built the first battery, proving chemical-to-electrical energy.",
        evolution: [
          { year: 1800, event: "Voltaic pile" },
          { year: 1991, event: "Li-ion (Sony)" },
          { year: 2010, event: "EV batteries" },
        ],
      },
    },
    safety: {
      voltageSafety: "Low per cell.",
      currentSafety: "Short = high current/spark.",
      thermalSafety: "Li-ion can thermal-runaway; never puncture.",
      handling: "Avoid puncture/heat.",
      storage: "Cool, partial charge.",
      disposal: "Recycle; never landfill.",
    },
    glossary: {
      glossary: [
        { term: "EMF", definition: "Cell open-circuit voltage." },
        { term: "C-rate", definition: "Charge/discharge speed vs capacity." },
        { term: "BMS", definition: "Battery management system." },
        { term: "Capacity", definition: "Stored charge (Ah)." },
      ],
    },
    interview: {
      beginner: [
        { question: "What is a battery?", answer: "A chemical store of electrical energy." },
        { question: "Primary vs secondary?", answer: "Primary single-use; secondary rechargeable." },
      ],
      intermediate: [
        { question: "C-rate meaning?", answer: "Discharge current relative to capacity (1C = 1h drain)." },
      ],
      advanced: [
        { question: "Li-ion risk?", answer: "Thermal runaway if punctured or overcharged." },
      ],
      expert: [
        { question: "Why BMS?", answer: "Balances cells and prevents over/under charge." },
      ],
    },
    mcqs: [
      { question: "Battery stores:", options: ["Chemical energy", "Heat", "Light", "None"], correctAnswer: 0, explanation: "Electrochemical.", difficulty: "beginner" },
      { question: "Energy E =", options: ["V×Q", "V/I", "I×R", "None"], correctAnswer: 0, explanation: "Volt-amp-hour.", difficulty: "intermediate" },
      { question: "1C means:", options: ["1h drain", "1V", "1A", "None"], correctAnswer: 0, explanation: "Full in 1h.", difficulty: "advanced" },
      { question: "Li-ion needs:", options: ["BMS", "No care", "Heat", "None"], correctAnswer: 0, explanation: "Protection.", difficulty: "intermediate" },
      { question: "Volta invented:", options: ["Battery", "Motor", "Bulb", "None"], correctAnswer: 0, explanation: "1800 pile.", difficulty: "beginner" },
    ],
    references: {
      references: [
        { title: "Battery University", author: "Cadex", year: 2021, url: "", type: "book" },
        { title: "Electrochemistry", author: "Textbook", year: 2019, url: "", type: "book" },
      ],
    },
    related: {
      relatedComponents: [
        { id: "voltage-regulator", relationship: "Regulates battery" },
        { id: "ldo-regulator", relationship: "Low-noise rail" },
        { id: "connector", relationship: "Battery terminal" },
      ],
    },
  },

}

export default COMPONENT_DATA
