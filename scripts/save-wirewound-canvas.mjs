import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIR = 'C:/resistor/electronics-hub/public/images/components';

// Read the output file from the canvas extraction
const text = fs.readFileSync('C:/Users/venka/.local/share/opencode/tool-output/tool_f6c071169001lceeFVaB6jHkbp', 'utf8').trim();

// Find base64 data - it should be after "result:"
const resultMatch = text.match(/"result"\s*:\s*"([A-Za-z0-9+/=]+)"/);
if (!resultMatch) {
  console.error('Could not find base64 result in the output');
  process.exit(1);
}

const base64 = resultMatch[1];
const buf = Buffer.from(base64, 'base64');
const tmp = 'C:/Users/venka/AppData/Local/Temp/wirewound_canvas.webp';
fs.writeFileSync(tmp, buf);

const meta = await sharp(tmp).metadata();
console.log(`Canvas extracted: ${meta.width}x${meta.height}, ${buf.length} bytes`);

const w = Math.min(meta.width, 600);
await sharp(tmp)
  .resize(w, null, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(path.join(DIR, 'wirewound-resistor.webp'));

const final = await sharp(path.join(DIR, 'wirewound-resistor.webp')).metadata();
const stat = fs.statSync(path.join(DIR, 'wirewound-resistor.webp'));
console.log(`Saved: ${final.width}x${final.height}, ${stat.size} bytes`);
fs.unlinkSync(tmp);
