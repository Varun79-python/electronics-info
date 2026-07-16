/**
 * Fetch real component images from Wikipedia Commons (REST API approach)
 * Uses Wikimedia REST API which is more reliable for image access
 * Converts to WebP (600px wide, quality 80)
 * Usage: node scripts/fetch-images.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', 'public', 'images', 'components');

// Component ID → Wikipedia page title mapping
const WIKI_TITLES = {
  'resistor': 'Resistor',
  'capacitor': 'Capacitor',
  'inductor': 'Inductor',
  'transformer': 'Transformer',
  'potentiometer': 'Potentiometer',
  'varistor': 'Varistor',
  'thermistor': 'Thermistor',
  'rheostat': 'Rheostat',
  'trimmer': 'Trimmer_(electronics)',
  'wirewound-resistor': 'Wirewound_resistor',
  'ceramic-resonator': 'Ceramic_resonator',
  'crystal-oscillator': 'Crystal_oscillator',
  'diode': 'Diode',
  'led': 'Light-emitting_diode',
  'zener-diode': 'Zener_diode',
  'schottky-diode': 'Schottky_diode',
  'photodiode': 'Photodiode',
  'transistor': 'Transistor',
  'mosfet': 'MOSFET',
  'jfet': 'JFET',
  'igbt': 'Insulated-gate_bipolar_transistor',
  'thyristor': 'Thyristor',
  'triac': 'TRIAC',
  'diac': 'DIAC',
  'phototransistor': 'Phototransistor',
  'ujt': 'Unijunction_transistor',
  'tunnel-diode': 'Tunnel_diode',
  'varactor-diode': 'Varicap',
  'voltage-regulator': 'Voltage_regulator',
  'dc-power-supply': 'DC_power_supply',
  'ac-power-supply': 'AC_power_supply',
  'relay': 'Relay',
  'dc-motor': 'DC_motor',
  'stepper-motor': 'Stepper_motor',
  'servo-motor': 'Servo_(radio_control)',
  'speaker': 'Loudspeaker',
  'buzzer': 'Buzzer',
  'solenoid': 'Solenoid',
  'contactor': 'Contactor',
  'switch': 'Switch',
  'push-button': 'Push-button',
  'electromagnet': 'Electromagnet',
  'fuse': 'Fuse_(electrical)',
  'circuit-breaker': 'Circuit_breaker',
  'temperature-sensor': 'Thermocouple',
  'pressure-sensor': 'Pressure_sensor',
  'ultrasonic-sensor': 'Ultrasonic_transducer',
  'accelerometer': 'Accelerometer',
  'gyroscope': 'Gyroscope',
  'ldr': 'Photoresistor',
  'proximity-sensor': 'Proximity_sensor',
  'humidity-sensor': 'Hygrometer',
  'gas-sensor': 'Gas_detector',
  'ir-sensor': 'Infrared_sensor',
  'hall-sensor': 'Hall_effect_sensor',
  'flex-sensor': 'Flex_sensor',
  'touch-sensor': 'Touch_switch',
  'op-amp': 'Operational_amplifier',
  '555-timer': '555_timer_IC',
  'adc': 'Analog-to-digital_converter',
  'dac': 'Digital-to-analog_converter',
  'comparator': 'Comparator',
  'ldo-regulator': 'Low-dropout_regulator',
  'microcontroller': 'Microcontroller',
  'fpga': 'Field-programmable_gate_array',
  'logic-gate-ic': '7400-series_integrated_circuits',
  'audio-amplifier-ic': 'Audio_power_amplifier',
  'motor-driver-ic': 'Motor_driver',
  'logic-gates': 'Logic_gate',
  'flip-flop': 'Flip-flop_(electronics)',
  'counter': 'Counter_(digital)',
  'register': 'Processor_register',
  'multiplexer': 'Multiplexer',
  'demultiplexer': 'Demultiplexer',
  'encoder': 'Encoder_(digital)',
  'decoder': 'Decoder',
  'lcd': 'Liquid-crystal_display',
  'oled': 'OLED',
  '7-segment': 'Seven-segment_display',
  'led-matrix': 'LED_display',
  'breadboard': 'Breadboard',
  'pcb': 'Printed_circuit_board',
  'jumper-wire': 'Jumper_(computing)',
  'connector': 'Electrical_connector',
  'antenna': 'Antenna_(radio)',
  'battery': 'Battery_(electricity)',
};

const UA = 'ElectronicsInfo/1.0 (educational project; electronics-info.vercel.app)';

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/**
 * Try the REST API summary endpoint which gives us the pageimage
 */
async function getPageImageViaRest(title) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!resp.ok) {
    if (resp.status === 429) {
      console.log(`  Rate limited on ${title}, waiting 10s...`);
      await sleep(10000);
      const retryResp = await fetch(url, { headers: { 'User-Agent': UA } });
      if (!retryResp.ok) return null;
      const data = await retryResp.json();
      return data?.originalimage?.source || data?.thumbnail?.source || null;
    }
    return null;
  }
  const data = await resp.json();
  return data?.originalimage?.source || data?.thumbnail?.source || null;
}

/**
 * Try the REST API page thumbnail endpoint directly
 */
async function getThumbnailViaRest(title, width = 600) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/thumbnail/${encodeURIComponent(title)}/${width}`;
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!resp.ok) return null;
  // Returns the image binary directly
  const buffer = Buffer.from(await resp.arrayBuffer());
  return { buffer, contentType: resp.headers.get('content-type') };
}

async function downloadImage(url) {
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return Buffer.from(await resp.arrayBuffer());
}

async function convertToWebp(buffer, outputPath, width = 600) {
  await sharp(buffer)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 4 })
    .toFile(outputPath);
}

async function processComponent(componentId, wikiTitle) {
  const outputPath = path.join(OUT_DIR, `${componentId}.webp`);

  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 2000) {
    console.log(`  ✓ Already exists: ${componentId}.webp`);
    return true;
  }

  // Strategy 1: Get thumbnail directly via REST API
  try {
    const thumb = await getThumbnailViaRest(wikiTitle);
    if (thumb && thumb.buffer && thumb.buffer.length > 2000) {
      await convertToWebp(thumb.buffer, outputPath);
      console.log(`  ✓ ${componentId}.webp (via thumbnail API)`);
      return true;
    }
  } catch { /* fall through */ }

  // Strategy 2: Get page summary to find original image URL
  try {
    const imageUrl = await getPageImageViaRest(wikiTitle);
    if (imageUrl) {
      // Convert to 800px width version
      const sizedUrl = imageUrl.replace('/commons/', '/commons/thumb/') + '/800px-' + imageUrl.split('/').pop();
      const altUrl = imageUrl.replace('/commons/', '/commons/thumb/').replace(/(\/[^/]+)$/, '/800px$1');

      for (const url of [sizedUrl, altUrl, imageUrl]) {
        try {
          const buffer = await downloadImage(url);
          if (buffer.length > 2000) {
            await convertToWebp(buffer, outputPath);
            console.log(`  ✓ ${componentId}.webp (via summary API)`);
            return true;
          }
        } catch { continue }
      }
    }
  } catch { /* fall through */ }

  console.log(`  ✗ No image for ${componentId} (${wikiTitle})`);
  return false;
}

/**
 * Try Commons search as last resort
 */
async function searchAndDownload(componentId, query) {
  const outputPath = path.join(OUT_DIR, `${componentId}.webp`);
  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 2000) return true;

  try {
    const searchUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    const resp = await fetch(searchUrl, { headers: { 'User-Agent': UA } });
    if (!resp.ok) return false;
    const data = await resp.json();
    const imgUrl = data?.originalimage?.source || data?.thumbnail?.source;
    if (!imgUrl) return false;

    const buffer = await downloadImage(imgUrl);
    if (buffer.length <= 2000) return false;
    await convertToWebp(buffer, outputPath);
    console.log(`  ✓ ${componentId}.webp (alt search: ${query})`);
    return true;
  } catch {
    return false;
  }
}

// Alternative Wikipedia titles to try for failed components
const ALT_SEARCHES = {
  'varistor': 'Varistor',
  'wirewound-resistor': 'Wirewound_resistor',
  'rheostat': 'Potentiometer',
  'ceramic-resonator': 'Ceramic_resonator',
  'crystal-oscillator': 'Crystal_oscillator',
  'ujt': 'Unijunction_transistor',
  'tunnel-diode': 'Tunnel_diode',
  'varactor-diode': 'Varicap',
  'voltage-regulator': 'Voltage_regulator',
  'dc-power-supply': 'Power_supply',
  'ac-power-supply': 'Power_supply',
  'dc-motor': 'DC_motor',
  'stepper-motor': 'Stepper_motor',
  'servo-motor': 'Servomotor',
  'speaker': 'Loudspeaker',
  'solenoid': 'Solenoid',
  'contactor': 'Contactor',
  'push-button': 'Push-button',
  'electromagnet': 'Electromagnet',
  'fuse': 'Fuse_(electrical)',
  'circuit-breaker': 'Circuit_breaker',
  'temperature-sensor': 'Temperature_sensor',
  'pressure-sensor': 'Pressure_sensor',
  'ultrasonic-sensor': 'Ultrasonic_sensor',
  'accelerometer': 'Accelerometer',
  'gyroscope': 'Gyroscope',
  'ldr': 'Photoresistor',
  'proximity-sensor': 'Proximity_sensor',
  'humidity-sensor': 'Hygrometer',
  'gas-sensor': 'Gas_detector',
  'ir-sensor': 'Infrared_sensor',
  'hall-sensor': 'Hall_effect_sensor',
  'flex-sensor': 'Flex_sensor',
  'touch-sensor': 'Touch_switch',
  'op-amp': 'Operational_amplifier',
  '555-timer': '555_timer_IC',
  'adc': 'Analog-to-digital_converter',
  'dac': 'Digital-to-analog_converter',
  'comparator': 'Comparator',
  'ldo-regulator': 'Low-dropout_regulator',
  'fpga': 'Field-programmable_gate_array',
  'audio-amplifier-ic': 'Audio_power_amplifier',
  'motor-driver-ic': 'Motor_driver',
  'logic-gates': 'Logic_gate',
  'flip-flop': 'Flip-flop_(electronics)',
  'counter': 'Counter_(digital)',
  'register': 'Shift_register',
  'multiplexer': 'Multiplexer',
  'demultiplexer': 'Demultiplexer',
  'encoder': 'Encoder_(digital)',
  'decoder': 'Decoder',
  'lcd': 'Liquid-crystal_display',
  'oled': 'OLED',
  '7-segment': 'Seven-segment_display',
  'led-matrix': 'LED_display',
  'breadboard': 'Breadboard',
  'pcb': 'Printed_circuit_board',
  'jumper-wire': 'Jumper_wire',
  'connector': 'Electrical_connector',
  'antenna': 'Antenna_(radio)',
  'battery': 'Battery_(electricity)',
  'logic-gate-ic': '7400-series_integrated_circuits',
  'microcontroller': 'Microcontroller',
};

async function main() {
  console.log('=== Electronics Component Image Fetcher v2 (REST API) ===\n');
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const ids = Object.entries(WIKI_TITLES);
  let success = 0;
  const existing = ids.filter(([id]) =>
    fs.existsSync(path.join(OUT_DIR, `${id}.webp`)) &&
    fs.statSync(path.join(OUT_DIR, `${id}.webp`)).size > 2000
  );
  success = existing.length;
  console.log(`Found ${existing.length} existing valid images`);

  const toProcess = ids.filter(([id]) => {
    const p = path.join(OUT_DIR, `${id}.webp`);
    return !fs.existsSync(p) || fs.statSync(p).size <= 2000;
  });

  console.log(`Need to fetch ${toProcess.length} images\n`);

  // Process with EXTREME patience to avoid rate limiting
  for (let i = 0; i < toProcess.length; i++) {
    const [id, title] = toProcess[i];
    console.log(`[${i + 1}/${toProcess.length}] ${id}...`);

    // Try primary title
    let ok = await processComponent(id, title);
    await sleep(2000); // 2s delay between requests

    // Try alternative title if primary failed
    if (!ok && ALT_SEARCHES[id]) {
      console.log(`  Trying alt: ${ALT_SEARCHES[id]}`);
      ok = await processComponent(id, ALT_SEARCHES[id]);
      await sleep(2000);
    }

    if (ok) success++;

    if ((i + 1) % 10 === 0) {
      console.log(`\n--- Checkpoint: ${success}/${i + 1 + existing.length} total ---\n`);
      console.log('Sleeping 10s to be nice to Wikipedia...');
      await sleep(10000);
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total: ${ids.length}, Success: ${success}/${ids.length}`);

  const stillFailed = ids
    .filter(([id]) => {
      const p = path.join(OUT_DIR, `${id}.webp`);
      return !fs.existsSync(p) || fs.statSync(p).size <= 2000;
    })
    .map(([id]) => id);

  if (stillFailed.length > 0) {
    console.log(`\nStill missing (${stillFailed.length}): ${stillFailed.join(', ')}`);
  } else {
    console.log('All images fetched successfully!');
  }
}

main().catch(console.error);
