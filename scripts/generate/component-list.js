// Master list of all 86 components across 12 categories
// Each entry: { id, name, category, wiki (Wikipedia article title) }

const COMPONENTS = [
  // Passive (12)
  { id: 'resistor', name: 'Resistor', category: 'passive', wiki: 'Resistor' },
  { id: 'capacitor', name: 'Capacitor', category: 'passive', wiki: 'Capacitor' },
  { id: 'inductor', name: 'Inductor', category: 'passive', wiki: 'Inductor' },
  { id: 'transformer', name: 'Transformer', category: 'passive', wiki: 'Transformer' },
  { id: 'potentiometer', name: 'Potentiometer', category: 'passive', wiki: 'Potentiometer' },
  { id: 'varistor', name: 'Varistor', category: 'passive', wiki: 'Varistor' },
  { id: 'thermistor', name: 'Thermistor', category: 'passive', wiki: 'Thermistor' },
  { id: 'rheostat', name: 'Rheostat', category: 'passive', wiki: 'Rheostat' },
  { id: 'trimmer', name: 'Trimmer Potentiometer', category: 'passive', wiki: 'Potentiometer' },
  { id: 'wirewound-resistor', name: 'Wirewound Resistor', category: 'passive', wiki: 'Resistor' },
  { id: 'ceramic-resonator', name: 'Ceramic Resonator', category: 'passive', wiki: 'Ceramic resonator' },
  { id: 'crystal-oscillator', name: 'Crystal Oscillator', category: 'passive', wiki: 'Crystal oscillator' },

  // Semiconductor (16)
  { id: 'diode', name: 'Diode', category: 'semiconductor', wiki: 'Diode' },
  { id: 'led', name: 'Light Emitting Diode', category: 'semiconductor', wiki: 'LED' },
  { id: 'zener-diode', name: 'Zener Diode', category: 'semiconductor', wiki: 'Zener diode' },
  { id: 'schottky-diode', name: 'Schottky Diode', category: 'semiconductor', wiki: 'Schottky diode' },
  { id: 'photodiode', name: 'Photodiode', category: 'semiconductor', wiki: 'Photodiode' },
  { id: 'transistor', name: 'Bipolar Transistor', category: 'semiconductor', wiki: 'Bipolar junction transistor' },
  { id: 'mosfet', name: 'MOSFET', category: 'semiconductor', wiki: 'MOSFET' },
  { id: 'jfet', name: 'JFET', category: 'semiconductor', wiki: 'JFET' },
  { id: 'igbt', name: 'IGBT', category: 'semiconductor', wiki: 'Insulated-gate bipolar transistor' },
  { id: 'thyristor', name: 'Thyristor (SCR)', category: 'semiconductor', wiki: 'Thyristor' },
  { id: 'triac', name: 'TRIAC', category: 'semiconductor', wiki: 'TRIAC' },
  { id: 'diac', name: 'DIAC', category: 'semiconductor', wiki: 'DIAC' },
  { id: 'phototransistor', name: 'Phototransistor', category: 'semiconductor', wiki: 'Phototransistor' },
  { id: 'ujt', name: 'Unijunction Transistor', category: 'semiconductor', wiki: 'Unijunction transistor' },
  { id: 'tunnel-diode', name: 'Tunnel Diode', category: 'semiconductor', wiki: 'Tunnel diode' },
  { id: 'varactor-diode', name: 'Varactor Diode', category: 'semiconductor', wiki: 'Varicap' },

  // Power Electronics (3)
  { id: 'voltage-regulator', name: 'Voltage Regulator', category: 'power-electronics', wiki: 'Voltage regulator' },
  { id: 'dc-power-supply', name: 'DC Power Supply', category: 'power-electronics', wiki: 'Power supply' },
  { id: 'ac-power-supply', name: 'AC Power Supply', category: 'power-electronics', wiki: 'Power supply' },

  // Electromechanical (11)
  { id: 'relay', name: 'Relay', category: 'electromechanical', wiki: 'Relay' },
  { id: 'dc-motor', name: 'DC Motor', category: 'electromechanical', wiki: 'DC motor' },
  { id: 'stepper-motor', name: 'Stepper Motor', category: 'electromechanical', wiki: 'Stepper motor' },
  { id: 'servo-motor', name: 'Servo Motor', category: 'electromechanical', wiki: 'Servomotor' },
  { id: 'speaker', name: 'Loudspeaker', category: 'electromechanical', wiki: 'Loudspeaker' },
  { id: 'buzzer', name: 'Buzzer', category: 'electromechanical', wiki: 'Buzzer' },
  { id: 'solenoid', name: 'Solenoid', category: 'electromechanical', wiki: 'Solenoid' },
  { id: 'contactor', name: 'Contactor', category: 'electromechanical', wiki: 'Contactor' },
  { id: 'switch', name: 'Switch', category: 'electromechanical', wiki: 'Switch' },
  { id: 'push-button', name: 'Push Button', category: 'electromechanical', wiki: 'Push-button' },
  { id: 'electromagnet', name: 'Electromagnet', category: 'electromechanical', wiki: 'Electromagnet' },

  // Protection (2)
  { id: 'fuse', name: 'Fuse', category: 'protection', wiki: 'Fuse (electrical)' },
  { id: 'circuit-breaker', name: 'Circuit Breaker', category: 'protection', wiki: 'Circuit breaker' },

  // Sensors (13)
  { id: 'temperature-sensor', name: 'Temperature Sensor', category: 'sensors', wiki: 'Temperature sensor' },
  { id: 'pressure-sensor', name: 'Pressure Sensor', category: 'sensors', wiki: 'Pressure sensor' },
  { id: 'ultrasonic-sensor', name: 'Ultrasonic Sensor', category: 'sensors', wiki: 'Ultrasonic sensor' },
  { id: 'accelerometer', name: 'Accelerometer', category: 'sensors', wiki: 'Accelerometer' },
  { id: 'gyroscope', name: 'Gyroscope', category: 'sensors', wiki: 'Gyroscope' },
  { id: 'ldr', name: 'Light Dependent Resistor', category: 'sensors', wiki: 'Photoresistor' },
  { id: 'proximity-sensor', name: 'Proximity Sensor', category: 'sensors', wiki: 'Proximity sensor' },
  { id: 'humidity-sensor', name: 'Humidity Sensor', category: 'sensors', wiki: 'Humidity' },
  { id: 'gas-sensor', name: 'Gas Sensor', category: 'sensors', wiki: 'Gas detector' },
  { id: 'ir-sensor', name: 'IR Sensor', category: 'sensors', wiki: 'Infrared' },
  { id: 'hall-sensor', name: 'Hall Effect Sensor', category: 'sensors', wiki: 'Hall effect sensor' },
  { id: 'flex-sensor', name: 'Flex Sensor', category: 'sensors', wiki: 'Flex sensor' },
  { id: 'touch-sensor', name: 'Touch Sensor', category: 'sensors', wiki: 'Touchscreen' },

  // Integrated Circuits (11)
  { id: 'op-amp', name: 'Operational Amplifier', category: 'integrated-circuits', wiki: 'Operational amplifier' },
  { id: '555-timer', name: '555 Timer', category: 'integrated-circuits', wiki: '555 timer IC' },
  { id: 'adc', name: 'Analog to Digital Converter', category: 'integrated-circuits', wiki: 'Analog-to-digital converter' },
  { id: 'dac', name: 'Digital to Analog Converter', category: 'integrated-circuits', wiki: 'Digital-to-analog converter' },
  { id: 'comparator', name: 'Comparator', category: 'integrated-circuits', wiki: 'Comparator' },
  { id: 'ldo-regulator', name: 'LDO Voltage Regulator', category: 'integrated-circuits', wiki: 'Low-dropout regulator' },
  { id: 'microcontroller', name: 'Microcontroller', category: 'integrated-circuits', wiki: 'Microcontroller' },
  { id: 'fpga', name: 'FPGA', category: 'integrated-circuits', wiki: 'Field-programmable gate array' },
  { id: 'logic-gate-ic', name: 'Logic Gate IC', category: 'integrated-circuits', wiki: 'Logic gate' },
  { id: 'audio-amplifier-ic', name: 'Audio Amplifier IC', category: 'integrated-circuits', wiki: 'Audio power amplifier' },
  { id: 'motor-driver-ic', name: 'Motor Driver IC', category: 'integrated-circuits', wiki: 'H bridge' },

  // Digital (8)
  { id: 'logic-gates', name: 'Logic Gates', category: 'digital', wiki: 'Logic gate' },
  { id: 'flip-flop', name: 'Flip-Flop', category: 'digital', wiki: 'Flip-flop (electronics)' },
  { id: 'counter', name: 'Counter', category: 'digital', wiki: 'Counter (digital)' },
  { id: 'register', name: 'Register', category: 'digital', wiki: 'Processor register' },
  { id: 'multiplexer', name: 'Multiplexer', category: 'digital', wiki: 'Multiplexer' },
  { id: 'demultiplexer', name: 'Demultiplexer', category: 'digital', wiki: 'Demultiplexer' },
  { id: 'encoder', name: 'Encoder', category: 'digital', wiki: 'Encoder (digital)' },
  { id: 'decoder', name: 'Decoder', category: 'digital', wiki: 'Binary decoder' },

  // Displays (4)
  { id: 'lcd', name: 'Liquid Crystal Display', category: 'displays', wiki: 'Liquid-crystal display' },
  { id: 'oled', name: 'OLED Display', category: 'displays', wiki: 'OLED' },
  { id: '7-segment', name: 'Seven Segment Display', category: 'displays', wiki: 'Seven-segment display' },
  { id: 'led-matrix', name: 'LED Matrix', category: 'displays', wiki: 'LED display' },

  // Prototyping (4)
  { id: 'breadboard', name: 'Breadboard', category: 'prototyping', wiki: 'Breadboard' },
  { id: 'pcb', name: 'Printed Circuit Board', category: 'prototyping', wiki: 'Printed circuit board' },
  { id: 'jumper-wire', name: 'Jumper Wire', category: 'prototyping', wiki: 'Jumper (computing)' },
  { id: 'connector', name: 'Connector', category: 'prototyping', wiki: 'Electrical connector' },

  // Communication (1)
  { id: 'antenna', name: 'Antenna', category: 'communication', wiki: 'Antenna (radio)' },

  // Energy Storage (1)
  { id: 'battery', name: 'Battery', category: 'energy-storage', wiki: 'Battery (electricity)' },
]

export default COMPONENTS
