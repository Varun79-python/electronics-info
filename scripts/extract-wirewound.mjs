// Extract bas64 from evaluate_script output and save as wirewound-resistor.webp
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIR = 'C:/resistor/electronics-hub/public/images/components';
const rawFile = 'C:/Users/venka/.local/share/opencode/tool-output/tool_f6c071169001lceeFVaB6jHkbp';

const content = fs.readFileSync(rawFile, 'utf8').trim();

// The response is JSON like: {"format":"text","result":"base64data"}
// Or it might just be the base64 string itself
let b64;
try {
  const parsed = JSON.parse(content);
  if (parsed.result) {
    b64 = parsed.result;
  } else if (typeof parsed === 'string') {
    b64 = parsed;
  }
} catch (e) {
  // Maybe it's just the raw string
  b64 = content.replace(/^"|"$/g, '');
}

if (!b64 || b64.length < 100) {
  console.error(`Found string too short: ${b64?.substring(0, 50)}... (${b64?.length} chars)`);
  process.exit(1);
}

console.log(`Base64 length: ${b64.length} chars`);
const buf = Buffer.from(b64, 'base64');
console.log(`Decoded: ${buf.length} bytes`);

// Check WebP header
const header = buf.slice(0, 4).toString();
console.log(`Header: ${header}`);

const tmp = 'C:/Users/venka/AppData/Local/Temp/wirewound_canvas.webp';
fs.writeFileSync(tmp, buf);

const meta = await sharp(tmp).metadata();
console.log(`Dimensions: ${meta.width}x${meta.height}`);

const w = Math.min(meta.width, 600);
await sharp(tmp)
  .resize(w, null, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(path.join(DIR, 'wirewound-resistor.webp'));

const final = await sharp(path.join(DIR, 'wirewound-resistor.webp')).metadata();
const stat = fs.statSync(path.join(DIR, 'wirewound-resistor.webp'));
console.log(`Saved: ${final.width}x${final.height}, ${stat.size} bytes`);
fs.unlinkSync(tmp);
