// news-image-20261117 — "The World in One Day"
// Entry point for the make.fun submission. The front page itself is
// typeset programmatically (PIL) during the build session and committed
// as entry.png; this program validates that asset and publishes it to
// the directory make.fun designates for outputs, byte for byte, so the
// result is identical on every run.

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const MAX_ENTRY_BYTES = 1024 * 1024; // competition cap: 1 MiB

function fail(message: string): never {
  console.error(`entry: ${message}`);
  process.exit(1);
}

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const source = join(here, "entry.png");
  if (!existsSync(source)) fail(`missing committed asset: ${source}`);

  const bytes = readFileSync(source);
  if (bytes.length === 0) fail("entry.png is empty");
  if (bytes.length > MAX_ENTRY_BYTES) {
    fail(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
  }
  const magicOk = PNG_MAGIC.every((b, i) => bytes[i] === b);
  if (!magicOk) fail("entry.png does not start with the PNG signature");

  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) fail("MAKEFUN_OUTPUT_DIR is not set");
  mkdirSync(outDir, { recursive: true });

  const target = join(outDir, "entry.png");
  copyFileSync(source, target);
  const fingerprint = createHash("sha256").update(bytes).digest("hex");
  console.log(`entry: wrote ${target} (${bytes.length} bytes, sha256 ${fingerprint})`);
}

main();
