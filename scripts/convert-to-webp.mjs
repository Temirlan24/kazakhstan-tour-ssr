import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function walk(dir, re) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(p, re));
    else if (re.test(entry.name)) out.push(p);
  }
  return out;
}

let totalBefore = 0;
let totalAfter = 0;

async function convertPhoto(file) {
  const before = (await fs.stat(file)).size;
  const out = file.replace(/\.(jpe?g)$/i, '.webp');
  await sharp(file)
    .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 75, effort: 6 })
    .toFile(out);
  const after = (await fs.stat(out)).size;
  await fs.unlink(file);
  totalBefore += before;
  totalAfter += after;
  console.log(`${file} -> ${out}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}

async function convertLogo(file) {
  const before = (await fs.stat(file)).size;
  const out = file.replace(/\.png$/i, '.webp');
  await sharp(file).webp({ quality: 90 }).toFile(out);
  const after = (await fs.stat(out)).size;
  await fs.unlink(file);
  totalBefore += before;
  totalAfter += after;
  console.log(`${file} -> ${out}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}

const jpgs = await walk('public/assets', /\.(jpe?g)$/i);
for (const f of jpgs) await convertPhoto(f);

await convertLogo('public/main_logo.png');

console.log('---');
console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB  (${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}% smaller)`);
