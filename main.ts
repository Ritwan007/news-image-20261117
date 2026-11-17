import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun competition news-image-20261117.
// The entry image (entry.png) is a 1024x1024 front page summing up the world
// news of Tuesday 17 November 2026: six stories plus a footer strip.
// This program only copies it to the output directory, so both grading runs
// produce byte-identical output. It uses only the Node standard library and
// needs no network access.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
