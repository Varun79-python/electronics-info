// Save canvas-extracted base64 data from most recent tool output files
// as WebP images at 600px width, quality 80

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIR = 'C:/resistor/electronics-hub/public/images/components';
const toolDir = 'C:/Users/venka/.local/share/opencode/tool-output';

// Map each image to its tool output file (by modification time order)
// We need to identify which file belongs to which image

function findImageFiles() {
  const files = fs.readdirSync(toolDir)
    .filter(f => f.startsWith('tool_'))
    .map(f => ({
      name: f,
      path: path.join(toolDir, f),
      mtime: fs.statSync(path.join(toolDir, f)).mtimeMs
    }))
    .sort((a, b) => b.mtime - a.mtime);

  console.log(`Found ${files.length} tool output files`);
  
  // Print the 10 most recent with their content start
  console.log('\nMost recent files:');
  for (let i = 0; i < Math.min(10, files.length); i++) {
    const f = files[i];
    const content = fs.readFileSync(f.path, 'utf8').trim();
    const first100 = content.substring(0, 100);
    const hasWebP = content.startsWith('"UklGR');
    console.log(`[${i}] ${f.name} (${(content.length/1024).toFixed(1)}KB) ${hasWebP ? 'WebP!' : ''} start=${first100.substring(0, 60)}`);
  }
  
  return files;
}

function extractData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8').trim();
  // Format: either JSON {"format":"text","result":"BASE64"} or just raw "BASE64"
  let b64;
  try {
    const parsed = JSON.parse(content);
    if (parsed.result) {
      b64 = parsed.result;
    } else if (typeof parsed === 'string') {
      b64 = parsed;
    }
  } catch {
    // Raw string
    b64 = content.replace(/^"|"$/g, '');
  }
  return b64;
}

// Banner
console.log('=== Save All Canvas-Extracted Images ===\n');

const files = findImageFiles();

// Get the top webp-containing files (should be our canvas extracts)
const webpFiles = files.filter(f => {
  const content = fs.readFileSync(f.path, 'utf8').trim();
  return content.startsWith('"UklGR');
});

console.log(`\nFound ${webpFiles.length} WebP data files`);

if (webpFiles.length === 0) {
  console.error('No WebP data found in tool output files!');
  process.exit(1);
}

// sort by newest, take top 3
webpFiles.sort((a, b) => b.mtime - a.mtime);
const candidates = webpFiles.slice(0, 10);

console.log(`\nProcessing ${candidates.length} candidates...`);

const images = [
  { name: 'proximity-sensor', kw: 'proximity' },
  { name: 'antenna', kw: 'antenna' },
  { name: 'ceramic-resonator', kw: 'Ceramic' },
  { name: 'wirewound-resistor', kw: 'wirewound' },
  { name: 'crystal-oscillator', kw: 'crystal' },
];

async function processImage(imageInfo, filePath) {
  const b64 = extractData(filePath);
  if (!b64 || b64.length < 100) {
    console.log(`  Skipping: data too short (${b64?.length} chars)`);
    return false;
  }
  console.log(`  Base64: ${b64.length} chars`);
  
  const buf = Buffer.from(b64, 'base64');
  console.log(`  Decoded: ${buf.length} bytes`);
  
  const header = buf.slice(0, 4).toString();
  console.log(`  Header: ${header}`);
  
  if (header !== 'RIFF') {
    console.log(`  Not a valid WebP, skipping`);
    return false;
  }
  
  const tmp = `C:/Users/venka/AppData/Local/Temp/${imageInfo.name}_canvas.webp`;
  fs.writeFileSync(tmp, buf);
  
  const meta = await sharp(tmp).metadata();
  console.log(`  Dimensions: ${meta.width}x${meta.height}`);
  
  const w = Math.min(meta.width, 600);
  await sharp(tmp)
    .resize(w, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(DIR, `${imageInfo.name}.webp`));
  
  const final = await sharp(path.join(DIR, `${imageInfo.name}.webp`)).metadata();
  const stat = fs.statSync(path.join(DIR, `${imageInfo.name}.webp`));
  console.log(`  Saved: ${final.width}x${final.height}, ${stat.size} bytes`);
  fs.unlinkSync(tmp);
  return true;
}

// Try each webp file for each image and see what sticks
// The files are in order of newest first.
// From the conversation context:
// - wirewound-resistor was saved already, skip
// - ceramic-resonator (758×404 source) → 600×320 sharp (VwIAPwE = 600x320)
// - antenna (5138×2890 source) → 600×338 at Q80 (VwIAUAE = 600x368)
// - proximity-sensor (3263×2175 source) → 600×400 (VwIAjwE = 600x399)
// We need to identify which file goes with which image by the base64 header

console.log('\n=== Classifying images by header ===\n');

for (const f of candidates) {
  const b64 = extractData(f.path);
  const buf = Buffer.from(b64, 'base64');
  // Get width from WebP header
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  // VP8X or VP8L or VP8  
  // For VP8 (lossy): width is at offset 0x1A, 2 bytes little-endian + 1? No...
  // Actually WebP lossy format: after 'VP8 ' header: 0x1A-0x1B = width (little-endian + 1)
  // This is messy. Let me just try processing each file.

  // Instead, let me just read the raw text to identify
  const text = b64.substring(0, 60);
  console.log(`File ${f.name}: ${text.substring(0, 50)}...`);
}

// Process all 3 pending images by trying each file
const pending = ['proximity-sensor', 'antenna', 'ceramic-resonator'];
const processed = [];

for (const imgName of pending) {
  console.log(`\n=== Processing ${imgName} ===`);
  let success = false;
  for (const f of candidates) {
    if (processed.includes(f.name)) continue;
    if (success) break;
    console.log(`  Trying file: ${f.name}`);
    try {
      const ok = await processImage({ name: imgName }, f.path);
      if (ok) {
        processed.push(f.name);
        success = true;
        console.log(`  ✓ ${imgName} saved successfully from ${f.name}`);
      }
    } catch (e) {
      console.log(`  ✗ ${e.message}`);
    }
  }
  if (!success) {
    console.log(`  ✗ Could not save ${imgName}`);
  }
}

console.log('\n=== Done ===');
