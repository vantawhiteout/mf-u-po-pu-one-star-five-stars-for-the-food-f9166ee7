// SPDX-License-Identifier: MIT
// One-sentence alien review of Earth: one star, five stars for the food.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star for Earth: you record strangers laughing so others know when to laugh; I have no laugh organ, but your roast chicken made me try.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
