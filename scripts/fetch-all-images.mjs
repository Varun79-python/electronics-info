/**
 * Fetch ALL 86 component images from Wikimedia Commons
 * Uses original (full-res) URLs to avoid thumbnail issues
 * Adds rate-limit handling with retry
 * Converts to WebP 600px wide, quality 80
 *
 * Usage: node scripts/fetch-all-images.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', 'public', 'images', 'components');
const UA = 'ElectronicsInfo/1.0 (educational project; contact@electronicsinfo.app)';

// component_id → ORIGINAL Wikimedia Commons file URL (not thumbnail)
const IMAGE_URLS = {
  'resistor': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Electronic-Axial-Lead-Resistors-Array.png',
  'capacitor': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Capacitors_%287189597135%29.jpg',
  'inductor': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Electronic_component_inductors.jpg',
  'transformer': 'https://upload.wikimedia.org/wikipedia/commons/2/20/Philips_N4422_-_power_supply_transformer-2098.jpg',
  'potentiometer': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Electronic-Component-Potentiometer.jpg',
  'varistor': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Varistor_S14K385_photo.jpg',
  'thermistor': 'https://upload.wikimedia.org/wikipedia/commons/8/86/NTC_bead.jpg',
  'rheostat': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Electronic-Component-Potentiometer.jpg',
  'trimmer': 'https://upload.wikimedia.org/wikipedia/commons/3/36/12_board_mounted_potentiometers.jpg',
  'wirewound-resistor': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Electronic-Axial-Lead-Resistors-Array.png',
  'ceramic-resonator': 'https://upload.wikimedia.org/wikipedia/commons/8/83/A_16MHz_ceramic_resonator.jpg',
  'crystal-oscillator': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/16MHZ_Crystal.jpg',
  'diode': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Diode-closeup.jpg',
  'led': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/RBG-LED.jpg',
  'zener-diode': 'https://upload.wikimedia.org/wikipedia/commons/1/1f/1N829.jpg',
  'schottky-diode': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Schottky.jpg',
  'photodiode': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Fotodio.jpg',
  'transistor': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Transbauformen.jpg',
  'mosfet': 'https://upload.wikimedia.org/wikipedia/commons/4/4f/D2PAK.JPG',
  'jfet': 'https://upload.wikimedia.org/wikipedia/commons/4/49/JFet_transistoren.jpg',
  'igbt': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/IGBT_3300V_1200A_Mitsubishi.jpg',
  'thyristor': 'https://upload.wikimedia.org/wikipedia/commons/5/56/SCR1369.jpg',
  'triac': 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Kyocera_FS-C5200DN_-_Murata_MPS7511_power_supply_board_-_Renesas_BCR12PM-14L-5156.jpg',
  'diac': 'https://upload.wikimedia.org/wikipedia/commons/e/e5/DB3_DIAC.jpg',
  'phototransistor': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Fotodio.jpg',
  'ujt': 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Unijunction_transistors.jpg',
  'tunnel-diode': 'https://upload.wikimedia.org/wikipedia/commons/b/bd/GE_1N3716_tunnel_diode.jpg',
  'varactor-diode': 'https://upload.wikimedia.org/wikipedia/commons/b/be/Varicap_Diodes.jpg',
  'voltage-regulator': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/7812_voltage_regulator.jpg',
  'dc-power-supply': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Netzgeraet.jpg',
  'ac-power-supply': 'https://upload.wikimedia.org/wikipedia/commons/2/2b/HP_Rainbow_%284430379883%29.jpg',
  'relay': 'https://upload.wikimedia.org/wikipedia/commons/3/38/Delta_Electronics_DPS-350FB_A_-_board_1_-_OEG_SDT-SS-112M_-_case_removed-3045.jpg',
  'dc-motor': 'https://upload.wikimedia.org/wikipedia/commons/0/04/Electric_motor_cycle_2.png',
  'stepper-motor': 'https://upload.wikimedia.org/wikipedia/commons/8/85/Drive.png',
  'servo-motor': 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Micro_servo.jpg',
  'speaker': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Isophon_-_bass_driver_%285881022630%29.jpg',
  'buzzer': 'https://upload.wikimedia.org/wikipedia/commons/d/d3/2007-07-24_Piezoelectric_buzzer.jpg',
  'solenoid': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Solenoid-1.png',
  'contactor': 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Telemecanique_contactor.JPG',
  'switch': 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Electronic_switch.jpg',
  'push-button': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Arcade_video_game_buttons.jpg',
  'electromagnet': 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Electromagnet-with-9V-battery.jpg',
  'fuse': 'https://upload.wikimedia.org/wikipedia/commons/b/be/Tektronixoscilloscope442backfuse-ccbysawikipedia.jpg',
  'circuit-breaker': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Jtecul.jpg',
  'temperature-sensor': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Thermocouple0002.jpg',
  'pressure-sensor': 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Mechanical_transducer._-_DPLA_-_cfb11a91bbe9ab7384f897fb55faf74c_%28page_4%29.jpg',
  'ultrasonic-sensor': 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Ultrasound_Scanner.jpg',
  'accelerometer': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Acelerometro_1.JPG',
  'gyroscope': 'https://upload.wikimedia.org/wikipedia/commons/e/e2/3D_Gyroscope.png',
  'ldr': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/LDR_1480405_6_7_HDR_Enhancer_1.jpg',
  'proximity-sensor': 'https://upload.wikimedia.org/wikipedia/commons/4/48/TouchScreen_projective_capacitive.svg',
  'humidity-sensor': 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Haar-Hygrometer.jpg',
  'gas-sensor': 'https://upload.wikimedia.org/wikipedia/commons/8/83/KP836_Portable_Multi-gas_Detector.jpg',
  'ir-sensor': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Front-Fresnel_type.JPG',
  'hall-sensor': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hall_effect_1.gif',
  'flex-sensor': 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Flex_Sensor.jpg',
  'touch-sensor': 'https://upload.wikimedia.org/wikipedia/commons/4/48/TouchScreen_projective_capacitive.svg',
  'op-amp': 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ua741_opamp.jpg',
  '555-timer': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Signetics_NE555N.JPG',
  'adc': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/WM_WM8775SEDS-AB.jpg',
  'dac': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/DAC-1138KX_-_pcb_top_view.jpg',
  'comparator': 'https://upload.wikimedia.org/wikipedia/commons/4/45/LM393_comparator.jpg',
  'ldo-regulator': 'https://upload.wikimedia.org/wikipedia/commons/0/0a/AMS1117.jpg',
  'microcontroller': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Componentes.JPG',
  'fpga': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Altera_StratixIVGX_FPGA.jpg',
  'logic-gate-ic': 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Logic_gates_-_7400_series_chips.jpg',
  'audio-amplifier-ic': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/McIntosh_MC2505.jpg',
  'motor-driver-ic': 'https://upload.wikimedia.org/wikipedia/commons/1/19/Canon_PowerShot_S45_-_main_board_-_Rohm_BD6753KV-91775.jpg',
  'logic-gates': 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Logic_gates_-_7400_series_chips.jpg',
  'flip-flop': 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Transistor_Bistable_interactive_animated-en.svg',
  'counter': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/74HC161_counter.jpg',
  'register': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/ICIC-DI16-X-K595-01_%2816235272118%29.jpg',
  'multiplexer': 'https://upload.wikimedia.org/wikipedia/commons/8/87/Multiplexer_IC.jpg',
  'demultiplexer': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Demultiplexer_IC.jpg',
  'encoder': 'https://upload.wikimedia.org/wikipedia/commons/a/a8/4to2_Simple_Encoder.png',
  'decoder': 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Tungsram_74154PC.jpg',
  'lcd': 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Mirai_LCD_TV.JPG',
  'oled': 'https://upload.wikimedia.org/wikipedia/commons/0/0b/OEL_right.JPG',
  '7-segment': 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Digital_clock_changing_numbers.jpg',
  'led-matrix': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/MK38527_LED_Display.jpg',
  'breadboard': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Breadboard.png',
  'pcb': 'https://upload.wikimedia.org/wikipedia/commons/8/89/PCB_design.jpg',
  'jumper-wire': 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jumper_Wires_with_Crocodile_Clips.jpg',
  'connector': 'https://upload.wikimedia.org/wikipedia/commons/b/bf/ConnectorSymbols.svg',
  'antenna': 'https://upload.wikimedia.org/wikipedia/commons/b/b6/A_television_antenna_in_Kakinada.JPG',
  'battery': 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Batteries.jpg',
};

const TOTAL = Object.keys(IMAGE_URLS).length;

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const resp = await fetch(url, { headers: { 'User-Agent': UA } });
      if (resp.ok) {
        const buffer = Buffer.from(await resp.arrayBuffer());
        if (buffer.length > 2000) return buffer;
        console.log(`    Too small (${buffer.length} bytes), retry ${attempt}/${maxRetries}`);
      } else if (resp.status === 429) {
        const wait = attempt * 5000;
        console.log(`    Rate limited (429), waiting ${wait/1000}s...`);
        await sleep(wait);
      } else {
        throw new Error(`HTTP ${resp.status}`);
      }
    } catch (err) {
      if (attempt === maxRetries) throw err;
      console.log(`    ${err.message}, retry ${attempt + 1}/${maxRetries}...`);
      await sleep(2000 * attempt);
    }
  }
  throw new Error(`Failed after ${maxRetries} retries`);
}

async function convertToWebp(buffer, outputPath) {
  await sharp(buffer)
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 80, effort: 4 })
    .toFile(outputPath);
}

async function main() {
  console.log('=== Fetch ALL 86 Component Images ===\n');
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let success = 0;
  let failed = 0;
  const entries = Object.entries(IMAGE_URLS);

  for (let i = 0; i < entries.length; i++) {
    const [id, url] = entries[i];
    const outputPath = path.join(OUT_DIR, `${id}.webp`);

    // Skip if already exists and valid
    if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 3000) {
      console.log(`[${i + 1}/${TOTAL}] ✓ ${id}.webp (exists)`);
      success++;
      continue;
    }

    process.stdout.write(`[${i + 1}/${TOTAL}] ${id}... `);

    try {
      const buffer = await fetchWithRetry(url);
      await convertToWebp(buffer, outputPath);
      console.log(`✓ ${(buffer.length / 1024).toFixed(0)}KB`);
      success++;
    } catch (err) {
      console.log(`✗ ${err.message}`);
      failed++;
    }

    // 3s delay between requests to respect rate limits
    if (i < entries.length - 1) await sleep(3000);
  }

  console.log(`\n=== Summary ===`);
  console.log(`Success: ${success}/${TOTAL}, Failed: ${failed}`);

  if (failed > 0) {
    console.log('\nFailed components:');
    for (const [id] of entries) {
      const p = path.join(OUT_DIR, `${id}.webp`);
      if (!fs.existsSync(p) || fs.statSync(p).size <= 3000) {
        console.log(`  - ${id}`);
      }
    }
  }
}

main().catch(console.error);
