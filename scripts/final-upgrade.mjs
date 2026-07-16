// Final upgrade script for 5 images with retry + delay for Commons rate limit
import sharp from 'sharp';
import fs from 'fs';
import https from 'https';
import path from 'path';

const DIR = 'C:/resistor/electronics-hub/public/images/components';
const TMP = 'C:/Users/venka/AppData/Local/Temp';
const QUALITY = 80;
const MAX_W = 600;
const RETRIES = 5;

function dl(url, dest) {
  return new Promise((resolve, reject) => {
    const f = fs.createWriteStream(dest);
    const u = new URL(url);
    const req = https.get({
      hostname: u.hostname, path: u.pathname + (u.search || ''),
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      timeout: 30000
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        f.close(); fs.unlink(dest, () => {});
        return dl(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
      res.pipe(f);
      f.on('finish', () => { f.close(); resolve(); });
    });
    req.on('error', e => { fs.unlink(dest, () => {}); reject(e); });
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function downloadRetry(url, dest, label) {
  for (let i = 1; i <= RETRIES; i++) {
    try {
      await dl(url, dest);
      const s = fs.statSync(dest);
      if (s.size === 0) throw new Error('Empty file');
      return s.size;
    } catch (e) {
      if (i < RETRIES) {
        const d = Math.pow(2, i) * 3000 + Math.random() * 2000;
        console.log(`  [${label}] attempt ${i} failed: ${e.message}, retry in ${Math.round(d/1000)}s`);
        try { fs.unlinkSync(dest); } catch (_) {}
        await sleep(d);
      } else throw e;
    }
  }
}

async function replace(name, url, label) {
  console.log(`\n[${label}] Starting...`);
  const out = path.join(DIR, `${name}.webp`);
  const ext = path.extname(new URL(url).pathname) || '.jpg';
  const tmp = path.join(TMP, `${name}${ext}`);
  try {
    const size = await downloadRetry(url, tmp, label);
    console.log(`  Downloaded ${size}B`);
    const meta = await sharp(tmp).metadata();
    const w = Math.min(meta.width, MAX_W);
    const r = await sharp(tmp).resize(w, null, { fit: 'inside', withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
    console.log(`  Saved: ${r.size}B, ${r.width}x${r.height}`);
    try { fs.unlinkSync(tmp); } catch (_) {}
  } catch (e) {
    console.error(`  FAILED: ${e.message}`);
    try { fs.unlinkSync(tmp); } catch (_) {}
  }
}

async function audit() {
  console.log('\n=== AUDIT ===');
  const files = fs.readdirSync(DIR).filter(f => f.endsWith('.webp'));
  console.log(`Count: ${files.length}`);
  let total = 0, small = [];
  for (const f of files) {
    const fp = path.join(DIR, f);
    const s = fs.statSync(fp);
    total += s.size;
    if (s.size < 4096) small.push(`${f} (${s.size}B)`);
  }
  console.log(`Total: ${(total/1024).toFixed(0)} KB, Avg: ${(total/files.length/1024).toFixed(1)} KB`);
  if (small.length) console.log(`Small (<4KB): ${small.join(', ')}`);
  else console.log('No files <4KB');
}

const JOBS = [
  { n: 'wirewound-resistor', u: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Ceramic_Wirewound_Resistor_%2815842462344%29.jpg' },
  { n: 'crystal-oscillator', u: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/16MHZ_Crystal.jpg' },
  { n: 'proximity-sensor', u: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Sharp_GP2Y0A21YK_IR_proximity_sensor.jpg' },
  { n: 'antenna', u: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Samsung_GT-S5230_-_antenna_module-9980.jpg' },
  { n: 'ceramic-resonator', u: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Ceramic_resonator.jpg' }
];

for (let i = 0; i < JOBS.length; i++) {
  await replace(JOBS[i].n, JOBS[i].u, JOBS[i].n);
  if (i < JOBS.length - 1) await sleep(4000);
}

await audit();
