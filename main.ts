// Entry: delete "irregardless" from the dictionary.
//
// Why this word is funny to delete: "irregardless" is a word that only
// exists because people keep using it wrong — it mashes "irrespective"
// and "regardless" into a double negative that, taken literally, means
// the opposite of what the speaker intends. Dictionaries only list it
// with a sigh, marked "nonstandard". Erasing it would instantly make
// every sentence that used it more correct, and nobody who loves the
// language would miss it for a second — except the people who say it,
// who would finally have to pick a real word. The joke lands the moment
// you read it: a word so wrong that deleting it is the only edit it
// ever needed.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "irregardless";

// Guard: the entry must be exactly one alphabetic word — no spaces,
// punctuation, or other characters — or the sealed gate rejects it.
// Fail loudly here instead of writing an invalid entry.
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
