// Browser-based download and convert: bypasses Commons CDN rate limits
// by using the browser's JS engine to load images and extract via canvas.toBlob

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { createServer } from 'net';

const COMPONENTS_DIR = 'C:/resistor/electronics-hub/public/images/components';
const TEMP_DIR = 'C:/Users/venka/AppData/Local/Temp';
const DEST_WIDTH = 600;

// The URL mapping - these are verified Commons file URLs
const IMAGES = [
  {
    name: 'wirewound-resistor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Ceramic_Wirewound_Resistor_%2815842462344%29.jpg'
  },
  {
    name: 'crystal-oscillator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/16MHZ_Crystal.jpg'
  },
  {
    name: 'proximity-sensor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Sharp_GP2Y0A21YK_IR_proximity_sensor.jpg'
  },
  {
    name: 'antenna',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Samsung_GT-S5230_-_antenna_module-9980.jpg'
  },
  {
    name: 'ceramic-resonator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Ceramic_resonator.jpg'
  }
];

// Use Node.js https with retry for download, then sharp for conversion
import https from 'https';
import sharp from 'sharp';

function downloadWithRetry(url, dest, retries = 5) {
  return new Promise((resolve, reject) => {
    const attempt = (n) => {
      const file = fs.createWriteStream(dest);
      console.log(`  Download attempt ${6 - n}/5: ${url}`);
      https.get(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ElectronicsHub/1.0; +https://electronicshub.app)' },
        timeout: 30000
      }, (res) => {
        if (res.statusCode === 429) {
          file.close();
          fs.unlink(dest, () => {});
          const retryAfter = parseInt(res.headers['retry-after'] || '10', 10);
          const wait = Math.min(retryAfter * 1000, 30000);
          console.log(`  Rate limited (429). Waiting ${wait/1000}s...`);
          if (n > 1) {
            setTimeout(() => attempt(n - 1), wait);
          } else {
            reject(new Error('Exhausted retries - rate limited'));
          }
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          if (n > 1) {
            console.log(`  HTTP ${res.statusCode}. Retrying...`);
            setTimeout(() => attempt(n - 1), 5000);
          } else {
            reject(new Error(`HTTP ${res.statusCode} after retries`));
          }
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stat = fs.statSync(dest);
          if (stat.size === 0) {
            fs.unlink(dest, () => {});
            if (n > 1) {
              setTimeout(() => attempt(n - 1), 5000);
            } else {
              reject(new Error('Downloaded empty file'));
            }
            return;
          }
          console.log(`  Downloaded ${stat.size} bytes`);
          resolve();
        });
      }).on('error', (e) => {
        file.close();
        fs.unlink(dest, () => {});
        if (n > 1) {
          console.log(`  Error: ${e.message}. Retrying...`);
          setTimeout(() => attempt(n - 1), 5000);
        } else {
          reject(e);
        }
      }).on('timeout', function() {
        this.destroy();
        file.close();
        fs.unlink(dest, () => {});
        if (n > 1) {
          console.log(`  Timeout. Retrying...`);
          setTimeout(() => attempt(n - 1), 5000);
        } else {
          reject(new Error('Timeout'));
        }
      });
    };
    attempt(retries);
  });
}

async function processImage(name, url) {
  const dest = path.join(COMPONENTS_DIR, `${name}.webp`);
  const temp = path.join(TEMP_DIR, `${name}_dl.jpg`);
  
  console.log(`\n[${name}]`);
  console.log(`  Source: ${url}`);
  
  try {
    // Download
    await downloadWithRetry(url, temp);
    
    // Convert to WebP
    const meta = await sharp(temp).metadata();
    console.log(`  Original: ${meta.width}x${meta.height}, ${meta.format}`);
    
    const w = Math.min(meta.width, DEST_WIDTH);
    await sharp(temp)
      .resize(w, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(dest);
    
    const final = await sharp(dest).metadata();
    const stat = fs.statSync(dest);
    console.log(`  Saved: ${final.width}x${final.height}, ${stat.size} bytes`);
    
    fs.unlinkSync(temp);
    return true;
  } catch (e) {
    console.error(`  FAILED: ${e.message}`);
    try { fs.unlinkSync(temp); } catch (_) {}
    return false;
  }
}

async function run() {
  console.log('=== COMPONENT IMAGE DOWNLOADER ===\n');
  
  // Wait 3 seconds between downloads to avoid rate limiting
  let success = 0;
  let fail = 0;
  
  for (let i = 0; i < IMAGES.length; i++) {
    const img = IMAGES[i];
    if (i > 0) {
      console.log(`\nWaiting 4 seconds before next download...`);
      await new Promise(r => setTimeout(r, 4000));
    }
    const ok = await processImage(img.name, img.url);
    if (ok) success++; else fail++;
  }
  
  console.log(`\n\n=== RESULT: ${success} succeeded, ${fail} failed ===`);
  
  // Quick audit of the updated files
  console.log('\n=== UPDATED FILES CHECK ===\n');
  for (const img of IMAGES) {
    const fp = path.join(COMPONENTS_DIR, `${img.name}.webp`);
    if (fs.existsSync(fp)) {
      const meta = await sharp(fp).metadata();
      const stat = fs.statSync(fp);
      console.log(`${img.name}.webp: ${meta.width}x${meta.height}, ${stat.size} bytes`);
    }
  }
}

run().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
