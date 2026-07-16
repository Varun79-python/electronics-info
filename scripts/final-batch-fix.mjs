// Final batch fix script: wirewound-resistor, low-quality upgrades, audit, report
import sharp from 'sharp';
import fs from 'fs';
import https from 'https';
import path from 'path';

const COMPONENTS_DIR = 'C:/resistor/electronics-hub/public/images/components';
const DEST_SIZE = 600; // Max width 600px

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { 
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      timeout: 15000
    }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (e) => { fs.unlink(dest, () => {}); reject(e); })
     .on('timeout', function() { this.destroy(); reject(new Error('Timeout')); });
  });
}

async function convertToWebp(src, dest, maxWidth = DEST_SIZE) {
  const meta = await sharp(src).metadata();
  const w = Math.min(meta.width, maxWidth);
  await sharp(src)
    .resize(w, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(dest);
}

async function replaceImage(name, url) {
  const dest = path.join(COMPONENTS_DIR, `${name}.webp`);
  const temp = `C:/Users/venka/AppData/Local/Temp/${name}_dl`;
  const ext = path.extname(new URL(url).pathname) || '.jpg';
  const tempFile = temp + ext;

  console.log(`\n[${name}] Downloading: ${url}`);
  try {
    await download(url, tempFile);
    const stats = fs.statSync(tempFile);
    console.log(`[${name}] Downloaded ${stats.size} bytes`);

    await convertToWebp(tempFile, dest);
    const finalStats = fs.statSync(dest);
    const meta = await sharp(dest).metadata();
    console.log(`[${name}] Saved: ${finalStats.size} bytes, ${meta.width}x${meta.height}`);

    fs.unlinkSync(tempFile);
    return true;
  } catch (e) {
    console.error(`[${name}] FAILED: ${e.message}`);
    try { fs.unlinkSync(tempFile); } catch (_) {}
    return false;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('=== FINAL BATCH FIX ===\n');

  // 1. Wirewound resistor - dedicated ceramic wirewound photo
  const wirewoundUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Ceramic_Wirewound_Resistor_%2815842462344%29.jpg';
  await replaceImage('wirewound-resistor', wirewoundUrl);
  await sleep(2000);

  // 2. Low-quality image upgrades
  // crystal-oscillator: Quartz crystal oscillator can
  const upgrades = [
    {
      name: 'crystal-oscillator',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Quartz_crystal_oscillator_%28cropped%29.jpg'
    },
    {
      name: 'antenna',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Antenne_UHF_%28cropped%29.jpg'
    }
  ];

  for (const up of upgrades) {
    await replaceImage(up.name, up.url);
    await sleep(2000);
  }

  // 3. Run audit
  console.log('\n\n=== FINAL AUDIT ===\n');
  const files = fs.readdirSync(COMPONENTS_DIR).filter(f => f.endsWith('.webp'));
  console.log(`Total images: ${files.length}`);

  let totalSize = 0;
  let smallFiles = [];
  let largeFiles = [];
  let dims = [];

  for (const f of files) {
    const fp = path.join(COMPONENTS_DIR, f);
    const stat = fs.statSync(fp);
    totalSize += stat.size;
    const meta = await sharp(fp).metadata();
    dims.push({ file: f, width: meta.width, height: meta.height, size: stat.size });

    if (stat.size < 4096) smallFiles.push(`${f} (${stat.size} bytes)`);
    if (stat.size > 150 * 1024) largeFiles.push(`${f} (${Math.round(stat.size/1024)} KB)`);
  }

  console.log(`Total size: ${(totalSize / 1024).toFixed(0)} KB`);
  console.log(`Average size: ${(totalSize / files.length / 1024).toFixed(1)} KB`);
  
  if (smallFiles.length) console.log(`\n⚠ Small files (<4 KB):\n  ${smallFiles.join('\n  ')}`);
  else console.log(`\n✓ No files under 4 KB`);

  if (largeFiles.length) console.log(`\n⚠ Large files (>150 KB):\n  ${largeFiles.join('\n  ')}`);
  else console.log(`✓ No files over 150 KB`);

  // Check for duplicate-sized files
  const sizeMap = {};
  for (const d of dims) {
    const key = `${d.width}x${d.height}_${d.size}`;
    if (!sizeMap[key]) sizeMap[key] = [];
    sizeMap[key].push(d.file);
  }
  const duplicates = Object.entries(sizeMap).filter(([k, v]) => v.length > 1);
  if (duplicates.length) {
    console.log('\n⚠ Possible duplicates (same dimensions & size):');
    for (const [key, names] of duplicates) {
      console.log(`  ${names.join(', ')}`);
    }
  } else {
    console.log('✓ No suspicious duplicates');
  }

  // 4. Print summary
  console.log('\n\n=== IMAGE SUMMARY ===\n');
  dims.sort((a, b) => a.size - b.size);
  for (const d of dims) {
    console.log(`${d.file.padEnd(30)} ${String(d.width).padStart(4)}x${String(d.height).padStart(4)}  ${String(d.size).padStart(7)} bytes`);
  }
}

run().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
