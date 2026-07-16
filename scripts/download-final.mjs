// Download images via fetch with retry logic and delays to avoid CDN rate limits
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIR = 'C:/resistor/electronics-hub/public/images/components';

const images = [
  { name: 'antenna', url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Samsung_GT-S5230_-_antenna_module-9980.jpg' },
  { name: 'ceramic-resonator', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Ceramic_resonator.jpg' },
  { name: 'proximity-sensor', url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Sharp_GP2Y0A21YK_IR_proximity_sensor.jpg' },
  { name: 'crystal-oscillator', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/16MHZ_Crystal.jpg' },
];

async function downloadWithRetry(url, retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      const resp = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'Accept': 'image/webp,image/jpeg,image/*,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Referer': 'https://commons.wikimedia.org/',
        }
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const buf = Buffer.from(await resp.arrayBuffer());
      console.log(`  Downloaded: ${buf.length} bytes`);
      return buf;
    } catch (e) {
      console.log(`  Attempt ${i+1}/${retries} failed: ${e.message}`);
      if (i < retries - 1) {
        const delay = 2000 * (i + 1);
        console.log(`  Waiting ${delay}ms before retry...`);
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  throw new Error(`Failed after ${retries} retries`);
}

async function processImage(info) {
  console.log(`\n=== Processing ${info.name} ===`);
  const srcPath = `C:/Users/venka/AppData/Local/Temp/src_${info.name}.jpg`;
  const dstPath = path.join(DIR, `${info.name}.webp`);

  // Download the source JPEG
  try {
    const buf = await downloadWithRetry(info.url);
    fs.writeFileSync(srcPath, buf);
  } catch (e) {
    console.log(`  ✗ Download failed: ${e.message}`);
    return false;
  }

  // Convert to WebP at 600px width
  try {
    const meta = await sharp(srcPath).metadata();
    console.log(`  Source: ${meta.width}x${meta.height}`);

    const w = Math.min(meta.width, 600);
    await sharp(srcPath)
      .resize(w, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(dstPath);

    const final = await sharp(dstPath).metadata();
    const stat = fs.statSync(dstPath);
    console.log(`  Saved: ${final.width}x${final.height}, ${stat.size} bytes`);
    fs.unlinkSync(srcPath);
    return true;
  } catch (e) {
    console.log(`  ✗ Conversion failed: ${e.message}`);
    try { fs.unlinkSync(srcPath); } catch {}
    return false;
  }
}

async function main() {
  console.log('=== Download Remaining Images ===\n');
  for (const img of images) {
    const ok = await processImage(img);
    console.log(`  ${ok ? '✓' : '✗'} ${img.name}`);
    // Delay between downloads to avoid rate limiting
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log('\n=== Done ===');
}

main().catch(console.error);
