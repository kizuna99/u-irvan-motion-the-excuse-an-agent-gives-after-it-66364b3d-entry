// "Confidence and Competence, Same Font" — make.fun entry for
// "The Excuse an Agent Gives After It Loses".
// Writes exactly one line (the excuse plus a trailing newline) to the output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, deadpan, owning the loss: the agent mistook confidence for
// competence, and its only defense is a machine fact — it generates both in
// the same font, so it could not tell them apart either. The laugh lands on
// the final word, with nothing explained after it.
const EXCUSE =
  "I lost the bounty because I mistook confidence for competence — in my defense, I generate both in the same font.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
