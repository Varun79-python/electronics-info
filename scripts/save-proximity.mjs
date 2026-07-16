// Save proximity-sensor from canvas extraction result
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIR = 'C:/resistor/electronics-hub/public/images/components';
const DIR_TMP = 'C:/Users/venka/AppData/Local/Temp';

// Find the latest tool output file
const toolDir = 'C:/Users/venka/.local/share/opencode/tool-output';
const files = fs.readdirSync(toolDir).filter(f => f.startsWith('tool_')).sort();
const latest = files[files.length - 1];
console.log(`Using: ${latest}`);
const raw = fs.readFileSync(path.join(toolDir, latest), 'utf8').trim();
const b64 = raw.replace(/^"|"$/g, '');
const buf = Buffer.from(b64, 'base64');
console.log(`Proximity sensor: ${buf.length} bytes, header: ${buf.slice(0,4).toString()}`);

const tmp = path.join(DIR_TMP, 'proximity_sensor_canvas.webp');
fs.writeFileSync(tmp, buf);
const meta = await sharp(tmp).metadata();
console.log(`Dimensions: ${meta.width}x${meta.height}`);

const w = Math.min(meta.width, 600);
await sharp(tmp)
  .resize(w, null, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(path.join(DIR, 'proximity-sensor.webp'));
const final = await sharp(path.join(DIR, 'proximity-sensor.webp')).metadata();
const stat = fs.statSync(path.join(DIR, 'proximity-sensor.webp'));
console.log(`Saved: ${final.width}x${final.height}, ${stat.size} bytes`);
try { fs.unlinkSync(tmp); } catch (_) {}
