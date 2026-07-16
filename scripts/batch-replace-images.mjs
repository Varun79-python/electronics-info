/**
 * BATCH IMAGE REPLACEMENT SCRIPT v2
 * Downloads and converts all flagged replacement images.
 * 
 * Usage: node scripts/batch-replace-images.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const UA = 'ElectronicsInfo/1.0 (educational project; electronics-info.vercel.app)';
const OUT_DIR = path.resolve(import.meta.dirname, '..', 'public', 'images', 'components');

const replacements = [
  // ===== PHASE 1a: CRITICAL wrong components (remaining 4 of 5) =====
  {
    id: 'lcd',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/16x2_LCD_Display.jpg',
    desc: '16x2 HD44780 character LCD module',
  },
  {
    id: '7-segment',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/7_Segment_LED.jpg',
    desc: 'Standalone 7-segment LED display',
  },
  {
    id: 'audio-amplifier-ic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Micro-electric_T3000_-_board_-_National_Semiconductor_LM386N-0694.jpg',
    desc: 'LM386 audio amplifier IC on board',
  },
  {
    id: 'pressure-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Adafruit_BMP085_pressure_sensor_module_2.jpg',
    desc: 'BMP085/BMP180 pressure sensor module',
  },

  // ===== PHASE 1b: DIAGRAM→PHOTO (8 images) =====
  {
    id: 'dc-motor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/DC_motors_from_a_laptop_CD-ROM_drive.jpg',
    desc: 'Real DC motors from CD-ROM drive',
  },
  {
    id: 'stepper-motor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/CD_drive_DC_5_V_2-phase_4-wire_Stepper_motor_with_Leadscrew_-_%281%29.jpg',
    desc: 'Real stepper motor with leadscrew',
  },
  {
    id: 'solenoid',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Solenoid-with-core.JPG',
    desc: 'Real solenoid with core',
  },
  {
    id: 'gyroscope',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/GY-521_MPU-6050_Module_3_Axis_Gyroscope_%2B_Accelerometer_0487.jpg',
    desc: 'MPU-6050 gyroscope + accelerometer module',
  },
  {
    id: 'flip-flop',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/USSR_K155TM2_%28%3D7474%29.jpg',
    desc: '7474-equivalent D flip-flop IC',
  },
  {
    id: 'encoder',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Rotary_encoder.jpg',
    desc: 'Rotary encoder module',
  },
  {
    id: 'connector',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Type_A_USB_connector.jpg',
    desc: 'USB Type-A connector',
  },
  {
    id: 'hall-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Cyfrowy_czujnik_zbli%C5%BCeniowy_z_efektem_Halla.jpg',
    desc: 'Digital Hall effect proximity sensor module',
  },

  // ===== PHASE 1c: SUBOPTIMAL/DUPLICATE (4 images) =====
  {
    id: 'wirewound-resistor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Ceramic_resistor_open.JPG',
    desc: 'Wirewound/ceramic resistor cross-section',
  },
  {
    id: 'humidity-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Dht11.jpg',
    desc: 'DHT11 digital temperature and humidity sensor',
  },
  {
    id: 'gas-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Gas-Sensor.jpg',
    desc: 'Gas sensor module (MQ-type)',
  },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      if (res.statusCode !== 200) {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location).then(resolve).catch(reject);
          return;
        }
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function main() {
  console.log('=== BATCH IMAGE REPLACEMENT v2 ===\n');
  console.log(`Output: ${OUT_DIR}\n`);
  console.log(`Total: ${replacements.length} images\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < replacements.length; i++) {
    const { id, url, desc } = replacements[i];
    const outputPath = path.join(OUT_DIR, `${id}.webp`);

    process.stdout.write(`[${i + 1}/${replacements.length}] ${id} — ${desc}... `);

    try {
      const buffer = await download(url);
      const sizeKB = (buffer.length / 1024).toFixed(1);
      process.stdout.write(`downloaded ${sizeKB} KB `);

      if (buffer.length < 2000) {
        console.log(`✗ TOO SMALL (${buffer.length} bytes)`);
        failed++;
        continue;
      }

      const info = await sharp(buffer)
        .resize({ width: 600, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(outputPath);

      console.log(`✓ ${(info.size / 1024).toFixed(1)} KB ` +
        `(${info.width}×${info.height})`);
      success++;
    } catch (err) {
      console.log(`✗ ${err.message}`);
      failed++;
    }

    // 3s delay between requests
    if (i < replacements.length - 1) {
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  console.log(`\n=== RESULTS ===`);
  console.log(`Success: ${success}, Failed: ${failed}`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
