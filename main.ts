// A GTA 6 meme entry for make.fun's gta6-meme-x-01 bounty.
// This program is deliberately tiny: it only copies POST.json from this repo
// into /output, where the gate reads it. The entry itself is the post on X —
// a two-panel meme, live from @Droperss7, whose address POST.json holds.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the output folder exists, then hand the gate the post address.
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
