/**
 * Compile all image URLs and download/convert to WebP
 * Sources: Wikipedia API + Browser extraction
 * Usage: node scripts/compile-and-download.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', 'public', 'images', 'components');

// Comprehensive mapping: component_id → image URL
const IMAGE_MAP = {
  // === First API batch (working) ===
  'resistor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Electronic-Axial-Lead-Resistors-Array.png/800px-Electronic-Axial-Lead-Resistors-Array.png',
  'capacitor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Capacitors_%287189597135%29.jpg/800px-Capacitors_%287189597135%29.jpg',
  'inductor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Electronic_component_inductors.jpg/800px-Electronic_component_inductors.jpg',
  'transformer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Philips_N4422_-_power_supply_transformer-2098.jpg/800px-Philips_N4422_-_power_supply_transformer-2098.jpg',
  'potentiometer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Electronic-Component-Potentiometer.jpg/800px-Electronic-Component-Potentiometer.jpg',
  'varistor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Varistor_S14K385_photo.jpg/800px-Varistor_S14K385_photo.jpg',
  'thermistor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/NTC_bead.jpg/800px-NTC_bead.jpg',
  'trimmer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/12_board_mounted_potentiometers.jpg/800px-12_board_mounted_potentiometers.jpg',
  'jfet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/JFet_transistoren.jpg/800px-JFet_transistoren.jpg',
  'diac': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/DB3_DIAC.jpg/800px-DB3_DIAC.jpg',
  'ac-power-supply': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/HP_Rainbow_%284430379883%29.jpg/800px-HP_Rainbow_%284430379883%29.jpg',
  'switch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Electronic_switch.jpg/800px-Electronic_switch.jpg',
  'ultrasonic-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ultrasound_Scanner.jpg/800px-Ultrasound_Scanner.jpg',
  'ldo-regulator': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/AMS1117.jpg/800px-AMS1117.jpg',
  'logic-gates': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Logic_gates_-_7400_series_chips.jpg/800px-Logic_gates_-_7400_series_chips.jpg',
  'counter': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/74HC161_counter.jpg/800px-74HC161_counter.jpg',
  'multiplexer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Multiplexer_IC.jpg/800px-Multiplexer_IC.jpg',
  'demultiplexer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Demultiplexer_IC.jpg/800px-Demultiplexer_IC.jpg',
  'pcb': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PCB_design.jpg/800px-PCB_design.jpg',
  'connector': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/ConnectorSymbols.svg/800px-ConnectorSymbols.svg.png',
  'microcontroller': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Componentes.JPG/800px-Componentes.JPG',
  'logic-gate-ic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Logic_gates_-_7400_series_chips.jpg/800px-Logic_gates_-_7400_series_chips.jpg',
  'motor-driver-ic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Canon_PowerShot_S45_-_main_board_-_Rohm_BD6753KV-91775.jpg/800px-Canon_PowerShot_S45_-_main_board_-_Rohm_BD6753KV-91775.jpg',
  'dac': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/DAC-1138KX_-_pcb_top_view.jpg/800px-DAC-1138KX_-_pcb_top_view.jpg',
  'comparator': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/LM393_comparator.jpg/800px-LM393_comparator.jpg',

  // === Browser extraction batch ===
  'ceramic-resonator': 'https://upload.wikimedia.org/wikipedia/commons/8/83/A_16MHz_ceramic_resonator.jpg',
  'crystal-oscillator': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/16MHZ_Crystal.jpg/800px-16MHZ_Crystal.jpg',
  'diode': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Diode-closeup.jpg/800px-Diode-closeup.jpg',
  'led': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/RBG-LED.jpg/800px-RBG-LED.jpg',
  'zener-diode': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/1N829.jpg/800px-1N829.jpg',
  'schottky-diode': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Schottky.jpg/800px-Schottky.jpg',
  'photodiode': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fotodio.jpg/800px-Fotodio.jpg',
  'transistor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Transbauformen.jpg/800px-Transbauformen.jpg',
  'igbt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/IGBT_3300V_1200A_Mitsubishi.jpg/800px-IGBT_3300V_1200A_Mitsubishi.jpg',
  'thyristor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/SCR1369.jpg/800px-SCR1369.jpg',
  'triac': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kyocera_FS-C5200DN_-_Murata_MPS7511_power_supply_board_-_Renesas_BCR12PM-14L-5156.jpg/800px-Kyocera_FS-C5200DN_-_Murata_MPS7511_power_supply_board_-_Renesas_BCR12PM-14L-5156.jpg',
  'phototransistor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fotodio.jpg/800px-Fotodio.jpg',
  'ujt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Unijunction_transistors.jpg/800px-Unijunction_transistors.jpg',
  'tunnel-diode': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/GE_1N3716_tunnel_diode.jpg/800px-GE_1N3716_tunnel_diode.jpg',
  'varactor-diode': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Varicap_Diodes.jpg/800px-Varicap_Diodes.jpg',
  'voltage-regulator': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/7812_voltage_regulator.jpg/800px-7812_voltage_regulator.jpg',
  'dc-power-supply': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Netzgeraet.jpg/800px-Netzgeraet.jpg',
  'relay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Delta_Electronics_DPS-350FB_A_-_board_1_-_OEG_SDT-SS-112M_-_case_removed-3045.jpg/800px-Delta_Electronics_DPS-350FB_A_-_board_1_-_OEG_SDT-SS-112M_-_case_removed-3045.jpg',
  'dc-motor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Electric_motor_cycle_2.png/800px-Electric_motor_cycle_2.png',
  'buzzer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/2007-07-24_Piezoelectric_buzzer.jpg/800px-2007-07-24_Piezoelectric_buzzer.jpg',
  'solenoid': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Solenoid-1.png/800px-Solenoid-1.png',
  'push-button': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arcade_video_game_buttons.jpg/800px-Arcade_video_game_buttons.jpg',
  'electromagnet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Electromagnet-with-9V-battery.jpg/800px-Electromagnet-with-9V-battery.jpg',
  'fuse': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tektronixoscilloscope442backfuse-ccbysawikipedia.jpg/800px-Tektronixoscilloscope442backfuse-ccbysawikipedia.jpg',
  'circuit-breaker': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Jtecul.jpg',
  'temperature-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Thermocouple0002.jpg/800px-Thermocouple0002.jpg',
  'accelerometer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Acelerometro_1.JPG/800px-Acelerometro_1.JPG',
  'gyroscope': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/3D_Gyroscope.png/800px-3D_Gyroscope.png',
  'ldr': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LDR_1480405_6_7_HDR_Enhancer_1.jpg/800px-LDR_1480405_6_7_HDR_Enhancer_1.jpg',
  'gas-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/KP836_Portable_Multi-gas_Detector.jpg/800px-KP836_Portable_Multi-gas_Detector.jpg',
  'flex-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Flex_Sensor.jpg/800px-Flex_Sensor.jpg',
  'ir-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Front-Fresnel_type.JPG/800px-Front-Fresnel_type.JPG',
  'hall-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Hall_effect_1.gif/800px-Hall_effect_1.gif',
  'op-amp': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ua741_opamp.jpg/800px-Ua741_opamp.jpg',
  '555-timer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Signetics_NE555N.JPG/800px-Signetics_NE555N.JPG',
  'adc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/WM_WM8775SEDS-AB.jpg/800px-WM_WM8775SEDS-AB.jpg',
  'fpga': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Altera_StratixIVGX_FPGA.jpg/800px-Altera_StratixIVGX_FPGA.jpg',
  'oled': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/OEL_right.JPG/800px-OEL_right.JPG',
  '7-segment': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Digital_clock_changing_numbers.jpg/800px-Digital_clock_changing_numbers.jpg',
  'led-matrix': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/MK38527_LED_Display.jpg/800px-MK38527_LED_Display.jpg',
  'breadboard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Breadboard.png/800px-Breadboard.png',
  'antenna': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/A_television_antenna_in_Kakinada.JPG/800px-A_television_antenna_in_Kakinada.JPG',
  'battery': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Batteries.jpg/800px-Batteries.jpg',
  'audio-amplifier-ic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/McIntosh_MC2505.jpg/800px-McIntosh_MC2505.jpg',
  'flip-flop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Transistor_Bistable_interactive_animated-en.svg/800px-Transistor_Bistable_interactive_animated-en.svg.png',
  'encoder': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/4to2_Simple_Encoder.png/800px-4to2_Simple_Encoder.png',
  'touch-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/TouchScreen_projective_capacitive.svg/800px-TouchScreen_projective_capacitive.svg.png',
  'proximity-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/TouchScreen_projective_capacitive.svg/800px-TouchScreen_projective_capacitive.svg.png',
  'pressure-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mechanical_transducer._-_DPLA_-_cfb11a91bbe9ab7384f897fb55faf74c_%28page_4%29.jpg/800px-Mechanical_transducer._-_DPLA_-_cfb11a91bbe9ab7384f897fb55faf74c_%28page_4%29.jpg',
  'humidity-sensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Haar-Hygrometer.jpg/800px-Haar-Hygrometer.jpg',
  'lcd': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mirai_LCD_TV.JPG/800px-Mirai_LCD_TV.JPG',
  'stepper-motor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Drive.png/800px-Drive.png',
  'servo-motor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Micro_servo.jpg/800px-Micro_servo.jpg',
  'mosfet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/D2PAK.JPG/800px-D2PAK.JPG',
  'wirewound-resistor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Electronic-Axial-Lead-Resistors-Array.png/800px-Electronic-Axial-Lead-Resistors-Array.png',
  'rheostat': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Electronic-Component-Potentiometer.jpg/800px-Electronic-Component-Potentiometer.jpg',
  'decoder': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tungsram_74154PC.jpg/800px-Tungsram_74154PC.jpg',
  'register': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/ICIC-DI16-X-K595-01_%2816235272118%29.jpg/800px-ICIC-DI16-X-K595-01_%2816235272118%29.jpg',
  'speaker': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Isophon_-_bass_driver_%285881022630%29.jpg/800px-Isophon_-_bass_driver_%285881022630%29.jpg',
  'contactor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Telemecanique_contactor.JPG/800px-Telemecanique_contactor.JPG',
  'jumper-wire': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jumper_Wires_with_Crocodile_Clips.jpg/800px-Jumper_Wires_with_Crocodile_Clips.jpg',
};

const UA = 'ElectronicsInfo/1.0 (educational project)';

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/**
 * Download an image, falling back from original to thumbnail if needed
 */
async function downloadImage(thumbUrl) {
  // Derive the original (non-thumb) URL
  const originalUrl = thumbUrl.includes('/thumb/')
    ? thumbUrl.replace('/thumb/', '/').replace(/\/\d+px-[^/]+$/, '')
    : thumbUrl;

  // Try original URL first (always works if file exists)
  if (originalUrl !== thumbUrl) {
    try {
      const resp = await fetch(originalUrl, { headers: { 'User-Agent': UA } });
      if (resp.ok) {
        const buffer = Buffer.from(await resp.arrayBuffer());
        if (buffer.length > 1000) return buffer;
      }
    } catch { /* try thumb */ }
  }

  // Fallback to the thumbnail URL
  const resp = await fetch(thumbUrl, { headers: { 'User-Agent': UA } });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${thumbUrl}`);
  return Buffer.from(await resp.arrayBuffer());
}

async function convertToWebp(buffer, outputPath) {
  await sharp(buffer)
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 80, effort: 4 })
    .toFile(outputPath);
}

async function main() {
  console.log('=== Compile & Download Component Images ===\n');
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const entries = Object.entries(IMAGE_MAP);
  let success = 0;
  let failed = 0;

  for (let i = 0; i < entries.length; i++) {
    const [componentId, url] = entries[i];
    const outputPath = path.join(OUT_DIR, `${componentId}.webp`);

    if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 2000) {
      console.log(`[${i + 1}/${entries.length}] ✓ Already: ${componentId}.webp`);
      success++;
      continue;
    }

    process.stdout.write(`[${i + 1}/${entries.length}] ${componentId}... `);

    try {
      const buffer = await downloadImage(url);
      await convertToWebp(buffer, outputPath);
      console.log(`✓ (${(buffer.length / 1024).toFixed(0)}KB)`);
      success++;
    } catch (err) {
      console.log(`✗ ${err.message}`);
      failed++;
    }

    // Be nice to servers
    if (i % 5 === 4) await sleep(500);
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total: ${entries.length}, Success: ${success}, Failed: ${failed}`);

  // Check which files were actually created
  const created = fs.readdirSync(OUT_DIR).filter(f => f.endsWith('.webp'));
  console.log(`Files on disk: ${created.length}`);
  if (created.length < 86) {
    console.log('\nMissing from disk:');
    // Read component IDs
    const compPath = path.resolve(__dirname, '..', 'src', 'shared', 'constants', 'components.js');
    const compContent = fs.readFileSync(compPath, 'utf-8');
    const ids = [...compContent.matchAll(/'([a-z][a-z0-9-]*)':\s*\{/g)].map(m => m[1]);
    for (const id of ids) {
      if (!fs.existsSync(path.join(OUT_DIR, `${id}.webp`)) || fs.statSync(path.join(OUT_DIR, `${id}.webp`)).size <= 2000) {
        console.log(`  - ${id}.webp MISSING`);
      }
    }
  }
}

main().catch(console.error);
