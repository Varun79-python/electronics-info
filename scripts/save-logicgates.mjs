import sharp from 'sharp';
import fs from 'fs';
import https from 'https';

const srcUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/LogicGates.svg/960px-LogicGates.svg.png';
const destPath = 'C:/resistor/electronics-hub/public/images/components/logic-gates.webp';
const tempPng = 'C:/Users/venka/AppData/Local/Temp/lg_download.png';

console.log('Downloading from:', srcUrl);

// Download function
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (e) => { fs.unlink(dest, () => {}); reject(e); });
  });
}

try {
  await download(srcUrl, tempPng);
  const stats = fs.statSync(tempPng);
  console.log('Downloaded:', stats.size, 'bytes');

  await sharp(tempPng)
    .resize(960, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(destPath);

  fs.unlinkSync(tempPng);
  const finalStats = fs.statSync(destPath);
  console.log('Saved:', destPath, '–', finalStats.size, 'bytes');

  const meta = await sharp(destPath).metadata();
  console.log('Dimensions:', meta.width, 'x', meta.height);
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}
