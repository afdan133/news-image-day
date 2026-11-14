// news-image-01: copy the final entry image to /output/entry.png
// Revision 2: honour MAKEFUN_OUTPUT_DIR (default "out") per kit rules.
import { mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(import.meta.dirname, "entry.png"), join(outDir, "entry.png"));
console.log(`wrote ${join(outDir, "entry.png")}`);
