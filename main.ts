import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun news-image-20261117 (v2): the image is composed
// in-session and committed as entry.png; this program copies it, verified,
// to the output directory. It runs with no network, stdlib only.
const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, "entry.png");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const OUT = join(OUT_DIR, "entry.png");
const MAX_BYTES = 1048576;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const buf = readFileSync(SRC);
if (buf.length === 0 || buf.length > MAX_BYTES) {
  throw new Error(`entry.png is ${buf.length} bytes; must be 1..${MAX_BYTES}`);
}
if (!buf.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG (bad magic bytes)");
}
// IHDR: width/height are big-endian uint32 at offsets 16 and 20.
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width === 0 || width > 1024 || height === 0 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}; at most 1024x1024`);
}
mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SRC, OUT);
const written = statSync(OUT).size;
if (written !== buf.length) {
  throw new Error(`copy mismatch: wrote ${written}, expected ${buf.length}`);
}
// Re-read the copy and confirm it is byte-identical to the source.
const back = readFileSync(OUT);
if (!back.equals(buf)) {
  throw new Error("output copy differs from entry.png");
}
const sha = createHash("sha256").update(buf).digest("hex");
console.log(`entry.png ${width}x${height} ${buf.length} bytes sha256=${sha}`);
