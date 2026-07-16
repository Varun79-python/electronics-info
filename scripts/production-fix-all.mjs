/**
 * PRODUCTION FIX ALL — Comprehensive image replacement script
 * Handles rate limits with exponential backoff.
 * Usage: node scripts/production-fix-all.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve(import.meta.dirname, '..', 'public', 'images', 'components');
const UA = 'ElectronicsInfo/1.0 (educational project; electronics-info.vercel.app)';

const replacements = [
  // ===== PHASE 1: CRITICAL (wrong component) =====
  {
    id: 'audio-amplifier-ic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Micro-electric_T3000_-_board_-_National_Semiconductor_LM386N-0694.jpg',
    desc: 'LM386 audio amplifier IC on PCB',
    priority: 1,
  },
  {
    id: 'pressure-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Adafruit_BMP085_pressure_sensor_module_2.jpg',
    desc: 'BMP085/BMP180 pressure sensor module',
    priority: 1,
  },
  {
    id: 'ultrasonic-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/SparkFun_HC-SR04_Ultrasonic-Sensor_13959-01a.jpg',
    desc: 'HC-SR04 ultrasonic sensor module',
    priority: 1,
  },

  // ===== PHASE 2: DIAGRAM→PHOTO =====
  {
    id: 'dc-motor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/DC_motors_from_a_laptop_CD-ROM_drive.jpg',
    desc: 'Real DC motors from CD-ROM drive',
    priority: 2,
  },
  {
    id: 'stepper-motor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/CD_drive_DC_5_V_2-phase_4-wire_Stepper_motor_with_Leadscrew_-_%281%29.jpg',
    desc: 'Real stepper motor with leadscrew',
    priority: 2,
  },
  {
    id: 'solenoid',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Solenoid-with-core.JPG',
    desc: 'Real solenoid with core',
    priority: 2,
  },
  {
    id: 'gyroscope',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/GY-521_MPU-6050_Module_3_Axis_Gyroscope_%2B_Accelerometer_0487.jpg',
    desc: 'MPU-6050 gyroscope + accelerometer module',
    priority: 2,
  },
  {
    id: 'flip-flop',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/USSR_K155TM2_%28%3D7474%29.jpg',
    desc: '7474-equivalent D flip-flop IC',
    priority: 2,
  },
  {
    id: 'encoder',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Rotary_encoder.jpg',
    desc: 'Rotary encoder module',
    priority: 2,
  },
  {
    id: 'connector',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Type_A_USB_connector.jpg',
    desc: 'USB Type-A connector',
    priority: 2,
  },

  // ===== PHASE 3: SUBOPTIMAL/DUPLICATE =====
  {
    id: 'wirewound-resistor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Ceramic_resistor_open.JPG',
    desc: 'Wirewound/ceramic resistor cross-section',
    priority: 3,
  },
  {
    id: 'humidity-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Dht11.jpg',
    desc: 'DHT11 digital temperature and humidity sensor',
    priority: 3,
  },
  {
    id: 'gas-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Gas-Sensor.jpg',
    desc: 'Gas sensor module (MQ-type)',
    priority: 3,
  },

  // ===== PHASE 4: LOW QUALITY UPGRADES =====
  {
    id: 'ceramic-resonator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/A_16MHz_ceramic_resonator.jpg',
    desc: '16MHz ceramic resonator (higher res)',
    priority: 4,
  },
  {
    id: 'crystal-oscillator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/16MHZ_Crystal.jpg',
    desc: '16MHz crystal oscillator (higher res)',
    priority: 4,
  },
  {
    id: 'battery',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Batteries.jpg',
    desc: 'Various batteries (higher res)',
    priority: 4,
  },
  {
    id: 'circuit-breaker',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Jtecul.jpg',
    desc: 'Circuit breaker (higher res)',
    priority: 4,
  },
  {
    id: 'ir-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Front-Fresnel_type.JPG',
    desc: 'IR sensor Fresnel lens (higher res)',
    priority: 4,
  },
  {
    id: 'fuse',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Tektronixoscilloscope442backfuse-ccbysawikipedia.jpg',
    desc: 'Fuse (higher res)',
    priority: 4,
  },
  {
    id: 'antenna',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/A_television_antenna_in_Kakinada.JPG',
    desc: 'TV antenna (higher res)',
    priority: 4,
  },
  {
    id: 'register',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/ICIC-DI16-X-K595-01_%2816235272118%29.jpg',
    desc: 'Shift register IC (higher res)',
    priority: 4,
  },
];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function downloadWithRetry(url, maxRetries = 5) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);

      const resp = await fetch(url, {
        headers: { 'User-Agent': UA },
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (resp.ok) {
        const buffer = Buffer.from(await resp.arrayBuffer());
        if (buffer.length > 2000) return buffer;
        console.log(`  Too small (${buffer.length} bytes), retry ${attempt}/${maxRetries}`);
      } else if (resp.status === 429) {
        const wait = Math.min(attempt * 10000 + Math.random() * 5000, 60000);
        console.log(`  Rate limited (429), waiting ${(wait/1000).toFixed(0)}s...`);
        await sleep(wait);
      } else if (resp.status === 404) {
        throw new Error(`HTTP 404 - File not found`);
      } else {
        throw new Error(`HTTP ${resp.status}`);
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log(`  Request timed out, retry ${attempt}/${maxRetries}`);
      } else if (attempt === maxRetries) {
        throw err;
      } else {
        console.log(`  ${err.message}, retry ${attempt + 1}/${maxRetries}...`);
      }
      await sleep(attempt * 3000 + Math.random() * 2000);
    }
  }
  throw new Error(`Failed after ${maxRetries} retries`);
}

async function main() {
  console.log('=== PRODUCTION IMAGE FIX — ALL PHASES ===\n');
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Process by priority
  const byPriority = {};
  for (const r of replacements) {
    (byPriority[r.priority] = byPriority[r.priority] || []).push(r);
  }

  const priorityNames = {
    1: 'CRITICAL — Wrong Components',
    2: 'DIAGRAM → PHOTO',
    3: 'SUBOPTIMAL / DUPLICATE',
    4: 'LOW QUALITY UPGRADE',
  };

  let totalSuccess = 0;
  let totalFailed = 0;

  for (const [p, items] of Object.entries(byPriority).sort((a, b) => a[0] - b[0])) {
    const pName = priorityNames[p] || `Phase ${p}`;
    console.log(`\n╔══════════════════════════════════════╗`);
    console.log(`║  PHASE ${p}: ${pName}`);
    console.log(`╚══════════════════════════════════════╝\n`);

    let phaseSuccess = 0;
    let phaseFailed = 0;

    for (let i = 0; i < items.length; i++) {
      const { id, url, desc } = items[i];
      const outputPath = path.join(OUT_DIR, `${id}.webp`);

      process.stdout.write(`[${i + 1}/${items.length}] ${id} — ${desc}... `);

      try {
        const buffer = await downloadWithRetry(url);
        const dlKB = (buffer.length / 1024).toFixed(1);
        process.stdout.write(`(${dlKB} KB) `);

        const info = await sharp(buffer)
          .resize({ width: 600, withoutEnlargement: true })
          .webp({ quality: 80, effort: 4 })
          .toFile(outputPath);

        console.log(`✓ ${(info.size / 1024).toFixed(1)} KB (${info.width}×${info.height})`);
        phaseSuccess++;
        totalSuccess++;
      } catch (err) {
        console.log(`✗ ${err.message}`);
        phaseFailed++;
        totalFailed++;
      }

      // Random delay 4-8 seconds between requests to avoid rate limiting
      if (i < items.length - 1) {
        const delay = 4000 + Math.random() * 4000;
        await sleep(delay);
      }
    }

    console.log(`\n→ Phase ${p} complete: ${phaseSuccess} succeeded, ${phaseFailed} failed`);
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`FINAL RESULTS`);
  console.log(`${'='.repeat(50)}`);
  console.log(`Total: ${replacements.length}, Success: ${totalSuccess}, Failed: ${totalFailed}`);

  if (totalFailed > 0) {
    console.log('\nFailed items:');
    for (const r of replacements) {
      const p = path.join(OUT_DIR, `${r.id}.webp`);
      if (!fs.existsSync(p) || fs.statSync(p).size <= 2000) {
        console.log(`  ✗ ${r.id} — ${r.desc}`);
      }
    }
  } else {
    console.log('\n✅ ALL IMAGES REPLACED SUCCESSFULLY!');
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
