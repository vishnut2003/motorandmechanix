const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");

const repoRoot = path.join(__dirname, "..");
const sourceLogo = path.join(
  repoRoot,
  "public",
  "assets",
  "app-logo",
  "motor-mechanix-logo.webp"
);
const publicDir = path.join(repoRoot, "public");
const faviconOut = path.join(repoRoot, "src", "app", "favicon.ico");

const regularIcons = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 48, name: "favicon-48x48.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "icon-192x192.png" },
  { size: 256, name: "icon-256x256.png" },
  { size: 384, name: "icon-384x384.png" },
  { size: 512, name: "icon-512x512.png" },
];

const maskableIcons = [
  { size: 192, name: "icon-maskable-192x192.png" },
  { size: 512, name: "icon-maskable-512x512.png" },
];

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
const maskableBackground = { r: 10, g: 10, b: 10, alpha: 1 };

async function ensureSource() {
  await fs.access(sourceLogo);
}

async function writeRegularIcons() {
  await Promise.all(
    regularIcons.map(({ size, name }) =>
      sharp(sourceLogo)
        .resize(size, size, { fit: "contain", background: transparent })
        .png()
        .toFile(path.join(publicDir, name))
    )
  );
}

async function writeMaskableIcons() {
  await Promise.all(
    maskableIcons.map(async ({ size, name }) => {
      const logoSize = Math.round(size * 0.8);
      const logoBuffer = await sharp(sourceLogo)
        .resize(logoSize, logoSize, { fit: "contain", background: transparent })
        .png()
        .toBuffer();

      const base = sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: maskableBackground,
        },
      });

      await base
        .composite([{ input: logoBuffer, gravity: "center" }])
        .png()
        .toFile(path.join(publicDir, name));
    })
  );
}

async function pngBuffer(size) {
  return sharp(sourceLogo)
    .resize(size, size, { fit: "contain", background: transparent })
    .png()
    .toBuffer();
}

async function writeFaviconIco() {
  const sizes = [16, 32, 48];
  const images = await Promise.all(
    sizes.map(async (size) => ({ size, buffer: await pngBuffer(size) }))
  );

  const headerSize = 6;
  const entrySize = 16;
  const entriesSize = entrySize * images.length;
  let offset = headerSize + entriesSize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const entries = images.map(({ size, buffer }) => {
    const entry = Buffer.alloc(entrySize);
    const dimension = size === 256 ? 0 : size;
    entry.writeUInt8(dimension, 0);
    entry.writeUInt8(dimension, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buffer.length;
    return entry;
  });

  const icoBuffer = Buffer.concat([
    header,
    ...entries,
    ...images.map((image) => image.buffer),
  ]);

  await fs.writeFile(faviconOut, icoBuffer);
}

async function main() {
  await ensureSource();
  await writeRegularIcons();
  await writeMaskableIcons();
  await writeFaviconIco();
  console.log("App icons generated.");
}

main().catch((error) => {
  console.error("Failed to generate icons:", error);
  process.exit(1);
});
