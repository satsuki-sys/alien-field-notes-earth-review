// Alien Field Notes: The Two Day Earth Review
// Writes one line — an alien tourist's review of planet Earth —
// to /output/entry.txt (gate: 1-200 chars, UTF-8, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Earth review: gorgeous planet, but the natives queue politely for everything — including their own extinction. 4/5 stars, would recommend to my enemies.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} chars to /output/entry.txt`);
