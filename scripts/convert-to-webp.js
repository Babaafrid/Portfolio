import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = new URL("../src/assets", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

// Only convert large project/cert screenshots, not logos/photos with unique formats
const SKIP = new Set(["logo.png", "baba.jpg", "Resume.pdf"]);

const files = await readdir(ASSETS_DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
  if (SKIP.has(file)) continue;

  const src  = join(ASSETS_DIR, file);
  const dest = join(ASSETS_DIR, basename(file, ext) + ".webp");

  await sharp(src)
    .webp({ quality: 82 })
    .toFile(dest);

  console.log(`✓ ${file} → ${basename(file, ext)}.webp`);
}

console.log("\nDone! Original PNG/JPG files kept as fallback.");
