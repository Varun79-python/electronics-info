/**
 * IMAGE REPLACEMENT SCRIPT — Premium Educational Image Library
 *
 * Replaces low-quality, diagram, or incorrect images with real photographs.
 * Sources: Wikimedia Commons (primary), multiple alternative URLs.
 *
 * Processing: resize max 600px wide → WebP quality 80
 *
 * Run: node "C:\Users\venka\AppData\Local\Temp\opencode\replace-images.mjs"
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'electronics-hub', 'public', 'images', 'components');
const UA = 'ElectronicsInfo/1.0 (educational project; electronics-info.vercel.app)';

// ===== REPLACEMENT MAP =====
// Each entry: { id, candidates: [{ url, desc }], chosenIndex }
const replacements = [
  // 1. WIREWOUND RESISTOR — currently same as resistor.webp (wrong!)
  {
    id: 'wirewound-resistor',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Ceramic_resistor_open.JPG',
        desc: 'Ceramic wirewound resistor cross-section — shows internal construction (educational!)' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Danotherm_HS50_power_resistor.jpg',
        desc: 'Danotherm HS50 aluminum-housed wire-wound power resistor' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Ceramic_Wirewound_Resistor_%2815842462344%29.jpg',
        desc: 'Ceramic Wirewound Resistor — external view' },
    ],
    chosenIndex: 2, // Ceramic Wirewound Resistor — best external view for recognition
  },

  // 2. CRYSTAL OSCILLATOR — currently diagram-like (0.195 uniqueness)
  {
    id: 'crystal-oscillator',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Quartz_crystal_oscillator_%28cropped%29.jpg',
        desc: 'Quartz crystal oscillator — metal can, clear photo' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/16MHZ_Crystal.jpg',
        desc: '16MHZ Crystal — current source, acceptable but small' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Crystal_oscillator_16MHz_HC-49S.jpg',
        desc: '16MHz HC-49S crystal oscillator — real photo' },
    ],
    chosenIndex: 0, // Quartz crystal oscillator (cropped) — best quality
  },

  // 3. LED — currently illustration-like (0.360)
  {
    id: 'led',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/5mm_LED_Light-emitting_diode_Yellow_1480274_5_6_HDR_Enhancer.jpg',
        desc: '5mm LED — ultra high-res HDR photo (6.98 MB original, 3,216×4,307)' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/RBG-LED.jpg',
        desc: 'RGB-LED — current source, acceptable' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/5mm_Red_LED.jpg',
        desc: '5mm Red LED — clear standard LED photo' },
    ],
    chosenIndex: 0, // HDR LED photo — best quality by far
  },

  // 4. REGISTER — currently diagram-like (0.215)
  {
    id: 'register',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/ICIC-DI16-X-K595-01_%2816235272118%29.jpg',
        desc: 'Shift register IC — current source, acceptable quality' },
    ],
    chosenIndex: 0, // Keep current — it's actually an IC photo, just compressed
  },

  // 5. PROXIMITY SENSOR — verify, was previously fixed
  {
    id: 'proximity-sensor',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Sharp_GP2Y0A21YK_IR_proximity_sensor.jpg',
        desc: 'Sharp GP2Y0A21YK IR proximity sensor — what students actually use' },
    ],
    chosenIndex: 0,
  },

  // 6. ANTENNA — small file, photo but compressed
  {
    id: 'antenna',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Antenne_UHF_%28cropped%29.jpg',
        desc: 'UHF antenna — clear outdoor antenna photo' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Samsung_GT-S5230_-_antenna_module-9980.jpg',
        desc: 'Samsung phone antenna module — internal antenna' },
    ],
    chosenIndex: 0, // UHF antenna — more recognizable
  },

  // 7. CERAMIC RESONATOR — low resolution (237×341 native)
  {
    id: 'ceramic-resonator',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Ceramic_resonator.jpg',
        desc: 'Ceramic resonator — standalone, higher res' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/A_16MHz_ceramic_resonator.jpg',
        desc: '16MHz ceramic resonator — current source' },
    ],
    chosenIndex: 0, // Better standalone ceramic resonator
  },

  // 8. VARACTOR DIODE — verify quality (0.707, good)
  {
    id: 'varactor-diode',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Varicap_Diodes.jpg',
        desc: 'Varicap diodes — current source, acceptable quality' },
    ],
    chosenIndex: 0, // Keep current — good quality photo
  },

  // 9. DECODER — verify quality (0.840, good)
  {
    id: 'decoder',
    candidates: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Tungsram_74154PC.jpg',
        desc: 'Tungsram 74154 decoder IC — current source, good quality' },
    ],
    chosenIndex: 0, // Keep current — good quality
  },
];

function sleep(ms) {
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
        console.log(`    Too small (${buffer.length} bytes)`);
      } else if (resp.status === 429) {
        const wait = Math.min(attempt * 8000, 40000);
        console.log(`    Rate limited (429), waiting ${wait / 1000}s...`);
        await sleep(wait);
      } else {
        throw new Error(`HTTP ${resp.status}`);
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log(`    Timeout, retry ${attempt}/${maxRetries}`);
      } else if (attempt === maxRetries) {
        throw err;
      } else {
        console.log(`    ${err.message}, retry ${attempt + 1}/${maxRetries}...`);
      }
      await sleep(attempt * 3000);
    }
  }
  throw new Error('Failed after max retries');
}

async function processImage(id, url, desc) {
  const outputPath = path.join(OUT_DIR, `${id}.webp`);
  console.log(`\n[${id}] ${desc}`);
  console.log(`  URL: ${url}`);

  try {
    const buffer = await downloadWithRetry(url);
    console.log(`  Downloaded: ${(buffer.length / 1024).toFixed(1)} KB`);

    // Convert to WebP: resize to max 600px wide, quality 80
    const result = await sharp(buffer)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(outputPath);

    console.log(`  ✓ Saved: ${(result.size / 1024).toFixed(1)} KB, ${result.width}×${result.height}`);
    return { success: true, size: result.size, width: result.width, height: result.height };
  } catch (err) {
    console.log(`  ✗ FAILED: ${err.message}`);
    return { success: false, error: err.message };
  }
}

async function runAudit() {
  console.log('\n\n═══════════════════════════════════');
  console.log('         FINAL AUDIT');
  console.log('═══════════════════════════════════\n');

  const files = fs.readdirSync(OUT_DIR).filter(f => f.endsWith('.webp'));
  let totalSize = 0;
  let smallFiles = [];
  let results = [];

  for (const f of files) {
    const fp = path.join(OUT_DIR, f);
    try {
      const stat = fs.statSync(fp);
      totalSize += stat.size;
      const meta = await sharp(fp).metadata();
      results.push({ file: f, width: meta.width, height: meta.height, size: stat.size });
      if (stat.size < 4096) smallFiles.push(`${f} (${stat.size} bytes, ${meta.width}×${meta.height})`);
    } catch (e) {
      results.push({ file: f, size: 0, error: e.message });
    }
  }

  results.sort((a, b) => a.size - b.size);

  console.log(`Total images: ${files.length}`);
  console.log(`Total size: ${(totalSize / 1024).toFixed(0)} KB`);
  console.log(`Average size: ${(totalSize / files.length / 1024).toFixed(1)} KB\n`);

  if (smallFiles.length) {
    console.log(`⚠ SMALL FILES (< 4 KB) — ${smallFiles.length}:`);
    for (const s of smallFiles) console.log(`   ${s}`);
  } else {
    console.log('✅ No files under 4 KB');
  }

  // Check for duplicates (same size AND dimensions)
  const sizeMap = {};
  for (const r of results) {
    const key = `${r.width}x${r.height}_${r.size}`;
    if (!sizeMap[key]) sizeMap[key] = [];
    sizeMap[key].push(r.file);
  }
  const dups = Object.entries(sizeMap).filter(([, v]) => v.length > 1);
  if (dups.length) {
    console.log(`\n⚠ POSSIBLE DUPLICATES:`);
    for (const [key, names] of dups) {
      console.log(`   ${names.join(', ')}`);
    }
  } else {
    console.log('✅ No suspicious duplicates');
  }

  return results;
}

async function main() {
  console.log('═══════════════════════════════════');
  console.log('  PREMIUM IMAGE REPLACEMENT');
  console.log('═══════════════════════════════════\n');

  // Process each replacement
  let success = 0;
  let failed = 0;
  const skipped = [];

  for (let i = 0; i < replacements.length; i++) {
    const { id, candidates, chosenIndex } = replacements[i];
    const chosen = candidates[chosenIndex];

    console.log(`\n─── [${i + 1}/${replacements.length}] ${id} ───`);

    // Try the chosen candidate first, then fall back through all candidates
    let processed = false;
    const ordered = [chosen, ...candidates.filter((_, idx) => idx !== chosenIndex)];

    for (const candidate of ordered) {
      const result = await processImage(id, candidate.url, candidate.desc);
      if (result.success) {
        processed = true;
        success++;
        break;
      }
      console.log(`  → Trying fallback URL...`);
      await sleep(2000);
    }

    if (!processed) {
      console.log(`  ✗ ALL CANDIDATES FAILED for ${id}`);
      failed++;
      skipped.push(id);
    }

    // Delay between replacements to respect rate limits
    if (i < replacements.length - 1) {
      const delay = 3000 + Math.random() * 2000;
      await sleep(delay);
    }
  }

  // Final audit
  const results = await runAudit();

  console.log(`\n\n═══════════════════════════════════`);
  console.log('         SUMMARY');
  console.log('═══════════════════════════════════');
  console.log(`Attempted: ${replacements.length}`);
  console.log(`✅ Success: ${success}`);
  console.log(`❌ Failed: ${failed}`);
  if (skipped.length) console.log(`Skipped: ${skipped.join(', ')}`);

  // Show before/after for replaced files
  console.log('\n\n─── Size Comparison (KB) ───');
  for (const r of results) {
    if (replacements.some(rep => `${rep.id}.webp` === r.file)) {
      console.log(`  ${r.file.padEnd(30)} ${String(r.width).padStart(4)}×${String(r.height).padStart(4)}  ${String((r.size / 1024).toFixed(1)).padStart(6)} KB`);
    }
  }
}

main().catch(console.error);
