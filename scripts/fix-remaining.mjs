/**
 * Fix remaining problematic images with verified working URLs.
 * Run from: electronics-hub directory
 * Usage: node scripts/fix-remaining.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OUT_DIR = 'C:/resistor/electronics-hub/public/images/components';
const UA = 'ElectronicsInfo/1.0 (educational project)';

const jobs = [
  // crystal-oscillator: Crystal oscillator 16MHz standalone photo (738 KB original)
  {
    id: 'crystal-oscillator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Crystal_oscillator_16MHz.jpg',
    desc: '16MHz crystal oscillator — standalone photo (1,500×1,000, 738 KB original)',
  },
  // led: 5mm LEDs in different colors (real photograph)
  {
    id: 'led',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/5mm_LED_Light-emitting_diode_Yellow_1480274_5_6_HDR_Enhancer.jpg',
    desc: '5mm LED — high-resolution HDR photograph (6.98 MB original)',
  },
  // proximity-sensor: Sharp GP2Y0A21YK IR sensor
  {
    id: 'proximity-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Sharp_GP2Y0A21YK_IR_proximity_sensor_cropped.jpg',
    desc: 'Sharp GP2Y0A21YK IR proximity sensor — what students use',
  },
  // antenna: UHF antenna
  {
    id: 'antenna',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Antenne_UHF_%28cropped%29.jpg',
    desc: 'UHF antenna — cropped, clear photo',
  },
];

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function download(url) {
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const buf = Buffer.from(await resp.arrayBuffer());
  if (buf.length <= 2000) throw new Error(`Too small (${buf.length} bytes)`);
  return buf;
}

async function main() {
  console.log('=== Fix Remaining Images ===\n');

  let ok = 0, fail = 0;

  for (let i = 0; i < jobs.length; i++) {
    const { id, url, desc } = jobs[i];
    const out = path.join(OUT_DIR, `${id}.webp`);
    process.stdout.write(`[${i+1}/${jobs.length}] ${id} — ${desc}... `);

    try {
      const buf = await download(url);
      process.stdout.write(`(${(buf.length/1024).toFixed(0)} KB raw) `);
      const result = await sharp(buf)
        .resize({ width: 600, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(out);
      console.log(`✓ ${result.width}×${result.height}, ${(result.size/1024).toFixed(1)} KB`);
      ok++;
    } catch (e) {
      console.log(`✗ ${e.message}`);
      fail++;
    }

    if (i < jobs.length - 1) await sleep(2500 + Math.random() * 1500);
  }

  console.log(`\nDone: ${ok} OK, ${fail} failed`);

  // Final check
  console.log('\n=== Final Check ===');
  for (const j of jobs) {
    const fp = path.join(OUT_DIR, `${j.id}.webp`);
    const s = fs.statSync(fp);
    const m = await sharp(fp).metadata();
    console.log(`${j.id}.webp`.padEnd(35) + `${s.size} bytes`.padStart(10) + `  ${m.width}×${m.height}`);
  }
}

main().catch(console.error);
